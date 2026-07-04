// /api/engpass — Österreichisches BASG Vertriebseinschränkungsregister (ECHTE DATEN)
//
// Quelle: BASG bietet seit 10.12.2020 das Register maschinenlesbar an (XML, täglich
// 00:00–04:00 aktualisiert) plus zwei API-Pilotendpoints ohne Authentifizierung.
// Portal: https://medicineshortage.basg.gv.at/vertriebseinschraenkungen
// Doku:   https://www.basg.gv.at/fuer-unternehmen/datenbereitstellung-vertriebseinschraenkungen
//
// Strategie: Wir probieren mehrere dokumentierte Endpoints der Reihe nach.
// Der erste, der verwertbare Daten liefert, gewinnt. Antwort enthält IMMER das
// Feld `source`, damit das Frontend ehrlich anzeigen kann, ob die Daten live
// oder Fallback sind (QA-Anforderung: nie Simulation als echt ausgeben).
//
// Debug: /api/engpass?probe=1 zeigt den Status jedes Endpoints.

const BROWSER_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

const ENDPOINTS = [
  // API-Pilotendpoints (JSON) — Pfade lt. BASG-Datenbereitstellung
  { name: 'msc-api-records', url: 'https://medicineshortage.basg.gv.at/vertriebseinschraenkungen/api/records', type: 'json' },
  { name: 'msc-api',         url: 'https://medicineshortage.basg.gv.at/api/vertriebseinschraenkungen',         type: 'json' },
  // Tägliche XML-Datei
  { name: 'msc-xml',         url: 'https://medicineshortage.basg.gv.at/vertriebseinschraenkungen/xml',          type: 'xml' },
  { name: 'basg-xml',        url: 'https://www.basg.gv.at/fileadmin/redakteure/Datenbereitstellung/VertriebseinschraenkungenASP.xml', type: 'xml' },
  // HTML-Portal als letzte Live-Option (Tabelle parsen)
  { name: 'msc-html',        url: 'https://medicineshortage.basg.gv.at/vertriebseinschraenkungen',              type: 'html' },
];

// Ehrlicher Fallback — wird NUR verwendet wenn keine Live-Quelle antwortet,
// und wird als source:"fallback" gekennzeichnet (Compliance-Auflage).
const FALLBACK = [
  { name:'Amoxicillin 1000mg',   wirkstoff:'Amoxicillin',   status:'kritisch',       bis:'15.06.2026', alt:'Amoxi-Genericon, Ospamox',      quelle:'Referenz' },
  { name:'Ibuprofen 400mg',      wirkstoff:'Ibuprofen',     status:'eingeschraenkt', bis:'10.06.2026', alt:'Brufen 400, Dolormin',           quelle:'Referenz' },
  { name:'Salbutamol Spray',     wirkstoff:'Salbutamol',    status:'kritisch',       bis:'20.06.2026', alt:'Ventolin Evohaler, Sultanol N',  quelle:'Referenz' },
  { name:'Omeprazol 20mg',       wirkstoff:'Omeprazol',     status:'eingeschraenkt', bis:'12.06.2026', alt:'Pantoprazol 20mg, Nexium',       quelle:'Referenz' },
  { name:'Paracetamol 500mg',    wirkstoff:'Paracetamol',   status:'eingeschraenkt', bis:'18.06.2026', alt:'ben-u-ron 500, Mexalen 500',     quelle:'Referenz' },
  { name:'Cefuroxim 500mg',      wirkstoff:'Cefuroxim',     status:'kritisch',       bis:'25.06.2026', alt:'Zinnat 500, Zinacef',            quelle:'Referenz' },
  { name:'Ramipril 5mg',         wirkstoff:'Ramipril',      status:'eingeschraenkt', bis:'14.06.2026', alt:'Lisinopril 5mg, Enalapril',      quelle:'Referenz' },
  { name:'Clarithromycin 500mg', wirkstoff:'Clarithromycin',status:'kritisch',       bis:'30.06.2026', alt:'Azithromycin 500mg',             quelle:'Referenz' },
  { name:'Lorazepam 1mg',        wirkstoff:'Lorazepam',     status:'eingeschraenkt', bis:'05.08.2026', alt:'Diazepam 5mg, Oxazepam 10mg',    quelle:'Referenz' },
  { name:'Doxycyclin 100mg',     wirkstoff:'Doxycyclin',    status:'eingeschraenkt', bis:'01.09.2026', alt:'Minocyclin 100mg',               quelle:'Referenz' },
];

function statusFromText(t) {
  t = (t || '').toLowerCase();
  if (t.includes('nicht verf') || t.includes('kritisch') || t.includes('not avail')) return 'kritisch';
  if (t.includes('eingeschr') || t.includes('limit') || t.includes('teilweise'))     return 'eingeschraenkt';
  if (t.includes('verfügbar') || t.includes('verfuegbar') || t.includes('avail') || t.includes('aufgehoben') || t.includes('beendet')) return 'verfuegbar';
  return 'eingeschraenkt'; // Meldung im Register = per Definition eine Einschränkung
}

function fmtDate(s) {
  if (!s) return '—';
  // ISO → dd.mm.yyyy
  const m = String(s).match(/(\d{4})-(\d{2})-(\d{2})/);
  if (m) return `${m[3]}.${m[2]}.${m[1]}`;
  return String(s).slice(0, 10);
}

// Feldnamen im BASG-Datensatz variieren (DE/EN) — tolerant zugreifen
function pick(obj, ...keys) {
  for (const k of keys) {
    for (const cand of [k, k.toLowerCase(), k.toUpperCase()]) {
      if (obj[cand] != null && obj[cand] !== '') return obj[cand];
    }
  }
  return '';
}

function mapRecord(r) {
  const name = pick(r, 'name', 'arzneispezialitaet', 'bezeichnung', 'productName', 'asp_name', 'title');
  if (!name || String(name).length < 3) return null;
  return {
    name:      String(name).slice(0, 90),
    wirkstoff: String(pick(r, 'wirkstoff', 'substance', 'activeSubstance', 'inn') || '—').slice(0, 60),
    status:    statusFromText(pick(r, 'status', 'meldungsart', 'type', 'verfuegbarkeit', 'availability')),
    bis:       fmtDate(pick(r, 'endeDatum', 'endDate', 'voraussichtlichesEnde', 'expectedEnd', 'bis')),
    alt:       String(pick(r, 'alternative', 'alternativen') || '—').slice(0, 90),
    quelle:    'BASG',
  };
}

async function fetchEndpoint(ep) {
  const r = await fetch(ep.url, {
    headers: {
      'User-Agent': BROWSER_UA,
      'Accept': ep.type === 'json' ? 'application/json' : (ep.type === 'xml' ? 'application/xml, text/xml' : 'text/html'),
      'Accept-Language': 'de-AT,de;q=0.9',
    },
    signal: AbortSignal.timeout(9000),
    redirect: 'follow',
  });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  const body = await r.text();

  let items = [];
  if (ep.type === 'json') {
    const data = JSON.parse(body);
    const arr = Array.isArray(data) ? data : (data.records || data.items || data.results || data.data || []);
    items = arr.map(mapRecord).filter(Boolean);
  } else if (ep.type === 'xml') {
    // Generisches XML: jedes wiederholte Element mit Name-artigen Kindern
    const recs = [...body.matchAll(/<(record|eintrag|vertriebseinschraenkung|item|row)\b[^>]*>([\s\S]*?)<\/\1>/gi)];
    items = recs.map(m => {
      const block = m[2];
      const get = (tag) => {
        const mm = block.match(new RegExp('<' + tag + '[^>]*>([\\s\\S]*?)</' + tag + '>', 'i'));
        return mm ? mm[1].replace(/<[^>]+>/g, '').trim() : '';
      };
      return mapRecord({
        name: get('name') || get('arzneispezialitaet') || get('bezeichnung'),
        wirkstoff: get('wirkstoff') || get('substance'),
        status: get('status') || get('meldungsart'),
        bis: get('endeDatum') || get('endDate') || get('bis'),
        alternative: get('alternative'),
      });
    }).filter(Boolean);
  } else {
    // HTML-Tabelle parsen
    const rows = [...body.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];
    for (const row of rows) {
      const cells = [...row[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)]
        .map(c => c[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').trim());
      if (cells.length >= 3 && cells[0].length > 3 && !/name|bezeichnung/i.test(cells[0])) {
        items.push({
          name: cells[0].slice(0, 90),
          wirkstoff: (cells[1] || '—').slice(0, 60),
          status: statusFromText(cells[2]),
          bis: fmtDate(cells[3] || ''),
          alt: (cells[4] || '—').slice(0, 90),
          quelle: 'BASG',
        });
      }
    }
  }
  if (items.length < 3) throw new Error('parse: nur ' + items.length + ' Einträge');
  return items;
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }

  // Probe-Modus: Status jedes Endpoints anzeigen (QA/Debug)
  if (req.query && req.query.probe) {
    const results = [];
    for (const ep of ENDPOINTS) {
      try {
        const items = await fetchEndpoint(ep);
        results.push({ endpoint: ep.name, url: ep.url, ok: true, count: items.length, sample: items[0] });
      } catch (e) {
        results.push({ endpoint: ep.name, url: ep.url, ok: false, error: e.message });
      }
    }
    res.json({ probe: true, ts: new Date().toISOString(), results });
    return;
  }

  let items = null;
  let source = null;
  const attempts = [];

  for (const ep of ENDPOINTS) {
    try {
      items = await fetchEndpoint(ep);
      source = 'BASG-live (' + ep.name + ')';
      break;
    } catch (e) {
      attempts.push(ep.name + ': ' + e.message);
    }
  }

  if (!items) {
    items = FALLBACK;
    source = 'fallback'; // Frontend MUSS dies als Referenzdaten kennzeichnen
  }

  res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');
  res.json({
    ok: true,
    source,
    live: source !== 'fallback',
    count: items.length,
    ts: new Date().toISOString(),
    disclaimer: 'Verbindlich ist ausschließlich das BASG-Vertriebseinschränkungsregister: https://medicineshortage.basg.gv.at',
    attempts: source === 'fallback' ? attempts : undefined,
    items,
  });
}

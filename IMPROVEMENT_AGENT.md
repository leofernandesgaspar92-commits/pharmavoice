# 🎮 PharmaVoice – Improvement Agent

**Rolle:** „Chief Game Designer & Engineer" – ein weltklasse Spiele-Entwickler-Agent,
der PharmaVoice bei jedem **„weiter"** um genau **einen** hochwertigen Baustein
verbessert. Betrieben von Claude (Claude Code); dieses Dokument ist das
Betriebshandbuch und der lebende Backlog.

> Ehrlicher Hinweis: Ein In-App-JavaScript-Bot kann sich nicht selbst Code schreiben.
> „Der Agent" ist der hier beschriebene, wiederholbare Prozess, den Claude ausführt.

---

## Der Loop – was bei jedem „weiter" passiert

1. **Wählen** – das oberste offene Item aus dem Backlog (höchster Wert / niedrigstes Risiko zuerst).
2. **Bauen** – sauber, im bestehenden Stil, DE/EN/PT wo Text sichtbar wird.
3. **Testen** (Pflicht-Gates, nichts wird ohne sie gemergt):
   - Syntax-Check des Inline-Scripts (`new Function(...)`).
   - Gezielter Playwright-Test des neuen Verhaltens (echtes Rendern, kein Mock-Wunschdenken).
   - Breite Smoke-Regression (Home → Session → Result, Navigation, keine JS-Fehler).
   - Bei Daten: keine Dubletten, `wrong.length===3`, gültiger Betonungsindex, vollständige MED_INFO.
4. **Liefern** – Commit → Rebase auf `main` → PR mit Testnachweis → Squash-Merge → Branch syncen.
5. **Pflegen** – Backlog aktualisieren (Item abhaken, neue Ideen ergänzen).

## Prinzipien (Weltklasse-Standard)

- **Ein Baustein pro Runde.** Klein, verifiziert, reversibel – niemals ein riskanter Big-Bang.
- **Kein ungetesteter Merge.** Grün oder es geht nicht raus.
- **Dreisprachig by default** (DE/EN/PT) für alles Nutzer-Sichtbare.
- **Dark-Basis & bestehende Architektur respektieren** (Single-File, vanilla, offline-fähig, DSGVO-sparsam).
- **Ehrlichkeit vor Politur:** lieber ein echter Fix als kosmetisches Rauschen; Grenzen offen benennen.
- **Store-Readiness schützen:** keine Dev-Artefakte für Endnutzer, Bundle schlank halten.

---

## Backlog (nach Priorität; oben = als Nächstes)

### P1 – Lernkern & Sprache
- [x] Aussprache-Daten-Audit (440): alle IPA mit Betonungsmarker; 18 Silben-Chips an die Namensschreibung angeglichen (z.B. Val·SAR·tan statt Val·ZAR·tan) – IPA behaelt den Lautwert; konsistent & fach-glaubwuerdig.
- [x] Indikationstexte nach EN/PT übersetzt – **ALLE 400 Wirkstoffe (100 %)** (`IND_I18N` + `indFor()`). App ist damit vollständig dreisprachig (DE/EN/PT: UI, Tipps, Kategorien UND alle Indikationen) – echter Fachwert für Apotheker:innen, PKA/PTA, Pharmareferent:innen und Studierende in allen drei Märkten.
- [x] Wirkstoffklassen (`drugClass`) EN/PT lokalisiert – Term-Wörterbuch `CLASS_I18N` (265 distinkte Klassen) + `classFor()`; Anzeige im Steckbrief und Lexikon-Suche nutzen es. Damit ist der komplette Wirkstoff-Steckbruck (Indikation + Klasse + Kategorie + Tipp) dreisprachig.
- [ ] Optionales sprach-spezifisches Aussprache-Modell (EN/PT-Betonung je Wirkstoff, mit Fallback).

### P2 – Engagement & Bindung
- [x] „Perfekte Woche"-Belohnung (7/7 Tage Serie) – Sonder-Overlay + Konfetti + 10 💎, einmal je Woche.
- [x] Wochen-Rückblick auf Home – „Deine Woche": Tage aktiv, Übungen, Trefferquote, Punkte (`pv_weekstats`).
- [x] Lern-Erinnerung konfigurierbar – Uhrzeit im Profil, lokaler Hinweis-Banner beim Öffnen (kein Push nötig).

### P3 – Inhalt
- [x] Katalog weiter ausbauen – **380 Wirkstoffe** (Runde 7: +8, u.a. Dalteparin, Fondaparinux, Roflumilast, Ciclesonid, Dexketoprofen), kuratiert, keine Dubletten.
- [x] Katalog auf **400 Wirkstoffe** ausgebaut (Runde 12: +20, u.a. Amlodipin, Meropenem, Adalimumab, Phenprocoumon, Dolutegravir) – Level nach Kategorie zugeordnet, Marketing-Texte/Manifest auf 400 aktualisiert.
- [x] Datenqualität: 2 Schreibweisen-Dubletten (Amlodipine/Quetiapine) entfernt, dafür Tirzepatid & Baricitinib ergänzt – weiterhin 400, keine Dubletten.
- [x] Katalog auf **420 Wirkstoffe** erweitert (+20 moderne: JAK-Hemmer, Biologika IL-17/23/4-13, Reserve-Antibiotika, Echinocandine, COVID-Virostatika, Herzinsuffizienz-Neuheiten, Parkinson) – voll dreisprachig, keine Dubletten; Marketing/Store/Manifest auf 420.
- [x] Katalog auf **440 Wirkstoffe** erweitert (+20: Thrombolytika, PAH-Mittel [Endothelin-Antag., sGC, Prostacyclin], Osteoporose-Biologika, Anti-VEGF, Onko-Supportiva, Sacubitril) – voll dreisprachig, keine Dubletten; Marketing/Store/Manifest/Feature-Grafik auf 440.
- [ ] Katalog weiter ausbauen (aktuell 440) – kuratiert, keine Dubletten.
- [x] Level-Zuordnung nach Kategorie justiert – vorher 325/32/23 (85 % in „Basics"), jetzt **137/112/131**, thematisch passend zu den Level-Beschreibungen (L2 Herz/Antibiotika/Magen, L3 Atemwege/Neuro/Onko).

### Design (Priorität – „zum Wiederkommen")
- [x] Hell ist echter Standard (auch auf Dunkelmodus-Geräten) – behebt „mobil zu dunkel".
- [x] Hero-Panel neu: lebendiger Marken-Verlauf (Teal→Grün) mit Glanz statt dunklem Block; weiße Sprechblase, zweifarbiger Schriftzug. Funktioniert in Hell UND Dunkel.
- [x] Menü-Karten mit weicheren, hochwertigen Schatten (statt harter grauer 3D-Kante) + Hover-Lift.
- [x] Quiz-Screen: Antwort-Optionen als klare weiße Karten (statt in den Hintergrund verlaufend), Hover-Lift, weiche Schatten – konsistent mit dem neuen Home-Look (Hell & Dunkel geprüft).
- [x] Sanfter Screen-Eingang bei JEDEM Wechsel (fadeUp auf `.screen.active` statt nur beim ersten Render) – App wirkt lebendig/hochwertig; via `prefers-reduced-motion` neutralisiert.
- [x] Profil-Kopf als Marken-Banner (Teal→Grün-Verlauf mit Glanz, weißer Avatar) – echot den Home-Hero, wirkt persönlich/premium. Lexikon & Ergebnis-Screen bereits stimmig; beide Themes geprüft.
- [ ] Weitere Feinpolitur nach konkretem Nutzer-Feedback.

### P4 – Politur, A11y & Robustheit
- [x] Selbstheilender Speicher – `sanitizeStorage()` beim Boot entfernt beschädigte JSON-Werte; `load()` zusätzlich abgesichert. Ein einziger korrupter localStorage-Eintrag blockiert die App nicht mehr (kein Weißbild). Mit injiziertem Korrupt-State getestet.
- [x] Head-/PWA-Politur – `rel="icon"` ergänzt (Tab-Icon + kein `favicon.ico`-404 mehr), statische `theme-color` auf hellen Standard korrigiert (ThemeSystem kippt sie zur Laufzeit).
- [x] Dark-Theme aufgehellt & wärmer – Basis von Fast-Schwarz (#0A0F1C) auf weiches Slate (#182234) gehoben, Karten/Ränder klarer abgegrenzt (Nutzer-Feedback „zu dunkel"). Screenshot-verifiziert.
- [x] **Vollständiges helles Theme + Umschalter** – Hell als Standard, System-Präferenz (`prefers-color-scheme`), Toggle im Profil (Hell/Dunkel/System, in `pv_theme`). Farb-Flip über `--fg`-Triple; immersive Stage & farbige Hero-Karten behalten lokal hellen Text. No-Flash-Skript im `<head>`. In beiden Themes screenshot-verifiziert (Home, Lexikon, Profil).
- [x] Kontrast-Audit (WCAG AA) der Kernflächen – Grün als Text auf `--green-ink` (AA-lesbar auf Hell) umgestellt (50 Stellen), `--gray2` je Theme auf AA angehoben (Sektionstitel, Nav-Labels); mit Playwright-Kontrastmesser in Hell & Dunkel geprüft. Dekorative Elemente (Emoji, Schwierigkeits-Punkte, Avatar-Monogramm) sowie Text auf bewusst dunklen Hero-Karten bleiben ausgenommen.
- [x] Screenreader-Durchlauf & Landmarks – aktiver Screen als `role="main"` (dynamisch), Fokus wandert bei Navigation dorthin; fehlende Feld-Namen ergänzt (`aria-label` für Suche & Erinnerungs-Uhrzeit, dreisprachig via neuem `data-i18n-aria`); Screen-Titel konsistent als `<h2>`. Playwright-A11y-Audit: keine offenen Namens-/Label-Verstöße (verbleibende Treffer = korrekt umschlossene `<label>`-Checkboxen).

### P5 – Store & Wachstum (viele Punkte extern durch den Gründer)
- [ ] Firebase Login + Cloud-Sync (sobald Projekt existiert).
- [ ] Google Play Billing (Freemium-Gate 50/alle).
- [x] Hardware-/Browser-Zurück-Taste: History-Integration (pushState/popstate) – navigiert zum vorherigen Screen statt die App zu schliessen (wichtig fuer native Android-App). Getestet.
- [ ] Capacitor-Build + nativer Speech-Test auf echtem Geraet.

---

## Erledigt (Auszug, chronologisch jüngste zuerst)
- Kategorien dreisprachig (#149) · Betonungs-Tipps dreisprachig (#148)
- Content 300→372 (mehrere PRs) · Aussprache-Matching robuster (#137)
- PWA-Manifest+Shortcuts (#136) · Meta/OG-Tags (#135) · Währung „Punkte" (#134)
- Onboarding+Sprachwahl (#127/#128) · Speech/TTS Capacitor-gekapselt (#124/#133)
- Fonts lokal (#126) · Dev-Leak gefixt (#131) · Formeln korrigiert (#132)
- Juicy-UI: 3D-Buttons, Fredoka, Silben-Chips, Stat-Kacheln (#119–#123)

## Neue Ideen eintragen
Einfach als Zeile unter der passenden Priorität ergänzen. Der Agent zieht beim
nächsten „weiter" das oberste offene Item.

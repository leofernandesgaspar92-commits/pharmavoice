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
- [~] Indikationstexte nach EN/PT übersetzen – **34/≈50 erledigt** (`IND_I18N` + `indFor()`), Rest folgt schrittweise.
- [ ] Wirkstoffklassen (`drugClass`) lokalisieren (bounded, ähnlich wie Kategorien).
- [ ] Optionales sprach-spezifisches Aussprache-Modell (EN/PT-Betonung je Wirkstoff, mit Fallback).

### P2 – Engagement & Bindung
- [ ] „Perfekte Woche"-Belohnung (7/7 Tage Serie) mit Sonder-Feier.
- [ ] Wochen-Rückblick („diese Woche X Wörter gemeistert").
- [ ] Sanfte Lern-Erinnerung konfigurierbar (Uhrzeit-Hinweis, lokal).

### P3 – Inhalt
- [ ] Katalog weiter ausbauen (aktuell 372) – kuratiert, keine Dubletten.
- [ ] Schwierigkeitsstufen/Level-Zuordnung feiner justieren.

### P4 – Politur & A11y
- [ ] Kontrast-Audit (WCAG AA) der Kernflächen.
- [ ] Fokus-Reihenfolge & Screenreader-Durchlauf je Screen.

### P5 – Store & Wachstum (viele Punkte extern durch den Gründer)
- [ ] Firebase Login + Cloud-Sync (sobald Projekt existiert).
- [ ] Google Play Billing (Freemium-Gate 50/alle).
- [ ] Capacitor-Build + nativer Speech-Test auf echtem Gerät.

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

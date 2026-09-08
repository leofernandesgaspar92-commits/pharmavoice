# PharmaVoice – Launch- & Verkaufs-Playbook

Ziel des Gründers: Verkauf der App. Dieses Dokument führt **Schritt für Schritt**
von „fertige Web-App" zu „im Google Play Store live" zu „verkaufsfähiges Asset".

> **Ehrliche Werteinordnung (bitte zuerst lesen).**
> Eine App ohne Umsatz/Nutzer ist **kein** 1-Mio-Asset. Realistisch:
> - Pre-Revenue, ohne Traction: **5–30k €** (Code + 372 kuratierte Datensätze).
> - Mit Traction: **2,5–4× ARR** → 1 Mio. € erfordert ~250–400k € Jahresumsatz.
> - 1 Mio. „dieses Jahr" nur über strategischen Käufer bei **belegter Nutzung**.
> Der wertsteigernde Hebel ist **nicht mehr Code**, sondern **Nutzer + Umsatz + saubere Rechte**.

---

## TEIL A — App verkaufsreif machen (Status & Lücken)

**Schon erledigt (technisch launch-reif):**
- 372 Wirkstoffe, dreisprachig (DE/EN/PT: UI, Tipps, Kategorien, Indikationen der Top-52)
- PWA (installierbar/offline), lokale Fonts, Speech/TTS Capacitor-gekapselt
- Onboarding, Gamification (Tagesziel, Serie, Perfekte Woche, Level-Feier, Kombo)
- Rechtstext-Vorlagen, Store-Listing-Texte, Store-Grafiken, Capacitor-Config + Runbook
- Dev-Artefakte für Endnutzer ausgeblendet, Bundle schlank

**Noch offen – nur DU kannst das (extern):**
1. **Impressum/Datenschutz mit echten Firmendaten füllen** → siehe „Daten, die ich brauche".
2. **Datenschutzerklärung öffentlich hosten** (URL für Play Console + Firebase).
3. **APK/AAB bauen** (lokal, Android Studio) + **Mikro-Test auf echtem Gerät** (siehe CAPACITOR_SETUP.md).
4. Optional vor Verkauf: **Firebase Login + Cloud-Sync** (macht „echte Accounts" möglich, steigert Wert).

### Daten, die ich brauche (dann fülle ich Impressum/Datenschutz sofort)
Bitte als Text posten (aus dem GISA-Auszug):
- Vollständiger Firmen-/Inhabername + Rechtsform (Einzelunternehmen? GmbH?)
- **GISA-Zahl** und Wortlaut des Gewerbes
- Firmensitz (Adresse) + Land
- Kontakt-E-Mail (öffentlich)
- UID-Nummer (falls vorhanden), Firmenbuchnummer (falls GmbH)
- Zuständige Bezirksverwaltungsbehörde (Gewerbebehörde)

---

## TEIL B — Google Play Store: Schritt für Schritt

**Vorlauf zuerst starten (dauert!):**
- [ ] **D-U-N-S-Nummer** für dein Unternehmen (gratis bei Dun & Bradstreet, 1–4 Wochen).
- [ ] **Play Developer Account als ORGANISATION** (25 $ einmalig). Organisation umgeht die
      20-Tester/14-Tage-Pflicht und wirkt seriöser für B2B/Verkauf.

**Dann:**
1. **Rechtstexte finalisieren & hosten** (Impressum/Datenschutz/AGB) auf eigener Domain.
2. **App bauen** (lokal, siehe CAPACITOR_SETUP.md): `npm install` → `npx cap add android`
   → native Speech/TTS-Plugins → `npx cap sync` → in Android Studio signiertes **.aab** erzeugen.
   ⚠️ **Keystore sicher aufbewahren** – ohne ihn keine Updates (und ein Verkauf braucht ihn!).
3. **Play Console → App anlegen:** Name/Kurz-/Langbeschreibung aus `STORE_LISTING.md` (DE/EN/PT),
   Kategorie „Bildung", Feature-Grafik + Screenshots aus `store-assets/`.
4. **Data-Safety-Formular** wahrheitsgemäß: aktuell lokale Speicherung, keine Übertragung
   (nach Firebase anpassen). Inhaltseinstufung ausfüllen. Datenschutz-URL eintragen.
5. **Testspur → Produktion:** interne Tests, dann Produktions-Release, `.aab` hochladen, einreichen.
6. **Review abwarten** (meist Tage). Bei Ablehnung: Grund lesen, beheben, neu einreichen.
7. Falls Abos: In „Monetarisierung → Produkte" Abo anlegen (Google Play Billing), AGB/Widerruf verlinken.

---

## TEIL C — Verkaufen: realistischer Weg zum Maximalwert

### 1. Wert entsteht aus Nachweisen, nicht aus Features. Sammle:
- **MAU** (aktive Monatsnutzer), **Retention D30/M1** (>20–25 % ist gut für Lern-Apps)
- **Zahlende Conversion & Churn**, **ARR/MRR** falls Abo aktiv
- **B2B-Proof:** ≥ 1 PKA-Berufsschule oder ≥ 2 Apotheken, die aktiv nutzen — **mit LOI/Testimonial**
- **Fachliche Prüfung** durch eine:n Apotheker:in (Gütesiegel gegen „nur eine App")

### 2. Ein Pilot bringt den ersten Nachweis
- 1–3 Apotheken / 1 PKA-Schule in Linz, 3 Monate, kostenlos.
- Ein messbares Ziel (Vorher/Nachher-Aussprache). Ergebnis: Nutzungsdaten + Referenz.

### 3. Wer kauft & warum
- **Strategisch (höchster Preis):** Apothekerkammer/PKA-Ausbildung, Pharma-Großhandel
  (Kwizda, Herba Chemosan), Fortbildungsanbieter. Ansatz: „spart Ausbildungskosten / füllt Lücke".
- **Finanziell (Marktpreis):** Micro-Acquisition-Plattformen (Acquire.com, Flippa, MicroAcquire).
  Dort zählen harte Zahlen (ARR × Multiple).

### 4. Was ein Käufer in der Due Diligence prüft (jetzt sauber halten!)
- **Saubere IP-Rechte:** die 90/10-Aufteilung mit Teresa Patricia Jorge **schriftlich** fixieren,
  inkl. Übertragung aller Rechte an die Gesellschaft/dich, **bevor** ein Käufer prüft.
  Ungeklärte Rechte killen Deals oder drücken den Preis massiv.
- **Übertragbare Assets:** Repo, Play-Console-Eintrag, **Signing-Keystore**, Domain, Marke „PharmaVoice",
  Datensätze, ggf. Firebase-Projekt. Liste alles auf.
- **Keine rechtlichen Altlasten:** Rechtstexte final, DSGVO-konform, keine fremden Assets im Code.
- **Nachvollziehbare Zahlen:** Store-Statistiken, ggf. Zahlungsbelege.

### 5. Deal-Struktur (üblich)
- Asset-Deal (Käufer kauft App + Rechte) oder Share-Deal (kauft die Gesellschaft).
- Häufig: Anteil sofort + **Earn-out** (Rest an Ziele gebunden). Für dich: Anwalt/Steuerberater
  für Vertrag + steuerliche Behandlung des Verkaufserlöses einbinden.

### 6. Realistische Meilenstein-Kette (statt „1 Mio sofort")
1. Launch (Play Store) →
2. 1 Pilot mit Referenz →
3. erste zahlende Apotheke/Schule →
4. 100–500 MAU + Retention-Beleg →
5. Verkaufsgespräche mit belegten Zahlen.
Jeder Schritt vervielfacht den Verkaufswert; Schritt 1–3 sind in Monaten machbar.

---

## Aufgabenteilung
- **Claude (Agent):** App technisch launch-/verkaufsreif halten, Rechtstexte/Listing/Grafiken,
  Firebase/Billing-Code (wenn Projekt existiert), dieses Playbook pflegen.
- **Gründer (nur du):** Konten (D-U-N-S, Play, Firebase, Domain), echter Geräte-Build,
  Rechtstexte mit echten Daten, Pilot-Akquise, Vertrag mit Teresa, Verkaufsverhandlung.

- Result-Screen „Fehler wiederholen"-Button: startet direkt eine Session mit genau den Wörtern, die man in der letzten Runde falsch hatte — schließt die Lern-Schleife (Fehler sehen → sofort nacharbeiten); erscheint nur bei Fehlern, dreisprachig

- Result-Screen Wort-Übersicht: nach jeder Session eine Liste aller Wörter mit ✅/❌ (falsche zuerst) — man sieht sofort, was zu wiederholen ist; dreisprachig

- Wirkstoff-Datenbank: 7 OTC/Primärversorgungs-Wirkstoffe ergänzt (Xylometazolin, Ambroxol, Dextromethorphan, Dimenhydrinat, Macrogol, Simeticon, Fluconazol) mit IPA/Silben & MED_INFO — jetzt 139 Wirkstoffe (Runner 146), alle validiert

- Event-Abzeichen-Sammlung im Rangliste-Screen: zeigt alle 6 Seasonal-Events als Sammelabzeichen (verdiente hervorgehoben mit Icon, offene gesperrt) — macht die Seasonal Events zum sammelbaren Langzeitziel; dreisprachig

- Seasonal Events (wöchentlich rotierende Themen-Challenge, client-seitig): pro ISO-Woche eine Wirkstoff-Kategorie (Antibiotika/Diabetes/Epilepsie/Psyche/Diuretika/Atemwege), Fortschritt aus Learn UND Runner, Countdown bis Wochenende, exklusive Belohnung (250 Shekel + 6 Gems + Abzeichen). Karte auf Home. Schließt die letzte lokal umsetzbare Gap-Analyse-Lücke (FOMO/Retention)

- Profil „Deine Statistik": Trefferquote (aus letzten Sessions), gemeisterte Wörter (SM-2 reps≥3) und stärkste Kategorie — berechnet aus vorhandenen Daten, keine neue Erfassung, dreisprachig

- Lexikon → Üben: Tap auf eine Wirkstoff-Karte startet eine gezielte Übungssession (das Wort zuerst + bis zu 4 weitere aus derselben Kategorie) — verbindet Browsen und Üben; Anhören-Button bleibt separat, voll barrierefrei (role/tabindex/aria)

- Wirkstoff-Lexikon: Kategorie-Filter-Chips (nach Häufigkeit sortiert, mit Anzahl) — schnelles Filtern durch die 132 Wirkstoffe nach Kategorie, kombinierbar mit der Textsuche; „Alle" als Standard

- Wirkstoff-Datenbank: 8 Neurologie/Psychiatrie-Wirkstoffe ergänzt (Olanzapin, Lamotrigin, Carbamazepin, Valproinsäure, Donepezil, Memantin, Topiramat, +Levodopa-Batch) mit IPA/Silben & MED_INFO — jetzt 132 Wirkstoffe (Runner automatisch 139), alle validiert

- i18n Erfolge/Rangliste-Screen: alle 15 Achievement-Namen & -Beschreibungen, Section-Titel (TOP 10 / ERFOLGE), Header und Empty-Message in DE/EN/PT; switchLang rendert die Liste live neu

- Sprach-Umschalter im Profil-Screen ergänzt: Sprache (DE/EN/PT) jetzt von überall über die Nav erreichbar, nicht mehr nur vom Home-Screen — aktiver Button in beiden Zeilen synchron markiert

- Pharma Runner Content synchronisiert: RN_WORDS wird jetzt automatisch aus der MEDS-Datenbank angereichert (48 → 132 Wörter) — neue Wirkstoffe erscheinen künftig auch im Runner, kein separates Pflegen mehr. Nebenfix: pre-existing Duplikat (Rivaroxaban) in der Runner-Liste entfernt

- Wirkstoff-Datenbank: 7 weitere Wirkstoffe (Diazepam, Lorazepam, Oxycodon, Tilidin, Codein, Sumatriptan, Levodopa) mit IPA/Silbenbetonung & MED_INFO — jetzt 125 Wirkstoffe, alle validiert

- Wirkstoff-Datenbank: 8 weitere Wirkstoffe ergänzt (Loratadin, Zolpidem, Baclofen, Prednison, Fentanyl, Naloxon, Bisacodyl, Morphin) mit IPA/Silbenbetonung & vollständigem MED_INFO — jetzt 118 Wirkstoffe, alle validiert

- i18n Pharma Park: Zonen-Labels (Regal/Laufband/Kunde/Labor), Tags (Aussprache/Runner/Quiz/Rezeptur) und Untertitel in DE/EN/PT — damit ist die gesamte sichtbare Kern-UI dreisprachig

- i18n Upgrade/Plan-Screen (Titel, Free/Normal/Premium-Pläne mit allen Features, Preisen, „Empfohlen", „Nicht jetzt") in DE/EN/PT — konsistenter Fluss bis zum bereits übersetzten Checkout

- i18n Modals: Audio-Einstellungen, Checkout (inkl. dynamische Zahl-Button-Texte & „Nicht genug"-Meldungen) und Charakter-Auswahl in DE/EN/PT

- i18n Daily-Mission-Karte (Titel, Schritte, Abschluss-Text), Schwache-Wörter-Kachel, Park-Hinweis und Gesamtfortschritt-Label in DE/EN/PT

- i18n Hub/Lernwelten: Titel, „X von Y Level abgeschlossen", Detail-Panel (FORTSCHRITT/BELOHNUNG/Lektion starten/Abgeschlossen + Level-Beschreibungen), „Pharma Park erkunden", „ALLE WELTEN" und Welten-Fortschritt in DE/EN/PT

- i18n Pharma Runner: Overlay-Texte (Start-Anleitung, Game-Over inkl. Shekel-/Rekord-Bonus, Pause, Buttons Starten/Nochmal/Weiterspielen) in DE/EN/PT

- i18n Result-Screen: Ergebnis-Titel (Perfekt/Sehr gut/Gut/Weiter üben/Nicht aufgeben), Untertitel „X von Y richtig — Level" und Stat-Labels (Richtige Antworten/verdient/Streak/Gesamt) in DE/EN/PT

- i18n Lern-Screen: „Welche Silbe wird betont?", PUNKTE/SERIE, Hinweis, Anhören, Weiter sowie dynamische Labels (Mikrofon-Status, Details-Toggle) in DE/EN/PT

- i18n Wirkstoff-Lexikon: Such-Placeholder (neuer data-i18n-ph-Support für Inputs), „Gelernt"-Label und „Keine Treffer"-Meldung in DE/EN/PT

- i18n Profil-Screen: Rolle, Stat-Labels, Team-Titel und dynamische Fortschritts-Labels (Level benötigt…, Streak-Tage) in DE/EN/PT; switchLang aktualisiert dynamische Labels live. Nebenfix: profProgLabel zeigte literale <strong>-Tags (set() nutzt textContent) — jetzt reintext

- UI-Mehrsprachigkeit erweitert: Screen-Titel (Shop/Lexikon/Park/Rangliste), Zurück-Buttons, Result-Buttons (Nochmal/Startseite), Level-Auswahl-Modal, Shop-Sektionen & Premium-Button übersetzen jetzt in DE/EN/PT

- UI-Mehrsprachigkeit erweitert: Bottom-Navigation (Home/Hub/Erfolge/Profil/Design) übersetzt jetzt ebenfalls live in DE/EN/PT über das i18n-System

- UI-Mehrsprachigkeit (Fundament): leichtgewichtiges i18n-System (data-i18n + Übersetzungstabelle); Home-Menü, Taglines und Home-Sektionen übersetzen jetzt live in DE/EN/PT und nach Reload — vorher blieb die UI immer deutsch, nur Charakter/Audio folgten der Sprache. Erweiterbar für weitere Screens; untaggte Elemente bleiben unverändert

- Achievement-Texte korrigiert: „Profi-Aussprecher" (400) und „Pharma-Legende" (600) behaupteten fälschlich „Level 3 freigeschaltet" bzw. „Alle Level abgeschlossen" — Level 3 erfordert aber 1000 Shekel. Beschreibungen jetzt korrekt (reine Shekel-Meilensteine)

- Achievement-Fix: „Auf die Piste!" (Runner gespielt) konnte nie freigeschaltet werden — pv_runner_total wurde nur gelesen, nie geschrieben; wird jetzt bei jedem Runner-Start hochgezählt. Zusätzlich 2 neue Achievements: „Wirkstoff-Kenner" (30 versch. Wirkstoffe) und „Shekel-Millionär" (1000 Shekel) — jetzt 15 Erfolge

- Wirkstoff-Datenbank: 8 weitere häufige Wirkstoffe ergänzt (Tamsulosin, Finasterid, Citalopram, Amitriptylin, Warfarin, Salmeterol, Sildenafil, Melatonin) — je mit IPA, Silbenbetonung & vollständigem MED_INFO (jetzt 110 Wirkstoffe, alle validiert: keine Duplikate/Datenfehler)

- Pharma Park: die 4 Zonen verhalten sich jetzt wirklich unterschiedlich statt alle gleich — Regal=Bereichswahl, Laufband=Runner, Kunde=gezielte Schwachwort-Session (Fallback Bereichswahl), Labor=schnelle Zufalls-Übung; irreführende Texte korrigiert. Zusatzfix: Avatar (pointer-events:none) blockierte nicht mehr den nächsten Zonen-Tap

- Hub-Fortschritt entblockt: Quiz-Level (jede Welt Position 4) wurden nie abgeschlossen, weil der Abschluss-Hook nur speak-Marker prüfte — dadurch war jede Welt an Level 4 blockiert. Hook schließt jetzt speak- UND quiz-Level ab; alle 6 Level pro Welt durchspielbar

- Pharma Runner speist die Haupt-Progression: gespielte Runden bringen jetzt Shekel (Score/20) und bei neuem persönlichen Rekord +3 Gems — vorher war der Runner wirtschaftlich abgekoppelt (kein Beitrag zu Level/Shop)

- Pharma Runner Spracherkennung: folgt jetzt der App-Sprache (DE/EN/PT statt fest Deutsch), prüft alle Erkennungs-Alternativen und nutzt dieselbe Schwelle (0,72) wie der Lern-Modus — behebt Sprach-Inkonsistenz für EN/PT-Nutzer

- „Schwache Wörter üben": gezielte Lern-Session mit genau den Wirkstoffen, bei denen Fehler gemacht wurden (niedriger SM-2 Easiness-Faktor) — erscheint als hervorgehobene Kachel oben in der Level-Auswahl, sobald Fehlerwörter existieren

- Barrierefreiheit: Bottom-Nav & Icon-Buttons per Tastatur bedienbar (role/tabindex, Enter/Leertaste), Screenreader-Labels (aria-label), aria-current am aktiven Tab, aria-pressed am Musik-Button, aria-live an der Mikrofon-Ausgabe, sichtbarer Fokus-Rahmen (WCAG)

- Wirkstoff-Datenbank: 8 häufige Wirkstoffe ergänzt (Paracetamol, Cetirizin, Enalapril, Torasemid, Allopurinol, Mirtazapin, Hydrochlorothiazid, Cholecalciferol) — je mit IPA, Silbenbetonung, Indikation, Klasse, Summenformel & ATC-Code (jetzt 102 Wirkstoffe)

- Belohnungs-Truhe (Chest/Loot): nach Sessions ab 6/10 richtigen (Perfekt = 2 Truhen), gewichtete Zufalls-Belohnung (Shekel/Gems/Power-Ups/Jackpot) mit Öffnungs-Animation — schließt die letzte Gap-Analyse-Lücke (variable rewards)

- Kinetic Typography: animierte Text-Bursts (RICHTIG!/COMBO!) mit Buchstaben-Stagger bei richtigen Antworten, mehrsprachig (DE/EN/PT), goldene Combo-Variante ab 5er-Serie — schließt die Kinetic-Typography-Lücke der Gap-Analyse

- Wirkstoff-Lexikon: durchsuchbare Sammlung aller 94 Wirkstoffe nach Kategorie, mit Gelernt-Status (aus SM-2), Anhören-Button pro Eintrag und Fortschrittsbalken — schließt die Collection/Compendium-Lücke der Gap-Analyse

- Daily-Login-Bonus: einmal pro Tag Gems + Shekel (Belohnung steigt mit dem Streak), gefeiert mit Toast + Level-Up-Sound — schließt eine von der Gap-Analyse markierte Engagement-Lücke

- Lern-Screen: „🔊 Anhören"-Button spricht den Wirkstoffnamen langsam & deutlich vor (Speech Synthesis, folgt App-Sprache) — Lernhilfe vor dem Selbst-Üben

# Changelog — PharmaVoice

Alle wesentlichen Änderungen, chronologisch (neueste zuerst).

## Unified Hub & All-in-One (aktuell)

- **8 Lernwelten** statt 3: Herz-Kreislauf, Schmerz, Infektion, Schilddrüse & Diabetes, Lunge & Allergie, Magen-Darm, Extrem schwere Wirkstoffe, Apotheken-Alltag — je 6 Level (Aussprache/Runner/Quiz gemischt)
- **Top-10-Highscore-Tabelle** (lokal) im Rangliste-Screen + Platzierungsanzeige im Runner-Game-Over
- **Shop mit Power-Ups**: Streak-Schild 🛡️ (200 Shekel), Energie-Auffüllung ⚡ (5 Gems), Double-XP ✨ (150 Shekel) — mit echter Verbrauchslogik (Schild rettet Streak automatisch, Double-XP verdoppelt die nächste Session)
- **README.md + CHANGELOG.md** hinzugefügt

## Dark Game-UI Reskin (PR #28)

- Globales dunkles Navy/Cyan-Theme (Referenz-Mockups als CSS-Nachbau)
- Home als Menü-Liste mit Hero-Panel, Hub mit Zickzack-Level-Pfad + Detail-Panel
- Level-Auswahl als 2-spaltiges Kachel-Grid mit Gesamtfortschritt
- Quiz-Screen mit Fortschritts-Punkten, Punkte/Serie-Anzeige und Hinweis-Button

## Ressourcen-HUD & Team-Roster (PR #27)

- Sticky Top-Leiste: Avatar+Level, Shekel 🪙, Gems 💎, Energie ⚡ (Regeneration +1/5min, 10 pro Session)
- Team-Grid im Profil: alle 4 Begleiter mit Level, Fortschrittsbalken, Sternen

## Game Designer Agent Wissensbasis (PR #26)

- Youth-Pharma-UI-Referenz als Inspirationsquelle in TrendAnalyzer aufgenommen
- Neue UX-Patterns, Engagement-Strategien und Gap-Analyse-Einträge

## Unified Learning Hub (PRs #18–#25)

- **UnifiedLearningHub**-Orchestrator: ein Start-Button, Agent entscheidet den Modus
- **GameDesignerAgent.recommendMode()**: vollständiger Entscheidungsbaum (neu/Fehlerquote/Belohnung/Welt/Smart-Mix)
- **HubSystem**: Welten mit Level-Pfad, Sterne-Bewertung, automatischer Abschluss über Session-Hooks
- **DailyMissionSystem**: Tagesquest (5 Wirkstoffe → Runner → 5 Wirkstoffe) mit Bonus-Shekel
- **SmartLearnSystem**: adaptiver Coach (Fehlerquote, Tageszeit, Aktivität → Empfehlung mit Begründungs-Banner)
- **Fusion-Mode-Visuals**: Hindernis nähert sich synchron zum Timer, Runner springt/wird getroffen
- **Pharma Park**: begehbare 2D-Apotheke mit 4 Stationen (Regal/Laufband/Kunde/Labor)
- **Home-Dashboard**: Avatar-Begrüßung mit KI-Empfehlung, Fortschritt, Mission, Welt-Karte

## Game Designer Agent (PRs #14–#17)

- Architektur: TrendAnalyzer → MechanicGenerator → DesignDocumentGenerator → AutoUpdateSystem, orchestriert von GameDesignerAgent (Klasse)
- Dashboard mit Trend-Karten, priorisierten Feature-Vorschlägen und GDD-Generator
- Wöchentliches Auto-Update mit adaptiver Priorisierung aus echten Nutzungsdaten
- Code-Review-Fixes: unsichtbarer Text, Doc-Listen-Update, Null-Guards, totes Code entfernt

## Audio-System (PRs #10–#13)

- Web-Audio-Sounds: 3 Richtig-Varianten (Ding/Pling/Trill), 3 Falsch-Varianten, Combo skaliert mit Zähler, Level-Up-Fanfare, Game-Over
- Gesprochenes Feedback (Speech Synthesis) in DE/EN/PT
- Audio-Einstellungen als Bottom-Sheet: Lautstärke-Slider + Schalter für Sound/Sprache/Vibration

## Grundfunktionen (PRs #1–#9)

- Lern-Modus mit Silbenbetonungs-Quiz, Web-Speech-Aussprache-Training, 50+ Wirkstoffe (IPA, Silben, Indikation)
- Pharma Runner 2.0 (Endless Runner mit Spracherkennung, Combos, Leben)
- 4 Charaktere mit Tamagotchi-Stats, Canvas-Avataren und dynamischem Farb-Theming
- SM-2 Spaced Repetition, Achievements, Streak, XP-System
- Mehrsprachigkeit DE/EN/PT, Onboarding entfernt (Direktstart auf Home)

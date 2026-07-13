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

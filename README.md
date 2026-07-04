# 💊 PharmaVoice

**Gamifizierte Lern-App für die Aussprache pharmazeutischer Wirkstoffnamen.**

PKA-Lehrlinge und Apotheken-Mitarbeiter trainieren die korrekte Aussprache schwieriger Fachbegriffe (Acetylsalicylsäure, Hydrochlorothiazid, Levothyroxin …) — mit Spracherkennung, Belohnungssystem und lebendigen Charakter-Begleitern.

**Live**: [leofernandesgaspar92-commits.github.io/pharmavoice](https://leofernandesgaspar92-commits.github.io/pharmavoice/)

---

## 🚀 Installation & Start

Keine Installation nötig — die App ist eine statische Web-App ohne Build-Schritt:

```bash
git clone https://github.com/leofernandesgaspar92-commits/pharmavoice.git
cd pharmavoice
# Beliebigen statischen Server starten, z. B.:
python3 -m http.server 8000
# → http://localhost:8000 im Browser öffnen
```

> ⚠️ **Wichtig**: Die Spracherkennung (Web Speech API) funktioniert nur über **HTTPS oder localhost**. Beim Öffnen als `file://` steht sie nicht zur Verfügung — die App zeigt dann einen Hinweis und bleibt über die Antwort-Buttons bedienbar.

**Empfohlene Browser**: Chrome / Edge (beste Web-Speech-API-Unterstützung). Safari und Firefox funktionieren mit Einschränkungen bei der Spracherkennung.

---

## 🎮 Features

### Unified Learning Hub
**Ein Button — "Jetzt lernen starten"** — der integrierte Game Designer Agent analysiert Fehlerquote, Streak, Tageszeit und Aktivität und wählt automatisch den passenden Modus:

| Modus | Wann |
|---|---|
| 🎤 **Learn** | Neue Nutzer oder hohe Fehlerquote — fokussierte Aussprache-Übung |
| 🏃 **Runner** | Belohnung bei niedriger Fehlerquote |
| 🎯 **Daily Mission** | Tägliche Quest: 5 Wirkstoffe → 1 Runner-Runde → 5 Wirkstoffe (+Bonus) |
| ⚡ **Fusion** | Runner mit Lern-Elementen: Hindernisse per Aussprache überwinden |
| 🌍 **Welt-Modus** | 8 Themenwelten mit Level-Pfad (Candy-Crush-Style) |

### Die 4 Charaktere (Tamagotchi-Style)
- **Beatrice** 👩‍⚕️ — die weise Apothekerin (Grün)
- **Victor** 👨‍🎓 — der ehrgeizige PKA-Lehrling (Orange)
- **Fin** 🐕 — verspieltes Hundebaby (Goldgelb)
- **Ari** 🐶 — sanfte Trösterin (Rosa)

Jeder Charakter hat eigene Sprüche, Farb-Theming, Tamagotchi-Stats (Hunger/Glück/Energie) und Canvas-Animationen.

### Pharma Runner
Endless Runner mit Spracherkennung: Wirkstoff erscheint als Hindernis auf der Straße, korrekte Aussprache = drüberspringen, Fehler/Timeout = Leben verloren. Combo-System, Leben, Top-10-Highscore.

### Gamification
- **XP (Shekel)** 🪙, **Gems** 💎, **Energie** ⚡ in permanenter Top-Leiste
- Streak-System mit kaufbarem **Streak-Schild** 🛡️
- **Shop** mit Power-Ups (Streak-Schild, Energie-Auffüllung, Double-XP)
- Achievements, Team-Roster (alle 4 Begleiter leveln parallel)
- **SM-2 Spaced Repetition** — fällige Wörter kommen automatisch zuerst

### Audio-Feedback
- Synthetische Sounds über **Web Audio API** (keine Audiodateien)
- Gesprochenes Feedback über **Speech Synthesis** in DE/EN/PT
- Vibrations-Feedback, alles einzeln abschaltbar (Audio-Einstellungen 🔊)

### Game Designer Agent
Selbst-analysierender Agent (Tab "Design"): Trend-Wissensbasis aus Top-Mobile-Games, Gap-Analyse, priorisierte Feature-Vorschläge mit generierbaren Game-Design-Dokumenten. Aktualisiert Prioritäten wöchentlich anhand echter Nutzungsdaten.

### Mehrsprachigkeit
🇩🇪 Deutsch · 🇬🇧 Englisch · 🇵🇹 Portugiesisch — UI, Charakter-Sprüche und Audio-Feedback.

---

## 🛠️ Technik

- **Vanilla JS / HTML / CSS** — kein Framework, kein Build-Schritt, keine externen Abhängigkeiten
- **Web Speech API** (de-DE / en-US / pt-BR) für Spracherkennung
- **Web Audio API** + **Speech Synthesis API** für Audio
- **localStorage** für alle Daten (Backend-ready strukturiert, DSGVO-konform: keine Daten verlassen das Gerät)
- Mobile-first, PWA-tauglich

### Wichtige localStorage-Keys

| Key | Inhalt |
|---|---|
| `pv2` | XP, Streak, gelernte Begriffe |
| `pv_sm2` | Spaced-Repetition-Daten (SM-2) |
| `pv_hub` | Welt-/Level-Fortschritt |
| `pv_daily_mission` | Tagesmission-Status |
| `pv_energy`, `pv_gems` | Ressourcen |
| `pv_runner_top10` | Highscore-Liste |
| `pv_gd_*` | Game-Designer-Agent-Zustand |

---

## ⚖️ Hinweis

> Diese App ist ein Lern-Tool und ersetzt keine pharmazeutische Beratung.

---

**Gründer**: Leo Fernandes Gaspar · Linz, Österreich

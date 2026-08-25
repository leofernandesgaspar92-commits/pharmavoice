# Store-Assets (Google Play)

Fertige Grafiken für den Play-Store-Upload. Siehe `../STORE_LISTING.md` für die Texte.

## Inhalt
- **feature-graphic.png** – 1024×500, Feature-Grafik (Pflicht). Quelle: `feature-graphic.html`.
- **screenshots/01-learn.png · 02-result.png · 03-lexikon.png** – 1080×1920, mit Überschrift & Rahmen (konvertieren am besten). Direkt hochladbar.
- **screenshots/raw-*.png** – 1236×2676, unrahmte App-Aufnahmen (falls du plain Screenshots bevorzugst).

## Neu erzeugen / anpassen
Die captioned Screenshots und die Feature-Grafik sind aus HTML gerendert
(Playwright, `deviceScaleFactor:1`). `feature-graphic.html` im Browser öffnen,
anpassen, dann bei 1024×500 exportieren. Rohe App-Screenshots entstehen durch
Aufnahme der laufenden App bei Viewport 412×892 (×3).

Play-Vorgaben: Feature-Grafik exakt 1024×500; Screenshots 320–3840 px Kante,
Seitenverhältnis 16:9 oder 9:16; mind. 2 Screenshots.

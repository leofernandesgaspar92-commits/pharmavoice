# PharmaVoice → Android (Capacitor) – Setup-Runbook

Dieses Runbook bringt die Web-App als native Android-App (`.aab` für Google Play) auf dein Gerät.
Die Schritte, die **nur lokal** laufen (Android Studio, echtes Gerät), sind mit 💻 markiert.

Basis ist bereits im Repo:
- `capacitor.config.json` → `appId: com.pharmavoice.app`, `webDir: www`
- `package.json` → Capacitor 8 (`@capacitor/core`, `/cli`, `/android`)
- Die Web-App liegt in `www/` (dieselbe `index.html` wie GitHub Pages).

---

## 1. Voraussetzungen (💻 einmalig)

- Node.js 18+ und npm
- **Android Studio** (inkl. Android SDK, Platform-Tools)
- JDK 17 (bringt Android Studio mit)
- Ein Android-Gerät mit USB-Debugging **oder** ein Emulator

---

## 2. Projekt initialisieren (💻)

```bash
npm install
npx cap add android      # legt den Ordner android/ an (einmalig)
npx cap sync             # kopiert www/ + Plugins in das native Projekt
```

Nach jeder Änderung an `www/` künftig nur:
```bash
npx cap copy             # schnelles Kopieren der Web-Assets
# oder bei neuen/aktualisierten Plugins:
npx cap sync
```

---

## 3. Native Speech-Plugins installieren (💻)

Die Web Speech API funktioniert im Android-WebView **nicht zuverlässig** (auf iOS gar nicht).
Deshalb native Plugins – Versionen passend zu **Capacitor 8** von npm auflösen lassen:

```bash
npm i @capacitor-community/speech-recognition
npm i @capacitor-community/text-to-speech
npx cap sync
```

> Falls npm einen Peer-Dependency-Konflikt zu Capacitor 8 meldet:
> `npm i @capacitor-community/speech-recognition@latest` und die vom Plugin
> geforderte Capacitor-Version prüfen (README des Plugins). Notfalls Capacitor
> auf die vom Plugin unterstützte Major-Version angleichen.

---

## 4. Berechtigungen setzen (💻)

**Android** – in `android/app/src/main/AndroidManifest.xml` ergänzen:
```xml
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.INTERNET" />
```

Für einen späteren iOS-Build (`Info.plist`):
```xml
<key>NSMicrophoneUsageDescription</key>
<string>PharmaVoice nutzt das Mikrofon, um deine Aussprache zu prüfen.</string>
<key>NSSpeechRecognitionUsageDescription</key>
<string>PharmaVoice erkennt gesprochene Wirkstoffnamen zur Aussprache-Bewertung.</string>
```

---

## 5. Den Speech-Code auf das native Plugin umstellen

Die gesamte Erkennung liegt hinter **einer** Kapsel: der `SpeechEngine` in `www/index.html`
(Kommentar „SPEECH ENGINE (Kapselung – Capacitor-ready)"). Nur diese Sektion tauschen –
`startMic`, `checkPronunciation`, das Alternativen-Handling usw. bleiben unverändert.

Ersetze den Body von `SpeechEngine` durch die Plugin-Variante (Skizze):

```js
const SpeechEngine = (() => {
  // Läuft nur in der nativen App; im Browser via window.Capacitor === undefined
  // automatisch auf die Web-Variante zurückfallen (beide Zweige behalten).
  const isNative = !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

  async function _startNative(opts) {
    const { SpeechRecognition } = window.Capacitor.Plugins;
    const perm = await SpeechRecognition.checkPermissions();
    if (perm.speechRecognition !== 'granted') await SpeechRecognition.requestPermissions();
    opts.onStart && opts.onStart();
    await SpeechRecognition.start({
      language: opts.lang || 'de-DE',
      maxResults: 3,
      partialResults: false,
      popup: false,
    });
    SpeechRecognition.addListener('partialResults', () => {});
    // Ergebnis kommt über das Promise-Resultat bzw. 'listeningState' –
    // die genaue API steht im Plugin-README; final an onResult weitergeben:
    // opts.onResult({ final: best, interim: '', alternatives: matches });
  }

  function isSupported() { return isNative || !!SR; }
  function start(opts) {
    if (isNative) { _startNative(opts).catch(e => opts.onError && opts.onError(String(e))); return true; }
    if (!SR) { opts.onUnsupported && opts.onUnsupported(); return false; }
    /* ... bestehende Web-Speech-Implementierung unverändert ... */
  }
  function stop() {
    if (isNative && window.Capacitor?.Plugins?.SpeechRecognition) window.Capacitor.Plugins.SpeechRecognition.stop();
    /* ... plus Web-stop wie bisher ... */
  }
  return { isSupported, start, stop };
})();
```

> **Wichtig:** Behalte den Web-Zweig – so läuft dieselbe `index.html` weiterhin als
> PWA im Browser (GitHub Pages) **und** nativ in der App. Kein separater Build nötig.

Optional die Sprachausgabe (`playMedWord` / Anhören) im nativen Zweig auf
`@capacitor-community/text-to-speech` umstellen (WebView-TTS ist ebenfalls wackelig).

---

## 6. Bauen & testen (💻)

```bash
npx cap open android      # öffnet Android Studio
```
In Android Studio: „Run" auf echtem Gerät → **Mikro-Erkennung real testen**
(das ist der entscheidende Spike – funktioniert die Erkennung der Wirkstoffnamen?).

Signiertes Release-Bundle für Play:
- In Android Studio: **Build → Generate Signed Bundle / APK → Android App Bundle (.aab)**
- Keystore anlegen und **sicher aufbewahren** (ohne ihn keine Updates möglich).

---

## 7. Vor dem Store-Upload nicht vergessen

- **Google Fonts lokal bündeln** (WebView/offline lädt keine externen Fonts).
  Fredoka + Inter herunterladen, in `www/` legen, `@font-face` statt `<link>`.
- **Service Worker** ist in der nativen App überflüssig – schadet i. d. R. nicht,
  kann aber für die App-Variante deaktiviert werden.
- `www/manifest.json` bleibt für die PWA relevant, für die native App irrelevant.
- Data-Safety-Formular in der Play Console wahrheitsgemäß ausfüllen
  (bei reiner Web-Speech/lokal: keine Server-Übertragung; nach Firebase: anpassen).

---

### Kurzreferenz

| Aufgabe | Befehl |
|---|---|
| Web-Assets ins native Projekt | `npx cap copy` |
| Assets **+ Plugins** synchronisieren | `npx cap sync` |
| Android-Projekt öffnen | `npx cap open android` |
| Android-Plattform hinzufügen (einmalig) | `npx cap add android` |

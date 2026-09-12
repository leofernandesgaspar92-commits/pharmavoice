# PharmaVoice → signiertes `.aab` bauen (erste Version, Schritt für Schritt)

Ziel: aus dem Web-Code ein **signiertes Android App Bundle (`.aab`)** erzeugen und in die
Play Console hochladen. Alles mit 💻 läuft **lokal auf deinem Computer** (Windows/Mac/Linux).

> **Wichtig für v1:** Wir bauen bewusst die **einfachste lauffähige Version** – ohne native
> Speech-Plugins. Die App fällt für die Mikrofon-Erkennung automatisch auf einen freundlichen
> Hinweis + Vorsprechen zurück (der Rest – Quiz, Lexikon, Vorlesen, Gamification – funktioniert
> voll). Native Spracherkennung ist ein **optionales späteres Update** (siehe `CAPACITOR_SETUP.md`).
> So kommst du am schnellsten live.

---

## 0. Einmalig installieren (💻)
- **Node.js 18+** (nodejs.org)
- **Android Studio** (developer.android.com/studio) – bringt Android SDK + JDK 17 mit
- Beim ersten Start von Android Studio den **SDK-Download** durchlaufen lassen.

## 1. Projekt holen & vorbereiten (💻)
```bash
git clone https://github.com/leofernandesgaspar92-commits/pharmavoice.git
cd pharmavoice
npm install
npx cap add android      # legt android/ an (einmalig)
npx cap sync             # kopiert www/ ins native Projekt
```
> Bei jeder späteren Änderung an `www/` genügt künftig: `npx cap copy`

## 2. In Android Studio öffnen (💻)
```bash
npx cap open android
```
Android Studio öffnet das Projekt. Kurz warten, bis „Gradle sync" fertig ist.

## 3. Signing-Keystore anlegen (💻) — ⚠️ EINMALIG, SICHER AUFBEWAHREN
In Android Studio:
1. Menü **Build → Generate Signed App Bundle / APK…**
2. **Android App Bundle** wählen → **Next**
3. Unter „Key store path" → **Create new…**
   - **Key store path:** z. B. `pharmavoice-release.jks` (an einem sicheren Ort speichern!)
   - **Password** (Keystore) + **Key alias** (z. B. `pharmavoice`) + **Key password** vergeben
   - Name/Organisation ausfüllen → **OK**
4. Passwörter merken/notieren.

> 🔐 **KRITISCH:** Diesen **Keystore + Passwörter** brauchst du für **jedes Update** – und für
> einen späteren **Verkauf** der App. Geht er verloren, kannst du die App **nie wieder updaten**.
> → An **zwei** sicheren Orten sichern (z. B. Passwortmanager + verschlüsselte Kopie).

## 4. `.aab` erzeugen (💻)
1. Weiter im Signing-Dialog: **Next**
2. Build-Variante **release** wählen → **Finish**
3. Android Studio baut das Bundle. Ergebnis liegt unter:
   ```
   android/app/release/app-release.aab
   ```
   (Pfad wird nach dem Build als Benachrichtigung „locate" angezeigt.)

## 5. In die Play Console hochladen
1. Play Console → **App erstellen** (falls noch nicht) → Name **PharmaVoice: Wirkstoffe**.
2. Links **Testen & veröffentlichen → Interner Test** → **Neuen Release erstellen**.
3. **App-Signatur durch Google Play**: annehmen (empfohlen – Google verwahrt zusätzlich).
4. Das **`app-release.aab`** hochladen → Release-Notes eintragen → **Speichern → Überprüfen → Rollout**.
5. Erst als **internen Test** starten (nur du/eingeladene Tester), auf echtem Gerät prüfen,
   dann später **Produktion**.

## 6. Vor „Produktion" nicht vergessen (in der Console)
- **Store-Eintrag** ausfüllen → Texte/Grafiken aus `STORE_LISTING.md` + `store-assets/`.
- **Data-Safety-Formular** → „keine Datenerfassung/-übertragung" (siehe `STORE_LISTING.md`).
- **Inhaltseinstufungs-Fragebogen** ausfüllen.
- Datenschutz-URL: `https://leofernandesgaspar92-commits.github.io/pharmavoice/datenschutz.html`

---

## Häufige Stolpersteine
| Problem | Lösung |
|---|---|
| Gradle/JDK-Fehler | In Android Studio **JDK 17** verwenden (File → Settings → Build Tools → Gradle → Gradle JDK 17). |
| „SDK location not found" | Android Studio einmal öffnen lassen, SDK installieren; dann erneut bauen. |
| Web-Änderungen fehlen in der App | `npx cap copy` (oder `npx cap sync`) vor dem Build ausführen. |
| App-Version erhöhen | In `android/app/build.gradle`: `versionCode` +1 und `versionName` anpassen. |

## Version (aktuell)
- `applicationId`: `com.pharmavoice.app`
- `versionCode 1` · `versionName "1.0"` · App-Label: **PharmaVoice**

Validiert: `npm install`, `npx cap add android`, `npx cap sync` laufen im Repo fehlerfrei durch.
Der finale Gradle-Build (`.aab`) läuft in Android Studio auf deinem Rechner.

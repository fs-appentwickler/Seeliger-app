# Seeliger Apps – Ihre Website für GitHub Pages

Fertige responsive Website ohne Installation, Framework, externe Schriftarten oder Build-Schritt.

## 1. Zuerst ansehen
1. ZIP-Datei entpacken.
2. Im Ordner `seeliger-apps` die Datei `index.html` doppelt anklicken.
3. Die Website öffnet sich im Browser. Mit einem schmalen Browserfenster sehen Sie die Handyansicht.

## 2. Vor dem öffentlichen Start ergänzen
- Die Anschrift Mozartstraße 15, 30989 Gehrden ist in Impressum und Datenschutz eingetragen. Bitte vor Veröffentlichung auf Richtigkeit prüfen.
- Die deutlich markierten rechtlichen Vorlagen vervollständigen und prüfen lassen, insbesondere Hosting, E-Mail-Anbieter, Übermittlungen, Fristen und gegebenenfalls berufliche Pflichtangaben. Erst danach Vorlagenhinweise entfernen.
- Beschreibungen der fünf Apps mit dem tatsächlichen Funktionsumfang abgleichen. Für vier Apps sind bewusst Anfrage-Links statt unbekannter Store-Adressen eingebaut.
- Die Grafik auf der Startseite ist eine Illustration, kein echter Screenshot. Eigene Screenshots können später ergänzt werden.

## 3. GitHub-Repository erstellen
1. Auf https://github.com anmelden (oder kostenlos ein Konto erstellen).
2. Oben rechts auf **+**, dann **New repository** klicken.
3. Als Namen zum Beispiel `seeliger-apps` eintragen.
4. **Public** wählen. Keine privaten Dateien oder Zugangsdaten hochladen.
5. **Create repository** anklicken.

## 4. Website hochladen
1. Im neuen Repository **uploading an existing file** anklicken. Bei einem bereits gefüllten Repository: **Add file → Upload files**.
2. Den entpackten Ordner öffnen. Seinen **Inhalt** hochladen, nicht den äußeren Ordner und nicht das ZIP: `index.html`, `styles.css`, `script.js`, `impressum.html`, `datenschutz.html`, `README.md` und den gesamten Ordner `assets`.
3. Wenn sichtbar, auch die leere Datei `.nojekyll` mit hochladen. Auf dem Mac zeigt **Cmd + Shift + Punkt** versteckte Dateien. Für diese einfache Website funktioniert Pages auch ohne diese Datei.
4. Unten **Commit changes** anklicken.
5. Kontrollieren: `index.html` muss direkt auf der ersten Ebene des Repositorys stehen. Die Bilder müssen unter `assets/images` liegen.

## 5. GitHub Pages aktivieren
1. Im Repository auf **Settings** klicken.
2. Links **Pages** auswählen.
3. Unter **Build and deployment → Source** die Option **Deploy from a branch** wählen.
4. Unter **Branch** `main` und daneben **/(root)** auswählen.
5. Auf **Save** klicken.
6. Nach einigen Minuten diese Seite erneut öffnen. GitHub zeigt die Website-Adresse und **Visit site** an.

Die Adresse lautet normalerweise `https://IHR-BENUTZERNAME.github.io/seeliger-apps/`. Verwenden Sie die tatsächlich von GitHub angezeigte Adresse. Bei einem anderen Repositorynamen ändert sich der letzte Teil.

Offizielle Anleitung: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 6. Texte später bearbeiten
1. Auf GitHub die Datei `index.html` öffnen.
2. Auf das Stiftsymbol **Edit this file** klicken.
3. Den gewünschten Text suchen und ändern. HTML-Zeichen wie `<h3>` oder `</p>` stehen lassen.
4. **Commit changes** anklicken. Nach der nächsten Veröffentlichung erscheint die Änderung online.

Alternativ Dateien lokal mit einem Texteditor bearbeiten und erneut hochladen. Bei TextEdit auf dem Mac reinen Text verwenden; nicht als formatiertes Dokument speichern.

### Einen fehlenden App-Store-Link ergänzen
In `index.html` die Karte mit dem App-Namen suchen. Dort den vollständigen Anfrage-Link durch den echten Link ersetzen:

```html
<a class="text-link" href="HIER_DIE_ECHTE_APP_STORE_ADRESSE_EINTRAGEN">Im Apple App Store ansehen ↗</a>
```

Danach die direkt folgende Zeile `<small class="link-note">App-Store-Link wird ergänzt.</small>` entfernen. Die Beispieladresse oben erst durch eine echte URL ersetzen, bevor Sie speichern. Der Link für PV Abnahmeprotokoll ist bereits korrekt eingetragen.

### Bilder ergänzen
Eigene Bilder nach `assets/images` hochladen. Die Anleitung in `assets/images/README.md` zeigt, wie sie im HTML eingefügt werden. Keine Kundendaten in Screenshots veröffentlichen.

### Farben ändern
Am Anfang von `styles.css` stehen die Hauptfarben unter `:root`. `--ink` ist die dunkle Grundfarbe, `--accent` die Akzentfarbe. Keine Änderung an `script.js` nötig.

## Kontakt und Datenschutz
E-Mail und Telefon sind direkt verlinkt. Es gibt kein Formular, das einen Versand vortäuscht. Ein E-Mail-Link öffnet das E-Mail-Programm. Ohne eingerichtetes Programm kann die angezeigte Adresse kopiert werden.

Der Website-Code enthält keine Cookies, Analyse, externe Bibliotheken oder automatisch geladenen Dienste. Das Hosting verarbeitet dennoch technische Zugriffsdaten. Die Datenschutzvorlage muss zum tatsächlichen Hosting passen.

Rechtliche Quellen zur Prüfung:
- https://www.gesetze-im-internet.de/ddg/__5.html
- https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement

## Wenn etwas nicht funktioniert
- **404:** Warten Sie einige Minuten. Prüfen Sie `main`, `/(root)` und ob `index.html` direkt im Repository liegt.
- **Keine Gestaltung/Bilder:** Auch `styles.css`, `script.js` und den Ordner `assets` hochladen. Dateinamen sind groß-/kleinschreibungsabhängig.
- **Änderung fehlt:** Unter **Actions** prüfen, ob die Veröffentlichung abgeschlossen ist. Danach Seite neu laden, gegebenenfalls mit Cmd/Strg + Shift + R.
- **Pages nicht auswählbar:** Administratorrechte und die Sichtbarkeit des Repositorys prüfen.

## Dateien
- `index.html`: Startseite und App-Übersicht
- `styles.css`: Darstellung für Handy, Tablet und Desktop
- `script.js`: mobiles Menü und Jahreszahl; Inhalte auch ohne JavaScript zugänglich
- `impressum.html`, `datenschutz.html`: zu vervollständigende Vorlagen
- `assets`: lokale Grafik, Favicon und Bilder-Anleitung
- `.nojekyll`: direkte Veröffentlichung statischer Dateien

Diese Lieferung ist noch nicht auf GitHub veröffentlicht.

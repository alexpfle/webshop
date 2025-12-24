# NovaNest – statischer Demo-Webshop (Übungsprojekt)

## Inhalt
Dieser Ordner enthält eine fertige statische Website (HTML/CSS/JS) mit:
- Startseite + Shop + Produktdetailseiten
- Warenkorb (LocalStorage) + Checkout (Mock) + Success-Seite
- Pflichtseiten: Barrierefreiheit, Datenschutz, Lizenz, Impressum/Offenlegung, Kontakt, Credits

## Öffnen in VS Code
1. Öffne diesen Ordner in VS Code.
2. Starte einen lokalen Server (empfohlen, weil JS-Module verwendet werden):

### Option A: VS Code Extension “Live Server”
- Rechtsklick auf `index.html` → “Open with Live Server”

### Option B: Python
```bash
python -m http.server 5500
```
Dann im Browser: `http://localhost:5500`

## Deployment
- GitHub Pages oder Cloudflare Pages funktionieren direkt (keine Build-Schritte).
- Für GitHub Pages als Projektseite (…/repo-name/) ist die Struktur kompatibel, weil die Links überwiegend relativ sind.

## Was du noch anpassen solltest
- Produktbeschreibung, Firma, Geschäftsmodell (Aufgabe 0)
- Rechtstexte (Lizenz/Datenschutz/Impressum) auf echte Daten/Tools
- Markenrecherche dokumentieren (TMview/EUIPO etc.)
- Credits: externe Medien wirklich mit korrekter Lizenz/Quelle ergänzen

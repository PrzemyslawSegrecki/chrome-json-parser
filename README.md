# JSON Parser Extension

**[PL](#polski) · [EN](#english)**

---

## Polski

Rozszerzenie Chrome (Manifest V3), które pozwala szybko obejrzeć JSON z dowolnej strony w czytelnym, zwijanym drzewie.

### Jak używać
1. Zaznacz tekst JSON na stronie.
2. Kliknij prawym przyciskiem myszy i wybierz **Parsuj JSON**.
3. Otworzy się okno z drzewem JSON. Treść możesz też edytować lub wkleić ręcznie w lewym panelu.

Podgląd działa w całości lokalnie – zaznaczony tekst nie jest nigdzie wysyłany.

### Funkcje
- drzewo JSON ze zwijaniem i rozwijaniem węzłów (react-json-view),
- opcje: typy danych, rozmiar obiektów, motywy (Default, Monokai, Ocean),
- czytelny komunikat dla niepoprawnego JSON-a.

### Instalacja
**Z releasu:** pobierz `json-parser-extension.zip` z zakładki [Releases](../../releases), rozpakuj, następnie w `chrome://extensions` włącz *Tryb programisty* i kliknij *Załaduj rozpakowane* wskazując rozpakowany folder.

**Ze źródeł:**
```bash
cd json-parser
npm install
npm run build:extension
```
Następnie załaduj folder `extension/` w `chrome://extensions`.

### Struktura
- `extension/` – gotowe rozszerzenie (`manifest.json`, `background.js`, `viewer/`)
- `json-parser/` – źródła aplikacji React używanej jako viewer

---

## English

A Chrome extension (Manifest V3) for quickly inspecting JSON from any web page in a readable, collapsible tree.

### Usage
1. Select JSON text on a page.
2. Right-click and choose **Parsuj JSON** (“Parse JSON”).
3. A window with the JSON tree opens. You can also edit or paste JSON manually in the left pane.

The viewer runs entirely locally – the selected text is never sent anywhere.

### Features
- collapsible JSON tree (react-json-view),
- options: data types, object size, themes (Default, Monokai, Ocean),
- clear error message for invalid JSON.

### Installation
**From a release:** download `json-parser-extension.zip` from the [Releases](../../releases) tab, unzip it, then in `chrome://extensions` enable *Developer mode* and click *Load unpacked*, selecting the unzipped folder.

**From source:**
```bash
cd json-parser
npm install
npm run build:extension
```
Then load the `extension/` folder in `chrome://extensions`.

### Structure
- `extension/` – the ready-to-load extension (`manifest.json`, `background.js`, `viewer/`)
- `json-parser/` – source of the React app used as the viewer

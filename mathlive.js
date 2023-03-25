/** MathLive 0.90.6 */
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MathLive = {}));
})(this, (function(exports) {
  'use strict';
  var MathLive = (() => {
    var Vi = Object.defineProperty,
      ul = Object.defineProperties,
      dl = Object.getOwnPropertyDescriptor,
      ml = Object.getOwnPropertyDescriptors,
      pl = Object.getOwnPropertyNames,
      ln = Object.getOwnPropertySymbols;
    var un = Object.prototype.hasOwnProperty,
      hl = Object.prototype.propertyIsEnumerable;
    var cn = (t, e, r) => e in t ? Vi(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
      }) : t[e] = r,
      b = (t, e) => {
        for (var r in e || (e = {})) un.call(e, r) && cn(t, r, e[r]);
        if (ln)
          for (var r of ln(e)) hl.call(e, r) && cn(t, r, e[r]);
        return t
      },
      P = (t, e) => ul(t, ml(e));
    var fl = (t, e) => {
        for (var r in e) Vi(t, r, {
          get: e[r],
          enumerable: !0
        })
      },
      gl = (t, e, r, i) => {
        if (e && typeof e == "object" || typeof e == "function")
          for (let o of pl(e)) !un.call(t, o) && o !== r && Vi(t, o, {
            get: () => e[o],
            enumerable: !(i = dl(e, o)) || i.enumerable
          });
        return t
      };
    var yl = t => gl(Vi({}, "__esModule", {
      value: !0
    }), t);
    var ed = {};
    fl(ed, {
      MathfieldElement: () => ae,
      autoRenderMathInElement: () => nn,
      convertAsciiMathToLatex: () => Ou,
      convertLatexToAsciiMath: () => Ku,
      convertLatexToMarkup: () => tn,
      convertLatexToMathMl: () => rn,
      convertLatexToSpeakableText: () => on,
      debug: () => Qu,
      globalMathLive: () => bt,
      makeSharedVirtualKeyboard: () => ju,
      renderMathInDocument: () => Xu,
      renderMathInElement: () => cl,
      serializeMathJsonToLatex: () => an,
      validateLatex: () => Bu,
      version: () => Yu
    });

    function Y(t) {
      return Array.isArray(t)
    }
    var dn = {
      en: {
        "keyboard.tooltip.functions": "Functions",
        "keyboard.tooltip.symbols": "Symbols",
        "keyboard.tooltip.greek": "Greek Letters",
        "keyboard.tooltip.command": "LaTeX Command Mode",
        "keyboard.tooltip.numeric": "Numeric",
        "keyboard.tooltip.alphabetic": "Roman Letters",
        "tooltip.copy to clipboard": "Copy to Clipboard",
        "tooltip.cut to clipboard": "Cut to Clipboard",
        "tooltip.paste from clipboard": "Paste from Clipboard",
        "tooltip.redo": "Redo",
        "tooltip.toggle virtual keyboard": "Toggle Virtual Keyboard",
        "tooltip.undo": "Undo",
        "menu.insert matrix": "Insert Matrix",
        "menu.insert vector": "Insert Vector",
        "submenu.array.matrix delimiters": "Matrix Delimiters",
        "menu.array.add row above": "Add Row After",
        "menu.array.add row below": "Add Row Before",
        "menu.array.add column after": "Add Column After",
        "menu.array.add column before": "Add Column Before",
        "menu.array.delete row": "Delete Row",
        "menu.array.delete rows": "Delete Selected Rows",
        "menu.array.delete column": "Delete Column",
        "menu.array.delete columns": "Delete Selected Columns",
        "submenu.array.insert separator": "Insert Separator",
        "menu.insert table": "Insert Table",
        "submenu.table style": "Table Style"
      },
      ar: {
        "keyboard.tooltip.functions": "\u0645\u0647\u0627\u0645",
        "keyboard.tooltip.symbols": "\u062D\u0631\u0641 \u0627\u0648 \u0631\u0645\u0632",
        "keyboard.tooltip.greek": "\u062D\u0631\u0648\u0641 \u064A\u0648\u0646\u0627\u0646\u064A\u0629",
        "keyboard.tooltip.command": "\u062D\u0627\u0644\u0629 \u062A\u0644\u0642\u064A \u0627\u0644\u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u0644\u0627\u062A\u0643",
        "keyboard.tooltip.numeric": "\u0627\u0644\u0631\u0642\u0645\u064A\u0629",
        "keyboard.tooltip.alphabetic": "\u0631\u0645\u0648\u0632 \u0627\u0644\u0627\u062D\u0631\u0641 \u0627\u0644\u0631\u0648\u0645\u0627\u0646\u064A\u0629",
        "tooltip.copy to clipboard": "\u0646\u0633\u062E \u0625\u0644\u0649 \u0627\u0644\u062D\u0627\u0641\u0638\u0629",
        "tooltip.redo": "\u0627\u0644\u0625\u0639\u0627\u062F\u0629",
        "tooltip.toggle virtual keyboard": "\u062A\u0628\u062F\u064A\u0644 \u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0641\u0627\u062A\u064A\u062D \u0627\u0644\u0625\u0641\u062A\u0631\u0627\u0636\u064A\u0629",
        "tooltip.undo": "\u0625\u0644\u063A\u0627\u0621",
        "menu.insert matrix": "\u0623\u062F\u062E\u0644 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629",
        "menu.insert vector": "\u0623\u062F\u062E\u0644 \u0645\u062A\u062C\u0647",
        "submenu.array.matrix delimiters": "\u0645\u062D\u062F\u062F\u0627\u062A \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629",
        "menu.array.add row above": "\u0623\u0636\u0641 \u0635\u0641\u064B\u0627 \u0628\u0639\u062F \u0630\u0644\u0643",
        "menu.array.add row below": "\u0623\u0636\u0641 \u0627\u0644\u0635\u0641 \u0642\u0628\u0644",
        "menu.array.add column after": "\u0623\u0636\u0641 \u0627\u0644\u0639\u0645\u0648\u062F \u0628\u0639\u062F \u0630\u0644\u0643",
        "menu.array.add column before": "\u0623\u0636\u0641 \u0627\u0644\u0639\u0645\u0648\u062F \u0642\u0628\u0644",
        "menu.array.delete row": "\u0627\u062D\u0630\u0641 \u0635\u0641",
        "menu.array.delete rows": "\u062D\u0630\u0641 \u0627\u0644\u0635\u0641\u0648\u0641 \u0627\u0644\u0645\u062D\u062F\u062F\u0629",
        "menu.array.delete column": "\u062D\u0630\u0641 \u0627\u0644\u0639\u0645\u0648\u062F",
        "menu.array.delete columns": "\u062D\u0630\u0641 \u0627\u0644\u0623\u0639\u0645\u062F\u0629 \u0627\u0644\u0645\u062D\u062F\u062F\u0629",
        "submenu.array.insert separator": "\u0623\u062F\u062E\u0644 \u0641\u0627\u0635\u0644",
        "menu.insert table": "\u0625\u062F\u0631\u0627\u062C \u062C\u062F\u0648\u0644",
        "submenu.table style": "\u0646\u0645\u0637 \u0627\u0644\u062C\u062F\u0648\u0644"
      },
      bg: {
        "keyboard.tooltip.functions": "\u0424\u0443\u043D\u043A\u0446\u0438\u0438",
        "keyboard.tooltip.symbols": "\u0421\u0438\u043C\u0432\u043E\u043B\u0438",
        "keyboard.tooltip.greek": "\u0413\u0440\u044A\u0446\u043A\u0438 \u0431\u0443\u043A\u0432\u0438",
        "keyboard.tooltip.command": "\u041A\u043E\u043C\u0430\u043D\u0434\u0435\u043D \u0440\u0435\u0436\u0438\u043C \u043D\u0430 \u043B\u0430\u0442\u0435\u043A\u0441",
        "keyboard.tooltip.numeric": "\u0427\u0438\u0441\u043B\u043E\u0432\u0438",
        "keyboard.tooltip.alphabetic": "\u0420\u0438\u043C\u0441\u043A\u0438 \u0431\u0443\u043A\u0432\u0438",
        "tooltip.copy to clipboard": "\u041A\u043E\u043F\u0438\u0440\u0430\u043D\u0435 \u0432 \u043A\u043B\u0438\u043F\u0431\u043E\u0440\u0434\u0430",
        "tooltip.redo": "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u043E",
        "tooltip.toggle virtual keyboard": "\u041F\u0440\u0435\u0432\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435 \u043D\u0430 \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u043D\u0430 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430",
        "tooltip.undo": "\u041E\u0442\u043C\u044F\u043D\u0430",
        "menu.insert matrix": "\u0412\u043C\u044A\u043A\u0432\u0430\u043D\u0435 \u043D\u0430 \u043C\u0430\u0442\u0440\u0438\u0446\u0430",
        "menu.insert vector": "\u0412\u043C\u044A\u043A\u0432\u0430\u043D\u0435 \u043D\u0430 \u0432\u0435\u043A\u0442\u043E\u0440",
        "submenu.array.matrix delimiters": "\u041C\u0430\u0442\u0440\u0438\u0447\u043D\u0438 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u0438",
        "menu.array.add row above": "\u0414\u043E\u0431\u0430\u0432\u044F\u043D\u0435 \u043D\u0430 \u0440\u0435\u0434 \u0441\u043B\u0435\u0434",
        "menu.array.add row below": "\u0414\u043E\u0431\u0430\u0432\u044F\u043D\u0435 \u043D\u0430 \u0440\u0435\u0434 \u043F\u0440\u0435\u0434\u0438",
        "menu.array.add column after": "\u0414\u043E\u0431\u0430\u0432\u044F\u043D\u0435 \u043D\u0430 \u043A\u043E\u043B\u043E\u043D\u0430 \u0441\u043B\u0435\u0434",
        "menu.array.add column before": "\u0414\u043E\u0431\u0430\u0432\u044F\u043D\u0435 \u043D\u0430 \u043A\u043E\u043B\u043E\u043D\u0430 \u043F\u0440\u0435\u0434\u0438",
        "menu.array.delete row": "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0440\u0435\u0434\u0430",
        "menu.array.delete rows": "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0438\u0437\u0431\u0440\u0430\u043D\u0438\u0442\u0435 \u0440\u0435\u0434\u043E\u0432\u0435",
        "menu.array.delete column": "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u043A\u043E\u043B\u043E\u043D\u0430",
        "menu.array.delete columns": "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0438\u0437\u0431\u0440\u0430\u043D\u0438\u0442\u0435 \u043A\u043E\u043B\u043E\u043D\u0438",
        "submenu.array.insert separator": "\u041F\u043E\u0441\u0442\u0430\u0432\u0435\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B",
        "menu.insert table": "\u0412\u043C\u044A\u043A\u0432\u0430\u043D\u0435 \u043D\u0430 \u0442\u0430\u0431\u043B\u0438\u0446\u0430",
        "submenu.table style": "\u0422\u0430\u0431\u043B\u0438\u0447\u0435\u043D \u0441\u0442\u0438\u043B"
      },
      bs: {
        "keyboard.tooltip.functions": "Funkcije",
        "keyboard.tooltip.symbols": "Simboli",
        "keyboard.tooltip.greek": "Gr\u010Dka slova",
        "keyboard.tooltip.command": "LaTeX naredbeni na\u010Din",
        "keyboard.tooltip.numeric": "Numeri\u010Dki",
        "keyboard.tooltip.alphabetic": "Rimska slova",
        "tooltip.copy to clipboard": "Kopirati u clipboard",
        "tooltip.redo": "Ponovi",
        "tooltip.toggle virtual keyboard": "Uklju\u010Di / isklju\u010Di virtualnu tipkovnicu",
        "tooltip.undo": "Poni\u0161ti",
        "menu.insert matrix": "Umetni matricu",
        "menu.insert vector": "Umetni vektor",
        "submenu.array.matrix delimiters": "Matri\u010Dni razdjelnici",
        "menu.array.add row above": "Dodaj redak nakon",
        "menu.array.add row below": "Dodaj red prije",
        "menu.array.add column after": "Dodaj stupac nakon",
        "menu.array.add column before": "Dodaj stupac prije",
        "menu.array.delete row": "Izbri\u0161i red",
        "menu.array.delete rows": "Izbri\u0161i odabrane redove",
        "menu.array.delete column": "Izbri\u0161i stupac",
        "menu.array.delete columns": "Izbri\u0161i odabrane stupce",
        "submenu.array.insert separator": "Umetni separator",
        "menu.insert table": "Ubaci tabelu",
        "submenu.table style": "Stil tabele"
      },
      cs: {
        "keyboard.tooltip.functions": "Funkce",
        "keyboard.tooltip.symbols": "Symboly",
        "keyboard.tooltip.greek": "\u0158eck\xE9 dopisy",
        "keyboard.tooltip.command": "P\u0159\xEDkazov\xFD re\u017Eim LaTeX",
        "keyboard.tooltip.numeric": "\u010C\xEDseln\xE9",
        "keyboard.tooltip.alphabetic": "\u0158\xEDmsk\xE9 dopisy",
        "tooltip.copy to clipboard": "Zkop\xEDrovat do schr\xE1nky",
        "tooltip.redo": "P\u0159ed\u011Blat",
        "tooltip.toggle virtual keyboard": "P\u0159epnout virtu\xE1ln\xED kl\xE1vesnici",
        "tooltip.undo": "Vr\xE1tit",
        "menu.insert matrix": "Vlo\u017Ete matici",
        "menu.insert vector": "Vlo\u017Eit vektor",
        "submenu.array.matrix delimiters": "Odd\u011Blova\u010De matic",
        "menu.array.add row above": "P\u0159idat \u0159\xE1dek za",
        "menu.array.add row below": "P\u0159idat \u0159\xE1dek p\u0159ed",
        "menu.array.add column after": "P\u0159idat sloupec za",
        "menu.array.add column before": "P\u0159idat sloupec d\u0159\xEDve",
        "menu.array.delete row": "Odstranit \u0159\xE1dek",
        "menu.array.delete rows": "Odstranit vybran\xE9 \u0159\xE1dky",
        "menu.array.delete column": "Odstranit sloupec",
        "menu.array.delete columns": "Odstranit vybran\xE9 sloupce",
        "submenu.array.insert separator": "Vlo\u017Ete odd\u011Blova\u010D",
        "menu.insert table": "Vlo\u017Eit tabulku",
        "submenu.table style": "Styl tabulky"
      },
      da: {
        "keyboard.tooltip.functions": "Funktioner",
        "keyboard.tooltip.symbols": "Symboler",
        "keyboard.tooltip.greek": "Gr\xE6ske bogstaver",
        "keyboard.tooltip.command": "LaTeX kommandotilstand",
        "keyboard.tooltip.numeric": "Numerisk",
        "keyboard.tooltip.alphabetic": "Romerske breve",
        "tooltip.copy to clipboard": "Kopier til udklipsholder",
        "tooltip.redo": "Gentag igen",
        "tooltip.toggle virtual keyboard": "Skift virtuelt tastatur",
        "tooltip.undo": "Fortryd",
        "menu.insert matrix": "Inds\xE6t matrix",
        "menu.insert vector": "Inds\xE6t vektor",
        "submenu.array.matrix delimiters": "Matrixafgr\xE6nsere",
        "menu.array.add row above": "Tilf\xF8j r\xE6kke efter",
        "menu.array.add row below": "Tilf\xF8j r\xE6kke f\xF8r",
        "menu.array.add column after": "Tilf\xF8j kolonne efter",
        "menu.array.add column before": "Tilf\xF8j kolonne f\xF8r",
        "menu.array.delete row": "Slet r\xE6kke",
        "menu.array.delete rows": "Slet valgte r\xE6kker",
        "menu.array.delete column": "Slet kolonne",
        "menu.array.delete columns": "Slet valgte kolonner",
        "submenu.array.insert separator": "Inds\xE6t separator",
        "menu.insert table": "Inds\xE6t tabel",
        "submenu.table style": "Tabelstil"
      },
      de: {
        "keyboard.tooltip.functions": "Funktionen",
        "keyboard.tooltip.symbols": "Symbole",
        "keyboard.tooltip.greek": "Griechische Buchstaben",
        "keyboard.tooltip.command": "LaTeX-Befehlsmodus",
        "keyboard.tooltip.numeric": "Numerisch",
        "keyboard.tooltip.alphabetic": "R\xF6mische Buchstaben",
        "tooltip.copy to clipboard": "In die Zwischenablage kopieren",
        "tooltip.redo": "Wiederholen",
        "tooltip.toggle virtual keyboard": "Virtuelle Tastatur umschalten",
        "tooltip.undo": "Widerrufen",
        "menu.insert matrix": "Matrix einf\xFCgen",
        "menu.insert vector": "Vektor einf\xFCgen",
        "submenu.array.matrix delimiters": "Matrixtrennzeichen",
        "menu.array.add row above": "Zeile hinzuf\xFCgen nach",
        "menu.array.add row below": "Zeile hinzuf\xFCgen vor",
        "menu.array.add column after": "Spalte hinzuf\xFCgen nach",
        "menu.array.add column before": "Spalte hinzuf\xFCgen vor",
        "menu.array.delete row": "Zeile l\xF6schen",
        "menu.array.delete rows": "Ausgew\xE4hlte Zeilen l\xF6schen",
        "menu.array.delete column": "Spalte l\xF6schen",
        "menu.array.delete columns": "Ausgew\xE4hlte Spalten l\xF6schen",
        "submenu.array.insert separator": "Trennzeichen einf\xFCgen",
        "menu.insert table": "Tabelle einf\xFCgen",
        "submenu.table style": "Tabellenstil"
      },
      el: {
        "keyboard.tooltip.functions": "\u03C3\u03C5\u03BD\u03B1\u03C1\u03C4\u03AE\u03C3\u03B5\u03B9\u03C2",
        "keyboard.tooltip.symbols": "\u03C3\u03CD\u03BC\u03B2\u03BF\u03BB\u03B1",
        "keyboard.tooltip.greek": "\u03B5\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC \u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03B1",
        "keyboard.tooltip.command": "\u039B\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03B5\u03BD\u03C4\u03BF\u03BB\u03CE\u03BD LaTeX",
        "keyboard.tooltip.numeric": "\u0391\u03C1\u03B9\u03B8\u03BC\u03B7\u03C4\u03B9\u03BA\u03CC\u03C2",
        "keyboard.tooltip.alphabetic": "\u03A1\u03C9\u03BC\u03B1\u03CA\u03BA\u03AC \u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03B1",
        "tooltip.copy to clipboard": "\u0391\u03BD\u03C4\u03B9\u03B3\u03C1\u03B1\u03C6\u03AE \u03C3\u03C4\u03BF \u03C0\u03C1\u03CC\u03C7\u03B5\u03B9\u03C1\u03BF",
        "tooltip.redo": "\u039E\u03B1\u03BD\u03B1\u03BA\u03AC\u03BD\u03C9",
        "tooltip.toggle virtual keyboard": "\u0395\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03B5\u03B9\u03BA\u03BF\u03BD\u03B9\u03BA\u03BF\u03CD \u03C0\u03BB\u03B7\u03BA\u03C4\u03C1\u03BF\u03BB\u03BF\u03B3\u03AF\u03BF\u03C5",
        "tooltip.undo": "\u039E\u03B5\u03BA\u03AC\u03BD\u03C9",
        "menu.insert matrix": "\u0395\u03B9\u03C3\u03B1\u03B3\u03C9\u03B3\u03AE Matrix",
        "menu.insert vector": "\u0395\u03B9\u03C3\u03B1\u03B3\u03C9\u03B3\u03AE \u03B4\u03B9\u03B1\u03BD\u03CD\u03C3\u03BC\u03B1\u03C4\u03BF\u03C2",
        "submenu.array.matrix delimiters": "\u039F\u03C1\u03B9\u03BF\u03B8\u03AD\u03C4\u03B5\u03C2 Matrix",
        "menu.array.add row above": "\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u03C3\u03B5\u03B9\u03C1\u03AC\u03C2 \u03BC\u03B5\u03C4\u03AC",
        "menu.array.add row below": "\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u03C3\u03B5\u03B9\u03C1\u03AC\u03C2 \u03C0\u03C1\u03B9\u03BD",
        "menu.array.add column after": "\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u03C3\u03C4\u03AE\u03BB\u03B7\u03C2 \u03BC\u03B5\u03C4\u03AC",
        "menu.array.add column before": "\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u03C3\u03C4\u03AE\u03BB\u03B7\u03C2 \u03C0\u03C1\u03B9\u03BD",
        "menu.array.delete row": "\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03C3\u03B5\u03B9\u03C1\u03AC\u03C2",
        "menu.array.delete rows": "\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03C9\u03BD \u03C3\u03B5\u03B9\u03C1\u03CE\u03BD",
        "menu.array.delete column": "\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03C3\u03C4\u03AE\u03BB\u03B7\u03C2",
        "menu.array.delete columns": "\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03C9\u03BD \u03C3\u03C4\u03B7\u03BB\u03CE\u03BD",
        "submenu.array.insert separator": "\u0395\u03B9\u03C3\u03B1\u03B3\u03C9\u03B3\u03AE \u03B4\u03B9\u03B1\u03C7\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03BF\u03CD",
        "menu.insert table": "\u0395\u03B9\u03C3\u03B1\u03B3\u03C9\u03B3\u03AE \u03C0\u03AF\u03BD\u03B1\u03BA\u03B1",
        "submenu.table style": "\u03A3\u03C4\u03C5\u03BB \u03C0\u03AF\u03BD\u03B1\u03BA\u03B1"
      },
      es: {
        "keyboard.tooltip.functions": "Funciones",
        "keyboard.tooltip.symbols": "S\xEDmbolos",
        "keyboard.tooltip.greek": "Letras griegas",
        "keyboard.tooltip.command": "Modo Comando LaTeX",
        "keyboard.tooltip.numeric": "Num\xE9rico",
        "keyboard.tooltip.alphabetic": "Letras romanas",
        "tooltip.copy to clipboard": "Copiar al portapapeles",
        "tooltip.redo": "Rehacer",
        "tooltip.toggle virtual keyboard": "Alternar teclado virtual",
        "tooltip.undo": "Deshacer",
        "menu.insert matrix": "A\xF1adir Matriz",
        "menu.insert vector": "A\xF1adir vector",
        "submenu.array.matrix delimiters": "Delimitadores de Matriz",
        "menu.array.add row above": "A\xF1adir L\xEDnea Antes",
        "menu.array.add row below": "A\xF1adir L\xEDnea Despues",
        "menu.array.add column after": "A\xF1adir Columna Despues",
        "menu.array.add column before": "A\xF1adir Columna Antes",
        "menu.array.delete row": "Borrar L\xEDnea",
        "menu.array.delete rows": "Borrar L\xEDneas Seleccionadas",
        "menu.array.delete column": "Borrar Columna",
        "menu.array.delete columns": "Borrar Columnas Seleccionadas",
        "submenu.array.insert separator": "Insertar un Separador",
        "menu.insert table": "Insertar Tabla",
        "submenu.table style": "Estilo de Tabla"
      },
      et: {
        "keyboard.tooltip.functions": "Funktsioonid",
        "keyboard.tooltip.symbols": "S\xFCmbolid",
        "keyboard.tooltip.greek": "Kreeka kirjad",
        "keyboard.tooltip.command": "LaTeXi k\xE4sure\u017Eiim",
        "keyboard.tooltip.numeric": "Numbriline",
        "keyboard.tooltip.alphabetic": "Rooma kirjad",
        "tooltip.copy to clipboard": "Kopeerida l\xF5ikelauale",
        "tooltip.redo": "Tee uuesti",
        "tooltip.toggle virtual keyboard": "L\xFClitage sisse virtuaalne klaviatuur",
        "tooltip.undo": "V\xF5ta tagasi",
        "menu.insert matrix": "Sisesta maatriks",
        "menu.insert vector": "Sisesta vektor",
        "submenu.array.matrix delimiters": "Maatriksi eraldajad",
        "menu.array.add row above": "Lisa rida p\xE4rast",
        "menu.array.add row below": "Lisa rida enne",
        "menu.array.add column after": "Lisa veerg p\xE4rast",
        "menu.array.add column before": "Lisa veerg enne",
        "menu.array.delete row": "Kustuta rida",
        "menu.array.delete rows": "Kustuta valitud read",
        "menu.array.delete column": "Kustuta veerg",
        "menu.array.delete columns": "Kustuta valitud veerud",
        "submenu.array.insert separator": "Sisestage eraldaja",
        "menu.insert table": "Sisesta tabeli",
        "submenu.table style": "Tabeli stiilis"
      },
      fa: {
        "keyboard.tooltip.functions": "\u062A\u0648\u0627\u0628\u0639",
        "keyboard.tooltip.symbols": "\u0646\u0645\u0627\u062F\u0647\u0627",
        "keyboard.tooltip.greek": "\u062D\u0631\u0648\u0641 \u06CC\u0648\u0646\u0627\u0646\u06CC",
        "keyboard.tooltip.command": "\u062D\u0627\u0644\u062A \u062F\u0633\u062A\u0648\u0631 \u0644\u0627\u062A\u06A9",
        "keyboard.tooltip.numeric": "\u0639\u062F\u062F\u06CC",
        "keyboard.tooltip.alphabetic": "\u062D\u0631\u0648\u0641 \u0631\u0648\u0645\u06CC",
        "tooltip.copy to clipboard": "\u06A9\u067E\u06CC \u0628\u0647 \u06A9\u0644\u06CC\u067E\u0628\u0648\u0631\u062F",
        "tooltip.redo": "\u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u0628\u0639\u062F",
        "tooltip.toggle virtual keyboard": "\u0646\u0645\u0627\u06CC\u0634/\u0646\u0647\u0641\u062A\u0646 \u06A9\u06CC\u0628\u0648\u0631\u062F \u0645\u062C\u0627\u0632\u06CC",
        "tooltip.undo": "\u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u0642\u0628\u0644",
        "menu.insert matrix": "\u0645\u0627\u062A\u0631\u06CC\u0633 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
        "menu.insert vector": "\u062F\u0631\u062C \u0628\u0631\u062F\u0627\u0631",
        "submenu.array.matrix delimiters": "\u0645\u0631\u0632\u0647\u0627\u06CC \u0645\u0627\u062A\u0631\u06CC\u0633",
        "menu.array.add row above": "\u0628\u0639\u062F \u0627\u0632 \u0622\u0646 \u0631\u062F\u06CC\u0641 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F",
        "menu.array.add row below": "\u0631\u062F\u06CC\u0641 \u0631\u0627 \u0642\u0628\u0644 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F",
        "menu.array.add column after": "\u0627\u0636\u0627\u0641\u0647 \u06A9\u0631\u062F\u0646 \u0633\u062A\u0648\u0646 \u0628\u0639\u062F",
        "menu.array.add column before": "\u0633\u062A\u0648\u0646 \u0642\u0628\u0644 \u0631\u0627 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F",
        "menu.array.delete row": "\u0631\u062F\u06CC\u0641 \u0631\u0627 \u062D\u0630\u0641 \u06A9\u0646\u06CC\u062F",
        "menu.array.delete rows": "\u0631\u062F\u06CC\u0641 \u0647\u0627\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0634\u062F\u0647 \u0631\u0627 \u062D\u0630\u0641 \u06A9\u0646\u06CC\u062F",
        "menu.array.delete column": "\u062D\u0630\u0641 \u0633\u062A\u0648\u0646",
        "menu.array.delete columns": "\u0633\u062A\u0648\u0646 \u0647\u0627\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0634\u062F\u0647 \u0631\u0627 \u062D\u0630\u0641 \u06A9\u0646\u06CC\u062F",
        "submenu.array.insert separator": "\u062F\u0631\u062C \u062C\u062F\u0627 \u06A9\u0646\u0646\u062F\u0647",
        "menu.insert table": "\u0642\u0631\u0627\u0631 \u062F\u0627\u062F\u0646 \u062C\u062F\u0648\u0644",
        "submenu.table style": "\u0633\u0628\u06A9 \u0645\u06CC\u0632"
      },
      fi: {
        "keyboard.tooltip.functions": "Toiminnot",
        "keyboard.tooltip.symbols": "Symbolit",
        "keyboard.tooltip.greek": "Kreikkalaiset kirjeet",
        "keyboard.tooltip.command": "LaTeX-komentotila",
        "keyboard.tooltip.numeric": "Numeerinen",
        "keyboard.tooltip.alphabetic": "Roomalaiset kirjeet",
        "tooltip.copy to clipboard": "Kopioi leikep\xF6yd\xE4lle",
        "tooltip.redo": "Tee uudelleen",
        "tooltip.toggle virtual keyboard": "Vaihda virtuaalin\xE4pp\xE4imist\xF6",
        "tooltip.undo": "Kumoa",
        "menu.insert matrix": "Lis\xE4\xE4 matriisi",
        "menu.insert vector": "Lis\xE4\xE4 vektori",
        "submenu.array.matrix delimiters": "Matriisin erottimet",
        "menu.array.add row above": "Lis\xE4\xE4 rivi j\xE4lkeen",
        "menu.array.add row below": "Lis\xE4\xE4 rivi ennen",
        "menu.array.add column after": "Lis\xE4\xE4 sarake j\xE4lkeen",
        "menu.array.add column before": "Lis\xE4\xE4 sarake ennen",
        "menu.array.delete row": "Poista rivi",
        "menu.array.delete rows": "Poista valitut rivit",
        "menu.array.delete column": "Poista sarake",
        "menu.array.delete columns": "Poista valitut sarakkeet",
        "submenu.array.insert separator": "Aseta erotin",
        "menu.insert table": "Lis\xE4\xE4 taulukko",
        "submenu.table style": "Taulukon tyyli"
      },
      fr: {
        "keyboard.tooltip.functions": "Fonctions",
        "keyboard.tooltip.symbols": "Symboles",
        "keyboard.tooltip.greek": "Lettres grecques",
        "keyboard.tooltip.command": "Mode de commandes LaTeX",
        "keyboard.tooltip.numeric": "Num\xE9rique",
        "keyboard.tooltip.alphabetic": "Lettres romaines",
        "tooltip.copy to clipboard": "Copier dans le presse-papiers",
        "tooltip.redo": "R\xE9tablir",
        "tooltip.toggle virtual keyboard": "Afficher/Masquer le clavier virtuel",
        "tooltip.undo": "Annuler",
        "menu.insert matrix": "Ins\xE9rer une Matrice",
        "menu.insert vector": "Ins\xE9rer un Vecteur",
        "submenu.array.matrix delimiters": "D\xE9limiteurs de la Matrice",
        "menu.array.add row above": "Ajouter une Ligne Avant",
        "menu.array.add row below": "Ajouter une Ligne Apr\xE8s",
        "menu.array.add column before": "Ajouter une Colonne Avant",
        "menu.array.add column after": "Ajouter une Colonne Apr\xE8s",
        "menu.array.delete row": "Enlever une Ligne",
        "menu.array.delete rows": "Enlever les Lignes S\xE9lection\xE9es",
        "menu.array.delete column": "Enlever une Colone",
        "menu.array.delete columns": "Enlever les Colonnes S\xE9lection\xE9es",
        "submenu.array.insert separator": "Ins\xE9rer un S\xE9parateur",
        "menu.insert table": "Ins\xE9rer une Table",
        "submenu.table style": "Style de la  Table"
      },
      ga: {
        "keyboard.tooltip.functions": "Feidhmeanna",
        "keyboard.tooltip.symbols": "Siombail\xED",
        "keyboard.tooltip.greek": "Litreacha na Gr\xE9ige",
        "keyboard.tooltip.command": "M\xF3d Ord\xFA LaTeX",
        "keyboard.tooltip.numeric": "Uimhri\xFAil",
        "keyboard.tooltip.alphabetic": "Litreacha R\xF3mh\xE1nacha",
        "tooltip.copy to clipboard": "C\xF3ipe\xE1il chuig an Ghearrthaisce",
        "tooltip.redo": "Athdh\xE9an",
        "tooltip.toggle virtual keyboard": "M\xE9archl\xE1ir F\xEDor\xFAil a Fh\xE1il",
        "tooltip.undo": "Cealaigh",
        "menu.insert matrix": "Cuir isteach Maitr\xEDs",
        "menu.insert vector": "Cuir isteach Veicteoir",
        "submenu.array.matrix delimiters": "Delimiters Maitr\xEDs",
        "menu.array.add row above": "Cuir Rae Tar \xE9is",
        "menu.array.add row below": "Cuir Rae Roimh",
        "menu.array.add column after": "Cuir Col\xFAn Tar \xE9is",
        "menu.array.add column before": "Cuir Col\xFAn Roimh",
        "menu.array.delete row": "Scrios Rae",
        "menu.array.delete rows": "Scrios Sraitheanna Roghnaithe",
        "menu.array.delete column": "Scrios Col\xFAn",
        "menu.array.delete columns": "Scrios Col\xFAin Roghnaithe",
        "submenu.array.insert separator": "Cuir Deighilteoir isteach",
        "menu.insert table": "Ions\xE1igh T\xE1bla",
        "submenu.table style": "St\xEDl T\xE1bla"
      },
      he: {
        "keyboard.tooltip.functions": "\u05E4\u05D5\u05E0\u05E7\u05E6\u05D9\u05D5\u05EA",
        "keyboard.tooltip.symbols": "\u05E1\u05DE\u05DC\u05D9\u05DD",
        "keyboard.tooltip.greek": "\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05D9\u05D5\u05D5\u05E0\u05D9\u05D5\u05EA",
        "keyboard.tooltip.command": "\u05DE\u05E6\u05D1 \u05E4\u05E7\u05D5\u05D3\u05D4 \u05DC\u05D8\u05E7\u05E1",
        "keyboard.tooltip.numeric": "\u05DE\u05E1\u05E4\u05E8\u05D9",
        "keyboard.tooltip.alphabetic": "\u05DE\u05DB\u05EA\u05D1\u05D9\u05DD \u05E8\u05D5\u05DE\u05D9\u05D9\u05DD",
        "tooltip.copy to clipboard": "\u05D4\u05E2\u05EA\u05E7 \u05DC\u05DC\u05D5\u05D7",
        "tooltip.redo": "\u05DC\u05B7\u05E2\u05B2\u05E9\u05C2\u05D5\u05B9\u05EA \u05E9\u05C1\u05D5\u05BC\u05D1",
        "tooltip.toggle virtual keyboard": "\u05D4\u05D7\u05DC\u05E3 \u05D0\u05EA \u05D4\u05DE\u05E7\u05DC\u05D3\u05EA \u05D4\u05D5\u05D5\u05D9\u05E8\u05D8\u05D5\u05D0\u05DC\u05D9\u05EA",
        "tooltip.undo": "\u05DC\u05D1\u05D8\u05DC",
        "menu.insert matrix": "\u05D4\u05DB\u05E0\u05E1 \u05DE\u05D8\u05E8\u05D9\u05E7\u05E1",
        "menu.insert vector": "\u05D4\u05DB\u05E0\u05E1 \u05D5\u05E7\u05D8\u05D5\u05E8",
        "submenu.array.matrix delimiters": "\u05DE\u05E4\u05E8\u05D9\u05D3\u05D9 \u05DE\u05D8\u05E8\u05D9\u05E7\u05E1",
        "menu.array.add row above": "\u05D4\u05D5\u05E1\u05E3 \u05E9\u05D5\u05E8\u05D4 \u05D0\u05D7\u05E8\u05D9",
        "menu.array.add row below": "\u05D4\u05D5\u05E1\u05E3 \u05E9\u05D5\u05E8\u05D4 \u05DC\u05E4\u05E0\u05D9",
        "menu.array.add column after": "\u05D4\u05D5\u05E1\u05E3 \u05E2\u05DE\u05D5\u05D3\u05D4 \u05D0\u05D7\u05E8\u05D9",
        "menu.array.add column before": "\u05D4\u05D5\u05E1\u05E3 \u05E2\u05DE\u05D5\u05D3\u05D4 \u05DC\u05E4\u05E0\u05D9",
        "menu.array.delete row": "\u05DE\u05D7\u05E7 \u05E9\u05D5\u05E8\u05D4",
        "menu.array.delete rows": "\u05DE\u05D7\u05E7 \u05E9\u05D5\u05E8\u05D5\u05EA \u05E9\u05E0\u05D1\u05D7\u05E8\u05D5",
        "menu.array.delete column": "\u05DE\u05D7\u05E7 \u05E2\u05DE\u05D5\u05D3\u05D4",
        "menu.array.delete columns": "\u05DE\u05D7\u05E7 \u05E2\u05DE\u05D5\u05D3\u05D5\u05EA \u05E9\u05E0\u05D1\u05D7\u05E8\u05D5",
        "submenu.array.insert separator": "\u05D4\u05DB\u05E0\u05E1 \u05DE\u05E4\u05E8\u05D9\u05D3",
        "menu.insert table": "\u05D4\u05DB\u05E0\u05E1 \u05D8\u05D1\u05DC\u05D4",
        "submenu.table style": "\u05D8\u05D1\u05DC\u05D4 \u05E1\u05B4\u05D2\u05B0\u05E0\u05D5\u05B9\u05DF"
      },
      hr: {
        "keyboard.tooltip.functions": "Funkcije",
        "keyboard.tooltip.symbols": "Simboli",
        "keyboard.tooltip.greek": "Gr\u010Dka slova",
        "keyboard.tooltip.command": "LaTeX naredbeni na\u010Din",
        "keyboard.tooltip.numeric": "Numeri\u010Dki",
        "keyboard.tooltip.alphabetic": "Rimska slova",
        "tooltip.copy to clipboard": "Kopirati u me\u0111uspremnik",
        "tooltip.redo": "Ponovi",
        "tooltip.toggle virtual keyboard": "Uklju\u010Di / isklju\u010Di virtualnu tipkovnicu",
        "tooltip.undo": "Poni\u0161ti",
        "menu.insert matrix": "Umetni matricu",
        "menu.insert vector": "Umetni vektor",
        "submenu.array.matrix delimiters": "Matri\u010Dni razdjelnici",
        "menu.array.add row above": "Dodaj redak nakon",
        "menu.array.add row below": "Dodaj redak prije",
        "menu.array.add column after": "Dodaj stupac nakon",
        "menu.array.add column before": "Dodaj stupac prije",
        "menu.array.delete row": "Izbri\u0161i redak",
        "menu.array.delete rows": "Izbri\u0161i odabrane retke",
        "menu.array.delete column": "Izbri\u0161i stupac",
        "menu.array.delete columns": "Izbri\u0161i odabrane stupce",
        "submenu.array.insert separator": "Umetni separator",
        "menu.insert table": "Umetni tablicu",
        "submenu.table style": "Stil tabele"
      },
      id: {
        "keyboard.tooltip.functions": "Fungsi",
        "keyboard.tooltip.symbols": "Simbol",
        "keyboard.tooltip.greek": "Huruf Yunani",
        "keyboard.tooltip.command": "Mode Perintah LaTeX",
        "keyboard.tooltip.numeric": "Numerik",
        "keyboard.tooltip.alphabetic": "Surat Romawi",
        "tooltip.copy to clipboard": "Menyalin ke clipboard",
        "tooltip.redo": "Mengulangi",
        "tooltip.toggle virtual keyboard": "Alihkan Keyboard Virtual",
        "tooltip.undo": "Membuka",
        "menu.insert matrix": "Sisipkan Matriks",
        "menu.insert vector": "Sisipkan Vektor",
        "submenu.array.matrix delimiters": "Pembatas Matriks",
        "menu.array.add row above": "Tambahkan Baris Setelah",
        "menu.array.add row below": "Tambahkan Baris Sebelumnya",
        "menu.array.add column after": "Tambahkan Kolom Setelah",
        "menu.array.add column before": "Tambahkan Kolom Sebelumnya",
        "menu.array.delete row": "Hapus Baris",
        "menu.array.delete rows": "Hapus Baris yang Dipilih",
        "menu.array.delete column": "Hapus Kolom",
        "menu.array.delete columns": "Hapus Kolom yang Dipilih",
        "submenu.array.insert separator": "Sisipkan Pemisah",
        "menu.insert table": "Sisipkan Tabel",
        "submenu.table style": "Gaya Tabel"
      },
      hi: {
        "keyboard.tooltip.functions": "\u0915\u093E\u0930\u094D\u092F\u094B\u0902",
        "keyboard.tooltip.symbols": "\u092A\u094D\u0930\u0924\u0940\u0915",
        "keyboard.tooltip.greek": "\u0917\u094D\u0930\u0940\u0915 \u0905\u0915\u094D\u0937\u0930",
        "keyboard.tooltip.command": "\u0932\u093E\u091F\u0947\u0915\u094D\u0938 \u0915\u092E\u093E\u0902\u0921 \u092E\u094B\u0921",
        "keyboard.tooltip.numeric": "\u0938\u0902\u0916\u094D\u092F\u093E\u0924\u094D\u092E\u0915",
        "keyboard.tooltip.alphabetic": "\u0930\u094B\u092E\u0928 \u092A\u0924\u094D\u0930",
        "tooltip.copy to clipboard": "\u0915\u094D\u0932\u093F\u092A\u092C\u094B\u0930\u094D\u0921 \u092A\u0930 \u0915\u0949\u092A\u0940 \u0915\u0930\u0947\u0902",
        "tooltip.redo": "\u092B\u093F\u0930 \u0938\u0947 \u0915\u0930\u0947\u0902",
        "tooltip.toggle virtual keyboard": "\u0935\u0930\u094D\u091A\u0941\u0905\u0932 \u0915\u0940\u092C\u094B\u0930\u094D\u0921 \u091F\u0949\u0917\u0932 \u0915\u0930\u0947\u0902",
        "tooltip.undo": "\u092A\u0942\u0930\u094D\u0935\u0935\u0924",
        "menu.insert matrix": "\u092E\u0948\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u0921\u093E\u0932\u0947\u0902",
        "menu.insert vector": "\u0935\u0947\u0915\u094D\u091F\u0930 \u0921\u093E\u0932\u0947\u0902",
        "submenu.array.matrix delimiters": "\u092E\u0948\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u0938\u0940\u092E\u093E\u0902\u0915\u0915",
        "menu.array.add row above": "\u092C\u093E\u0926 \u092E\u0947\u0902 \u092A\u0902\u0915\u094D\u0924\u093F \u091C\u094B\u0921\u093C\u0947\u0902",
        "menu.array.add row below": "\u092A\u0939\u0932\u0947 \u092A\u0902\u0915\u094D\u0924\u093F \u091C\u094B\u0921\u093C\u0947\u0902",
        "menu.array.add column after": "\u092C\u093E\u0926 \u092E\u0947\u0902 \u0915\u0949\u0932\u092E \u091C\u094B\u0921\u093C\u0947\u0902",
        "menu.array.add column before": "\u092A\u0939\u0932\u0947 \u0915\u0949\u0932\u092E \u091C\u094B\u0921\u093C\u0947\u0902",
        "menu.array.delete row": "\u092A\u0902\u0915\u094D\u0924\u093F \u0915\u094B \u0939\u091F\u093E\u090F\u0902",
        "menu.array.delete rows": "\u091A\u092F\u0928\u093F\u0924 \u092A\u0902\u0915\u094D\u0924\u093F\u092F\u094B\u0902 \u0915\u094B \u0939\u091F\u093E\u090F\u0902",
        "menu.array.delete column": "\u0915\u0949\u0932\u092E \u0939\u091F\u093E\u090F\u0902",
        "menu.array.delete columns": "\u091A\u092F\u0928\u093F\u0924 \u0915\u0949\u0932\u092E \u0939\u091F\u093E\u090F\u0902",
        "submenu.array.insert separator": "\u0935\u093F\u092D\u093E\u091C\u0915 \u0921\u093E\u0932\u0947\u0902",
        "menu.insert table": "\u091F\u0947\u092C\u0932 \u0907\u0902\u0938\u0930\u094D\u091F \u0915\u0930\u0947\u0902",
        "submenu.table style": "\u091F\u0947\u092C\u0932 \u0938\u094D\u091F\u093E\u0907\u0932"
      },
      hu: {
        "keyboard.tooltip.functions": "Funkci\xF3k",
        "keyboard.tooltip.symbols": "Szimb\xF3lumok",
        "keyboard.tooltip.greek": "G\xF6r\xF6g levelek",
        "keyboard.tooltip.command": "LaTeX Parancs m\xF3d",
        "keyboard.tooltip.numeric": "Numerikus",
        "keyboard.tooltip.alphabetic": "R\xF3mai levelek",
        "tooltip.copy to clipboard": "M\xE1solja a v\xE1g\xF3lapra",
        "tooltip.redo": "\xDAjra",
        "tooltip.toggle virtual keyboard": "V\xE1lt\xE1s a virtu\xE1lis billenty\u0171zetre",
        "tooltip.undo": "Visszavon\xE1s",
        "menu.insert matrix": "Helyezze be a M\xE1trixot",
        "menu.insert vector": "Vektor besz\xFAr\xE1sa",
        "submenu.array.matrix delimiters": "M\xE1trixhat\xE1rol\xF3k",
        "menu.array.add row above": "Sor hozz\xE1ad\xE1sa ut\xE1n",
        "menu.array.add row below": "Add Add Sor el\u0151tt",
        "menu.array.add column after": "Oszlop hozz\xE1ad\xE1sa ut\xE1n",
        "menu.array.add column before": "Add oszlop el\u0151tt",
        "menu.array.delete row": "Sor t\xF6rl\xE9se",
        "menu.array.delete rows": "Kijel\xF6lt sorok t\xF6rl\xE9se",
        "menu.array.delete column": "Oszlop t\xF6rl\xE9se",
        "menu.array.delete columns": "A kijel\xF6lt oszlopok t\xF6rl\xE9se",
        "submenu.array.insert separator": "Helyezze be az elv\xE1laszt\xF3t",
        "menu.insert table": "Helyezze be a t\xE1bl\xE1zatot",
        "submenu.table style": "T\xE1bl\xE1zatos st\xEDlus"
      },
      it: {
        "keyboard.tooltip.functions": "Funzioni",
        "keyboard.tooltip.symbols": "Simboli",
        "keyboard.tooltip.greek": "Lettere greche",
        "keyboard.tooltip.command": "Modalit\xE0 di comando LaTeX",
        "keyboard.tooltip.numeric": "Numerico",
        "keyboard.tooltip.alphabetic": "Lettere romane",
        "tooltip.copy to clipboard": "Copia negli appunti",
        "tooltip.redo": "Rifare",
        "tooltip.toggle virtual keyboard": "Attiva / disattiva la tastiera virtuale",
        "tooltip.undo": "Disfare",
        "menu.insert matrix": "Inserisci una Matrice",
        "menu.insert vector": "Inserisci Vettore",
        "submenu.array.matrix delimiters": "Delimitatori di Matrice",
        "menu.array.add row above": "Aggiungi una Riga Prima",
        "menu.array.add row below": "Aggiungi una Riga Dopo",
        "menu.array.add column before": "Aggiungi una Colonna Prima",
        "menu.array.add column after": "Aggiungi una Colonna Dopo",
        "menu.array.delete row": "Rimuovi una Riga",
        "menu.array.delete rows": "Rimuovi le Righe Selezionate",
        "menu.array.delete column": "Rimuovi una Colonna",
        "menu.array.delete columns": "Rimuovi le Colonne Selezionate",
        "submenu.array.insert separator": "Inserisci un Separatore",
        "menu.insert table": "Inserisci Tabella",
        "submenu.table style": "Stile tabella"
      },
      is: {
        "keyboard.tooltip.functions": "A\xF0ger\xF0ir",
        "keyboard.tooltip.symbols": "T\xE1kn",
        "keyboard.tooltip.greek": "Gr\xEDsk br\xE9f",
        "keyboard.tooltip.command": "LaTeX stj\xF3rnunarstilling",
        "keyboard.tooltip.numeric": "T\xF6lulegt",
        "keyboard.tooltip.alphabetic": "R\xF3mversk br\xE9f",
        "tooltip.copy to clipboard": "Afrita\xF0u \xE1 klemmuspjald",
        "tooltip.redo": "Endurtaka",
        "tooltip.toggle virtual keyboard": "Skiptu um s\xFDndarlyklabor\xF0",
        "tooltip.undo": "Afturkalla",
        "menu.insert matrix": "Settu fylki inn",
        "menu.insert vector": "Settu inn Vector",
        "submenu.array.matrix delimiters": "Matrix afm\xF6rkun",
        "menu.array.add row above": "B\xE6ta vi\xF0 r\xF6\xF0 \xE1 eftir",
        "menu.array.add row below": "B\xE6ta vi\xF0 r\xF6\xF0 \xE1\xF0ur",
        "menu.array.add column after": "B\xE6ta vi\xF0 d\xE1lki \xE1 eftir",
        "menu.array.add column before": "B\xE6ta vi\xF0 d\xE1lki \xE1\xF0ur",
        "menu.array.delete row": "Ey\xF0a r\xF6\xF0",
        "menu.array.delete rows": "Ey\xF0a v\xF6ldum l\xEDnum",
        "menu.array.delete column": "Ey\xF0a d\xE1lki",
        "menu.array.delete columns": "Ey\xF0a v\xF6ldum d\xE1lkum",
        "submenu.array.insert separator": "Settu skiljuna \xED",
        "menu.insert table": "Settu inn t\xF6flu",
        "submenu.table style": "T\xF6flu st\xEDl"
      },
      ja: {
        "keyboard.tooltip.functions": "\u95A2\u6570",
        "keyboard.tooltip.symbols": "\u30B7\u30F3\u30DC\u30EB",
        "keyboard.tooltip.greek": "\u30AE\u30EA\u30B7\u30E3\u6587\u5B57",
        "keyboard.tooltip.command": "\u30E9\u30C6\u30C3\u30AF\u30B9\u30B3\u30DE\u30F3\u30C9\u30E2\u30FC\u30C9",
        "keyboard.tooltip.numeric": "\u6570\u5024",
        "keyboard.tooltip.alphabetic": "\u30ED\u30FC\u30DE\u5B57",
        "tooltip.copy to clipboard": "\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC",
        "tooltip.redo": "\u3084\u308A\u76F4\u3057",
        "tooltip.toggle virtual keyboard": "\u4EEE\u60F3\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u5207\u308A\u66FF\u3048",
        "tooltip.undo": "\u5143\u306B\u623B\u3059",
        "menu.insert matrix": "\u30DE\u30C8\u30EA\u30C3\u30AF\u30B9\u3092\u633F\u5165",
        "menu.insert vector": "\u30D9\u30AF\u30C8\u30EB\u3092\u633F\u5165",
        "submenu.array.matrix delimiters": "\u884C\u5217\u533A\u5207\u308A\u6587\u5B57",
        "menu.array.add row above": "\u5F8C\u306B\u884C\u3092\u8FFD\u52A0",
        "menu.array.add row below": "\u524D\u306B\u884C\u3092\u8FFD\u52A0",
        "menu.array.add column after": "\u5F8C\u306B\u5217\u3092\u8FFD\u52A0",
        "menu.array.add column before": "\u524D\u306B\u5217\u3092\u8FFD\u52A0",
        "menu.array.delete row": "\u884C\u3092\u524A\u9664",
        "menu.array.delete rows": "\u9078\u629E\u3057\u305F\u884C\u3092\u524A\u9664\u3059\u308B",
        "menu.array.delete column": "\u5217\u3092\u524A\u9664",
        "menu.array.delete columns": "\u9078\u629E\u3057\u305F\u5217\u3092\u524A\u9664\u3059\u308B",
        "submenu.array.insert separator": "\u30BB\u30D1\u30EC\u30FC\u30BF\u30FC\u3092\u633F\u5165",
        "menu.insert table": "\u30C6\u30FC\u30D6\u30EB\u3092\u633F\u5165",
        "submenu.table style": "\u30C6\u30FC\u30D6\u30EB\u30B9\u30BF\u30A4\u30EB"
      },
      ko: {
        "keyboard.tooltip.functions": "\uAE30\uB2A5",
        "keyboard.tooltip.symbols": "\uAE30\uD638",
        "keyboard.tooltip.greek": "\uADF8\uB9AC\uC2A4 \uBB38\uC790",
        "keyboard.tooltip.command": "\uC720\uC561 \uBA85\uB839 \uBAA8\uB4DC",
        "keyboard.tooltip.numeric": "\uC22B\uC790",
        "keyboard.tooltip.alphabetic": "\uB85C\uB9C8 \uBB38\uC790",
        "tooltip.copy to clipboard": "\uD074\uB9BD \uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC",
        "tooltip.redo": "\uB2E4\uC2DC \uD558\uB2E4",
        "tooltip.toggle virtual keyboard": "\uAC00\uC0C1 \uD0A4\uBCF4\uB4DC \uC804\uD658",
        "tooltip.undo": "\uC2E4\uD589 \uCDE8\uC18C",
        "menu.insert matrix": "\uB9E4\uD2B8\uB9AD\uC2A4 \uC0BD\uC785",
        "menu.insert vector": "\uBCA1\uD130 \uC0BD\uC785",
        "submenu.array.matrix delimiters": "\uD589\uB82C \uAD6C\uBD84 \uAE30\uD638",
        "menu.array.add row above": "\uB4A4\uC5D0 \uD589 \uCD94\uAC00",
        "menu.array.add row below": "\uC55E\uC5D0 \uD589 \uCD94\uAC00",
        "menu.array.add column after": "\uB4A4\uC5D0 \uC5F4 \uCD94\uAC00",
        "menu.array.add column before": "\uC55E\uC5D0 \uC5F4 \uCD94\uAC00",
        "menu.array.delete row": "\uD589 \uC0AD\uC81C",
        "menu.array.delete rows": "\uC120\uD0DD\uD55C \uD589 \uC0AD\uC81C",
        "menu.array.delete column": "\uC5F4 \uC0AD\uC81C",
        "menu.array.delete columns": "\uC120\uD0DD\uD55C \uC5F4 \uC0AD\uC81C",
        "submenu.array.insert separator": "\uAD6C\uBD84\uC790 \uC0BD\uC785",
        "menu.insert table": "\uD45C \uC0BD\uC785",
        "submenu.table style": "\uD14C\uC774\uBE14 \uC2A4\uD0C0\uC77C"
      },
      lv: {
        "keyboard.tooltip.functions": "Funkcijas",
        "keyboard.tooltip.symbols": "Simboli",
        "keyboard.tooltip.greek": "Grie\u0137u burti",
        "keyboard.tooltip.command": "LaTeX komandu re\u017E\u012Bms",
        "keyboard.tooltip.numeric": "Ciparu skaitlis",
        "keyboard.tooltip.alphabetic": "Romie\u0161u v\u0113stules",
        "tooltip.copy to clipboard": "Kop\u0113t starpliktuv\u0113",
        "tooltip.redo": "P\u0101rtais\u012Bt",
        "tooltip.toggle virtual keyboard": "P\u0101rsl\u0113gt virtu\u0101lo tastat\u016Bru",
        "tooltip.undo": "Atsaukt",
        "menu.insert matrix": "Ievietojiet matricu",
        "menu.insert vector": "Ievietot vektoru",
        "submenu.array.matrix delimiters": "Matricas norobe\u017Eot\u0101ji",
        "menu.array.add row above": "Pievienot rindu p\u0113c",
        "menu.array.add row below": "Pievienot rindu pirms",
        "menu.array.add column after": "Pievienot kolonnu p\u0113c",
        "menu.array.add column before": "Pievienot kolonnu pirms",
        "menu.array.delete row": "Dz\u0113st rindu",
        "menu.array.delete rows": "Dz\u0113st atlas\u012Bt\u0101s rindas",
        "menu.array.delete column": "Dz\u0113st kolonnu",
        "menu.array.delete columns": "Dz\u0113st atlas\u012Bt\u0101s kolonnas",
        "submenu.array.insert separator": "Ievietojiet atdal\u012Bt\u0101ju",
        "menu.insert table": "Ievietojiet tabulu",
        "submenu.table style": "Galda stils"
      },
      lt: {
        "keyboard.tooltip.functions": "Funkcijos",
        "keyboard.tooltip.symbols": "Simboliai",
        "keyboard.tooltip.greek": "Graiki\u0161kos raid\u0117s",
        "keyboard.tooltip.command": "LaTeX komand\u0173 re\u017Eimas",
        "keyboard.tooltip.numeric": "Skaitmeninis",
        "keyboard.tooltip.alphabetic": "Romos lai\u0161kai",
        "tooltip.copy to clipboard": "Nukopijuoti \u012F i\u0161karpin\u0119",
        "tooltip.redo": "Perdaryti",
        "tooltip.toggle virtual keyboard": "Perjungti virtuali\u0105j\u0105 klaviat\u016Br\u0105",
        "tooltip.undo": "At\u0161aukti",
        "menu.insert matrix": "Ievietojiet matricu",
        "menu.insert vector": "Ievietot vektoru",
        "submenu.array.matrix delimiters": "Matricas norobe\u017Eot\u0101ji",
        "menu.array.add row above": "Pievienot rindu p\u0113c",
        "menu.array.add row below": "Pievienot rindu pirms",
        "menu.array.add column after": "Pievienot kolonnu p\u0113c",
        "menu.array.add column before": "Pievienot kolonnu pirms",
        "menu.array.delete row": "Dz\u0113st rindu",
        "menu.array.delete rows": "Dz\u0113st atlas\u012Bt\u0101s rindas",
        "menu.array.delete column": "Dz\u0113st kolonnu",
        "menu.array.delete columns": "Dz\u0113st atlas\u012Bt\u0101s kolonnas",
        "submenu.array.insert separator": "Ievietojiet atdal\u012Bt\u0101ju",
        "menu.insert table": "Ievietojiet tabulu",
        "submenu.table style": "Tabulas stili"
      },
      lu: {
        "keyboard.tooltip.functions": "Funktiounen",
        "keyboard.tooltip.symbols": "Symboler",
        "keyboard.tooltip.greek": "Griichesch Br\xE9iwer",
        "keyboard.tooltip.command": "LaTeX Kommando Modus",
        "keyboard.tooltip.numeric": "Numeresch",
        "keyboard.tooltip.alphabetic": "R\xE9imesch Br\xE9iwer",
        "tooltip.copy to clipboard": "Kop\xE9iert op Clipboard",
        "tooltip.redo": "Nees nei maachen",
        "tooltip.toggle virtual keyboard": "Wiesselt Virtuell Tastatur",
        "tooltip.undo": "Undoen",
        "menu.insert matrix": "Matrix asetzen",
        "menu.insert vector": "Insert Vector",
        "submenu.array.matrix delimiters": "Matrix Ofgrenzer",
        "menu.array.add row above": "Dob\xE4izemaachen Rei No",
        "menu.array.add row below": "F\xFC\xFCgt Rei vir",
        "menu.array.add column after": "Dob\xE4izemaachen Kolonn No",
        "menu.array.add column before": "Kolonn derb\xE4i Virun",
        "menu.array.delete row": "Rad l\xE4schen",
        "menu.array.delete rows": "L\xE4scht Ausgewielte Reien",
        "menu.array.delete column": "L\xE4scht Kolonn",
        "menu.array.delete columns": "L\xE4scht Ausgewielte Kolonnen",
        "submenu.array.insert separator": "Insert Separator",
        "menu.insert table": "D\xEBsch anzeginn",
        "submenu.table style": "D\xEBsch Style"
      },
      nl: {
        "keyboard.tooltip.functions": "Functies",
        "keyboard.tooltip.symbols": "Symbolen",
        "keyboard.tooltip.greek": "Griekse letters",
        "keyboard.tooltip.command": "LaTeX commando mode",
        "keyboard.tooltip.numeric": "Numeriek",
        "keyboard.tooltip.alphabetic": "Romeinse letters",
        "tooltip.copy to clipboard": "Kopi\xEBren naar klembord",
        "tooltip.redo": "Opnieuw",
        "tooltip.toggle virtual keyboard": "Schakel naar virtueel toetsenbord",
        "tooltip.undo": "Ongedaan maken",
        "menu.insert matrix": "Matrix invoegen",
        "menu.insert vector": "Vector invoegen",
        "submenu.array.matrix delimiters": "Matrixscheidingstekens",
        "menu.array.add row above": "Rij toevoegen na",
        "menu.array.add row below": "Rij toevoegen eerder",
        "menu.array.add column after": "Kolom toevoegen na",
        "menu.array.add column before": "Kolom toevoegen voor",
        "menu.array.delete row": "Verwijder rij",
        "menu.array.delete rows": "Geselecteerde rijen verwijderen",
        "menu.array.delete column": "Kolom verwijderen",
        "menu.array.delete columns": "Geselecteerde kolommen verwijderen",
        "submenu.array.insert separator": "Scheidingsteken invoegen",
        "menu.insert table": "Tabel invoegen",
        "submenu.table style": "Tabelstijl"
      },
      no: {
        "keyboard.tooltip.functions": "Funksjoner",
        "keyboard.tooltip.symbols": "Symboler",
        "keyboard.tooltip.greek": "Greske bokstaver",
        "keyboard.tooltip.command": "LaTeX kommandomodus",
        "keyboard.tooltip.numeric": "Numerisk",
        "keyboard.tooltip.alphabetic": "Romerske bokstaver",
        "tooltip.copy to clipboard": "Kopiere til utklippstavle",
        "tooltip.redo": "Gj\xF8re om",
        "tooltip.toggle virtual keyboard": "Bytt virtuelt tastatur",
        "tooltip.undo": "Angre",
        "menu.insert matrix": "Sett inn matrise",
        "menu.insert vector": "Sett inn vektor",
        "submenu.array.matrix delimiters": "Matrix avgrensere",
        "menu.array.add row above": "Legg til rad etter",
        "menu.array.add row below": "Legg til rad f\xF8r",
        "menu.array.add column after": "Legg til kolonne etter",
        "menu.array.add column before": "Legg til kolonne f\xF8r",
        "menu.array.delete row": "Slett rad",
        "menu.array.delete rows": "Slett valgte rader",
        "menu.array.delete column": "Slett kolonne",
        "menu.array.delete columns": "Slett valgte kolonner",
        "submenu.array.insert separator": "Sett inn skilletegn",
        "menu.insert table": "Sett inn tabell",
        "submenu.table style": "Tabellstil"
      },
      mk: {
        "keyboard.tooltip.functions": "\u0424\u0443\u043D\u043A\u0446\u0438\u0438",
        "keyboard.tooltip.symbols": "\u0421\u0438\u043C\u0431\u043E\u043B\u0438",
        "keyboard.tooltip.greek": "\u0413\u0440\u0447\u043A\u0438 \u0431\u0443\u043A\u0432\u0438",
        "keyboard.tooltip.command": "\u0420\u0435\u0436\u0438\u043C \u043D\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0432\u043E \u043B\u0430\u0442\u0435\u043A\u0441",
        "keyboard.tooltip.numeric": "\u041D\u0443\u043C\u0435\u0440\u0438\u0447\u043A\u0438",
        "keyboard.tooltip.alphabetic": "\u0420\u0438\u043C\u0441\u043A\u0438 \u043F\u0438\u0441\u043C\u0430",
        "tooltip.copy to clipboard": "\u041A\u043E\u043F\u0438\u0440\u0430\u0458\u0442\u0435 \u0432\u043E \u043A\u043B\u0438\u043F\u0431\u043E\u0440\u0434",
        "tooltip.redo": "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u043E",
        "tooltip.toggle virtual keyboard": "\u0412\u043A\u043B\u0443\u0447\u0435\u0442\u0435 \u0458\u0430 \u0432\u0438\u0440\u0442\u0443\u0435\u043B\u043D\u0430\u0442\u0430 \u0442\u0430\u0441\u0442\u0430\u0442\u0443\u0440\u0430",
        "tooltip.undo": "\u0412\u0440\u0430\u0442\u0438",
        "menu.insert matrix": "\u0412\u043C\u0435\u0442\u043D\u0435\u0442\u0435 \u043C\u0430\u0442\u0440\u0438\u0446\u0430",
        "menu.insert vector": "\u0412\u043C\u0435\u0442\u043D\u0438 \u0432\u0435\u043A\u0442\u043E\u0440",
        "submenu.array.matrix delimiters": "\u0420\u0430\u0437\u0433\u0440\u0430\u043D\u0438\u0447\u0443\u0432\u0430\u0447\u0438 \u043D\u0430 \u043C\u0430\u0442\u0440\u0438\u0446\u0430",
        "menu.array.add row above": "\u0414\u043E\u0434\u0430\u0434\u0435\u0442\u0435 \u0440\u0435\u0434 \u043F\u043E\u0441\u043B\u0435",
        "menu.array.add row below": "\u0414\u043E\u0434\u0430\u0434\u0438 \u0440\u0435\u0434 \u043F\u0440\u0435\u0434 \u0442\u043E\u0430",
        "menu.array.add column after": "\u0414\u043E\u0434\u0430\u0434\u0435\u0442\u0435 \u043A\u043E\u043B\u043E\u043D\u0430 \u043F\u043E\u0441\u043B\u0435",
        "menu.array.add column before": "\u0414\u043E\u0434\u0430\u0434\u0435\u0442\u0435 \u043A\u043E\u043B\u043E\u043D\u0430 \u043F\u0440\u0435\u0434 \u0442\u043E\u0430",
        "menu.array.delete row": "\u0418\u0437\u0431\u0440\u0438\u0448\u0438 \u0433\u043E \u0440\u0435\u0434\u043E\u0442",
        "menu.array.delete rows": "\u0418\u0437\u0431\u0440\u0438\u0448\u0435\u0442\u0435 \u0433\u0438 \u0438\u0437\u0431\u0440\u0430\u043D\u0438\u0442\u0435 \u0440\u0435\u0434\u043E\u0432\u0438",
        "menu.array.delete column": "\u0418\u0437\u0431\u0440\u0438\u0448\u0438 \u0458\u0430 \u043A\u043E\u043B\u043E\u043D\u0430\u0442\u0430",
        "menu.array.delete columns": "\u0418\u0437\u0431\u0440\u0438\u0448\u0438 \u0458\u0430 \u043A\u043E\u043B\u043E\u043D\u0430\u0442\u0430",
        "submenu.array.insert separator": "\u0412\u043C\u0435\u0442\u043D\u0435\u0442\u0435 \u0441\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440",
        "menu.insert table": "\u0412\u043C\u0435\u0442\u043D\u0438 \u0442\u0430\u0431\u0435\u043B\u0430",
        "submenu.table style": "\u0422\u0430\u0431\u0435\u043B\u0430 \u0441\u0442\u0438\u043B"
      },
      pl: {
        "keyboard.tooltip.functions": "Funkcje",
        "keyboard.tooltip.symbols": "Symbolika",
        "keyboard.tooltip.greek": "Litery greckie",
        "keyboard.tooltip.command": "Tryb polece\u0144 LaTeX",
        "keyboard.tooltip.numeric": "Numeryczne",
        "keyboard.tooltip.alphabetic": "Litery rzymskie",
        "tooltip.copy to clipboard": "Kopiuj do Schowka",
        "tooltip.redo": "Przywr\xF3\u0107",
        "tooltip.toggle virtual keyboard": "Prze\u0142\u0105cz wirtualn\u0105 klawiatur\u0119",
        "tooltip.undo": "Cofnij",
        "menu.insert matrix": "Wstaw macierz",
        "menu.insert vector": "Wstaw wektor",
        "submenu.array.matrix delimiters": "Ograniczniki macierzy",
        "menu.array.add row above": "Dodaj wiersz po",
        "menu.array.add row below": "Dodaj wiersz przed",
        "menu.array.add column after": "Dodaj kolumn\u0119 po",
        "menu.array.add column before": "Dodaj kolumn\u0119 przed",
        "menu.array.delete row": "Usu\u0144 wiersz",
        "menu.array.delete rows": "Usu\u0144 wybrane wiersze",
        "menu.array.delete column": "Usu\u0144 kolumn\u0119",
        "menu.array.delete columns": "Usu\u0144 wybrane kolumny",
        "submenu.array.insert separator": "Wstaw separator",
        "menu.insert table": "Wype\u0142nij tabel\u0119",
        "submenu.table style": "Styl tabel\u0119"
      },
      pt: {
        "keyboard.tooltip.functions": "Functions",
        "keyboard.tooltip.symbols": "S\xEDmbolos",
        "keyboard.tooltip.greek": "Letras gregas",
        "keyboard.tooltip.command": "Modo de Comando LaTeX",
        "keyboard.tooltip.numeric": "Num\xE9rico",
        "keyboard.tooltip.alphabetic": "Letras romanas",
        "tooltip.copy to clipboard": "Copiar para \xE1rea de transfer\xEAncia",
        "tooltip.redo": "Refazer",
        "tooltip.toggle virtual keyboard": "Alternar teclado virtual",
        "tooltip.undo": "Desfazer",
        "menu.insert matrix": "Inserir Matriz",
        "menu.insert vector": "Inserir vetor",
        "submenu.array.matrix delimiters": "Delimitadores de matriz",
        "menu.array.add row above": "Adicionar linha depois",
        "menu.array.add row below": "Adicionar linha antes",
        "menu.array.add column after": "Adicionar coluna depois",
        "menu.array.add column before": "Adicionar coluna antes",
        "menu.array.delete row": "Excluir linha",
        "menu.array.delete rows": "Excluir linhas selecionadas",
        "menu.array.delete column": "Apagar Coluna",
        "menu.array.delete columns": "Excluir Colunas Selecionadas",
        "submenu.array.insert separator": "Inserir Separador",
        "menu.insert table": "Insira a tabela",
        "submenu.table style": "Estilo tabela"
      },
      ro: {
        "keyboard.tooltip.functions": "Func\u021Bii",
        "keyboard.tooltip.symbols": "Simboluri",
        "keyboard.tooltip.greek": "Scrisori grece\u0219ti",
        "keyboard.tooltip.command": "Modul de comand\u0103 latex",
        "keyboard.tooltip.numeric": "Numeric",
        "keyboard.tooltip.alphabetic": "Scrisori romane",
        "tooltip.copy to clipboard": "Copia\u021Bi \xEEn clipboard",
        "tooltip.redo": "A reface",
        "tooltip.toggle virtual keyboard": "Comuta\u021Bi tastatura virtual\u0103",
        "tooltip.undo": "Anula",
        "menu.insert matrix": "Introduce\u021Bi Matrix",
        "menu.insert vector": "Insera\u021Bi Vector",
        "submenu.array.matrix delimiters": "Delimitatori de matrice",
        "menu.array.add row above": "Ad\u0103uga\u021Bi r\xE2ndul dup\u0103",
        "menu.array.add row below": "Ad\u0103uga\u021Bi r\xE2ndul \xEEnainte",
        "menu.array.add column after": "Ad\u0103uga\u021Bi o coloan\u0103 dup\u0103",
        "menu.array.add column before": "Ad\u0103uga\u021Bi o coloan\u0103 \xEEnainte",
        "menu.array.delete row": "\u0218terge\u021Bi r\xE2ndul",
        "menu.array.delete rows": "\u0218terge\u021Bi r\xE2ndurile selectate",
        "menu.array.delete column": "\u0218terge\u021Bi coloana",
        "menu.array.delete columns": "\u0218terge\u021Bi coloanele selectate",
        "submenu.array.insert separator": "Introduce\u021Bi separatorul",
        "menu.insert table": "Introduce\u021Bi tabelul",
        "submenu.table style": "Table style"
      },
      ru: {
        "keyboard.tooltip.functions": "\u0424\u0443\u043D\u043A\u0446\u0438\u0438",
        "keyboard.tooltip.symbols": "\u0421\u0438\u043C\u0432\u043E\u043B\u044B",
        "keyboard.tooltip.greek": "\u0413\u0440\u0435\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0443\u043A\u0432\u044B",
        "keyboard.tooltip.command": "\u0420\u0435\u0436\u0438\u043C \u043A\u043E\u043C\u0430\u043D\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u0438 \u041B\u0430\u0442\u0435\u043A\u0441",
        "keyboard.tooltip.numeric": "\u0447\u0438\u0441\u043B\u043E\u0432\u043E\u0439",
        "keyboard.tooltip.alphabetic": "\u041B\u0430\u0442\u0438\u043D\u0441\u043A\u0438\u0435 \u0431\u0443\u043A\u0432\u044B",
        "tooltip.copy to clipboard": "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430",
        "tooltip.redo": "\u043F\u0435\u0440\u0435\u0434\u0435\u043B\u044B\u0432\u0430\u0442\u044C",
        "tooltip.toggle virtual keyboard": "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u0443\u044E \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0443",
        "tooltip.undo": "\u0440\u0430\u0441\u0441\u0442\u0435\u0433\u0438\u0432\u0430\u0442\u044C",
        "menu.insert matrix": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043C\u0430\u0442\u0440\u0438\u0446\u0443",
        "menu.insert vector": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u0435\u043A\u0442\u043E\u0440",
        "submenu.array.matrix delimiters": "\u041C\u0430\u0442\u0440\u0438\u0447\u043D\u044B\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u0438",
        "menu.array.add row above": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 \u043F\u043E\u0441\u043B\u0435",
        "menu.array.add row below": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 \u043F\u0435\u0440\u0435\u0434",
        "menu.array.add column after": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446 \u043F\u043E\u0441\u043B\u0435",
        "menu.array.add column before": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446 \u043F\u0435\u0440\u0435\u0434",
        "menu.array.delete row": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443",
        "menu.array.delete rows": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u0442\u0440\u043E\u043A\u0438",
        "menu.array.delete column": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446",
        "menu.array.delete columns": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u0442\u043E\u043B\u0431\u0446\u044B",
        "submenu.array.insert separator": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C",
        "menu.insert table": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0442\u0430\u0431\u043B\u0438\u0446\u0443",
        "submenu.table style": "\u0422\u0430\u0431\u043B\u0438\u0447\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C"
      },
      sk: {
        "keyboard.tooltip.functions": "Functions",
        "keyboard.tooltip.symbols": "Symboly",
        "keyboard.tooltip.greek": "Gr\xE9cke listy",
        "keyboard.tooltip.command": "Pr\xEDkazov\xFD re\u017Eim LaTeX",
        "keyboard.tooltip.numeric": "Numerick\xE9",
        "keyboard.tooltip.alphabetic": "R\xEDmske listy",
        "tooltip.copy to clipboard": "Skop\xEDrova\u0165 do schr\xE1nky",
        "tooltip.redo": "Znova",
        "tooltip.toggle virtual keyboard": "Prepn\xFA\u0165 virtu\xE1lnu kl\xE1vesnicu",
        "tooltip.undo": "Vr\xE1tenie sp\xE4\u0165",
        "menu.insert matrix": "Vlo\u017Ete maticu",
        "menu.insert vector": "Vlo\u017Ete vektor",
        "submenu.array.matrix delimiters": "Odde\u013Eova\u010De mat\xEDc",
        "menu.array.add row above": "Pridajte riadok za",
        "menu.array.add row below": "Pridajte riadok pred",
        "menu.array.add column after": "Prida\u0165 st\u013Apec za",
        "menu.array.add column before": "Pridajte st\u013Apec predt\xFDm",
        "menu.array.delete row": "Odstr\xE1ni\u0165 riadok",
        "menu.array.delete rows": "Odstr\xE1ni\u0165 vybrat\xE9 riadky",
        "menu.array.delete column": "Odstr\xE1ni\u0165 st\u013Apec",
        "menu.array.delete columns": "Odstr\xE1ni\u0165 vybrat\xE9 st\u013Apce",
        "submenu.array.insert separator": "Vlo\u017Ete odde\u013Eova\u010D",
        "menu.insert table": "Vlo\u017Ete tabu\u013Eku",
        "submenu.table style": "\u0160t\xFDl tabu\u013Eky"
      },
      sl: {
        "keyboard.tooltip.functions": "Funkcije",
        "keyboard.tooltip.symbols": "Simboli",
        "keyboard.tooltip.greek": "Gr\u0161ka pisma",
        "keyboard.tooltip.command": "Ukazni na\u010Din LaTeX",
        "keyboard.tooltip.numeric": "\u0160tevilsko",
        "keyboard.tooltip.alphabetic": "Rimska pisma",
        "tooltip.copy to clipboard": "Kopirati v odlo\u017Ei\u0161\u010De",
        "tooltip.redo": "Ponovi",
        "tooltip.toggle virtual keyboard": "Preklop navidezne tipkovnice",
        "tooltip.undo": "Razveljavi",
        "menu.insert matrix": "Vstavi matrico",
        "menu.insert vector": "Vstavi vektor",
        "submenu.array.matrix delimiters": "Matri\u010Dni lo\u010Devalniki",
        "menu.array.add row above": "Dodaj vrstico po",
        "menu.array.add row below": "Dodaj vrstico prej",
        "menu.array.add column after": "Dodaj stolpec po",
        "menu.array.add column before": "Dodaj stolpec prej",
        "menu.array.delete row": "Izbri\u0161i vrstico",
        "menu.array.delete rows": "Izbri\u0161i izbrane vrstice",
        "menu.array.delete column": "Izbri\u0161i stolpec",
        "menu.array.delete columns": "Izbri\u0161i izbrane stolpce",
        "submenu.array.insert separator": "Vstavi lo\u010Dilo",
        "menu.insert table": "Vstavi tabelo",
        "submenu.table style": "Tabela slog"
      },
      sq: {
        "keyboard.tooltip.functions": "Funksione",
        "keyboard.tooltip.symbols": "Simbolet",
        "keyboard.tooltip.greek": "Letrat Greke",
        "keyboard.tooltip.command": "Modaliteti i komand\xEBs latex",
        "keyboard.tooltip.numeric": "Numerike",
        "keyboard.tooltip.alphabetic": "Letrat romake",
        "tooltip.copy to clipboard": "Kopjoni n\xEB Clipboard",
        "tooltip.redo": "Riparo",
        "tooltip.toggle virtual keyboard": "Aktivizo tastier\xEBn virtuale",
        "tooltip.undo": "Zhb\xEBj",
        "menu.insert matrix": "Vendosni Matric\xEBn",
        "menu.insert vector": "Vendos vektorin",
        "submenu.array.matrix delimiters": "P\xEBrcaktuesit e matric\xEBs",
        "menu.array.add row above": "Shto Rreshtin Pas",
        "menu.array.add row below": "Shto Rreshtin Para",
        "menu.array.add column after": "Shto kolon\xEBn pas",
        "menu.array.add column before": "Shto kolon\xEBn para",
        "menu.array.delete row": "Fshi Rreshtin",
        "menu.array.delete rows": "Fshi rreshtat e zgjedhur",
        "menu.array.delete column": "Fshi kolon\xEBn",
        "menu.array.delete columns": "Fshi kolonat e zgjedhura",
        "submenu.array.insert separator": "Vendos Ndar\xEBsin",
        "menu.insert table": "Vendos tabel\xEBn",
        "submenu.table style": "Stili tabel\xEBn"
      },
      sr: {
        "keyboard.tooltip.functions": "\u0424\u0443\u043D\u043A\u0446\u0438\u0458\u0435",
        "keyboard.tooltip.symbols": "\u0421\u0438\u043C\u0431\u043E\u043B\u0438",
        "keyboard.tooltip.greek": "\u0413\u0440\u0435\u0435\u043A \u041B\u0435\u0442\u0442\u0435\u0440\u0441",
        "keyboard.tooltip.command": "\u041B\u0430\u0422\u0435\u041A\u0441 \u043A\u043E\u043C\u0430\u043D\u0434\u043D\u0438 \u0440\u0435\u0436\u0438\u043C",
        "keyboard.tooltip.numeric": "\u041D\u0443\u043C\u0435\u0440\u0438\u0447\u043A\u0438",
        "keyboard.tooltip.alphabetic": "\u0420\u0438\u043C\u0441\u043A\u0430 \u043F\u0438\u0441\u043C\u0430",
        "tooltip.copy to clipboard": "\u041A\u043E\u043F\u0438\u0440\u0430\u0458\u0442\u0435 \u0443 \u043C\u0435\u0452\u0443\u0441\u043F\u0440\u0435\u043C\u043D\u0438\u043A",
        "tooltip.redo": "\u041F\u043E\u043D\u043E\u0432\u0438",
        "tooltip.toggle virtual keyboard": "\u0423\u043A\u0459\u0443\u0447\u0438 / \u0438\u0441\u043A\u0459\u0443\u0447\u0438 \u0432\u0438\u0440\u0442\u0443\u0435\u043B\u043D\u0443 \u0442\u0430\u0441\u0442\u0430\u0442\u0443\u0440\u0443",
        "tooltip.undo": "\u041E\u043F\u043E\u0437\u043E\u0432\u0438",
        "menu.insert matrix": "\u0423\u043C\u0435\u0442\u043D\u0438 \u043C\u0430\u0442\u0440\u0438\u0446\u0443",
        "menu.insert vector": "\u0423\u043C\u0435\u0442\u043D\u0438 \u0432\u0435\u043A\u0442\u043E\u0440",
        "submenu.array.matrix delimiters": "\u041C\u0430\u0442\u0440\u0438\u043A \u0414\u0435\u043B\u0438\u043C\u0438\u0442\u0435\u0440\u0441",
        "menu.array.add row above": "\u0414\u043E\u0434\u0430\u0458 \u0440\u0435\u0434 \u043F\u043E\u0441\u043B\u0435",
        "menu.array.add row below": "\u0414\u043E\u0434\u0430\u0458 \u0440\u0435\u0434 \u043F\u0440\u0435",
        "menu.array.add column after": "\u0414\u043E\u0434\u0430\u0458 \u043A\u043E\u043B\u043E\u043D\u0443 \u043F\u043E\u0441\u043B\u0435",
        "menu.array.add column before": "\u0414\u043E\u0434\u0430\u0458 \u043A\u043E\u043B\u043E\u043D\u0443 \u043F\u0440\u0435",
        "menu.array.delete row": "\u0418\u0437\u0431\u0440\u0438\u0448\u0438 \u0440\u0435\u0434",
        "menu.array.delete rows": "\u0418\u0437\u0431\u0440\u0438\u0448\u0438 \u0438\u0437\u0430\u0431\u0440\u0430\u043D\u0435 \u0440\u0435\u0434\u043E\u0432\u0435",
        "menu.array.delete column": "\u0418\u0437\u0431\u0440\u0438\u0448\u0438 \u043A\u043E\u043B\u043E\u043D\u0443",
        "menu.array.delete columns": "\u0418\u0437\u0431\u0440\u0438\u0448\u0438 \u0438\u0437\u0430\u0431\u0440\u0430\u043D\u0435 \u043A\u043E\u043B\u043E\u043D\u0435",
        "submenu.array.insert separator": "\u0423\u043C\u0435\u0442\u043D\u0438 \u0441\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440",
        "menu.insert table": "\u0423\u0431\u0430\u0446\u0438 \u0442\u0430\u0431\u0435\u043B\u0443",
        "submenu.table style": "\u0422\u0430\u0431\u0435\u043B\u0430\u0440\u043D\u0438 \u0441\u0442\u0438\u043B"
      },
      sv: {
        "keyboard.tooltip.functions": "Funktioner",
        "keyboard.tooltip.symbols": "Symboler",
        "keyboard.tooltip.greek": "Grekiska bokst\xE4ver",
        "keyboard.tooltip.command": "LaTeX kommandol\xE4ge",
        "keyboard.tooltip.numeric": "Numerisk",
        "keyboard.tooltip.alphabetic": "Romerska bokst\xE4ver",
        "tooltip.copy to clipboard": "Kopiera till Urklipp",
        "tooltip.redo": "G\xF6ra om",
        "tooltip.toggle virtual keyboard": "V\xE4xla virtuellt tangentbord",
        "tooltip.undo": "\xC5ngra",
        "menu.insert matrix": "S\xE4tt in matris",
        "menu.insert vector": "Infoga vektor",
        "submenu.array.matrix delimiters": "Matrisavgr\xE4nsare",
        "menu.array.add row above": "L\xE4gg till rad efter",
        "menu.array.add row below": "L\xE4gg till rad f\xF6re",
        "menu.array.add column after": "L\xE4gg till kolumn efter",
        "menu.array.add column before": "L\xE4gg till kolumn f\xF6re",
        "menu.array.delete row": "Radera rad",
        "menu.array.delete rows": "Ta bort valda rader",
        "menu.array.delete column": "Ta bort kolumn",
        "menu.array.delete columns": "Ta bort valda kolumner",
        "submenu.array.insert separator": "S\xE4tt i separator",
        "menu.insert table": "Infoga tabell",
        "submenu.table style": "Tabellstil"
      },
      th: {
        "keyboard.tooltip.functions": "\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19",
        "keyboard.tooltip.symbols": "\u0E2A\u0E31\u0E0D\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C",
        "keyboard.tooltip.greek": "\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E01\u0E23\u0E35\u0E01",
        "keyboard.tooltip.command": "\u0E42\u0E2B\u0E21\u0E14\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 \u0E19\u0E49\u0E33\u0E22\u0E32\u0E07",
        "keyboard.tooltip.numeric": "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02",
        "keyboard.tooltip.alphabetic": "\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E42\u0E23\u0E21\u0E31\u0E19",
        "tooltip.copy to clipboard": "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E04\u0E25\u0E34\u0E1B\u0E1A\u0E2D\u0E23\u0E4C\u0E14",
        "tooltip.redo": "\u0E17\u0E33\u0E0B\u0E49\u0E33",
        "tooltip.toggle virtual keyboard": "\u0E2A\u0E25\u0E31\u0E1A\u0E41\u0E1B\u0E49\u0E19\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E40\u0E2A\u0E21\u0E37\u0E2D\u0E19",
        "tooltip.undo": "\u0E40\u0E25\u0E34\u0E01\u0E17\u0E33",
        "menu.insert matrix": "\u0E41\u0E17\u0E23\u0E01\u0E40\u0E21\u0E17\u0E23\u0E34\u0E01\u0E0B\u0E4C",
        "menu.insert vector": "\u0E41\u0E17\u0E23\u0E01\u0E40\u0E27\u0E01\u0E40\u0E15\u0E2D\u0E23\u0E4C",
        "submenu.array.matrix delimiters": "\u0E15\u0E31\u0E27\u0E04\u0E31\u0E48\u0E19\u0E40\u0E21\u0E17\u0E23\u0E34\u0E01\u0E0B\u0E4C",
        "menu.array.add row above": "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E16\u0E27\u0E2B\u0E25\u0E31\u0E07",
        "menu.array.add row below": "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E16\u0E27\u0E01\u0E48\u0E2D\u0E19",
        "menu.array.add column after": "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E2D\u0E25\u0E31\u0E21\u0E19\u0E4C\u0E2B\u0E25\u0E31\u0E07",
        "menu.array.add column before": "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E2D\u0E25\u0E31\u0E21\u0E19\u0E4C\u0E01\u0E48\u0E2D\u0E19",
        "menu.array.delete row": "\u0E25\u0E1A\u0E41\u0E16\u0E27",
        "menu.array.delete rows": "\u0E25\u0E1A\u0E41\u0E16\u0E27\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01",
        "menu.array.delete column": "\u0E25\u0E1A\u0E04\u0E2D\u0E25\u0E31\u0E21\u0E19\u0E4C",
        "menu.array.delete columns": "\u0E25\u0E1A\u0E04\u0E2D\u0E25\u0E31\u0E21\u0E19\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01",
        "submenu.array.insert separator": "\u0E15\u0E31\u0E27\u0E04\u0E31\u0E48\u0E19\u0E41\u0E17\u0E23\u0E01",
        "menu.insert table": "\u0E41\u0E17\u0E23\u0E01\u0E15\u0E32\u0E23\u0E32\u0E07",
        "submenu.table style": "\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E15\u0E32\u0E23\u0E32\u0E07"
      },
      tr: {
        "keyboard.tooltip.functions": "Fonksiyonlar",
        "keyboard.tooltip.symbols": "Semboller",
        "keyboard.tooltip.greek": "Yunan harfleri",
        "keyboard.tooltip.command": "LaTeX Komut Modu",
        "keyboard.tooltip.numeric": "Say\u0131sal",
        "keyboard.tooltip.alphabetic": "Roma Harfleri",
        "tooltip.copy to clipboard": "Panoya kopyala",
        "tooltip.redo": "Yeniden yap",
        "tooltip.toggle virtual keyboard": "Sanal Klavyeyi A\xE7/Kapat",
        "tooltip.undo": "Geri alma",
        "menu.insert matrix": "Matris Ekle",
        "menu.insert vector": "Vekt\xF6r Ekle",
        "submenu.array.matrix delimiters": "Matris S\u0131n\u0131rlay\u0131c\u0131lar",
        "menu.array.add row above": "Sat\u0131rdan Sonra Ekle",
        "menu.array.add row below": "\xD6nce Sat\u0131r Ekle",
        "menu.array.add column after": "Sonra S\xFCtun Ekle",
        "menu.array.add column before": "\xD6nce S\xFCtun Ekle",
        "menu.array.delete row": "S\u0131ray\u0131 sil",
        "menu.array.delete rows": "Se\xE7ili Sat\u0131rlar\u0131 Sil",
        "menu.array.delete column": "S\xFCtunu Sil",
        "menu.array.delete columns": "Se\xE7ili S\xFCtunlar\u0131 Sil",
        "submenu.array.insert separator": "Ay\u0131r\u0131c\u0131 Ekle",
        "menu.insert table": "Tablo Ekle",
        "submenu.table style": "Tablo Stili"
      },
      uk: {
        "keyboard.tooltip.functions": "\u0424\u0443\u043D\u043A\u0446\u0456\u0457",
        "keyboard.tooltip.symbols": "\u0421\u0438\u043C\u0432\u043E\u043B\u0438",
        "keyboard.tooltip.greek": "\u0413\u0440\u0435\u0446\u044C\u043A\u0456 \u043B\u0456\u0442\u0435\u0440\u0438",
        "keyboard.tooltip.command": "\u041A\u043E\u043C\u0430\u043D\u0434\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C \u043B\u0430\u0442\u0435\u043A\u0441\u0443",
        "keyboard.tooltip.numeric": "\u0427\u0438\u0441\u043B\u043E\u0432\u0438\u0439",
        "keyboard.tooltip.alphabetic": "\u0420\u0438\u043C\u0441\u044C\u043A\u0456 \u043B\u0456\u0442\u0435\u0440\u0438",
        "tooltip.copy to clipboard": "\u041A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0456\u043D\u0443",
        "tooltip.redo": "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0438",
        "tooltip.toggle virtual keyboard": "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u0438 \u0432\u0456\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u0443 \u043A\u043B\u0430\u0432\u0456\u0430\u0442\u0443\u0440\u0443",
        "tooltip.undo": "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
        "menu.insert matrix": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u043C\u0430\u0442\u0440\u0438\u0446\u044E",
        "menu.insert vector": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0432\u0435\u043A\u0442\u043E\u0440",
        "submenu.array.matrix delimiters": "\u041C\u0430\u0442\u0440\u0438\u0447\u043D\u0456 \u0440\u043E\u0437\u0434\u0456\u043B\u044C\u043D\u0438\u043A\u0438",
        "menu.array.add row above": "\u0414\u043E\u0434\u0430\u0442\u0438 \u0440\u044F\u0434\u043E\u043A \u043F\u0456\u0441\u043B\u044F",
        "menu.array.add row below": "\u0414\u043E\u0434\u0430\u0442\u0438 \u0440\u044F\u0434\u043E\u043A \u0434\u043E",
        "menu.array.add column after": "\u0414\u043E\u0434\u0430\u0442\u0438 \u0441\u0442\u043E\u0432\u043F\u0435\u0446\u044C \u043F\u0456\u0441\u043B\u044F",
        "menu.array.add column before": "\u0414\u043E\u0434\u0430\u0442\u0438 \u0441\u0442\u043E\u0432\u043F\u0435\u0446\u044C \u043F\u0435\u0440\u0435\u0434",
        "menu.array.delete row": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0440\u044F\u0434\u043E\u043A",
        "menu.array.delete rows": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0432\u0438\u0431\u0440\u0430\u043D\u0456 \u0440\u044F\u0434\u043A\u0438",
        "menu.array.delete column": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0441\u0442\u043E\u0432\u043F\u0435\u0446\u044C",
        "menu.array.delete columns": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0432\u0438\u0431\u0440\u0430\u043D\u0456 \u0441\u0442\u043E\u0432\u043F\u0446\u0456",
        "submenu.array.insert separator": "\u0412\u0441\u0442\u0430\u0432\u0442\u0435 \u0440\u043E\u0437\u0434\u0456\u043B\u044C\u043D\u0438\u043A",
        "menu.insert table": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0442\u0430\u0431\u043B\u0438\u0446\u044E",
        "submenu.table style": "\u0421\u0442\u0438\u043B\u044C \u0442\u0430\u0431\u043B\u0438\u0446\u0456"
      },
      vi: {
        "keyboard.tooltip.functions": "Ch\u1EE9c n\u0103ng",
        "keyboard.tooltip.symbols": "K\xFD hi\u1EC7u",
        "keyboard.tooltip.greek": "Ch\u1EEF Hy L\u1EA1p",
        "keyboard.tooltip.command": "Ch\u1EBF \u0111\u1ED9 l\u1EC7nh LaTeX",
        "keyboard.tooltip.numeric": "S\u1ED1",
        "keyboard.tooltip.alphabetic": "Ch\u1EEF c\xE1i La m\xE3",
        "tooltip.copy to clipboard": "Sao ch\xE9p v\xE0o clipboard",
        "tooltip.redo": "L\xE0m l\u1EA1i",
        "tooltip.toggle virtual keyboard": "Chuy\u1EC3n \u0111\u1ED5i b\xE0n ph\xEDm \u1EA3o",
        "tooltip.undo": "Ho\xE0n t\xE1c",
        "menu.insert matrix": "Ch\xE8n ma tr\u1EADn",
        "menu.insert vector": "Insert Vector",
        "submenu.array.matrix delimiters": "D\u1EA5u ph\xE2n c\xE1ch ma tr\u1EADn",
        "menu.array.add row above": "Th\xEAm h\xE0ng sau",
        "menu.array.add row below": "Th\xEAm h\xE0ng tr\u01B0\u1EDBc",
        "menu.array.add column after": "Th\xEAm c\u1ED9t sau",
        "menu.array.add column before": "Th\xEAm c\u1ED9t tr\u01B0\u1EDBc",
        "menu.array.delete row": "X\xF3a h\xE0ng",
        "menu.array.delete rows": "X\xF3a h\xE0ng \u0111\xE3 ch\u1ECDn",
        "menu.array.delete column": "X\xF3a c\u1ED9t",
        "menu.array.delete columns": "X\xF3a c\xE1c c\u1ED9t \u0111\xE3 ch\u1ECDn",
        "submenu.array.insert separator": "Ch\xE8n d\u1EA5u ph\xE2n c\xE1ch",
        "menu.insert table": "Ch\xE8n b\u1EA3ng",
        "submenu.table style": "Ki\u1EC3u b\u1EA3ng"
      },
      zh_cn: {
        "keyboard.tooltip.functions": "\u804C\u80FD",
        "keyboard.tooltip.symbols": "\u7B26\u53F7",
        "keyboard.tooltip.greek": "\u5E0C\u814A\u5B57\u6BCD",
        "keyboard.tooltip.command": "\u4E73\u80F6 \u547D\u4EE4\u6A21\u5F0F",
        "keyboard.tooltip.numeric": "\u6570\u5B57",
        "keyboard.tooltip.alphabetic": "\u7F57\u9A6C\u5B57\u6BCD",
        "tooltip.copy to clipboard": "\u590D\u5236\u5230\u526A\u8D34\u677F",
        "tooltip.redo": "\u91CD\u505A",
        "tooltip.toggle virtual keyboard": "\u5207\u6362\u865A\u62DF\u952E\u76D8",
        "tooltip.undo": "\u64A4\u6D88",
        "menu.insert matrix": "\u63D2\u5165\u77E9\u9635",
        "menu.insert vector": "\u63D2\u5165\u5411\u91CF",
        "submenu.array.matrix delimiters": "\u77E9\u9635\u5206\u9694\u7B26",
        "menu.array.add row above": "\u5728\u540E\u9762\u6DFB\u52A0\u884C",
        "menu.array.add row below": "\u5728\u524D\u9762\u6DFB\u52A0\u884C",
        "menu.array.add column after": "\u5728\u540E\u9762\u6DFB\u52A0\u5217r",
        "menu.array.add column before": "\u5728\u524D\u9762\u6DFB\u52A0\u5217",
        "menu.array.delete row": "\u5220\u9664\u884C",
        "menu.array.delete rows": "\u5220\u9664\u9009\u5B9A\u884C",
        "menu.array.delete column": "\u5220\u9664\u5217",
        "menu.array.delete columns": "\u5220\u9664\u9009\u5B9A\u7684\u5217",
        "submenu.array.insert separator": "\u63D2\u5165\u5206\u9694\u7B26",
        "menu.insert table": "\u63D2\u5165\u8868\u683C",
        "submenu.table style": "\u8868\u683C\u6837\u5F0F"
      },
      zh_tw: {
        "keyboard.tooltip.functions": "\u8077\u80FD",
        "keyboard.tooltip.symbols": "\u7B26\u865F",
        "keyboard.tooltip.greek": "\u5E0C\u81D8\u5B57\u6BCD",
        "keyboard.tooltip.command": "\u4E73\u81A0\u547D\u4EE4\u6A21\u5F0F",
        "keyboard.tooltip.numeric": "\u6578\u5B57",
        "keyboard.tooltip.alphabetic": "\u7F85\u99AC\u5B57\u6BCD",
        "tooltip.copy to clipboard": "\u8907\u88FD\u5230\u526A\u8CBC\u677F",
        "tooltip.redo": "\u91CD\u505A",
        "tooltip.toggle virtual keyboard": "\u5207\u63DB\u865B\u64EC\u9375\u76E4",
        "tooltip.undo": "\u64A4\u6D88",
        "menu.insert matrix": "\u63D2\u5165\u77E9\u9663",
        "menu.insert vector": "\u63D2\u5165\u5411\u91CF",
        "submenu.array.matrix delimiters": "\u77E9\u9663\u5206\u9694\u7B26",
        "menu.array.add row above": "\u5728\u5F8C\u9762\u6DFB\u52A0\u884C",
        "menu.array.add row below": "\u5728\u524D\u9762\u6DFB\u52A0\u884C",
        "menu.array.add column after": "\u5728\u5F8C\u9762\u6DFB\u52A0\u5217",
        "menu.array.add column before": "\u5728\u524D\u9762\u6DFB\u52A0\u5217",
        "menu.array.delete row": "\u522A\u9664\u884C",
        "menu.array.delete rows": "\u522A\u9664\u9078\u5B9A\u884C",
        "menu.array.delete column": "\u522A\u9664\u5217",
        "menu.array.delete columns": "\u522A\u9664\u9078\u5B9A\u7684\u5217",
        "submenu.array.insert separator": "\u63D2\u5165\u5206\u9694\u7B26",
        "menu.insert table": "\u63D2\u5165\u8868\u683C",
        "submenu.table style": "\u8868\u683C\u6A23\u5F0F"
      }
    };

    function fe() {
      return "window" in globalThis && "document" in globalThis
    }

    function Hi() {
      if (!fe()) throw new Error(`<math-field> is an interactive component that needs to run in a browser environment
If you are using nextjs, see https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr`)
    }

    function mn() {
      return "matchMedia" in globalThis ? globalThis.matchMedia("(any-pointer: coarse)").matches : "ontouchstart" in globalThis || navigator.maxTouchPoints > 0
    }

    function Gi() {
      return typeof navigator.vibrate == "function"
    }

    function jt() {
      var e, r;
      if (!fe()) return "other";
      let t = (r = (e = navigator.userAgentData) == null ? void 0 : e.platform) != null ? r : navigator.platform;
      return /^mac/i.test(t) ? navigator.maxTouchPoints === 5 ? "ios" : "macos" : /^win/i.test(t) ? "windows" : /android/i.test(navigator.userAgent) ? "android" : /iphone|ipod|ipad/i.test(navigator.userAgent) ? "ios" : /\bcros\b/i.test(navigator.userAgent) ? "chromeos" : "other"
    }

    function Io() {
      if (!fe()) return !0;
      if (/firefox/i.test(navigator.userAgent)) {
        let t = navigator.userAgent.match(/firefox\/(\d+)/i);
        return t ? parseInt(t[1]) >= 78 : !1
      }
      if (/trident/i.test(navigator.userAgent)) return !1;
      if (/edge/i.test(navigator.userAgent)) {
        let t = navigator.userAgent.match(/edg\/(\d+)/i);
        return t ? parseInt(t[1]) >= 79 : !1
      }
      return !0
    }
    var W = {
      strings: dn,
      _locale: "",
      get locale() {
        return W._locale || (W._locale = fe() ? navigator.language.slice(0, 5) : "en"), W._locale
      },
      set locale(t) {
        W._locale = t
      },
      merge(t, e) {
        if (t && e) {
          let r = W._locale;
          W.locale = t, W.strings[t] = b(b({}, W.strings[t]), e), W.locale = r
        } else if (t && !e)
          for (let r of Object.keys(t)) W.merge(r, t[r])
      }
    };

    function Kt(t) {
      if (t === void 0) return;
      let e = W.locale.slice(0, 2),
        r = "";
      if (W.strings[W.locale] && (r = W.strings[W.locale][t]), !r && W.strings[e] && (r = W.strings[e][t]), r || (r = W.strings.en[t]), !!r) return r
    }
    var bl = {
        m0: "#3F3D99",
        m1: "#993D71",
        m2: "#998B3D",
        m3: "#3D9956",
        m4: "#3D5A99",
        m5: "#993D90",
        m6: "#996D3D",
        m7: "#43993D",
        m8: "#3D7999",
        m9: "#843D99"
      },
      xl = {
        blue: "#0072BD",
        orange: "#D95319",
        yellow: "#EDB120",
        purple: "#7E2F8E",
        green: "#77AC30",
        cyan: "#4DBEEE",
        red: "#A2142F"
      },
      ci = {
        red: "#fbbbb6",
        orange: "#ffe0c2",
        yellow: "#fff1c2",
        lime: "#d0e8b9",
        green: "#bceac4",
        teal: "#b9f1f1",
        blue: "#b6d9fb",
        indigo: "#d1c2f0",
        purple: "#e3baf8",
        magenta: "#f9c8e0",
        black: "#353535",
        "dark-grey": "#8C8C8C",
        grey: "#D0D0D0",
        "light-grey": "#F0F0F0",
        white: "#ffffff"
      },
      ui = {
        red: "#d7170b",
        orange: "#fe8a2b",
        yellow: "#ffc02b",
        lime: "#63b215",
        green: "#21ba3a",
        teal: "#17cfcf",
        blue: "#0d80f2",
        indigo: "#63c",
        purple: "#a219e6",
        magenta: "#eb4799",
        black: "#000",
        "dark-grey": "#666",
        grey: "#A6A6A6",
        "light-grey": "#d4d5d2",
        white: "#ffffff"
      },
      pn = {
        Red: "red",
        Orange: "orange",
        Yellow: "yellow",
        LimeGreen: "lime",
        Green: "green",
        TealBlue: "teal",
        Blue: "blue",
        Violet: "indigo",
        Purple: "purple",
        Magenta: "magenta",
        Black: "black",
        Gray: "grey",
        White: "white"
      },
      vl = {
        Apricot: "#FBB982",
        Aquamarine: "#00B5BE",
        Bittersweet: "#C04F17",
        Black: "#221E1F",
        Blue: "#2D2F92",
        BlueGreen: "#00B3B8",
        BlueViolet: "#473992",
        BrickRed: "#B6321C",
        Brown: "#792500",
        BurntOrange: "#F7921D",
        CadetBlue: "#74729A",
        CarnationPink: "#F282B4",
        Cerulean: "#00A2E3",
        CornflowerBlue: "#41B0E4",
        Cyan: "#00AEEF",
        Dandelion: "#FDBC42",
        DarkOrchid: "#A4538A",
        Emerald: "#00A99D",
        ForestGreen: "#009B55",
        Fuchsia: "#8C368C",
        Goldenrod: "#FFDF42",
        Gray: "#949698",
        Green: "#00A64F",
        GreenYellow: "#DFE674",
        JungleGreen: "#00A99A",
        Lavender: "#F49EC4",
        Limegreen: "#8DC73E",
        Magenta: "#EC008C",
        Mahogany: "#A9341F",
        Maroon: "#AF3235",
        Melon: "#F89E7B",
        MidnightBlue: "#006795",
        Mulberry: "#A93C93",
        NavyBlue: "#006EB8",
        OliveGreen: "#3C8031",
        Orange: "#F58137",
        OrangeRed: "#ED135A",
        Orchid: "#AF72B0",
        Peach: "#F7965A",
        Periwinkle: "#7977B8",
        PineGreen: "#008B72",
        Plum: "#92268F",
        ProcessBlue: "#00B0F0",
        Purple: "#99479B",
        RawSienna: "#974006",
        Red: "#ED1B23",
        RedOrange: "#F26035",
        RedViolet: "#A1246B",
        Rhodamine: "#EF559F",
        RoyalBlue: "#0071BC",
        RoyalPurple: "#613F99",
        RubineRed: "#ED017D",
        Salmon: "#F69289",
        SeaGreen: "#3FBC9D",
        Sepia: "#671800",
        SkyBlue: "#46C5DD",
        SpringGreen: "#C6DC67",
        Tan: "#DA9D76",
        TealBlue: "#00AEB3",
        Thistle: "#D883B7",
        Turquoise: "#00B4CE",
        Violet: "#58429B",
        VioletRed: "#EF58A0",
        White: "#FFFFFF",
        WildStrawberry: "#EE2967",
        Yellow: "#FFF200",
        YellowGreen: "#98CC70",
        YellowOrange: "#FAA21A"
      };

    function br(t) {
      var u, d, m, h, f, y;
      let e = t.split("!"),
        r, i, o, a = 255,
        n = 255,
        s = 255,
        l = -1,
        c = e.length > 0 && e[0].startsWith("-");
      c && (e[0] = e[0].slice(1));
      for (let w = 0; w < e.length; w++) {
        r = a, i = n, o = s;
        let k = (u = e[w].trim().match(/^([A-Za-z\d]+)/)) == null ? void 0 : u[1],
          S = k == null ? void 0 : k.toLowerCase(),
          T = k && (y = (f = (h = (m = (d = ui[S]) != null ? d : ui[pn[k]]) != null ? m : xl[k]) != null ? h : vl[k]) != null ? f : bl[k]) != null ? y : e[w].trim(),
          L = T.match(/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
        if (L != null && L[1] && L[2] && L[3]) a = Math.max(0, Math.min(255, Number.parseInt(L[1], 16))), n = Math.max(0, Math.min(255, Number.parseInt(L[2], 16))), s = Math.max(0, Math.min(255, Number.parseInt(L[3], 16)));
        else if (L = T.match(/^#([\da-f]{3})$/i), L != null && L[1]) {
          let D = Number.parseInt(L[1][0], 16),
            M = Number.parseInt(L[1][1], 16),
            R = Number.parseInt(L[1][2], 16);
          a = Math.max(0, Math.min(255, D * 16 + D)), n = Math.max(0, Math.min(255, M * 16 + M)), s = Math.max(0, Math.min(255, R * 16 + R))
        } else if (L = T.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i), L != null && L[1] && L[2] && L[3]) a = Math.max(0, Math.min(255, Number.parseInt(L[1]))), n = Math.max(0, Math.min(255, Number.parseInt(L[2]))), s = Math.max(0, Math.min(255, Number.parseInt(L[3])));
        else return;
        l >= 0 && (a = (1 - l) * a + l * r, n = (1 - l) * n + l * i, s = (1 - l) * s + l * o, l = -1), w + 1 < e.length && (l = Math.max(0, Math.min(100, Number.parseInt(e[++w]))) / 100)
      }
      return l >= 0 && (a = l * a + (1 - l) * r, n = l * n + (1 - l) * i, s = l * s + (1 - l) * o), c && (a = 255 - a, n = 255 - n, s = 255 - s), "#" + ("00" + Math.round(a).toString(16)).slice(-2) + ("00" + Math.round(n).toString(16)).slice(-2) + ("00" + Math.round(s).toString(16)).slice(-2)
    }

    function zr(t) {
      var e, r;
      return t = t.trim(), (r = (e = ci[t.toLowerCase()]) != null ? e : ci[pn[t]]) != null ? r : br(t)
    }

    function wl(t) {
      if (!t || t[0] !== "#") return;
      t = t.slice(1);
      let e;
      return t.length <= 4 ? (e = {
        r: parseInt(t[0] + t[0], 16),
        g: parseInt(t[1] + t[1], 16),
        b: parseInt(t[2] + t[2], 16)
      }, t.length === 4 && (e.a = parseInt(t[3] + t[3], 16) / 255)) : (e = {
        r: parseInt(t[0] + t[1], 16),
        g: parseInt(t[2] + t[3], 16),
        b: parseInt(t[4] + t[5], 16)
      }, t.length === 8 && (e.a = parseInt(t[6] + t[7], 16) / 255)), e && e.a === void 0 && (e.a = 1), e
    }

    function qo(t, e, r) {
      return r < 0 && (r += 6), r >= 6 && (r -= 6), r < 1 ? (e - t) * r + t : r < 3 ? e : r < 4 ? (e - t) * (4 - r) + t : t
    }

    function kl(t) {
      let [e, r, i] = [t.h, t.s, t.l];
      e = (e + 360) % 360 / 60, i = Math.max(0, Math.min(i, 1)), r = Math.max(0, Math.min(r, 1));
      let o = i <= .5 ? i * (r + 1) : i + r - i * r,
        a = i * 2 - o;
      return {
        r: Math.round(255 * qo(a, o, e + 2)),
        g: Math.round(255 * qo(a, o, e)),
        b: Math.round(255 * qo(a, o, e - 2))
      }
    }

    function $o(t) {
      return t < 0 ? 0 : t > 255 ? 255 : Math.round(t)
    }

    function Sl(t) {
      let {
        r: e,
        g: r,
        b: i
      } = t, o = ((1 << 24) + ($o(e) << 16) + ($o(r) << 8) + $o(i)).toString(16).slice(1);
      return o[0] === o[1] && o[2] === o[3] && o[4] === o[5] && o[6] === o[7] && (o = o[0] + o[2] + o[4]), "#" + o
    }

    function _l(t) {
      let {
        r: e,
        g: r,
        b: i
      } = t;
      e = e / 255, r = r / 255, i = i / 255;
      let o = Math.min(e, r, i),
        a = Math.max(e, r, i),
        n = a - o,
        s, l;
      a === o ? s = 0 : e === a ? s = (r - i) / n : r === a ? s = 2 + (i - e) / n : i === a && (s = 4 + (e - r) / n), s = Math.min(s * 60, 360), s < 0 && (s += 360);
      let c = (o + a) / 2;
      return a === o ? l = 0 : c <= .5 ? l = n / (a + o) : l = n / (2 - a - o), {
        h: s,
        s: l,
        l: c
      }
    }

    function Vo(t) {
      let e = wl(t);
      if (!e) return t;
      let {
        h: r,
        s: i,
        l: o
      } = _l(e);
      return i += .1, o -= .1, Sl(kl({
        h: r,
        s: i,
        l: o
      }))
    }
    var p = [0, .69444, 0, 0],
      C = [0, .61111, 0, 0],
      K = [.25, .75, 0, 0],
      O = [0, .44444, 0, 0],
      z = [0, .68611, 0, 0],
      N = [.19444, .69444, 0, 0],
      I = [0, .68333, 0, 0],
      q = [0, .68889, 0, 0],
      G = [0, .69141, 0, 0],
      $ = [0, 0, 0, 0],
      ce = [0, .64444, 0, 0],
      ge = [0, .69224, 0, 0],
      ye = [.19444, .44444, 0, 0],
      Me = [.65002, 1.15, 0, 0],
      Ce = [0, .55556, 0, 0],
      Be = [.35001, .85, 0, 0],
      Ke = [1.25003, 1.75, 0, 0],
      Oe = [.95003, 1.45, 0, 0],
      Ve = [0, .75, 0, 0],
      He = [0, .47534, 0, 0],
      it = [.25001, .75, 0, 0],
      ot = [.55001, 1.05, 0, 0],
      Ho = [.16667, .68889, 0, 0],
      at = [.08167, .58167, 0, 0],
      hn = {
        "AMS-Regular": {
          32: $,
          65: q,
          66: q,
          67: q,
          68: q,
          69: q,
          70: q,
          71: q,
          72: q,
          73: q,
          74: Ho,
          75: q,
          76: q,
          77: q,
          78: q,
          79: Ho,
          80: q,
          81: Ho,
          82: q,
          83: q,
          84: q,
          85: q,
          86: q,
          87: q,
          88: q,
          89: q,
          90: q,
          107: q,
          160: $,
          165: [0, .675, .025, 0],
          174: [.15559, .69224, 0, 0],
          240: q,
          295: q,
          710: [0, .825, 0, 0],
          732: [0, .9, 0, 0],
          770: [0, .825, 0, 0],
          771: [0, .9, 0, 0],
          989: at,
          1008: [0, .43056, .04028, 0],
          8245: [0, .54986, 0, 0],
          8463: q,
          8487: q,
          8498: q,
          8502: q,
          8503: q,
          8504: q,
          8513: q,
          8592: [-.03598, .46402, 0, 0],
          8594: [-.03598, .46402, 0, 0],
          8602: [-.13313, .36687, 0, 0],
          8603: [-.13313, .36687, 0, 0],
          8606: [.01354, .52239, 0, 0],
          8608: [.01354, .52239, 0, 0],
          8610: [.01354, .52239, 0, 0],
          8611: [.01354, .52239, 0, 0],
          8619: [0, .54986, 0, 0],
          8620: [0, .54986, 0, 0],
          8621: [-.13313, .37788, 0, 0],
          8622: [-.13313, .36687, 0, 0],
          8624: ge,
          8625: ge,
          8630: [0, .43056, 0, 0],
          8631: [0, .43056, 0, 0],
          8634: [.08198, .58198, 0, 0],
          8635: [.08198, .58198, 0, 0],
          8638: [.19444, .69224, 0, 0],
          8639: [.19444, .69224, 0, 0],
          8642: [.19444, .69224, 0, 0],
          8643: [.19444, .69224, 0, 0],
          8644: [.1808, .675, 0, 0],
          8646: [.1808, .675, 0, 0],
          8647: [.1808, .675, 0, 0],
          8648: [.19444, .69224, 0, 0],
          8649: [.1808, .675, 0, 0],
          8650: [.19444, .69224, 0, 0],
          8651: [.01354, .52239, 0, 0],
          8652: [.01354, .52239, 0, 0],
          8653: [-.13313, .36687, 0, 0],
          8654: [-.13313, .36687, 0, 0],
          8655: [-.13313, .36687, 0, 0],
          8666: [.13667, .63667, 0, 0],
          8667: [.13667, .63667, 0, 0],
          8669: [-.13313, .37788, 0, 0],
          8672: [-.064, .437, 0, 0],
          8674: [-.064, .437, 0, 0],
          8705: [0, .825, 0, 0],
          8708: q,
          8709: at,
          8717: [0, .43056, 0, 0],
          8722: [-.03598, .46402, 0, 0],
          8724: [.08198, .69224, 0, 0],
          8726: at,
          8733: ge,
          8736: ge,
          8737: ge,
          8738: [.03517, .52239, 0, 0],
          8739: at,
          8740: [.25142, .74111, 0, 0],
          8741: at,
          8742: [.25142, .74111, 0, 0],
          8756: ge,
          8757: ge,
          8764: [-.13313, .36687, 0, 0],
          8765: [-.13313, .37788, 0, 0],
          8769: [-.13313, .36687, 0, 0],
          8770: [-.03625, .46375, 0, 0],
          8774: [.30274, .79383, 0, 0],
          8776: [-.01688, .48312, 0, 0],
          8778: at,
          8782: [.06062, .54986, 0, 0],
          8783: [.06062, .54986, 0, 0],
          8785: [.08198, .58198, 0, 0],
          8786: [.08198, .58198, 0, 0],
          8787: [.08198, .58198, 0, 0],
          8790: ge,
          8791: [.22958, .72958, 0, 0],
          8796: [.08198, .91667, 0, 0],
          8806: [.25583, .75583, 0, 0],
          8807: [.25583, .75583, 0, 0],
          8808: [.25142, .75726, 0, 0],
          8809: [.25142, .75726, 0, 0],
          8812: [.25583, .75583, 0, 0],
          8814: [.20576, .70576, 0, 0],
          8815: [.20576, .70576, 0, 0],
          8816: [.30274, .79383, 0, 0],
          8817: [.30274, .79383, 0, 0],
          8818: [.22958, .72958, 0, 0],
          8819: [.22958, .72958, 0, 0],
          8822: [.1808, .675, 0, 0],
          8823: [.1808, .675, 0, 0],
          8828: [.13667, .63667, 0, 0],
          8829: [.13667, .63667, 0, 0],
          8830: [.22958, .72958, 0, 0],
          8831: [.22958, .72958, 0, 0],
          8832: [.20576, .70576, 0, 0],
          8833: [.20576, .70576, 0, 0],
          8840: [.30274, .79383, 0, 0],
          8841: [.30274, .79383, 0, 0],
          8842: [.13597, .63597, 0, 0],
          8843: [.13597, .63597, 0, 0],
          8847: [.03517, .54986, 0, 0],
          8848: [.03517, .54986, 0, 0],
          8858: [.08198, .58198, 0, 0],
          8859: [.08198, .58198, 0, 0],
          8861: [.08198, .58198, 0, 0],
          8862: [0, .675, 0, 0],
          8863: [0, .675, 0, 0],
          8864: [0, .675, 0, 0],
          8865: [0, .675, 0, 0],
          8872: ge,
          8873: ge,
          8874: ge,
          8876: q,
          8877: q,
          8878: q,
          8879: q,
          8882: [.03517, .54986, 0, 0],
          8883: [.03517, .54986, 0, 0],
          8884: [.13667, .63667, 0, 0],
          8885: [.13667, .63667, 0, 0],
          8888: [0, .54986, 0, 0],
          8890: [.19444, .43056, 0, 0],
          8891: [.19444, .69224, 0, 0],
          8892: [.19444, .69224, 0, 0],
          8901: [0, .54986, 0, 0],
          8903: at,
          8905: at,
          8906: at,
          8907: ge,
          8908: ge,
          8909: [-.03598, .46402, 0, 0],
          8910: [0, .54986, 0, 0],
          8911: [0, .54986, 0, 0],
          8912: [.03517, .54986, 0, 0],
          8913: [.03517, .54986, 0, 0],
          8914: [0, .54986, 0, 0],
          8915: [0, .54986, 0, 0],
          8916: ge,
          8918: [.0391, .5391, 0, 0],
          8919: [.0391, .5391, 0, 0],
          8920: [.03517, .54986, 0, 0],
          8921: [.03517, .54986, 0, 0],
          8922: [.38569, .88569, 0, 0],
          8923: [.38569, .88569, 0, 0],
          8926: [.13667, .63667, 0, 0],
          8927: [.13667, .63667, 0, 0],
          8928: [.30274, .79383, 0, 0],
          8929: [.30274, .79383, 0, 0],
          8934: [.23222, .74111, 0, 0],
          8935: [.23222, .74111, 0, 0],
          8936: [.23222, .74111, 0, 0],
          8937: [.23222, .74111, 0, 0],
          8938: [.20576, .70576, 0, 0],
          8939: [.20576, .70576, 0, 0],
          8940: [.30274, .79383, 0, 0],
          8941: [.30274, .79383, 0, 0],
          8994: [.19444, .69224, 0, 0],
          8995: [.19444, .69224, 0, 0],
          9416: [.15559, .69224, 0, 0],
          9484: ge,
          9488: ge,
          9492: [0, .37788, 0, 0],
          9496: [0, .37788, 0, 0],
          9585: [.19444, .68889, 0, 0],
          9586: [.19444, .74111, 0, 0],
          9632: [0, .675, 0, 0],
          9633: [0, .675, 0, 0],
          9650: [0, .54986, 0, 0],
          9651: [0, .54986, 0, 0],
          9654: [.03517, .54986, 0, 0],
          9660: [0, .54986, 0, 0],
          9661: [0, .54986, 0, 0],
          9664: [.03517, .54986, 0, 0],
          9674: [.11111, .69224, 0, 0],
          9733: [.19444, .69224, 0, 0],
          10003: ge,
          10016: ge,
          10731: [.11111, .69224, 0, 0],
          10846: [.19444, .75583, 0, 0],
          10877: [.13667, .63667, 0, 0],
          10878: [.13667, .63667, 0, 0],
          10885: [.25583, .75583, 0, 0],
          10886: [.25583, .75583, 0, 0],
          10887: [.13597, .63597, 0, 0],
          10888: [.13597, .63597, 0, 0],
          10889: [.26167, .75726, 0, 0],
          10890: [.26167, .75726, 0, 0],
          10891: [.48256, .98256, 0, 0],
          10892: [.48256, .98256, 0, 0],
          10901: [.13667, .63667, 0, 0],
          10902: [.13667, .63667, 0, 0],
          10933: [.25142, .75726, 0, 0],
          10934: [.25142, .75726, 0, 0],
          10935: [.26167, .75726, 0, 0],
          10936: [.26167, .75726, 0, 0],
          10937: [.26167, .75726, 0, 0],
          10938: [.26167, .75726, 0, 0],
          10949: [.25583, .75583, 0, 0],
          10950: [.25583, .75583, 0, 0],
          10955: [.28481, .79383, 0, 0],
          10956: [.28481, .79383, 0, 0],
          57350: at,
          57351: at,
          57352: at,
          57353: [0, .43056, .04028, 0],
          57356: [.25142, .75726, 0, 0],
          57357: [.25142, .75726, 0, 0],
          57358: [.41951, .91951, 0, 0],
          57359: [.30274, .79383, 0, 0],
          57360: [.30274, .79383, 0, 0],
          57361: [.41951, .91951, 0, 0],
          57366: [.25142, .75726, 0, 0],
          57367: [.25142, .75726, 0, 0],
          57368: [.25142, .75726, 0, 0],
          57369: [.25142, .75726, 0, 0],
          57370: [.13597, .63597, 0, 0],
          57371: [.13597, .63597, 0, 0]
        },
        "Caligraphic-Regular": {
          32: $,
          65: [0, .68333, 0, .19445],
          66: [0, .68333, .03041, .13889],
          67: [0, .68333, .05834, .13889],
          68: [0, .68333, .02778, .08334],
          69: [0, .68333, .08944, .11111],
          70: [0, .68333, .09931, .11111],
          71: [.09722, .68333, .0593, .11111],
          72: [0, .68333, .00965, .11111],
          73: [0, .68333, .07382, 0],
          74: [.09722, .68333, .18472, .16667],
          75: [0, .68333, .01445, .05556],
          76: [0, .68333, 0, .13889],
          77: [0, .68333, 0, .13889],
          78: [0, .68333, .14736, .08334],
          79: [0, .68333, .02778, .11111],
          80: [0, .68333, .08222, .08334],
          81: [.09722, .68333, 0, .11111],
          82: [0, .68333, 0, .08334],
          83: [0, .68333, .075, .13889],
          84: [0, .68333, .25417, 0],
          85: [0, .68333, .09931, .08334],
          86: [0, .68333, .08222, 0],
          87: [0, .68333, .08222, .08334],
          88: [0, .68333, .14643, .13889],
          89: [.09722, .68333, .08222, .08334],
          90: [0, .68333, .07944, .13889],
          160: $
        },
        "Fraktur-Regular": {
          32: $,
          33: G,
          34: G,
          38: G,
          39: G,
          40: [.24982, .74947, 0, 0],
          41: [.24982, .74947, 0, 0],
          42: [0, .62119, 0, 0],
          43: [.08319, .58283, 0, 0],
          44: [0, .10803, 0, 0],
          45: [.08319, .58283, 0, 0],
          46: [0, .10803, 0, 0],
          47: [.24982, .74947, 0, 0],
          48: He,
          49: He,
          50: He,
          51: [.18906, .47534, 0, 0],
          52: [.18906, .47534, 0, 0],
          53: [.18906, .47534, 0, 0],
          54: G,
          55: [.18906, .47534, 0, 0],
          56: G,
          57: [.18906, .47534, 0, 0],
          58: He,
          59: [.12604, .47534, 0, 0],
          61: [-.13099, .36866, 0, 0],
          63: G,
          65: G,
          66: G,
          67: G,
          68: G,
          69: G,
          70: [.12604, .69141, 0, 0],
          71: G,
          72: [.06302, .69141, 0, 0],
          73: G,
          74: [.12604, .69141, 0, 0],
          75: G,
          76: G,
          77: G,
          78: G,
          79: G,
          80: [.18906, .69141, 0, 0],
          81: [.03781, .69141, 0, 0],
          82: G,
          83: G,
          84: G,
          85: G,
          86: G,
          87: G,
          88: G,
          89: [.18906, .69141, 0, 0],
          90: [.12604, .69141, 0, 0],
          91: [.24982, .74947, 0, 0],
          93: [.24982, .74947, 0, 0],
          94: G,
          97: He,
          98: G,
          99: He,
          100: [0, .62119, 0, 0],
          101: He,
          102: [.18906, .69141, 0, 0],
          103: [.18906, .47534, 0, 0],
          104: [.18906, .69141, 0, 0],
          105: G,
          106: G,
          107: G,
          108: G,
          109: He,
          110: He,
          111: He,
          112: [.18906, .52396, 0, 0],
          113: [.18906, .47534, 0, 0],
          114: He,
          115: He,
          116: [0, .62119, 0, 0],
          117: He,
          118: [0, .52396, 0, 0],
          119: [0, .52396, 0, 0],
          120: [.18906, .47534, 0, 0],
          121: [.18906, .47534, 0, 0],
          122: [.18906, .47534, 0, 0],
          160: $,
          8216: G,
          8217: G,
          58112: [0, .62119, 0, 0],
          58113: [0, .62119, 0, 0],
          58114: [.18906, .69141, 0, 0],
          58115: [.18906, .69141, 0, 0],
          58116: [.18906, .47534, 0, 0],
          58117: G,
          58118: [0, .62119, 0, 0],
          58119: He
        },
        "Main-Bold": {
          32: $,
          33: p,
          34: p,
          35: N,
          36: [.05556, .75, 0, 0],
          37: [.05556, .75, 0, 0],
          38: p,
          39: p,
          40: K,
          41: K,
          42: Ve,
          43: [.13333, .63333, 0, 0],
          44: [.19444, .15556, 0, 0],
          45: O,
          46: [0, .15556, 0, 0],
          47: K,
          48: ce,
          49: ce,
          50: ce,
          51: ce,
          52: ce,
          53: ce,
          54: ce,
          55: ce,
          56: ce,
          57: ce,
          58: O,
          59: ye,
          60: [.08556, .58556, 0, 0],
          61: [-.10889, .39111, 0, 0],
          62: [.08556, .58556, 0, 0],
          63: p,
          64: p,
          65: z,
          66: z,
          67: z,
          68: z,
          69: z,
          70: z,
          71: z,
          72: z,
          73: z,
          74: z,
          75: z,
          76: z,
          77: z,
          78: z,
          79: z,
          80: z,
          81: [.19444, .68611, 0, 0],
          82: z,
          83: z,
          84: z,
          85: z,
          86: [0, .68611, .01597, 0],
          87: [0, .68611, .01597, 0],
          88: z,
          89: [0, .68611, .02875, 0],
          90: z,
          91: K,
          92: K,
          93: K,
          94: p,
          95: [.31, .13444, .03194, 0],
          97: O,
          98: p,
          99: O,
          100: p,
          101: O,
          102: [0, .69444, .10903, 0],
          103: [.19444, .44444, .01597, 0],
          104: p,
          105: p,
          106: N,
          107: p,
          108: p,
          109: O,
          110: O,
          111: O,
          112: ye,
          113: ye,
          114: O,
          115: O,
          116: [0, .63492, 0, 0],
          117: O,
          118: [0, .44444, .01597, 0],
          119: [0, .44444, .01597, 0],
          120: O,
          121: [.19444, .44444, .01597, 0],
          122: O,
          123: K,
          124: K,
          125: K,
          126: [.35, .34444, 0, 0],
          160: $,
          163: p,
          168: p,
          172: O,
          176: p,
          177: [.13333, .63333, 0, 0],
          184: [.17014, 0, 0, 0],
          198: z,
          215: [.13333, .63333, 0, 0],
          216: [.04861, .73472, 0, 0],
          223: p,
          230: O,
          247: [.13333, .63333, 0, 0],
          248: [.09722, .54167, 0, 0],
          305: O,
          338: z,
          339: O,
          567: ye,
          710: p,
          711: [0, .63194, 0, 0],
          713: [0, .59611, 0, 0],
          714: p,
          715: p,
          728: p,
          729: p,
          730: p,
          732: p,
          733: p,
          915: z,
          916: z,
          920: z,
          923: z,
          926: z,
          928: z,
          931: z,
          933: z,
          934: z,
          936: z,
          937: z,
          8211: [0, .44444, .03194, 0],
          8212: [0, .44444, .03194, 0],
          8216: p,
          8217: p,
          8220: p,
          8221: p,
          8224: N,
          8225: N,
          8242: Ce,
          8407: [0, .72444, .15486, 0],
          8463: p,
          8465: p,
          8467: p,
          8472: ye,
          8476: p,
          8501: p,
          8592: [-.10889, .39111, 0, 0],
          8593: N,
          8594: [-.10889, .39111, 0, 0],
          8595: N,
          8596: [-.10889, .39111, 0, 0],
          8597: K,
          8598: N,
          8599: N,
          8600: N,
          8601: N,
          8636: [-.10889, .39111, 0, 0],
          8637: [-.10889, .39111, 0, 0],
          8640: [-.10889, .39111, 0, 0],
          8641: [-.10889, .39111, 0, 0],
          8656: [-.10889, .39111, 0, 0],
          8657: N,
          8658: [-.10889, .39111, 0, 0],
          8659: N,
          8660: [-.10889, .39111, 0, 0],
          8661: K,
          8704: p,
          8706: [0, .69444, .06389, 0],
          8707: p,
          8709: [.05556, .75, 0, 0],
          8711: z,
          8712: [.08556, .58556, 0, 0],
          8715: [.08556, .58556, 0, 0],
          8722: [.13333, .63333, 0, 0],
          8723: [.13333, .63333, 0, 0],
          8725: K,
          8726: K,
          8727: [-.02778, .47222, 0, 0],
          8728: [-.02639, .47361, 0, 0],
          8729: [-.02639, .47361, 0, 0],
          8730: [.18, .82, 0, 0],
          8733: O,
          8734: O,
          8736: ge,
          8739: K,
          8741: K,
          8743: Ce,
          8744: Ce,
          8745: Ce,
          8746: Ce,
          8747: [.19444, .69444, .12778, 0],
          8764: [-.10889, .39111, 0, 0],
          8768: N,
          8771: [.00222, .50222, 0, 0],
          8776: [.02444, .52444, 0, 0],
          8781: [.00222, .50222, 0, 0],
          8801: [.00222, .50222, 0, 0],
          8804: [.19667, .69667, 0, 0],
          8805: [.19667, .69667, 0, 0],
          8810: [.08556, .58556, 0, 0],
          8811: [.08556, .58556, 0, 0],
          8826: [.08556, .58556, 0, 0],
          8827: [.08556, .58556, 0, 0],
          8834: [.08556, .58556, 0, 0],
          8835: [.08556, .58556, 0, 0],
          8838: [.19667, .69667, 0, 0],
          8839: [.19667, .69667, 0, 0],
          8846: Ce,
          8849: [.19667, .69667, 0, 0],
          8850: [.19667, .69667, 0, 0],
          8851: Ce,
          8852: Ce,
          8853: [.13333, .63333, 0, 0],
          8854: [.13333, .63333, 0, 0],
          8855: [.13333, .63333, 0, 0],
          8856: [.13333, .63333, 0, 0],
          8857: [.13333, .63333, 0, 0],
          8866: p,
          8867: p,
          8868: p,
          8869: p,
          8900: [-.02639, .47361, 0, 0],
          8901: [-.02639, .47361, 0, 0],
          8902: [-.02778, .47222, 0, 0],
          8968: K,
          8969: K,
          8970: K,
          8971: K,
          8994: [-.13889, .36111, 0, 0],
          8995: [-.13889, .36111, 0, 0],
          9651: N,
          9657: [-.02778, .47222, 0, 0],
          9661: N,
          9667: [-.02778, .47222, 0, 0],
          9711: N,
          9824: [.12963, .69444, 0, 0],
          9825: [.12963, .69444, 0, 0],
          9826: [.12963, .69444, 0, 0],
          9827: [.12963, .69444, 0, 0],
          9837: Ve,
          9838: N,
          9839: N,
          10216: K,
          10217: K,
          10815: z,
          10927: [.19667, .69667, 0, 0],
          10928: [.19667, .69667, 0, 0],
          57376: N
        },
        "Main-BoldItalic": {
          32: $,
          33: [0, .69444, .11417, 0],
          34: [0, .69444, .07939, 0],
          35: [.19444, .69444, .06833, 0],
          37: [.05556, .75, .12861, 0],
          38: [0, .69444, .08528, 0],
          39: [0, .69444, .12945, 0],
          40: [.25, .75, .15806, 0],
          41: [.25, .75, .03306, 0],
          42: [0, .75, .14333, 0],
          43: [.10333, .60333, .03306, 0],
          44: [.19444, .14722, 0, 0],
          45: [0, .44444, .02611, 0],
          46: [0, .14722, 0, 0],
          47: [.25, .75, .15806, 0],
          48: [0, .64444, .13167, 0],
          49: [0, .64444, .13167, 0],
          50: [0, .64444, .13167, 0],
          51: [0, .64444, .13167, 0],
          52: [.19444, .64444, .13167, 0],
          53: [0, .64444, .13167, 0],
          54: [0, .64444, .13167, 0],
          55: [.19444, .64444, .13167, 0],
          56: [0, .64444, .13167, 0],
          57: [0, .64444, .13167, 0],
          58: [0, .44444, .06695, 0],
          59: [.19444, .44444, .06695, 0],
          61: [-.10889, .39111, .06833, 0],
          63: [0, .69444, .11472, 0],
          64: [0, .69444, .09208, 0],
          65: z,
          66: [0, .68611, .0992, 0],
          67: [0, .68611, .14208, 0],
          68: [0, .68611, .09062, 0],
          69: [0, .68611, .11431, 0],
          70: [0, .68611, .12903, 0],
          71: [0, .68611, .07347, 0],
          72: [0, .68611, .17208, 0],
          73: [0, .68611, .15681, 0],
          74: [0, .68611, .145, 0],
          75: [0, .68611, .14208, 0],
          76: z,
          77: [0, .68611, .17208, 0],
          78: [0, .68611, .17208, 0],
          79: [0, .68611, .09062, 0],
          80: [0, .68611, .0992, 0],
          81: [.19444, .68611, .09062, 0],
          82: [0, .68611, .02559, 0],
          83: [0, .68611, .11264, 0],
          84: [0, .68611, .12903, 0],
          85: [0, .68611, .17208, 0],
          86: [0, .68611, .18625, 0],
          87: [0, .68611, .18625, 0],
          88: [0, .68611, .15681, 0],
          89: [0, .68611, .19803, 0],
          90: [0, .68611, .14208, 0],
          91: [.25, .75, .1875, 0],
          93: [.25, .75, .09972, 0],
          94: [0, .69444, .06709, 0],
          95: [.31, .13444, .09811, 0],
          97: [0, .44444, .09426, 0],
          98: [0, .69444, .07861, 0],
          99: [0, .44444, .05222, 0],
          100: [0, .69444, .10861, 0],
          101: [0, .44444, .085, 0],
          102: [.19444, .69444, .21778, 0],
          103: [.19444, .44444, .105, 0],
          104: [0, .69444, .09426, 0],
          105: [0, .69326, .11387, 0],
          106: [.19444, .69326, .1672, 0],
          107: [0, .69444, .11111, 0],
          108: [0, .69444, .10861, 0],
          109: [0, .44444, .09426, 0],
          110: [0, .44444, .09426, 0],
          111: [0, .44444, .07861, 0],
          112: [.19444, .44444, .07861, 0],
          113: [.19444, .44444, .105, 0],
          114: [0, .44444, .11111, 0],
          115: [0, .44444, .08167, 0],
          116: [0, .63492, .09639, 0],
          117: [0, .44444, .09426, 0],
          118: [0, .44444, .11111, 0],
          119: [0, .44444, .11111, 0],
          120: [0, .44444, .12583, 0],
          121: [.19444, .44444, .105, 0],
          122: [0, .44444, .13889, 0],
          126: [.35, .34444, .11472, 0],
          160: $,
          168: [0, .69444, .11473, 0],
          176: p,
          184: [.17014, 0, 0, 0],
          198: [0, .68611, .11431, 0],
          216: [.04861, .73472, .09062, 0],
          223: [.19444, .69444, .09736, 0],
          230: [0, .44444, .085, 0],
          248: [.09722, .54167, .09458, 0],
          305: [0, .44444, .09426, 0],
          338: [0, .68611, .11431, 0],
          339: [0, .44444, .085, 0],
          567: [.19444, .44444, .04611, 0],
          710: [0, .69444, .06709, 0],
          711: [0, .63194, .08271, 0],
          713: [0, .59444, .10444, 0],
          714: [0, .69444, .08528, 0],
          715: p,
          728: [0, .69444, .10333, 0],
          729: [0, .69444, .12945, 0],
          730: p,
          732: [0, .69444, .11472, 0],
          733: [0, .69444, .11472, 0],
          915: [0, .68611, .12903, 0],
          916: z,
          920: [0, .68611, .09062, 0],
          923: z,
          926: [0, .68611, .15092, 0],
          928: [0, .68611, .17208, 0],
          931: [0, .68611, .11431, 0],
          933: [0, .68611, .10778, 0],
          934: [0, .68611, .05632, 0],
          936: [0, .68611, .10778, 0],
          937: [0, .68611, .0992, 0],
          8211: [0, .44444, .09811, 0],
          8212: [0, .44444, .09811, 0],
          8216: [0, .69444, .12945, 0],
          8217: [0, .69444, .12945, 0],
          8220: [0, .69444, .16772, 0],
          8221: [0, .69444, .07939, 0]
        },
        "Main-Italic": {
          32: $,
          33: [0, .69444, .12417, 0],
          34: [0, .69444, .06961, 0],
          35: [.19444, .69444, .06616, 0],
          37: [.05556, .75, .13639, 0],
          38: [0, .69444, .09694, 0],
          39: [0, .69444, .12417, 0],
          40: [.25, .75, .16194, 0],
          41: [.25, .75, .03694, 0],
          42: [0, .75, .14917, 0],
          43: [.05667, .56167, .03694, 0],
          44: [.19444, .10556, 0, 0],
          45: [0, .43056, .02826, 0],
          46: [0, .10556, 0, 0],
          47: [.25, .75, .16194, 0],
          48: [0, .64444, .13556, 0],
          49: [0, .64444, .13556, 0],
          50: [0, .64444, .13556, 0],
          51: [0, .64444, .13556, 0],
          52: [.19444, .64444, .13556, 0],
          53: [0, .64444, .13556, 0],
          54: [0, .64444, .13556, 0],
          55: [.19444, .64444, .13556, 0],
          56: [0, .64444, .13556, 0],
          57: [0, .64444, .13556, 0],
          58: [0, .43056, .0582, 0],
          59: [.19444, .43056, .0582, 0],
          61: [-.13313, .36687, .06616, 0],
          63: [0, .69444, .1225, 0],
          64: [0, .69444, .09597, 0],
          65: I,
          66: [0, .68333, .10257, 0],
          67: [0, .68333, .14528, 0],
          68: [0, .68333, .09403, 0],
          69: [0, .68333, .12028, 0],
          70: [0, .68333, .13305, 0],
          71: [0, .68333, .08722, 0],
          72: [0, .68333, .16389, 0],
          73: [0, .68333, .15806, 0],
          74: [0, .68333, .14028, 0],
          75: [0, .68333, .14528, 0],
          76: I,
          77: [0, .68333, .16389, 0],
          78: [0, .68333, .16389, 0],
          79: [0, .68333, .09403, 0],
          80: [0, .68333, .10257, 0],
          81: [.19444, .68333, .09403, 0],
          82: [0, .68333, .03868, 0],
          83: [0, .68333, .11972, 0],
          84: [0, .68333, .13305, 0],
          85: [0, .68333, .16389, 0],
          86: [0, .68333, .18361, 0],
          87: [0, .68333, .18361, 0],
          88: [0, .68333, .15806, 0],
          89: [0, .68333, .19383, 0],
          90: [0, .68333, .14528, 0],
          91: [.25, .75, .1875, 0],
          93: [.25, .75, .10528, 0],
          94: [0, .69444, .06646, 0],
          95: [.31, .12056, .09208, 0],
          97: [0, .43056, .07671, 0],
          98: [0, .69444, .06312, 0],
          99: [0, .43056, .05653, 0],
          100: [0, .69444, .10333, 0],
          101: [0, .43056, .07514, 0],
          102: [.19444, .69444, .21194, 0],
          103: [.19444, .43056, .08847, 0],
          104: [0, .69444, .07671, 0],
          105: [0, .65536, .1019, 0],
          106: [.19444, .65536, .14467, 0],
          107: [0, .69444, .10764, 0],
          108: [0, .69444, .10333, 0],
          109: [0, .43056, .07671, 0],
          110: [0, .43056, .07671, 0],
          111: [0, .43056, .06312, 0],
          112: [.19444, .43056, .06312, 0],
          113: [.19444, .43056, .08847, 0],
          114: [0, .43056, .10764, 0],
          115: [0, .43056, .08208, 0],
          116: [0, .61508, .09486, 0],
          117: [0, .43056, .07671, 0],
          118: [0, .43056, .10764, 0],
          119: [0, .43056, .10764, 0],
          120: [0, .43056, .12042, 0],
          121: [.19444, .43056, .08847, 0],
          122: [0, .43056, .12292, 0],
          126: [.35, .31786, .11585, 0],
          160: $,
          168: [0, .66786, .10474, 0],
          176: p,
          184: [.17014, 0, 0, 0],
          198: [0, .68333, .12028, 0],
          216: [.04861, .73194, .09403, 0],
          223: [.19444, .69444, .10514, 0],
          230: [0, .43056, .07514, 0],
          248: [.09722, .52778, .09194, 0],
          338: [0, .68333, .12028, 0],
          339: [0, .43056, .07514, 0],
          710: [0, .69444, .06646, 0],
          711: [0, .62847, .08295, 0],
          713: [0, .56167, .10333, 0],
          714: [0, .69444, .09694, 0],
          715: p,
          728: [0, .69444, .10806, 0],
          729: [0, .66786, .11752, 0],
          730: p,
          732: [0, .66786, .11585, 0],
          733: [0, .69444, .1225, 0],
          915: [0, .68333, .13305, 0],
          916: I,
          920: [0, .68333, .09403, 0],
          923: I,
          926: [0, .68333, .15294, 0],
          928: [0, .68333, .16389, 0],
          931: [0, .68333, .12028, 0],
          933: [0, .68333, .11111, 0],
          934: [0, .68333, .05986, 0],
          936: [0, .68333, .11111, 0],
          937: [0, .68333, .10257, 0],
          8211: [0, .43056, .09208, 0],
          8212: [0, .43056, .09208, 0],
          8216: [0, .69444, .12417, 0],
          8217: [0, .69444, .12417, 0],
          8220: [0, .69444, .1685, 0],
          8221: [0, .69444, .06961, 0],
          8463: q
        },
        "Main-Regular": {
          32: $,
          33: p,
          34: p,
          35: N,
          36: [.05556, .75, 0, 0],
          37: [.05556, .75, 0, 0],
          38: p,
          39: p,
          40: K,
          41: K,
          42: Ve,
          43: [.08333, .58333, 0, 0],
          44: [.19444, .10556, 0, 0],
          45: [0, .43056, 0, 0],
          46: [0, .10556, 0, 0],
          47: K,
          48: ce,
          49: ce,
          50: ce,
          51: ce,
          52: ce,
          53: ce,
          54: ce,
          55: ce,
          56: ce,
          57: ce,
          58: [0, .43056, 0, 0],
          59: [.19444, .43056, 0, 0],
          60: [.0391, .5391, 0, 0],
          61: [-.13313, .36687, 0, 0],
          62: [.0391, .5391, 0, 0],
          63: p,
          64: p,
          65: I,
          66: I,
          67: I,
          68: I,
          69: I,
          70: I,
          71: I,
          72: I,
          73: I,
          74: I,
          75: I,
          76: I,
          77: I,
          78: I,
          79: I,
          80: I,
          81: [.19444, .68333, 0, 0],
          82: I,
          83: I,
          84: I,
          85: I,
          86: [0, .68333, .01389, 0],
          87: [0, .68333, .01389, 0],
          88: I,
          89: [0, .68333, .025, 0],
          90: I,
          91: K,
          92: K,
          93: K,
          94: p,
          95: [.31, .12056, .02778, 0],
          97: [0, .43056, 0, 0],
          98: p,
          99: [0, .43056, 0, 0],
          100: p,
          101: [0, .43056, 0, 0],
          102: [0, .69444, .07778, 0],
          103: [.19444, .43056, .01389, 0],
          104: p,
          105: [0, .66786, 0, 0],
          106: [.19444, .66786, 0, 0],
          107: p,
          108: p,
          109: [0, .43056, 0, 0],
          110: [0, .43056, 0, 0],
          111: [0, .43056, 0, 0],
          112: [.19444, .43056, 0, 0],
          113: [.19444, .43056, 0, 0],
          114: [0, .43056, 0, 0],
          115: [0, .43056, 0, 0],
          116: [0, .61508, 0, 0],
          117: [0, .43056, 0, 0],
          118: [0, .43056, .01389, 0],
          119: [0, .43056, .01389, 0],
          120: [0, .43056, 0, 0],
          121: [.19444, .43056, .01389, 0],
          122: [0, .43056, 0, 0],
          123: K,
          124: K,
          125: K,
          126: [.35, .31786, 0, 0],
          160: $,
          163: p,
          167: N,
          168: [0, .66786, 0, 0],
          172: [0, .43056, 0, 0],
          176: p,
          177: [.08333, .58333, 0, 0],
          182: N,
          184: [.17014, 0, 0, 0],
          198: I,
          215: [.08333, .58333, 0, 0],
          216: [.04861, .73194, 0, 0],
          223: p,
          230: [0, .43056, 0, 0],
          247: [.08333, .58333, 0, 0],
          248: [.09722, .52778, 0, 0],
          305: [0, .43056, 0, 0],
          338: I,
          339: [0, .43056, 0, 0],
          567: [.19444, .43056, 0, 0],
          710: p,
          711: [0, .62847, 0, 0],
          713: [0, .56778, 0, 0],
          714: p,
          715: p,
          728: p,
          729: [0, .66786, 0, 0],
          730: p,
          732: [0, .66786, 0, 0],
          733: p,
          915: I,
          916: I,
          920: I,
          923: I,
          926: I,
          928: I,
          931: I,
          933: I,
          934: I,
          936: I,
          937: I,
          8211: [0, .43056, .02778, 0],
          8212: [0, .43056, .02778, 0],
          8216: p,
          8217: p,
          8220: p,
          8221: p,
          8224: N,
          8225: N,
          8230: [0, .12, 0, 0],
          8242: Ce,
          8407: [0, .71444, .15382, 0],
          8463: q,
          8465: p,
          8467: [0, .69444, 0, .11111],
          8472: [.19444, .43056, 0, .11111],
          8476: p,
          8501: p,
          8592: [-.13313, .36687, 0, 0],
          8593: N,
          8594: [-.13313, .36687, 0, 0],
          8595: N,
          8596: [-.13313, .36687, 0, 0],
          8597: K,
          8598: N,
          8599: N,
          8600: N,
          8601: N,
          8614: [.011, .511, 0, 0],
          8617: [.011, .511, 0, 0],
          8618: [.011, .511, 0, 0],
          8636: [-.13313, .36687, 0, 0],
          8637: [-.13313, .36687, 0, 0],
          8640: [-.13313, .36687, 0, 0],
          8641: [-.13313, .36687, 0, 0],
          8652: [.011, .671, 0, 0],
          8656: [-.13313, .36687, 0, 0],
          8657: N,
          8658: [-.13313, .36687, 0, 0],
          8659: N,
          8660: [-.13313, .36687, 0, 0],
          8661: K,
          8704: p,
          8706: [0, .69444, .05556, .08334],
          8707: p,
          8709: [.05556, .75, 0, 0],
          8711: I,
          8712: [.0391, .5391, 0, 0],
          8715: [.0391, .5391, 0, 0],
          8722: [.08333, .58333, 0, 0],
          8723: [.08333, .58333, 0, 0],
          8725: K,
          8726: K,
          8727: [-.03472, .46528, 0, 0],
          8728: [-.05555, .44445, 0, 0],
          8729: [-.05555, .44445, 0, 0],
          8730: [.2, .8, 0, 0],
          8733: [0, .43056, 0, 0],
          8734: [0, .43056, 0, 0],
          8736: ge,
          8739: K,
          8741: K,
          8743: Ce,
          8744: Ce,
          8745: Ce,
          8746: Ce,
          8747: [.19444, .69444, .11111, 0],
          8764: [-.13313, .36687, 0, 0],
          8768: N,
          8771: [-.03625, .46375, 0, 0],
          8773: [-.022, .589, 0, 0],
          8776: [-.01688, .48312, 0, 0],
          8781: [-.03625, .46375, 0, 0],
          8784: [-.133, .67, 0, 0],
          8801: [-.03625, .46375, 0, 0],
          8804: [.13597, .63597, 0, 0],
          8805: [.13597, .63597, 0, 0],
          8810: [.0391, .5391, 0, 0],
          8811: [.0391, .5391, 0, 0],
          8826: [.0391, .5391, 0, 0],
          8827: [.0391, .5391, 0, 0],
          8834: [.0391, .5391, 0, 0],
          8835: [.0391, .5391, 0, 0],
          8838: [.13597, .63597, 0, 0],
          8839: [.13597, .63597, 0, 0],
          8846: Ce,
          8849: [.13597, .63597, 0, 0],
          8850: [.13597, .63597, 0, 0],
          8851: Ce,
          8852: Ce,
          8853: [.08333, .58333, 0, 0],
          8854: [.08333, .58333, 0, 0],
          8855: [.08333, .58333, 0, 0],
          8856: [.08333, .58333, 0, 0],
          8857: [.08333, .58333, 0, 0],
          8866: p,
          8867: p,
          8868: p,
          8869: p,
          8872: [.249, .75, 0, 0],
          8900: [-.05555, .44445, 0, 0],
          8901: [-.05555, .44445, 0, 0],
          8902: [-.03472, .46528, 0, 0],
          8904: [.005, .505, 0, 0],
          8942: [.03, .9, 0, 0],
          8943: [-.19, .31, 0, 0],
          8945: [-.1, .82, 0, 0],
          8968: K,
          8969: K,
          8970: K,
          8971: K,
          8994: [-.14236, .35764, 0, 0],
          8995: [-.14236, .35764, 0, 0],
          9136: [.244, .744, 0, 0],
          9137: [.244, .744, 0, 0],
          9651: N,
          9657: [-.03472, .46528, 0, 0],
          9661: N,
          9667: [-.03472, .46528, 0, 0],
          9711: N,
          9824: [.12963, .69444, 0, 0],
          9825: [.12963, .69444, 0, 0],
          9826: [.12963, .69444, 0, 0],
          9827: [.12963, .69444, 0, 0],
          9837: Ve,
          9838: N,
          9839: N,
          10216: K,
          10217: K,
          10222: [.244, .744, 0, 0],
          10223: [.244, .744, 0, 0],
          10229: [.011, .511, 0, 0],
          10230: [.011, .511, 0, 0],
          10231: [.011, .511, 0, 0],
          10232: [.024, .525, 0, 0],
          10233: [.024, .525, 0, 0],
          10234: [.024, .525, 0, 0],
          10236: [.011, .511, 0, 0],
          10815: I,
          10927: [.13597, .63597, 0, 0],
          10928: [.13597, .63597, 0, 0],
          57376: N
        },
        "Math-BoldItalic": {
          32: $,
          48: O,
          49: O,
          50: O,
          51: ye,
          52: ye,
          53: ye,
          54: ce,
          55: ye,
          56: ce,
          57: ye,
          65: z,
          66: [0, .68611, .04835, 0],
          67: [0, .68611, .06979, 0],
          68: [0, .68611, .03194, 0],
          69: [0, .68611, .05451, 0],
          70: [0, .68611, .15972, 0],
          71: z,
          72: [0, .68611, .08229, 0],
          73: [0, .68611, .07778, 0],
          74: [0, .68611, .10069, 0],
          75: [0, .68611, .06979, 0],
          76: z,
          77: [0, .68611, .11424, 0],
          78: [0, .68611, .11424, 0],
          79: [0, .68611, .03194, 0],
          80: [0, .68611, .15972, 0],
          81: [.19444, .68611, 0, 0],
          82: [0, .68611, .00421, 0],
          83: [0, .68611, .05382, 0],
          84: [0, .68611, .15972, 0],
          85: [0, .68611, .11424, 0],
          86: [0, .68611, .25555, 0],
          87: [0, .68611, .15972, 0],
          88: [0, .68611, .07778, 0],
          89: [0, .68611, .25555, 0],
          90: [0, .68611, .06979, 0],
          97: O,
          98: p,
          99: O,
          100: p,
          101: O,
          102: [.19444, .69444, .11042, 0],
          103: [.19444, .44444, .03704, 0],
          104: p,
          105: [0, .69326, 0, 0],
          106: [.19444, .69326, .0622, 0],
          107: [0, .69444, .01852, 0],
          108: [0, .69444, .0088, 0],
          109: O,
          110: O,
          111: O,
          112: ye,
          113: [.19444, .44444, .03704, 0],
          114: [0, .44444, .03194, 0],
          115: O,
          116: [0, .63492, 0, 0],
          117: O,
          118: [0, .44444, .03704, 0],
          119: [0, .44444, .02778, 0],
          120: O,
          121: [.19444, .44444, .03704, 0],
          122: [0, .44444, .04213, 0],
          160: $,
          915: [0, .68611, .15972, 0],
          916: z,
          920: [0, .68611, .03194, 0],
          923: z,
          926: [0, .68611, .07458, 0],
          928: [0, .68611, .08229, 0],
          931: [0, .68611, .05451, 0],
          933: [0, .68611, .15972, 0],
          934: z,
          936: [0, .68611, .11653, 0],
          937: [0, .68611, .04835, 0],
          945: O,
          946: [.19444, .69444, .03403, 0],
          947: [.19444, .44444, .06389, 0],
          948: [0, .69444, .03819, 0],
          949: O,
          950: [.19444, .69444, .06215, 0],
          951: [.19444, .44444, .03704, 0],
          952: [0, .69444, .03194, 0],
          953: O,
          954: O,
          955: p,
          956: ye,
          957: [0, .44444, .06898, 0],
          958: [.19444, .69444, .03021, 0],
          959: O,
          960: [0, .44444, .03704, 0],
          961: ye,
          962: [.09722, .44444, .07917, 0],
          963: [0, .44444, .03704, 0],
          964: [0, .44444, .13472, 0],
          965: [0, .44444, .03704, 0],
          966: ye,
          967: ye,
          968: [.19444, .69444, .03704, 0],
          969: [0, .44444, .03704, 0],
          977: p,
          981: N,
          982: [0, .44444, .03194, 0],
          1009: ye,
          1013: O,
          57649: O,
          57911: ye
        },
        "Math-Italic": {
          32: $,
          48: [0, .43056, 0, 0],
          49: [0, .43056, 0, 0],
          50: [0, .43056, 0, 0],
          51: [.19444, .43056, 0, 0],
          52: [.19444, .43056, 0, 0],
          53: [.19444, .43056, 0, 0],
          54: ce,
          55: [.19444, .43056, 0, 0],
          56: ce,
          57: [.19444, .43056, 0, 0],
          65: [0, .68333, 0, .13889],
          66: [0, .68333, .05017, .08334],
          67: [0, .68333, .07153, .08334],
          68: [0, .68333, .02778, .05556],
          69: [0, .68333, .05764, .08334],
          70: [0, .68333, .13889, .08334],
          71: [0, .68333, 0, .08334],
          72: [0, .68333, .08125, .05556],
          73: [0, .68333, .07847, .11111],
          74: [0, .68333, .09618, .16667],
          75: [0, .68333, .07153, .05556],
          76: [0, .68333, 0, .02778],
          77: [0, .68333, .10903, .08334],
          78: [0, .68333, .10903, .08334],
          79: [0, .68333, .02778, .08334],
          80: [0, .68333, .13889, .08334],
          81: [.19444, .68333, 0, .08334],
          82: [0, .68333, .00773, .08334],
          83: [0, .68333, .05764, .08334],
          84: [0, .68333, .13889, .08334],
          85: [0, .68333, .10903, .02778],
          86: [0, .68333, .22222, 0],
          87: [0, .68333, .13889, 0],
          88: [0, .68333, .07847, .08334],
          89: [0, .68333, .22222, 0],
          90: [0, .68333, .07153, .08334],
          97: [0, .43056, 0, 0],
          98: p,
          99: [0, .43056, 0, .05556],
          100: [0, .69444, 0, .16667],
          101: [0, .43056, 0, .05556],
          102: [.19444, .69444, .10764, .16667],
          103: [.19444, .43056, .03588, .02778],
          104: p,
          105: [0, .65952, 0, 0],
          106: [.19444, .65952, .05724, 0],
          107: [0, .69444, .03148, 0],
          108: [0, .69444, .01968, .08334],
          109: [0, .43056, 0, 0],
          110: [0, .43056, 0, 0],
          111: [0, .43056, 0, .05556],
          112: [.19444, .43056, 0, .08334],
          113: [.19444, .43056, .03588, .08334],
          114: [0, .43056, .02778, .05556],
          115: [0, .43056, 0, .05556],
          116: [0, .61508, 0, .08334],
          117: [0, .43056, 0, .02778],
          118: [0, .43056, .03588, .02778],
          119: [0, .43056, .02691, .08334],
          120: [0, .43056, 0, .02778],
          121: [.19444, .43056, .03588, .05556],
          122: [0, .43056, .04398, .05556],
          160: $,
          915: [0, .68333, .13889, .08334],
          916: [0, .68333, 0, .16667],
          920: [0, .68333, .02778, .08334],
          923: [0, .68333, 0, .16667],
          926: [0, .68333, .07569, .08334],
          928: [0, .68333, .08125, .05556],
          931: [0, .68333, .05764, .08334],
          933: [0, .68333, .13889, .05556],
          934: [0, .68333, 0, .08334],
          936: [0, .68333, .11, .05556],
          937: [0, .68333, .05017, .08334],
          945: [0, .43056, .0037, .02778],
          946: [.19444, .69444, .05278, .08334],
          947: [.19444, .43056, .05556, 0],
          948: [0, .69444, .03785, .05556],
          949: [0, .43056, 0, .08334],
          950: [.19444, .69444, .07378, .08334],
          951: [.19444, .43056, .03588, .05556],
          952: [0, .69444, .02778, .08334],
          953: [0, .43056, 0, .05556],
          954: [0, .43056, 0, 0],
          955: p,
          956: [.19444, .43056, 0, .02778],
          957: [0, .43056, .06366, .02778],
          958: [.19444, .69444, .04601, .11111],
          959: [0, .43056, 0, .05556],
          960: [0, .43056, .03588, 0],
          961: [.19444, .43056, 0, .08334],
          962: [.09722, .43056, .07986, .08334],
          963: [0, .43056, .03588, 0],
          964: [0, .43056, .1132, .02778],
          965: [0, .43056, .03588, .02778],
          966: [.19444, .43056, 0, .08334],
          967: [.19444, .43056, 0, .05556],
          968: [.19444, .69444, .03588, .11111],
          969: [0, .43056, .03588, 0],
          977: [0, .69444, 0, .08334],
          981: [.19444, .69444, 0, .08334],
          982: [0, .43056, .02778, 0],
          1009: [.19444, .43056, 0, .08334],
          1013: [0, .43056, 0, .05556],
          57649: [0, .43056, 0, .02778],
          57911: [.19444, .43056, 0, .08334]
        },
        "SansSerif-Bold": {
          32: $,
          33: p,
          34: p,
          35: N,
          36: [.05556, .75, 0, 0],
          37: [.05556, .75, 0, 0],
          38: p,
          39: p,
          40: K,
          41: K,
          42: Ve,
          43: [.11667, .61667, 0, 0],
          44: [.10556, .13056, 0, 0],
          45: [0, .45833, 0, 0],
          46: [0, .13056, 0, 0],
          47: K,
          48: p,
          49: p,
          50: p,
          51: p,
          52: p,
          53: p,
          54: p,
          55: p,
          56: p,
          57: p,
          58: [0, .45833, 0, 0],
          59: [.10556, .45833, 0, 0],
          61: [-.09375, .40625, 0, 0],
          63: p,
          64: p,
          65: p,
          66: p,
          67: p,
          68: p,
          69: p,
          70: p,
          71: p,
          72: p,
          73: p,
          74: p,
          75: p,
          76: p,
          77: p,
          78: p,
          79: p,
          80: p,
          81: [.10556, .69444, 0, 0],
          82: p,
          83: p,
          84: p,
          85: p,
          86: [0, .69444, .01528, 0],
          87: [0, .69444, .01528, 0],
          88: p,
          89: [0, .69444, .0275, 0],
          90: p,
          91: K,
          93: K,
          94: p,
          95: [.35, .10833, .03056, 0],
          97: [0, .45833, 0, 0],
          98: p,
          99: [0, .45833, 0, 0],
          100: p,
          101: [0, .45833, 0, 0],
          102: [0, .69444, .07639, 0],
          103: [.19444, .45833, .01528, 0],
          104: p,
          105: p,
          106: N,
          107: p,
          108: p,
          109: [0, .45833, 0, 0],
          110: [0, .45833, 0, 0],
          111: [0, .45833, 0, 0],
          112: [.19444, .45833, 0, 0],
          113: [.19444, .45833, 0, 0],
          114: [0, .45833, .01528, 0],
          115: [0, .45833, 0, 0],
          116: [0, .58929, 0, 0],
          117: [0, .45833, 0, 0],
          118: [0, .45833, .01528, 0],
          119: [0, .45833, .01528, 0],
          120: [0, .45833, 0, 0],
          121: [.19444, .45833, .01528, 0],
          122: [0, .45833, 0, 0],
          126: [.35, .34444, 0, 0],
          160: $,
          168: p,
          176: p,
          180: p,
          184: [.17014, 0, 0, 0],
          305: [0, .45833, 0, 0],
          567: [.19444, .45833, 0, 0],
          710: p,
          711: [0, .63542, 0, 0],
          713: [0, .63778, 0, 0],
          728: p,
          729: p,
          730: p,
          732: p,
          733: p,
          915: p,
          916: p,
          920: p,
          923: p,
          926: p,
          928: p,
          931: p,
          933: p,
          934: p,
          936: p,
          937: p,
          8211: [0, .45833, .03056, 0],
          8212: [0, .45833, .03056, 0],
          8216: p,
          8217: p,
          8220: p,
          8221: p
        },
        "SansSerif-Italic": {
          32: $,
          33: [0, .69444, .05733, 0],
          34: [0, .69444, .00316, 0],
          35: [.19444, .69444, .05087, 0],
          36: [.05556, .75, .11156, 0],
          37: [.05556, .75, .03126, 0],
          38: [0, .69444, .03058, 0],
          39: [0, .69444, .07816, 0],
          40: [.25, .75, .13164, 0],
          41: [.25, .75, .02536, 0],
          42: [0, .75, .11775, 0],
          43: [.08333, .58333, .02536, 0],
          44: [.125, .08333, 0, 0],
          45: [0, .44444, .01946, 0],
          46: [0, .08333, 0, 0],
          47: [.25, .75, .13164, 0],
          48: [0, .65556, .11156, 0],
          49: [0, .65556, .11156, 0],
          50: [0, .65556, .11156, 0],
          51: [0, .65556, .11156, 0],
          52: [0, .65556, .11156, 0],
          53: [0, .65556, .11156, 0],
          54: [0, .65556, .11156, 0],
          55: [0, .65556, .11156, 0],
          56: [0, .65556, .11156, 0],
          57: [0, .65556, .11156, 0],
          58: [0, .44444, .02502, 0],
          59: [.125, .44444, .02502, 0],
          61: [-.13, .37, .05087, 0],
          63: [0, .69444, .11809, 0],
          64: [0, .69444, .07555, 0],
          65: p,
          66: [0, .69444, .08293, 0],
          67: [0, .69444, .11983, 0],
          68: [0, .69444, .07555, 0],
          69: [0, .69444, .11983, 0],
          70: [0, .69444, .13372, 0],
          71: [0, .69444, .11983, 0],
          72: [0, .69444, .08094, 0],
          73: [0, .69444, .13372, 0],
          74: [0, .69444, .08094, 0],
          75: [0, .69444, .11983, 0],
          76: p,
          77: [0, .69444, .08094, 0],
          78: [0, .69444, .08094, 0],
          79: [0, .69444, .07555, 0],
          80: [0, .69444, .08293, 0],
          81: [.125, .69444, .07555, 0],
          82: [0, .69444, .08293, 0],
          83: [0, .69444, .09205, 0],
          84: [0, .69444, .13372, 0],
          85: [0, .69444, .08094, 0],
          86: [0, .69444, .1615, 0],
          87: [0, .69444, .1615, 0],
          88: [0, .69444, .13372, 0],
          89: [0, .69444, .17261, 0],
          90: [0, .69444, .11983, 0],
          91: [.25, .75, .15942, 0],
          93: [.25, .75, .08719, 0],
          94: [0, .69444, .0799, 0],
          95: [.35, .09444, .08616, 0],
          97: [0, .44444, .00981, 0],
          98: [0, .69444, .03057, 0],
          99: [0, .44444, .08336, 0],
          100: [0, .69444, .09483, 0],
          101: [0, .44444, .06778, 0],
          102: [0, .69444, .21705, 0],
          103: [.19444, .44444, .10836, 0],
          104: [0, .69444, .01778, 0],
          105: [0, .67937, .09718, 0],
          106: [.19444, .67937, .09162, 0],
          107: [0, .69444, .08336, 0],
          108: [0, .69444, .09483, 0],
          109: [0, .44444, .01778, 0],
          110: [0, .44444, .01778, 0],
          111: [0, .44444, .06613, 0],
          112: [.19444, .44444, .0389, 0],
          113: [.19444, .44444, .04169, 0],
          114: [0, .44444, .10836, 0],
          115: [0, .44444, .0778, 0],
          116: [0, .57143, .07225, 0],
          117: [0, .44444, .04169, 0],
          118: [0, .44444, .10836, 0],
          119: [0, .44444, .10836, 0],
          120: [0, .44444, .09169, 0],
          121: [.19444, .44444, .10836, 0],
          122: [0, .44444, .08752, 0],
          126: [.35, .32659, .08826, 0],
          160: $,
          168: [0, .67937, .06385, 0],
          176: p,
          184: [.17014, 0, 0, 0],
          305: [0, .44444, .04169, 0],
          567: [.19444, .44444, .04169, 0],
          710: [0, .69444, .0799, 0],
          711: [0, .63194, .08432, 0],
          713: [0, .60889, .08776, 0],
          714: [0, .69444, .09205, 0],
          715: p,
          728: [0, .69444, .09483, 0],
          729: [0, .67937, .07774, 0],
          730: p,
          732: [0, .67659, .08826, 0],
          733: [0, .69444, .09205, 0],
          915: [0, .69444, .13372, 0],
          916: p,
          920: [0, .69444, .07555, 0],
          923: p,
          926: [0, .69444, .12816, 0],
          928: [0, .69444, .08094, 0],
          931: [0, .69444, .11983, 0],
          933: [0, .69444, .09031, 0],
          934: [0, .69444, .04603, 0],
          936: [0, .69444, .09031, 0],
          937: [0, .69444, .08293, 0],
          8211: [0, .44444, .08616, 0],
          8212: [0, .44444, .08616, 0],
          8216: [0, .69444, .07816, 0],
          8217: [0, .69444, .07816, 0],
          8220: [0, .69444, .14205, 0],
          8221: [0, .69444, .00316, 0]
        },
        "SansSerif-Regular": {
          32: $,
          33: p,
          34: p,
          35: N,
          36: [.05556, .75, 0, 0],
          37: [.05556, .75, 0, 0],
          38: p,
          39: p,
          40: K,
          41: K,
          42: Ve,
          43: [.08333, .58333, 0, 0],
          44: [.125, .08333, 0, 0],
          45: O,
          46: [0, .08333, 0, 0],
          47: K,
          48: [0, .65556, 0, 0],
          49: [0, .65556, 0, 0],
          50: [0, .65556, 0, 0],
          51: [0, .65556, 0, 0],
          52: [0, .65556, 0, 0],
          53: [0, .65556, 0, 0],
          54: [0, .65556, 0, 0],
          55: [0, .65556, 0, 0],
          56: [0, .65556, 0, 0],
          57: [0, .65556, 0, 0],
          58: O,
          59: [.125, .44444, 0, 0],
          61: [-.13, .37, 0, 0],
          63: p,
          64: p,
          65: p,
          66: p,
          67: p,
          68: p,
          69: p,
          70: p,
          71: p,
          72: p,
          73: p,
          74: p,
          75: p,
          76: p,
          77: p,
          78: p,
          79: p,
          80: p,
          81: [.125, .69444, 0, 0],
          82: p,
          83: p,
          84: p,
          85: p,
          86: [0, .69444, .01389, 0],
          87: [0, .69444, .01389, 0],
          88: p,
          89: [0, .69444, .025, 0],
          90: p,
          91: K,
          93: K,
          94: p,
          95: [.35, .09444, .02778, 0],
          97: O,
          98: p,
          99: O,
          100: p,
          101: O,
          102: [0, .69444, .06944, 0],
          103: [.19444, .44444, .01389, 0],
          104: p,
          105: [0, .67937, 0, 0],
          106: [.19444, .67937, 0, 0],
          107: p,
          108: p,
          109: O,
          110: O,
          111: O,
          112: ye,
          113: ye,
          114: [0, .44444, .01389, 0],
          115: O,
          116: [0, .57143, 0, 0],
          117: O,
          118: [0, .44444, .01389, 0],
          119: [0, .44444, .01389, 0],
          120: O,
          121: [.19444, .44444, .01389, 0],
          122: O,
          126: [.35, .32659, 0, 0],
          160: $,
          168: [0, .67937, 0, 0],
          176: p,
          184: [.17014, 0, 0, 0],
          305: O,
          567: ye,
          710: p,
          711: [0, .63194, 0, 0],
          713: [0, .60889, 0, 0],
          714: p,
          715: p,
          728: p,
          729: [0, .67937, 0, 0],
          730: p,
          732: [0, .67659, 0, 0],
          733: p,
          915: p,
          916: p,
          920: p,
          923: p,
          926: p,
          928: p,
          931: p,
          933: p,
          934: p,
          936: p,
          937: p,
          8211: [0, .44444, .02778, 0],
          8212: [0, .44444, .02778, 0],
          8216: p,
          8217: p,
          8220: p,
          8221: p
        },
        "Script-Regular": {
          32: $,
          65: [0, .7, .22925, 0],
          66: [0, .7, .04087, 0],
          67: [0, .7, .1689, 0],
          68: [0, .7, .09371, 0],
          69: [0, .7, .18583, 0],
          70: [0, .7, .13634, 0],
          71: [0, .7, .17322, 0],
          72: [0, .7, .29694, 0],
          73: [0, .7, .19189, 0],
          74: [.27778, .7, .19189, 0],
          75: [0, .7, .31259, 0],
          76: [0, .7, .19189, 0],
          77: [0, .7, .15981, 0],
          78: [0, .7, .3525, 0],
          79: [0, .7, .08078, 0],
          80: [0, .7, .08078, 0],
          81: [0, .7, .03305, 0],
          82: [0, .7, .06259, 0],
          83: [0, .7, .19189, 0],
          84: [0, .7, .29087, 0],
          85: [0, .7, .25815, 0],
          86: [0, .7, .27523, 0],
          87: [0, .7, .27523, 0],
          88: [0, .7, .26006, 0],
          89: [0, .7, .2939, 0],
          90: [0, .7, .24037, 0],
          160: $
        },
        "Size1-Regular": {
          32: $,
          40: Be,
          41: Be,
          47: Be,
          91: Be,
          92: Be,
          93: Be,
          123: Be,
          125: Be,
          160: $,
          710: [0, .72222, 0, 0],
          732: [0, .72222, 0, 0],
          770: [0, .72222, 0, 0],
          771: [0, .72222, 0, 0],
          8214: [-99e-5, .601, 0, 0],
          8593: [1e-5, .6, 0, 0],
          8595: [1e-5, .6, 0, 0],
          8657: [1e-5, .6, 0, 0],
          8659: [1e-5, .6, 0, 0],
          8719: it,
          8720: it,
          8721: it,
          8730: Be,
          8739: [-.00599, .606, 0, 0],
          8741: [-.00599, .606, 0, 0],
          8747: [.30612, .805, .19445, 0],
          8748: [.306, .805, .19445, 0],
          8749: [.306, .805, .19445, 0],
          8750: [.30612, .805, .19445, 0],
          8896: it,
          8897: it,
          8898: it,
          8899: it,
          8968: Be,
          8969: Be,
          8970: Be,
          8971: Be,
          9168: [-99e-5, .601, 0, 0],
          10216: Be,
          10217: Be,
          10752: it,
          10753: it,
          10754: it,
          10756: it,
          10758: it
        },
        "Size2-Regular": {
          32: $,
          40: Me,
          41: Me,
          47: Me,
          91: Me,
          92: Me,
          93: Me,
          123: Me,
          125: Me,
          160: $,
          710: Ve,
          732: Ve,
          770: Ve,
          771: Ve,
          8719: ot,
          8720: ot,
          8721: ot,
          8730: Me,
          8747: [.86225, 1.36, .44445, 0],
          8748: [.862, 1.36, .44445, 0],
          8749: [.862, 1.36, .44445, 0],
          8750: [.86225, 1.36, .44445, 0],
          8896: ot,
          8897: ot,
          8898: ot,
          8899: ot,
          8968: Me,
          8969: Me,
          8970: Me,
          8971: Me,
          10216: Me,
          10217: Me,
          10752: ot,
          10753: ot,
          10754: ot,
          10756: ot,
          10758: ot
        },
        "Size3-Regular": {
          32: $,
          40: Oe,
          41: Oe,
          47: Oe,
          91: Oe,
          92: Oe,
          93: Oe,
          123: Oe,
          125: Oe,
          160: $,
          710: Ve,
          732: Ve,
          770: Ve,
          771: Ve,
          8730: Oe,
          8968: Oe,
          8969: Oe,
          8970: Oe,
          8971: Oe,
          10216: Oe,
          10217: Oe
        },
        "Size4-Regular": {
          32: $,
          40: Ke,
          41: Ke,
          47: Ke,
          91: Ke,
          92: Ke,
          93: Ke,
          123: Ke,
          125: Ke,
          160: $,
          710: [0, .825, 0, 0],
          732: [0, .825, 0, 0],
          770: [0, .825, 0, 0],
          771: [0, .825, 0, 0],
          8730: Ke,
          8968: Ke,
          8969: Ke,
          8970: Ke,
          8971: Ke,
          9115: [.64502, 1.155, 0, 0],
          9116: [1e-5, .6, 0, 0],
          9117: [.64502, 1.155, 0, 0],
          9118: [.64502, 1.155, 0, 0],
          9119: [1e-5, .6, 0, 0],
          9120: [.64502, 1.155, 0, 0],
          9121: [.64502, 1.155, 0, 0],
          9122: [-99e-5, .601, 0, 0],
          9123: [.64502, 1.155, 0, 0],
          9124: [.64502, 1.155, 0, 0],
          9125: [-99e-5, .601, 0, 0],
          9126: [.64502, 1.155, 0, 0],
          9127: [1e-5, .9, 0, 0],
          9128: Me,
          9129: [.90001, 0, 0, 0],
          9130: [0, .3, 0, 0],
          9131: [1e-5, .9, 0, 0],
          9132: Me,
          9133: [.90001, 0, 0, 0],
          9143: [.88502, .915, 0, 0],
          10216: Ke,
          10217: Ke,
          57344: [-.00499, .605, 0, 0],
          57345: [-.00499, .605, 0, 0],
          57680: [0, .12, 0, 0],
          57681: [0, .12, 0, 0],
          57682: [0, .12, 0, 0],
          57683: [0, .12, 0, 0]
        },
        "Typewriter-Regular": {
          32: $,
          33: C,
          34: C,
          35: C,
          36: [.08333, .69444, 0, 0],
          37: [.08333, .69444, 0, 0],
          38: C,
          39: C,
          40: [.08333, .69444, 0, 0],
          41: [.08333, .69444, 0, 0],
          42: [0, .52083, 0, 0],
          43: [-.08056, .53055, 0, 0],
          44: [.13889, .125, 0, 0],
          45: [-.08056, .53055, 0, 0],
          46: [0, .125, 0, 0],
          47: [.08333, .69444, 0, 0],
          48: C,
          49: C,
          50: C,
          51: C,
          52: C,
          53: C,
          54: C,
          55: C,
          56: C,
          57: C,
          58: [0, .43056, 0, 0],
          59: [.13889, .43056, 0, 0],
          60: [-.05556, .55556, 0, 0],
          61: [-.19549, .41562, 0, 0],
          62: [-.05556, .55556, 0, 0],
          63: C,
          64: C,
          65: C,
          66: C,
          67: C,
          68: C,
          69: C,
          70: C,
          71: C,
          72: C,
          73: C,
          74: C,
          75: C,
          76: C,
          77: C,
          78: C,
          79: C,
          80: C,
          81: [.13889, .61111, 0, 0],
          82: C,
          83: C,
          84: C,
          85: C,
          86: C,
          87: C,
          88: C,
          89: C,
          90: C,
          91: [.08333, .69444, 0, 0],
          92: [.08333, .69444, 0, 0],
          93: [.08333, .69444, 0, 0],
          94: C,
          95: [.09514, 0, 0, 0],
          96: C,
          97: [0, .43056, 0, 0],
          98: C,
          99: [0, .43056, 0, 0],
          100: C,
          101: [0, .43056, 0, 0],
          102: C,
          103: [.22222, .43056, 0, 0],
          104: C,
          105: C,
          106: [.22222, .61111, 0, 0],
          107: C,
          108: C,
          109: [0, .43056, 0, 0],
          110: [0, .43056, 0, 0],
          111: [0, .43056, 0, 0],
          112: [.22222, .43056, 0, 0],
          113: [.22222, .43056, 0, 0],
          114: [0, .43056, 0, 0],
          115: [0, .43056, 0, 0],
          116: [0, .55358, 0, 0],
          117: [0, .43056, 0, 0],
          118: [0, .43056, 0, 0],
          119: [0, .43056, 0, 0],
          120: [0, .43056, 0, 0],
          121: [.22222, .43056, 0, 0],
          122: [0, .43056, 0, 0],
          123: [.08333, .69444, 0, 0],
          124: [.08333, .69444, 0, 0],
          125: [.08333, .69444, 0, 0],
          126: C,
          127: C,
          160: $,
          176: C,
          184: [.19445, 0, 0, 0],
          305: [0, .43056, 0, 0],
          567: [.22222, .43056, 0, 0],
          711: [0, .56597, 0, 0],
          713: [0, .56555, 0, 0],
          714: C,
          715: C,
          728: C,
          730: C,
          770: C,
          771: C,
          776: C,
          915: C,
          916: C,
          920: C,
          923: C,
          926: C,
          928: C,
          931: C,
          933: C,
          934: C,
          936: C,
          937: C,
          8216: C,
          8217: C,
          8242: C,
          9251: [.11111, .21944, 0, 0]
        }
      };
    var Ml = /[\u3040-\u309F]|[\u30A0-\u30FF]|[\u4E00-\u9FAF]|[\uAC00-\uD7AF]/,
      Xt = 10,
      ze = .25,
      gn = 1.2,
      kt = .431,
      Go = {
        slant: [.25, .25, .25],
        space: [0, 0, 0],
        stretch: [0, 0, 0],
        shrink: [0, 0, 0],
        xHeight: [kt, kt, kt],
        quad: [1, 1.171, 1.472],
        extraSpace: [0, 0, 0],
        num1: [.677, .732, .925],
        num2: [.394, .384, .387],
        num3: [.444, .471, .504],
        denom1: [.686, .752, 1.025],
        denom2: [.345, .344, .532],
        sup1: [.413, .503, .504],
        sup2: [.363, .431, .404],
        sup3: [.289, .286, .294],
        sub1: [.15, .143, .2],
        sub2: [.247, .286, .4],
        supDrop: [.386, .353, .494],
        subDrop: [.05, .071, .1],
        delim1: [2.39, 1.7, 1.98],
        delim2: [1.01, 1.157, 1.42],
        axisHeight: [ze, ze, ze],
        defaultRuleThickness: [.04, .049, .049],
        bigOpSpacing1: [.111, .111, .111],
        bigOpSpacing2: [.166, .166, .166],
        bigOpSpacing3: [.2, .2, .2],
        bigOpSpacing4: [.6, .611, .611],
        bigOpSpacing5: [.1, .143, .143],
        sqrtRuleThickness: [.04, .04, .04]
      },
      di = [0, .5, .7, .8, .9, 1, 1.2, 1.44, 1.728, 2.074, 2.488],
      nt = 5,
      fn = {
        "\xA0": " ",
        "\u200B": " ",
        \u00C5: "A",
        \u00C7: "C",
        \u00D0: "D",
        \u00DE: "o",
        \u00E5: "a",
        \u00E7: "c",
        \u00F0: "d",
        \u00FE: "o",
        \u0410: "A",
        \u0411: "B",
        \u0412: "B",
        \u0413: "F",
        \u0414: "A",
        \u0415: "E",
        \u0416: "K",
        \u0417: "3",
        \u0418: "N",
        \u0419: "N",
        \u041A: "K",
        \u041B: "N",
        \u041C: "M",
        \u041D: "H",
        \u041E: "O",
        \u041F: "N",
        \u0420: "P",
        \u0421: "C",
        \u0422: "T",
        \u0423: "y",
        \u0424: "O",
        \u0425: "X",
        \u0426: "U",
        \u0427: "h",
        \u0428: "W",
        \u0429: "W",
        \u042A: "B",
        \u042B: "X",
        \u042C: "B",
        \u042D: "3",
        \u042E: "X",
        \u042F: "R",
        \u0430: "a",
        \u0431: "b",
        \u0432: "a",
        \u0433: "r",
        \u0434: "y",
        \u0435: "e",
        \u0436: "m",
        \u0437: "e",
        \u0438: "n",
        \u0439: "n",
        \u043A: "n",
        \u043B: "n",
        \u043C: "m",
        \u043D: "n",
        \u043E: "o",
        \u043F: "n",
        \u0440: "p",
        \u0441: "c",
        \u0442: "o",
        \u0443: "y",
        \u0444: "b",
        \u0445: "x",
        \u0446: "n",
        \u0447: "n",
        \u0448: "w",
        \u0449: "w",
        \u044A: "a",
        \u044B: "m",
        \u044C: "a",
        \u044D: "e",
        \u044E: "m",
        \u044F: "r"
      };

    function Ot(t, e) {
      t === void 0 && (t = 77);
      let r = hn[e][t];
      if (r) return {
        defaultMetrics: !1,
        depth: r[0],
        height: r[1],
        italic: r[2],
        skew: r[3]
      };
      if (t === 11034) return {
        defaultMetrics: !0,
        depth: .2,
        height: .8,
        italic: 0,
        skew: 0
      };
      let i = String.fromCodePoint(t);
      if (i in fn) t = fn[i].codePointAt(0);
      else if (Ml.test(i)) return t = 77, {
        defaultMetrics: !0,
        depth: .2,
        height: .9,
        italic: 0,
        skew: 0
      };
      return {
        defaultMetrics: !0,
        depth: .2,
        height: .7,
        italic: 0,
        skew: 0
      }
    }
    var Jo = {
        overrightarrow: [
          ["rightarrow"], .888, 522, "xMaxYMin"
        ],
        overleftarrow: [
          ["leftarrow"], .888, 522, "xMinYMin"
        ],
        underrightarrow: [
          ["rightarrow"], .888, 522, "xMaxYMin"
        ],
        underleftarrow: [
          ["leftarrow"], .888, 522, "xMinYMin"
        ],
        xrightarrow: [
          ["rightarrow"], 1.469, 522, "xMaxYMin"
        ],
        xleftarrow: [
          ["leftarrow"], 1.469, 522, "xMinYMin"
        ],
        Overrightarrow: [
          ["doublerightarrow"], .888, 560, "xMaxYMin"
        ],
        xRightarrow: [
          ["doublerightarrow"], 1.526, 560, "xMaxYMin"
        ],
        xLeftarrow: [
          ["doubleleftarrow"], 1.526, 560, "xMinYMin"
        ],
        overleftharpoon: [
          ["leftharpoon"], .888, 522, "xMinYMin"
        ],
        xleftharpoonup: [
          ["leftharpoon"], .888, 522, "xMinYMin"
        ],
        xleftharpoondown: [
          ["leftharpoondown"], .888, 522, "xMinYMin"
        ],
        overrightharpoon: [
          ["rightharpoon"], .888, 522, "xMaxYMin"
        ],
        xrightharpoonup: [
          ["rightharpoon"], .888, 522, "xMaxYMin"
        ],
        xrightharpoondown: [
          ["rightharpoondown"], .888, 522, "xMaxYMin"
        ],
        xlongequal: [
          ["longequal"], .888, 334, "xMinYMin"
        ],
        xtwoheadleftarrow: [
          ["twoheadleftarrow"], .888, 334, "xMinYMin"
        ],
        xtwoheadrightarrow: [
          ["twoheadrightarrow"], .888, 334, "xMaxYMin"
        ],
        overleftrightarrow: [
          ["leftarrow", "rightarrow"], .888, 522
        ],
        overbrace: [
          ["leftbrace", "midbrace", "rightbrace"], 1.6, 548
        ],
        underbrace: [
          ["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548
        ],
        underleftrightarrow: [
          ["leftarrow", "rightarrow"], .888, 522
        ],
        xleftrightarrow: [
          ["leftarrow", "rightarrow"], 1.75, 522
        ],
        xLeftrightarrow: [
          ["doubleleftarrow", "doublerightarrow"], 1.75, 560
        ],
        xrightleftharpoons: [
          ["leftharpoondownplus", "rightharpoonplus"], 1.75, 716
        ],
        xleftrightharpoons: [
          ["leftharpoonplus", "rightharpoondownplus"], 1.75, 716
        ],
        xhookleftarrow: [
          ["leftarrow", "righthook"], 1.08, 522
        ],
        xhookrightarrow: [
          ["lefthook", "rightarrow"], 1.08, 522
        ],
        overlinesegment: [
          ["leftlinesegment", "rightlinesegment"], .888, 522
        ],
        underlinesegment: [
          ["leftlinesegment", "rightlinesegment"], .888, 522
        ],
        overgroup: [
          ["leftgroup", "rightgroup"], .888, 342
        ],
        undergroup: [
          ["leftgroupunder", "rightgroupunder"], .888, 342
        ],
        xmapsto: [
          ["leftmapsto", "rightarrow"], 1.5, 522
        ],
        xtofrom: [
          ["leftToFrom", "rightToFrom"], 1.75, 528
        ],
        xrightleftarrows: [
          ["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901
        ],
        xrightequilibrium: [
          ["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716
        ],
        xleftequilibrium: [
          ["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716
        ]
      },
      Wo = {
        widehat1: [1062, 239, .24],
        widehat2: [2364, 300, .3],
        widehat3: [2364, 360, .36],
        widehat4: [2364, 420, .42],
        widecheck1: [1062, 239, .24],
        widecheck2: [2364, 300, .3],
        widecheck3: [2364, 360, .36],
        widecheck4: [2364, 420, .42],
        widetilde1: [600, 260, .26],
        widetilde2: [1033, 286, .286],
        widetilde3: [2339, 306, .306],
        widetilde4: [2340, 312, .34],
        overarc: [1061, 159, .3],
        underarc: [1061, 159, .3]
      },
      yn = {
        doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
        doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
        leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
        leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
        leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
        overarc: "M529 0c179 0 524 115 524 115 5 1 9 5 9 10 0 1-1 2-1 3l-4 22c-1 5-5 9-11 9h-2s-338-93-512-92c-174 0-513 92-513 92h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13 0 0 342-115 520-115z",
        underarc: `m 529 160
  c -179 0 -524 -115 -524 -115
  c -5 -1 -9 -5 -9 -10
  c 0 -1 1 -2 1 -3
  l 4 -22
  c 1 -5 5 -9 11 -9
  h 2
  s 338 93 512 92
  c 174 0 513 -92 513 -92
  h 2
  c 5 0 9 4 11 9
  l 5 22
  c 1 6 -2 12 -8 13
  c 0 0 -342 115 -520 115
  z
  `,
        leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
        leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
        leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
        leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
        leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
        leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
        lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
        leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
        leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
        leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
        longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
        midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
        midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
        oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
        oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
        oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
        oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
        rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
        rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
        rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
        rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
        rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
        rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
        rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
        rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
        rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
        righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
        rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
        rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
        twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
        twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
        widetilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
        widetilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
        widetilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
        widetilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
        vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
        widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
        widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
        widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
        widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
        widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
        widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
        widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
        widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
        baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
        rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
        baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
        rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
        shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
        shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
      };

    function bn(t) {
      if (Wo[t]) {
        let [c, u, d] = Wo[t], m = `<span class="stretchy" style="height:${d}em"><svg width="100%" height="${d}em" viewBox="0 0 ${c} ${u}" preserveAspectRatio="none" ><path fill="currentcolor" d="${yn[t]}"></path></svg></span>`;
        return `<span style="display:inline-block;height:${d/2}em;min-width:0">${m}</span>`
      }
      let [e, r, i, o] = Jo[t], a, n, s = i / 1e3;
      e.length === 3 ? (a = ["slice-1-of-3", "slice-2-of-3", "slice-3-of-3"], n = ["xMinYMin", "xMidYMin", "xMaxYMin"]) : e.length === 2 ? (a = ["slice-1-of-2", "slice-2-of-2"], n = ["xMinYMin", "xMaxYMin"]) : (a = ["slice-1-of-1"], n = [o]);
      let l = e.map((c, u) => `<span class="${a[u]}" style=height:${s}em><svg width=400em height=${s}em viewBox="0 0 400000 ${i}" preserveAspectRatio="${n[u]} slice"><path fill="currentcolor" d="${yn[c]}"></path></svg></span>`).join("");
      return `<span style="display:inline-block;height:${s}em;min-width:${r}em;">${l}</span>`
    }

    function xn(t) {
      return Jo[t] ? Jo[t][2] / 1e3 : Wo[t][2]
    }
    var Rr = class {
        constructor(e) {
          Rr._registry[e] = this
        }
        static createAtom(e, r, i, o) {
          return Rr._registry[e].createAtom(r, i, o)
        }
        static serialize(e, r) {
          return e.length > 0, Rr._registry[e[0].mode].serialize(e, r)
        }
        static applyStyle(e, r, i) {
          return Rr._registry[e].applyStyle(r, i)
        }
      },
      Te = Rr;
    Te._registry = {};

    function vn(t) {
      let e = [],
        r = [],
        i = "NONE";
      for (let o of t) o.type !== "first" && (o.mode !== i ? (r.length > 0 && e.push(r), r = [o], i = o.mode) : r.push(o));
      return r.length > 0 && e.push(r), e
    }

    function Re(t, e) {
      let r = [],
        i = [],
        o;
      for (let a of t)
        if (a.type !== "first" && a.style) {
          let n;
          e === "variant" ? (n = a.style.variant, a.style.variantStyle && a.style.variantStyle !== "up" && (n += "-" + a.style.variantStyle)) : e === "cssClass" ? a.type === "group" && (n = a.customClass) : n = a.style[e], n === o ? i.push(a) : (i.length > 0 && r.push(i), i = [a], o = n)
        } return i.length > 0 && r.push(i), r
    }

    function wn(t, e, r) {
      return Te.applyStyle(t, e, r)
    }
    var kn = ["", "chem", "mord", "mbin", "mop", "mrel", "mopen", "mclose", "mpunct", "minner", "spacing", "first", "latex", "composition", "error", "placeholder", "supsub", "none", "mathfield"];

    function Sn(t) {
      return kn.includes(t)
    }
    var Al = {
        mord: {
          mop: 3,
          mbin: 4,
          mrel: 5,
          minner: 3
        },
        mop: {
          mord: 3,
          mop: 3,
          rel: 5,
          minner: 3
        },
        mbin: {
          mord: 4,
          mop: 4,
          mopen: 4,
          minner: 4
        },
        mrel: {
          mord: 5,
          mop: 5,
          mopen: 5,
          minner: 5
        },
        mclose: {
          mop: 3,
          mbin: 4,
          mrel: 5,
          minner: 3
        },
        mpunct: {
          mord: 3,
          mop: 3,
          mrel: 3,
          mopen: 3,
          mpunct: 3,
          minner: 3
        },
        minner: {
          mord: 3,
          mop: 3,
          mbin: 4,
          mrel: 5,
          mopen: 3,
          mpunct: 3,
          minner: 3
        }
      },
      Ll = {
        mord: {
          mop: 3
        },
        mop: {
          mord: 3,
          mop: 3
        },
        mclose: {
          mop: 3
        },
        minner: {
          mop: 3
        }
      };

    function mi(t, e) {
      if (typeof t == "string") return t;
      if (typeof t == "number") {
        Number.isFinite(t);
        let r = Math.ceil(100 * t) / 100;
        return r === 0 ? "0" : r.toString() + (e != null ? e : "")
      }
      return ""
    }
    var v = class {
      constructor(e, r) {
        var o, a, n, s, l, c;
        if (typeof e == "number" ? this.value = String.fromCodePoint(e) : typeof e == "string" ? this.value = e : Y(e) ? this.children = e.filter(u => u !== null) : e && e instanceof v && (this.children = [e]), this.type = (o = r == null ? void 0 : r.type) != null ? o : "", this.isSelected = !1, this.isTight = (a = r == null ? void 0 : r.isTight) != null ? a : !1, this.newList = (n = r == null ? void 0 : r.newList) != null ? n : !1, r != null && r.properties)
          for (let u of Object.keys(r.properties)) this.setStyle(u, r.properties[u]);
        r != null && r.attributes && (this.attributes = r.attributes), this.classes = (s = r == null ? void 0 : r.classes) != null ? s : "";
        let i = (r == null ? void 0 : r.fontFamily) || "Main-Regular";
        if (r != null && r.style && this.value && (i = wn((l = r.mode) != null ? l : "math", this, r.style) || "Main-Regular"), this.height = 0, this.depth = 0, this.skew = 0, this.italic = 0, this.maxFontSize = 0, this.type === "latex") this.height = .8, this.depth = .2;
        else if (typeof e == "number") {
          let u = Ot(e, i);
          this.height = u.height, this.depth = u.depth, this.skew = u.skew, this.italic = u.italic
        } else if (this.value) {
          this.height = -1 / 0, this.depth = -1 / 0, this.skew = -1 / 0, this.italic = -1 / 0;
          for (let u = 0; u < this.value.length; u++) {
            let d = Ot(this.value.codePointAt(u), i || "Main-Regular");
            this.height = Math.max(this.height, d.height), this.depth = Math.max(this.depth, d.depth), this.skew = d.skew, this.italic = d.italic
          }
        } else if (this.children && this.children.length > 0)
          if (this.children.length === 1) {
            let u = this.children[0];
            this.height = u.height, this.depth = u.depth, this.maxFontSize = u.maxFontSize, this.skew = u.skew, this.italic = u.italic
          } else {
            let u = -1 / 0,
              d = -1 / 0,
              m = 0;
            for (let h of this.children) h.height > u && (u = h.height), h.depth > d && (d = h.depth), m = Math.max(m, (c = h.maxFontSize) != null ? c : 0);
            this.height = u, this.depth = d, this.maxFontSize = m
          }(r == null ? void 0 : r.height) !== void 0 && (this.height = r.height), (r == null ? void 0 : r.depth) !== void 0 && (this.depth = r.depth), (r == null ? void 0 : r.maxFontSize) !== void 0 && (this.maxFontSize = r.maxFontSize)
      }
      set atomID(e) {
        e === void 0 || e.length === 0 || (this.attributes || (this.attributes = {}), this.attributes["data-atom-id"] = e)
      }
      selected(e) {
        if (this.isSelected !== e && (this.isSelected = e, this.children))
          for (let r of this.children) r.selected(e)
      }
      setStyle(e, r, i) {
        if (r === void 0) return;
        let o = mi(r, i);
        o.length > 0 && (this.cssProperties || (this.cssProperties = {}), this.cssProperties[e] = o)
      }
      setTop(e) {
        Number.isFinite(e) && Math.abs(e) > .01 && (this.cssProperties || (this.cssProperties = {}), this.cssProperties.top = mi(e, "em"), this.height -= e, this.depth += e)
      }
      get left() {
        var e;
        return (e = this.cssProperties) != null && e["margin-left"] ? Number.parseFloat(this.cssProperties["margin-left"]) : 0
      }
      set left(e) {
        Number.isFinite(e) && (e === 0 ? this.cssProperties && delete this.cssProperties["margin-left"] : (this.cssProperties || (this.cssProperties = {}), this.cssProperties["margin-left"] = mi(e, "em")))
      }
      set right(e) {
        Number.isFinite(e) && (e === 0 ? this.cssProperties && delete this.cssProperties["margin-right"] : (this.cssProperties || (this.cssProperties = {}), this.cssProperties["margin-right"] = mi(e, "em")))
      }
      set width(e) {
        Number.isFinite(e) && (e === 0 ? this.cssProperties && delete this.cssProperties.width : (this.cssProperties || (this.cssProperties = {}), this.cssProperties.width = mi(e, "em")))
      }
      wrap(e, r) {
        let i = e.parent;
        if (!i) return this;
        e.isPhantom && this.setStyle("opacity", 0);
        let o = e.computedColor;
        o === i.computedColor && (o = ""), this.setStyle("color", o);
        let a = e.effectiveFontSize === i.effectiveFontSize ? void 0 : e.effectiveFontSize,
          n = e.computedBackgroundColor;
        if (this.isSelected && (n = Vo(n)), n === i.computedBackgroundColor && (n = ""), !a && !n && !(r && (r.classes || r.type))) return this;
        let s;
        n ? (s = St(this, r), s.selected(this.isSelected), s.setStyle("background-color", n), s.setStyle("display", "inline-block")) : s = new v(this, r);
        let l = e.scalingFactor;
        return l !== 1 && (s.setStyle("font-size", l * 100, "%"), s.height *= l, s.depth *= l, s.italic *= l, s.skew *= l), s
      }
      wrapSelect(e) {
        if (!this.isSelected) return this;
        if (!e.parent) return this;
        let i = Vo(e.computedBackgroundColor),
          o = St(this);
        return o.selected(!0), o.setStyle("background-color", i), o.setStyle("display", "inline-block"), o
      }
      toMarkup() {
        var a, n, s;
        let e = (a = this.value) != null ? a : "";
        if (this.children)
          for (let l of this.children) e += l.toMarkup();
        let r = this.classes.split(" ");
        r.push((n = {
          latex: "ML__latex",
          placeholder: "ML__placeholder",
          error: "ML__error"
        } [this.type]) != null ? n : ""), this.caret === "latex" && r.push("ML__latex-caret");
        let i = r.length === 1 ? r[0] : r.filter((l, c, u) => l.length > 0 && u.indexOf(l) === c).join(" "),
          o = "";
        if (e.length > 0 && e !== "\u200B" || i.length > 0 || this.cssId || this.htmlData || this.htmlStyle || this.attributes || this.cssProperties || this.svgBody || this.svgOverlay) {
          let l = "";
          if (this.cssId && (l += ` id="${this.cssId.replace(/ /g,"-")}" `), this.htmlData) {
            let u = this.htmlData.split(",");
            for (let d of u) {
              let m = d.match(/([^=]+)=(.+$)/);
              if (m) {
                let h = m[1].trim().replace(/ /g, "-");
                h && (l += ` data-${h}="${m[2]}" `)
              } else {
                let h = d.trim().replace(/ /g, "-");
                h && (l += ` data-${h} `)
              }
            }
          }
          if (this.htmlStyle) {
            let u = this.htmlStyle.split(";"),
              d = "";
            for (let m of u) {
              let h = m.match(/([^=]+):(.+$)/);
              if (h) {
                let f = h[1].trim().replace(/ /g, "-");
                f && (d += `${f}:${h[2]};`)
              }
            }
            d && (l += ` style="${d}"`)
          }
          if (this.attributes && (l += " " + Object.keys(this.attributes).map(u => `${u}="${this.attributes[u]}"`).join(" ")), i.length > 0 && (l += ` class="${i}"`), this.cssProperties) {
            let u = Object.keys(this.cssProperties).map(d => `${d}:${this.cssProperties[d]}`).join(";");
            u.length > 0 && (l += ` style="${u}"`)
          }
          let c = "";
          this.svgBody ? c = bn(this.svgBody) : this.svgOverlay && (c = '<span style="', c += "display: inline-block;", c += `height:${this.height+this.depth}em;`, c += `vertical-align:${this.depth}em;`, c += '">', c += e, c += "</span>", c += '<svg style="position:absolute;overflow:overlay;', c += `height:${this.height+this.depth}em;`, (s = this.cssProperties) != null && s.padding ? (c += `top:${this.cssProperties.padding}em;`, c += `left:${this.cssProperties.padding}em;`, c += `width:calc(100% - 2 * ${this.cssProperties.padding}em );`) : c += "top:0;left:0;width:100%;", c += "z-index:2;", c += '"', this.svgStyle && (c += ` style="${this.svgStyle}"`), c += `>${this.svgOverlay}</svg>`), o = `<span${l}>${e}${c}</span>`
        }
        return this.caret === "text" ? o += '<span class="ML__text-caret"></span>' : this.caret === "math" && (o += '<span class="ML__caret"></span>'), o
      }
      tryCoalesceWith(e) {
        if (this.type !== e.type || !/ML__text/.test(this.classes) && !["mord", "mbin", "mrel"].includes(this.type) || this.svgBody || !this.value || e.svgBody || !e.value) return !1;
        let r = this.children && this.children.length > 0,
          i = e.children && e.children.length > 0;
        if (r || i) return !1;
        let o = this.cssProperties ? Object.keys(this.cssProperties).length : 0,
          a = e.cssProperties ? Object.keys(e.cssProperties).length : 0;
        if (o !== a) return !1;
        if (o > 0) {
          for (let l of Object.keys(this.cssProperties))
            if (this.cssProperties[l] !== e.cssProperties[l]) return !1
        }
        let n = this.classes.trim().replace(/\s+/g, " ").split(" "),
          s = e.classes.trim().replace(/\s+/g, " ").split(" ");
        if (n.length !== s.length) return !1;
        n.sort(), s.sort();
        for (let [l, c] of n.entries())
          if (c === "vertical-separator" || c !== s[l]) return !1;
        return this.value += e.value, this.height = Math.max(this.height, e.height), this.depth = Math.max(this.depth, e.depth), this.maxFontSize = Math.max(this.maxFontSize, e.maxFontSize), this.italic = e.italic, !0
      }
    };

    function Uo(t) {
      if (!t || t.length === 0) return [];
      t[0].children = Uo(t[0].children);
      let e = [t[0]];
      for (let r = 1; r < t.length; r++) e[e.length - 1].tryCoalesceWith(t[r]) || (t[r].children = Uo(t[r].children), e.push(t[r]));
      return e
    }

    function Zt(t) {
      return t.children && (t.children = Uo(t.children)), t
    }

    function Cl(t) {
      Mn(t, (e, r) => {
        r.type === "mbin" && (!e || /first|none|mbin|mop|mrel|mopen|mpunct/.test(e.type)) && (r.type = "mord"), e && e.type === "mbin" && /mrel|mclose|mpunct|placeholder/.test(r.type) && (e.type = "mord")
      })
    }

    function Tl(t, e) {
      Mn(t, (r, i) => {
        var s, l, c, u;
        let o = (s = r == null ? void 0 : r.type) != null ? s : "none",
          a = i.isTight ? (l = Ll[o]) != null ? l : null : (c = Al[o]) != null ? c : null,
          n = (u = a == null ? void 0 : a[i.type]) != null ? u : "none";
        n !== "none" && (n === 3 && (i.left += e.getRegisterAsEm("thinmuskip")), n === 4 && (i.left += e.getRegisterAsEm("medmuskip")), n === 5 && (i.left += e.getRegisterAsEm("thickmuskip")))
      })
    }

    function _n(t, e, r) {
      e.newList && (t = null);
      let i = e.type;
      if (i === "first") return e.newList, null;
      if (i === "spacing") return t;
      if (r(t, e), e.children) {
        let o = null;
        (i === void 0 || i.length === 0) && (o = t);
        for (let a of e.children) o = _n(o, a, r);
        (i === void 0 || i.length === 0) && (t = o)
      }
      return i !== "supsub" && i !== void 0 && i.length > 0 && (t = e), t
    }

    function Mn(t, e) {
      t && _n(null, t, e)
    }

    function _t(t, e) {
      return Cl(t), Tl(t, e), t
    }

    function St(t, e) {
      if (!t) return new v(null, e);
      let r = new v(null, {
        classes: "ML__strut"
      });
      r.setStyle("height", Math.max(0, t.height), "em");
      let i = [r];
      if (t.depth !== 0) {
        let o = new v(null, {
          classes: "ML__strut--bottom"
        });
        o.setStyle("height", t.height + t.depth, "em"), o.setStyle("vertical-align", -t.depth, "em"), i.push(o)
      }
      return i.push(t), new v(i, e)
    }

    function Ji(t, e, r) {
      return t.svgOverlay = e, t.svgStyle = r, t
    }

    function Fr(t) {
      let e = xn(t) / 2,
        r = new v(null, {
          height: e + .166,
          depth: e - .166,
          maxFontSize: 0
        });
      return r.svgBody = t, r
    }

    function El(t) {
      if ("individualShift" in t) {
        let e = t.individualShift,
          r = e[0],
          i = [r],
          o = -r.shift - r.box.depth,
          a = o;
        for (let n = 1; n < e.length; n++) {
          let s = e[n],
            l = -s.shift - a - s.box.depth,
            c = l - (r.box.height + r.box.depth);
          a = a + l, i.push(c), i.push(s), r = s
        }
        return [i, o]
      }
      if ("top" in t) {
        let e = t.top;
        for (let r of t.children) e -= typeof r == "number" ? r : r.box.height + r.box.depth;
        return [t.children, e]
      } else {
        if ("bottom" in t) return [t.children, -t.bottom];
        if ("firstBaseline" in t) {
          let e = t.firstBaseline[0];
          if (typeof e == "number") throw new Error("First child must be an element.");
          return [t.firstBaseline, -e.box.depth]
        } else if ("shift" in t) {
          let e = t.children[0];
          if (typeof e == "number") throw new Error("First child must be an element.");
          return [t.children, -e.box.depth - t.shift]
        }
      }
      return [null, 0]
    }

    function Pl(t) {
      var m;
      let [e, r] = El(t);
      if (!e) return [
        [], 0, 0
      ];
      let i = 0;
      for (let h of e)
        if (typeof h != "number") {
          let f = h.box;
          i = Math.max(i, f.maxFontSize, f.height)
        } i += 2;
      let o = new v(null, {
        classes: "pstrut"
      });
      o.setStyle("height", i, "em");
      let a = [],
        n = r,
        s = r,
        l = r;
      for (let h of e) {
        if (typeof h == "number") l += h;
        else {
          let f = h.box,
            y = (m = h.classes) != null ? m : [],
            w = new v([o, f], {
              classes: y.join(" "),
              style: h.style
            });
          w.setStyle("top", -i - l - f.depth, "em"), h.marginLeft && w.setStyle("margin-left", h.marginLeft, "em"), h.marginRight && w.setStyle("margin-right", h.marginRight, "em"), a.push(w), l += f.height + f.depth
        }
        n = Math.min(n, l), s = Math.max(s, l)
      }
      let c = new v(a, {
        classes: "vlist"
      });
      if (c.setStyle("height", s, "em"), n >= 0) return [
        [new v(c, {
          classes: "vlist-r"
        })], s, -n
      ];
      let u = new v(new v(null), {
        classes: "vlist"
      });
      u.setStyle("height", -n, "em");
      let d = new v(8203, {
        classes: "vlist-s",
        maxFontSize: 0,
        height: 0,
        depth: 0
      });
      return [
        [new v([c, d], {
          classes: "vlist-r"
        }), new v(u, {
          classes: "vlist-r"
        })], s, -n
      ]
    }
    var Q = class extends v {
      constructor(e, r) {
        var n;
        let [i, o, a] = Pl(e);
        super(i.length === 1 ? i[0] : i, {
          classes: ((n = r == null ? void 0 : r.classes) != null ? n : "") + " vlist-t" + (i.length === 2 ? " vlist-t2" : ""),
          height: o,
          depth: a,
          type: r == null ? void 0 : r.type
        })
      }
    };

    function An(t, e) {
      var c, u, d, m, h;
      let r = t.metrics,
        i = new v(e.base),
        o = (c = e.baseShift) != null ? c : 0,
        a = (u = e.slant) != null ? u : 0,
        n = 0,
        s = 0;
      e.above && (n = (d = e.aboveShift) != null ? d : Math.max(r.bigOpSpacing1, r.bigOpSpacing3 - e.above.depth)), e.below && (s = (m = e.belowShift) != null ? m : Math.max(r.bigOpSpacing2, r.bigOpSpacing4 - e.below.height));
      let l = null;
      if (e.below && e.above) {
        let f = r.bigOpSpacing5 + e.below.height + e.below.depth + s + i.depth + o;
        l = new Q({
          bottom: f,
          children: [r.bigOpSpacing5, {
            box: e.below,
            marginLeft: -a,
            classes: ["ML__center"]
          }, s, {
            box: i,
            classes: ["ML__center"]
          }, n, {
            box: e.above,
            marginLeft: a,
            classes: ["ML__center"]
          }, r.bigOpSpacing5]
        }).wrap(t)
      } else if (e.below && !e.above) l = new Q({
        top: i.height - o,
        children: [r.bigOpSpacing5, {
          box: e.below,
          marginLeft: -a,
          classes: ["ML__center"]
        }, s, {
          box: i,
          classes: ["ML__center"]
        }]
      }).wrap(t);
      else if (!e.below && e.above) {
        let f = i.depth + o;
        l = new Q({
          bottom: f,
          children: [{
            box: i,
            classes: ["ML__center"]
          }, n, {
            box: e.above,
            marginLeft: a,
            classes: ["ML__center"]
          }, r.bigOpSpacing5]
        }).wrap(t)
      } else {
        let f = i.depth + o;
        l = new Q({
          bottom: f,
          children: [{
            box: i
          }, r.bigOpSpacing5]
        }).wrap(t)
      }
      return e.type, new v(l, {
        type: (h = e.type) != null ? h : "mop"
      })
    }

    function Dl(t) {
      let e = [];
      for (let r = 0; r < t.length; r++) {
        let i = t.charCodeAt(r);
        if (i === 13 && t.charCodeAt(r + 1) === 10 && (i = 10, r++), (i === 13 || i === 12) && (i = 10), i === 0 && (i = 65533), i >= 55296 && i <= 56319) {
          let o = t.charCodeAt(r + 1);
          if (o >= 56320 && o <= 57343) {
            let a = i - 55296,
              n = o - 56320;
            i = 2 ** 16 + a * 2 ** 10 + n, r++
          }
        }
        e.push(i)
      }
      return e
    }
    var Ui = 8205,
      Bl = [
        [Ui, 1],
        [65038, 2],
        [127995, 5],
        [129456, 4],
        [917536, 96]
      ],
      Wi, Ln = [127462, 127487];

    function Cn(t) {
      var e;
      if (Wi === void 0) {
        Wi = {};
        for (let r of Bl)
          for (let i = r[0]; i <= r[0] + r[1] - 1; i++) Wi[i] = !0
      }
      return (e = Wi[t]) != null ? e : !1
    }

    function Kl(t) {
      return t >= Ln[0] && t <= Ln[1]
    }

    function ji(t) {
      if (/^[\u0020-\u00FF]*$/.test(t)) return t;
      let e = [],
        r = Dl(t),
        i = 0;
      for (; i < r.length;) {
        let o = r[i++],
          a = r[i];
        if (a === Ui) {
          let n = i - 1;
          for (i += 2; r[i] === Ui;) i += 2;
          e.push(String.fromCodePoint(...r.slice(n, i - n + 1)))
        } else if (Cn(a)) {
          let n = i - 1;
          for (; Cn(r[i]);) i += r[i] === Ui ? 2 : 1;
          e.push(String.fromCodePoint(...r.slice(n, 2 * i - n - 1)))
        } else Kl(o) ? (i += 1, e.push(String.fromCodePoint(...r.slice(i - 2, 2)))) : e.push(String.fromCodePoint(o))
      }
      return e
    }
    var jo = class {
      constructor(e) {
        this.s = ji(e), this.pos = 0, this.obeyspaces = !1
      }
      end() {
        return this.pos >= this.s.length
      }
      get() {
        return this.pos < this.s.length ? this.s[this.pos++] : ""
      }
      peek() {
        return this.s[this.pos]
      }
      match(e) {
        let r = typeof this.s == "string" ? e.exec(this.s.slice(this.pos)) : e.exec(this.s.slice(this.pos).join(""));
        return r != null && r[0] ? (this.pos += r[0].length, r[0]) : ""
      }
      next() {
        if (this.end()) return null;
        if (!this.obeyspaces && this.match(/^[ \f\n\r\t\v\u00A0\u2028\u2029]+/) || this.obeyspaces && this.match(/^[ \f\n\r\t\v\u00A0\u2028\u2029]/)) return "<space>";
        let e = this.get();
        if (e === "\\") {
          if (!this.end()) {
            let r = this.match(/^[a-zA-Z\*]+/);
            if (r) this.match(/^[ \f\n\r\t\v\u00A0\u2028\u2029]*/);
            else if (r = this.get(), r === " ") return "<space>";
            return "\\" + r
          }
        } else {
          if (e === "{") return "<{>";
          if (e === "}") return "<}>";
          if (e === "^") {
            if (this.peek() === "^") {
              this.get();
              let r = this.match(/^(\^(\^(\^(\^[\da-f])?[\da-f])?[\da-f])?[\da-f])?[\da-f]{2}/);
              if (r) return String.fromCodePoint(Number.parseInt(r.slice(r.lastIndexOf("^") + 1), 16))
            }
            return e
          } else if (e === "#") {
            if (!this.end()) {
              let r = !1;
              if (/[\d?@]/.test(this.peek()) && (r = !0, this.pos + 1 < this.s.length)) {
                let i = this.s[this.pos + 1];
                r = /[^\dA-Za-z]/.test(i)
              }
              return r ? "#" + this.get() : "#"
            }
          } else if (e === "$") return this.peek() === "$" ? (this.get(), "<$$>") : "<$>"
        }
        return e
      }
    };

    function Ol(t, e) {
      var o, a, n, s;
      let r = [],
        i = t.next();
      if (i && i !== "\\relax") {
        if (i === "\\noexpand") i = t.next(), i && r.push(i);
        else if (i === "\\obeyspaces") t.obeyspaces = !0;
        else if (i === "\\space" || i === "~") r.push("<space>");
        else if (i === "\\bgroup") r.push("<{>");
        else if (i === "\\egroup") r.push("<}>");
        else if (i === "\\string") {
          if (i = t.next(), i)
            if (i.startsWith("\\"))
              for (let l of i) r.push(l === "\\" ? "\\backslash" : l);
            else i === "<{>" ? r.push("\\{") : i === "<space>" ? r.push("~") : i === "<}>" && r.push("\\}")
        } else if (i === "\\csname") {
          for (; t.peek() === "<space>";) t.next();
          let l = "",
            c = !1,
            u = [];
          do {
            if (u.length === 0)
              if (/^#[\d?@]$/.test(t.peek())) {
                let d = t.get().slice(1);
                u = xr((a = (o = e == null ? void 0 : e(d)) != null ? o : e == null ? void 0 : e("?")) != null ? a : "\\placeholder{}", e), i = u[0]
              } else i = t.next(), u = i ? [i] : [];
            c = u.length === 0, !c && i === "\\endcsname" && (c = !0, u.shift()), c || (c = i === "<$>" || i === "<$$>" || i === "<{>" || i === "<}>" || typeof i == "string" && i.length > 1 && i.startsWith("\\")), c || (l += u.shift())
          } while (!c);
          l && r.push("\\" + l), r.push(...u)
        } else if (i !== "\\endcsname")
          if (i.length > 1 && i.startsWith("#")) {
            let l = i.slice(1);
            r.push(...xr((s = (n = e == null ? void 0 : e(l)) != null ? n : e == null ? void 0 : e("?")) != null ? s : "\\placeholder{}", e))
          } else r.push(i)
      }
      return r
    }

    function xr(t, e = null) {
      let r = [],
        i = "";
      for (let n of t.toString().split(/\r?\n/)) {
        i && r.push(i), i = " ";
        let s = n.match(/((?:\\%)|[^%])*/);
        s !== null && r.push(s[0])
      }
      let o = new jo(r.join("")),
        a = [];
      do a.push(...Ol(o, e)); while (!o.end());
      return a
    }

    function U(t) {
      let e = "",
        r = [];
      for (let i of t) i && (/[a-zA-Z\*]/.test(i[0]) && r.push(e), r.push(i), /\\[a-zA-Z]+\*?[\"\'][^\ ]+$/.test(i) && r.push(" "), e = /\\[a-zA-Z]+\*?$/.test(i) ? " " : "");
      return r.join("")
    }

    function Nr(t) {
      return U(t.map(e => {
        var r;
        return (r = {
          "<space>": " ",
          "<$$>": "$$",
          "<$>": "$",
          "<{>": "{",
          "<}>": "}"
        } [e]) != null ? r : e
      }))
    }
    var Xo = {
        119893: 8462,
        119965: 8492,
        119968: 8496,
        119969: 8497,
        119971: 8459,
        119972: 8464,
        119975: 8466,
        119976: 8499,
        119981: 8475,
        119994: 8495,
        119996: 8458,
        120004: 8500,
        120070: 8493,
        120075: 8460,
        120076: 8465,
        120085: 8476,
        120093: 8488,
        120122: 8450,
        120127: 8461,
        120133: 8469,
        120135: 8473,
        120136: 8474,
        120137: 8477,
        120145: 8484
      },
      Tn = [{
        start: 119808,
        len: 26,
        offset: 65,
        style: "bold"
      }, {
        start: 119834,
        len: 26,
        offset: 97,
        style: "bold"
      }, {
        start: 119860,
        len: 26,
        offset: 65,
        style: "italic"
      }, {
        start: 119886,
        len: 26,
        offset: 97,
        style: "italic"
      }, {
        start: 119912,
        len: 26,
        offset: 65,
        style: "bolditalic"
      }, {
        start: 119938,
        len: 26,
        offset: 97,
        style: "bolditalic"
      }, {
        start: 119964,
        len: 26,
        offset: 65,
        variant: "script"
      }, {
        start: 119990,
        len: 26,
        offset: 97,
        variant: "script"
      }, {
        start: 120016,
        len: 26,
        offset: 65,
        variant: "script",
        style: "bold"
      }, {
        start: 120042,
        len: 26,
        offset: 97,
        variant: "script",
        style: "bold"
      }, {
        start: 120068,
        len: 26,
        offset: 65,
        variant: "fraktur"
      }, {
        start: 120094,
        len: 26,
        offset: 97,
        variant: "fraktur"
      }, {
        start: 120172,
        len: 26,
        offset: 65,
        variant: "fraktur",
        style: "bold"
      }, {
        start: 120198,
        len: 26,
        offset: 97,
        variant: "fraktur",
        style: "bold"
      }, {
        start: 120120,
        len: 26,
        offset: 65,
        variant: "double-struck"
      }, {
        start: 120146,
        len: 26,
        offset: 97,
        variant: "double-struck"
      }, {
        start: 120224,
        len: 26,
        offset: 65,
        variant: "sans-serif"
      }, {
        start: 120250,
        len: 26,
        offset: 97,
        variant: "sans-serif"
      }, {
        start: 120276,
        len: 26,
        offset: 65,
        variant: "sans-serif",
        style: "bold"
      }, {
        start: 120302,
        len: 26,
        offset: 97,
        variant: "sans-serif",
        style: "bold"
      }, {
        start: 120328,
        len: 26,
        offset: 65,
        variant: "sans-serif",
        style: "italic"
      }, {
        start: 120354,
        len: 26,
        offset: 97,
        variant: "sans-serif",
        style: "italic"
      }, {
        start: 120380,
        len: 26,
        offset: 65,
        variant: "sans-serif",
        style: "bolditalic"
      }, {
        start: 120406,
        len: 26,
        offset: 97,
        variant: "sans-serif",
        style: "bolditalic"
      }, {
        start: 120432,
        len: 26,
        offset: 65,
        variant: "monospace"
      }, {
        start: 120458,
        len: 26,
        offset: 97,
        variant: "monospace"
      }, {
        start: 120488,
        len: 25,
        offset: 913,
        style: "bold"
      }, {
        start: 120514,
        len: 25,
        offset: 945,
        style: "bold"
      }, {
        start: 120546,
        len: 25,
        offset: 913,
        style: "italic"
      }, {
        start: 120572,
        len: 25,
        offset: 945,
        style: "italic"
      }, {
        start: 120604,
        len: 25,
        offset: 913,
        style: "bolditalic"
      }, {
        start: 120630,
        len: 25,
        offset: 945,
        style: "bolditalic"
      }, {
        start: 120662,
        len: 25,
        offset: 913,
        variant: "sans-serif",
        style: "bold"
      }, {
        start: 120688,
        len: 25,
        offset: 945,
        variant: "sans-serif",
        style: "bold"
      }, {
        start: 120720,
        len: 25,
        offset: 913,
        variant: "sans-serif",
        style: "bolditalic"
      }, {
        start: 120746,
        len: 25,
        offset: 945,
        variant: "sans-serif",
        style: "bolditalic"
      }, {
        start: 120782,
        len: 10,
        offset: 48,
        variant: "main",
        style: "bold"
      }, {
        start: 120792,
        len: 10,
        offset: 48,
        variant: "double-struck"
      }, {
        start: 120803,
        len: 10,
        offset: 48,
        variant: "sans-serif"
      }, {
        start: 120812,
        len: 10,
        offset: 48,
        variant: "sans-serif",
        style: "bold"
      }, {
        start: 120822,
        len: 10,
        offset: 48,
        variant: "monospace"
      }];

    function En(t, e, r) {
      if (!/[A-Za-z\d]/.test(t) || !e && !r) return t;
      let i = t.codePointAt(0);
      if (i === void 0) return t;
      for (let o of Tn)
        if ((!e || o.variant === e) && (!r || o.style === r) && i >= o.offset && i < o.offset + o.len) {
          let a = o.start + i - o.offset;
          return String.fromCodePoint(Xo[a] || a)
        } return t
    }

    function Pn(t) {
      var e;
      if ((t < 119808 || t > 120831) && (t < 8448 || t > 8527)) return {
        char: String.fromCodePoint(t)
      };
      for (let r in Xo)
        if (Xo[r] === t) {
          t = (e = r.codePointAt(0)) != null ? e : 0;
          break
        } for (let r of Tn)
        if (t >= r.start && t < r.start + r.len) return {
          char: String.fromCodePoint(t - r.start + r.offset),
          variant: r.variant,
          style: r.style
        };
      return {
        char: String.fromCodePoint(t)
      }
    }
    var lt = {},
      Zi = {
        60: "\\lt",
        62: "\\gt",
        111: "o",
        38: "\\&",
        123: "\\lbrace",
        125: "\\rbrace",
        91: "\\lbrack",
        93: "\\rbrack",
        58: "\\colon",
        160: "~",
        172: "\\neg",
        183: "\\cdot",
        188: "\\frac{1}{4}",
        189: "\\frac{1}{2}",
        190: "\\frac{3}{4}",
        8304: "^{0}",
        8305: "^{i}",
        185: "^{1}",
        178: "^{2}",
        179: "^{3}",
        8224: "\\dagger",
        8225: "\\ddagger",
        8230: "\\ldots",
        8308: "^{4}",
        8309: "^{5}",
        8310: "^{6}",
        8311: "^{7}",
        8312: "^{8}",
        8313: "^{9}",
        8314: "^{+}",
        8315: "^{-}",
        8316: "^{=}",
        8319: "^{n}",
        8320: "_{0}",
        8321: "_{1}",
        8322: "_{2}",
        8323: "_{3}",
        8324: "_{4}",
        8325: "_{5}",
        8326: "_{6}",
        8327: "_{7}",
        8328: "_{8}",
        8329: "_{9}",
        8330: "_{+}",
        8331: "_{-}",
        8332: "_{=}",
        8336: "_{a}",
        8337: "_{e}",
        8338: "_{o}",
        8339: "_{x}",
        8242: "\\prime",
        39: "\\prime",
        8592: "\\gets",
        8594: "\\to",
        9651: "\\triangle",
        9661: "\\triangledown",
        8715: "\\owns",
        8727: "\\ast",
        8739: "\\vert",
        8741: "\\Vert",
        8743: "\\land",
        8744: "\\lor",
        8901: "\\cdot",
        8904: "\\bowtie",
        8800: "\\ne",
        8804: "\\le",
        8805: "\\ge",
        8869: "\\bot",
        10231: "\\biconditional",
        10232: "\\impliedby",
        10233: "\\implies",
        10234: "\\iff",
        8450: "\\mathbb{C}",
        8469: "\\mathbb{N}",
        8473: "\\mathbb{P}",
        8474: "\\mathbb{Q}",
        8477: "\\mathbb{R}",
        8484: "\\mathbb{Z}",
        8461: "\\mathbb{H}",
        8476: "\\Re",
        8465: "\\Im",
        42: "\\ast",
        11036: "\\square",
        9633: "\\square",
        8720: "\\coprod",
        8716: "\\not\\ni",
        9671: "\\diamond",
        8846: "\\uplus",
        8851: "\\sqcap",
        8852: "\\sqcup",
        8768: "\\wr",
        8750: "\\oint",
        8226: "\\textbullet",
        8722: "-",
        978: "\\Upsilon"
      },
      st = {},
      eo = {},
      zl = {
        darr: "\\downarrow",
        dArr: "\\Downarrow",
        Darr: "\\Downarrow",
        lang: "\\langle",
        rang: "\\rangle",
        uarr: "\\uparrow",
        uArr: "\\Uparrow",
        Uarr: "\\Uparrow",
        N: "\\mathbb{N}",
        R: "\\mathbb{R}",
        Z: "\\mathbb{Z}",
        alef: "\\aleph",
        alefsym: "\\aleph",
        Alpha: "\\mathrm{A}",
        Beta: "\\mathrm{B}",
        bull: "\\bullet",
        Chi: "\\mathrm{X}",
        clubs: "\\clubsuit",
        cnums: "\\mathbb{C}",
        Complex: "\\mathbb{C}",
        Dagger: "\\ddagger",
        diamonds: "\\diamondsuit",
        empty: "\\emptyset",
        Epsilon: "\\mathrm{E}",
        Eta: "\\mathrm{H}",
        exist: "\\exists",
        harr: "\\leftrightarrow",
        hArr: "\\Leftrightarrow",
        Harr: "\\Leftrightarrow",
        hearts: "\\heartsuit",
        image: "\\Im",
        infin: "\\infty",
        Iota: "\\mathrm{I}",
        isin: "\\in",
        Kappa: "\\mathrm{K}",
        larr: "\\leftarrow",
        lArr: "\\Leftarrow",
        Larr: "\\Leftarrow",
        lrarr: "\\leftrightarrow",
        lrArr: "\\Leftrightarrow",
        Lrarr: "\\Leftrightarrow",
        Mu: "\\mathrm{M}",
        natnums: "\\mathbb{N}",
        Nu: "\\mathrm{N}",
        Omicron: "\\mathrm{O}",
        plusmn: "\\pm",
        rarr: "\\rightarrow",
        rArr: "\\Rightarrow",
        Rarr: "\\Rightarrow",
        real: "\\Re",
        reals: "\\mathbb{R}",
        Reals: "\\mathbb{R}",
        Rho: "\\mathrm{P}",
        sdot: "\\cdot",
        sect: "\\S",
        spades: "\\spadesuit",
        sub: "\\subset",
        sube: "\\subseteq",
        supe: "\\supseteq",
        Tau: "\\mathrm{T}",
        thetasym: "\\vartheta",
        weierp: "\\wp",
        Zeta: "\\mathrm{Z}"
      },
      Rl = {
        varGamma: "\\mathit{\\Gamma}",
        varDelta: "\\mathit{\\Delta}",
        varTheta: "\\mathit{\\Theta}",
        varLambda: "\\mathit{\\Lambda}",
        varXi: "\\mathit{\\Xi}",
        varPi: "\\mathit{\\Pi}",
        varSigma: "\\mathit{\\Sigma}",
        varUpsilon: "\\mathit{\\Upsilon}",
        varPhi: "\\mathit{\\Phi}",
        varPsi: "\\mathit{\\Psi}",
        varOmega: "\\mathit{\\Omega}",
        pmod: {
          def: "\\quad(\\operatorname{mod}\\ #1)",
          args: 1,
          expand: !1
        },
        mod: {
          def: "\\quad\\operatorname{mod}\\,\\,#1",
          args: 1,
          expand: !1
        },
        bmod: {
          def: "\\;\\mathbin{\\operatorname{mod }}",
          expand: !1
        }
      },
      Fl = {
        bra: "\\mathinner{\\langle{#1}|}",
        ket: "\\mathinner{|{#1}\\rangle}",
        braket: "\\mathinner{\\langle{#1}\\rangle}",
        set: "\\mathinner{\\lbrace #1 \\rbrace}",
        Bra: "\\left\\langle #1\\right|",
        Ket: "\\left|#1\\right\\rangle",
        Braket: "\\left\\langle{#1}\\right\\rangle",
        Set: "\\left\\lbrace #1 \\right\\rbrace"
      },
      Nl = {
        iff: "\\;\u27FA\\;",
        nicefrac: "^{#1}\\!\\!/\\!_{#2}",
        rd: "\\mathrm{d}",
        rD: "\\mathrm{D}",
        doubleStruckCapitalN: "\\mathbb{N}",
        doubleStruckCapitalR: "\\mathbb{R}",
        doubleStruckCapitalQ: "\\mathbb{Q}",
        doubleStruckCapitalZ: "\\mathbb{Z}",
        doubleStruckCapitalP: "\\mathbb{P}",
        scriptCapitalE: "\\mathscr{E}",
        scriptCapitalH: "\\mathscr{H}",
        scriptCapitalL: "\\mathscr{L}",
        gothicCapitalC: "\\mathfrak{C}",
        gothicCapitalH: "\\mathfrak{H}",
        gothicCapitalI: "\\mathfrak{I}",
        gothicCapitalR: "\\mathfrak{R}",
        imaginaryI: "\\mathrm{i}",
        imaginaryJ: "\\mathrm{j}",
        exponentialE: "\\mathrm{e}",
        differentialD: "\\mathrm{d}",
        capitalDifferentialD: "\\mathrm{D}",
        "braket.sty": {
          package: Fl
        },
        "amsmath.sty": {
          package: Rl,
          expand: !1
        },
        "texvc.sty": {
          package: zl,
          expand: !1
        }
      },
      Mt = {
        " ": 32,
        "\\#": 35,
        "\\&": 38,
        "\\$": 36,
        "\\%": 37,
        "\\_": 95,
        "\\euro": 8364,
        "\\maltese": 10016,
        "\\{": 123,
        "\\}": 125,
        "\\nobreakspace": 160,
        "\\ldots": 8230,
        "\\textellipsis": 8230,
        "\\backslash": 92,
        "`": 8216,
        "'": 8217,
        "``": 8220,
        "''": 8221,
        "\\degree": 176,
        "\\textasciicircum": 94,
        "\\textasciitilde": 126,
        "\\textasteriskcentered": 42,
        "\\textbackslash": 92,
        "\\textbraceleft": 123,
        "\\textbraceright": 125,
        "\\textbullet": 8226,
        "\\textdollar": 36,
        "\\textsterling": 163,
        "\\textdagger": 8224,
        "\\textdaggerdbl": 8225,
        "\u2013": 8211,
        "\u2014": 8212,
        "\u2018": 8216,
        "\u2019": 8217,
        "\u201C": 8220,
        "\u201D": 8221,
        '"': 8221,
        "\\ss": 223,
        "\\ae": 230,
        "\\oe": 339,
        "\\AE": 198,
        "\\OE": 338,
        "\\O": 216,
        "\\i": 305,
        "\\j": 567,
        "\\aa": 229,
        "\\AA": 197
      },
      Kn = /[\w!@*()-=+{}[\]\\';:?/.,~<>`|$%#&^" ]/,
      On = Io() ? new RegExp("\\p{Letter}", "u") : /[a-zA-ZаАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяĄąĆćĘęŁłŃńÓóŚśŹźŻżàâäôéèëêïîçùûüÿæœÀÂÄÔÉÈËÊÏÎŸÇÙÛÜÆŒößÖẞìíòúÌÍÒÚáñÁÑ]/,
      Ir = Io() ? new RegExp("[0-9\\p{Letter}]", "u") : /[\da-zA-ZаАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяĄąĆćĘęŁłŃńÓóŚśŹźŻżàâäôéèëêïîçùûüÿæœÀÂÄÔÉÈËÊÏÎŸÇÙÛÜÆŒößÖẞìíòúÌÍÒÚáñÁÑ]/;

    function Zo(t, e, r = "mord", i) {
      e !== void 0 && (lt[t] = {
        definitionType: "symbol",
        type: r,
        variant: i,
        codepoint: e
      }, Zi[e] || (Zi[e] = t), Mt[t] || (Mt[t] = e))
    }

    function ve(t, e, r) {
      if (typeof t == "string") {
        for (let i = 0; i < t.length; i++) {
          let o = t.charAt(i);
          Zo(o, o.codePointAt(0))
        }
        return
      }
      for (let [i, o, a, n] of t) Zo(i, o, a != null ? a : e, n != null ? n : r)
    }

    function Yo(t, e) {
      for (let r = t; r <= e; r++) Zo(String.fromCodePoint(r), r)
    }

    function zn(t) {
      var e;
      return (e = eo[t]) != null ? e : null
    }

    function Rn(t, e) {
      var o, a;
      if (e === "\\") return [];
      if (!e.startsWith("\\")) return [];
      let r = [];
      for (let n in st) n.startsWith(e) && !st[n].infix && r.push({
        match: n,
        frequency: (o = st[n].frequency) != null ? o : 0
      });
      for (let n in lt) n.startsWith(e) && r.push({
        match: n,
        frequency: (a = lt[n].frequency) != null ? a : 0
      });
      let i = e.substring(1);
      for (let n of Object.keys(t.options.macros)) n.startsWith(i) && r.push({
        match: "\\" + n,
        frequency: 0
      });
      return r.sort((n, s) => {
        var l, c;
        return n.frequency === s.frequency ? n.match.length === s.match.length ? n.match < s.match ? -1 : 1 : n.match.length - s.match.length : ((l = s.frequency) != null ? l : 0) - ((c = n.frequency) != null ? c : 0)
      }), r.map(n => n.match)
    }

    function Dn(t) {
      let e = "auto",
        r = t.match(/:([^=]+)/);
      return r && (e = r[1].trim()), e
    }

    function Yi(t) {
      if (!t) return [];
      let e = [],
        r = t.split("]");
      if (r[0].startsWith("[")) {
        e.push({
          isOptional: !0,
          type: Dn(r[0].slice(1))
        });
        for (let i = 1; i <= r.length; i++) e.push(...Yi(r[i]))
      } else if (r = t.split("}"), r[0].startsWith("{")) {
        e.push({
          isOptional: !1,
          type: Dn(r[0].slice(1))
        });
        for (let i = 1; i <= r.length; i++) e.push(...Yi(r[i]))
      }
      return e
    }

    function Qo(t) {
      if (!t) return "";
      let e = "",
        r = !0;
      for (let i of t) typeof i.value == "string" ? e += i.value : r = !1;
      return r ? e : ""
    }

    function hi(t, e, r, i = !1) {
      typeof t == "string" && (t = [t]);
      let o = Yi(e),
        a = {
          tabular: i,
          params: o,
          createAtom: r
        };
      for (let n of t) eo[n] = a
    }

    function ht(t, e, r) {
      hi(t, e, r, !0)
    }

    function x(t, e, r) {
      var o, a;
      r || (r = {});
      let i = {
        definitionType: "function",
        params: Yi(e),
        ifMode: r.ifMode,
        isFunction: (o = r.isFunction) != null ? o : !1,
        applyMode: r.applyMode,
        infix: (a = r.infix) != null ? a : !1,
        createAtom: r.createAtom,
        applyStyle: r.applyStyle
      };
      if (typeof t == "string") st["\\" + t] = i;
      else
        for (let n of t) st["\\" + n] = i
    }
    var Xi;

    function qr(t) {
      return Xi || (Xi = Qi(Nl)), t ? Qi(b(b({}, Xi), t)) : Xi
    }

    function Bn(t, e) {
      var r, i, o, a;
      if (typeof t == "string") {
        let n = 0,
          s = t;
        return /(^|[^\\])#1/.test(s) && (n = 1), /(^|[^\\])#2/.test(s) && (n = 2), /(^|[^\\])#3/.test(s) && (n = 3), /(^|[^\\])#4/.test(s) && (n = 4), /(^|[^\\])#5/.test(s) && (n = 5), /(^|[^\\])#6/.test(s) && (n = 6), /(^|[^\\])#7/.test(s) && (n = 7), /(^|[^\\])#8/.test(s) && (n = 8), /(^|[^\\])#9/.test(s) && (n = 9), {
          expand: (r = e == null ? void 0 : e.expand) != null ? r : !0,
          captureSelection: (i = e == null ? void 0 : e.captureSelection) != null ? i : !0,
          args: n,
          def: s
        }
      }
      return b({
        expand: (o = e == null ? void 0 : e.expand) != null ? o : !0,
        captureSelection: (a = e == null ? void 0 : e.captureSelection) != null ? a : !0,
        args: 0
      }, t)
    }

    function Qi(t) {
      if (!t) return {};
      let e = {};
      for (let r of Object.keys(t)) {
        let i = t[r];
        if (i == null) delete e[r];
        else if (typeof i == "object" && "package" in i)
          for (let o of Object.keys(i.package)) e[o] = Bn(i.package[o], {
            expand: i.expand,
            captureSelection: i.captureSelection
          });
        else e[r] = Bn(i)
      }
      return e
    }

    function $r(t) {
      if (t.length === 1) {
        let e = t[0];
        if (e.type === "mbin") return "mbin";
        if (e.type === "mrel") return "mrel"
      }
      return "mord"
    }

    function fi(t, e = "math") {
      if (!t || t.length === 0) return null;
      let r = null;
      if (t.startsWith("\\")) {
        if (r = st[t], r) return r;
        e === "math" ? r = lt[t] : Mt[t] && (r = {
          definitionType: "symbol",
          type: "mord",
          codepoint: Mt[t]
        })
      } else if (e === "math") {
        if (r = lt[t], !r && t.length === 1) {
          let i = pi("math", t.codePointAt(0));
          return i.startsWith("\\") ? P(b({}, fi(i, "math")), {
            command: i
          }) : null
        }
      } else Mt[t] ? r = {
        definitionType: "symbol",
        type: "mord",
        codepoint: Mt[t]
      } : e === "text" && (r = {
        definitionType: "symbol",
        type: "mord",
        codepoint: t.codePointAt(0)
      });
      return r && r.definitionType === "symbol" && r.type === "mord" && (r.codepoint === 102 || r.codepoint === 103 || r.codepoint === 104) && (r.isFunction = !0), r != null ? r : null
    }

    function to(t, e) {
      if (!t.startsWith("\\")) return null;
      let r = t.slice(1);
      return e[r]
    }

    function Fn(t, e) {
      var a;
      if (t === "text") return (a = pi(t, e.codePointAt(0))) != null ? a : e;
      let r;
      if (r = pi(t, e.codePointAt(0)), r) return r;
      let i = e.codePointAt(0),
        o = Pn(i);
      return !o.style && !o.variant ? "" : (r = o.char, o.variant && (r = "\\" + o.variant + "{" + r + "}"), o.style === "bold" ? r = "\\mathbf{" + r + "}" : o.style === "italic" ? r = "\\mathit{" + r + "}" : o.style === "bolditalic" && (r = "\\mathbfit{" + r + "}"), "\\mathord{" + r + "}")
    }

    function pi(t, e) {
      if (e === void 0) return "";
      if (t === "math" && Zi[e]) return Zi[e];
      if (t === "text") {
        let r = Object.keys(Mt).find(i => Mt[i] === e);
        if (!r) {
          let i = e.toString(16);
          r = "^".repeat(i.length) + i
        }
        return r
      }
      return String.fromCodePoint(e)
    }
    var ro = 7,
      yi = 6,
      ea = 5,
      Vr = 4,
      gi = 3,
      ct = 2,
      Hr = 1,
      Fe = 0,
      At = class {
        constructor(e, r, i) {
          this.id = e, this.sizeDelta = r, this.cramped = i;
          let o = {
            "-4": 2,
            "-3": 1,
            0: 0
          } [r];
          this.metrics = Object.keys(Go).reduce((a, n) => P(b({}, a), {
            [n]: Go[n][o]
          }), {})
        }
        getFontSize(e) {
          return Math.max(1, e + this.sizeDelta)
        }
        get sup() {
          return Se[[Fe, Hr, Fe, Hr, ct, gi, ct, gi][this.id]]
        }
        get sub() {
          return Se[[Fe, Fe, Fe, Fe, ct, ct, ct, ct][this.id]]
        }
        get fracNum() {
          return Se[[Fe, Hr, Fe, Hr, ct, gi, Vr, ea][this.id]]
        }
        get fracDen() {
          return Se[[Fe, Fe, Fe, Fe, ct, ct, Vr, Vr][this.id]]
        }
        get cramp() {
          return Se[[Fe, Fe, ct, ct, Vr, Vr, yi, yi][this.id]]
        }
        get isTight() {
          return this.sizeDelta < 0
        }
      },
      Se = {
        7: new At(ro, 0, !1),
        6: new At(yi, 0, !0),
        5: new At(ea, 0, !1),
        4: new At(Vr, 0, !0),
        3: new At(gi, -3, !1),
        2: new At(ct, -3, !0),
        1: new At(Hr, -4, !1),
        0: new At(Fe, -4, !0)
      };
    Se.displaystyle = Se[ro];
    Se.textstyle = Se[ea];
    Se.scriptstyle = Se[gi];
    Se.scriptscriptstyle = Se[Hr];

    function Il(t, e) {
      var i;
      if (!t) return 0;
      let r = {
        pt: 1,
        mm: 7227 / 2540,
        cm: 7227 / 254,
        ex: 35271 / 8192,
        px: 3 / 4,
        em: Xt,
        bp: 803 / 800,
        dd: 1238 / 1157,
        pc: 12,
        in: 72.27,
        mu: 10 / 18
      } [(i = t.unit) != null ? i : "pt"];
      if (Number.isFinite(e)) {
        let o = 10 ** e;
        return Math.round(t.dimension / Xt * r * o) / o
      }
      return t.dimension * r
    }

    function Ae(t, e) {
      return t === null ? 0 : Il(t, e) / Xt
    }

    function Nn(t) {
      return Ae(t.glue)
    }

    function io(t) {
      var e;
      return `${t.dimension}${(e=t.unit)!=null?e:"pt"}`
    }
    var E = class {
      constructor(e, r, i) {
        var n, s, l, c, u, d;
        e instanceof E || (r == null || r.fontSize), e instanceof E, e instanceof E && (this.parent = e), e instanceof E || (this.registers = (n = e.registers) != null ? n : {}), this.isPhantom = (c = (l = r == null ? void 0 : r.isPhantom) != null ? l : (s = this.parent) == null ? void 0 : s.isPhantom) != null ? c : !1;
        let o = b({}, e);
        r && (r.letterShapeStyle && r.letterShapeStyle !== "auto" && (o.letterShapeStyle = r.letterShapeStyle), r.color && r.color !== "none" && (o.color = r.color), r.backgroundColor && r.backgroundColor !== "none" && (o.backgroundColor = r.backgroundColor), r.fontSize && r.fontSize !== "auto" && r.fontSize !== ((u = this.parent) == null ? void 0 : u._size) && (this._size = r.fontSize)), this.letterShapeStyle = (d = o.letterShapeStyle) != null ? d : "tex", this.color = o.color, this.backgroundColor = o.backgroundColor;
        let a;
        if (typeof i == "string") {
          if (e instanceof E) switch (i) {
            case "cramp":
              a = e.mathstyle.cramp;
              break;
            case "superscript":
              a = e.mathstyle.sup;
              break;
            case "subscript":
              a = e.mathstyle.sub;
              break;
            case "numerator":
              a = e.mathstyle.fracNum;
              break;
            case "denominator":
              a = e.mathstyle.fracDen;
              break
          }
          switch (i) {
            case "textstyle":
              a = Se.textstyle;
              break;
            case "displaystyle":
              a = Se.displaystyle;
              break;
            case "scriptstyle":
              a = Se.scriptstyle;
              break;
            case "scriptscriptstyle":
              a = Se.scriptscriptstyle;
              break;
            case "":
            case "auto":
              break
          }
        }
        this._mathstyle = a, this.atomIdsSettings = e.atomIdsSettings, this.renderPlaceholder = o.renderPlaceholder, !(e instanceof E) || (this.atomIdsSettings, e.atomIdsSettings)
      }
      get mathstyle() {
        let e = this._mathstyle,
          r = this.parent;
        for (; !e;) e = r._mathstyle, r = r.parent;
        return e
      }
      getRegister(e) {
        var r;
        if ((r = this.registers) != null && r[e]) return this.registers[e];
        if (this.parent) return this.parent.getRegister(e)
      }
      getRegisterAsGlue(e) {
        var r;
        if ((r = this.registers) != null && r[e]) {
          let i = this.registers[e];
          return typeof i == "object" && "glue" in i ? i : typeof i == "object" && "dimension" in i ? {
            glue: {
              dimension: i.dimension
            }
          } : typeof i == "number" ? {
            glue: {
              dimension: i
            }
          } : void 0
        }
        if (this.parent) return this.parent.getRegisterAsGlue(e)
      }
      getRegisterAsEm(e) {
        return Ae(this.getRegisterAsDimension(e))
      }
      getRegisterAsDimension(e) {
        var r;
        if ((r = this.registers) != null && r[e]) {
          let i = this.registers[e];
          return typeof i == "object" && "glue" in i ? i.glue : typeof i == "object" && "dimension" in i ? i : typeof i == "number" ? {
            dimension: i
          } : void 0
        }
        if (this.parent) return this.parent.getRegisterAsDimension(e)
      }
      setRegister(e, r) {
        if (r === void 0) {
          delete this.registers[e];
          return
        }
        this.registers[e] = r
      }
      setGlobalRegister(e, r) {
        let i = this;
        for (; i.parent;) i.setRegister(e, void 0), i = i.parent;
        i.setRegister(e, r)
      }
      get size() {
        let e = this._size,
          r = this.parent;
        for (; !e;) e = r._size, r = r.parent;
        return e
      }
      makeID() {
        if (!this.atomIdsSettings) return;
        if (this.atomIdsSettings.overrideID) return this.atomIdsSettings.overrideID;
        if (typeof this.atomIdsSettings.seed != "number") return Date.now().toString(36).slice(-2) + Math.floor(Math.random() * 1e5).toString(36);
        let e = this.atomIdsSettings.seed.toString(36);
        return this.atomIdsSettings.seed += 1, e
      }
      scale(e) {
        return e * this.effectiveFontSize
      }
      get scalingFactor() {
        return this.parent ? this.effectiveFontSize / this.parent.effectiveFontSize : 1
      }
      get isDisplayStyle() {
        return this.mathstyle.id === ro || this.mathstyle.id === yi
      }
      get isCramped() {
        return this.mathstyle.cramped
      }
      get isTight() {
        return this.mathstyle.isTight
      }
      get effectiveFontSize() {
        return di[Math.max(1, this.size + this.mathstyle.sizeDelta)]
      }
      get computedColor() {
        let e = this.color,
          r = this.parent;
        return !e && r && (e = r.color, r = r.parent), e != null ? e : ""
      }
      get computedBackgroundColor() {
        let e = this.backgroundColor,
          r = this.parent;
        return !e && r && (e = r.backgroundColor, r = r.parent), e != null ? e : ""
      }
      get metrics() {
        return this.mathstyle.metrics
      }
    };
    var ta = {},
      zt = ["above", "body", "below", "superscript", "subscript"];

    function Yt(t) {
      return typeof t == "string" && zt.includes(t)
    }

    function bi(t) {
      return t !== void 0 && Array.isArray(t) && t.length === 2
    }
    var g = class {
      constructor(e, r, i) {
        this.id = void 0;
        this.verbatimLatex = void 0;
        this._isDirty = !1;
        this._changeCounter = 0;
        this.subsupPlacement = void 0;
        this.explicitSubsupPlacement = !1;
        this.skipBoundary = !1;
        this.captureSelection = !1;
        var o, a, n, s, l, c;
        this.type = e, this.context = r, typeof(i == null ? void 0 : i.value) == "string" && (this.value = i.value), this.command = (a = (o = i == null ? void 0 : i.command) != null ? o : this.value) != null ? a : "", this.mode = (n = i == null ? void 0 : i.mode) != null ? n : "math", this.isFunction = (s = i == null ? void 0 : i.isFunction) != null ? s : !1, this.subsupPlacement = i == null ? void 0 : i.limits, this.style = (l = i == null ? void 0 : i.style) != null ? l : {}, this.displayContainsHighlight = (c = i == null ? void 0 : i.displayContainsHighlight) != null ? c : !1, i != null && i.serialize && (i.command, ta[i.command] = i.serialize)
      }
      static createBox(e, r, i) {
        var s, l, c;
        if (!r) return null;
        let o = ql(r);
        if (o.length === 1) {
          let u = o[0];
          return u[0].style ? ra(e, u, P(b({}, i), {
            style: {
              color: u[0].style.color,
              backgroundColor: u[0].style.backgroundColor,
              fontSize: u[0].style.fontSize
            }
          })) : ra(e, u, i)
        }
        let a = [],
          n = i == null ? void 0 : i.newList;
        for (let u of o) {
          let d = new E(e, {
              color: (s = u[0].style) == null ? void 0 : s.color,
              backgroundColor: (l = u[0].style) == null ? void 0 : l.backgroundColor,
              fontSize: (c = u[0].style) == null ? void 0 : c.fontSize
            }),
            m = ra(d, u, {
              newList: n
            });
          m && (n = !1, a.push(m))
        }
        return a.length === 0 ? null : a.length === 1 && !(i != null && i.classes) && !(i != null && i.type) ? a[0].wrap(e) : new v(a, {
          classes: i == null ? void 0 : i.classes,
          type: i == null ? void 0 : i.type,
          newList: i == null ? void 0 : i.newList
        }).wrap(e)
      }
      static serialize(e, r) {
        return Y(e) ? Qt(e, r) : typeof e == "number" || typeof e == "boolean" ? e.toString() : typeof e == "string" ? e.replace(/\s/g, "~") : e === void 0 ? "" : !r.expandMacro && typeof e.verbatimLatex == "string" ? e.verbatimLatex : e.command && ta[e.command] ? ta[e.command](e, r) : e.serialize(r)
      }
      static commonAncestor(e, r) {
        if (e === r || e.parent === r.parent) return e.parent;
        let i = new WeakSet,
          {
            parent: o
          } = e;
        for (; o;) i.add(o), o = o.parent;
        for (o = r.parent; o;) {
          if (i.has(o)) return o;
          o = o.parent
        }
      }
      static fromJson(e, r) {
        let i = new g(e.type, r, e);
        for (let o of zt) e[o] && i.setChildren(e[o], o);
        return i
      }
      toJson() {
        let e = {
          type: this.type
        };
        if (this.mode !== "math" && (e.mode = this.mode), this.command && this.command !== this.value && (e.command = this.command), this.value !== void 0 && (e.value = this.value), this.style && Object.keys(this.style).length > 0 && (e.style = b({}, this.style)), this.verbatimLatex !== void 0 && (e.verbatimLatex = this.verbatimLatex), this.subsupPlacement && (e.subsupPlacement = this.subsupPlacement), this.explicitSubsupPlacement && (e.explicitSubsupPlacement = !0), this.isFunction && (e.isFunction = !0), this.displayContainsHighlight && (e.displayContainsHighlight = !0), this.isExtensibleSymbol && (e.isExtensibleSymbol = !0), this.skipBoundary && (e.skipBoundary = !0), this.captureSelection && (e.captureSelection = !0), this._branches)
          for (let r of Object.keys(this._branches)) this._branches[r] && (e[r] = this._branches[r].filter(i => i.type !== "first").map(i => i.toJson()));
        return e
      }
      get changeCounter() {
        return this._changeCounter
      }
      get isDirty() {
        return this._isDirty
      }
      set isDirty(e) {
        if (this._isDirty = e, e) {
          this._changeCounter++, this.verbatimLatex = void 0, this._children = void 0;
          let {
            parent: r
          } = this;
          for (; r;) r._isDirty = !0, r._changeCounter++, r.verbatimLatex = void 0, r._children = void 0, r = r.parent
        }
      }
      serialize(e) {
        var r;
        return this.body && this.command ? U([this.command, "{", this.bodyToLatex(e), "}", this.supsubToLatex(e)]) : this.body ? U([this.bodyToLatex(e), this.supsubToLatex(e)]) : this.value && this.value !== "\u200B" ? (r = this.command) != null ? r : Fn(this.mode, this.value) : ""
      }
      bodyToLatex(e) {
        return Qt(this.body, e)
      }
      aboveToLatex(e) {
        return Qt(this.above, e)
      }
      belowToLatex(e) {
        return Qt(this.below, e)
      }
      supsubToLatex(e) {
        let r = "";
        if (this.branch("subscript") !== void 0) {
          let i = Qt(this.subscript, e);
          i.length === 0 ? r += "_{}" : i.length === 1 ? r += "_" + i : r += `_{${i}}`
        }
        if (this.branch("superscript") !== void 0) {
          let i = Qt(this.superscript, e);
          i.length === 0 ? r += "^{}" : i.length === 1 ? i === "\u2032" ? r += "^\\prime " : i === "\u2033" ? r += "^\\doubleprime " : r += "^" + i : r += `^{${i}}`
        }
        return r
      }
      get treeDepth() {
        let e = 1,
          r = this.parent;
        for (; r;) r = r.parent, e += 1;
        return e
      }
      get inCaptureSelection() {
        let e = this;
        for (; e;) {
          if (e.captureSelection) return !0;
          e = e.parent
        }
        return !1
      }
      get parentPrompt() {
        let e = this;
        for (; e;) {
          if (e.type === "prompt" && !e.captureSelection) return e;
          e = e.parent
        }
        return null
      }
      branch(e) {
        if (Yt(e) && this._branches) return this._branches[e]
      }
      get branches() {
        if (!this._branches) return [];
        let e = [];
        for (let r of zt) this._branches[r] && e.push(r);
        return e
      }
      createBranch(e) {
        return Yt(e), Yt(e) ? (this._branches ? this._branches[e] || (this._branches[e] = [this.makeFirstAtom(e)]) : this._branches = {
          [e]: [this.makeFirstAtom(e)]
        }, this.isDirty = !0, this._branches[e]) : []
      }
      get row() {
        return bi(this.treeBranch) ? this.treeBranch[0] : -1
      }
      get col() {
        return bi(this.treeBranch) ? this.treeBranch[1] : -1
      }
      get body() {
        var e;
        return (e = this._branches) == null ? void 0 : e.body
      }
      set body(e) {
        this.setChildren(e, "body")
      }
      get superscript() {
        var e;
        return (e = this._branches) == null ? void 0 : e.superscript
      }
      set superscript(e) {
        this.setChildren(e, "superscript")
      }
      get subscript() {
        var e;
        return (e = this._branches) == null ? void 0 : e.subscript
      }
      set subscript(e) {
        this.setChildren(e, "subscript")
      }
      get above() {
        var e;
        return (e = this._branches) == null ? void 0 : e.above
      }
      set above(e) {
        this.setChildren(e, "above")
      }
      get below() {
        var e;
        return (e = this._branches) == null ? void 0 : e.below
      }
      set below(e) {
        this.setChildren(e, "below")
      }
      get computedStyle() {
        var o;
        if (!this.parent) return b({}, (o = this.style) != null ? o : {});
        let e = this.style.verbatimColor !== void 0,
          r = this.style.verbatimBackgroundColor !== void 0,
          i = b(b({}, this.parent.computedStyle), this.style);
        return delete i.variant, delete i.variantStyle, r || delete i.verbatimBackgroundColor, e || delete i.verbatimColor, i
      }
      applyStyle(e) {
        this.isDirty = !0, this.style = b(b({}, this.style), e), this.style.fontFamily === "none" && delete this.style.fontFamily, this.style.fontShape === "auto" && delete this.style.fontShape, this.style.fontSeries === "auto" && delete this.style.fontSeries, this.style.color === "none" && (delete this.style.color, delete this.style.verbatimColor), this.style.backgroundColor === "none" && (delete this.style.backgroundColor, delete this.style.verbatimBackgroundColor), this.style.fontSize === "auto" && delete this.style.fontSize;
        for (let r of this.children) r.applyStyle(e)
      }
      getInitialBaseElement() {
        var r;
        let e;
        return this.hasEmptyBranch("body") || ((r = this.body) == null || r[0].type, e = this.body[1].getInitialBaseElement()), e != null ? e : this
      }
      getFinalBaseElement() {
        return this.hasEmptyBranch("body") ? this : this.body[this.body.length - 1].getFinalBaseElement()
      }
      isCharacterBox() {
        if (this.type === "leftright") return !1;
        let e = this.getInitialBaseElement();
        return /mord/.test(e.type)
      }
      hasEmptyBranch(e) {
        let r = this.branch(e);
        return r ? (r.length > 0, r[0].type, r.length === 1) : !0
      }
      setChildren(e, r) {
        var o;
        if (!e || (Yt(r), !Yt(r))) return;
        (o = e[0]) == null || o.type;
        let i = [this.makeFirstAtom(r), ...e];
        this._branches ? this._branches[r] = i : this._branches = {
          [r]: i
        };
        for (let a of e) a.parent = this, a.treeBranch = r;
        this.isDirty = !0
      }
      makeFirstAtom(e) {
        let r = new g("first", this.context, {
          mode: this.mode
        });
        return r.parent = this, r.treeBranch = e, r
      }
      addChild(e, r) {
        e.type, this.createBranch(r).push(e), this.isDirty = !0, e.parent = this, e.treeBranch = r
      }
      addChildBefore(e, r) {
        r.treeBranch;
        let i = this.createBranch(r.treeBranch);
        i.splice(i.indexOf(r), 0, e), this.isDirty = !0, e.parent = this, e.treeBranch = r.treeBranch
      }
      addChildAfter(e, r) {
        r.treeBranch;
        let i = this.createBranch(r.treeBranch);
        i.splice(i.indexOf(r) + 1, 0, e), this.isDirty = !0, e.parent = this, e.treeBranch = r.treeBranch
      }
      addChildren(e, r) {
        for (let i of e) this.addChild(i, r)
      }
      addChildrenAfter(e, r) {
        e.length === 0 || e[0].type, r.treeBranch;
        let i = this.createBranch(r.treeBranch);
        i.splice(i.indexOf(r) + 1, 0, ...e), this.isDirty = !0;
        for (let o of e) o.parent = this, o.treeBranch = r.treeBranch;
        return e[e.length - 1]
      }
      removeBranch(e) {
        let r = this.branch(e);
        if (Yt(e) && (this._branches[e] = void 0), !r) return [];
        for (let i of r) i.parent = void 0, i.treeBranch = void 0;
        return r[0].type, r.shift(), this.isDirty = !0, r
      }
      removeChild(e) {
        if (e.parent, e.type === "first") return;
        let r = this.branch(e.treeBranch),
          i = r.indexOf(e);
        i >= 0, r.splice(i, 1), this.isDirty = !0, e.parent = void 0, e.treeBranch = void 0
      }
      get siblings() {
        return this.type === "root" ? [] : this.parent.branch(this.treeBranch)
      }
      get firstSibling() {
        return this.siblings[0]
      }
      get lastSibling() {
        let {
          siblings: e
        } = this;
        return e[e.length - 1]
      }
      get isFirstSibling() {
        return this === this.firstSibling
      }
      get isLastSibling() {
        return this === this.lastSibling
      }
      get hasNoSiblings() {
        return this.siblings.length === 1
      }
      get leftSibling() {
        this.parent;
        let e = this.parent.branch(this.treeBranch);
        return e[e.indexOf(this) - 1]
      }
      get rightSibling() {
        this.parent;
        let e = this.parent.branch(this.treeBranch);
        return e[e.indexOf(this) + 1]
      }
      get hasChildren() {
        return !!(this._branches && this.children.length > 0)
      }
      get firstChild() {
        return this.hasChildren, this.children[0]
      }
      get lastChild() {
        this.hasChildren;
        let {
          children: e
        } = this;
        return e[e.length - 1]
      }
      get children() {
        if (this._children) return this._children;
        if (!this._branches) return [];
        let e = [];
        for (let r of zt)
          if (this._branches[r])
            for (let i of this._branches[r]) e.push(...i.children), e.push(i);
        return this._children = e, e
      }
      render(e, r) {
        if (this.type === "first" && !e.atomIdsSettings) return null;
        let i = new E(e, this.style),
          o = "";
        this.type === "root" && (o += " ML__base"), this.isSelected && (o += " ML__selected");
        let a = this.createBox(i, {
          classes: o,
          newList: (r == null ? void 0 : r.newList) === !0 || this.type === "first"
        });
        return a ? (!this.subsupPlacement && (this.superscript || this.subscript) && (a = this.attachSupsub(i, {
          base: a
        })), a.wrap(i)) : null
      }
      attachSupsub(e, r) {
        var y, w;
        let i = r.base,
          o = this.superscript,
          a = this.subscript;
        if (!o && !a) return i;
        let n = null,
          s = null,
          l = (y = r.isCharacterBox) != null ? y : this.isCharacterBox(),
          c = 0;
        if (o) {
          let k = new E(e, void 0, "superscript");
          n = g.createBox(k, o, {
            newList: !0
          }), l || (c = i.height - e.metrics.supDrop * k.scalingFactor)
        }
        let u = 0;
        if (a) {
          let k = new E(e, void 0, "subscript");
          s = g.createBox(k, a, {
            newList: !0
          }), l || (u = i.depth + e.metrics.subDrop * k.scalingFactor)
        }
        let d;
        e.isDisplayStyle ? d = e.metrics.sup1 : e.isCramped ? d = e.metrics.sup3 : d = e.metrics.sup2;
        let m = .5 / Xt / e.scalingFactor,
          h = null;
        if (s && n) {
          c = Math.max(c, d, n.depth + .25 * e.metrics.xHeight), u = Math.max(u, e.metrics.sub2);
          let k = e.metrics.defaultRuleThickness;
          if (c - n.depth - (s.height - u) < 4 * k) {
            u = 4 * k - (c - n.depth) + s.height;
            let T = .8 * e.metrics.xHeight - (c - n.depth);
            T > 0 && (c += T, u -= T)
          }
          let S = this.isExtensibleSymbol && i.italic ? -i.italic : 0;
          h = new Q({
            individualShift: [{
              box: s,
              shift: u,
              marginLeft: S
            }, {
              box: n,
              shift: -c
            }]
          }).wrap(e)
        } else s && !n ? (u = Math.max(u, e.metrics.sub1, s.height - .8 * kt), h = new Q({
          shift: u,
          children: [{
            box: s,
            marginRight: m,
            marginLeft: this.isCharacterBox() ? -((w = i.italic) != null ? w : 0) : 0
          }]
        })) : !s && n && (c = Math.max(c, d, n.depth + .25 * kt), h = new Q({
          shift: -c,
          children: [{
            box: n,
            marginRight: m
          }]
        }), h.wrap(e));
        let f = new v(h, {
          classes: "msubsup" + (this.isSelected ? " ML__selected" : "")
        });
        return this.caret && (f.caret = this.caret), new v([i, f], {
          type: r.type
        })
      }
      attachLimits(e, r) {
        var a;
        let i = this.superscript ? g.createBox(new E(e, this.style, "superscript"), this.superscript, {
            newList: !0
          }) : null,
          o = this.subscript ? g.createBox(new E(e, this.style, "subscript"), this.subscript, {
            newList: !0
          }) : null;
        return !i && !o ? r.base.wrap(e) : An(e, P(b({}, r), {
          above: i,
          below: o,
          type: (a = r == null ? void 0 : r.type) != null ? a : "mop"
        }))
      }
      bind(e, r) {
        if (!r || e.isPhantom || this.value === "\u200B") return r;
        let i = this.parent;
        for (; i && !i.captureSelection;) i = i.parent;
        return i != null && i.captureSelection || (this.id || (this.id = e.makeID()), r.atomID = this.id), r
      }
      createBox(e, r) {
        var s, l, c;
        let i = (s = this.value) != null ? s : this.body,
          o = Sn(this.type) ? this.type : void 0,
          a = (l = r == null ? void 0 : r.classes) != null ? l : "";
        this.mode === "text" && (a += " ML__text");
        let n = typeof i == "string" || i === void 0 ? new v(i != null ? i : null, {
          type: o,
          mode: this.mode,
          maxFontSize: e.scalingFactor,
          style: P(b({
            variant: "normal"
          }, this.style), {
            letterShapeStyle: e.letterShapeStyle,
            fontSize: Math.max(1, e.size + e.mathstyle.sizeDelta)
          }),
          classes: a,
          newList: r == null ? void 0 : r.newList
        }) : (c = g.createBox(e, i, {
          type: o,
          mode: this.mode,
          style: this.style,
          classes: a,
          newList: r == null ? void 0 : r.newList
        })) != null ? c : new v(null);
        return e.isTight && (n.isTight = !0), (this.mode !== "math" || this.style.variant === "main") && (n.italic = 0), n.right = n.italic, this.bind(e, n), this.caret && !this.superscript && !this.subscript && (n.caret = this.caret), n
      }
      isDigit() {
        var e;
        return this.type === "mord" && this.value ? /^[\d,.]$/.test(this.value) : this.type === "group" && ((e = this.body) == null ? void 0 : e.length) === 2 ? this.body[0].type === "first" && this.body[1].value === "," : !1
      }
      asDigit() {
        var e;
        return this.type === "mord" && this.value && /^[\d,.]$/.test(this.value) ? this.value : this.type === "group" && ((e = this.body) == null ? void 0 : e.length) === 2 && this.body[0].type === "first" && this.body[1].value === "," ? "." : ""
      }
    };

    function Qt(t, e) {
      if (!t || t.length === 0) return "";
      if (t[0].type === "first") {
        if (t.length === 1) return "";
        t = t.slice(1)
      }
      return t.length === 0 ? "" : U(Re(t, "cssClass").map(r => U(Re(r, "color").map(i => U(vn(i).map(o => Te.serialize(o, e)))))))
    }

    function ql(t) {
      let e, r = [],
        i = [];
      for (let o of t)
        if (!e && !o.style) i.push(o);
        else {
          let a = o.computedStyle;
          e && a.color === e.color && a.backgroundColor === e.backgroundColor && a.fontSize === e.fontSize ? i.push(o) : (i.length > 0 && r.push(i), i = [o], e = a)
        } return i.length > 0 && r.push(i), r
    }

    function ra(t, e, r) {
      var c, u, d, m, h;

      function i(f) {
        return f.mode === "text"
      }
      if (!e || e.length === 0) return null;
      let o = new E(t, r == null ? void 0 : r.style),
        a = !((c = o.atomIdsSettings) != null && c.groupNumbers),
        n = [],
        s = (u = r == null ? void 0 : r.newList) != null ? u : !1;
      if (e.length === 1) {
        let f = e[0],
          y = f.render(o, {
            newList: s
          });
        y && (a && f.isSelected && y.selected(!0), n = [y])
      } else {
        let f = "",
          y = !0;
        for (let w of e) {
          (d = o.atomIdsSettings) != null && d.groupNumbers && f && (y && w.isDigit() || !y && i(w)) && (o.atomIdsSettings.overrideID = f);
          let k = w.render(o, {
            newList: s
          });
          o.atomIdsSettings && (o.atomIdsSettings.overrideID = void 0), k && (s = w.type === "group" && !w.boxType, (m = o.atomIdsSettings) != null && m.groupNumbers && ((w.isDigit() || i(w)) && (!f || y !== w.isDigit()) && (y = w.isDigit(), f = (h = w.id) != null ? h : ""), f && (!(w.isDigit() || i(w)) || !w.hasEmptyBranch("superscript") || !w.hasEmptyBranch("subscript")) && (f = "")), a && w.isSelected && k.selected(!0), n.push(k))
        }
      }
      if (n.length === 0) return null;
      let l;
      return r || o.isTight || n.length > 1 ? (l = new v(n, b({
        isTight: o.isTight
      }, r != null ? r : {})), l.isSelected = n.every(f => f.isSelected)) : l = n[0], l.wrap(o).wrap(t)
    }
    var Lt = class extends g {
      constructor(r, i, o, a) {
        super("accent", o, {
          command: r,
          style: a.style
        });
        a.accentChar ? this.accent = a.accentChar : this.svgAccent = a == null ? void 0 : a.svgAccent, this.body = i, this.skipBoundary = !0, this.captureSelection = !0
      }
      static fromJson(r, i) {
        return new Lt(r.command, r.body, i, {
          accentChar: r.accentChar,
          svgAccent: r.svgAccent,
          style: r.style
        })
      }
      toJson() {
        return P(b({}, super.toJson()), {
          accentChar: this.accent,
          svgAccent: this.svgAccent
        })
      }
      render(r) {
        var c;
        let i = new E(r, this.style, "cramp"),
          o = (c = g.createBox(i, this.body)) != null ? c : new v(null),
          a = 0;
        !this.hasEmptyBranch("body") && this.body.length === 2 && this.body[1].isCharacterBox() && (a = o.skew);
        let n = Math.min(o.height, kt),
          s;
        if (this.svgAccent) s = Fr(this.svgAccent), n = i.metrics.bigOpSpacing1 - n;
        else if (this.accent) {
          let u = new v(this.accent, {
            fontFamily: "Main-Regular"
          });
          u.italic = 0;
          let d = this.accent === 8407 ? " ML__accent-vec" : "";
          s = new v(new v(u), {
            classes: "ML__accent-body" + d
          })
        }
        s = new Q({
          shift: 0,
          children: [{
            box: new v(o)
          }, -n, {
            box: s,
            marginLeft: o.left + 2 * a,
            classes: ["ML__center"]
          }]
        });
        let l = new v(s, {
          newList: !0,
          type: "mord"
        });
        return this.caret && (l.caret = this.caret), this.bind(i, l.wrap(i)), this.attachSupsub(i, {
          base: l
        })
      }
    };
    var er = {
        "(": ")",
        "{": "}",
        "[": "]",
        "|": "|",
        "\\lbrace": "\\rbrace",
        "\\lparen": "\\rparen",
        "\\{": "\\}",
        "\\langle": "\\rangle",
        "\\lfloor": "\\rfloor",
        "\\lceil": "\\rceil",
        "\\vert": "\\vert",
        "\\lvert": "\\rvert",
        "\\Vert": "\\Vert",
        "\\lVert": "\\rVert",
        "\\lbrack": "\\rbrack",
        "\\ulcorner": "\\urcorner",
        "\\llcorner": "\\lrcorner",
        "\\lgroup": "\\rgroup",
        "\\lmoustache": "\\rmoustache"
      },
      ia = Object.fromEntries(Object.entries(er).map(([t, e]) => [e, t]));

    function oo(t) {
      var e;
      return (e = {
        "[": 91,
        "]": 93,
        "(": 40,
        ")": 41,
        "\\mid": 8739,
        "|": 8739,
        "\u2223": 8739,
        "\u2225": 8741,
        "\\|": 8739,
        "\\{": 123,
        "\\}": 125,
        "\\lbrace": 123,
        "\\rbrace": 125,
        "\\lparen": 40,
        "\\rparen": 41,
        "\\lbrack": 91,
        "\\rbrack": 93,
        "\\vert": 8739,
        "\\lvert": 8739,
        "\\mvert": 8739,
        "\\rvert": 8739,
        "\\Vert": 8741,
        "\\lVert": 8741,
        "\\mVert": 8741,
        "\\rVert": 8741,
        "\\parallel": 8741,
        "\\shortparallel": 8741,
        "\\langle": 10216,
        "\\rangle": 10217,
        "\\lfloor": 8970,
        "\\rfloor": 8971,
        "\\lceil": 8968,
        "\\rceil": 8969,
        "\\ulcorner": 9484,
        "\\urcorner": 9488,
        "\\llcorner": 9492,
        "\\lrcorner": 9496,
        "\\lgroup": 10222,
        "\\rgroup": 10223,
        "\\lmoustache": 9136,
        "\\rmoustache": 9137,
        "\\surd": 8730
      } [t]) != null ? e : t.codePointAt(0)
    }

    function $l(t, e, r, i) {
      let a = new v(oo(t), {
        fontFamily: "Main-Regular"
      }).wrap(e, i);
      return r && a.setTop((1 - e.scalingFactor) * ze), a
    }

    function In(t, e, r, i, o) {
      let a = new E(i, o == null ? void 0 : o.style, "textstyle"),
        n = new v(oo(t), {
          fontFamily: "Size" + e + "-Regular",
          classes: "ML__delim-size" + e
        }).wrap(a);
      return r && n.setTop((1 - a.scalingFactor) * ze), n
    }

    function qn(t, e, r, i, o) {
      var Jt;
      let a, n, s, l;
      a = s = l = oo(t), n = null;
      let c = "Size1-Regular";
      t === "\\vert" || t === "\\lvert" || t === "\\rvert" || t === "\\mvert" || t === "\\mid" ? s = a = l = 8739 : t === "\\Vert" || t === "\\lVert" || t === "\\rVert" || t === "\\mVert" || t === "\\|" ? s = a = l = 8741 : t === "\\uparrow" ? s = l = 9168 : t === "\\Uparrow" ? s = l = 8214 : t === "\\downarrow" ? a = s = 9168 : t === "\\Downarrow" ? a = s = 8214 : t === "\\updownarrow" ? (a = 8593, s = 9168, l = 8595) : t === "\\Updownarrow" ? (a = 8657, s = 8214, l = 8659) : t === "[" || t === "\\lbrack" ? (a = 9121, s = 9122, l = 9123, c = "Size4-Regular") : t === "]" || t === "\\rbrack" ? (a = 9124, s = 9125, l = 9126, c = "Size4-Regular") : t === "\\lfloor" || t === "\u230A" ? (s = a = 9122, l = 9123, c = "Size4-Regular") : t === "\\lceil" || t === "\u2308" ? (a = 9121, s = l = 9122, c = "Size4-Regular") : t === "\\rfloor" || t === "\u230B" ? (s = a = 9125, l = 9126, c = "Size4-Regular") : t === "\\rceil" || t === "\u2309" ? (a = 9124, s = l = 9125, c = "Size4-Regular") : t === "(" || t === "\\lparen" ? (a = 9115, s = 9116, l = 9117, c = "Size4-Regular") : t === ")" || t === "\\rparen" ? (a = 9118, s = 9119, l = 9120, c = "Size4-Regular") : t === "\\{" || t === "\\lbrace" ? (a = 9127, n = 9128, l = 9129, s = 9130, c = "Size4-Regular") : t === "\\}" || t === "\\rbrace" ? (a = 9131, n = 9132, l = 9133, s = 9130, c = "Size4-Regular") : t === "\\lgroup" || t === "\u27EE" ? (a = 9127, l = 9129, s = 9130, c = "Size4-Regular") : t === "\\rgroup" || t === "\u27EF" ? (a = 9131, l = 9133, s = 9130, c = "Size4-Regular") : t === "\\lmoustache" || t === "\u23B0" ? (a = 9127, l = 9133, s = 9130, c = "Size4-Regular") : t === "\\rmoustache" || t === "\u23B1" ? (a = 9131, l = 9129, s = 9130, c = "Size4-Regular") : t === "\\surd" ? (a = 57345, l = 9143, s = 57344, c = "Size4-Regular") : t === "\\ulcorner" ? (a = 9484, s = l = 32) : t === "\\urcorner" ? (a = 9488, s = l = 32) : t === "\\llcorner" ? (l = 9492, s = a = 32) : t === "\\lrcorner" && (a = 9496, s = a = 32);
      let u = Ot(a, c),
        d = u.height + u.depth,
        m = Ot(s, c),
        h = m.height + m.depth,
        f = Ot(l, c),
        y = f.height + f.depth,
        w = 0,
        k = 1;
      if (n !== null) {
        let _e = Ot(n, c);
        w = _e.height + _e.depth, k = 2
      }
      let S = d + y + w,
        T = Math.max(0, Math.ceil((e - S) / (k * h))),
        L = S + T * k * h,
        D = ze;
      r && (D = D * i.scalingFactor);
      let M = L / 2 - D,
        R = .008,
        F = [];
      F.push({
        box: new v(l, {
          fontFamily: c
        })
      }), F.push(-R);
      let Le = new v(s, {
        fontFamily: c
      });
      if (n === null)
        for (let _e = 0; _e < T; _e++) F.push({
          box: Le
        });
      else {
        for (let _e = 0; _e < T; _e++) F.push({
          box: Le
        });
        F.push(-R), F.push({
          box: new v(n, {
            fontFamily: c
          })
        }), F.push(-R);
        for (let _e = 0; _e < T; _e++) F.push({
          box: Le
        })
      }
      F.push(-R), F.push({
        box: new v(a, {
          fontFamily: c
        })
      });
      let Pe = "";
      c === "Size1-Regular" ? Pe = " delim-size1" : c === "Size4-Regular" && (Pe = " delim-size4");
      let vt = new Q({
        bottom: M,
        children: F
      }, {
        classes: Pe
      });
      return new v(vt, P(b({}, o != null ? o : {}), {
        classes: ((Jt = o == null ? void 0 : o.classes) != null ? Jt : "") + " ML__delim-mult"
      }))
    }
    var $n = new Set(["(", ")", "\\lparen", "\\rparen", "[", "]", "\\lbrack", "\\rbrack", "\\{", "\\}", "\\lbrace", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "\\surd", "\u230A", "\u230B", "\u2308", "\u2309"]),
      Vl = new Set(["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\mvert", "\\mid", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache", "\u27EE", "\u27EF", "\u23B0", "\u23B1"]),
      Vn = new Set(["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"]),
      Hl = [0, 1.2, 1.8, 2.4, 3];

    function Hn(t, e, r, i) {
      var o;
      return t === void 0 || t === "." ? Rt(r, (o = i.type) != null ? o : "minner", i.classes) : (t === "<" || t === "\\lt" || t === "\u27E8" ? t = "\\langle" : (t === ">" || t === "\\gt" || t === "\u27E9") && (t = "\\rangle"), $n.has(t) || Vn.has(t) ? In(t, e, !1, r, i) : Vl.has(t) ? qn(t, Hl[e], !1, r, i) : ("" + t, null))
    }
    var Gl = [{
        type: "small",
        mathstyle: "scriptscriptstyle"
      }, {
        type: "small",
        mathstyle: "scriptstyle"
      }, {
        type: "small",
        mathstyle: "textstyle"
      }, {
        type: "large",
        size: 1
      }, {
        type: "large",
        size: 2
      }, {
        type: "large",
        size: 3
      }, {
        type: "large",
        size: 4
      }],
      Jl = [{
        type: "small",
        mathstyle: "scriptscriptstyle"
      }, {
        type: "small",
        mathstyle: "scriptscriptstyle"
      }, {
        type: "small",
        mathstyle: "textstyle"
      }, {
        type: "stack"
      }],
      Wl = [{
        type: "small",
        mathstyle: "scriptscriptstyle"
      }, {
        type: "small",
        mathstyle: "scriptstyle"
      }, {
        type: "small",
        mathstyle: "textstyle"
      }, {
        type: "large",
        size: 1
      }, {
        type: "large",
        size: 2
      }, {
        type: "large",
        size: 3
      }, {
        type: "large",
        size: 4
      }, {
        type: "stack"
      }];

    function Ul(t) {
      return t.type === "small" ? "Main-Regular" : t.type === "large" ? "Size" + t.size + "-Regular" : (t.type, "Size4-Regular")
    }

    function jl(t, e, r, i) {
      let o = {
        "-4": 0,
        "-3": 1,
        0: 2
      } [i.mathstyle.sizeDelta];
      for (let a = o; a < r.length && r[a].type !== "stack"; a++) {
        let n = Ot(t, Ul(r[a]));
        if (n.defaultMetrics) return {
          type: "small",
          mathstyle: "scriptstyle"
        };
        let s = n.height + n.depth;
        if (r[a].type === "small" && (r[a].mathstyle === "scriptscriptstyle" ? s *= di[Math.max(1, i.size - 2)] : r[a].mathstyle === "scriptstyle" && (s *= di[Math.max(1, i.size - 1)])), s > e) return r[a]
      }
      return r[r.length - 1]
    }

    function Gr(t, e, r, i, o, a) {
      var c;
      if (!e || e.length === 0 || e === ".") return Rt(o, t, t);
      e === "<" || e === "\\lt" ? e = "\\langle" : (e === ">" || e === "\\gt") && (e = "\\rangle");
      let n;
      Vn.has(e) ? n = Gl : $n.has(e) ? n = Wl : n = Jl;
      let s = jl(oo(e), r, n, o),
        l = new E(o, a == null ? void 0 : a.style, s.mathstyle);
      return s.type === "small" ? $l(e, l, i, {
        type: t,
        classes: "ML__small-delim " + ((c = a == null ? void 0 : a.classes) != null ? c : "")
      }) : s.type === "large" ? In(e, s.size, i, l, P(b({}, a), {
        type: t
      })) : (s.type, qn(e, r, i, l, P(b({}, a), {
        type: t
      })))
    }

    function vr(t, e, r, i, o, a) {
      if (e === ".") return Rt(o, t, a == null ? void 0 : a.classes);
      let n = ze * o.scalingFactor,
        s = 901,
        l = 5 / Xt,
        c = Math.max(r - n, i + n),
        u = Math.max(c / 500 * s, 2 * c - l);
      return Gr(t, e, u, !0, o, a)
    }

    function Rt(t, e, r) {
      let i = new E(t, void 0, "textstyle");
      return new v(null, {
        classes: " nulldelimiter " + (r != null ? r : ""),
        type: e
      }).wrap(i)
    }
    var be = class extends g {
      constructor(r, i, o) {
        var a, n, s, l;
        super("overunder", i, {
          command: r,
          serialize: o.serialize,
          style: o.style
        });
        this.skipBoundary = (a = o.skipBoundary) != null ? a : !0, this.subsupPlacement = o.supsubPlacement, this.body = o.body, this.svgAbove = o.svgAbove, this.svgBelow = o.svgBelow, this.svgBody = o.svgBody, this.above = o.above, this.below = o.below, this.boxType = (n = o.boxType) != null ? n : "mord", this.paddedBody = (s = o.paddedBody) != null ? s : !1, this.paddedLabels = (l = o.paddedLabels) != null ? l : !1
      }
      static fromJson(r, i) {
        return new be(r.command, i, r)
      }
      toJson() {
        let r = {};
        return this.skipBoundary || (r.skipBoundary = !1), this.subsupPlacement && (r.subsupPlacement = this.subsupPlacement), this.svgAbove && (r.svgAbove = this.svgAbove), this.svgBelow && (r.svgBelow = this.svgBelow), this.svgBody && (r.svgBody = this.svgBody), this.boxType !== "mord" && (r.boxType = this.boxType), this.paddedBody && (r.paddedBody = !0), this.paddedLabels && (r.paddedLabels = !0), b(b({}, super.toJson()), r)
      }
      render(r) {
        let i = this.svgBody ? Fr(this.svgBody) : g.createBox(r, this.body, {
            newList: !0
          }),
          o = new E(r, this.style, "scriptstyle"),
          a = null;
        this.svgAbove ? a = Fr(this.svgAbove) : this.above && (a = g.createBox(o, this.above, {
          newList: !0
        }));
        let n = null;
        this.svgBelow ? n = Fr(this.svgBelow) : this.below && (n = g.createBox(o, this.below, {
          newList: !0
        })), this.paddedBody && (i = new v([Rt(r, "mopen"), i, Rt(r, "mclose")], {
          newList: !0
        }));
        let s = Xl(r, {
          base: i,
          above: a,
          below: n,
          type: this.boxType === "mbin" || this.boxType === "mrel" ? this.boxType : "mord",
          paddedAboveBelow: this.paddedLabels
        });
        return s ? (this.subsupPlacement === "over-under" ? s = this.attachLimits(r, {
          base: s,
          type: s.type
        }) : s = this.attachSupsub(r, {
          base: s
        }), this.caret && (s.caret = this.caret), this.bind(r, s)) : null
      }
    };

    function Xl(t, e) {
      if (!e.base) return null;
      if (!e.above && !e.below) {
        let s = new v(e.base, {
          type: e.type
        });
        return s.setStyle("position", "relative"), s
      }
      let r = 0;
      e.above && (r = -e.above.depth + t.metrics.bigOpSpacing2);
      let i = null,
        o = e.base,
        a = 0,
        n = ["ML__center"];
      if (e.paddedAboveBelow && n.push("ML__label_padding"), e.below && e.above) {
        let s = t.metrics.bigOpSpacing5 + e.below.height + e.below.depth + o.depth + a;
        i = new Q({
          bottom: s,
          children: [t.metrics.bigOpSpacing5, {
            box: e.below,
            classes: n
          }, {
            box: o,
            classes: ["ML__center"]
          }, r, {
            box: e.above,
            classes: n
          }, t.metrics.bigOpSpacing5]
        })
      } else e.below ? i = new Q({
        top: o.height - a,
        children: [t.metrics.bigOpSpacing5, {
          box: e.below,
          classes: n
        }, {
          box: o,
          classes: ["ML__center"]
        }]
      }) : e.above && (i = new Q({
        bottom: o.depth + a,
        children: [{
          box: o,
          classes: ["ML__center"]
        }, r, {
          box: e.above,
          classes: n
        }, t.metrics.bigOpSpacing5]
      }));
      return new v(i, {
        type: e.type
      })
    }
    var Gn = {
      acute: 714,
      grave: 715,
      dot: 729,
      ddot: 168,
      mathring: 730,
      tilde: 126,
      bar: 713,
      breve: 728,
      check: 711,
      hat: 94,
      vec: 8407
    };
    x(Object.keys(Gn), "{body:auto}", {
      createAtom: (t, e, r, i) => new Lt(t, e[0], i, {
        accentChar: Gn[t.slice(1)],
        style: r
      })
    });
    x(["widehat", "widecheck", "widetilde"], "{body:auto}", {
      createAtom: (t, e, r, i) => {
        let o = Qo(e[0]);
        return new Lt(t, e[0], i, {
          style: r,
          svgAccent: t.slice(1) + (o.length > 5 ? "4" : ["1", "1", "2", "2", "3", "3"][o.length])
        })
      }
    });
    x(["overarc", "overparen", "wideparen"], "{body:auto}", {
      createAtom: (t, e, r, i) => new Lt(t, e[0], i, {
        style: r,
        svgAccent: "overarc"
      })
    });
    x(["underarc", "underparen"], "{body:auto}", {
      createAtom: (t, e, r, i) => new be(t, i, {
        body: e[0],
        style: r,
        svgBelow: "underarc"
      })
    });
    x("utilde", "{body:auto}", {
      createAtom: (t, e, r, i) => {
        let o = Qo(e[0]),
          a = "widetilde" + (o.length > 5 ? "4" : ["1", "1", "2", "2", "3", "3"][o.length]);
        return new be(t, i, {
          body: e[0],
          svgBelow: a,
          style: r,
          boxType: $r(e[0])
        })
      }
    });
    x("^", "{:string}", {
      createAtom: (t, e, r, i) => {
        var o;
        return new g("mord", i, {
          command: t,
          isFunction: !1,
          limits: "adjacent",
          style: r,
          value: e[0] && (o = {
            a: "\xE2",
            e: "\xEA",
            i: "\xEE",
            o: "\xF4",
            u: "\xFB",
            A: "\xC2",
            E: "\xCA",
            I: "\xCE",
            O: "\xD4",
            U: "\xDB"
          } [e[0]]) != null ? o : "^"
        })
      }
    });
    x("`", "{:string}", {
      createAtom: (t, e, r, i) => {
        var o;
        return new g("mord", i, {
          command: t,
          isFunction: !1,
          limits: "adjacent",
          style: r,
          value: e[0] && (o = {
            a: "\xE0",
            e: "\xE8",
            i: "\xEC",
            o: "\xF2",
            u: "\xF9",
            A: "\xC0",
            E: "\xC8",
            I: "\xCC",
            O: "\xD2",
            U: "\xD9"
          } [e[0]]) != null ? o : "`"
        })
      }
    });
    x("'", "{:string}", {
      createAtom: (t, e, r, i) => {
        var o;
        return new g("mord", i, {
          command: t,
          isFunction: !1,
          limits: "adjacent",
          style: r,
          value: e[0] && (o = {
            a: "\xE1",
            e: "\xE9",
            i: "\xED",
            o: "\xF3",
            u: "\xFA",
            A: "\xC1",
            E: "\xC9",
            I: "\xCD",
            O: "\xD3",
            U: "\xDA"
          } [e[0]]) != null ? o : "^"
        })
      }
    });
    x("~", "{:string}", {
      createAtom: (t, e, r, i) => {
        var o;
        return new g("mord", i, {
          command: t,
          isFunction: !1,
          limits: "adjacent",
          style: r,
          value: e[0] && (o = {
            n: "\xF1",
            N: "\xD1",
            a: "\xE3",
            o: "\xF5",
            A: "\xC3",
            O: "\xD5"
          } [e[0]]) != null ? o : "\xB4"
        })
      }
    });
    x("c", "{:string}", {
      createAtom: (t, e, r, i) => {
        var o;
        return new g("mord", i, {
          command: t,
          isFunction: !1,
          limits: "adjacent",
          style: r,
          value: e[0] && (o = {
            c: "\xE7",
            C: "\xC7"
          } [e[0]]) != null ? o : ""
        })
      }
    });
    var tr = class extends g {
      constructor(e, r) {
        super("error", r, {
          value: e,
          command: e,
          mode: "math"
        }), this.verbatimLatex = e
      }
      static fromJson(e, r) {
        return new tr(e.command, r)
      }
      toJson() {
        return super.toJson()
      }
      render(e) {
        let r = this.createBox(e, {
          classes: "ML__error"
        });
        return this.caret && (r.caret = this.caret), r
      }
    };
    var se = class extends g {
      constructor(r, i, o) {
        var a, n, s, l;
        super("group", i, {
          command: o == null ? void 0 : o.command,
          mode: (a = o == null ? void 0 : o.mode) != null ? a : "math",
          serialize: o == null ? void 0 : o.serialize,
          style: o == null ? void 0 : o.style
        });
        this.body = r, this.mathstyleName = o == null ? void 0 : o.mathstyleName, !(o != null && o.serialize) || !(o != null && o.latexClose) || o != null && o.latexOpen, (n = o == null ? void 0 : o.command) != null, this.latexOpen = o == null ? void 0 : o.latexOpen, this.latexClose = o == null ? void 0 : o.latexClose, this.cssId = o == null ? void 0 : o.cssId, this.htmlData = o == null ? void 0 : o.htmlData, this.htmlStyle = o == null ? void 0 : o.htmlStyle, this.customClass = o == null ? void 0 : o.customClass, this.boxType = o == null ? void 0 : o.boxType, this.skipBoundary = !0, this.captureSelection = (s = o == null ? void 0 : o.captureSelection) != null ? s : !1, this.changeMode = (l = o == null ? void 0 : o.changeMode) != null ? l : !1, this.displayContainsHighlight = !1, r && r.length === 1 && r[0].command === "," && (this.captureSelection = !0)
      }
      static fromJson(r, i) {
        return new se(r.body, i, r)
      }
      toJson() {
        let r = {};
        return this.mathstyleName && (r.mathstyleName = this.mathstyleName), this.latexOpen && (r.latexOpen = this.latexOpen), this.latexClose && (r.latexClose = this.latexClose), this.cssId && (r.cssId = this.cssId), this.htmlData && (r.htmlData = this.htmlData), this.htmlStyle && (r.htmlStyle = this.htmlStyle), this.customClass && (r.customClass = this.customClass), this.boxType && (r.boxType = this.boxType), this.captureSelection && (r.captureSelection = !0), this.changeMode && (r.changeMode = !0), b(b({}, super.toJson()), r)
      }
      render(r) {
        let i = new E(r, this.style, this.mathstyleName),
          o = g.createBox(i, this.body, {
            type: this.boxType,
            classes: this.customClass,
            mode: this.mode,
            style: {
              backgroundColor: this.style.backgroundColor
            },
            newList: !this.boxType
          });
        return o ? (this.cssId && (o.cssId = this.cssId), this.htmlData && (o.htmlData = this.htmlData), this.htmlStyle && (o.htmlStyle = this.htmlStyle), this.caret && (o.caret = this.caret), this.bind(r, o)) : null
      }
      serialize(r) {
        let i = this.bodyToLatex(r);
        return typeof this.latexOpen == "string" && (i = this.latexOpen + i + this.latexClose), this.htmlData && (i = `\\htmlData{${this.htmlData}}{${i}}`), this.htmlStyle && (i = `\\htmlStyle{${this.htmlStyle}}{${i}}`), this.customClass && (i = `\\class{${this.customClass}}{${i}}`), this.cssId && (i = `\\cssId{${this.cssId}}{${i}}`), i
      }
    };
    var ie = class extends g {
      constructor(r, i, o, a) {
        super("leftright", o, {
          style: a.style,
          displayContainsHighlight: !0
        });
        this.variant = r, this.body = i, this.leftDelim = a.leftDelim, this.rightDelim = a.rightDelim
      }
      static fromJson(r, i) {
        var o;
        return new ie((o = r.variant) != null ? o : "", r.body, i, r)
      }
      toJson() {
        let r = super.toJson();
        return this.variant && (r.variant = this.variant), this.leftDelim && (r.leftDelim = this.leftDelim), this.rightDelim && (r.rightDelim = this.rightDelim), r
      }
      serialize(r) {
        var o, a;
        let i = this.matchingRightDelim();
        return this.variant === "left...right" ? U(["\\left" + ((o = this.leftDelim) != null ? o : "."), this.bodyToLatex(r), "\\right" + i]) : this.variant === "mleft...mright" ? U(["\\mleft" + ((a = this.leftDelim) != null ? a : "."), this.bodyToLatex(r), "\\mright" + i]) : U([!this.leftDelim || this.leftDelim === "." ? "" : this.leftDelim, this.bodyToLatex(r), i])
      }
      matchingRightDelim() {
        var i, o;
        if (this.rightDelim && this.rightDelim !== "?") return this.rightDelim;
        let r = (i = this.leftDelim) != null ? i : ".";
        return (o = er[r]) != null ? o : r
      }
      render(r) {
        var d, m, h;
        let i = new E(r, this.style);
        this.body;
        let o = new E(r, this.style, "textstyle"),
          a = (d = g.createBox(i, this.body, {
            newList: !0
          })) != null ? d : new v(null, {
            newList: !0
          }),
          n = a.height / o.scalingFactor,
          s = a.depth / o.scalingFactor,
          l = [];
        if (this.leftDelim && l.push(this.bind(o, vr("mopen", this.leftDelim, n, s, o, {
            classes: "ML__open" + (this.containsCaret ? " ML__contains-caret" : ""),
            mode: this.mode,
            style: this.style
          }))), a) {
          if (a.children)
            for (let f = 0; f < a.children.length; f++) {
              let y = a.children[f];
              if (y.delim) {
                let w = y.caret;
                a.children[f] = this.bind(i, vr("minner", y.delim, n, s, i)), a.children[f].caret = w
              }
            }
          l.push(a)
        }
        if (this.rightDelim) {
          let f = this.containsCaret ? " ML__contains-caret" : "",
            y = this.rightDelim;
          y === "?" && (this.context.smartFence ? (y = this.matchingRightDelim(), f += " ML__smart-fence__close") : y = "."), l.push(this.bind(o, vr("mclose", y, n, s, o, {
            classes: f + " ML__close",
            mode: this.mode,
            style: this.style
          })))
        }
        let c = (h = this.variant === "mleft...mright" || ((m = this.leftSibling) == null ? void 0 : m.isFunction)) != null ? h : !1,
          u = new v(l, {
            type: c ? "mclose" : "minner",
            classes: "left-right"
          });
        return this.caret && (u.caret = this.caret), this.bind(i, u.wrap(i))
      }
    };
    var rr = class extends g {
      constructor(r, i, o) {
        var a, n;
        super("macro", i, {
          command: r
        });
        this.body = o.body, o.captureSelection === void 0 ? o.args ? this.captureSelection = !1 : this.captureSelection = !0 : this.captureSelection = o.captureSelection, this.macroArgs = (a = o.args) != null ? a : "", this.expand = (n = o.expand) != null ? n : !1
      }
      static fromJson(r, i) {
        return new rr(r.command, i, r)
      }
      toJson() {
        let r = super.toJson();
        return this.expand && (r.expand = !0), this.captureSelection !== void 0 && (r.captureSelection = this.captureSelection), this.macroArgs && (r.args = this.macroArgs), r
      }
      serialize(r) {
        return r.expandMacro && this.expand ? this.bodyToLatex(r) : this.command + this.macroArgs
      }
      render(r) {
        let i = g.createBox(r, this.body);
        return i ? (this.caret && (i.caret = this.caret), this.bind(r, i)) : null
      }
    };
    var ir = class extends g {
      constructor(r, i, o, a = !1, n, s) {
        var l;
        super("prompt", r, {
          mode: (l = s == null ? void 0 : s.mode) != null ? l : "math",
          style: s == null ? void 0 : s.style,
          command: "\\placeholder"
        });
        this.body = n, this.correctness = o, this.placeholderId = i, this.locked = a, this.captureSelection = this.locked
      }
      static fromJson(r, i) {
        return new ir(i, r.placeholderId, r.correctness, r.locked, r.body, r)
      }
      toJson() {
        let r = super.toJson();
        return this.placeholderId && (r.placeholderId = this.placeholderId), this.body || delete r.body, this.body && (r.body = this.body.filter(i => i.type !== "first").map(i => i.toJson())), this.correctness && (r.correctness = this.correctness), r.locked = this.locked, r
      }
      render(r) {
        let i = new E(r),
          o = Ae(i.getRegisterAsDimension("fboxsep")),
          a = o,
          n = g.createBox(r, this.body);
        if (!n) return null;
        n.height || (n.height = .5), n.setStyle("vertical-align", -n.height, "em"), this.correctness === "correct" ? n.setStyle("color", "var(--correct-color, var(--ML__correct-color))") : this.correctness === "incorrect" && n.setStyle("color", "var(--incorrect-color, var(--ML__incorrect-color))");
        let s = new v(n, {
            type: "mord"
          }),
          l = "ML__prompt ";
        this.locked ? l += " ML__lockedPromptBox " : l += " ML__editablePromptBox ", this.correctness === "correct" ? l += " ML__correctPromptBox " : this.correctness === "incorrect" && (l += " ML__incorrectPromptBox "), this.containsCaret && (l += " ML__focusedPromptBox ");
        let c = new v(null, {
          classes: l
        });
        c.height = s.height + a, c.depth = s.depth + a, c.setStyle("box-sizing", "border-box"), c.setStyle("position", "absolute"), c.setStyle("height", s.height + s.depth + 2 * a, "em"), a === 0 ? c.setStyle("width", "100%") : (c.setStyle("width", `calc(100% + ${2*a}em)`), c.setStyle("top", o, "em"), c.setStyle("left", -a, "em"));
        let u = "";
        this.correctness === "incorrect" && (u += '<line x1="3%"  y1="97%" x2="97%" y2="3%" stroke-width="0.5" stroke="var(--incorrect-color, var(--ML__incorrect-color))" stroke-linecap="round" />'), u && Ji(c, u, ""), s.setStyle("display", "inline-block"), s.setStyle("height", n.height + n.depth, "em"), s.setStyle("vertical-align", -a, "em");
        let d = new v([c, s], {
          classes: "ML__prompt-atom"
        });
        return d.setStyle("position", "relative"), d.setStyle("display", "inline-block"), d.setStyle("line-height", 0), d.height = s.height + a + .2, d.depth = s.depth + a, d.left = a, d.right = a, d.setStyle("height", s.height + a, "em"), d.setStyle("top", s.depth - s.height, "em"), d.setStyle("vertical-align", s.depth + a, "em"), d.setStyle("margin-left", .5, "em"), d.setStyle("margin-right", .5, "em"), this.caret && (d.caret = this.caret), this.bind(i, this.attachSupsub(r, {
          base: d
        }))
      }
      serialize(r) {
        var s;
        let i = (s = this.bodyToLatex(r)) != null ? s : "";
        i === this.context.placeholderSymbol && (i = "");
        let o = this.placeholderId ? `[${this.placeholderId}]` : "",
          a;
        this.correctness === "correct" ? a = "[correct]" : this.correctness === "incorrect" ? a = "[incorrect]" : a = "";
        let n = this.locked ? "[locked]" : "";
        return `\\placeholder${o}${a}${n}{${i}}`
      }
    };
    var re = class extends g {
      constructor(r, i) {
        var a;
        let o = (i == null ? void 0 : i.value) || r.placeholderSymbol;
        super("placeholder", r, {
          mode: (a = i == null ? void 0 : i.mode) != null ? a : "math",
          style: i == null ? void 0 : i.style,
          value: o,
          command: "\\placeholder"
        });
        this.captureSelection = !0
      }
      static fromJson(r, i) {
        return new re(i, r)
      }
      toJson() {
        let r = super.toJson();
        return this.value === this.context.placeholderSymbol && delete r.value, this.defaultValue && (r.defaultValue = this.defaultValue.map(i => i.toJson())), r
      }
      render(r) {
        if (typeof r.renderPlaceholder == "function") return r.renderPlaceholder(r);
        let i = "";
        return this.caret && (i += "ML__placeholder-selected "), this.isSelected && (i += " ML__selected "), this.createBox(r, {
          classes: i
        })
      }
      serialize(r) {
        let i = this.value;
        return i === this.context.placeholderSymbol && (i = ""), `\\placeholder{${this.value}}`
      }
    };
    var Ge = class extends g {
      constructor(r, i, o, a) {
        super("spacing", o, {
          command: r,
          style: i
        });
        this.width = a
      }
      static fromJson(r, i) {
        return new Ge(r.command, r.style, i, r.width)
      }
      toJson() {
        let r = {};
        return this.width && (r.width = this.width), b(b({}, super.toJson()), r)
      }
      render(r) {
        var o;
        let i;
        if (this.width) i = new v(null, {
          classes: "mspace"
        }), i.left = Nn(this.width);
        else {
          let a = (o = {
            "\\qquad": "qquad",
            "\\quad": "quad",
            "\\enspace": "enspace",
            "\\;": "thickspace",
            "\\:": "mediumspace",
            "\\,": "thinspace",
            "\\!": "negativethinspace"
          } [this.command]) != null ? o : "mediumspace";
          i = new v(null, {
            classes: a
          })
        }
        return i = this.bind(r, i), this.caret && (i.caret = this.caret), i
      }
      serialize(r) {
        var o;
        let i = (o = this.command) != null ? o : "";
        return this.command === "\\hspace" || this.command === "\\hspace*" ? Number.isFinite(this.width) ? i += `{${this.width}em'}` : i += "{0pt}" : Number.isFinite(this.width) && (i += ` ${this.width}em`), i
      }
    };
    var ft = class extends g {
      constructor(e, r) {
        super("msubsup", e, {
          style: r == null ? void 0 : r.style
        })
      }
      static fromJson(e, r) {
        let i = new ft(r, e);
        for (let o of zt) e[o] && i.setChildren(e[o], o);
        return i
      }
      toJson() {
        return super.toJson()
      }
      render(e) {
        var n;
        this.subsupPlacement;
        let r = this.leftSibling,
          i = new E(e, {
            isPhantom: !0
          }),
          o = (n = r.render(i)) != null ? n : new v(null),
          a = new v(null, {
            height: o.height,
            depth: o.depth
          });
        return this.attachSupsub(e, {
          base: a,
          isCharacterBox: r.isCharacterBox(),
          type: "supsub"
        })
      }
      serialize(e) {
        return this.supsubToLatex(e)
      }
    };
    var Je = class extends g {
      constructor(e, r, i, o) {
        super("text", o, {
          command: e,
          mode: "text",
          displayContainsHighlight: !0
        }), this.value = r, this.verbatimLatex = r, this.applyStyle(i)
      }
      static fromJson(e, r) {
        return new Je(e.command, e.value, e.style, r)
      }
      toJson() {
        return super.toJson()
      }
      render(e) {
        let r = this.createBox(e);
        return this.caret && (r.caret = this.caret), r
      }
      serialize(e) {
        var r;
        return (r = this.verbatimLatex) != null ? r : pi("text", this.value.codePointAt(0))
      }
    };

    function ao(t) {
      return !/^<({|}|\$|\$\$|space)>$/.test(t)
    }
    var Jr = class {
      constructor(e, r, i) {
        this.index = 0;
        this.endCount = 0;
        var o, a, n, s, l;
        this.tokens = e, this.context = r, this.errors = [], this.args = (o = i.args) != null ? o : null, this.smartFence = (a = i.smartFence) != null ? a : r.smartFence, this._currentParsingContext = {
          parent: void 0,
          mathlist: [],
          style: (n = i.style) != null ? n : {},
          parseMode: (s = i.parseMode) != null ? s : "math",
          mathstyle: (l = i.mathstyle) != null ? l : "displaystyle",
          registers: r.registers,
          tabular: !1
        }
      }
      get currentContext() {
        return this._currentParsingContext
      }
      get rootContext() {
        let e = this._currentParsingContext;
        for (; e.parent;) e = e.parent;
        return e
      }
      beginContext(e) {
        var i, o, a;
        let r = {
          parent: this.currentContext,
          mathlist: [],
          style: b({}, this.currentContext.style),
          parseMode: (i = e == null ? void 0 : e.mode) != null ? i : this.currentContext.parseMode,
          mathstyle: (o = e == null ? void 0 : e.mathstyle) != null ? o : this.currentContext.mathstyle,
          registers: null,
          tabular: (a = e == null ? void 0 : e.tabular) != null ? a : !1
        };
        this._currentParsingContext = r
      }
      endContext() {
        this._currentParsingContext = this._currentParsingContext.parent
      }
      onError(e) {
        this.errors.push(b({
          before: Nr(this.tokens.slice(this.index, this.index + 10)),
          after: Nr(this.tokens.slice(Math.max(0, this.index - 10), this.index))
        }, e))
      }
      get mathlist() {
        return this.currentContext.mathlist
      }
      set mathlist(e) {
        this.currentContext.mathlist = e
      }
      get parseMode() {
        return this.currentContext.parseMode
      }
      set parseMode(e) {
        this.currentContext.parseMode = e
      }
      get tabularMode() {
        return this.currentContext.tabular
      }
      get style() {
        let e = this.currentContext;
        for (; e;) {
          if (e.style) return e.style;
          e = e.parent
        }
        return {}
      }
      set style(e) {
        this.currentContext.style = e
      }
      getRegister(e) {
        var i, o, a;
        if (e[0], e.startsWith("global ")) return (o = (i = this.rootContext.registers) == null ? void 0 : i[e.slice(7)]) != null ? o : 0;
        let r = this.currentContext;
        for (; r;) {
          if ((a = r.registers) != null && a[e]) return r.registers[e];
          r = r.parent
        }
        return 0
      }
      setRegister(e, r) {
        var i;
        if (e.startsWith("global ")) {
          e = e.slice(7);
          let o = this.currentContext;
          for (; o;)(i = o.registers) != null && i[e] && delete o.registers[e], o = o.parent;
          this.rootContext.registers[e] = r;
          return
        }
        this.currentContext.registers || (this.currentContext.registers = {}), this.currentContext.registers[e] = r
      }
      end() {
        return this.endCount++, this.index >= this.tokens.length || this.endCount > 1e3
      }
      get() {
        return this.endCount = 0, this.index < this.tokens.length ? this.tokens[this.index++] : ""
      }
      peek() {
        return this.tokens[this.index]
      }
      match(e) {
        return this.tokens[this.index] === e ? (this.index++, !0) : !1
      }
      lastSubsupAtom() {
        let e;
        return this.mathlist.length > 0 && (e = this.mathlist[this.mathlist.length - 1], e.type === "msubsup" || e.subsupPlacement !== void 0) || (e = new ft(this.context, {
          style: this.style
        }), this.mathlist.push(e)), e
      }
      hasPattern(e) {
        return e.test(this.tokens[this.index])
      }
      hasInfixCommand() {
        var r;
        let {
          index: e
        } = this;
        if (e < this.tokens.length && this.tokens[e].startsWith("\\")) {
          let i = this.context.getDefinition(this.tokens[e], this.parseMode);
          return !i || i.definitionType === "symbol" || i.ifMode && !i.ifMode.includes(this.parseMode) ? !1 : (r = i.infix) != null ? r : !1
        }
        return !1
      }
      matchColumnSeparator() {
        let {
          index: e
        } = this;
        return this.tabularMode && this.tokens[e] === "&" ? (this.index++, !0) : !1
      }
      matchRowSeparator() {
        let {
          index: e
        } = this;
        return this.tabularMode && (this.tokens[e] === "\\\\" || this.tokens[e] === "\\cr") ? (this.index++, !0) : !1
      }
      placeholder() {
        var r;
        let e = (r = this.args) == null ? void 0 : r.call(this, "?");
        return e ? he(e, this.context, {
          parseMode: this.parseMode,
          mathstyle: "textstyle"
        }) : [new re(this.context, {
          mode: this.parseMode,
          style: this.style
        })]
      }
      matchWhitespace() {
        let e = !1;
        for (; this.match("<space>");) e = !0;
        return e
      }
      skipUntilToken(e) {
        let r = this.tokens[this.index];
        for (; r && r !== e;) r = this.tokens[++this.index];
        r === e && this.index++
      }
      skipFiller() {
        let e = !1;
        do {
          let r = this.matchWhitespace(),
            i = this.match("\\relax");
          e = !r && !i
        } while (!e)
      }
      matchKeyword(e) {
        let r = this.index,
          i = this.end(),
          o = "";
        for (; !i;) {
          let n = this.get();
          ao(n) ? (o += n, i = this.end() || o.length >= e.length) : i = !0
        }
        let a = e.toUpperCase() === o.toUpperCase();
        return a || (this.index = r), a
      }
      scanString() {
        let e = "";
        for (; !this.end();)
          if (this.match("<space>")) e += " ";
          else {
            let r = this.peek();
            if (r === "]") break;
            if (ao(r)) e += this.get();
            else if (r.startsWith("\\")) this.onError({
              code: "unbalanced-braces"
            }), e += this.get();
            else break
          } return e
      }
      scanBalancedString() {
        let e = "",
          r = this.end(),
          i = 1;
        for (; !r;) {
          if (this.match("<space>")) e += " ";
          else {
            let o = this.get();
            o === "<{>" ? (e += "{", i += 1) : o === "<}>" ? (i -= 1, i > 0 ? e += "}" : this.index -= 1) : o === "<$>" ? e += "$" : o === "<$$>" ? e += "$$" : e += o
          }
          r = i === 0 || this.end()
        }
        return e
      }
      matchLiteralArg() {
        var r;
        let e = "";
        if (this.match("<{>")) {
          let i = 1;
          for (; i > 0 && !this.end();) {
            let o = this.get();
            o === "<}>" ? (i -= 1, i > 0 && (e += "}")) : o === "<{>" ? (i += 1, e += "{") : e += (r = {
              "<space>": " ",
              "<$$>": "$$",
              "<$>": "$"
            } [o]) != null ? r : o
          }
        }
        return e
      }
      scanNumber(e = !0) {
        var l, c;
        let r = !1,
          i = this.peek();
        for (; i === "<space>" || i === "+" || i === "-";) this.get(), i === "-" && (r = !r), i = this.peek();
        e = !!e;
        let o = 10,
          a = /\d/;
        if (this.match("'")) o = 8, a = /[0-7]/, e = !0;
        else if (this.match('"') || this.match("x")) o = 16, a = /[\dA-F]/, e = !0;
        else if (this.match("`")) return i = this.get(), i ? i.startsWith("\\") && i.length === 2 ? (r ? -1 : 1) * ((l = i.codePointAt(1)) != null ? l : 0) : (r ? -1 : 1) * ((c = i.codePointAt(0)) != null ? c : 0) : null;
        let n = "";
        for (; this.hasPattern(a);) n += this.get();
        if (!e && (this.match(".") || this.match(",")))
          for (n += "."; this.hasPattern(a);) n += this.get();
        let s = e ? Number.parseInt(n, o) : Number.parseFloat(n);
        return Number.isNaN(s) ? null : r ? -s : s
      }
      scanDimen() {
        var i, o, a;
        let e = this.scanNumber(!1);
        if (e === null)
          if ((i = this.peek()) != null && i.startsWith("\\")) e = 1;
          else return null;
        this.matchWhitespace();
        let r;
        return this.matchKeyword("pt") ? r = {
          dimension: e,
          unit: "pt"
        } : this.matchKeyword("mm") ? r = {
          dimension: e,
          unit: "mm"
        } : this.matchKeyword("cm") ? r = {
          dimension: e,
          unit: "cm"
        } : this.matchKeyword("ex") ? r = {
          dimension: e,
          unit: "ex"
        } : this.matchKeyword("px") ? r = {
          dimension: e,
          unit: "px"
        } : this.matchKeyword("em") ? r = {
          dimension: e,
          unit: "em"
        } : this.matchKeyword("bp") ? r = {
          dimension: e,
          unit: "bp"
        } : this.matchKeyword("dd") ? r = {
          dimension: e,
          unit: "dd"
        } : this.matchKeyword("pc") ? r = {
          dimension: e,
          unit: "pc"
        } : this.matchKeyword("in") ? r = {
          dimension: e,
          unit: "in"
        } : this.matchKeyword("mu") ? r = {
          dimension: e,
          unit: "mu"
        } : (o = this.peek()) != null && o.startsWith("\\") ? (r = (a = wr(this.getRegister(this.get().slice(1)), this.context)) != null ? a : {
          dimension: 0
        }, r.dimension *= e) : (this.match("\\relax") || this.onError({
          code: "missing-unit"
        }), r = {
          dimension: e,
          unit: "pt"
        }), r
      }
      scanGlue() {
        let e = this.scanDimen();
        if (e === null) return null;
        let r = {
          glue: e
        };
        return this.matchWhitespace(), this.match("\\relax") || (this.matchKeyword("plus") && this.scanDimen(), this.matchWhitespace(), this.match("\\relax")) || (this.matchWhitespace(), this.matchKeyword("minus") && this.scanDimen()), r
      }
      scanColspec() {
        this.matchWhitespace();
        let e = [];
        for (; !this.end() && !(this.peek() === "<}>" || this.peek() === "]");) {
          let r = this.get();
          r === "c" || r === "r" || r === "l" ? e.push({
            align: r
          }) : r === "|" ? e.push({
            separator: "solid"
          }) : r === ":" ? e.push({
            separator: "dashed"
          }) : r === "@" && (this.match("<{>") && (this.beginContext({
            mode: "math"
          }), e.push({
            gap: this.parse(i => i === "<}>")
          }), this.endContext()), this.match("<}>") || this.onError({
            code: "unbalanced-braces"
          }))
        }
        return e
      }
      parseModeSet() {
        let e = "";
        if (this.match("\\(") && (e = "\\)"), !e && this.match("\\[") && (e = "\\]"), !e) return null;
        this.beginContext({
          mode: "math",
          mathstyle: e === "\\)" ? "textstyle" : "displaystyle"
        });
        let r = new se(this.parse(i => i === e), this.context, {
          mathstyleName: e === "\\)" ? "textstyle" : "displaystyle",
          latexOpen: e === "\\]" ? "\\[" : "\\(",
          latexClose: e,
          boxType: "mord"
        });
        return this.match(e) || this.onError({
          code: "unbalanced-mode-shift"
        }), this.endContext(), r.hasEmptyBranch("body") ? null : r
      }
      parseModeShift() {
        let e = "";
        if (this.match("<$>") && (e = "<$>"), !e && this.match("<$$>") && (e = "<$$>"), !e) return null;
        this.beginContext({
          mode: "math",
          mathstyle: "textstyle"
        });
        let r = new se(this.parse(i => i === e), this.context, {
          mathstyleName: e === "<$>" ? "textstyle" : "displaystyle",
          latexOpen: e === "<$>" ? "$ " : "$$ ",
          latexClose: e === "<$>" ? " $" : " $$"
        });
        return this.match(e) || this.onError({
          code: "unbalanced-mode-shift"
        }), this.endContext(), r.hasEmptyBranch("body") ? null : r
      }
      parseEnvironment() {
        if (!this.match("\\begin")) return null;
        let e = this.parseArgument("string");
        if (!e) return null;
        let r = zn(e);
        if (!r) return this.onError({
          code: "unknown-environment",
          arg: e
        }), null;
        let i = [];
        if (r.params)
          for (let l of r.params)
            if (l.isOptional) i.push(this.parseOptionalArgument(l.type));
            else {
              let c = this.parseArgument(l.type);
              c || this.onError({
                code: "missing-argument",
                arg: e
              }), i.push(c)
            } this.beginContext({
          tabular: r.tabular
        });
        let o = [],
          a = [],
          n = [],
          s = !1;
        do
          if (this.end() && (this.onError({
              code: "unbalanced-environment",
              arg: e
            }), s = !0), !s && this.match("\\end") && (this.parseArgument("string") !== e && this.onError({
              code: "unbalanced-environment",
              arg: e
            }), s = !0), !s)
            if (this.matchColumnSeparator()) n.push(this.mathlist), this.mathlist = [];
            else if (this.matchRowSeparator()) {
          n.push(this.mathlist), this.mathlist = [];
          let l = null;
          this.matchWhitespace(), this.match("[") && (l = this.scanDimen(), this.matchWhitespace(), this.match("]")), a.push(l != null ? l : {
            dimension: 0
          }), o.push(n), n = []
        } else this.mathlist.push(...this.parse(l => l === "<}>" || l === "&" || l === "\\end" || l === "\\cr" || l === "\\\\"));
        while (!s);
        return n.push(this.mathlist), n.length > 0 && o.push(n), this.endContext(), r.createAtom(this.context, e, o, a, i)
      }
      parse(e) {
        this.beginContext(), e || (e = l => l === "<}>");
        let r = "",
          i = null,
          o = [],
          a = null,
          n = this.mathlist;
        for (this.mathlist = []; !this.end() && !e(this.peek());) this.hasInfixCommand() && !r ? (r = this.get(), i = this.context.getDefinition(r, "math"), i && (o = this.parseArguments(i)[1]), a = this.mathlist, this.mathlist = []) : this.parseToken();
        let s;
        return r ? (o.unshift(this.mathlist), this.mathlist = n, a && o.unshift(a), s = [i.createAtom(r, o, this.style, this.context)]) : (s = this.mathlist, this.mathlist = n), this.endContext(), s
      }
      parseGroup() {
        if (!this.match("<{>")) return null;
        let e = new se(this.parse(r => r === "<}>"), this.context, {
          mode: this.parseMode,
          latexOpen: "{",
          latexClose: "}"
        });
        return this.match("<}>") || this.onError({
          code: "unbalanced-braces"
        }), e
      }
      scanSmartFence() {
        if (this.matchWhitespace(), !this.match("(")) return null;
        this.beginContext();
        let e = 1;
        for (; !this.end() && e !== 0;) this.match("(") && (e += 1), this.match(")") && (e -= 1), e !== 0 && this.parseToken();
        e === 0 && this.match(")");
        let r = new ie("", this.mathlist, this.context, {
          leftDelim: "(",
          rightDelim: e === 0 ? ")" : "?"
        });
        return this.endContext(), r
      }
      scanDelim() {
        this.matchWhitespace();
        let e = this.get();
        if (!e) return this.onError({
          code: "unexpected-end-of-string"
        }), null;
        let r = ".";
        (e.startsWith("\\") || ao(e)) && (r = e);
        let i = this.context.getDefinition(r, "math");
        return i ? i.definitionType === "function" && i.ifMode && !i.ifMode.includes(this.parseMode) ? (this.onError({
          code: "unexpected-delimiter",
          arg: r
        }), null) : i.definitionType === "symbol" && (i.type === "mopen" || i.type === "mclose") || /^(\.|\?|\||<|>|\\vert|\\Vert|\\\||\\surd|\\uparrow|\\downarrow|\\Uparrow|\\Downarrow|\\updownarrow|\\Updownarrow|\\mid|\\mvert|\\mVert)$/.test(r) ? r : (this.onError({
          code: "unexpected-delimiter",
          arg: r
        }), null) : (this.onError({
          code: "unknown-command",
          arg: r
        }), null)
      }
      parseLeftRight() {
        var a;
        if (this.match("\\right") || this.match("\\mright")) return this.onError({
          code: "unbalanced-braces"
        }), null;
        let e = "\\right";
        if (!this.match("\\left")) {
          if (!this.match("\\mleft")) return null;
          e = "\\mright"
        }
        let r = this.scanDelim();
        if (!r) return null;
        for (this.beginContext(); !this.end() && !this.match(e);) this.parseToken();
        let i = this.mathlist;
        this.endContext();
        let o = (a = this.scanDelim()) != null ? a : ".";
        return new ie(e === "\\right" ? "left...right" : "mleft...mright", i, this.context, {
          leftDelim: r,
          rightDelim: o,
          style: this.style
        })
      }
      parseSupSub() {
        if (this.parseMode !== "math") return !1;
        let e = this.peek();
        if (e !== "^" && e !== "_" && e !== "'") return !1;
        for (; e === "^" || e === "_" || e === "'";) {
          if (this.match("'")) this.match("'") ? this.lastSubsupAtom().addChild(new g("mord", this.context, {
            command: "\\doubleprime",
            mode: "math",
            value: "\u2032\u2032"
          }), "superscript") : this.lastSubsupAtom().addChild(new g("mord", this.context, {
            command: "\\prime",
            mode: "math",
            value: "\u2032"
          }), "superscript");
          else if (this.match("^") || this.match("_")) {
            let r = this.parseArgument("math");
            r ? this.lastSubsupAtom().addChildren(r, e === "_" ? "subscript" : "superscript") : this.lastSubsupAtom().createBranch(e === "_" ? "subscript" : "superscript")
          }
          e = this.peek()
        }
        return !0
      }
      parseLimits() {
        let e = this.match("\\limits"),
          r = !e && this.match("\\nolimits"),
          i = !r && !e && this.match("\\displaylimits");
        if (!e && !r && !i) return !1;
        let o = this.mathlist.length > 0 ? this.mathlist[this.mathlist.length - 1] : null;
        return o === null || o.type !== "mop" ? !1 : e ? (o.subsupPlacement = "over-under", o.explicitSubsupPlacement = !0, !0) : r ? (o.subsupPlacement = "adjacent", o.explicitSubsupPlacement = !0, !0) : i ? (o.subsupPlacement = "auto", o.explicitSubsupPlacement = !0, !0) : !1
      }
      parseArguments(e) {
        if (!(e != null && e.params)) return [void 0, []];
        let r, i = [],
          o = e.infix ? 2 : 0;
        for (; o < e.params.length;) {
          let a = e.params[o];
          if (a.type === "rest") i.push(this.parse(n => n === "<}>" || n === "&" || n === "\\end" || n === "\\cr" || n === "\\\\"));
          else if (a.isOptional) i.push(this.parseOptionalArgument(a.type));
          else if (a.type.endsWith("*")) r = a.type.slice(0, -1);
          else {
            let n = this.parseArgument(a.type);
            if (n !== null) i.push(n);
            else switch (this.onError({
                code: "missing-argument"
              }), a.type) {
              case "number":
                i.push(0);
                break;
              case "dimen":
                i.push({
                  dimension: 0,
                  unit: "pt"
                });
                break;
              case "glue":
                i.push({
                  glue: {
                    dimension: 0,
                    unit: "pt"
                  }
                });
                break;
              case "string":
              case "balanced-string":
                i.push("");
                break;
              case "delim":
                i.push(".");
                break;
              case "colspec":
                i.push("llllllllll");
                break;
              case "auto":
              default:
                i.push(this.placeholder());
                break
            }
          }
          o += 1
        }
        return [r, i]
      }
      parseArgument(e) {
        var a, n;
        this.skipFiller(), e === "auto" && (e = this.parseMode);
        let r = null,
          i = this.peek() === "<{>";
        if (!i) {
          if (e === "delim") return (a = this.scanDelim()) != null ? a : ".";
          if (e === "text" || e === "math") {
            this.beginContext();
            let s = this.parseSimpleToken();
            return this.endContext(), s
          }
        }
        if (i && this.get(), e === "text" || e === "math") {
          this.beginContext({
            mode: e
          });
          do this.mathlist.push(...this.parse()); while (!this.match("<}>") && !this.end())
        } else if (this.beginContext(), e === "string" ? r = this.scanString() : e === "balanced-string" ? r = this.scanBalancedString() : e === "number" ? r = this.scanNumber() : e === "colspec" ? r = this.scanColspec() : e === "dimen" ? r = this.scanDimen() : e === "glue" ? r = this.scanGlue() : e === "delim" && (r = (n = this.scanDelim()) != null ? n : "."), i && this.skipUntilToken("<}>"), r === null) return this.endContext(), null;
        let o = this.mathlist;
        return this.endContext(), r != null ? r : o
      }
      parseOptionalArgument(e) {
        var i, o;
        if (e = e === "auto" ? this.parseMode : e, this.matchWhitespace(), !this.match("[")) return null;
        let r = null;
        for (; !this.end() && !this.match("]");)
          if (e === "string") r = this.scanString();
          else if (e === "number") r = this.scanNumber();
        else if (e === "dimen") r = this.scanDimen();
        else if (e === "glue") r = this.scanGlue();
        else if (e === "colspec") r = this.scanColspec();
        else if (e === "bbox") {
          let a = this.scanString().toLowerCase().trim().split(/,(?![^(]*\)(?:(?:[^(]*\)){2})*[^"]*$)/),
            n = {};
          for (let s of a) {
            let l = (o = (i = this.context).backgroundColorMap) == null ? void 0 : o.call(i, s);
            if (l) n.backgroundcolor = l;
            else {
              let c = s.match(/^\s*([\d.]+)\s*([a-z]{2})/);
              if (c) n.padding = c[0];
              else {
                let u = s.match(/^\s*border\s*:\s*(.*)/);
                u && (n.border = u[1])
              }
            }
          }
          r = n
        } else e === "math" && (this.beginContext({
          mode: "math"
        }), r = this.mathlist.concat(this.parse(a => a === "]")), this.endContext());
        return r
      }
      parseCommand(e) {
        var a, n, s, l, c, u;
        if (e === "\\placeholder") {
          let d = this.parseOptionalArgument("string"),
            m = this.parseOptionalArgument("math"),
            h = Qt(m, {
              defaultMode: "math"
            }),
            f = [],
            y;
          !y && h === "correct" ? y = "correct" : !y && h === "incorrect" ? y = "incorrect" : h !== "" && (f = m);
          let w = this.parseOptionalArgument("string") === "locked",
            k = this.parseArgument("auto"),
            S;
          return k && k.length > 0 ? S = k : S = f, d ? [new ir(this.context, d, y, w, S != null ? S : f, {
            mode: this.parseMode,
            style: this.style
          })] : [new re(this.context, {
            mode: this.parseMode,
            placeholderId: d,
            style: this.style
          })]
        }
        let r = null;
        if (e === "\\char") {
          let d = this.index,
            m = Math.floor((a = this.scanNumber(!0)) != null ? a : Number.NaN);
          (!Number.isFinite(m) || m < 0 || m > 1114111) && (m = 10067);
          let h = "\\char" + Nr(this.tokens.slice(d, this.index));
          return r = new g(this.parseMode === "math" ? "mord" : "text", this.context, {
            command: "\\char",
            mode: this.parseMode,
            value: String.fromCodePoint(m),
            serialize: f => {
              var y;
              return (y = f.verbatimLatex) != null ? y : `\\char"${f.value.codePointAt(0).toString(16).toUpperCase()}`
            }
          }), r.verbatimLatex = h, [r]
        }
        if (e === "\\hskip" || e === "\\kern") {
          let d = this.scanGlue();
          return d ? [new Ge(e, this.style, this.context, d)] : null
        }
        if (r = this.scanMacro(e), r) return [r];
        let i = this.context.getDefinition(e, this.parseMode);
        if (!i) return this.onError({
          code: "unknown-command",
          arg: e
        }), [new tr(e, this.context)];
        let o = this.index;
        if (i.definitionType === "symbol") {
          let d = b({}, this.style);
          i.variant && (d.variant = i.variant), r = new g((n = i.type) != null ? n : "mop", this.context, {
            command: e,
            style: d,
            value: String.fromCodePoint(i.codepoint),
            mode: this.parseMode
          })
        } else {
          if (i.ifMode && !i.ifMode.includes(this.parseMode)) return [];
          let d = this.parseMode;
          i.applyMode && (this.parseMode = i.applyMode);
          let [m, h] = this.parseArguments(i);
          if (this.parseMode = d, !h) return null;
          if (i.applyMode && !i.applyStyle && !i.createAtom) return h[0];
          if (i.infix) return this.onError({
            code: "too-many-infix-commands",
            arg: e
          }), null;
          if (typeof i.createAtom == "function") r = i.createAtom(e, h, this.style, this.context), m && (r.body = (s = this.parseArgument(m)) != null ? s : void 0);
          else if (typeof i.applyStyle == "function") {
            let f = i.applyStyle(e, h, this.context),
              y = this.parseMode;
            if (i.applyMode && (this.parseMode = i.applyMode), m) {
              let w = this.style;
              this.style = b(b({}, this.style), f);
              let k = this.parseArgument(m);
              return this.style = w, this.parseMode = y, k
            }
            this.style = b(b({}, this.style), f), this.parseMode = y
          } else r = new g("mop", this.context, {
            command: (l = i.command) != null ? l : e,
            style: b({}, this.style),
            value: e,
            mode: (c = i.applyMode) != null ? c : this.parseMode
          })
        }
        if (r instanceof g && r.verbatimLatex === void 0 && !/^\\(llap|rlap|class|cssId|htmlData)$/.test(e) && (r.verbatimLatex = ((u = r.command) != null ? u : "") + Nr(this.tokens.slice(o, this.index)), r.verbatimLatex.length === 0 && (r.verbatimLatex = void 0), r.isFunction && this.smartFence)) {
          let d = this.scanSmartFence();
          if (d) return [r, d]
        }
        return r ? [r] : null
      }
      parseLiteral(e) {
        let r = Te.createAtom(this.parseMode, e, this.context, b({}, this.style));
        if (!r) return null;
        if (r.isFunction && this.smartFence) {
          let i = this.scanSmartFence();
          if (i) return [r, i]
        }
        return [r]
      }
      parseSimpleToken() {
        let e = this.get();
        return e ? e === "<space>" ? this.parseMode === "text" ? [new Je(" ", " ", this.style, this.context)] : null : e.startsWith("\\") ? this.parseCommand(e) : ao(e) ? this.parseLiteral(e) : (e === "<}>" ? this.onError({
          latex: "",
          code: "unbalanced-braces"
        }) : this.onError({
          latex: "",
          code: "unexpected-token",
          arg: e
        }), null) : null
      }
      scanMacro(e) {
        var n;
        let r = this.context.getMacro(e);
        if (!r) return null;
        let i = this.index,
          o = r.args,
          a = {
            "?": (n = this.args) == null ? void 0 : n.call(this, "?")
          };
        for (let s = 1; s <= o; s++) a[s] = this.matchLiteralArg();
        return new rr(e, this.context, {
          expand: r.expand,
          captureSelection: r.captureSelection,
          args: Nr(this.tokens.slice(i, this.index)),
          body: he(r.def, this.context, {
            parseMode: this.parseMode,
            args: s => a[s],
            mathstyle: this.currentContext.mathstyle
          })
        })
      }
      parseToken() {
        var r, i, o, a;
        let e = (a = (o = (i = (r = this.parseEnvironment()) != null ? r : this.parseModeShift()) != null ? i : this.parseModeSet()) != null ? o : this.parseGroup()) != null ? a : this.parseLeftRight();
        if (e === null) {
          if (this.parseSupSub() || this.parseLimits()) return !0;
          e = this.parseSimpleToken()
        }
        return Y(e) ? this.mathlist.push(...e) : e && this.mathlist.push(e), e !== null
      }
    };

    function he(t, e, r) {
      var n, s, l;
      let i = (n = r == null ? void 0 : r.args) != null ? n : null,
        o = new Jr(xr(t, i), e, {
          args: i,
          mathstyle: (s = r == null ? void 0 : r.mathstyle) != null ? s : "displaystyle",
          parseMode: (l = r == null ? void 0 : r.parseMode) != null ? l : "math"
        }),
        a = [];
      for (; !o.end();) a.push(...o.parse());
      return a
    }

    function no(t, e, r) {
      var o;
      let i = new Jr(xr(t, null), e, {
        args: null,
        mathstyle: "displaystyle",
        parseMode: (o = r == null ? void 0 : r.parseMode) != null ? o : "math"
      });
      for (; !i.end();) i.parse();
      return i.errors
    }

    function Jn(t, e) {
      return typeof t == "object" && "glue" in t ? t : typeof t == "object" && "dimension" in t ? {
        glue: t
      } : typeof t == "number" ? {
        glue: {
          dimension: t
        }
      } : new Jr(xr(t), e, {}).scanGlue()
    }

    function wr(t, e) {
      return typeof t == "number" ? {
        dimension: t,
        unit: "pt"
      } : (typeof t == "object" && "glue" in t && (t = t.glue), typeof t == "object" && "dimension" in t ? t : new Jr(xr(t), e, {}).scanDimen())
    }
    var gt = class extends g {
      constructor(r, i, o, a, n) {
        super("enclose", a, {
          command: r,
          style: n.style
        });
        this.body = i, this.backgroundcolor = n.backgroundcolor, o.updiagonalarrow && (o.updiagonalstrike = !1), o.box && (o.left = !1, o.right = !1, o.bottom = !1, o.top = !1), this.notation = o, this.shadow = n.shadow, this.strokeWidth = n.strokeWidth, this.strokeStyle = n.strokeStyle, this.svgStrokeStyle = n.svgStrokeStyle, this.strokeColor = n.strokeColor, this.borderStyle = n.borderStyle, this.padding = n.padding, this.captureSelection = !0
      }
      static fromJson(r, i) {
        return new gt(r.command, r.body, r.notation, i, r)
      }
      toJson() {
        return P(b({}, super.toJson()), {
          notation: this.notation,
          shadow: this.shadow,
          strokeWidth: this.strokeWidth,
          strokeStyle: this.strokeStyle,
          svgStrokeStyle: this.svgStrokeStyle,
          strokeColor: this.strokeColor,
          borderStyle: this.borderStyle,
          padding: this.padding
        })
      }
      serialize(r) {
        var o;
        let i = (o = this.command) != null ? o : "";
        if (this.command === "\\enclose") {
          i += "{" + Object.keys(this.notation).join(" ") + "}";
          let a = "",
            n = "";
          this.backgroundcolor && this.backgroundcolor !== "transparent" && (a += n + 'mathbackground="' + this.backgroundcolor + '"', n = ","), this.shadow && this.shadow !== "auto" && (a += n + 'shadow="' + this.shadow + '"', n = ","), this.strokeWidth || this.strokeStyle !== "solid" ? (a += n + this.borderStyle, n = ",") : this.strokeColor && this.strokeColor !== "currentColor" && (a += n + 'mathcolor="' + this.strokeColor + '"', n = ","), a && (i += `[${a}]`)
        }
        return i += `{${this.bodyToLatex(r)}}`, i
      }
      render(r) {
        var u;
        let i = new E(r, this.style),
          o = g.createBox(i, this.body);
        if (!o) return null;
        let a = (u = Ae(this.padding && this.padding !== "auto" ? wr(this.padding, P(b({}, this.context), {
            registers: r.registers
          })) : i.getRegisterAsDimension("fboxsep"))) != null ? u : 0,
          n = Zl(this.borderStyle),
          s = new v(null, {
            classes: "ML__notation"
          });
        s.setStyle("box-sizing", "border-box"), s.setStyle("top", `calc(-${n} / 2 - ${a}em)`), s.setStyle("left", `calc(-${n} / 2 - ${a}em)`), s.setStyle("height", `calc(100% + ${2*a}em + 2 * ${n})`), s.height = o.height + a, s.depth = o.depth + a, s.setStyle("width", `calc(100% + ${2*a}em + 2 * ${n})`), this.backgroundcolor && s.setStyle("background-color", this.backgroundcolor), this.notation.box && s.setStyle("border", this.borderStyle), this.notation.actuarial && (s.setStyle("border-top", this.borderStyle), s.setStyle("border-right", this.borderStyle)), this.notation.madruwb && (s.setStyle("border-bottom", this.borderStyle), s.setStyle("border-right", this.borderStyle)), this.notation.roundedbox && (s.setStyle("border-radius", "8px"), s.setStyle("border", this.borderStyle)), this.notation.circle && (s.setStyle("border-radius", "50%"), s.setStyle("border", this.borderStyle)), this.notation.top && s.setStyle("border-top", this.borderStyle), this.notation.left && s.setStyle("border-left", this.borderStyle), this.notation.right && s.setStyle("border-right", this.borderStyle), this.notation.bottom && s.setStyle("border-bottom", this.borderStyle);
        let l = "";
        if (this.notation.horizontalstrike && (l += '<line x1="3%"  y1="50%" x2="97%" y2="50%"', l += ` stroke-width="${this.strokeWidth}" stroke="${this.strokeColor}"`, l += ' stroke-linecap="round"', this.svgStrokeStyle && (l += ` stroke-dasharray="${this.svgStrokeStyle}"`), l += "/>"), this.notation.verticalstrike && (l += '<line x1="50%"  y1="3%" x2="50%" y2="97%"', l += ` stroke-width="${this.strokeWidth}" stroke="${this.strokeColor}"`, l += ' stroke-linecap="round"', this.svgStrokeStyle && (l += ` stroke-dasharray="${this.svgStrokeStyle}"`), l += "/>"), this.notation.updiagonalstrike && (l += '<line x1="3%"  y1="97%" x2="97%" y2="3%"', l += ` stroke-width="${this.strokeWidth}" stroke="${this.strokeColor}"`, l += ' stroke-linecap="round"', this.svgStrokeStyle && (l += ` stroke-dasharray="${this.svgStrokeStyle}"`), l += "/>"), this.notation.downdiagonalstrike && (l += '<line x1="3%"  y1="3%" x2="97%" y2="97%"', l += ` stroke-width="${this.strokeWidth}" stroke="${this.strokeColor}"`, l += ' stroke-linecap="round"', this.svgStrokeStyle && (l += ` stroke-dasharray="${this.svgStrokeStyle}"`), l += "/>"), l) {
          let d;
          this.shadow !== "none" && (d = this.shadow === "auto" ? "filter: drop-shadow(0 0 .5px rgba(255, 255, 255, .7)) drop-shadow(1px 1px 2px #333)" : "filter: drop-shadow(" + this.shadow + ")"), Ji(s, l, d)
        }
        let c = new v([s, o]);
        return c.setStyle("position", "relative"), c.setStyle("display", "inline"), c.height = o.height + a, c.depth = o.depth + a, c.left = a, c.right = a, this.caret && (c.caret = this.caret), c.wrap(i)
      }
    };

    function Zl(t) {
      if (!t) return "1px";
      let e = t.match(/([0-9][a-zA-Z\%]+)/);
      return e === null ? "1px" : e[1]
    }
    x("enclose", "{notation:string}[style:string]{body:auto}", {
      createAtom: (t, e, r, i) => {
        var n;
        let o = {
          strokeColor: "currentColor",
          strokeWidth: "",
          strokeStyle: "solid",
          backgroundcolor: "transparent",
          padding: "auto",
          shadow: "auto",
          svgStrokeStyle: void 0,
          borderStyle: void 0,
          style: r
        };
        if (e[1]) {
          let s = e[1].split(/,(?![^(]*\)(?:(?:[^(]*\)){2})*[^"]*$)/);
          for (let l of s) {
            let c = l.match(/\s*(\S+)\s+(\S+)\s+(.*)/);
            if (c) o.strokeWidth = c[1], o.strokeStyle = c[2], o.strokeColor = c[3];
            else {
              let u = l.match(/\s*([a-z]*)\s*=\s*"(.*)"/);
              u && (u[1] === "mathbackground" ? o.backgroundcolor = u[2] : u[1] === "mathcolor" ? o.strokeColor = u[2] : u[1] === "padding" ? o.padding = u[2] : u[1] === "shadow" && (o.shadow = u[2]))
            }
          }
          o.strokeStyle === "dashed" ? o.svgStrokeStyle = "5,5" : o.strokeStyle === "dotted" && (o.svgStrokeStyle = "1,5")
        }
        o.borderStyle = `${o.strokeWidth} ${o.strokeStyle} ${o.strokeColor}`;
        let a = {};
        return ((n = e[0]) != null ? n : "").split(/[, ]/).filter(s => s.length > 0).forEach(s => {
          a[s.toLowerCase()] = !0
        }), new gt(t, e[2], a, i, o)
      }
    });
    x("cancel", "{body:auto}", {
      createAtom: (t, e, r, i) => new gt(t, e[0], {
        updiagonalstrike: !0
      }, i, {
        strokeColor: "currentColor",
        strokeWidth: "",
        strokeStyle: "solid",
        borderStyle: "1px solid currentColor",
        backgroundcolor: "transparent",
        padding: "auto",
        shadow: "auto",
        style: r
      })
    });
    x("bcancel", "{body:auto}", {
      createAtom: (t, e, r, i) => new gt(t, e[0], {
        downdiagonalstrike: !0
      }, i, {
        strokeColor: "currentColor",
        strokeWidth: "",
        strokeStyle: "solid",
        borderStyle: "1px solid currentColor",
        backgroundcolor: "transparent",
        padding: "auto",
        shadow: "auto",
        style: r
      })
    });
    x("xcancel", "{body:auto}", {
      createAtom: (t, e, r, i) => new gt(t, e[0], {
        updiagonalstrike: !0,
        downdiagonalstrike: !0
      }, i, {
        strokeColor: "currentColor",
        strokeWidth: "",
        strokeStyle: "solid",
        borderStyle: "1px solid currentColor",
        backgroundcolor: "transparent",
        padding: "auto",
        shadow: "auto",
        style: r
      })
    });

    function Yl(t, e, r, i) {
      let o = 0;
      for (let u of i) "align" in u && (o += 1);
      let a = 0,
        n = [];
      for (let u of r) {
        let d = 0;
        for (a = Math.max(a, Math.min(u.length, o)); d < u.length;) {
          let m = [],
            h = Math.min(u.length, d + o);
          for (; d < h;) u[d].length === 0 ? m.push([new g("first", t, {
            mode: e.mode
          })]) : u[d][0].type !== "first" ? m.push([new g("first", t, {
            mode: e.mode
          }), ...u[d]]) : m.push(u[d]), d += 1;
          n.push(m)
        }
      }
      n[n.length - 1].length === 1 && n[n.length - 1][0].length === 0 && n.pop();
      let s = [];
      for (let u of n) {
        if (u.length !== a)
          for (let d = u.length; d < a; d++) u.push([new g("first", t, {
            mode: e.mode
          }), new re(t)]);
        s.push(u)
      }
      let l = 0,
        c = 0;
      for (let u of s) {
        c = 0;
        for (let d of u) {
          for (let m of d) m.parent = e, m.treeBranch = [l, c];
          c += 1
        }
        l += 1
      }
      return e.isDirty = !0, s
    }
    var j = class extends g {
      constructor(r, i, o, a, n = {}) {
        var s, l;
        super("array", r);
        this.environmentName = i, this.rowGaps = a, n.mathstyleName && (this.mathstyleName = n.mathstyleName), n.columns && (n.columns.length === 0 ? this.colFormat = [{
          align: "l"
        }] : this.colFormat = n.columns), this.colFormat || (this.colFormat = [{
          align: "l"
        }, {
          align: "l"
        }, {
          align: "l"
        }, {
          align: "l"
        }, {
          align: "l"
        }, {
          align: "l"
        }, {
          align: "l"
        }, {
          align: "l"
        }, {
          align: "l"
        }, {
          align: "l"
        }]), this.array = Yl(r, this, o, this.colFormat), n.leftDelim && (this.leftDelim = n.leftDelim), n.rightDelim && (this.rightDelim = n.rightDelim), n.jot !== void 0 && (this.jot = n.jot), n.arraycolsep && (this.arraycolsep = n.arraycolsep), this.colSeparationType = n.colSeparationType, this.arraystretch = (s = n.arraystretch) != null ? s : 1, this.minColumns = (l = n.minColumns) != null ? l : 1
      }
      static fromJson(r, i) {
        return new j(i, r.environmentName, r.array, r.rowGaps, r)
      }
      toJson() {
        let r = P(b({}, super.toJson()), {
          environmentName: this.environmentName,
          array: this.array.map(i => i.map(o => o.map(a => a.toJson()))),
          rowGaps: this.rowGaps,
          columns: this.colFormat,
          colSeparationType: this.colSeparationType
        });
        return this.arraystretch !== 1 && (r.arraystretch = this.arraystretch), this.arraycolsep && (r.arraycolsep = this.arraycolsep), this.leftDelim && (r.leftDelim = this.leftDelim), this.rightDelim && (r.rightDelim = this.rightDelim), this.jot !== void 0 && (r.jot = this.jot), r
      }
      branch(r) {
        var i;
        if (bi(r)) return (i = this.array[r[0]][r[1]]) != null ? i : void 0
      }
      get branches() {
        let r = super.branches;
        return this.array.forEach((i, o) => {
          this.array[o].forEach((a, n) => {
            this.array[o][n] && r.push([o, n])
          })
        }), r
      }
      createBranch(r) {
        var i;
        return bi(r) ? (this.isDirty = !0, (i = this.branch(r)) != null ? i : []) : []
      }
      get rowCount() {
        return this.array.length
      }
      get colCount() {
        return this.array[0].length
      }
      get maxColumns() {
        return this.colFormat.filter(r => !!r.align).length
      }
      removeBranch(r) {
        if (Yt(r)) return super.removeBranch(r);
        let i = this.branch(r);
        return this.array[r[0]][r[1]] = void 0, i.forEach(o => {
          o.parent = void 0, o.treeBranch = void 0
        }), i[0].type, i.shift(), this.isDirty = !0, i
      }
      get hasChildren() {
        return this.children.length > 0
      }
      get children() {
        let r = [];
        for (let i of this.array)
          for (let o of i)
            if (o)
              for (let a of o) r.push(...a.children), r.push(a);
        return [...r, ...super.children]
      }
      render(r) {
        var Gt, Jt, _e, si, li;
        let i = new E(r, this.style, this.mathstyleName),
          o = i.getRegisterAsEm("arrayrulewidth"),
          a = i.getRegisterAsEm("arraycolsep"),
          n = i.getRegisterAsEm("doublerulesep"),
          s = (Gt = this.arraystretch) != null ? Gt : 1,
          l = typeof this.arraycolsep == "number" ? this.arraycolsep : a;
        this.colSeparationType === "small" && (l = .2778 * (new E(r, void 0, "scriptstyle").scalingFactor / r.scalingFactor));
        let c = s * gn,
          u = .7 * c,
          d = .3 * c,
          m = 0,
          h = [],
          f = 0,
          y = this.array.length;
        for (let pe = 0; pe < y; ++pe) {
          let ke = this.array[pe];
          f = Math.max(f, ke.length);
          let De = new E(i, this.style, this.mathstyleName),
            pt = u / De.scalingFactor,
            wt = d / De.scalingFactor,
            Wt = {
              cells: [],
              height: 0,
              depth: 0,
              pos: 0
            };
          for (let $i of ke) {
            let Ye = (Jt = g.createBox(De, $i, {
              newList: !0
            })) != null ? Jt : new v(null, {
              newList: !0
            });
            wt = Math.max(wt, Ye.depth), pt = Math.max(pt, Ye.height), Wt.cells.push(Ye)
          }
          let Ut = (_e = Ae(this.rowGaps[pe])) != null ? _e : 0;
          Ut > 0 && (Ut += d, wt = Math.max(wt, Ut), Ut = 0), this.jot !== void 0 && (wt += this.jot), Wt.height = pt, Wt.depth = wt, m += pt, Wt.pos = m, m += wt + Ut, h.push(Wt)
        }
        let w = m / 2 + ze,
          k = [];
        for (let pe = 0; pe < f; pe++) {
          let ke = [];
          for (let De of h) {
            let pt = De.cells[pe];
            pt.depth = De.depth, pt.height = De.height, ke.push({
              box: pt,
              shift: De.pos - w
            })
          }
          ke.length > 0 && k.push(new Q({
            individualShift: ke
          }))
        }
        let S = [],
          T = !1,
          L = !1,
          D = 0,
          M = !this.leftDelim,
          {
            colFormat: R
          } = this;
        for (let pe of R) {
          if ("align" in pe && D >= k.length) break;
          if ("align" in pe) T ? S.push(lo(2 * l)) : (L || M) && S.push(lo(l)), S.push(new v(k[D], {
            classes: "col-align-" + pe.align
          })), D++, T = !0, L = !1, M = !1;
          else if ("gap" in pe) {
            if (typeof pe.gap == "number") S.push(lo(pe.gap));
            else {
              let ke = Ql(r, h, w, pe.gap);
              ke && S.push(ke)
            }
            T = !1, L = !1, M = !1
          } else if ("separator" in pe) {
            let ke = new v(null, {
              classes: "vertical-separator"
            });
            ke.setStyle("height", m, "em"), ke.setStyle("border-right", `${o}em ${pe.separator} currentColor`), ke.setStyle("vertical-align", -(m - w), "em");
            let De = 0;
            L ? De = n - o : T && (De = l - o), ke.left = De, S.push(ke), T = !1, L = !0, M = !1
          }
        }
        T && !this.rightDelim && S.push(lo(l));
        let F = new v(S, {
          classes: "mtable"
        });
        if ((!this.leftDelim || this.leftDelim === ".") && (!this.rightDelim || this.rightDelim === ".")) return this.caret && (F.caret = this.caret), F;
        let Le = F.height,
          Pe = F.depth,
          vt = this.bind(r, new v([this.bind(r, vr("mopen", (si = this.leftDelim) != null ? si : ".", Le, Pe, i)), F, this.bind(r, vr("mclose", (li = this.rightDelim) != null ? li : ".", Le, Pe, i))], {
            type: "mord"
          }));
        return vt ? (this.caret && (vt.caret = this.caret), this.attachSupsub(r, {
          base: vt
        })) : null
      }
      serialize(r) {
        let i = "\\begin{" + this.environmentName + "}";
        if (this.environmentName === "array") {
          if (i += "{", this.colFormat !== void 0)
            for (let o of this.colFormat) "align" in o ? i += o.align : "separator" in o && o.separator === "solid" ? i += "|" : "separator" in o && o.separator === "dashed" && (i += ":");
          i += "}"
        }
        for (let o = 0; o < this.array.length; o++) {
          for (let a = 0; a < this.array[o].length; a++) a > 0 && (i += " & "), i = U([i, g.serialize(this.array[o][a], r)]);
          o < this.array.length - 1 && (i += " \\\\ ")
        }
        return i += "\\end{" + this.environmentName + "}", i
      }
      getCell(r, i) {
        return this.array[r][i]
      }
      setCell(r, i, o) {
        this.type === "array" && Array.isArray(this.array) && this.array[r][i];
        for (let n of this.array[r][i]) n.parent = void 0, n.treeBranch = void 0;
        let a = o;
        (o.length === 0 || o[0].type !== "first") && (a = [new g("first", this.context, {
          mode: this.mode
        }), ...o]), this.array[r][i] = a;
        for (let n of a) n.parent = this, n.treeBranch = [r, i];
        this.isDirty = !0
      }
      addRowBefore(r) {
        this.type === "array" && Array.isArray(this.array);
        let i = [];
        for (let o = 0; o < this.colCount; o++) i.push(so(this));
        this.array.splice(r, 0, i);
        for (let o = r; o < this.rowCount; o++)
          for (let a = 0; a < this.colCount; a++) {
            let n = this.array[o][a];
            if (n)
              for (let s of n) s.treeBranch = [o, a]
          }
        this.isDirty = !0
      }
      addRowAfter(r) {
        this.type === "array" && Array.isArray(this.array);
        let i = [];
        for (let o = 0; o < this.colCount; o++) i.push(so(this));
        this.array.splice(r + 1, 0, i);
        for (let o = r + 1; o < this.rowCount; o++)
          for (let a = 0; a < this.colCount; a++) {
            let n = this.array[o][a];
            if (n)
              for (let s of n) s.treeBranch = [o, a]
          }
        this.isDirty = !0
      }
      removeRow(r) {
        this.type === "array" && Array.isArray(this.array) && this.rowCount > r;
        let i = this.array.splice(r, 1);
        for (let o of i)
          for (let a of o)
            if (a)
              for (let n of a) n.parent = void 0, n.treeBranch = void 0;
        for (let o = r; o < this.rowCount; o++)
          for (let a = 0; a < this.colCount; a++) {
            let n = this.array[o][a];
            if (n)
              for (let s of n) s.treeBranch = [o, a]
          }
        this.isDirty = !0
      }
      addColumnBefore(r) {
        this.type === "array" && Array.isArray(this.array);
        for (let i of this.array) i.splice(r, 0, so(this));
        for (let i = 0; i < this.rowCount; i++)
          for (let o = r; o < this.colCount; o++) {
            let a = this.array[i][o];
            if (a)
              for (let n of a) n.treeBranch = [i, o]
          }
        this.isDirty = !0
      }
      addColumnAfter(r) {
        this.type === "array" && Array.isArray(this.array);
        for (let i of this.array) i.splice(r + 1, 0, so(this));
        for (let i = 0; i < this.rowCount; i++)
          for (let o = r + 1; o < this.colCount; o++) {
            let a = this.array[i][o];
            if (a)
              for (let n of a) n.treeBranch = [i, o]
          }
        this.isDirty = !0
      }
      addColumn() {
        this.addColumnAfter(this.colCount - 1)
      }
      removeColumn(r) {
        this.type === "array" && Array.isArray(this.array) && this.colCount > r;
        for (let i of this.array) {
          let o = i.splice(r, 1);
          for (let a of o)
            if (a)
              for (let n of a) n.parent = void 0, n.treeBranch = void 0
        }
        for (let i = 0; i < this.rowCount; i++)
          for (let o = r; o < this.colCount; o++) {
            let a = this.array[i][o];
            if (a)
              for (let n of a) n.treeBranch = [i, o]
          }
        this.isDirty = !0
      }
      get cells() {
        let r = [];
        for (let i of this.array)
          for (let o of i) o && r.push(o);
        return r
      }
    };

    function so(t) {
      let e = new g("first", t.context, {
        mode: t.mode
      });
      e.parent = t;
      let r = new re(t.context, {
        mode: t.mode
      });
      return r.parent = t, [e, r]
    }

    function lo(t) {
      let e = new v(null, {
        classes: "arraycolsep"
      });
      return e.width = t, e
    }

    function Ql(t, e, r, i) {
      if (!i) return null;
      let o = [];
      for (let a of e) {
        let n = g.createBox(t, i, {
          newList: !0
        });
        n && (n.depth = a.depth, n.height = a.height, o.push({
          box: n,
          shift: a.pos - r
        }))
      }
      return new Q({
        individualShift: o
      }).wrap(t)
    }
    hi("math", "", (t, e, r, i) => (Qe(r) && (r = [
      [
        [new g("first", t), new re(t)]
      ]
    ]), new j(t, e, r, i, {
      mathstyleName: "textstyle"
    })));
    hi("displaymath", "", (t, e, r, i) => (Qe(r) && (r = [
      [
        [new g("first", t), new re(t)]
      ]
    ]), new j(t, e, r, i, {
      mathstyleName: "textstyle"
    })));
    ht("array", "{columns:colspec}", (t, e, r, i, o) => (Qe(r) && (r = [
      [
        [new g("first", t), new re(t)]
      ]
    ]), new j(t, e, r, i, {
      columns: o[0],
      mathstyleName: "textstyle"
    })));
    ht(["equation", "equation*", "subequations"], "", (t, e, r, i) => (Qe(r) && (r = [
      [
        [new g("first", t), new re(t)]
      ]
    ]), new j(t, e, r, i, {
      columns: [{
        align: "c"
      }]
    })));
    ht("multline", "", (t, e, r, i) => (Qe(r) && (r = [
      [
        [new g("first", t), new re(t)]
      ]
    ]), new j(t, e, r, i, {
      columns: [{
        align: "m"
      }]
    })));
    ht(["align", "align*", "aligned", "eqnarray"], "", (t, e, r, i) => {
      let o = 0;
      Qe(r) && (r = [
        [
          [new g("first", t), new re(t)],
          [new g("first", t), new re(t)]
        ]
      ]);
      for (let s of r) o = Math.max(o, s.length);
      let a = [{
          gap: 0
        }, {
          align: "r"
        }, {
          gap: .25
        }, {
          align: "l"
        }],
        n = 2;
      for (; n < o;) a.push({
        gap: 1
      }), a.push({
        align: "r"
      }), a.push({
        gap: .25
      }), a.push({
        align: "l"
      }), n += 2;
      return a.push({
        gap: 0
      }), new j(t, e, r, i, {
        arraycolsep: 0,
        columns: a,
        colSeparationType: "align",
        jot: .3,
        minColumns: 2
      })
    });
    ht("split", "", (t, e, r, i) => (Qe(r) && (r = [
      [
        [new g("first", t), new re(t)],
        [new g("first", t), new re(t)]
      ]
    ]), new j(t, e, r, i, {
      columns: [{
        align: "r"
      }, {
        align: "l"
      }],
      minColumns: 2
    })));
    ht(["gather", "gathered"], "", (t, e, r, i) => (Qe(r) && (r = [
      [
        [new g("first", t), new re(t)]
      ]
    ]), new j(t, e, r, i, {
      columns: [{
        gap: .25
      }, {
        align: "c"
      }, {
        gap: 0
      }],
      colSeparationType: "gather"
    })));
    ht(["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"], "[columns:colspec]", (t, e, r, i, o) => {
      var s;
      Qe(r) && (r = [
        [
          [new g("first", t), new re(t)]
        ]
      ]);
      let a = ".",
        n = ".";
      switch (e) {
        case "pmatrix":
        case "pmatrix*":
          a = "(", n = ")";
          break;
        case "bmatrix":
        case "bmatrix*":
          a = "[", n = "]";
          break;
        case "Bmatrix":
        case "Bmatrix*":
          a = "\\lbrace", n = "\\rbrace";
          break;
        case "vmatrix":
        case "vmatrix*":
          a = "\\vert", n = "\\vert";
          break;
        case "Vmatrix":
        case "Vmatrix*":
          a = "\\Vert", n = "\\Vert";
          break;
        case "matrix":
        case "matrix*":
          a = ".", n = ".";
          break;
        default:
      }
      return new j(t, e, r, i, {
        mathstyleName: "textstyle",
        leftDelim: a,
        rightDelim: n,
        columns: (s = o[0]) != null ? s : [{
          align: "c"
        }, {
          align: "c"
        }, {
          align: "c"
        }, {
          align: "c"
        }, {
          align: "c"
        }, {
          align: "c"
        }, {
          align: "c"
        }, {
          align: "c"
        }, {
          align: "c"
        }, {
          align: "c"
        }]
      })
    });
    ht(["smallmatrix", "smallmatrix*"], "[columns:colspec]", (t, e, r, i, o) => {
      var a;
      return Qe(r) && (r = [
        [
          [new g("first", t), new re(t)]
        ]
      ]), new j(t, e, r, i, {
        mathstyleName: "scriptstyle",
        columns: (a = o[0]) != null ? a : [{
          align: "c"
        }, {
          align: "c"
        }, {
          align: "c"
        }, {
          align: "c"
        }, {
          align: "c"
        }, {
          align: "c"
        }, {
          align: "c"
        }, {
          align: "c"
        }, {
          align: "c"
        }, {
          align: "c"
        }],
        colSeparationType: "small",
        arraystretch: .5
      })
    });
    ht(["cases", "dcases"], "", (t, e, r, i) => (Qe(r) && (r = [
      [
        [new g("first", t), new re(t)]
      ]
    ]), new j(t, e, r, i, {
      mathstyleName: e === "dcases" ? "displaystyle" : "textstyle",
      arraystretch: 1.2,
      leftDelim: "\\lbrace",
      rightDelim: ".",
      columns: [{
        align: "l"
      }, {
        gap: 1
      }, {
        align: "l"
      }]
    })));
    ht("rcases", "", (t, e, r, i) => (Qe(r) && (r = [
      [
        [new g("first", t), new re(t)]
      ]
    ]), new j(t, e, r, i, {
      arraystretch: 1.2,
      leftDelim: ".",
      rightDelim: "\\rbrace",
      columns: [{
        align: "l"
      }, {
        gap: 1
      }, {
        align: "l"
      }]
    })));
    hi("center", "", (t, e, r, i) => (Qe(r) && (r = [
      [
        [new g("first", t), new re(t)]
      ]
    ]), new j(t, e, r, i, {
      columns: [{
        align: "c"
      }]
    })));

    function Qe(t) {
      for (let e of t)
        for (let r of e)
          if (r.length > 0) return !1;
      return !0
    }
    x(["overrightarrow", "overleftarrow", "Overrightarrow", "overleftharpoon", "overrightharpoon", "overleftrightarrow", "overlinesegment", "overgroup"], "{:auto}", {
      createAtom: (t, e, r, i) => new be(t, i, {
        body: e[0],
        skipBoundary: !1,
        supsubPlacement: "over-under",
        paddedBody: !0,
        boxType: "mrel",
        style: r,
        svgAbove: t.slice(1)
      })
    });
    x("overbrace", "{:auto}", {
      createAtom: (t, e, r, i) => new be(t, i, {
        body: e[0],
        skipBoundary: !1,
        supsubPlacement: "over-under",
        paddedBody: !0,
        boxType: "mord",
        style: r,
        svgAbove: t.slice(1)
      })
    });
    x(["underrightarrow", "underleftarrow", "underleftrightarrow", "underlinesegment", "undergroup"], "{:auto}", {
      createAtom: (t, e, r, i) => new be(t, i, {
        body: e[0],
        skipBoundary: !1,
        supsubPlacement: "over-under",
        paddedBody: !0,
        boxType: "mrel",
        style: r,
        svgBelow: t.slice(1)
      })
    });
    x(["underbrace"], "{:auto}", {
      createAtom: (t, e, r, i) => new be(t, i, {
        body: e[0],
        skipBoundary: !1,
        supsubPlacement: "over-under",
        paddedBody: !0,
        boxType: "mord",
        style: r,
        svgBelow: t.slice(1)
      })
    });
    x(["xrightarrow", "xleftarrow", "xRightarrow", "xLeftarrow", "xleftharpoonup", "xleftharpoondown", "xrightharpoonup", "xrightharpoondown", "xlongequal", "xtwoheadleftarrow", "xtwoheadrightarrow", "xleftrightarrow", "xLeftrightarrow", "xrightleftharpoons", "xleftrightharpoons", "xhookleftarrow", "xhookrightarrow", "xmapsto", "xtofrom", "xrightleftarrows", "xrightequilibrium", "xleftequilibrium"], "[:auto]{:auto}", {
      createAtom: (t, e, r, i) => {
        var o, a;
        return new be(t, i, {
          style: r,
          svgBody: t.slice(1),
          above: ((o = e[1]) == null ? void 0 : o.length) === 0 ? void 0 : e[1],
          below: (a = e[0]) != null ? a : null,
          skipBoundary: !1,
          supsubPlacement: "over-under",
          paddedBody: !0,
          paddedLabels: !0,
          boxType: "mrel",
          serialize: (n, s) => t + (n.hasEmptyBranch("below") ? "" : `[${n.belowToLatex(s)}]`) + `{${n.aboveToLatex(s)}}${n.supsubToLatex(s)}`
        })
      }
    });
    var we = class extends g {
      constructor(r, i, o, a) {
        var n, s, l, c;
        super((n = a.type) != null ? n : "mop", o, {
          command: r,
          style: a.style,
          isFunction: a == null ? void 0 : a.isFunction
        });
        typeof i == "string" ? this.value = i : this.body = i, this.captureSelection = (s = a.captureSelection) != null ? s : !1, this.hasArgument = (l = a.hasArgument) != null ? l : !1, this.variant = a == null ? void 0 : a.variant, this.variantStyle = a == null ? void 0 : a.variantStyle, this.subsupPlacement = a == null ? void 0 : a.limits, this.isExtensibleSymbol = (c = a == null ? void 0 : a.isExtensibleSymbol) != null ? c : !1
      }
      static fromJson(r, i) {
        return new we(r.command, r.body ? r.body : r.value, i, r)
      }
      toJson() {
        let r = super.toJson();
        return this.hasArgument && (r.hasArgument = !0), this.variant && (r.variant = this.variant), this.variantStyle && (r.variantStyle = this.variantStyle), this.subsupPlacement && (r.limits = this.subsupPlacement), this.isExtensibleSymbol && (r.isExtensibleSymbol = !0), this.value && (r.symbol = this.value), r
      }
      render(r) {
        var s;
        let i, o = 0,
          a = 0;
        if (this.isExtensibleSymbol) {
          let l = r.isDisplayStyle && this.value !== "\\smallint";
          if (i = new v(this.value, {
              fontFamily: l ? "Size2-Regular" : "Size1-Regular",
              classes: "op-symbol " + (l ? "large-op" : "small-op"),
              type: "mop",
              maxFontSize: r.scalingFactor
            }), !i) return null;
          i.right = i.italic, o = (i.height - i.depth) / 2 - ze * r.scalingFactor, a = i.italic, i.setStyle("color", this.style.color), i.setStyle("background-color", this.style.backgroundColor)
        } else if (this.body) {
          if (i = g.createBox(r, this.body, {
              newList: !0
            }), !i) return null;
          i.setStyle("color", this.style.color), i.setStyle("background-color", this.style.backgroundColor)
        } else this.type, i = new v(this.value, {
          type: "mop",
          mode: "math",
          maxFontSize: r.scalingFactor,
          style: {
            color: this.style.color,
            backgroundColor: this.style.backgroundColor,
            letterShapeStyle: r.letterShapeStyle,
            variant: this.variant,
            variantStyle: this.variantStyle
          }
        });
        this.isExtensibleSymbol && i.setTop(o);
        let n = i;
        if (this.superscript || this.subscript) {
          let l = (s = this.subsupPlacement) != null ? s : "auto";
          n = l === "over-under" || l === "auto" && r.isDisplayStyle ? this.attachLimits(r, {
            base: i,
            baseShift: o,
            slant: a
          }) : this.attachSupsub(r, {
            base: i
          })
        }
        return this.caret && (n.caret = this.caret), new v(this.bind(r, n), {
          type: "mop",
          classes: "op-group" + (this.isSelected ? " ML__selected" : "")
        })
      }
      serialize(r) {
        if (this.value === "\u200B") return this.supsubToLatex(r);
        let i = [];
        return i.push(this.command), this.hasArgument && i.push(`{${this.bodyToLatex(r)}}`), this.explicitSubsupPlacement && (this.subsupPlacement === "over-under" && i.push("\\limits"), this.subsupPlacement === "adjacent" && i.push("\\nolimits"), this.subsupPlacement === "auto" && i.push("\\displaylimits")), i.push(this.supsubToLatex(r)), U(i)
      }
    };
    var or = class extends g {
      constructor(e, r, i) {
        var o;
        super("surd", r, {
          command: e,
          mode: (o = i.mode) != null ? o : "math",
          style: i.style,
          displayContainsHighlight: !0
        }), this.body = i.body, this.above = i.index
      }
      static fromJson(e, r) {
        return new or(e.command, r, P(b({}, e), {
          index: e.above
        }))
      }
      toJson() {
        return super.toJson()
      }
      serialize(e) {
        let r = "";
        return this.above && (r += `[${this.aboveToLatex(e)}]`), r += `{${this.bodyToLatex(e)}}`, this.command + r
      }
      render(e) {
        var T;
        let r = new E(e, this.style, "cramp"),
          i = (T = g.createBox(r, this.body, {
            style: this.style,
            newList: !0
          })) != null ? T : new v(null),
          o = r.scalingFactor,
          a = r.metrics.defaultRuleThickness / o,
          n = e.isDisplayStyle ? kt : a,
          s = new v(null, {
            classes: "ML__sqrt-line",
            style: this.style,
            height: a
          }),
          l = o * (a + n / 4),
          u = Math.max(o * 2 * n, i.height + i.depth) + l + a,
          d = new E(e, this.style),
          m = this.isSelected ? " ML__selected" : "",
          h = this.bind(d, new v(Gr("", "\\surd", u, !1, d, {
            classes: m
          }), {
            classes: "ML__sqrt-sign" + m,
            style: this.style
          }));
        if (!h) return null;
        let f = h.height + h.depth - a;
        f > i.height + i.depth + l && (l = (l + f - (i.height + i.depth)) / 2), h.setTop(h.height - i.height - l);
        let y = this.bind(e, new Q({
            firstBaseline: [{
              box: new v(i)
            }, l - 2 * a, {
              box: s
            }, a]
          }).wrap(e)),
          w = g.createBox(new E(e, this.style, "scriptscriptstyle"), this.above, {
            style: this.style,
            newList: !0
          });
        if (!w) {
          let L = new v([h, y], {
            classes: this.containsCaret ? "ML__contains-caret" : "",
            type: "mord"
          });
          return this.caret && (L.caret = this.caret), this.bind(e, L.wrap(e))
        }
        let k = new Q({
            shift: -.6 * (Math.max(h.height, y.height) - Math.max(h.depth, y.depth)),
            children: [{
              box: w
            }]
          }),
          S = new v([new v(k, {
            classes: "ML__sqrt-index"
          }), h, y], {
            type: "mord",
            classes: this.containsCaret ? "ML__contains-caret" : ""
          });
        return S.height = h.height, S.depth = h.depth, this.caret && (S.caret = this.caret), this.bind(e, S.wrap(e))
      }
    };
    var ut = class extends g {
      constructor(r, i, o, a, n) {
        var s, l;
        super("genfrac", a, {
          style: n.style,
          command: r,
          serialize: n.serialize,
          displayContainsHighlight: !0
        });
        this.above = i, this.below = o, this.hasBarLine = (s = n == null ? void 0 : n.hasBarLine) != null ? s : !0, this.continuousFraction = (l = n == null ? void 0 : n.continuousFraction) != null ? l : !1, this.numerPrefix = n == null ? void 0 : n.numerPrefix, this.denomPrefix = n == null ? void 0 : n.denomPrefix, this.mathstyleName = n == null ? void 0 : n.mathstyleName, this.leftDelim = n == null ? void 0 : n.leftDelim, this.rightDelim = n == null ? void 0 : n.rightDelim
      }
      static fromJson(r, i) {
        return new ut(r.command, r.above, r.below, i, r)
      }
      toJson() {
        let r = {};
        return this.continuousFraction && (r.continuousFraction = !0), this.numerPrefix && (r.numerPrefix = this.numerPrefix), this.denomPrefix && (r.denomPrefix = this.denomPrefix), this.leftDelim && (r.leftDelim = this.leftDelim), this.rightDelim && (r.rightDelim = this.rightDelim), this.hasBarLine || (r.hasBarLine = !1), this.mathstyleName && (r.mathstyleName = this.mathstyleName), b(b({}, super.toJson()), r)
      }
      serialize(r) {
        return this.command + `{${this.aboveToLatex(r)}}{${this.belowToLatex(r)}}`
      }
      get children() {
        if (this._children) return this._children;
        let r = [];
        if (this.context.fractionNavigationOrder === "numerator-denominator") {
          for (let i of this.above) r.push(...i.children), r.push(i);
          for (let i of this.below) r.push(...i.children), r.push(i)
        } else {
          for (let i of this.below) r.push(...i.children), r.push(i);
          for (let i of this.above) r.push(...i.children), r.push(i)
        }
        return this._children = r, r
      }
      render(r) {
        var M, R;
        let i = new E(r, this.style, this.mathstyleName),
          o = i.metrics,
          a = new E(i, this.style, this.continuousFraction ? "" : "numerator"),
          n = this.numerPrefix ? new v([new v(this.numerPrefix), g.createBox(a, this.above)], {
            isTight: a.isTight,
            newList: !0
          }) : (M = g.createBox(a, this.above, {
            newList: !0
          })) != null ? M : new v(null, {
            newList: !0
          }),
          s = new E(i, this.style, this.continuousFraction ? "" : "denominator"),
          l = this.denomPrefix ? new v([new v(this.denomPrefix), g.createBox(s, this.below, {
            newList: !0
          })]) : (R = g.createBox(s, this.below, {
            newList: !0
          })) != null ? R : new v(null, {
            newList: !0
          }),
          c = this.hasBarLine ? o.defaultRuleThickness : 0,
          u, d = 0,
          m;
        i.isDisplayStyle ? (u = o.num1, d = c > 0 ? 3 * c : 7 * c, m = o.denom1) : (c > 0 ? (u = o.num2, d = c) : (u = o.num3, d = 3 * c), m = o.denom2);
        let h = [];
        this.isSelected && h.push("ML__selected");
        let f = n.depth,
          y = l.height,
          w;
        if (c <= 0) {
          let F = u - f - (y - m);
          F < d && (u += (d - F) / 2, m += (d - F) / 2), w = new Q({
            individualShift: [{
              box: n,
              shift: -u,
              classes: [...h, "ML__center"]
            }, {
              box: l,
              shift: m,
              classes: [...h, "ML__center"]
            }]
          }).wrap(i)
        } else {
          let F = ze + c / 2,
            Le = ze - c / 2;
          u < d + f + F && (u = d + f + F), m < d + y - Le && (m = d + y - Le);
          let Pe = new v(null, {
            classes: "ML__frac-line",
            mode: this.mode,
            style: this.style
          });
          Pe.height = c / 2, Pe.depth = c / 2, w = new Q({
            individualShift: [{
              box: l,
              shift: m,
              classes: [...h, "ML__center"]
            }, {
              box: Pe,
              shift: -Le + c / 2,
              classes: h
            }, {
              box: n,
              shift: -u,
              classes: [...h, "ML__center"]
            }]
          }).wrap(i)
        }
        let k = i.isDisplayStyle ? o.delim1 : o.delim2,
          S = this.isSelected ? " ML__selected" : "",
          T = this.leftDelim ? this.bind(r, Gr("mopen", this.leftDelim, k, !0, r, {
            style: this.style,
            mode: this.mode,
            classes: S
          })) : Rt(i, "mopen"),
          L = null;
        this.continuousFraction ? L = new v(null, {
          type: "mclose"
        }) : this.rightDelim ? L = this.bind(r, Gr("mclose", this.rightDelim, k, !0, r, {
          style: this.style,
          mode: this.mode,
          classes: S
        })) : L = Rt(i, "mclose");
        let D = this.bind(r, new v([T, w, L], {
          isTight: i.isTight,
          type: "mord",
          classes: "mfrac"
        }));
        return D ? (this.caret && (D.caret = this.caret), this.attachSupsub(r, {
          base: D
        })) : null
      }
    };
    var ar = class extends g {
        constructor(r, i, o, a) {
          super("delim", o, {
            command: r,
            style: a == null ? void 0 : a.style
          });
          this.value = i, this.size = a == null ? void 0 : a.size
        }
        static fromJson(r, i) {
          return new ar(r.command, r.delim, i, r)
        }
        toJson() {
          return P(b({}, super.toJson()), {
            delim: this.value,
            size: this.size
          })
        }
        render(r) {
          let i = new v(null);
          return i.delim = this.value, i
        }
        serialize(r) {
          return this.value.length === 1 ? this.command + this.value : `${this.command}{${this.value}}`
        }
      },
      nr = class extends g {
        constructor(r, i, o, a) {
          super("sizeddelim", o, {
            command: r,
            style: a.style
          });
          this.value = i, this.delimClass = a.delimClass, this.size = a.size
        }
        static fromJson(r, i) {
          return new nr(r.command, r.delim, i, r)
        }
        toJson() {
          return P(b({}, super.toJson()), {
            delim: this.value,
            size: this.size,
            delimClass: this.delimClass
          })
        }
        render(r) {
          let i = Hn(this.value, this.size, r, {
            classes: this.delimClass
          });
          return i ? (i = this.bind(r, i), this.caret && (i.caret = this.caret), i) : null
        }
        serialize(r) {
          return this.value.length === 1 ? this.command + this.value : `${this.command}{${this.value}}`
        }
      };
    x(["arccos", "arcsin", "arctan", "arctg", "arcctg", "arg", "ch", "cos", "cosh", "cot", "cotg", "coth", "ctg", "cth", "csc", "cosec", "dim", "exp", "hom", "inf", "ker", "lb", "lg", "ln", "log", "Pr", "sec", "sh", "sin", "sinh", "sup", "tan", "tanh", "tg", "th", "arcsec", "arccsc", "arsinh", "arcosh", "artanh", "arcsech", "arccsch"], "", {
      isFunction: !0,
      createAtom: (t, e, r, i) => new we(t, t.slice(1), i, {
        limits: "adjacent",
        isFunction: !0,
        variant: "main",
        variantStyle: "up",
        style: r
      })
    });
    x(["liminf", "limsup"], "", {
      createAtom: (t, e, r, i) => new we(t, {
        "\\liminf": "lim inf",
        "\\limsup": "lim sup"
      } [t], i, {
        limits: "over-under",
        variant: "main",
        style: r
      })
    });
    x(["lim", "mod"], "", {
      createAtom: (t, e, r, i) => new we(t, t.slice(1), i, {
        limits: "over-under",
        variant: "main",
        style: r
      })
    });
    x(["det", "max", "min"], "", {
      isFunction: !0,
      createAtom: (t, e, r, i) => new we(t, t.slice(1), i, {
        limits: "over-under",
        isFunction: !0,
        variant: "main",
        style: r
      })
    });
    x(["ang"], "{:math}", {
      isFunction: !0,
      createAtom: (t, e, r, i) => new se([...e[0], new g("mord", i, {
        value: "\xB0",
        style: r
      })], i, {
        mode: "math",
        latexOpen: "\\ang{",
        latexClose: "}",
        style: r
      })
    });
    x("sqrt", "[index:auto]{radicand:auto}", {
      createAtom: (t, e, r, i) => new or(t, i, {
        body: e[1],
        index: e[0],
        style: r
      })
    });
    x(["frac", "dfrac", "tfrac", "cfrac", "binom", "dbinom", "tbinom"], "{numerator}{denominator}", {
      createAtom: (t, e, r, i) => {
        let o = {
          style: r
        };
        switch (t) {
          case "\\dfrac":
          case "\\frac":
          case "\\tfrac":
            o.hasBarLine = !0;
            break;
          case "\\atopfrac":
            o.hasBarLine = !1;
            break;
          case "\\dbinom":
          case "\\binom":
          case "\\tbinom":
            o.hasBarLine = !1, o.leftDelim = "(", o.rightDelim = ")";
            break;
          default:
        }
        switch (t) {
          case "\\dfrac":
          case "\\dbinom":
            o.mathstyleName = "displaystyle";
            break;
          case "\\tfrac":
          case "\\tbinom":
            o.mathstyleName = "textstyle";
            break;
          case "\\cfrac":
            o.hasBarLine = !0, o.continuousFraction = !0;
            break;
          default:
        }
        return new ut(t, e[0], e[1], i, o)
      }
    });
    x(["brace", "brack"], "", {
      infix: !0,
      createAtom: (t, e, r, i) => new ut(t, e[0], e[1], i, {
        hasBarLine: !1,
        leftDelim: t === "\\brace" ? "\\lbrace" : "\\lbrack",
        rightDelim: t === "\\brace" ? "\\rbrace" : "\\rbrack",
        style: r,
        serialize: (o, a) => U([o.aboveToLatex(a), o.command, o.belowToLatex(a)])
      })
    });
    x(["over", "atop", "choose"], "", {
      infix: !0,
      createAtom: (t, e, r, i) => {
        let o, a;
        return t === "\\choose" && (o = "(", a = ")"), new ut(t, e[0], e[1], i, {
          hasBarLine: t === "\\over",
          leftDelim: o,
          rightDelim: a,
          style: r,
          serialize: (n, s) => U([n.aboveToLatex(s), n.command, n.belowToLatex(s)])
        })
      }
    });
    x(["overwithdelims", "atopwithdelims"], "{numer:auto}{denom:auto}{left-delim:delim}{right-delim:delim}", {
      infix: !0,
      createAtom: (t, e, r, i) => new ut(t, e[0], e[1], i, {
        leftDelim: e[2],
        rightDelim: e[3],
        hasBarLine: !1,
        style: r,
        serialize: (o, a) => `${o.aboveToLatex(a)} ${o.command}${o.leftDelim}${o.rightDelim}${o.belowToLatex(a)}`
      })
    });
    x("pdiff", "{numerator}{denominator}", {
      createAtom: (t, e, r, i) => new ut(t, e[0], e[1], i, {
        hasBarLine: !0,
        numerPrefix: "\u2202",
        denomPrefix: "\u2202",
        style: r
      })
    });
    x(["sum", "prod", "bigcup", "bigcap", "coprod", "bigvee", "bigwedge", "biguplus", "bigotimes", "bigoplus", "bigodot", "bigsqcup", "intop"], "", {
      createAtom: (t, e, r, i) => new we(t, {
        coprod: "\u2210",
        bigvee: "\u22C1",
        bigwedge: "\u22C0",
        biguplus: "\u2A04",
        bigcap: "\u22C2",
        bigcup: "\u22C3",
        intop: "\u222B",
        prod: "\u220F",
        sum: "\u2211",
        bigotimes: "\u2A02",
        bigoplus: "\u2A01",
        bigodot: "\u2A00",
        bigsqcup: "\u2A06",
        smallint: "\u222B"
      } [t.slice(1)], i, {
        isExtensibleSymbol: !0,
        limits: "auto",
        variant: "main",
        style: r
      })
    });
    x("smallint", "", {
      createAtom: (t, e, r, i) => new we(t, "\u222B", i, {
        limits: "adjacent",
        isExtensibleSymbol: !1,
        style: r,
        variant: "main"
      })
    });
    var oa = {
      int: "\u222B",
      iint: "\u222C",
      iiint: "\u222D",
      oint: "\u222E",
      oiint: "\u222F",
      oiiint: "\u2230",
      intclockwise: "\u2231",
      varointclockwise: "\u2232",
      ointctrclockwise: "\u2233",
      intctrclockwise: "\u2A11",
      sqcup: "\u2294",
      sqcap: "\u2293",
      uplus: "\u228E",
      wr: "\u2240",
      amalg: "\u2A3F",
      Cap: "\u22D2",
      Cup: "\u22D3",
      doublecap: "\u22D2",
      doublecup: "\u22D3"
    };
    x(Object.keys(oa), "", {
      createAtom: (t, e, r, i) => new we(t, oa[t.slice(1)], i, {
        limits: "adjacent",
        isExtensibleSymbol: !0,
        style: r,
        variant: {
          "\u22D2": "ams",
          "\u22D3": "ams"
        } [oa[t.slice(1)]]
      })
    });
    x(["Re", "Im"], "", {
      createAtom: (t, e, r, i) => new we(t, {
        "\\Re": "\u211C",
        "\\Im": "\u2111"
      } [t], i, {
        limits: "adjacent",
        style: r,
        isFunction: !0,
        variant: "fraktur"
      })
    });
    x("middle", "{:delim}", {
      createAtom: (t, e, r, i) => new ar(t, e[0], i, {
        size: 1,
        style: r
      })
    });
    var kr = class extends g {
      constructor(r, i, o) {
        super("chem", o, {
          command: r,
          mode: "math"
        });
        let a = ne.go(_.go(i, r === "\\pu" ? "pu" : "ce"), !1);
        this.body = he(a, o), this.verbatimLatex = r + "{" + i + "}", this.arg = i, this.captureSelection = !0
      }
      static fromJson(r, i) {
        return new kr(r.command, r.arg, i)
      }
      toJson() {
        return P(b({}, super.toJson()), {
          arg: this.arg
        })
      }
      render(r) {
        let i = g.createBox(r, this.body, {
          type: "chem",
          newList: !0
        });
        return this.caret && (i.caret = this.caret), this.bind(r, i)
      }
      serialize(r) {
        return this.verbatimLatex
      }
    };
    x(["ce", "pu"], "{chemformula:balanced-string}", {
      createAtom: (t, e, r, i) => new kr(t, e[0], i)
    });
    var _ = {
      go: function(t, e) {
        if (!t) return [];
        e === void 0 && (e = "ce");
        var r = "0",
          i = {};
        i.parenthesisLevel = 0, t = t.replace(/\n/g, " "), t = t.replace(/[\u2212\u2013\u2014\u2010]/g, "-"), t = t.replace(/[\u2026]/g, "...");
        for (var o, a = 10, n = [];;) {
          o !== t ? (a = 10, o = t) : a--;
          var s = _.stateMachines[e],
            l = s.transitions[r] || s.transitions["*"];
          e: for (var c = 0; c < l.length; c++) {
            var u = _.patterns.match_(l[c].pattern, t);
            if (u) {
              for (var d = l[c].task, m = 0; m < d.action_.length; m++) {
                var h;
                if (s.actions[d.action_[m].type_]) h = s.actions[d.action_[m].type_](i, u.match_, d.action_[m].option);
                else if (_.actions[d.action_[m].type_]) h = _.actions[d.action_[m].type_](i, u.match_, d.action_[m].option);
                else throw ["MhchemBugA", "mhchem bug A. Please report. (" + d.action_[m].type_ + ")"];
                _.concatArray(n, h)
              }
              if (r = d.nextState || r, t.length > 0) {
                if (d.revisit || (t = u.remainder), !d.toContinue) break e
              } else return n
            }
          }
          if (a <= 0) throw ["MhchemBugU", "mhchem bug U. Please report."]
        }
      },
      concatArray: function(t, e) {
        if (e)
          if (Array.isArray(e))
            for (var r = 0; r < e.length; r++) t.push(e[r]);
          else t.push(e)
      },
      patterns: {
        patterns: {
          empty: /^$/,
          else: /^./,
          else2: /^./,
          space: /^\s/,
          "space A": /^\s(?=[A-Z\\$])/,
          space$: /^\s$/,
          "a-z": /^[a-z]/,
          x: /^x/,
          x$: /^x$/,
          i$: /^i$/,
          letters: /^(?:[a-zA-Z\u03B1-\u03C9\u0391-\u03A9?@]|(?:\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))))+/,
          "\\greek": /^\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))/,
          "one lowercase latin letter $": /^(?:([a-z])(?:$|[^a-zA-Z]))$/,
          "$one lowercase latin letter$ $": /^\$(?:([a-z])(?:$|[^a-zA-Z]))\$$/,
          "one lowercase greek letter $": /^(?:\$?[\u03B1-\u03C9]\$?|\$?\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega)\s*\$?)(?:\s+|\{\}|(?![a-zA-Z]))$/,
          digits: /^[0-9]+/,
          "-9.,9": /^[+\-]?(?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))/,
          "-9.,9 no missing 0": /^[+\-]?[0-9]+(?:[.,][0-9]+)?/,
          "(-)(9.,9)(e)(99)": function(t) {
            var e = t.match(/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))?(\((?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))\))?(?:([eE]|\s*(\*|x|\\times|\u00D7)\s*10\^)([+\-]?[0-9]+|\{[+\-]?[0-9]+\}))?/);
            return e && e[0] ? {
              match_: e.splice(1),
              remainder: t.substr(e[0].length)
            } : null
          },
          "(-)(9)^(-9)": function(t) {
            var e = t.match(/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+)?)\^([+\-]?[0-9]+|\{[+\-]?[0-9]+\})/);
            return e && e[0] ? {
              match_: e.splice(1),
              remainder: t.substr(e[0].length)
            } : null
          },
          "state of aggregation $": function(t) {
            var e = _.patterns.findObserveGroups(t, "", /^\([a-z]{1,3}(?=[\),])/, ")", "");
            if (e && e.remainder.match(/^($|[\s,;\)\]\}])/)) return e;
            var r = t.match(/^(?:\((?:\\ca\s?)?\$[amothc]\$\))/);
            return r ? {
              match_: r[0],
              remainder: t.substr(r[0].length)
            } : null
          },
          "_{(state of aggregation)}$": /^_\{(\([a-z]{1,3}\))\}/,
          "{[(": /^(?:\\\{|\[|\()/,
          ")]}": /^(?:\)|\]|\\\})/,
          ", ": /^[,;]\s*/,
          ",": /^[,;]/,
          ".": /^[.]/,
          ". ": /^([.\u22C5\u00B7\u2022])\s*/,
          "...": /^\.\.\.(?=$|[^.])/,
          "* ": /^([*])\s*/,
          "^{(...)}": function(t) {
            return _.patterns.findObserveGroups(t, "^{", "", "", "}")
          },
          "^($...$)": function(t) {
            return _.patterns.findObserveGroups(t, "^", "$", "$", "")
          },
          "^a": /^\^([0-9]+|[^\\_])/,
          "^\\x{}{}": function(t) {
            return _.patterns.findObserveGroups(t, "^", /^\\[a-zA-Z]+\{/, "}", "", "", "{", "}", "", !0)
          },
          "^\\x{}": function(t) {
            return _.patterns.findObserveGroups(t, "^", /^\\[a-zA-Z]+\{/, "}", "")
          },
          "^\\x": /^\^(\\[a-zA-Z]+)\s*/,
          "^(-1)": /^\^(-?\d+)/,
          "'": /^'/,
          "_{(...)}": function(t) {
            return _.patterns.findObserveGroups(t, "_{", "", "", "}")
          },
          "_($...$)": function(t) {
            return _.patterns.findObserveGroups(t, "_", "$", "$", "")
          },
          _9: /^_([+\-]?[0-9]+|[^\\])/,
          "_\\x{}{}": function(t) {
            return _.patterns.findObserveGroups(t, "_", /^\\[a-zA-Z]+\{/, "}", "", "", "{", "}", "", !0)
          },
          "_\\x{}": function(t) {
            return _.patterns.findObserveGroups(t, "_", /^\\[a-zA-Z]+\{/, "}", "")
          },
          "_\\x": /^_(\\[a-zA-Z]+)\s*/,
          "^_": /^(?:\^(?=_)|\_(?=\^)|[\^_]$)/,
          "{}": /^\{\}/,
          "{...}": function(t) {
            return _.patterns.findObserveGroups(t, "", "{", "}", "")
          },
          "{(...)}": function(t) {
            return _.patterns.findObserveGroups(t, "{", "", "", "}")
          },
          "$...$": function(t) {
            return _.patterns.findObserveGroups(t, "", "$", "$", "")
          },
          "${(...)}$": function(t) {
            return _.patterns.findObserveGroups(t, "${", "", "", "}$")
          },
          "$(...)$": function(t) {
            return _.patterns.findObserveGroups(t, "$", "", "", "$")
          },
          "=<>": /^[=<>]/,
          "#": /^[#\u2261]/,
          "+": /^\+/,
          "-$": /^-(?=[\s_},;\]/]|$|\([a-z]+\))/,
          "-9": /^-(?=[0-9])/,
          "- orbital overlap": /^-(?=(?:[spd]|sp)(?:$|[\s,;\)\]\}]))/,
          "-": /^-/,
          "pm-operator": /^(?:\\pm|\$\\pm\$|\+-|\+\/-)/,
          operator: /^(?:\+|(?:[\-=<>]|<<|>>|\\approx|\$\\approx\$)(?=\s|$|-?[0-9]))/,
          arrowUpDown: /^(?:v|\(v\)|\^|\(\^\))(?=$|[\s,;\)\]\}])/,
          "\\bond{(...)}": function(t) {
            return _.patterns.findObserveGroups(t, "\\bond{", "", "", "}")
          },
          "->": /^(?:<->|<-->|->|<-|<=>>|<<=>|<=>|[\u2192\u27F6\u21CC])/,
          CMT: /^[CMT](?=\[)/,
          "[(...)]": function(t) {
            return _.patterns.findObserveGroups(t, "[", "", "", "]")
          },
          "1st-level escape": /^(&|\\\\|\\hline)\s*/,
          "\\,": /^(?:\\[,\ ;:])/,
          "\\x{}{}": function(t) {
            return _.patterns.findObserveGroups(t, "", /^\\[a-zA-Z]+\{/, "}", "", "", "{", "}", "", !0)
          },
          "\\x{}": function(t) {
            return _.patterns.findObserveGroups(t, "", /^\\[a-zA-Z]+\{/, "}", "")
          },
          "\\ca": /^\\ca(?:\s+|(?![a-zA-Z]))/,
          "\\x": /^(?:\\[a-zA-Z]+\s*|\\[_&{}%])/,
          orbital: /^(?:[0-9]{1,2}[spdfgh]|[0-9]{0,2}sp)(?=$|[^a-zA-Z])/,
          others: /^[\/~|]/,
          "\\frac{(...)}": function(t) {
            return _.patterns.findObserveGroups(t, "\\frac{", "", "", "}", "{", "", "", "}")
          },
          "\\overset{(...)}": function(t) {
            return _.patterns.findObserveGroups(t, "\\overset{", "", "", "}", "{", "", "", "}")
          },
          "\\underset{(...)}": function(t) {
            return _.patterns.findObserveGroups(t, "\\underset{", "", "", "}", "{", "", "", "}")
          },
          "\\underbrace{(...)}": function(t) {
            return _.patterns.findObserveGroups(t, "\\underbrace{", "", "", "}_", "{", "", "", "}")
          },
          "\\color{(...)}0": function(t) {
            return _.patterns.findObserveGroups(t, "\\color{", "", "", "}")
          },
          "\\color{(...)}{(...)}1": function(t) {
            return _.patterns.findObserveGroups(t, "\\color{", "", "", "}", "{", "", "", "}")
          },
          "\\color(...){(...)}2": function(t) {
            return _.patterns.findObserveGroups(t, "\\color", "\\", "", /^(?=\{)/, "{", "", "", "}")
          },
          "\\ce{(...)}": function(t) {
            return _.patterns.findObserveGroups(t, "\\ce{", "", "", "}")
          },
          oxidation$: /^(?:[+-][IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,
          "d-oxidation$": /^(?:[+-]?\s?[IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,
          "roman numeral": /^[IVX]+/,
          "1/2$": /^[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+(?:\$[a-z]\$|[a-z])?$/,
          amount: function(t) {
            var e;
            if (e = t.match(/^(?:(?:(?:\([+\-]?[0-9]+\/[0-9]+\)|[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+|[+\-]?[0-9]+[.,][0-9]+|[+\-]?\.[0-9]+|[+\-]?[0-9]+)(?:[a-z](?=\s*[A-Z]))?)|[+\-]?[a-z](?=\s*[A-Z])|\+(?!\s))/), e) return {
              match_: e[0],
              remainder: t.substr(e[0].length)
            };
            var r = _.patterns.findObserveGroups(t, "", "$", "$", "");
            return r && (e = r.match_.match(/^\$(?:\(?[+\-]?(?:[0-9]*[a-z]?[+\-])?[0-9]*[a-z](?:[+\-][0-9]*[a-z]?)?\)?|\+|-)\$$/), e) ? {
              match_: e[0],
              remainder: t.substr(e[0].length)
            } : null
          },
          amount2: function(t) {
            return this.amount(t)
          },
          "(KV letters),": /^(?:[A-Z][a-z]{0,2}|i)(?=,)/,
          formula$: function(t) {
            if (t.match(/^\([a-z]+\)$/)) return null;
            var e = t.match(/^(?:[a-z]|(?:[0-9\ \+\-\,\.\(\)]+[a-z])+[0-9\ \+\-\,\.\(\)]*|(?:[a-z][0-9\ \+\-\,\.\(\)]+)+[a-z]?)$/);
            return e ? {
              match_: e[0],
              remainder: t.substr(e[0].length)
            } : null
          },
          uprightEntities: /^(?:pH|pOH|pC|pK|iPr|iBu)(?=$|[^a-zA-Z])/,
          "/": /^\s*(\/)\s*/,
          "//": /^\s*(\/\/)\s*/,
          "*": /^\s*[*.]\s*/
        },
        findObserveGroups: function(t, e, r, i, o, a, n, s, l, c) {
          var u = function(k, S) {
              if (typeof S == "string") return k.indexOf(S) !== 0 ? null : S;
              var T = k.match(S);
              return T ? T[0] : null
            },
            d = function(k, S, T) {
              for (var L = 0; S < k.length;) {
                var D = k.charAt(S),
                  M = u(k.substr(S), T);
                if (M !== null && L === 0) return {
                  endMatchBegin: S,
                  endMatchEnd: S + M.length
                };
                if (D === "{") L++;
                else if (D === "}") {
                  if (L === 0) throw ["ExtraCloseMissingOpen", "Extra close brace or missing open brace"];
                  L--
                }
                S++
              }
              return L > 0, null
            },
            m = u(t, e);
          if (m === null || (t = t.substr(m.length), m = u(t, r), m === null)) return null;
          var h = d(t, m.length, i || o);
          if (h === null) return null;
          var f = t.substring(0, i ? h.endMatchEnd : h.endMatchBegin);
          if (a || n) {
            var y = this.findObserveGroups(t.substr(h.endMatchEnd), a, n, s, l);
            if (y === null) return null;
            var w = [f, y.match_];
            return {
              match_: c ? w.join("") : w,
              remainder: y.remainder
            }
          } else return {
            match_: f,
            remainder: t.substr(h.endMatchEnd)
          }
        },
        match_: function(t, e) {
          var r = _.patterns.patterns[t];
          if (r === void 0) throw ["MhchemBugP", "mhchem bug P. Please report. (" + t + ")"];
          if (typeof r == "function") return _.patterns.patterns[t](e);
          var i = e.match(r);
          if (i) {
            var o;
            return i[2] ? o = [i[1], i[2]] : i[1] ? o = i[1] : o = i[0], {
              match_: o,
              remainder: e.substr(i[0].length)
            }
          }
          return null
        }
      },
      actions: {
        "a=": function(t, e) {
          t.a = (t.a || "") + e
        },
        "b=": function(t, e) {
          t.b = (t.b || "") + e
        },
        "p=": function(t, e) {
          t.p = (t.p || "") + e
        },
        "o=": function(t, e) {
          t.o = (t.o || "") + e
        },
        "q=": function(t, e) {
          t.q = (t.q || "") + e
        },
        "d=": function(t, e) {
          t.d = (t.d || "") + e
        },
        "rm=": function(t, e) {
          t.rm = (t.rm || "") + e
        },
        "text=": function(t, e) {
          t.text_ = (t.text_ || "") + e
        },
        insert: function(t, e, r) {
          return {
            type_: r
          }
        },
        "insert+p1": function(t, e, r) {
          return {
            type_: r,
            p1: e
          }
        },
        "insert+p1+p2": function(t, e, r) {
          return {
            type_: r,
            p1: e[0],
            p2: e[1]
          }
        },
        copy: function(t, e) {
          return e
        },
        rm: function(t, e) {
          return {
            type_: "rm",
            p1: e || ""
          }
        },
        text: function(t, e) {
          return _.go(e, "text")
        },
        "{text}": function(t, e) {
          var r = ["{"];
          return _.concatArray(r, _.go(e, "text")), r.push("}"), r
        },
        "tex-math": function(t, e) {
          return _.go(e, "tex-math")
        },
        "tex-math tight": function(t, e) {
          return _.go(e, "tex-math tight")
        },
        bond: function(t, e, r) {
          return {
            type_: "bond",
            kind_: r || e
          }
        },
        "color0-output": function(t, e) {
          return {
            type_: "color0",
            color: e[0]
          }
        },
        ce: function(t, e) {
          return _.go(e)
        },
        "1/2": function(t, e) {
          var r = [];
          e.match(/^[+\-]/) && (r.push(e.substr(0, 1)), e = e.substr(1));
          var i = e.match(/^([0-9]+|\$[a-z]\$|[a-z])\/([0-9]+)(\$[a-z]\$|[a-z])?$/);
          return i[1] = i[1].replace(/\$/g, ""), r.push({
            type_: "frac",
            p1: i[1],
            p2: i[2]
          }), i[3] && (i[3] = i[3].replace(/\$/g, ""), r.push({
            type_: "tex-math",
            p1: i[3]
          })), r
        },
        "9,9": function(t, e) {
          return _.go(e, "9,9")
        }
      },
      createTransitions: function(t) {
        var e, r, i, o, a = {};
        for (e in t)
          for (r in t[e])
            for (i = r.split("|"), t[e][r].stateArray = i, o = 0; o < i.length; o++) a[i[o]] = [];
        for (e in t)
          for (r in t[e])
            for (i = t[e][r].stateArray || [], o = 0; o < i.length; o++) {
              var n = t[e][r];
              if (n.action_) {
                n.action_ = [].concat(n.action_);
                for (var s = 0; s < n.action_.length; s++) typeof n.action_[s] == "string" && (n.action_[s] = {
                  type_: n.action_[s]
                })
              } else n.action_ = [];
              for (var l = e.split("|"), c = 0; c < l.length; c++)
                if (i[o] === "*")
                  for (var u in a) a[u].push({
                    pattern: l[c],
                    task: n
                  });
                else a[i[o]].push({
                  pattern: l[c],
                  task: n
                })
            }
        return a
      },
      stateMachines: {}
    };
    _.stateMachines = {
      ce: {
        transitions: _.createTransitions({
          empty: {
            "*": {
              action_: "output"
            }
          },
          else: {
            "0|1|2": {
              action_: "beginsWithBond=false",
              revisit: !0,
              toContinue: !0
            }
          },
          oxidation$: {
            0: {
              action_: "oxidation-output"
            }
          },
          CMT: {
            r: {
              action_: "rdt=",
              nextState: "rt"
            },
            rd: {
              action_: "rqt=",
              nextState: "rdt"
            }
          },
          arrowUpDown: {
            "0|1|2|as": {
              action_: ["sb=false", "output", "operator"],
              nextState: "1"
            }
          },
          uprightEntities: {
            "0|1|2": {
              action_: ["o=", "output"],
              nextState: "1"
            }
          },
          orbital: {
            "0|1|2|3": {
              action_: "o=",
              nextState: "o"
            }
          },
          "->": {
            "0|1|2|3": {
              action_: "r=",
              nextState: "r"
            },
            "a|as": {
              action_: ["output", "r="],
              nextState: "r"
            },
            "*": {
              action_: ["output", "r="],
              nextState: "r"
            }
          },
          "+": {
            o: {
              action_: "d= kv",
              nextState: "d"
            },
            "d|D": {
              action_: "d=",
              nextState: "d"
            },
            q: {
              action_: "d=",
              nextState: "qd"
            },
            "qd|qD": {
              action_: "d=",
              nextState: "qd"
            },
            dq: {
              action_: ["output", "d="],
              nextState: "d"
            },
            3: {
              action_: ["sb=false", "output", "operator"],
              nextState: "0"
            }
          },
          amount: {
            "0|2": {
              action_: "a=",
              nextState: "a"
            }
          },
          "pm-operator": {
            "0|1|2|a|as": {
              action_: ["sb=false", "output", {
                type_: "operator",
                option: "\\pm"
              }],
              nextState: "0"
            }
          },
          operator: {
            "0|1|2|a|as": {
              action_: ["sb=false", "output", "operator"],
              nextState: "0"
            }
          },
          "-$": {
            "o|q": {
              action_: ["charge or bond", "output"],
              nextState: "qd"
            },
            d: {
              action_: "d=",
              nextState: "d"
            },
            D: {
              action_: ["output", {
                type_: "bond",
                option: "-"
              }],
              nextState: "3"
            },
            q: {
              action_: "d=",
              nextState: "qd"
            },
            qd: {
              action_: "d=",
              nextState: "qd"
            },
            "qD|dq": {
              action_: ["output", {
                type_: "bond",
                option: "-"
              }],
              nextState: "3"
            }
          },
          "-9": {
            "3|o": {
              action_: ["output", {
                type_: "insert",
                option: "hyphen"
              }],
              nextState: "3"
            }
          },
          "- orbital overlap": {
            o: {
              action_: ["output", {
                type_: "insert",
                option: "hyphen"
              }],
              nextState: "2"
            },
            d: {
              action_: ["output", {
                type_: "insert",
                option: "hyphen"
              }],
              nextState: "2"
            }
          },
          "-": {
            "0|1|2": {
              action_: [{
                type_: "output",
                option: 1
              }, "beginsWithBond=true", {
                type_: "bond",
                option: "-"
              }],
              nextState: "3"
            },
            3: {
              action_: {
                type_: "bond",
                option: "-"
              }
            },
            a: {
              action_: ["output", {
                type_: "insert",
                option: "hyphen"
              }],
              nextState: "2"
            },
            as: {
              action_: [{
                type_: "output",
                option: 2
              }, {
                type_: "bond",
                option: "-"
              }],
              nextState: "3"
            },
            b: {
              action_: "b="
            },
            o: {
              action_: {
                type_: "- after o/d",
                option: !1
              },
              nextState: "2"
            },
            q: {
              action_: {
                type_: "- after o/d",
                option: !1
              },
              nextState: "2"
            },
            "d|qd|dq": {
              action_: {
                type_: "- after o/d",
                option: !0
              },
              nextState: "2"
            },
            "D|qD|p": {
              action_: ["output", {
                type_: "bond",
                option: "-"
              }],
              nextState: "3"
            }
          },
          amount2: {
            "1|3": {
              action_: "a=",
              nextState: "a"
            }
          },
          letters: {
            "0|1|2|3|a|as|b|p|bp|o": {
              action_: "o=",
              nextState: "o"
            },
            "q|dq": {
              action_: ["output", "o="],
              nextState: "o"
            },
            "d|D|qd|qD": {
              action_: "o after d",
              nextState: "o"
            }
          },
          digits: {
            o: {
              action_: "q=",
              nextState: "q"
            },
            "d|D": {
              action_: "q=",
              nextState: "dq"
            },
            q: {
              action_: ["output", "o="],
              nextState: "o"
            },
            a: {
              action_: "o=",
              nextState: "o"
            }
          },
          "space A": {
            "b|p|bp": {}
          },
          space: {
            a: {
              nextState: "as"
            },
            0: {
              action_: "sb=false"
            },
            "1|2": {
              action_: "sb=true"
            },
            "r|rt|rd|rdt|rdq": {
              action_: "output",
              nextState: "0"
            },
            "*": {
              action_: ["output", "sb=true"],
              nextState: "1"
            }
          },
          "1st-level escape": {
            "1|2": {
              action_: ["output", {
                type_: "insert+p1",
                option: "1st-level escape"
              }]
            },
            "*": {
              action_: ["output", {
                type_: "insert+p1",
                option: "1st-level escape"
              }],
              nextState: "0"
            }
          },
          "[(...)]": {
            "r|rt": {
              action_: "rd=",
              nextState: "rd"
            },
            "rd|rdt": {
              action_: "rq=",
              nextState: "rdq"
            }
          },
          "...": {
            "o|d|D|dq|qd|qD": {
              action_: ["output", {
                type_: "bond",
                option: "..."
              }],
              nextState: "3"
            },
            "*": {
              action_: [{
                type_: "output",
                option: 1
              }, {
                type_: "insert",
                option: "ellipsis"
              }],
              nextState: "1"
            }
          },
          ". |* ": {
            "*": {
              action_: ["output", {
                type_: "insert",
                option: "addition compound"
              }],
              nextState: "1"
            }
          },
          "state of aggregation $": {
            "*": {
              action_: ["output", "state of aggregation"],
              nextState: "1"
            }
          },
          "{[(": {
            "a|as|o": {
              action_: ["o=", "output", "parenthesisLevel++"],
              nextState: "2"
            },
            "0|1|2|3": {
              action_: ["o=", "output", "parenthesisLevel++"],
              nextState: "2"
            },
            "*": {
              action_: ["output", "o=", "output", "parenthesisLevel++"],
              nextState: "2"
            }
          },
          ")]}": {
            "0|1|2|3|b|p|bp|o": {
              action_: ["o=", "parenthesisLevel--"],
              nextState: "o"
            },
            "a|as|d|D|q|qd|qD|dq": {
              action_: ["output", "o=", "parenthesisLevel--"],
              nextState: "o"
            }
          },
          ", ": {
            "*": {
              action_: ["output", "comma"],
              nextState: "0"
            }
          },
          "^_": {
            "*": {}
          },
          "^{(...)}|^($...$)": {
            "0|1|2|as": {
              action_: "b=",
              nextState: "b"
            },
            p: {
              action_: "b=",
              nextState: "bp"
            },
            "3|o": {
              action_: "d= kv",
              nextState: "D"
            },
            q: {
              action_: "d=",
              nextState: "qD"
            },
            "d|D|qd|qD|dq": {
              action_: ["output", "d="],
              nextState: "D"
            }
          },
          "^a|^\\x{}{}|^\\x{}|^\\x|'": {
            "0|1|2|as": {
              action_: "b=",
              nextState: "b"
            },
            p: {
              action_: "b=",
              nextState: "bp"
            },
            "3|o": {
              action_: "d= kv",
              nextState: "d"
            },
            q: {
              action_: "d=",
              nextState: "qd"
            },
            "d|qd|D|qD": {
              action_: "d="
            },
            dq: {
              action_: ["output", "d="],
              nextState: "d"
            }
          },
          "_{(state of aggregation)}$": {
            "d|D|q|qd|qD|dq": {
              action_: ["output", "q="],
              nextState: "q"
            }
          },
          "_{(...)}|_($...$)|_9|_\\x{}{}|_\\x{}|_\\x": {
            "0|1|2|as": {
              action_: "p=",
              nextState: "p"
            },
            b: {
              action_: "p=",
              nextState: "bp"
            },
            "3|o": {
              action_: "q=",
              nextState: "q"
            },
            "d|D": {
              action_: "q=",
              nextState: "dq"
            },
            "q|qd|qD|dq": {
              action_: ["output", "q="],
              nextState: "q"
            }
          },
          "=<>": {
            "0|1|2|3|a|as|o|q|d|D|qd|qD|dq": {
              action_: [{
                type_: "output",
                option: 2
              }, "bond"],
              nextState: "3"
            }
          },
          "#": {
            "0|1|2|3|a|as|o": {
              action_: [{
                type_: "output",
                option: 2
              }, {
                type_: "bond",
                option: "#"
              }],
              nextState: "3"
            }
          },
          "{}": {
            "*": {
              action_: {
                type_: "output",
                option: 1
              },
              nextState: "1"
            }
          },
          "{...}": {
            "0|1|2|3|a|as|b|p|bp": {
              action_: "o=",
              nextState: "o"
            },
            "o|d|D|q|qd|qD|dq": {
              action_: ["output", "o="],
              nextState: "o"
            }
          },
          "$...$": {
            a: {
              action_: "a="
            },
            "0|1|2|3|as|b|p|bp|o": {
              action_: "o=",
              nextState: "o"
            },
            "as|o": {
              action_: "o="
            },
            "q|d|D|qd|qD|dq": {
              action_: ["output", "o="],
              nextState: "o"
            }
          },
          "\\bond{(...)}": {
            "*": {
              action_: [{
                type_: "output",
                option: 2
              }, "bond"],
              nextState: "3"
            }
          },
          "\\frac{(...)}": {
            "*": {
              action_: [{
                type_: "output",
                option: 1
              }, "frac-output"],
              nextState: "3"
            }
          },
          "\\overset{(...)}": {
            "*": {
              action_: [{
                type_: "output",
                option: 2
              }, "overset-output"],
              nextState: "3"
            }
          },
          "\\underset{(...)}": {
            "*": {
              action_: [{
                type_: "output",
                option: 2
              }, "underset-output"],
              nextState: "3"
            }
          },
          "\\underbrace{(...)}": {
            "*": {
              action_: [{
                type_: "output",
                option: 2
              }, "underbrace-output"],
              nextState: "3"
            }
          },
          "\\color{(...)}{(...)}1|\\color(...){(...)}2": {
            "*": {
              action_: [{
                type_: "output",
                option: 2
              }, "color-output"],
              nextState: "3"
            }
          },
          "\\color{(...)}0": {
            "*": {
              action_: [{
                type_: "output",
                option: 2
              }, "color0-output"]
            }
          },
          "\\ce{(...)}": {
            "*": {
              action_: [{
                type_: "output",
                option: 2
              }, "ce"],
              nextState: "3"
            }
          },
          "\\,": {
            "*": {
              action_: [{
                type_: "output",
                option: 1
              }, "copy"],
              nextState: "1"
            }
          },
          "\\x{}{}|\\x{}|\\x": {
            "0|1|2|3|a|as|b|p|bp|o|c0": {
              action_: ["o=", "output"],
              nextState: "3"
            },
            "*": {
              action_: ["output", "o=", "output"],
              nextState: "3"
            }
          },
          others: {
            "*": {
              action_: [{
                type_: "output",
                option: 1
              }, "copy"],
              nextState: "3"
            }
          },
          else2: {
            a: {
              action_: "a to o",
              nextState: "o",
              revisit: !0
            },
            as: {
              action_: ["output", "sb=true"],
              nextState: "1",
              revisit: !0
            },
            "r|rt|rd|rdt|rdq": {
              action_: ["output"],
              nextState: "0",
              revisit: !0
            },
            "*": {
              action_: ["output", "copy"],
              nextState: "3"
            }
          }
        }),
        actions: {
          "o after d": function(t, e) {
            var r;
            if ((t.d || "").match(/^[0-9]+$/)) {
              var i = t.d;
              t.d = void 0, r = this.output(t), t.b = i
            } else r = this.output(t);
            return _.actions["o="](t, e), r
          },
          "d= kv": function(t, e) {
            t.d = e, t.dType = "kv"
          },
          "charge or bond": function(t, e) {
            if (t.beginsWithBond) {
              var r = [];
              return _.concatArray(r, this.output(t)), _.concatArray(r, _.actions.bond(t, e, "-")), r
            } else t.d = e
          },
          "- after o/d": function(t, e, r) {
            var i = _.patterns.match_("orbital", t.o || ""),
              o = _.patterns.match_("one lowercase greek letter $", t.o || ""),
              a = _.patterns.match_("one lowercase latin letter $", t.o || ""),
              n = _.patterns.match_("$one lowercase latin letter$ $", t.o || ""),
              s = e === "-" && (i && i.remainder === "" || o || a || n);
            s && !t.a && !t.b && !t.p && !t.d && !t.q && !i && a && (t.o = "$" + t.o + "$");
            var l = [];
            return s ? (_.concatArray(l, this.output(t)), l.push({
              type_: "hyphen"
            })) : (i = _.patterns.match_("digits", t.d || ""), r && i && i.remainder === "" ? (_.concatArray(l, _.actions["d="](t, e)), _.concatArray(l, this.output(t))) : (_.concatArray(l, this.output(t)), _.concatArray(l, _.actions.bond(t, e, "-")))), l
          },
          "a to o": function(t) {
            t.o = t.a, t.a = void 0
          },
          "sb=true": function(t) {
            t.sb = !0
          },
          "sb=false": function(t) {
            t.sb = !1
          },
          "beginsWithBond=true": function(t) {
            t.beginsWithBond = !0
          },
          "beginsWithBond=false": function(t) {
            t.beginsWithBond = !1
          },
          "parenthesisLevel++": function(t) {
            t.parenthesisLevel++
          },
          "parenthesisLevel--": function(t) {
            t.parenthesisLevel--
          },
          "state of aggregation": function(t, e) {
            return {
              type_: "state of aggregation",
              p1: _.go(e, "o")
            }
          },
          comma: function(t, e) {
            var r = e.replace(/\s*$/, ""),
              i = r !== e;
            return i && t.parenthesisLevel === 0 ? {
              type_: "comma enumeration L",
              p1: r
            } : {
              type_: "comma enumeration M",
              p1: r
            }
          },
          output: function(t, e, r) {
            var i;
            if (!t.r) i = [], !t.a && !t.b && !t.p && !t.o && !t.q && !t.d && !r || (t.sb && i.push({
              type_: "entitySkip"
            }), !t.o && !t.q && !t.d && !t.b && !t.p && r !== 2 ? (t.o = t.a, t.a = void 0) : !t.o && !t.q && !t.d && (t.b || t.p) ? (t.o = t.a, t.d = t.b, t.q = t.p, t.a = t.b = t.p = void 0) : t.o && t.dType === "kv" && _.patterns.match_("d-oxidation$", t.d || "") ? t.dType = "oxidation" : t.o && t.dType === "kv" && !t.q && (t.dType = void 0), i.push({
              type_: "chemfive",
              a: _.go(t.a, "a"),
              b: _.go(t.b, "bd"),
              p: _.go(t.p, "pq"),
              o: _.go(t.o, "o"),
              q: _.go(t.q, "pq"),
              d: _.go(t.d, t.dType === "oxidation" ? "oxidation" : "bd"),
              dType: t.dType
            }));
            else {
              var o;
              t.rdt === "M" ? o = _.go(t.rd, "tex-math") : t.rdt === "T" ? o = [{
                type_: "text",
                p1: t.rd || ""
              }] : o = _.go(t.rd);
              var a;
              t.rqt === "M" ? a = _.go(t.rq, "tex-math") : t.rqt === "T" ? a = [{
                type_: "text",
                p1: t.rq || ""
              }] : a = _.go(t.rq), i = {
                type_: "arrow",
                r: t.r,
                rd: o,
                rq: a
              }
            }
            for (var n in t) n !== "parenthesisLevel" && n !== "beginsWithBond" && delete t[n];
            return i
          },
          "oxidation-output": function(t, e) {
            var r = ["{"];
            return _.concatArray(r, _.go(e, "oxidation")), r.push("}"), r
          },
          "frac-output": function(t, e) {
            return {
              type_: "frac-ce",
              p1: _.go(e[0]),
              p2: _.go(e[1])
            }
          },
          "overset-output": function(t, e) {
            return {
              type_: "overset",
              p1: _.go(e[0]),
              p2: _.go(e[1])
            }
          },
          "underset-output": function(t, e) {
            return {
              type_: "underset",
              p1: _.go(e[0]),
              p2: _.go(e[1])
            }
          },
          "underbrace-output": function(t, e) {
            return {
              type_: "underbrace",
              p1: _.go(e[0]),
              p2: _.go(e[1])
            }
          },
          "color-output": function(t, e) {
            return {
              type_: "color",
              color1: e[0],
              color2: _.go(e[1])
            }
          },
          "r=": function(t, e) {
            t.r = e
          },
          "rdt=": function(t, e) {
            t.rdt = e
          },
          "rd=": function(t, e) {
            t.rd = e
          },
          "rqt=": function(t, e) {
            t.rqt = e
          },
          "rq=": function(t, e) {
            t.rq = e
          },
          operator: function(t, e, r) {
            return {
              type_: "operator",
              kind_: r || e
            }
          }
        }
      },
      a: {
        transitions: _.createTransitions({
          empty: {
            "*": {}
          },
          "1/2$": {
            0: {
              action_: "1/2"
            }
          },
          else: {
            0: {
              nextState: "1",
              revisit: !0
            }
          },
          "$(...)$": {
            "*": {
              action_: "tex-math tight",
              nextState: "1"
            }
          },
          ",": {
            "*": {
              action_: {
                type_: "insert",
                option: "commaDecimal"
              }
            }
          },
          else2: {
            "*": {
              action_: "copy"
            }
          }
        }),
        actions: {}
      },
      o: {
        transitions: _.createTransitions({
          empty: {
            "*": {}
          },
          "1/2$": {
            0: {
              action_: "1/2"
            }
          },
          else: {
            0: {
              nextState: "1",
              revisit: !0
            }
          },
          letters: {
            "*": {
              action_: "rm"
            }
          },
          "\\ca": {
            "*": {
              action_: {
                type_: "insert",
                option: "circa"
              }
            }
          },
          "\\x{}{}|\\x{}|\\x": {
            "*": {
              action_: "copy"
            }
          },
          "${(...)}$|$(...)$": {
            "*": {
              action_: "tex-math"
            }
          },
          "{(...)}": {
            "*": {
              action_: "{text}"
            }
          },
          else2: {
            "*": {
              action_: "copy"
            }
          }
        }),
        actions: {}
      },
      text: {
        transitions: _.createTransitions({
          empty: {
            "*": {
              action_: "output"
            }
          },
          "{...}": {
            "*": {
              action_: "text="
            }
          },
          "${(...)}$|$(...)$": {
            "*": {
              action_: "tex-math"
            }
          },
          "\\greek": {
            "*": {
              action_: ["output", "rm"]
            }
          },
          "\\,|\\x{}{}|\\x{}|\\x": {
            "*": {
              action_: ["output", "copy"]
            }
          },
          else: {
            "*": {
              action_: "text="
            }
          }
        }),
        actions: {
          output: function(t) {
            if (t.text_) {
              var e = {
                type_: "text",
                p1: t.text_
              };
              for (var r in t) delete t[r];
              return e
            }
          }
        }
      },
      pq: {
        transitions: _.createTransitions({
          empty: {
            "*": {}
          },
          "state of aggregation $": {
            "*": {
              action_: "state of aggregation"
            }
          },
          i$: {
            0: {
              nextState: "!f",
              revisit: !0
            }
          },
          "(KV letters),": {
            0: {
              action_: "rm",
              nextState: "0"
            }
          },
          formula$: {
            0: {
              nextState: "f",
              revisit: !0
            }
          },
          "1/2$": {
            0: {
              action_: "1/2"
            }
          },
          else: {
            0: {
              nextState: "!f",
              revisit: !0
            }
          },
          "${(...)}$|$(...)$": {
            "*": {
              action_: "tex-math"
            }
          },
          "{(...)}": {
            "*": {
              action_: "text"
            }
          },
          "a-z": {
            f: {
              action_: "tex-math"
            }
          },
          letters: {
            "*": {
              action_: "rm"
            }
          },
          "-9.,9": {
            "*": {
              action_: "9,9"
            }
          },
          ",": {
            "*": {
              action_: {
                type_: "insert+p1",
                option: "comma enumeration S"
              }
            }
          },
          "\\color{(...)}{(...)}1|\\color(...){(...)}2": {
            "*": {
              action_: "color-output"
            }
          },
          "\\color{(...)}0": {
            "*": {
              action_: "color0-output"
            }
          },
          "\\ce{(...)}": {
            "*": {
              action_: "ce"
            }
          },
          "\\,|\\x{}{}|\\x{}|\\x": {
            "*": {
              action_: "copy"
            }
          },
          else2: {
            "*": {
              action_: "copy"
            }
          }
        }),
        actions: {
          "state of aggregation": function(t, e) {
            return {
              type_: "state of aggregation subscript",
              p1: _.go(e, "o")
            }
          },
          "color-output": function(t, e) {
            return {
              type_: "color",
              color1: e[0],
              color2: _.go(e[1], "pq")
            }
          }
        }
      },
      bd: {
        transitions: _.createTransitions({
          empty: {
            "*": {}
          },
          x$: {
            0: {
              nextState: "!f",
              revisit: !0
            }
          },
          formula$: {
            0: {
              nextState: "f",
              revisit: !0
            }
          },
          else: {
            0: {
              nextState: "!f",
              revisit: !0
            }
          },
          "-9.,9 no missing 0": {
            "*": {
              action_: "9,9"
            }
          },
          ".": {
            "*": {
              action_: {
                type_: "insert",
                option: "electron dot"
              }
            }
          },
          "a-z": {
            f: {
              action_: "tex-math"
            }
          },
          x: {
            "*": {
              action_: {
                type_: "insert",
                option: "KV x"
              }
            }
          },
          letters: {
            "*": {
              action_: "rm"
            }
          },
          "'": {
            "*": {
              action_: {
                type_: "insert",
                option: "prime"
              }
            }
          },
          "${(...)}$|$(...)$": {
            "*": {
              action_: "tex-math"
            }
          },
          "{(...)}": {
            "*": {
              action_: "text"
            }
          },
          "\\color{(...)}{(...)}1|\\color(...){(...)}2": {
            "*": {
              action_: "color-output"
            }
          },
          "\\color{(...)}0": {
            "*": {
              action_: "color0-output"
            }
          },
          "\\ce{(...)}": {
            "*": {
              action_: "ce"
            }
          },
          "\\,|\\x{}{}|\\x{}|\\x": {
            "*": {
              action_: "copy"
            }
          },
          else2: {
            "*": {
              action_: "copy"
            }
          }
        }),
        actions: {
          "color-output": function(t, e) {
            return {
              type_: "color",
              color1: e[0],
              color2: _.go(e[1], "bd")
            }
          }
        }
      },
      oxidation: {
        transitions: _.createTransitions({
          empty: {
            "*": {}
          },
          "roman numeral": {
            "*": {
              action_: "roman-numeral"
            }
          },
          "${(...)}$|$(...)$": {
            "*": {
              action_: "tex-math"
            }
          },
          else: {
            "*": {
              action_: "copy"
            }
          }
        }),
        actions: {
          "roman-numeral": function(t, e) {
            return {
              type_: "roman numeral",
              p1: e || ""
            }
          }
        }
      },
      "tex-math": {
        transitions: _.createTransitions({
          empty: {
            "*": {
              action_: "output"
            }
          },
          "\\ce{(...)}": {
            "*": {
              action_: ["output", "ce"]
            }
          },
          "{...}|\\,|\\x{}{}|\\x{}|\\x": {
            "*": {
              action_: "o="
            }
          },
          else: {
            "*": {
              action_: "o="
            }
          }
        }),
        actions: {
          output: function(t) {
            if (t.o) {
              var e = {
                type_: "tex-math",
                p1: t.o
              };
              for (var r in t) delete t[r];
              return e
            }
          }
        }
      },
      "tex-math tight": {
        transitions: _.createTransitions({
          empty: {
            "*": {
              action_: "output"
            }
          },
          "\\ce{(...)}": {
            "*": {
              action_: ["output", "ce"]
            }
          },
          "{...}|\\,|\\x{}{}|\\x{}|\\x": {
            "*": {
              action_: "o="
            }
          },
          "-|+": {
            "*": {
              action_: "tight operator"
            }
          },
          else: {
            "*": {
              action_: "o="
            }
          }
        }),
        actions: {
          "tight operator": function(t, e) {
            t.o = (t.o || "") + "{" + e + "}"
          },
          output: function(t) {
            if (t.o) {
              var e = {
                type_: "tex-math",
                p1: t.o
              };
              for (var r in t) delete t[r];
              return e
            }
          }
        }
      },
      "9,9": {
        transitions: _.createTransitions({
          empty: {
            "*": {}
          },
          ",": {
            "*": {
              action_: "comma"
            }
          },
          else: {
            "*": {
              action_: "copy"
            }
          }
        }),
        actions: {
          comma: function() {
            return {
              type_: "commaDecimal"
            }
          }
        }
      },
      pu: {
        transitions: _.createTransitions({
          empty: {
            "*": {
              action_: "output"
            }
          },
          space$: {
            "*": {
              action_: ["output", "space"]
            }
          },
          "{[(|)]}": {
            "0|a": {
              action_: "copy"
            }
          },
          "(-)(9)^(-9)": {
            0: {
              action_: "number^",
              nextState: "a"
            }
          },
          "(-)(9.,9)(e)(99)": {
            0: {
              action_: "enumber",
              nextState: "a"
            }
          },
          space: {
            "0|a": {}
          },
          "pm-operator": {
            "0|a": {
              action_: {
                type_: "operator",
                option: "\\pm"
              },
              nextState: "0"
            }
          },
          operator: {
            "0|a": {
              action_: "copy",
              nextState: "0"
            }
          },
          "//": {
            d: {
              action_: "o=",
              nextState: "/"
            }
          },
          "/": {
            d: {
              action_: "o=",
              nextState: "/"
            }
          },
          "{...}|else": {
            "0|d": {
              action_: "d=",
              nextState: "d"
            },
            a: {
              action_: ["space", "d="],
              nextState: "d"
            },
            "/|q": {
              action_: "q=",
              nextState: "q"
            }
          }
        }),
        actions: {
          enumber: function(t, e) {
            var r = [];
            return e[0] === "+-" || e[0] === "+/-" ? r.push("\\pm ") : e[0] && r.push(e[0]), e[1] && (_.concatArray(r, _.go(e[1], "pu-9,9")), e[2] && (e[2].match(/[,.]/) ? _.concatArray(r, _.go(e[2], "pu-9,9")) : r.push(e[2])), e[3] = e[4] || e[3], e[3] && (e[3] = e[3].trim(), e[3] === "e" || e[3].substr(0, 1) === "*" ? r.push({
              type_: "cdot"
            }) : r.push({
              type_: "times"
            }))), e[3] && r.push("10^{" + e[5] + "}"), r
          },
          "number^": function(t, e) {
            var r = [];
            return e[0] === "+-" || e[0] === "+/-" ? r.push("\\pm ") : e[0] && r.push(e[0]), _.concatArray(r, _.go(e[1], "pu-9,9")), r.push("^{" + e[2] + "}"), r
          },
          operator: function(t, e, r) {
            return {
              type_: "operator",
              kind_: r || e
            }
          },
          space: function() {
            return {
              type_: "pu-space-1"
            }
          },
          output: function(t) {
            var e, r = _.patterns.match_("{(...)}", t.d || "");
            r && r.remainder === "" && (t.d = r.match_);
            var i = _.patterns.match_("{(...)}", t.q || "");
            if (i && i.remainder === "" && (t.q = i.match_), t.d && (t.d = t.d.replace(/\u00B0C|\^oC|\^{o}C/g, "{}^{\\circ}C"), t.d = t.d.replace(/\u00B0F|\^oF|\^{o}F/g, "{}^{\\circ}F")), t.q) {
              t.q = t.q.replace(/\u00B0C|\^oC|\^{o}C/g, "{}^{\\circ}C"), t.q = t.q.replace(/\u00B0F|\^oF|\^{o}F/g, "{}^{\\circ}F");
              var o = {
                d: _.go(t.d, "pu"),
                q: _.go(t.q, "pu")
              };
              t.o === "//" ? e = {
                type_: "pu-frac",
                p1: o.d,
                p2: o.q
              } : (e = o.d, o.d.length > 1 || o.q.length > 1 ? e.push({
                type_: " / "
              }) : e.push({
                type_: "/"
              }), _.concatArray(e, o.q))
            } else e = _.go(t.d, "pu-2");
            for (var a in t) delete t[a];
            return e
          }
        }
      },
      "pu-2": {
        transitions: _.createTransitions({
          empty: {
            "*": {
              action_: "output"
            }
          },
          "*": {
            "*": {
              action_: ["output", "cdot"],
              nextState: "0"
            }
          },
          "\\x": {
            "*": {
              action_: "rm="
            }
          },
          space: {
            "*": {
              action_: ["output", "space"],
              nextState: "0"
            }
          },
          "^{(...)}|^(-1)": {
            1: {
              action_: "^(-1)"
            }
          },
          "-9.,9": {
            0: {
              action_: "rm=",
              nextState: "0"
            },
            1: {
              action_: "^(-1)",
              nextState: "0"
            }
          },
          "{...}|else": {
            "*": {
              action_: "rm=",
              nextState: "1"
            }
          }
        }),
        actions: {
          cdot: function() {
            return {
              type_: "tight cdot"
            }
          },
          "^(-1)": function(t, e) {
            t.rm += "^{" + e + "}"
          },
          space: function() {
            return {
              type_: "pu-space-2"
            }
          },
          output: function(t) {
            var e = [];
            if (t.rm) {
              var r = _.patterns.match_("{(...)}", t.rm || "");
              r && r.remainder === "" ? e = _.go(r.match_, "pu") : e = {
                type_: "rm",
                p1: t.rm
              }
            }
            for (var i in t) delete t[i];
            return e
          }
        }
      },
      "pu-9,9": {
        transitions: _.createTransitions({
          empty: {
            0: {
              action_: "output-0"
            },
            o: {
              action_: "output-o"
            }
          },
          ",": {
            0: {
              action_: ["output-0", "comma"],
              nextState: "o"
            }
          },
          ".": {
            0: {
              action_: ["output-0", "copy"],
              nextState: "o"
            }
          },
          else: {
            "*": {
              action_: "text="
            }
          }
        }),
        actions: {
          comma: function() {
            return {
              type_: "commaDecimal"
            }
          },
          "output-0": function(t) {
            var e = [];
            if (t.text_ = t.text_ || "", t.text_.length > 4) {
              var r = t.text_.length % 3;
              r === 0 && (r = 3);
              for (var i = t.text_.length - 3; i > 0; i -= 3) e.push(t.text_.substr(i, 3)), e.push({
                type_: "1000 separator"
              });
              e.push(t.text_.substr(0, r)), e.reverse()
            } else e.push(t.text_);
            for (var o in t) delete t[o];
            return e
          },
          "output-o": function(t) {
            var e = [];
            if (t.text_ = t.text_ || "", t.text_.length > 4) {
              for (var r = t.text_.length - 3, i = 0; i < r; i += 3) e.push(t.text_.substr(i, 3)), e.push({
                type_: "1000 separator"
              });
              e.push(t.text_.substr(i))
            } else e.push(t.text_);
            for (var o in t) delete t[o];
            return e
          }
        }
      }
    };
    var ne = {
      go: function(t, e) {
        if (!t) return "";
        for (var r = "", i = !1, o = 0; o < t.length; o++) {
          var a = t[o];
          typeof a == "string" ? r += a : (r += ne._go2(a), a.type_ === "1st-level escape" && (i = !0))
        }
        return !e && !i && r && (r = "{" + r + "}"), r
      },
      _goInner: function(t) {
        return t && ne.go(t, !0)
      },
      _go2: function(t) {
        var e;
        switch (t.type_) {
          case "chemfive":
            e = "";
            var r = {
              a: ne._goInner(t.a),
              b: ne._goInner(t.b),
              p: ne._goInner(t.p),
              o: ne._goInner(t.o),
              q: ne._goInner(t.q),
              d: ne._goInner(t.d)
            };
            r.a && (r.a.match(/^[+\-]/) && (r.a = "{" + r.a + "}"), e += r.a + "\\,"), (r.b || r.p) && (e += "{\\vphantom{X}}", e += "^{\\hphantom{" + (r.b || "") + "}}_{\\hphantom{" + (r.p || "") + "}}", e += "{\\vphantom{X}}", e += "^{\\smash[t]{\\vphantom{2}}\\mathllap{" + (r.b || "") + "}}", e += "_{\\vphantom{2}\\mathllap{\\smash[t]{" + (r.p || "") + "}}}"), r.o && (r.o.match(/^[+\-]/) && (r.o = "{" + r.o + "}"), e += r.o), t.dType === "kv" ? ((r.d || r.q) && (e += "{\\vphantom{X}}"), r.d && (e += "^{" + r.d + "}"), r.q && (e += "_{\\smash[t]{" + r.q + "}}")) : t.dType === "oxidation" ? (r.d && (e += "{\\vphantom{X}}", e += "^{" + r.d + "}"), r.q && (e += "{\\vphantom{X}}", e += "_{\\smash[t]{" + r.q + "}}")) : (r.q && (e += "{\\vphantom{X}}", e += "_{\\smash[t]{" + r.q + "}}"), r.d && (e += "{\\vphantom{X}}", e += "^{" + r.d + "}"));
            break;
          case "rm":
            e = "\\mathrm{" + t.p1 + "}";
            break;
          case "text":
            t.p1.match(/[\^_]/) ? (t.p1 = t.p1.replace(" ", "~").replace("-", "\\text{-}"), e = "\\mathrm{" + t.p1 + "}") : e = "\\text{" + t.p1 + "}";
            break;
          case "roman numeral":
            e = "\\mathrm{" + t.p1 + "}";
            break;
          case "state of aggregation":
            e = "\\mskip2mu " + ne._goInner(t.p1);
            break;
          case "state of aggregation subscript":
            e = "\\mskip1mu " + ne._goInner(t.p1);
            break;
          case "bond":
            if (e = ne._getBond(t.kind_), !e) throw ["MhchemErrorBond", "mhchem Error. Unknown bond type (" + t.kind_ + ")"];
            break;
          case "frac":
            var i = "\\frac{" + t.p1 + "}{" + t.p2 + "}";
            e = "\\mathchoice{\\textstyle" + i + "}{" + i + "}{" + i + "}{" + i + "}";
            break;
          case "pu-frac":
            var o = "\\frac{" + ne._goInner(t.p1) + "}{" + ne._goInner(t.p2) + "}";
            e = "\\mathchoice{\\textstyle" + o + "}{" + o + "}{" + o + "}{" + o + "}";
            break;
          case "tex-math":
            e = t.p1 + " ";
            break;
          case "frac-ce":
            e = "\\frac{" + ne._goInner(t.p1) + "}{" + ne._goInner(t.p2) + "}";
            break;
          case "overset":
            e = "\\overset{" + ne._goInner(t.p1) + "}{" + ne._goInner(t.p2) + "}";
            break;
          case "underset":
            e = "\\underset{" + ne._goInner(t.p1) + "}{" + ne._goInner(t.p2) + "}";
            break;
          case "underbrace":
            e = "\\underbrace{" + ne._goInner(t.p1) + "}_{" + ne._goInner(t.p2) + "}";
            break;
          case "color":
            e = "{\\color{" + t.color1 + "}{" + ne._goInner(t.color2) + "}}";
            break;
          case "color0":
            e = "\\color{" + t.color + "}";
            break;
          case "arrow":
            var a = {
                rd: ne._goInner(t.rd),
                rq: ne._goInner(t.rq)
              },
              n = "\\x" + ne._getArrow(t.r);
            a.rq && (n += "[{" + a.rq + "}]"), a.rd ? n += "{" + a.rd + "}" : n += "{}", e = n;
            break;
          case "operator":
            e = ne._getOperator(t.kind_);
            break;
          case "1st-level escape":
            e = t.p1 + " ";
            break;
          case "space":
            e = " ";
            break;
          case "entitySkip":
            e = "~";
            break;
          case "pu-space-1":
            e = "~";
            break;
          case "pu-space-2":
            e = "\\mkern3mu ";
            break;
          case "1000 separator":
            e = "\\mkern2mu ";
            break;
          case "commaDecimal":
            e = "{,}";
            break;
          case "comma enumeration L":
            e = "{" + t.p1 + "}\\mkern6mu ";
            break;
          case "comma enumeration M":
            e = "{" + t.p1 + "}\\mkern3mu ";
            break;
          case "comma enumeration S":
            e = "{" + t.p1 + "}\\mkern1mu ";
            break;
          case "hyphen":
            e = "\\text{-}";
            break;
          case "addition compound":
            e = "\\,{\\cdot}\\,";
            break;
          case "electron dot":
            e = "\\mkern1mu \\bullet\\mkern1mu ";
            break;
          case "KV x":
            e = "{\\times}";
            break;
          case "prime":
            e = "\\prime ";
            break;
          case "cdot":
            e = "\\cdot ";
            break;
          case "tight cdot":
            e = "\\mkern1mu{\\cdot}\\mkern1mu ";
            break;
          case "times":
            e = "\\times ";
            break;
          case "circa":
            e = "{\\sim}";
            break;
          case "^":
            e = "uparrow";
            break;
          case "v":
            e = "downarrow";
            break;
          case "ellipsis":
            e = "\\ldots ";
            break;
          case "/":
            e = "/";
            break;
          case " / ":
            e = "\\,/\\,";
            break;
          default:
            throw ["MhchemBugT", "mhchem bug T. Please report."]
        }
        return e
      },
      _getArrow: function(t) {
        switch (t) {
          case "->":
            return "rightarrow";
          case "\u2192":
            return "rightarrow";
          case "\u27F6":
            return "rightarrow";
          case "<-":
            return "leftarrow";
          case "<->":
            return "leftrightarrow";
          case "<-->":
            return "rightleftarrows";
          case "<=>":
            return "rightleftharpoons";
          case "\u21CC":
            return "rightleftharpoons";
          case "<=>>":
            return "rightequilibrium";
          case "<<=>":
            return "leftequilibrium";
          default:
            throw ["MhchemBugT", "mhchem bug T. Please report."]
        }
      },
      _getBond: function(t) {
        switch (t) {
          case "-":
            return "{-}";
          case "1":
            return "{-}";
          case "=":
            return "{=}";
          case "2":
            return "{=}";
          case "#":
            return "{\\equiv}";
          case "3":
            return "{\\equiv}";
          case "~":
            return "{\\tripledash}";
          case "~-":
            return "{\\mathrlap{\\raisebox{-.1em}{$-$}}\\raisebox{.1em}{$\\tripledash$}}";
          case "~=":
            return "{\\mathrlap{\\raisebox{-.2em}{$-$}}\\mathrlap{\\raisebox{.2em}{$\\tripledash$}}-}";
          case "~--":
            return "{\\mathrlap{\\raisebox{-.2em}{$-$}}\\mathrlap{\\raisebox{.2em}{$\\tripledash$}}-}";
          case "-~-":
            return "{\\mathrlap{\\raisebox{-.2em}{$-$}}\\mathrlap{\\raisebox{.2em}{$-$}}\\tripledash}";
          case "...":
            return "{{\\cdot}{\\cdot}{\\cdot}}";
          case "....":
            return "{{\\cdot}{\\cdot}{\\cdot}{\\cdot}}";
          case "->":
            return "{\\rightarrow}";
          case "<-":
            return "{\\leftarrow}";
          case "<":
            return "{<}";
          case ">":
            return "{>}";
          default:
            throw ["MhchemBugT", "mhchem bug T. Please report."]
        }
      },
      _getOperator: function(t) {
        switch (t) {
          case "+":
            return " {}+{} ";
          case "-":
            return " {}-{} ";
          case "=":
            return " {}={} ";
          case "<":
            return " {}<{} ";
          case ">":
            return " {}>{} ";
          case "<<":
            return " {}\\ll{} ";
          case ">>":
            return " {}\\gg{} ";
          case "\\pm":
            return " {}\\pm{} ";
          case "\\approx":
            return " {}\\approx{} ";
          case "$\\approx$":
            return " {}\\approx{} ";
          case "v":
            return " \\downarrow{} ";
          case "(v)":
            return " \\downarrow{} ";
          case "^":
            return " \\uparrow{} ";
          case "(^)":
            return " \\uparrow{} ";
          default:
            throw ["MhchemBugT", "mhchem bug T. Please report."]
        }
      }
    };
    var et = class extends g {
      constructor(r, i, o, a) {
        super("box", o, {
          command: r,
          serialize: a.serialize,
          style: a.style
        });
        this.body = i, this.framecolor = a.framecolor, this.verbatimFramecolor = a.verbatimBackgroundcolor, this.backgroundcolor = a.backgroundcolor, this.verbatimBackgroundcolor = a.verbatimBackgroundcolor, this.padding = a.padding, this.border = a.border
      }
      static fromJson(r, i) {
        return new et(r.command, r.body, i, r)
      }
      toJson() {
        return P(b({}, super.toJson()), {
          framecolor: this.framecolor,
          verbatimFramecolor: this.verbatimFramecolor,
          backgroundcolor: this.backgroundcolor,
          verbatimBackgroundcolor: this.verbatimBackgroundcolor,
          padding: this.padding,
          border: this.border
        })
      }
      render(r) {
        let i = new E(r, this.style),
          o = Ae(i.getRegisterAsDimension("fboxsep")),
          a = this.padding === void 0 ? o : Ae(wr(this.padding, P(b({}, this.context), {
            registers: r.registers
          }))),
          n = g.createBox(r, this.body);
        if (!n) return null;
        n.setStyle("vertical-align", -n.height, "em");
        let s = new v(n, {
            type: "mord"
          }),
          l = new v(null, {
            classes: "ML__box"
          });
        l.height = s.height + a, l.depth = s.depth + a, l.setStyle("box-sizing", "border-box"), l.setStyle("position", "absolute"), l.setStyle("height", s.height + s.depth + 2 * a, "em"), a === 0 ? l.setStyle("width", "100%") : (l.setStyle("width", `calc(100% + ${2*a}em)`), l.setStyle("top", o, "em"), l.setStyle("left", -a, "em")), this.backgroundcolor && l.setStyle("background-color", this.backgroundcolor), this.framecolor && l.setStyle("border", `${Ae(i.getRegisterAsDimension("fboxrule"))}em solid ${this.framecolor}`), this.border && l.setStyle("border", this.border), s.setStyle("display", "inline-block"), s.setStyle("height", n.height + n.depth, "em"), s.setStyle("vertical-align", -a, "em");
        let c = new v([l, s]);
        return c.setStyle("position", "relative"), c.setStyle("display", "inline-block"), c.setStyle("line-height", 0), c.height = s.height + a, c.depth = s.depth + a, c.left = a, c.right = a, c.setStyle("height", s.height + a, "em"), c.setStyle("top", s.depth - s.height, "em"), c.setStyle("vertical-align", s.depth + a, "em"), this.caret && (c.caret = this.caret), this.attachSupsub(r, {
          base: c
        })
      }
    };
    var sr = class extends g {
      constructor(e, r, i) {
        var o;
        super("composition", r, {
          mode: (o = i == null ? void 0 : i.mode) != null ? o : "math",
          value: e
        })
      }
      static fromJson(e, r) {
        return new sr(e.value, r, e)
      }
      toJson() {
        return super.toJson()
      }
      get computedStyle() {
        return {}
      }
      render(e) {
        let r = new v(this.value, {
          classes: "ML__composition",
          type: "composition"
        });
        return this.bind(e, r), this.caret && (r.caret = this.caret), r
      }
      serialize(e) {
        return ""
      }
    };
    var oe = class extends g {
        constructor(r, i, o) {
          var a;
          super("latex", i, {
            value: r,
            mode: "latex"
          });
          this.isSuggestion = (a = o == null ? void 0 : o.isSuggestion) != null ? a : !1, this.isError = !1, this.verbatimLatex = r
        }
        static fromJson(r, i) {
          let o = new oe(r.command, i);
          return r.isSuggestion && (o.isSuggestion = !0), r.isError && (o.isError = !0), o
        }
        toJson() {
          let r = {};
          return this.isSuggestion && (r.isSuggestion = !0), this.isError && (r.isError = !0), b(b({}, super.toJson()), r)
        }
        get computedStyle() {
          return {}
        }
        render(r) {
          let i = new v(this.value, {
            classes: this.isSuggestion ? "ML__suggestion" : this.isError ? "ML__error" : "",
            type: "latex",
            maxFontSize: 1
          });
          return i ? (this.caret && (i.caret = this.caret), this.bind(r, i)) : null
        }
      },
      We = class extends g {
        constructor(e, r) {
          super("latexgroup", r, {
            mode: "latex"
          }), this.body = [...e].map(i => new oe(i, r)), this.skipBoundary = !1
        }
        static fromJson(e, r) {
          return new We("", r)
        }
        toJson() {
          return super.toJson()
        }
        render(e) {
          let r = g.createBox(e, this.body, {
            newList: !0
          });
          return r ? (this.caret && (r.caret = this.caret), this.bind(e, r)) : null
        }
        serialize(e) {
          var r, i;
          return (i = (r = this.body) == null ? void 0 : r.map(o => o.value).join("")) != null ? i : ""
        }
      };
    var Ft = class extends g {
      constructor(r, i, o, a) {
        super("line", o, {
          command: r,
          style: a.style
        });
        this.skipBoundary = !0, this.body = i, this.position = a.position
      }
      static fromJson(r, i) {
        return new Ft(r.command, r.body, i, r)
      }
      toJson() {
        return P(b({}, super.toJson()), {
          position: this.position
        })
      }
      render(r) {
        let i = new E(r, this.style, "cramp"),
          o = g.createBox(i, this.body);
        if (!o) return null;
        let a = i.metrics.defaultRuleThickness / i.scalingFactor,
          n = new v(null, {
            classes: this.position + "-line"
          });
        n.height = a, n.maxFontSize = a * 1.125 * i.scalingFactor;
        let s;
        return this.position === "overline" ? s = new Q({
          shift: 0,
          children: [{
            box: o
          }, 3 * a, {
            box: n
          }, a]
        }) : s = new Q({
          top: o.height,
          children: [a, {
            box: n
          }, 3 * a, {
            box: o
          }]
        }), this.caret && (s.caret = this.caret), new v(s, {
          classes: this.position,
          type: "mord"
        })
      }
    };
    var tt = class extends g {
      constructor(r, i, o, a) {
        var n, s;
        super("overlap", o, {
          command: r,
          style: a == null ? void 0 : a.style
        });
        this.skipBoundary = !0, typeof i == "string" ? this.body = [new g("mord", o, {
          value: i
        })] : this.body = i, this.align = (n = a == null ? void 0 : a.align) != null ? n : "left", this.boxType = (s = a == null ? void 0 : a.boxType) != null ? s : "mord"
      }
      static fromJson(r, i) {
        return new tt(r.command, r.body, i, r)
      }
      toJson() {
        let r = {};
        return this.align && (r.align = this.align), this.boxType && (r.boxType = this.boxType), b(b({}, super.toJson()), r)
      }
      render(r) {
        let i = g.createBox(r, this.body, {
          classes: "inner"
        });
        return i ? (this.caret && (i.caret = this.caret), this.bind(r, new v([i, new v(null, {
          classes: "fix"
        })], {
          classes: this.align === "left" ? "llap" : "rlap",
          type: this.boxType
        }))) : null
      }
    };
    var dt = class extends g {
      constructor(r, i, o, a) {
        var n, s, l, c;
        super("phantom", o, {
          command: r,
          style: a.style
        });
        this.captureSelection = !0, this.body = i, this.isInvisible = (n = a.isInvisible) != null ? n : !1, this.smashDepth = (s = a.smashDepth) != null ? s : !1, this.smashHeight = (l = a.smashHeight) != null ? l : !1, this.smashWidth = (c = a.smashWidth) != null ? c : !1
      }
      static fromJson(r, i) {
        return new dt(r.command, r.body, i, r)
      }
      toJson() {
        let r = {};
        return this.isInvisible && (r.isInvisible = !0), this.smashDepth && (r.smashDepth = !0), this.smashHeight && (r.smashHeight = !0), this.smashWidth && (r.smashWidth = !0), b(b({}, super.toJson()), r)
      }
      render(r) {
        let i = new E(r, {
          isPhantom: !0
        });
        if (!this.smashDepth && !this.smashHeight && !this.smashWidth) return this.isInvisible, g.createBox(i, this.body, {
          classes: "inner"
        });
        let o = g.createBox(this.isInvisible ? i : r, this.body);
        if (!o) return null;
        if (this.smashWidth) {
          let a = new v(null, {
            classes: "fix"
          });
          return new v([o, a], {
            classes: "rlap"
          }).wrap(r)
        }
        if (!this.smashHeight && !this.smashDepth) return o;
        if (this.smashHeight && (o.height = 0), this.smashDepth && (o.depth = 0), o.children)
          for (let a of o.children) this.smashHeight && (a.height = 0), this.smashDepth && (a.depth = 0);
        return new Q({
          firstBaseline: [{
            box: o
          }]
        }, {
          type: "mord"
        }).wrap(r)
      }
    };
    var lr = class extends g {
      constructor(r, i, o) {
        var a;
        super("rule", i, {
          command: r,
          style: o.style
        });
        this.shift = (a = o.shift) != null ? a : {
          dimension: 0
        }, this.height = o.height, this.width = o.width
      }
      static fromJson(r, i) {
        return new lr(r.command, i, r)
      }
      toJson() {
        let r = {
          height: this.height,
          width: this.width
        };
        return this.shift && (r.shift = this.shift), b(b({}, super.toJson()), r)
      }
      render(r) {
        let i = new E(r, this.style, "textstyle"),
          o = Ae(this.shift),
          a = Ae(this.width),
          n = Ae(this.height),
          s = new v(null, {
            classes: "rule",
            type: "mord"
          });
        return s.setStyle("border-right-width", a, "em"), s.setStyle("border-top-width", n, "em"), s.setStyle("border-color", this.style.color), s.setStyle("vertical-align", o, "em"), this.isSelected && s.setStyle("opacity", "50%"), s.width = a, s.height = n + o, s.depth = -o, this.bind(r, s), this.caret && (s.caret = this.caret), s.wrap(i)
      }
      serialize(r) {
        var o;
        let i = (o = this.command) != null ? o : "";
        return this.shift && (i += `[${io(this.shift)}]`), i += `{${io(this.width)}}{${io(this.height)}}`, i
      }
    };
    var Wn = {
        "p@": "1pt ",
        "z@": "0pt",
        maxdimen: "16383.99999pt",
        hfuzz: "0.1pt",
        vfuzz: "0.1pt",
        overfullrule: "5pt",
        hsize: "6.5in",
        vsize: "8.9in",
        parindent: "20pt",
        maxdepth: "4pt",
        splitmaxdepth: "\\maxdimen",
        boxmaxdepth: "\\maxdimen",
        delimitershortfall: "5pt",
        nulldelimiterspace: "1.2pt",
        scriptspace: "0.5pt",
        topskip: "10pt",
        splittopskip: "10pt",
        normalbaselineskip: "12pt",
        normallineskip: "1pt",
        normallineskiplimit: "0pt",
        jot: "3pt",
        doublerulesep: "2pt",
        arrayrulewidth: "0.4pt",
        arraycolsep: "5pt",
        fboxsep: "3pt",
        fboxrule: "0.4pt"
      },
      Un = {
        "z@skip": "0pt plust0pt minus0pt",
        hideskip: "-1000pt plust 1fill",
        "@flushglue": "0pt plust 1fill",
        parskip: "0pt plus 1pt",
        abovedisplayskip: "12pt plus 3pt minus 9pt",
        abovedisplayshortskip: "0pt plus 3pt",
        belowdisplayskip: "12pt plus 3pt minus 9pt",
        belowdisplayshortskip: "7pt plus 3pt minus 4pt",
        parfillskip: "0pt plus 1fil",
        thinmuskip: "3mu",
        medmuskip: "4mu plus 2mu minus 4mu",
        thickmuskip: "5mu plus 5mu",
        smallskipamount: "3pt plus1pt minus1pt",
        medskipamount: "6pt plus2pt minus2pt",
        bigskipamount: "12pt plus4pt minus4pt"
      },
      ec = {
        pretolerance: 100,
        tolerance: 200,
        hbadness: 1e3,
        vbadness: 1e3,
        linepenalty: 10,
        hyphenpenalty: 50,
        exhyphenpenalty: 50,
        binoppenalty: 700,
        relpenalty: 500,
        clubpenalty: 150,
        widowpenalty: 150,
        displaywidowpenalty: 50,
        brokenpenalty: 100,
        predisplaypenalty: 1e4,
        doublehyphendemerits: 1e4,
        finalhyphendemerits: 5e3,
        adjdemerits: 1e4,
        tracinglostchars: 1,
        uchyph: 1,
        delimiterfactor: 901,
        defaulthyphenchar: "\\-",
        defaultskewchar: -1,
        newlinechar: -1,
        showboxbreadth: 5,
        showboxdepth: 3,
        errorcontextlines: 5,
        interdisplaylinepenalty: 100,
        interfootnotelinepenalty: 100,
        baselineSkip: 1.2,
        arraystretch: "",
        month: new Date().getMonth() + 1,
        day: new Date().getDate(),
        year: new Date().getFullYear()
      },
      cr;

    function co(t) {
      var e, r;
      if (cr) return cr;
      cr = b({}, ec);
      for (let i of Object.keys(Wn)) cr[i] = (e = wr(Wn[i], P(b({}, t), {
        registers: cr
      }))) != null ? e : 0;
      for (let i of Object.keys(Un)) cr[i] = (r = Jn(Un[i], P(b({}, t), {
        registers: cr
      }))) != null ? r : 0;
      return cr
    }

    function Ct() {
      let t = {
        registers: {},
        smartFence: !1,
        fractionNavigationOrder: "numerator-denominator",
        placeholderSymbol: "\u25A2",
        letterShapeStyle: W.locale.startsWith("fr") ? "french" : "tex",
        colorMap: br,
        backgroundColorMap: zr,
        getDefinition: fi,
        getMacro(e) {
          return to(e, qr())
        }
      };
      return P(b({}, t), {
        registers: co(t)
      })
    }
    var Nt = class extends g {
      constructor(r, i, o, a) {
        super("tooltip", o, {
          command: a == null ? void 0 : a.command,
          mode: "math",
          serialize: a == null ? void 0 : a.serialize,
          style: a == null ? void 0 : a.style,
          displayContainsHighlight: !0
        });
        this.body = r;
        let n = Ct();
        this.tooltip = new g("root", n, {
          style: {}
        }), this.tooltip.body = i, this.skipBoundary = !0, this.captureSelection = !1
      }
      static fromJson(r, i) {
        return new Nt(r.body, Ue(r.tooltip, i), i, r)
      }
      toJson() {
        var i;
        let r = (i = this.tooltip.body) == null ? void 0 : i.filter(o => o.type !== "first").map(o => o.toJson());
        return P(b({}, super.toJson()), {
          tooltip: r
        })
      }
      render(r) {
        let i = g.createBox(r, this.body, {
          style: this.style
        });
        if (!i) return null;
        let o = new E({
            registers: r.registers
          }, {
            fontSize: nt
          }, "displaystyle"),
          a = Zt(_t(new v(this.tooltip.render(o), {
            classes: "ML__tooltip-content"
          }), o)),
          n = new v([a, i], {
            classes: "ML__tooltip-container"
          });
        return this.caret && (n.caret = this.caret), this.bind(r, n)
      }
      serialize(r) {
        return `${this.command}{${this.bodyToLatex(r)}}{${g.serialize(this.tooltip.body,r)}}`
      }
    };

    function Ue(t, e) {
      if (Y(t)) return t.map(o => Ue(o, e));
      t = b({}, t);
      for (let o of zt) t[o] && (t[o] = Ue(t[o], e));
      t.array && (t.array = Ue(t.array, e));
      let r = t.type,
        i;
      r === "accent" && (i = Lt.fromJson(t, e)), r === "array" && (i = j.fromJson(t, e)), r === "box" && (i = et.fromJson(t, e)), r === "chem" && (i = kr.fromJson(t, e)), r === "choice" && (i = ur.fromJson(t, e)), r === "composition" && (i = sr.fromJson(t, e)), r === "delim" && (i = ar.fromJson(t, e)), r === "enclose" && (i = gt.fromJson(t, e)), r === "error" && (i = tr.fromJson(t, e)), r === "genfrac" && (i = ut.fromJson(t, e)), r === "group" && (i = se.fromJson(t, e)), r === "latex" && (i = oe.fromJson(t, e)), r === "latexgroup" && (i = We.fromJson(t, e)), r === "leftright" && (i = ie.fromJson(t, e)), r === "line" && (i = Ft.fromJson(t, e)), r === "macro" && (i = rr.fromJson(t, e)), r === "msubsup" && (i = ft.fromJson(t, e)), r === "overlap" && (i = tt.fromJson(t, e)), r === "overunder" && (i = be.fromJson(t, e)), r === "placeholder" && (i = re.fromJson(t, e)), r === "prompt" && (i = ir.fromJson(t, e)), r === "phantom" && (i = dt.fromJson(t, e)), r === "rule" && (i = lr.fromJson(t, e)), r === "sizeddelim" && (i = nr.fromJson(t, e)), r === "spacing" && (i = Ge.fromJson(t, e)), r === "surd" && (i = or.fromJson(t, e)), r === "text" && (i = Je.fromJson(t, e)), r === "tooltip" && (i = Nt.fromJson(t, e)), r === "mop" && (i = we.fromJson(t, e)), i || (["first", "mbin", "mrel", "mclose", "minner", "mopen", "mord", "mpunct", "root", "space"].includes(r), `${r}`, i = g.fromJson(t, e));
      for (let o of zt) t[o] && i.setChildren(t[o], o);
      return t.verbatimLatex !== void 0 && (i.verbatimLatex = t.verbatimLatex), t.subsupPlacement && (i.subsupPlacement = t.subsupPlacement), t.explicitSubsupPlacement && (i.explicitSubsupPlacement = !0), t.isFunction && (i.isFunction = !0), t.isExtensibleSymbol && (i.isExtensibleSymbol = !0), t.skipBoundary && (i.skipBoundary = !0), t.captureSelection && (i.captureSelection = !0), i
    }
    var ur = class extends g {
      constructor(r, i) {
        super("choice", i);
        this.choices = r, this.skipBoundary = !0
      }
      static fromJson(r, i) {
        return new ur([Ue(r.choices[0], i), Ue(r.choices[1], i), Ue(r.choices[2], i), Ue(r.choices[3], i)], i)
      }
      toJson() {
        let r = [];
        for (let i of this.choices) r.push(i.filter(o => o.type !== "first").map(o => o.toJson()));
        return P(b({}, super.toJson()), {
          choices: r
        })
      }
      render(r) {
        let i = g.createBox(r, this.choices[Math.floor(r.mathstyle.id / 2)]);
        return i ? (this.caret && (i.caret = this.caret), this.bind(r, i)) : null
      }
      serialize(r) {
        return `\\mathchoice{${g.serialize(this.choices[0],r)}}{${g.serialize(this.choices[1],r)}}{${g.serialize(this.choices[2],r)}}{${g.serialize(this.choices[3],r)}}`
      }
    };
    x("mathtip", "{:math}{:math}", {
      createAtom: (t, e, r, i) => new Nt(e[0], e[1], i, {
        command: t,
        content: "math",
        style: r
      })
    });
    x("texttip", "{:math}{:text}", {
      createAtom: (t, e, r, i) => new Nt(e[0], e[1], i, {
        command: t,
        content: "text",
        style: r
      })
    });
    x("error", "{:math}", {
      createAtom: (t, e, r, i) => new se(e[0], i, {
        mode: "math",
        command: "\\error",
        customClass: "ML__error",
        style: r,
        serialize: (o, a) => `\\error{${o.bodyToLatex(a)}}`
      })
    });
    x("ensuremath", "{:math}", {
      createAtom: (t, e, r, i) => new se(e[0], i, {
        mode: "math",
        latexOpen: "\\ensuremath{",
        latexClose: "}",
        style: r
      })
    });
    x("color", "{:string}", {
      applyStyle: (t, e, r) => {
        var o, a;
        let i = e[0];
        return {
          verbatimColor: e[0],
          color: (a = (o = r.colorMap) == null ? void 0 : o.call(r, i)) != null ? a : i
        }
      }
    });
    x("textcolor", "{:string}{content:auto*}", {
      applyStyle: (t, e, r) => {
        var o, a;
        let i = e[0];
        return {
          verbatimColor: i,
          color: (a = (o = r.colorMap) == null ? void 0 : o.call(r, i)) != null ? a : i
        }
      }
    });
    x("boxed", "{content:math}", {
      createAtom: (t, e, r, i) => new et(t, e[0], i, {
        framecolor: "black",
        style: r
      })
    });
    x("colorbox", "{:string}{content:auto*}", {
      applyMode: "text",
      applyStyle: (t, e, r) => {
        var o, a;
        let i = e[0];
        return {
          verbatimBackgroundColor: e[0],
          backgroundColor: (a = (o = r.backgroundColorMap) == null ? void 0 : o.call(r, i)) != null ? a : i
        }
      }
    });
    x("fcolorbox", "{frame-color:string}{background-color:string}{content:auto}", {
      applyMode: "text",
      createAtom: (t, e, r, i) => {
        var n, s, l, c;
        let o = e[0],
          a = e[1];
        return new et(t, e[2], i, {
          verbatimFramecolor: o,
          framecolor: (s = (n = i.colorMap) == null ? void 0 : n.call(i, o)) != null ? s : o,
          verbatimBackgroundcolor: e[1],
          backgroundcolor: (c = (l = i.backgroundColorMap) == null ? void 0 : l.call(i, a)) != null ? c : a,
          style: r,
          serialize: (u, d) => {
            var m, h;
            return `${u.command}{${(m=u.verbatimFramecolor)!=null?m:u.framecolor}{${(h=u.verbatimBackgroundcolor)!=null?h:u.backgroundcolor}}{${u.bodyToLatex(d)}}`
          }
        })
      }
    });
    x("bbox", "[:bbox]{body:auto}", {
      createAtom: (t, e, r, i) => {
        if (e[0]) {
          let o = e[0];
          return new et(t, e[1], i, {
            padding: o.padding,
            border: o.border,
            backgroundcolor: o.backgroundcolor,
            style: r,
            serialize: (a, n) => {
              var l;
              let s = t;
              if (Number.isFinite(a.padding) || a.border !== void 0 || a.backgroundcolor !== void 0) {
                let c = [];
                a.padding && c.push(a.padding), a.border && c.push(`border: ${a.border}`), (a.verbatimBackgroundcolor || a.backgroundcolor) && c.push((l = a.verbatimBackgroundcolor) != null ? l : a.backgroundcolor), s += `[${c.join(",")}]`
              }
              return s + `{${a.bodyToLatex(n)}}`
            }
          })
        }
        return new et(t, e[1], i, {
          style: r
        })
      }
    });
    x(["displaystyle", "textstyle", "scriptstyle", "scriptscriptstyle"], "{:rest}", {
      createAtom: (t, e, r, i) => new se(e[0], i, {
        latexOpen: `{${t} `,
        latexClose: "}",
        style: r,
        mathstyleName: t.slice(1)
      })
    });
    x(["tiny", "scriptsize", "footnotesize", "small", "normalsize", "large", "Large", "LARGE", "huge", "Huge"], "", {
      applyStyle: (t, e) => ({
        fontSize: {
          "\\tiny": 1,
          "\\scriptsize": 2,
          "\\footnotesize": 3,
          "\\small": 4,
          "\\normalsize": 5,
          "\\large": 6,
          "\\Large": 7,
          "\\LARGE": 8,
          "\\huge": 9,
          "\\Huge": 10
        } [t]
      })
    });
    x("fontseries", "{:string}", {
      ifMode: "text",
      applyStyle: (t, e) => ({
        fontSeries: e[0]
      })
    });
    x("fontshape", "{:string}", {
      ifMode: "text",
      applyStyle: (t, e) => ({
        fontShape: e[0]
      })
    });
    x("fontfamily", "{:string}", {
      ifMode: "text",
      applyStyle: (t, e) => ({
        fontFamily: e[0]
      })
    });
    x("selectfont", "", {
      ifMode: "text",
      applyStyle: (t, e) => ({})
    });
    x("bf", "", {
      applyStyle: (t, e) => ({
        fontSeries: "b",
        fontShape: "n",
        fontFamily: "cmr"
      })
    });
    x(["boldsymbol", "bm"], "{:math*}", {
      applyMode: "math",
      createAtom: (t, e, r, i) => new se(e[0], i, {
        latexOpen: `${t}{`,
        latexClose: "}",
        style: r,
        customClass: "ML__boldsymbol"
      })
    });
    x("bold", "{:math*}", {
      applyMode: "math",
      applyStyle: (t, e) => ({
        variantStyle: "bold"
      })
    });
    x("bfseries", "", {
      applyMode: "text",
      applyStyle: (t, e) => ({
        fontSeries: "b"
      })
    });
    x("mdseries", "", {
      applyMode: "text",
      applyStyle: (t, e) => ({
        fontSeries: "m"
      })
    });
    x("upshape", "", {
      applyMode: "text",
      applyStyle: (t, e) => ({
        fontShape: "n"
      })
    });
    x("slshape", "", {
      applyMode: "text",
      applyStyle: (t, e) => ({
        fontShape: "sl"
      })
    });
    x("scshape", "", {
      applyMode: "text",
      applyStyle: (t, e) => ({
        fontShape: "sc"
      })
    });
    x("textbf", "{:text*}", {
      applyMode: "text",
      applyStyle: (t, e) => ({
        fontSeries: "b"
      })
    });
    x("textmd", "{:text*}", {
      applyMode: "text",
      applyStyle: (t, e) => ({
        fontSeries: "m"
      })
    });
    x("textup", "{:text*}", {
      applyMode: "text",
      applyStyle: (t, e) => ({
        fontShape: "n"
      })
    });
    x("textnormal", "{:text*}", {
      applyMode: "text",
      applyStyle: (t, e) => ({
        fontShape: "n",
        fontSeries: "m"
      })
    });
    x("textsl", "{:text*}", {
      applyMode: "text",
      applyStyle: (t, e) => ({
        fontShape: "sl"
      })
    });
    x("textit", "{:text*}", {
      applyMode: "text",
      applyStyle: (t, e) => ({
        fontShape: "it"
      })
    });
    x("textsc", "{:text*}", {
      applyMode: "text",
      applyStyle: (t, e) => ({
        fontShape: "sc"
      })
    });
    x("textrm", "{:text*}", {
      applyMode: "text",
      applyStyle: (t, e) => ({
        fontFamily: "roman"
      })
    });
    x("textsf", "{:text*}", {
      applyMode: "text",
      applyStyle: (t, e) => ({
        fontFamily: "sans-serif"
      })
    });
    x("texttt", "{:text*}", {
      applyMode: "text",
      applyStyle: (t, e) => ({
        fontFamily: "monospace"
      })
    });
    x("mathbf", "{:math*}", {
      applyMode: "math",
      applyStyle: (t, e) => ({
        variant: "normal",
        variantStyle: "bold"
      })
    });
    x("mathit", "{:math*}", {
      applyMode: "math",
      applyStyle: (t, e) => ({
        variant: "main",
        variantStyle: "italic"
      })
    });
    x("mathnormal", "{:math*}", {
      applyMode: "math",
      applyStyle: (t, e) => ({
        variant: "normal",
        variantStyle: "italic"
      })
    });
    x("mathbfit", "{:math*}", {
      applyMode: "math",
      applyStyle: (t, e) => ({
        variant: "main",
        variantStyle: "bolditalic"
      })
    });
    x("mathrm", "{:math*}", {
      applyMode: "math",
      applyStyle: (t, e) => ({
        variant: "normal",
        variantStyle: "up"
      })
    });
    x("mathsf", "{:math*}", {
      applyMode: "math",
      applyStyle: (t, e) => ({
        variant: "sans-serif",
        variantStyle: "up"
      })
    });
    x("mathtt", "{:math*}", {
      applyMode: "math",
      applyStyle: (t, e) => ({
        variant: "monospace",
        variantStyle: "up"
      })
    });
    x("it", "", {
      applyStyle: (t, e) => ({
        fontSeries: "m",
        fontShape: "it",
        fontFamily: "cmr",
        variantStyle: "italic"
      })
    });
    x("rmfamily", "", {
      applyStyle: (t, e) => ({
        fontFamily: "roman"
      })
    });
    x("sffamily", "", {
      applyStyle: (t, e) => ({
        fontFamily: "sans-serif"
      })
    });
    x("ttfamily", "", {
      applyStyle: (t, e) => ({
        fontFamily: "monospace"
      })
    });
    x(["Bbb", "mathbb"], "{:math*}", {
      applyStyle: (t, e) => ({
        variant: "double-struck",
        variantStyle: "up"
      })
    });
    x(["frak", "mathfrak"], "{:math*}", {
      applyStyle: (t, e) => ({
        variant: "fraktur",
        variantStyle: "up"
      })
    });
    x("mathcal", "{:math*}", {
      applyStyle: (t, e) => ({
        variant: "calligraphic",
        variantStyle: "up"
      })
    });
    x("mathscr", "{:math*}", {
      applyStyle: (t, e) => ({
        variant: "script",
        variantStyle: "up"
      })
    });
    x("mbox", "{:text}", {
      ifMode: "math",
      createAtom: (t, e, r, i) => new se(e[0], i, {
        changeMode: !0,
        style: r,
        mode: "text",
        command: t,
        serialize: (o, a) => `\\mbox{${o.bodyToLatex(P(b({},a),{skipModeCommand:!0}))}}`
      })
    });
    x("text", "{:text}", {
      ifMode: "math",
      applyMode: "text"
    });
    x("class", "{name:string}{content:auto*}", {
      createAtom: (t, e, r, i) => new se(e[1], i, {
        customClass: e[0],
        style: r
      })
    });
    x("cssId", "{id:string}{content:auto}", {
      createAtom: (t, e, r, i) => new se(e[1], i, {
        cssId: e[0],
        style: r
      })
    });
    x("htmlData", "{data:string}{content:auto}", {
      createAtom: (t, e, r, i) => new se(e[1], i, {
        htmlData: e[0],
        style: r
      })
    });
    x("htmlStyle", "{data:string}{content:auto}", {
      createAtom: (t, e, r, i) => new se(e[1], i, {
        htmlStyle: e[0],
        style: r
      })
    });
    x("em", "{:auto*}", {
      createAtom: (t, e, r, i) => new se(e[0], i, {
        latexOpen: "\\em",
        latexClose: "",
        customClass: "ML__emph",
        style: r
      })
    });
    x("emph", "{:auto}", {
      createAtom: (t, e, r, i) => new se(e[0], i, {
        latexOpen: "\\emph{",
        latexClose: "}",
        customClass: "ML__emph",
        style: r
      })
    });
    var jn = {
      "\\bigl": {
        mclass: "mopen",
        size: 1
      },
      "\\Bigl": {
        mclass: "mopen",
        size: 2
      },
      "\\biggl": {
        mclass: "mopen",
        size: 3
      },
      "\\Biggl": {
        mclass: "mopen",
        size: 4
      },
      "\\bigr": {
        mclass: "mclose",
        size: 1
      },
      "\\Bigr": {
        mclass: "mclose",
        size: 2
      },
      "\\biggr": {
        mclass: "mclose",
        size: 3
      },
      "\\Biggr": {
        mclass: "mclose",
        size: 4
      },
      "\\bigm": {
        mclass: "mrel",
        size: 1
      },
      "\\Bigm": {
        mclass: "mrel",
        size: 2
      },
      "\\biggm": {
        mclass: "mrel",
        size: 3
      },
      "\\Biggm": {
        mclass: "mrel",
        size: 4
      },
      "\\big": {
        mclass: "mord",
        size: 1
      },
      "\\Big": {
        mclass: "mord",
        size: 2
      },
      "\\bigg": {
        mclass: "mord",
        size: 3
      },
      "\\Bigg": {
        mclass: "mord",
        size: 4
      }
    };
    x(["bigl", "Bigl", "biggl", "Biggl", "bigr", "Bigr", "biggr", "Biggr", "bigm", "Bigm", "biggm", "Biggm", "big", "Big", "bigg", "Bigg"], "{:delim}", {
      createAtom: (t, e, r, i) => new nr(t, e[0], i, {
        size: jn[t].size,
        delimClass: jn[t].mclass,
        style: r
      })
    });
    x(["hspace", "hspace*"], "{width:glue}", {
      createAtom: (t, e, r, i) => {
        var o;
        return new Ge(t, r, i, (o = e[0]) != null ? o : {
          glue: {
            dimension: 0
          }
        })
      }
    });
    x(["mkern", "kern"], "{width:glue}", {
      createAtom: (t, e, r, i) => {
        var o;
        return new Ge(t, r, i, (o = e[0]) != null ? o : {
          glue: {
            dimension: 0
          }
        })
      }
    });
    x("mspace", "{width:glue}", {
      createAtom: (t, e, r, i) => {
        var o;
        return new Ge(t, r, i, (o = e[0]) != null ? o : {
          glue: {
            dimension: 0
          }
        })
      }
    });
    x("mathop", "{:auto}", {
      createAtom: (t, e, r, i) => new we(t, e[0], i, {
        type: "mop",
        captureSelection: !0,
        limits: "over-under",
        isFunction: !0,
        hasArgument: !0,
        style: r
      })
    });
    x("mathchoice", "{:math}{:math}{:math}{:math}", {
      createAtom: (t, e, r, i) => new ur(e, i)
    });
    x(["mathbin", "mathrel", "mathopen", "mathclose", "mathpunct", "mathord", "mathinner"], "{:auto}", {
      createAtom: (t, e, r, i) => new we(t, e[0], i, {
        type: {
          "\\mathbin": "mbin",
          "\\mathrel": "mrel",
          "\\mathopen": "mopen",
          "\\mathclose": "mclose",
          "\\mathpunct": "mpunct",
          "\\mathord": "mord",
          "\\mathinner": "minner"
        } [t],
        captureSelection: !0,
        hasArgument: !0,
        style: r
      })
    });
    x(["operatorname", "operatorname*"], "{operator:math}", {
      createAtom: (t, e, r, i) => {
        let o = new we(t, e[0], i, {
          isFunction: !0,
          hasArgument: !0,
          limits: t === "\\operatorname" ? "adjacent" : "over-under",
          style: r
        });
        return o.captureSelection = !0, o.body && o.body.forEach(a => {
          var n;
          a.type !== "first" && (a.type = "mord", a.value = (n = {
            "\u2217": "*",
            "\u2212": "-"
          } [a.value]) != null ? n : a.value, a.isFunction = !1, !a.style.variant && !a.style.variantStyle && (a.style.variant = "main", a.style.variantStyle = "up"))
        }), o
      }
    });
    var aa = class extends g {
      constructor(r, i, o) {
        let a = Number.parseInt(r);
        Number.isFinite(a) || (a = 10067);
        super("mord", o, {
          value: String.fromCodePoint(a),
          style: i
        });
        this.codepoint = a
      }
      serialize(r) {
        return '\\unicode"' + ("000000" + this.codepoint.toString(16)).toUpperCase().slice(-6)
      }
    };
    x("unicode", "{charcode:number}", {
      createAtom: (t, e, r, i) => new aa(e[0], r, i)
    });
    x("rule", "[raise:dimen]{width:dimen}{thickness:dimen}", {
      createAtom: (t, e, r, i) => new lr(t, i, {
        shift: e[0],
        width: e[1],
        height: e[2],
        style: r
      })
    });
    x("overline", "{:auto}", {
      createAtom: (t, e, r, i) => new Ft(t, e[0], i, {
        position: "overline",
        style: r
      })
    });
    x("underline", "{:auto}", {
      createAtom: (t, e, r, i) => new Ft(t, e[0], i, {
        position: "underline",
        style: r
      })
    });
    x("overset", "{above:auto}{base:auto}", {
      createAtom: (t, e, r, i) => new be(t, i, {
        above: e[0],
        body: e[1],
        skipBoundary: !1,
        style: r,
        boxType: $r(e[1]),
        serialize: (o, a) => `${o.command}{${o.aboveToLatex(a)}}{${o.bodyToLatex(a)}}`
      })
    });
    x("underset", "{below:auto}{base:auto}", {
      createAtom: (t, e, r, i) => new be(t, i, {
        below: e[0],
        body: e[1],
        skipBoundary: !1,
        style: r,
        boxType: $r(e[1]),
        serialize: (o, a) => `${t}{${o.belowToLatex(a)}}{${o.bodyToLatex(a)}}`
      })
    });
    x("overunderset", "{above:auto}{below:auto}{base:auto}", {
      createAtom: (t, e, r, i) => new be(t, i, {
        above: e[0],
        below: e[1],
        body: e[2],
        skipBoundary: !1,
        style: r,
        boxType: $r(e[2]),
        serialize: (o, a) => `${o.command}{${o.aboveToLatex(a)}}{${o.bodyToLatex(a)}}`
      })
    });
    x(["stackrel", "stackbin"], "[below:auto]{above:auto}{base:auto}", {
      createAtom: (t, e, r, i) => new be(t, i, {
        body: e[2],
        above: e[1],
        below: e[0],
        skipBoundary: !1,
        style: r,
        boxType: t === "\\stackrel" ? "mrel" : "mbin",
        serialize: (o, a) => `${o.command}{${o.aboveToLatex(a)}}{${o.bodyToLatex(a)}}`
      })
    });
    x("smash", "[:string]{:auto}", {
      createAtom: (t, e, r, i) => e[0] ? new dt(t, e[1], i, {
        smashHeight: e[0].includes("t"),
        smashDepth: e[0].includes("b"),
        style: r
      }) : new dt(t, e[1], i, {
        smashHeight: !0,
        smashDepth: !0,
        style: r
      })
    });
    x(["vphantom"], "{:auto*}", {
      createAtom: (t, e, r, i) => new dt(t, e[1], i, {
        isInvisible: !0,
        smashWidth: !0,
        style: r
      })
    });
    x(["hphantom"], "{:auto*}", {
      createAtom: (t, e, r, i) => new dt(t, e[1], i, {
        isInvisible: !0,
        smashHeight: !0,
        smashDepth: !0,
        style: r
      })
    });
    x(["phantom"], "{:auto*}", {
      createAtom: (t, e, r, i) => new dt(t, e[1], i, {
        isInvisible: !0,
        style: r
      })
    });
    x("not", "{:math}", {
      createAtom: (t, e, r, i) => {
        if (e.length < 1 || e[0] === null) return new g("mrel", i, {
          command: t,
          style: r,
          value: "\uE020"
        });
        let o = e[0];
        return new se([new tt(t, "\uE020", i, {
          align: "right",
          style: r,
          boxType: "mrel"
        }), ...o], i, {
          boxType: "mrel",
          captureSelection: !0,
          command: "\\not",
          serialize: (a, n) => {
            let s = g.serialize(o, n);
            return s.length === 1 && !/[a-zA-Z]/.test(s) ? "\\not" + s : `\\not{${s}}`
          }
        })
      }
    });
    x(["ne", "neq"], "", {
      createAtom: (t, e, r, i) => new se([new tt(t, "\uE020", i, {
        align: "right",
        style: r,
        boxType: "mrel"
      }), new g("mrel", i, {
        style: r,
        value: "="
      })], i, {
        boxType: "mrel",
        captureSelection: !0,
        serialize: () => t,
        command: t
      })
    });
    x("rlap", "{:auto}", {
      createAtom: (t, e, r, i) => new tt(t, e[0], i, {
        align: "right",
        style: r
      })
    });
    x("llap", "{:auto}", {
      createAtom: (t, e, r, i) => new tt(t, e[0], i, {
        style: r
      })
    });
    x("mathllap", "{:auto}", {
      createAtom: (t, e, r, i) => new tt(t, e[0], i, {
        style: r
      })
    });
    x("mathrlap", "{:auto}", {
      createAtom: (t, e, r, i) => new tt(t, e[0], i, {
        align: "right",
        style: r
      })
    });
    ve("0123456789/@.?!");
    Yo(65, 90);
    Yo(97, 122);
    ve([
      ["\\forall", 8704],
      ["\\exists", 8707],
      ["\\nexists", 8708, "mord", "ams"],
      ["\\mid", 8739, "mrel"],
      ["\\top", 8868],
      ["\\bot", 8869]
    ]);
    ve([
      ["\\sharp", 9839],
      ["\\flat", 9837],
      ["\\natural", 9838],
      ["\\#", 35],
      ["\\&", 38],
      ["\\clubsuit", 9827],
      ["\\heartsuit", 9825],
      ["\\spadesuit", 9824],
      ["\\diamondsuit", 9826],
      ["\\parallelogram", 9649]
    ]);
    ve([
      ["\\backslash", 92],
      ["\\nabla", 8711],
      ["\\partial", 8706],
      ["\\ell", 8467],
      ["\\hbar", 8463],
      ["\\Q", 81, "mord", "double-struck"],
      ["\\C", 67, "mord", "double-struck"],
      ["\\P", 80, "mord", "double-struck"],
      ["\\pounds", 163],
      ["\\euro", 8364]
    ]);
    ve([
      ["\\rightarrow", 8594],
      ["\\to", 8594],
      ["\\leftarrow", 8592],
      ["\\gets", 8592],
      ["\\Rightarrow", 8658],
      ["\\Leftarrow", 8656],
      ["\\longrightarrow", 10230],
      ["\\longleftarrow", 10229],
      ["\\Longrightarrow", 10233],
      ["\\implies", 10233],
      ["\\Longleftarrow", 10232],
      ["\\impliedby", 10232],
      ["\\longleftrightarrow", 10231],
      ["\\biconditional", 10231],
      ["\\Longleftrightarrow", 10234],
      ["\\mapsto", 8614],
      ["\\longmapsto", 10236],
      ["\\uparrow", 8593],
      ["\\downarrow", 8595],
      ["\\Uparrow", 8657],
      ["\\Downarrow", 8659],
      ["\\updownarrow", 8597],
      ["\\Updownarrow", 8661],
      ["\\hookrightarrow", 8618],
      ["\\hookleftarrow", 8617],
      ["\\rightharpoonup", 8640],
      ["\\leftharpoonup", 8636],
      ["\\rightharpoondown", 8641],
      ["\\leftharpoondown", 8637],
      ["\\searrow", 8600],
      ["\\nearrow", 8599],
      ["\\swarrow", 8601],
      ["\\nwarrow", 8598],
      ["\\originalof", 8886],
      ["\\laplace", 8886],
      ["\\imageof", 8887],
      ["\\Laplace", 8887]
    ], "mrel");
    ve([
      ["\\lbrace", 123, "mopen"],
      ["\\rbrace", 125, "mclose"],
      ["\\lparen", 40, "mopen"],
      ["\\rparen", 41, "mclose"],
      ["\\langle", 10216, "mopen"],
      ["\\rangle", 10217, "mclose"],
      ["\\lfloor", 8970, "mopen"],
      ["\\rfloor", 8971, "mclose"],
      ["\\lceil", 8968, "mopen"],
      ["\\rceil", 8969, "mclose"],
      ["\\vert", 8739],
      ["\\lvert", 8739, "mopen"],
      ["\\rvert", 8739, "mclose"],
      ["\\|", 8741],
      ["\\Vert", 8741],
      ["\\mVert", 8741],
      ["\\lVert", 8741, "mopen"],
      ["\\rVert", 8741, "mclose"],
      ["\\lbrack", 91, "mopen"],
      ["\\rbrack", 93, "mclose"],
      ["\\{", 123, "mopen"],
      ["\\}", 125, "mclose"],
      ["(", 40, "mopen"],
      [")", 41, "mclose"],
      ["[", 91, "mopen"],
      ["]", 93, "mclose"],
      ["\\ulcorner", 9484, "mopen", "ams"],
      ["\\urcorner", 9488, "mclose", "ams"],
      ["\\llcorner", 9492, "mopen", "ams"],
      ["\\lrcorner", 9496, "mclose", "ams"],
      ["\\lgroup", 10222, "mopen"],
      ["\\rgroup", 10223, "mclose"],
      ["\\lmoustache", 9136, "mopen"],
      ["\\rmoustache", 9137, "mclose"]
    ]);
    ve([
      ["\\dashrightarrow", 8674],
      ["\\dashleftarrow", 8672],
      ["\\Rrightarrow", 8667],
      ["\\Lleftarrow", 8666],
      ["\\leftrightarrows", 8646],
      ["\\rightleftarrows", 8644],
      ["\\curvearrowright", 8631],
      ["\\curvearrowleft", 8630],
      ["\\rightrightarrows", 8649],
      ["\\leftleftarrows", 8647],
      ["\\upuparrows", 8648],
      ["\\downdownarrows", 8650],
      ["\\vartriangle", 9651],
      ["\\triangleq", 8796],
      ["\\vartriangleleft", 8882],
      ["\\trianglelefteq", 8884],
      ["\\ntriangleleft", 8938],
      ["\\ntrianglelefteq", 8940],
      ["\\vartriangleright", 8883],
      ["\\trianglerighteq", 8885],
      ["\\ntriangleright", 8939],
      ["\\ntrianglerighteq", 8941],
      ["\\blacktriangleleft", 9664],
      ["\\blacktriangleright", 9654],
      ["\\leftarrowtail", 8610],
      ["\\rightarrowtail", 8611],
      ["\\looparrowright", 8620],
      ["\\looparrowleft", 8619],
      ["\\twoheadleftarrow", 8606],
      ["\\twoheadrightarrow", 8608],
      ["\\rightleftharpoons", 8652],
      ["\\leftrightharpoons", 8651],
      ["\\Rsh", 8625],
      ["\\Lsh", 8624],
      ["\\circlearrowright", 8635],
      ["\\circlearrowleft", 8634],
      ["\\restriction", 8638],
      ["\\upharpoonright", 8638],
      ["\\upharpoonleft", 8639],
      ["\\downharpoonright", 8642],
      ["\\downharpoonleft", 8643],
      ["\\rightsquigarrow", 8669],
      ["\\leadsto", 8669],
      ["\\leftrightsquigarrow", 8621],
      ["\\multimap", 8888],
      ["\\nrightarrow", 8603],
      ["\\nleftarrow", 8602],
      ["\\nRightarrow", 8655],
      ["\\nLeftarrow", 8653],
      ["\\nleftrightarrow", 8622],
      ["\\nLeftrightarrow", 8654],
      ["\\shortparallel", 8741],
      ["\\nless", 8814],
      ["\\nleqslant", 57360],
      ["\\lneq", 10887],
      ["\\lneqq", 8808],
      ["\\nleqq", 57361],
      ["\\lvertneqq", 57356],
      ["\\lnsim", 8934],
      ["\\lnapprox", 10889],
      ["\\nprec", 8832],
      ["\\npreceq", 8928],
      ["\\precnsim", 8936],
      ["\\precnapprox", 10937],
      ["\\nsim", 8769],
      ["\\nshortmid", 57350],
      ["\\nmid", 8740],
      ["\\nvdash", 8876],
      ["\\nvDash", 8877],
      ["\\ngtr", 8815],
      ["\\ngeqslant", 57359],
      ["\\ngeqq", 57358],
      ["\\gneq", 10888],
      ["\\gneqq", 8809],
      ["\\gvertneqq", 57357],
      ["\\gnsim", 8935],
      ["\\gnapprox", 10890],
      ["\\nsucc", 8833],
      ["\\nsucceq", 8929],
      ["\\succnsim", 8937],
      ["\\succnapprox", 10938],
      ["\\ncong", 8774],
      ["\\nshortparallel", 57351],
      ["\\nparallel", 8742],
      ["\\nVDash", 8879],
      ["\\nsupseteqq", 57368],
      ["\\supsetneq", 8843],
      ["\\varsupsetneq", 57371],
      ["\\supsetneqq", 10956],
      ["\\varsupsetneqq", 57369],
      ["\\nVdash", 8878],
      ["\\precneqq", 10933],
      ["\\succneqq", 10934],
      ["\\nsubseteqq", 57366],
      ["\\leqslant", 10877],
      ["\\geqslant", 10878],
      ["\\gtrsim", 8819],
      ["\\approxeq", 8778],
      ["\\thickapprox", 8776],
      ["\\lessapprox", 10885],
      ["\\gtrapprox", 10886],
      ["\\precapprox", 10935],
      ["\\succapprox", 10936],
      ["\\thicksim", 8764],
      ["\\succsim", 8831],
      ["\\precsim", 8830],
      ["\\backsim", 8765],
      ["\\eqsim", 8770],
      ["\\backsimeq", 8909],
      ["\\lesssim", 8818],
      ["\\nleq", 8816],
      ["\\ngeq", 8817],
      ["\\smallsmile", 8995],
      ["\\smallfrown", 8994],
      ["\\leqq", 8806],
      ["\\eqslantless", 10901],
      ["\\lll", 8920],
      ["\\lessgtr", 8822],
      ["\\lesseqgtr", 8922],
      ["\\lesseqqgtr", 10891],
      ["\\risingdotseq", 8787],
      ["\\fallingdotseq", 8786],
      ["\\subseteqq", 10949],
      ["\\Subset", 8912],
      ["\\sqsubset", 8847],
      ["\\preccurlyeq", 8828],
      ["\\curlyeqprec", 8926],
      ["\\vDash", 8872],
      ["\\Vvdash", 8874],
      ["\\bumpeq", 8783],
      ["\\Bumpeq", 8782],
      ["\\geqq", 8807],
      ["\\eqslantgtr", 10902],
      ["\\ggg", 8921],
      ["\\gtrless", 8823],
      ["\\gtreqless", 8923],
      ["\\gtreqqless", 10892],
      ["\\supseteqq", 10950],
      ["\\Supset", 8913],
      ["\\sqsupset", 8848],
      ["\\succcurlyeq", 8829],
      ["\\curlyeqsucc", 8927],
      ["\\Vdash", 8873],
      ["\\shortmid", 8739],
      ["\\between", 8812],
      ["\\pitchfork", 8916],
      ["\\varpropto", 8733],
      ["\\backepsilon", 8717],
      ["\\llless", 8920],
      ["\\gggtr", 8921],
      ["\\doteqdot", 8785],
      ["\\Doteq", 8785],
      ["\\eqcirc", 8790],
      ["\\circeq", 8791],
      ["\\therefore", 8756],
      ["\\because", 8757]
    ], "mrel", "ams");
    ve([
      ["+", 43],
      ["-", 8722],
      ["\u2212", 8722],
      ["\\pm", 177],
      ["\\mp", 8723],
      ["*", 8727],
      ["\\times", 215],
      ["\\div", 247],
      ["\\divides", 8739],
      ["\\cdot", 8901],
      ["\\cap", 8745],
      ["\\cup", 8746],
      ["\\setminus", 8726],
      ["\\land", 8743],
      ["\\wedge", 8743],
      ["\\lor", 8744],
      ["\\vee", 8744],
      ["\\circ", 8728],
      ["\\bigcirc", 9711],
      ["\\bullet", 8729],
      ["\\oplus", 8853],
      ["\\ominus", 8854],
      ["\\otimes", 8855],
      ["\\odot", 8857],
      ["\\oslash", 8856],
      ["\\bigtriangleup", 9651],
      ["\\bigtriangledown", 9661],
      ["\\triangleleft", 9667],
      ["\\triangleright", 9657],
      ["\\And", 38],
      ["\\dagger", 8224],
      ["\\dag", 8224],
      ["\\ddag", 8225],
      ["\\ddagger", 8225],
      ["\\ast", 8727],
      ["\\star", 8902],
      ["\\bigstar", 9733],
      ["\\diamond", 8900]
    ], "mbin");
    ve([
      ["\\lhd", 8882],
      ["\\rhd", 8883],
      ["\\lessdot", 8918],
      ["\\gtrdot", 8919],
      ["\\ltimes", 8905],
      ["\\rtimes", 8906],
      ["\\leftthreetimes", 8907],
      ["\\rightthreetimes", 8908],
      ["\\intercal", 8890],
      ["\\dotplus", 8724],
      ["\\doublebarwedge", 10846],
      ["\\divideontimes", 8903],
      ["\\centerdot", 8901],
      ["\\smallsetminus", 8726],
      ["\\barwedge", 8892],
      ["\\veebar", 8891],
      ["\\nor", 8891],
      ["\\curlywedge", 8911],
      ["\\curlyvee", 8910],
      ["\\boxminus", 8863],
      ["\\boxplus", 8862],
      ["\\boxtimes", 8864],
      ["\\boxdot", 8865],
      ["\\circleddash", 8861],
      ["\\circledast", 8859],
      ["\\circledcirc", 8858],
      ["\\unlhd", 8884],
      ["\\unrhd", 8885]
    ], "mbin", "ams");
    ve([
      ["\\surd", 8730],
      ["\\infty", 8734],
      ["\\prime", 8242],
      ["\\doubleprime", 8243],
      ["\\angle", 8736],
      ["`", 8216],
      ["\\$", 36],
      ["\\%", 37],
      ["\\_", 95],
      ["\\alpha", 945],
      ["\\beta", 946],
      ["\\gamma", 947],
      ["\\delta", 948],
      ["\\epsilon", 1013],
      ["\\varepsilon", 949],
      ["\\zeta", 950],
      ["\\eta", 951],
      ["\\theta", 952],
      ["\\vartheta", 977],
      ["\\iota", 953],
      ["\\kappa", 954],
      ["\\varkappa", 1008, "mord", "ams"],
      ["\\lambda", 955],
      ["\\mu", 956],
      ["\\nu", 957],
      ["\\xi", 958],
      ["\\omicron", 111],
      ["\\pi", 960],
      ["\\varpi", 982],
      ["\\rho", 961],
      ["\\varrho", 1009],
      ["\\sigma", 963],
      ["\\varsigma", 962],
      ["\\tau", 964],
      ["\\phi", 981],
      ["\\varphi", 966],
      ["\\upsilon", 965],
      ["\\chi", 967],
      ["\\psi", 968],
      ["\\omega", 969],
      ["\\Gamma", 915],
      ["\\Delta", 916],
      ["\\Theta", 920],
      ["\\Lambda", 923],
      ["\\Xi", 926],
      ["\\Pi", 928],
      ["\\Sigma", 931],
      ["\\Upsilon", 933],
      ["\\Phi", 934],
      ["\\Psi", 936],
      ["\\Omega", 937],
      ["\\digamma", 989, "mord", "ams"],
      ["\\emptyset", 8709]
    ]);
    ve([
      ["=", 61],
      ["<", 60],
      ["\\lt", 60],
      [">", 62],
      ["\\gt", 62],
      ["\\le", 8804],
      ["\\leq", 8804],
      ["\\ge", 8805],
      ["\\geq", 8805],
      ["\\ll", 8810],
      ["\\gg", 8811],
      ["\\coloneq", 8788],
      ["\\measeq", 8797],
      ["\\eqdef", 8798],
      ["\\questeq", 8799],
      [":", 58],
      ["\\cong", 8773],
      ["\\equiv", 8801],
      ["\\prec", 8826],
      ["\\preceq", 10927],
      ["\\succ", 8827],
      ["\\succeq", 10928],
      ["\\perp", 8869],
      ["\\propto", 8733],
      ["\\Colon", 8759],
      ["\\smile", 8995],
      ["\\frown", 8994],
      ["\\sim", 8764],
      ["\\doteq", 8784],
      ["\\bowtie", 8904],
      ["\\Join", 8904],
      ["\\asymp", 8781],
      ["\\sqsubseteq", 8849],
      ["\\sqsupseteq", 8850],
      ["\\approx", 8776],
      ["\\~", 126],
      ["\\leftrightarrow", 8596],
      ["\\Leftrightarrow", 8660],
      ["\\models", 8872],
      ["\\vdash", 8866],
      ["\\dashv", 8867],
      ["\\roundimplies", 10608],
      ["\\in", 8712],
      ["\\notin", 8713],
      ["\\ni", 8715],
      ["\\owns", 8715],
      ["\\subset", 8834],
      ["\\supset", 8835],
      ["\\subseteq", 8838],
      ["\\supseteq", 8839],
      ["\\differencedelta", 8710],
      ["\\mvert", 8739],
      ["\\parallel", 8741],
      ["\\simeq", 8771]
    ], "mrel");
    ve([
      ["\\lnot", 172],
      ["\\neg", 172],
      ["\\triangle", 9651],
      ["\\subsetneq", 8842],
      ["\\varsubsetneq", 57370],
      ["\\subsetneqq", 10955],
      ["\\varsubsetneqq", 57367],
      ["\\nsubset", 8836],
      ["\\nsupset", 8837],
      ["\\nsubseteq", 8840],
      ["\\nsupseteq", 8841]
    ], "mrel", "ams");
    ve([
      ["\\wp", 8472],
      ["\\aleph", 8501]
    ]);
    ve([
      ["\\blacktriangle", 9650],
      ["\\hslash", 8463],
      ["\\Finv", 8498],
      ["\\Game", 8513],
      ["\\eth", 240],
      ["\\mho", 8487],
      ["\\Bbbk", 107],
      ["\\yen", 165],
      ["\\square", 9633],
      ["\\Box", 9633],
      ["\\blacksquare", 9632],
      ["\\circledS", 9416],
      ["\\circledR", 174],
      ["\\triangledown", 9661],
      ["\\blacktriangledown", 9660],
      ["\\checkmark", 10003],
      ["\\diagup", 9585],
      ["\\measuredangle", 8737],
      ["\\sphericalangle", 8738],
      ["\\backprime", 8245],
      ["\\backdoubleprime", 8246],
      ["\\Diamond", 9674],
      ["\\lozenge", 9674],
      ["\\blacklozenge", 10731],
      ["\\varnothing", 8709],
      ["\\complement", 8705],
      ["\\maltese", 10016],
      ["\\beth", 8502],
      ["\\daleth", 8504],
      ["\\gimel", 8503]
    ], "mord", "ams");
    ve([
      ["\\ ", 160],
      ["~", 160],
      ["\\space", 160]
    ], "space");
    x(["!", ",", ":", ";", "enskip", "enspace", "quad", "qquad"], "", {
      createAtom: (t, e, r, i) => new Ge(t, r, i)
    });
    ve([
      ["\\colon", 58],
      ["\\cdotp", 8901],
      ["\\vdots", 8942, "mord"],
      ["\\ldotp", 46],
      [",", 44],
      [";", 59]
    ], "mpunct");
    ve([
      ["\\cdots", 8943],
      ["\\ddots", 8945],
      ["\\ldots", 8230],
      ["\\mathellipsis", 8230]
    ], "minner");
    ve([
      ["\\/", 47],
      ["|", 8739, "mord"],
      ["\\imath", 305],
      ["\\jmath", 567],
      ["\\degree", 176],
      ["'", 8242],
      ['"', 8221]
    ]);

    function Xn(t, e) {
      if (t.direction === e.direction) {
        let r = t.ranges.length;
        if (e.ranges.length === r) {
          let i = 0;
          for (; i < r && tc(t.ranges[i], e.ranges[i]) === "equal";) i++;
          return i === r ? "equal" : "different"
        }
      }
      return "different"
    }

    function tc(t, e) {
      return t[0] === e[0] && t[1] === e[1] ? "equal" : "different"
    }

    function xe(t) {
      let e = 1 / 0,
        r = -1 / 0;
      for (let i of t.ranges) e = Math.min(e, i[0], i[1]), r = Math.max(r, i[0], i[1]);
      return [e, r]
    }

    function rc(t, e) {
      if (!e) return "";
      if (typeof e == "string") return e;
      if (!t || e.after === void 0) return e.value;
      let r = !1,
        i = !1,
        o = !1,
        a = !1,
        n = !1,
        s = !1,
        l = !1,
        c = !1,
        u = !1,
        d = !1,
        m = !1,
        h = !1,
        f = !1,
        y = !1,
        w = !1,
        k = t[0],
        S = 0;
      for (; k && /msubsup|placeholder/.test(k.type);) S += 1, k = t[S];
      return r = !k || k.type === "first", k && (y = k.mode === "text", i = !y && k.type === "mord" && On.test(k.value), o = !y && k.type === "mord" && /\d+$/.test(k.value), a = !y && k.isFunction, n = k.type === "genfrac", s = k.type === "surd", l = k.type === "mbin", c = k.type === "mrel", u = k.type === "mop", d = k.type === "mpunct" || k.type === "minner", m = k.type === "array", h = k.type === "mopen", f = k.type === "mclose" || k.type === "leftright", w = k.type === "space"), e.after.includes("nothing") && r || e.after.includes("letter") && i || e.after.includes("digit") && o || e.after.includes("function") && a || e.after.includes("frac") && n || e.after.includes("surd") && s || e.after.includes("binop") && l || e.after.includes("relop") && c || e.after.includes("operator") && u || e.after.includes("punct") && d || e.after.includes("array") && m || e.after.includes("openfence") && h || e.after.includes("closefence") && f || e.after.includes("text") && y || e.after.includes("space") && w ? e.value : ""
    }

    function xi(t, e, r) {
      return r ? rc(t, r[e]) : ""
    }
    var uo = {
      "&": "\\&",
      "%": "\\%",
      "''": "^{\\doubleprime}",
      alpha: "\\alpha",
      delta: "\\delta",
      Delta: "\\Delta",
      pi: "\\pi",
      Pi: "\\Pi",
      theta: "\\theta",
      Theta: "\\Theta",
      ii: {
        after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text",
        value: "\\imaginaryI"
      },
      jj: {
        after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text",
        value: "\\imaginaryJ"
      },
      ee: {
        after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text",
        value: "\\exponentialE"
      },
      nabla: "\\nabla",
      grad: "\\nabla",
      del: "\\partial",
      deg: {
        after: "digit+space",
        value: "\\degree"
      },
      infty: "\\infty",
      "\u221E": "\\infty",
      oo: {
        after: "nothing+digit+frac+surd+binop+relop+punct+array+openfence+closefence+space",
        value: "\\infty"
      },
      "\u2211": "\\sum",
      sum: "\\sum_{#?}^{#?}",
      int: "\\int_{#?}^{#?}",
      prod: "\\prod_{#?}^{#?}",
      sqrt: "\\sqrt{#?}",
      "\u2206": "\\differentialD",
      "\u2202": "\\differentialD",
      arcsin: "\\arcsin",
      arccos: "\\arccos",
      arctan: "\\arctan",
      arcsec: "\\arcsec",
      arccsc: "\\arccsc",
      arsinh: "\\arsinh",
      arcosh: "\\arcosh",
      artanh: "\\artanh",
      arcsech: "\\arcsech",
      arccsch: "\\arccsch",
      arg: "\\arg",
      ch: "\\ch",
      cosec: "\\cosec",
      cosh: "\\cosh",
      cot: "\\cot",
      cotg: "\\cotg",
      coth: "\\coth",
      csc: "\\csc",
      ctg: "\\ctg",
      cth: "\\cth",
      sec: "\\sec",
      sinh: "\\sinh",
      sh: "\\sh",
      tanh: "\\tanh",
      tg: "\\tg",
      th: "\\th",
      sin: "\\sin",
      cos: "\\cos",
      tan: "\\tan",
      lg: "\\lg",
      lb: "\\lb",
      log: "\\log",
      ln: "\\ln",
      exp: "\\exp",
      lim: "\\lim_{#?}",
      dx: {
        after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text",
        value: "\\differentialD x"
      },
      dy: {
        after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text",
        value: "\\differentialD y"
      },
      dt: {
        after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text",
        value: "\\differentialD t"
      },
      AA: "\\forall",
      EE: "\\exists",
      "!EE": "\\nexists",
      "&&": "\\land",
      xin: {
        after: "nothing+text+relop+punct+openfence+space",
        value: "x \\in"
      },
      in: {
        after: "nothing+letter+closefence",
        value: "\\in"
      },
      "!in": "\\notin",
      NN: "\\mathbb{N}",
      ZZ: "\\Z",
      QQ: "\\Q",
      RR: "\\R",
      CC: "\\C",
      xx: "\\times",
      "+-": "\\pm",
      "\u2260": "\\ne",
      "!=": "\\ne",
      "\u2265": "\\ge",
      ">=": "\\ge",
      "\u2264": "\\le",
      "<=": "\\le",
      "<<": "\\ll",
      ">>": "\\gg",
      "~~": "\\approx",
      "\u2248": "\\approx",
      "?=": "\\questeq",
      "\xF7": "\\div",
      "\xAC": "\\neg",
      ":=": "\\coloneq",
      "::": "\\Colon",
      "(:": "\\langle",
      ":)": "\\rangle",
      beta: "\\beta",
      chi: "\\chi",
      epsilon: "\\epsilon",
      varepsilon: "\\varepsilon",
      eta: {
        after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text",
        value: "\\eta"
      },
      gamma: "\\gamma",
      Gamma: "\\Gamma",
      iota: "\\iota",
      kappa: "\\kappa",
      lambda: "\\lambda",
      Lambda: "\\Lambda",
      mu: {
        after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text",
        value: "\\mu"
      },
      nu: {
        after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text",
        value: "\\nu"
      },
      \u00B5: "\\mu",
      phi: {
        after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text",
        value: "\\phi"
      },
      Phi: {
        after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text",
        value: "\\Phi"
      },
      varphi: "\\varphi",
      psi: {
        after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text",
        value: "\\psi"
      },
      Psi: {
        after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text",
        value: "\\Psi"
      },
      rho: {
        after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text",
        value: "\\rho"
      },
      sigma: "\\sigma",
      Sigma: "\\Sigma",
      tau: {
        after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text",
        value: "\\tau"
      },
      vartheta: "\\vartheta",
      upsilon: "\\upsilon",
      xi: {
        after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space",
        value: "\\xi"
      },
      Xi: {
        after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text",
        value: "\\Xi"
      },
      zeta: "\\zeta",
      omega: "\\omega",
      Omega: "\\Omega",
      \u03A9: "\\omega",
      forall: "\\forall",
      exists: "\\exists",
      "!exists": "\\nexists",
      ":.": "\\therefore",
      liminf: "\\liminf_{#?}",
      limsup: "\\limsup_{#?}",
      argmin: "\\operatorname*{arg~min}_{#?}",
      argmax: "\\operatorname*{arg~max}_{#?}",
      det: "\\det",
      mod: "\\mod",
      max: "\\max",
      min: "\\min",
      erf: "\\operatorname{erf}",
      erfc: "\\operatorname{erfc}",
      bessel: "\\operatorname{bessel}",
      mean: "\\operatorname{mean}",
      median: "\\operatorname{median}",
      fft: "\\operatorname{fft}",
      lcm: "\\operatorname{lcm}",
      gcd: "\\operatorname{gcd}",
      randomReal: "\\operatorname{randomReal}",
      randomInteger: "\\operatorname{randomInteger}",
      Re: "\\operatorname{Re}",
      Im: "\\operatorname{Im}",
      mm: {
        after: "nothing+digit+operator",
        value: "\\operatorname{mm}"
      },
      cm: {
        after: "nothing+digit+operator",
        value: "\\operatorname{cm}"
      },
      km: {
        after: "nothing+digit+operator",
        value: "\\operatorname{km}"
      },
      kg: {
        after: "nothing+digit+operator",
        value: "\\operatorname{kg}"
      },
      "...": "\\ldots",
      "+...": "+\\cdots",
      "-...": "-\\cdots",
      "->...": "\\to\\cdots",
      "->": "\\to",
      "|->": "\\mapsto",
      "-->": "\\longrightarrow",
      "<--": "\\longleftarrow",
      "=>": "\\Rightarrow",
      "==>": "\\Longrightarrow",
      "<=>": "\\Leftrightarrow",
      "<->": "\\leftrightarrow",
      "(.)": "\\odot",
      "(+)": "\\oplus",
      "(/)": "\\oslash",
      "(*)": "\\otimes",
      "(-)": "\\ominus",
      "||": "\\Vert",
      "{": "\\{",
      "}": "\\}",
      "*": "\\cdot"
    };

    function _r(t, e) {
      var i;
      let r = (i = e == null ? void 0 : e.format) != null ? i : "auto";
      return r === "auto" && ([r, t] = ic(t)), r === "ascii-math" ? (t = t.replace(/\u2061/gu, ""), t = t.replace(/\u3016/gu, "{"), t = t.replace(/\u3017/gu, "}"), t = t.replace(/([^\\])sinx/g, "$1\\sin x"), t = t.replace(/([^\\])cosx/g, "$1\\cos x "), t = t.replace(/\u2013/g, "-"), ["ascii-math", Ne(t, {
        inlineShortcuts: e == null ? void 0 : e.inlineShortcuts
      })]) : ["latex", t]
    }

    function Ne(t, e) {
      var a, n, s;
      if (!t) return "";
      let r = !1,
        i, o = (a = e.inlineShortcuts) != null ? a : uo;
      if (!r && (t.startsWith("^") || t.startsWith("_")) && (i = Sr(t.slice(1), {
          inlineShortcuts: o,
          noWrap: !0
        }), t = t[0] + "{" + i.match + "}", t += Ne(i.rest, e), r = !0), r || (i = t.match(/^(sqrt|\u221A)(.*)/), i && (i = Sr(i[2], {
          inlineShortcuts: o,
          noWrap: !0
        }), t = "\\sqrt{" + ((n = i.match) != null ? n : "\\placeholder{}") + "}", t += Ne(i.rest, e), r = !0)), r || (i = t.match(/^(\\cbrt|\u221B)(.*)/), i && (i = Sr(i[2], {
          inlineShortcuts: o,
          noWrap: !0
        }), t = "\\sqrt[3]{" + ((s = i.match) != null ? s : "\\placeholder{}") + "}", t += Ne(i.rest, e), r = !0)), r || (i = t.match(/^abs(.*)/), i && (i = Sr(i[1], {
          inlineShortcuts: o,
          noWrap: !0
        }), t = "\\left|" + i.match + "\\right|", t += Ne(i.rest, e), r = !0)), r || (i = t.match(/^["”“](.*?)["”“](.*)/), i && (t = "\\text{" + i[1] + "}", t += Ne(i[2], e), r = !0)), r || (i = t.match(/^([^a-zA-Z\(\{\[\_\^\\\s"]+)(.*)/), i && (t = Zn(i[1], o), t += Ne(i[2], e), r = !0)), !r && /^([fgh])[^a-zA-Z]/.test(t) && (i = Sr(t.slice(1), {
          inlineShortcuts: o,
          noWrap: !0
        }), t = t[1] === "(" ? t[0] + "\\left(" + i.match + "\\right)" : t[0] + i.match, t += Ne(i.rest, e), r = !0), r || (i = t.match(/^([a-zA-Z]+)(.*)/), i && (t = Zn(i[1], o), t += Ne(i[2], e), r = !0)), !r)
        if (i = Sr(t, {
            inlineShortcuts: o,
            noWrap: !0
          }), i.match && i.rest[0] === "/") {
          let l = Sr(i.rest.slice(1), {
            inlineShortcuts: o,
            noWrap: !0
          });
          l.match && (t = "\\frac{" + i.match + "}{" + l.match + "}" + Ne(l.rest, e)), r = !0
        } else i.match && (t = t.startsWith("(") ? "\\left(" + i.match + "\\right)" + Ne(i.rest, e) : i.match + Ne(i.rest, e), r = !0);
      return r || (i = t.match(/^(\s+)(.*)$/), i && (t = " " + Ne(i[2], e), r = !0)), t
    }

    function Sr(t, e) {
      let r = "";
      t = t.trim();
      let i = t,
        o = t.charAt(0),
        a = {
          "(": ")",
          "{": "}",
          "[": "]"
        } [o];
      if (a) {
        let n = 1,
          s = 1;
        for (; s < t.length && n > 0;) t[s] === o && n++, t[s] === a && n--, s++;
        n === 0 ? (e.noWrap && o === "(" ? r = Ne(t.substring(1, s - 1), e) : (o === "{" && a === "}" && (o = "\\{", a = "\\}"), r = "\\left" + o + Ne(t.substring(1, s - 1), e) + "\\right" + a), i = t.slice(Math.max(0, s))) : (r = t.substring(1, s), i = "")
      } else {
        let n = t.match(/^([a-zA-Z]+)/);
        if (n) {
          let s = xi(null, t, e.inlineShortcuts);
          if (s) return s = s.replace("_{#?}", ""), s = s.replace("^{#?}", ""), {
            match: s,
            rest: t.slice(s.length)
          }
        }
        if (n = t.match(/^([a-zA-Z])/), n) return {
          match: n[1],
          rest: t.slice(1)
        };
        if (n = t.match(/^(-)?\d+(\.\d*)?/), n) return {
          match: n[0],
          rest: t.slice(n[0].length)
        };
        /^\\(left|right)/.test(t) || (n = t.match(/^(\\[a-zA-Z]+)/), n && (i = t.slice(n[1].length), r = n[1]))
      }
      return {
        match: r,
        rest: i
      }
    }

    function Zn(t, e) {
      let r = xi(null, t, e);
      return r ? (r = r.replace("_{#?}", ""), r = r.replace("^{#?}", ""), r += " ") : r = t, r
    }
    var na = [
      ["\\[", "\\]"],
      ["\\(", "\\)"],
      ["$$", "$$"],
      ["$", "$"],
      ["\\begin{math}", "\\end{math}"],
      ["\\begin{displaymath}", "\\end{displaymath}"],
      ["\\begin{equation}", "\\end{equation}"],
      ["\\begin{equation*}", "\\end{equation*}"]
    ];

    function mo(t) {
      let e = t.trim();
      for (let r of na)
        if (e.startsWith(r[0]) && e.endsWith(r[1])) return [!0, e.substring(r[0].length, e.length - r[1].length)];
      return [!1, t]
    }

    function ic(t) {
      if (t = t.trim(), t.length <= 1) return ["latex", t];
      let e;
      return [e, t] = mo(t), e ? ["latex", t] : t.startsWith("`") && t.endsWith("`") ? (t = t.substring(1, t.length - 1), ["ascii-math", t]) : t.includes("\\") ? ["latex", t] : /\$.+\$/.test(t) ? ["latex", `\\text{${t}}`] : [void 0, t]
    }
    var oc = "$$",
      ac = "$$",
      Yn = (t, e, r) => (na.some(i => e.startsWith(i[0]) && e.endsWith(i[1])) || (e = `${oc} ${e} ${ac}`), e),
      vi = class {
        constructor(e) {
          vi._registry[e] = this
        }
        static onPaste(e, r, i) {
          var a;
          if (!r.contentEditable && r.userSelect === "none") return r.model.announce("plonk"), !1;
          if (typeof i == "string") {
            let n = new DataTransfer;
            n.setData("text/plain", i), i = n
          }
          let o = new ClipboardEvent("paste", {
            clipboardData: i,
            cancelable: !0
          });
          return (a = r.host) != null && a.dispatchEvent(o) ? vi._registry[e].onPaste(r, i) : !1
        }
        static onCopy(e, r) {
          if (!r.clipboardData) return;
          if (!e.contentEditable && e.userSelect === "none") {
            e.model.announce("plonk");
            return
          }
          let i = e.model,
            o = i.selectionIsCollapsed ? [0, i.lastOffset] : xe(i.selection),
            a = i.getAtoms(o);
          if (a.every(n => n.mode === "text" || !n.mode)) r.clipboardData.setData("text/plain", a.filter(n => n instanceof Je).map(n => n.value).join(""));
          else if (a.every(n => n.mode === "latex")) r.clipboardData.setData("text/plain", i.getAtoms(o, {
            includeChildren: !0
          }).map(n => {
            var s;
            return (s = n.value) != null ? s : ""
          }).join(""));
          else {
            let n;
            a.length === 1 && a[0].verbatimLatex !== void 0 ? n = a[0].verbatimLatex : n = i.getValue(o, "latex-expanded"), r.clipboardData.setData("application/x-latex", n);
            try {
              r.clipboardData.setData("text/plain", e.options.onExport(e, n, o))
            } catch (l) {}
            a.length === 1 && (a[0].type === "root" || a[0].type === "group") && (a = a[0].body.filter(l => l.type !== "first"));
            try {
              r.clipboardData.setData("application/json+mathlive", JSON.stringify(a.map(l => l.toJson())))
            } catch (l) {}
            let s = window.MathfieldElement.computeEngine;
            if (s) try {
              s.jsonSerializationOptions = {
                metadata: ["latex"]
              };
              let l = s.parse(n),
                c = JSON.stringify(l.json);
              c && r.clipboardData.setData("application/json", c)
            } catch (l) {}
          }
          r.preventDefault()
        }
        static insert(e, r, i, o = {}) {
          return vi._registry[e].insert(r, i, o)
        }
        onPaste(e, r) {
          return !1
        }
        insert(e, r, i) {
          return !1
        }
      },
      X = vi;
    X._registry = {};
    var po = [{
        key: "left",
        command: "moveToPreviousChar"
      }, {
        key: "right",
        command: "moveToNextChar"
      }, {
        key: "up",
        command: "moveUp"
      }, {
        key: "down",
        command: "moveDown"
      }, {
        key: "shift+[ArrowLeft]",
        command: "extendSelectionBackward"
      }, {
        key: "shift+[ArrowRight]",
        command: "extendSelectionForward"
      }, {
        key: "shift+[ArrowUp]",
        command: "extendSelectionUpward"
      }, {
        key: "shift+[ArrowDown]",
        command: "extendSelectionDownward"
      }, {
        key: "[Backspace]",
        command: "deleteBackward"
      }, {
        key: "alt+[Delete]",
        command: "deleteBackward"
      }, {
        key: "[Delete]",
        command: "deleteForward"
      }, {
        key: "alt+[Backspace]",
        command: "deleteForward"
      }, {
        key: "alt+[ArrowLeft]",
        command: "moveToPreviousWord"
      }, {
        key: "alt+[ArrowRight]",
        command: "moveToNextWord"
      }, {
        key: "shift+alt+[ArrowLeft]",
        command: "extendToPreviousWord"
      }, {
        key: "shift+alt+[ArrowRight]",
        command: "extendToNextWord"
      }, {
        key: "ctrl+[ArrowLeft]",
        command: "moveToGroupStart"
      }, {
        key: "ctrl+[ArrowRight]",
        command: "moveToGroupEnd"
      }, {
        key: "shift+ctrl+[ArrowLeft]",
        command: "extendToGroupStart"
      }, {
        key: "shift+ctrl+[ArrowRight]",
        command: "extendToGroupEnd"
      }, {
        key: "[Space]",
        ifMode: "math",
        command: "moveAfterParent"
      }, {
        key: "shift+[Space]",
        ifMode: "math",
        command: "moveBeforeParent"
      }, {
        key: "[Home]",
        command: "moveToMathfieldStart"
      }, {
        key: "cmd+[ArrowLeft]",
        command: "moveToMathfieldStart"
      }, {
        key: "shift+[Home]",
        command: "extendToMathFieldStart"
      }, {
        key: "shift+cmd+[ArrowLeft]",
        command: "extendToMathFieldStart"
      }, {
        key: "[End]",
        command: "moveToMathfieldEnd"
      }, {
        key: "cmd+[ArrowRight]",
        command: "moveToMathfieldEnd"
      }, {
        key: "shift+[End]",
        command: "extendToMathFieldEnd"
      }, {
        key: "shift+cmd+[ArrowRight]",
        command: "extendToMathFieldEnd"
      }, {
        key: "[Pageup]",
        command: "moveToGroupStart"
      }, {
        key: "[Pagedown]",
        command: "moveToGroupEnd"
      }, {
        key: "[Tab]",
        ifMode: "math",
        command: "moveToNextPlaceholder"
      }, {
        key: "shift+[Tab]",
        ifMode: "math",
        command: "moveToPreviousPlaceholder"
      }, {
        key: "[Tab]",
        ifMode: "text",
        command: "moveToNextPlaceholder"
      }, {
        key: "shift+[Tab]",
        ifMode: "text",
        command: "moveToPreviousPlaceholder"
      }, {
        key: "[Escape]",
        ifMode: "math",
        command: ["switchMode", "latex"]
      }, {
        key: "[Escape]",
        ifMode: "text",
        command: ["switchMode", "latex"]
      }, {
        key: "[Escape]",
        ifMode: "latex",
        command: ["complete", "complete", {
          selectItem: "true"
        }]
      }, {
        key: "\\",
        ifMode: "math",
        command: ["switchMode", "latex", "\\"]
      }, {
        key: "[IntlBackslash]",
        ifMode: "math",
        command: ["switchMode", "latex", "\\"]
      }, {
        key: "[Tab]",
        ifMode: "latex",
        command: ["complete", "accept-suggestion"]
      }, {
        key: "[Return]",
        ifMode: "latex",
        command: "complete"
      }, {
        key: "[Enter]",
        ifMode: "latex",
        command: "complete"
      }, {
        key: "shift+[Escape]",
        ifMode: "latex",
        command: ["complete", "reject"]
      }, {
        key: "[ArrowDown]",
        ifMode: "latex",
        command: "nextSuggestion"
      }, {
        key: "[ArrowUp]",
        ifMode: "latex",
        command: "previousSuggestion"
      }, {
        key: "ctrl+a",
        ifPlatform: "!macos",
        command: "selectAll"
      }, {
        key: "cmd+a",
        command: "selectAll"
      }, {
        key: "[Cut]",
        command: "cutToClipboard"
      }, {
        key: "[Copy]",
        command: "copyToClipboard"
      }, {
        key: "[Paste]",
        command: "pasteFromClipboard"
      }, {
        key: "[Clear]",
        command: "deleteBackward"
      }, {
        key: "[Undo]",
        command: "undo"
      }, {
        key: "[Redo]",
        command: "redo"
      }, {
        key: "[EraseEof]",
        command: "deleteToGroupEnd"
      }, {
        key: "ctrl+x",
        command: "cutToClipboard"
      }, {
        key: "cmd+x",
        command: "cutToClipboard"
      }, {
        key: "ctrl+c",
        command: "copyToClipboard"
      }, {
        key: "cmd+c",
        command: "copyToClipboard"
      }, {
        key: "ctrl+v",
        command: "pasteFromClipboard"
      }, {
        key: "cmd+v",
        command: "pasteFromClipboard"
      }, {
        key: "ctrl+z",
        ifPlatform: "!macos",
        command: "undo"
      }, {
        key: "cmd+z",
        command: "undo"
      }, {
        key: "ctrl+y",
        ifPlatform: "!macos",
        command: "redo"
      }, {
        key: "shift+cmd+y",
        command: "redo"
      }, {
        key: "shift+ctrl+z",
        ifPlatform: "!macos",
        command: "redo"
      }, {
        key: "shift+cmd+z",
        command: "redo"
      }, {
        key: "ctrl+b",
        ifPlatform: "macos",
        command: "moveToPreviousChar"
      }, {
        key: "ctrl+f",
        ifPlatform: "macos",
        command: "moveToNextChar"
      }, {
        key: "ctrl+p",
        ifPlatform: "macos",
        command: "moveUp"
      }, {
        key: "ctrl+n",
        ifPlatform: "macos",
        command: "moveDown"
      }, {
        key: "ctrl+a",
        ifPlatform: "macos",
        command: "moveToMathfieldStart"
      }, {
        key: "ctrl+e",
        ifPlatform: "macos",
        command: "moveToMathfieldEnd"
      }, {
        key: "shift+ctrl+b",
        ifPlatform: "macos",
        command: "extendSelectionBackward"
      }, {
        key: "shift+ctrl+f",
        ifPlatform: "macos",
        command: "extendSelectionForward"
      }, {
        key: "shift+ctrl+p",
        ifPlatform: "macos",
        command: "extendSelectionUpward"
      }, {
        key: "shift+ctrl+n",
        ifPlatform: "macos",
        command: "extendSelectionDownward"
      }, {
        key: "shift+ctrl+a",
        ifPlatform: "macos",
        command: "extendToMathFieldStart"
      }, {
        key: "shift+ctrl+e",
        ifPlatform: "macos",
        command: "extendToMathFieldEnd"
      }, {
        key: "alt+ctrl+b",
        ifPlatform: "macos",
        command: "moveToPreviousWord"
      }, {
        key: "alt+ctrl+f",
        ifPlatform: "macos",
        command: "moveToNextWord"
      }, {
        key: "shift+alt+ctrl+b",
        ifPlatform: "macos",
        command: "extendToPreviousWord"
      }, {
        key: "shift+alt+ctrl+f",
        ifPlatform: "macos",
        command: "extendToNextWord"
      }, {
        key: "ctrl+h",
        ifPlatform: "macos",
        command: "deleteBackward"
      }, {
        key: "ctrl+d",
        ifPlatform: "macos",
        command: "deleteForward"
      }, {
        key: "ctrl+l",
        ifPlatform: "macos",
        command: "scrollIntoView"
      }, {
        key: "ctrl+[Digit2]",
        ifMode: "math",
        command: ["insert", "\\sqrt{#0}"]
      }, {
        key: "ctrl+[Digit5]",
        ifMode: "math",
        command: "moveToOpposite"
      }, {
        key: "ctrl+[Digit6]",
        ifMode: "math",
        command: "moveToSuperscript"
      }, {
        key: "ctrl+[Return]",
        ifMode: "math",
        command: "addRowAfter"
      }, {
        key: "ctrl+[Enter]",
        ifMode: "math",
        command: "addRowAfter"
      }, {
        key: "cmd+[Return]",
        ifMode: "math",
        command: "addRowAfter"
      }, {
        key: "cmd+[Enter]",
        ifMode: "math",
        command: "addRowAfter"
      }, {
        key: "alt+p",
        ifMode: "math",
        command: ["insert", "\\pi"]
      }, {
        key: "alt+v",
        ifMode: "math",
        command: ["insert", "\\sqrt{#0}"]
      }, {
        key: "alt+w",
        ifMode: "math",
        command: ["insert", "\\sum_{i=#?}^{#?}"]
      }, {
        key: "alt+b",
        command: ["insert", "\\int_{#?}^{#?}"]
      }, {
        key: "alt+u",
        ifMode: "math",
        command: ["insert", "\\cup"]
      }, {
        key: "alt+n",
        ifMode: "math",
        command: ["insert", "\\cap"]
      }, {
        key: "alt+o",
        ifMode: "math",
        command: ["insert", "\\emptyset"]
      }, {
        key: "alt+d",
        ifMode: "math",
        command: ["insert", "\\differentialD"]
      }, {
        key: "shift+alt+o",
        ifMode: "math",
        command: ["insert", "\\varnothing"]
      }, {
        key: "shift+alt+d",
        ifMode: "math",
        command: ["insert", "\\partial"]
      }, {
        key: "shift+alt+p",
        ifMode: "math",
        command: ["insert", "\\prod_{i=#?}^{#?}"]
      }, {
        key: "shift+alt+u",
        ifMode: "math",
        command: ["insert", "\\bigcup"]
      }, {
        key: "shift+alt+n",
        ifMode: "math",
        command: ["insert", "\\bigcap"]
      }, {
        key: "shift+alt+a",
        ifMode: "math",
        command: ["insert", "\\forall"]
      }, {
        key: "shift+alt+e",
        ifMode: "math",
        command: ["insert", "\\exists"]
      }, {
        key: "alt+[Backslash]",
        ifMode: "math",
        command: ["insert", "\\backslash"]
      }, {
        key: "[NumpadDivide]",
        ifMode: "math",
        command: ["insert", "\\frac{#@}{#?}"]
      }, {
        key: "alt+[NumpadDivide]",
        ifMode: "math",
        command: ["insert", "\\frac{#?}{#@}"]
      }, {
        key: "shift+alt+k",
        command: "toggleKeystrokeCaption"
      }, {
        key: "alt+[Space]",
        command: "toggleVirtualKeyboard"
      }, {
        key: "alt+ctrl+[ArrowUp]",
        command: ["speak", "all", {
          withHighlighting: !1
        }]
      }, {
        key: "alt+ctrl+[ArrowDown]",
        command: ["speak", "selection", {
          withHighlighting: !1
        }]
      }, {
        key: "alt+[Equal]",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: ["applyStyle", {
          mode: "text"
        }]
      }, {
        key: "alt+[Equal]",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "text",
        command: ["applyStyle", {
          mode: "math"
        }]
      }, {
        key: "shift+[Quote]",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: ["switchMode", "text", "", ""]
      }, {
        key: "shift+[Quote]",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "text",
        command: ["switchMode", "math", "", ""]
      }, {
        key: "/",
        ifMode: "math",
        command: ["insert", "\\frac{#@}{#?}"]
      }, {
        key: "alt+/",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: ["insert", "\\/"]
      }, {
        key: "alt+[BracketLeft]",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: ["insert", "\\left\\lbrack #0 \\right\\rbrack"]
      }, {
        key: "ctrl+[Minus]",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: "moveToSubscript"
      }, {
        key: "shift+alt+[BracketLeft]",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: ["insert", "\\left\\lbrace #0 \\right\\rbrace"]
      }, {
        key: "ctrl+;",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: "addRowAfter"
      }, {
        key: "cmd+;",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: "addRowAfter"
      }, {
        key: "shift+ctrl+;",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: "addRowBefore"
      }, {
        key: "shift+cmd+;",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: "addRowBefore"
      }, {
        key: "ctrl+[Backspace]",
        ifMode: "math",
        command: "removeRow"
      }, {
        key: "cmd+[Backspace]",
        ifMode: "math",
        command: "removeRow"
      }, {
        key: "ctrl+[Comma]",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: "addColumnAfter"
      }, {
        key: "cmd+[Comma]",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: "addColumnAfter"
      }, {
        key: "shift+ctrl+[Comma]",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: "addColumnBefore"
      }, {
        key: "shift+cmd+[Comma]",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: "addColumnBefore"
      }, {
        key: "shift+[Backspace]",
        ifMode: "math",
        command: "removeColumn"
      }, {
        key: "alt+[Digit5]",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: ["insert", "$\\infty"]
      }, {
        key: "alt+[Digit6]",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: ["insert", "\\wedge"]
      }, {
        key: "shift+alt+[Digit6]",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: ["insert", "\\vee"]
      }, {
        key: "alt+[Digit9]",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: ["insert", "("]
      }, {
        key: "alt+[Digit0]",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: ["insert", ")"]
      }, {
        key: "alt+|",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: ["insert", "|"]
      }, {
        key: "shift+[Backquote]",
        ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"],
        ifMode: "math",
        command: ["insert", "\\~"]
      }, {
        key: "[Backquote]",
        ifLayout: ["windows.french", "linux.french"],
        ifMode: "math",
        command: ["insert", "^2"]
      }],
      Qn = {
        "\\theta": "alt+q",
        "\\sqrt": ["alt+v", "ctrl+[Digit2]"],
        "\\pi": "alt+p",
        "\\prod": "shift+alt+p",
        "\\sum": "alt+w",
        "\\int": "alt+b",
        "\\cup": "alt+u",
        "\\cap": "alt+n",
        "\\bigcup": "shift+alt+u",
        "\\bigcap": "shift+alt+n",
        "\\forall": "shift+alt+a",
        "\\exists": "shift+alt+e",
        "\\infty": "alt+[Digit5]",
        "\\wedge": "alt+[Digit6]",
        "\\vee": "shift+alt+[Digit6]",
        "\\differentialD": "alt+d",
        "\\partial": "shift+alt+d",
        "\\frac": "Slash",
        "\\emptyset": "alt+o",
        "\\varnothing": "shift+alt+o",
        "\\~": "~"
      };

    function wi(t, e) {
      let r = dr(t, Object.keys(t));
      for (let i of Object.keys(e)) switch (i) {
        case "scriptDepth":
          if (Y(e.scriptDepth)) r.scriptDepth = [e.scriptDepth[0], e.scriptDepth[1]];
          else if (typeof e.scriptDepth == "number") r.scriptDepth = [e.scriptDepth, e.scriptDepth];
          else throw new TypeError("Unexpected value for scriptDepth");
          break;
        case "mathVirtualKeyboardPolicy":
          let o = e.mathVirtualKeyboardPolicy.toLowerCase();
          r.mathVirtualKeyboardPolicy = o;
          break;
        case "letterShapeStyle":
          e.letterShapeStyle === "auto" ? W.locale.startsWith("fr") ? r.letterShapeStyle = "french" : r.letterShapeStyle = "tex" : r.letterShapeStyle = e.letterShapeStyle;
          break;
        case "defaultMode":
          ["text", "math", "inline-math"].includes(e.defaultMode) ? r.defaultMode = e.defaultMode : (console.error('MathLive: valid valeus for defaultMode are "text", "math" or "inline-math"'), r.defaultMode = "math");
          break;
        case "macros":
          r.macros = Qi(e.macros);
          break;
        default:
          Y(e[i]) ? r[i] = [...e[i]] : typeof e[i] == "object" ? r[i] = b({}, e[i]) : r[i] = e[i]
      }
      return r
    }

    function dr(t, e) {
      let r;
      typeof e == "string" ? r = [e] : e === void 0 ? r = Object.keys(t) : r = e;
      let i = {};
      for (let o of r) t[o] === null ? i[o] = null : Y(t[o]) ? i[o] = [...t[o]] : typeof t[o] == "object" && !(t[o] instanceof Element) && o !== "computeEngine" ? i[o] = b({}, t[o]) : i[o] = t[o];
      return typeof e == "string" ? i[e] : i
    }

    function ki() {
      var t;
      return {
        readOnly: !1,
        defaultMode: "math",
        macros: qr(),
        registers: {},
        colorMap: br,
        backgroundColorMap: zr,
        letterShapeStyle: W.locale.startsWith("fr") ? "french" : "tex",
        smartMode: !1,
        smartFence: !0,
        smartSuperscript: !0,
        scriptDepth: [1 / 0, 1 / 0],
        removeExtraneousParentheses: !0,
        mathModeSpace: "",
        placeholderSymbol: "\u25A2",
        popoverPolicy: "auto",
        keybindings: po,
        inlineShortcuts: uo,
        inlineShortcutTimeout: 0,
        mathVirtualKeyboardPolicy: "auto",
        virtualKeyboardTargetOrigin: (t = globalThis.window) == null ? void 0 : t.origin,
        originValidator: "same-origin",
        onInlineShortcut: () => "",
        onExport: Yn,
        value: ""
      }
    }

    function ho(t) {
      return t.defaultMode === "inline-math" ? "math" : t.defaultMode
    }

    function Tt(t) {
      return typeof t == "number" && !Number.isNaN(t)
    }

    function Mr(t) {
      return Array.isArray(t) && t.length === 2
    }

    function Wr(t) {
      return t != null && typeof t == "object" && "ranges" in t && Array.isArray(t.ranges)
    }
    var es = {
        main: ["Main-Regular", "ML__cmr"],
        "main-italic": ["Main-Italic", "ML__cmr ML__it"],
        "main-bold": ["Main-Bold", "ML__cmr ML__bold"],
        "main-bolditalic": ["Main-BoldItalic", "ML__cmr ML__bold ML__it"],
        normal: ["Main-Regular", "ML__cmr"],
        "normal-bold": ["Main-Bold", "ML__mathbf"],
        "normal-italic": ["Math-Italic", "ML__mathit"],
        "normal-bolditalic": ["Math-BoldItalic", "ML__mathbfit"],
        ams: ["AMS-Regular", "ML__ams"],
        "ams-bold": ["AMS-Regular", "ML__ams"],
        "ams-italic": ["AMS-Regular", "ML__ams"],
        "ams-bolditalic": ["AMS-Regular", "ML__ams"],
        "sans-serif": ["SansSerif-Regular", "ML__sans"],
        "sans-serif-bold": ["SansSerif-Regular", "ML__sans ML__bold"],
        "sans-serif-italic": ["SansSerif-Regular", "ML__sans"],
        "sans-serif-bolditalic": ["SansSerif-Regular", "ML__sans"],
        calligraphic: ["Caligraphic-Regular", "ML__cal"],
        "calligraphic-bold": ["Caligraphic-Regular", "ML__cal ML__bold"],
        "calligraphic-italic": ["Caligraphic-Regular", "ML__cal ML__it"],
        "calligraphic-bolditalic": ["Caligraphic-Regular", "ML__cal ML__bold ML__it"],
        script: ["Script-Regular", "ML__script"],
        "script-bold": ["Script-Regular", "ML__script ML__bold"],
        "script-italic": ["Script-Regular", "ML__script ML__it"],
        "script-bolditalic": ["Script-Regular", "ML__script ML__bold ML__it"],
        fraktur: ["Fraktur-Regular", "ML__frak"],
        "fraktur-bold": ["Fraktur-Regular", "ML__frak"],
        "fraktur-italic": ["Fraktur-Regular", "ML__frak"],
        "fraktur-bolditalic": ["Fraktur-Regular", "ML__frak"],
        monospace: ["Typewriter-Regular", "ML__tt"],
        "monospace-bold": ["Typewriter-Regular", "ML__tt ML__bold"],
        "monospace-italic": ["Typewriter-Regular", "ML__tt ML__it"],
        "monospace-bolditalic": ["Typewriter-Regular", "ML__tt ML__bold ML__it"],
        "double-struck": ["AMS-Regular", "ML__bb"],
        "double-struck-bold": ["AMS-Regular", "ML__bb"],
        "double-struck-italic": ["AMS-Regular", "ML__bb"],
        "double-struck-bolditalic": ["AMS-Regular", "ML__bb"]
      },
      ts = {
        "double-struck": /^[A-Z ]$/,
        script: /^[A-Z ]$/,
        calligraphic: /^[\dA-Z ]$/,
        fraktur: /^[\dA-Za-z ]$|^[!"#$%&'()*+,\-./:;=?[]^’‘]$/,
        monospace: /^[\dA-Za-z ]$|^[!"&'()*+,\-./:;=?@[\]^_~\u0131\u0237\u0393\u0394\u0398\u039B\u039E\u03A0\u03A3\u03A5\u03A8\u03A9]$/,
        "sans-serif": /^[\dA-Za-z ]$|^[!"&'()*+,\-./:;=?@[\]^_~\u0131\u0237\u0393\u0394\u0398\u039B\u039E\u03A0\u03A3\u03A5\u03A8\u03A9]$/
      },
      rs = /^[\u03B1-\u03C9]|\u03D1|\u03D5|\u03D6|\u03F1|\u03F5]$/,
      nc = /^[\u0393|\u0394\u0398\u039B\u039E\u03A0\u03A3\u03A5\u03A6\u03A8\u03A9]$/,
      sc = [/^[a-z]$/, /^[A-Z]$/, rs, nc],
      lc = {
        iso: ["it", "it", "it", "it"],
        tex: ["it", "it", "it", "up"],
        french: ["it", "up", "up", "up"],
        upright: ["up", "up", "up", "up"]
      },
      la = class extends Te {
        constructor() {
          super("math")
        }
        createAtom(e, r, i) {
          var n, s, l, c, u;
          let o = r.getDefinition(e, "math");
          if (o === null) return new g("mord", r, {
            mode: "math",
            command: e,
            value: e,
            style: i
          });
          if (o.definitionType === "symbol") {
            let d = new g((n = o.type) != null ? n : "mord", r, {
              mode: "math",
              command: (s = o.command) != null ? s : e,
              value: String.fromCodePoint(o.codepoint),
              style: i
            });
            return (l = o.isFunction) != null && l && (d.isFunction = !0), e.startsWith("\\") && (d.verbatimLatex = e), d
          }
          let a = new g("mord", r, {
            mode: "math",
            command: (c = o.command) != null ? c : e,
            value: e,
            style: i
          });
          return (u = o.isFunction) != null && u && (a.isFunction = !0), e.startsWith("\\") && (a.verbatimLatex = e), a
        }
        serialize(e, r) {
          let {
            parent: i
          } = e[0], o = i == null ? void 0 : i.computedStyle.fontSize;
          return U(Re(e, "fontSize").map(a => {
            let n = dc(a, r),
              s = a[0].computedStyle.fontSize;
            return s && (!i || o !== s) ? "\\" + ["", "tiny", "scriptsize", "footnotesize", "small", "normalsize", "large", "Large", "LARGE", "huge", "Huge"][s] + " " + n : n
          }))
        }
        applyStyle(e, r) {
          if (r.variant === void 0) return "";
          let i = r.letterShapeStyle === "auto" || !r.letterShapeStyle ? "tex" : r.letterShapeStyle,
            {
              variant: o
            } = r,
            {
              variantStyle: a
            } = r;
          o === "normal" && !a && /[\u00A3\u0131\u0237]/.test(e.value) && (o = "main", a = "italic"), o === "normal" && !a && e.value.length === 1 && sc.forEach((c, u) => {
            c.test(e.value) && lc[i][u] === "it" && (a = "italic")
          }), a === "up" && (a = void 0);
          let n = a ? o + "-" + a : o;
          es[n];
          let [s, l] = es[n];
          return ts[o] && !ts[o].test(e.value) ? (e.value = En(e.value, o, a), null) : (rs.test(e.value) && (e.classes += " lcGreek"), l && (e.classes += " " + l), s)
        }
      };

    function cc(t, e) {
      var a;
      let {
        parent: r
      } = t[0], i = sa(r), o = (a = r == null ? void 0 : r.mode) != null ? a : "math";
      return U(Re(t, "variant").map(n => {
        let s = sa(n[0]);
        if (n.every(c => {
            let u = c.context.getDefinition(c.command, o);
            return !u || u.definitionType === "function" || !u.variant ? !1 : sa(c) === s
          })) return U(n.map(c => g.serialize(c, e)));
        let l = "";
        return s && s !== i && (l = {
          calligraphic: "\\mathcal{",
          fraktur: "\\mathfrak{",
          "double-struck": "\\mathbb{",
          script: "\\mathscr{",
          monospace: "\\mathtt{",
          "sans-serif": "\\mathsf{",
          normal: "\\mathrm{",
          "normal-italic": "\\mathnormal{",
          "normal-bold": "\\mathbf{",
          "normal-bolditalic": "\\mathbfit{",
          ams: "",
          "ams-italic": "\\mathit{",
          "ams-bold": "\\mathbf{",
          "ams-bolditalic": "\\mathbfit{",
          main: "",
          "main-italic": "\\mathit{",
          "main-bold": "\\mathbf{",
          "main-bolditalic": "\\mathbfit{"
        } [s]), l ? l + U(n.map(c => g.serialize(c, e))) + "}" : U(n.map(c => g.serialize(c, e)))
      }))
    }

    function uc(t, e) {
      let {
        parent: r
      } = t[0], i = r == null ? void 0 : r.computedStyle.color;
      return U(Re(t, "color").map(o => {
        var s, l;
        let a = cc(o, e),
          n = o[0].computedStyle;
        return !((s = e.skipStyles) != null && s) && n.color && (!r || i !== n.color) ? "\\textcolor{" + ((l = n.verbatimColor) != null ? l : n.color) + "}{" + a + "}" : a
      }))
    }

    function dc(t, e) {
      let {
        parent: r
      } = t[0], i = r == null ? void 0 : r.computedStyle.backgroundColor;
      return U(Re(t, "backgroundColor").map(o => {
        var s, l;
        let a = uc(o, e),
          n = o[0].computedStyle;
        return !((s = e.skipStyles) != null && s) && a.trim() && n.backgroundColor && (!r || i !== n.backgroundColor) && (o.length > 0 || !(o[0] instanceof et)) && (a = `\\ensuremath{${a}}`, a = `\\colorbox{${(l=n.verbatimBackgroundColor)!=null?l:n.backgroundColor}}{${a}}`), a
      }))
    }

    function sa(t) {
      if (!t) return "";
      let {
        style: e
      } = t;
      if (e.variant === void 0) return "";
      let r = e.variant;
      return e.variantStyle && e.variantStyle !== "up" && (r += "-" + e.variantStyle), r
    }
    new la;

    function Ur(t) {
      return [U(t.map(e => e[0])), t.map(e => e[1]).some(e => e === !0)]
    }

    function mc(t, e) {
      return [U(t.map(r => g.serialize(r, e))), !0]
    }

    function pc(t, e) {
      return Ur(Re(t, "fontShape").map(r => {
        let [i, o] = mc(r, e), {
          fontShape: a
        } = r[0].style;
        return a === "it" ? ["\\textit{" + i + "}", !1] : a === "sl" ? ["\\textsl{" + i + "}", !1] : a === "sc" ? ["\\textsc{" + i + "}", !1] : a === "n" ? ["\\textup{" + i + "}", !1] : a ? [`{\\fontshape{${r[0].style.fontShape}}${i}`, !1] : [i, o]
      }))
    }

    function hc(t, e) {
      return Ur(Re(t, "fontSeries").map(r => {
        let [i, o] = pc(r, e), {
          fontSeries: a
        } = r[0].style;
        return a === "b" ? [`\\textbf{${i}}`, !1] : a === "l" ? [`\\textlf{${i}}`, !1] : a === "m" ? [`\\textmd{${i}}`, !1] : a ? [`\\fontseries{${a}}${i}`, !1] : [i, o]
      }))
    }

    function fc(t, e) {
      return Ur(Re(t, "fontSize").map(r => {
        var n, s;
        let [i, o] = hc(r, e), a = (s = ["", "tiny", "scriptsize", "footnotesize", "small", "normalsize", "large", "Large", "LARGE", "huge", "Huge"][(n = r[0].style.fontSize) != null ? n : ""]) != null ? s : "";
        return a ? [`{\\${a} ${i}}`, o] : [i, o]
      }))
    }

    function gc(t, e) {
      return Ur(Re(t, "fontFamily").map(r => {
        var n, s;
        let [i, o] = fc(r, e), a = (s = {
          roman: "textrm",
          monospace: "texttt",
          "sans-serif": "textsf"
        } [(n = r[0].style.fontFamily) != null ? n : ""]) != null ? s : "";
        return a ? [`\\${a}{${i}}`, !1] : r[0].style.fontFamily ? [`\\fontfamily{${r[0].style.fontFamily}}${i}`, o] : [i, o]
      }))
    }

    function yc(t, e) {
      return gc(t, e)
    }

    function bc(t, e) {
      return Ur(Re(t, "backgroundColor").map(r => {
        var n, s;
        let [i, o] = xc(r, e), a = r[0].computedStyle;
        return !((n = e.skipStyles) != null && n) && a.backgroundColor && a.backgroundColor !== "none" ? [`\\colorbox{${(s=a.verbatimBackgroundColor)!=null?s:a.backgroundColor}}{${i}}`, !1] : [i, o]
      }))
    }

    function xc(t, e) {
      var i;
      if (!t || t.length === 0) return ["", !1];
      let r = (i = t[0].parent) == null ? void 0 : i.style.color;
      return Ur(Re(t, "color").map(o => {
        var s, l;
        let [a, n] = yc(o, e);
        return !((s = e.skipStyles) != null && s) && o[0].style.color && o[0].style.color !== "none" && r !== o[0].style.color ? [`\\textcolor{${(l=o[0].style.verbatimColor)!=null?l:o[0].style.color}}{${a}}`, !1] : [a, n]
      }))
    }
    var is = {
        roman: "",
        "sans-serif": "ML__sans",
        monospace: "ML__tt"
      },
      ca = class extends Te {
        constructor() {
          super("text")
        }
        createAtom(e, r, i) {
          let o = r.getDefinition(e, "text");
          return o && o.definitionType === "symbol" ? new Je(e, String.fromCodePoint(o.codepoint), i != null ? i : {}, r) : null
        }
        serialize(e, r) {
          var a;
          let [i, o] = bc(e, r);
          return ((a = r.skipModeCommand) != null ? a : !1) === !0 && (o = !1), o && (i = `\\text{${i}}`), i
        }
        applyStyle(e, r) {
          var o, a, n, s, l;
          let {
            fontFamily: i
          } = r;
          if (is[i] ? e.classes += " " + is[i] : i && e.setStyle("font-family", i), r.fontShape && (e.classes += " ", e.classes += (o = {
              it: "ML__it",
              sl: "ML__shape_sl",
              sc: "ML__shape_sc",
              ol: "ML__shape_ol"
            } [r.fontShape]) != null ? o : ""), r.fontSeries) {
            let c = r.fontSeries.match(/(.?[lbm])?(.?[cx])?/);
            c && (e.classes += " ", e.classes += (n = {
              ul: "ML__series_ul",
              el: "ML__series_el",
              l: "ML__series_l",
              sl: "ML__series_sl",
              m: "",
              sb: "ML__series_sb",
              b: "ML__bold",
              eb: "ML__series_eb",
              ub: "ML__series_ub"
            } [(a = c[1]) != null ? a : ""]) != null ? n : "", e.classes += " ", e.classes += (l = {
              uc: "ML__series_uc",
              ec: "ML__series_ec",
              c: "ML__series_c",
              sc: "ML__series_sc",
              n: "",
              sx: "ML__series_sx",
              x: "ML__series_x",
              ex: "ML__series_ex",
              ux: "ML__series_ux"
            } [(s = c[2]) != null ? s : ""]) != null ? l : "")
          }
          return "Main-Regular"
        }
      };
    new ca;
    var ua = class extends Te {
      constructor() {
        super("latex")
      }
      createAtom(e, r, i) {
        return new oe(e, r)
      }
      serialize(e, r) {
        return e.filter(i => i instanceof oe && !i.isSuggestion).map(i => i.value).join("")
      }
      applyStyle() {
        return null
      }
    };
    new ua;
    var rt = {
        "\\ne": "<mo>&ne;</mo>",
        "\\neq": "<mo>&neq;</mo>",
        "\\pm": "&#177;",
        "\\times": "&#215;",
        "\\colon": ":",
        "\\vert": "|",
        "\\Vert": "\u2225",
        "\\mid": "\u2223",
        "\\lbrace": "{",
        "\\rbrace": "}",
        "\\lparen": "(",
        "\\rparen": ")",
        "\\langle": "\u27E8",
        "\\rangle": "\u27E9",
        "\\lfloor": "\u230A",
        "\\rfloor": "\u230B",
        "\\lceil": "\u2308",
        "\\rceil": "\u2309",
        "\\vec": "&#x20d7;",
        "\\acute": "&#x00b4;",
        "\\grave": "&#x0060;",
        "\\dot": "&#x02d9;",
        "\\ddot": "&#x00a8;",
        "\\tilde": "&#x007e;",
        "\\bar": "&#x00af;",
        "\\breve": "&#x02d8;",
        "\\check": "&#x02c7;",
        "\\hat": "&#x005e;"
      },
      os = "<mo>&#x2061;</mo>",
      ma = "<mo>&#8290;</mo>";

    function fo(t) {
      return t.replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function le(t, e) {
      return !t || !e.generateID ? "" : ` extid="${t}"`
    }

    function vc(t, e, r) {
      var s, l, c, u, d, m, h, f;
      let i = !1;
      e = e != null ? e : t.atoms.length;
      let o = "",
        a = "",
        n = t.atoms[t.index];
      if (n.command === "\\operatorname") a = Si(n.body), t.index += 1;
      else {
        let y = (l = (s = n.style) == null ? void 0 : s.variant) != null ? l : "",
          w = (u = (c = n.style) == null ? void 0 : c.variantStyle) != null ? u : "";
        for (; t.index < e && (n.type === "mord" || n.type === "macro") && !n.isDigit() && y === ((m = (d = n.style) == null ? void 0 : d.variant) != null ? m : "") && w === ((f = (h = n.style) == null ? void 0 : h.variantStyle) != null ? f : "");) a += Si([n]), t.index += 1, n = t.atoms[t.index]
      }
      return a.length > 0 && (i = !0, o = `<mi>${a}</mi>`, (t.lastType === "mi" || t.lastType === "mn" || t.lastType === "mtext" || t.lastType === "fence") && !/^<mo>(.*)<\/mo>$/.test(o) && (o = ma + o), a.endsWith(">f</mi>") || a.endsWith(">g</mi>") ? (o += os, t.lastType = "applyfunction") : t.lastType = /^<mo>(.*)<\/mo>$/.test(o) ? "mo" : "mi", _i(a, t, r) || (t.mathML += o)), i
    }

    function wc(t) {
      return t.index < t.atoms.length && t.atoms[t.index].superscript && t.atoms[t.index].type === "msubsup"
    }

    function kc(t) {
      let e = -1,
        r = t.index,
        i = !1,
        o = !1;
      for (; r < t.atoms.length && !i && !o;) {
        let a = t.atoms[r];
        i = !a.isDigit(), o = !i && a.superscript !== void 0, r++
      }
      return o && (e = r - 1), e
    }

    function _i(t, e, r) {
      var s;
      let i = e.atoms[e.index - 1];
      if (!i) return !1;
      if (!i.superscript && !i.subscript)
        if (((s = e.atoms[e.index]) == null ? void 0 : s.type) === "msubsup") i = e.atoms[e.index], e.index += 1;
        else return !1;
      let o = V(i.superscript, r),
        a = V(i.subscript, r);
      if (!o && !a) return !1;
      let n = "";
      return o && a ? n = `<msubsup>${t}${a}${o}</msubsup>` : o ? n = `<msup>${t}${o}</msup>` : a && (n = `<msub>${t}${a}</msub>`), e.mathML += n, e.lastType = "", !0
    }

    function Sc(t, e, r) {
      e = e != null ? e : t.atoms.length;
      let i = t.index,
        o = "";
      for (; t.index < e && t.atoms[t.index].mode === "text";) o += t.atoms[t.index].value ? t.atoms[t.index].value : " ", t.index += 1;
      return o.length > 0 ? (t.mathML += `<mtext ${le(t.atoms[i].id,r)}
      >${o}</mtext>`, t.lastType = "mtext", !0) : !1
    }

    function _c(t, e, r) {
      e = e != null ? e : t.atoms.length;
      let i = t.index,
        o = "",
        a = kc(t);
      for (a >= 0 && a < e && (e = a); t.index < e && t.atoms[t.index].isDigit();) o += t.atoms[t.index].asDigit(), t.index += 1;
      return o.length <= 0 ? !1 : (o = "<mn" + le(t.atoms[i].id, r) + ">" + o + "</mn>", a < 0 && wc(t) && (a = t.index, t.index += 1), _i(o, t, r) || (t.mathML += o, t.lastType = "mn"), !0)
    }

    function Mc(t, e, r) {
      let i = !1;
      e = e != null ? e : t.atoms.length;
      let o = "",
        a = "";
      if (t.index < e && t.atoms[t.index].type === "mopen") {
        let n = !1,
          s = 0,
          l = t.index,
          c = -1,
          u = l + 1;
        for (; u < e && !n;) t.atoms[u].type === "mopen" ? s += 1 : t.atoms[u].type === "mclose" && (s -= 1), s === -1 && (n = !0, c = u), u += 1;
        n && (o = "<mrow>", o += Ar(t.atoms[l], r), o += V(t.atoms, r, l + 1, c), o += Ar(t.atoms[c], r), o += "</mrow>", t.index = c + 1, (t.lastType === "mi" || t.lastType === "mn" || t.lastType === "mfrac" || t.lastType === "fence") && (t.mathML += ma), _i(o, t, r) && (i = !0, t.lastType = "", o = ""), a = "fence")
      }
      return o.length > 0 && (i = !0, t.mathML += o, t.lastType = a), i
    }

    function Ac(t, e, r) {
      let i = !1;
      e = e != null ? e : t.atoms.length;
      let o = "",
        a = "",
        n = t.atoms[t.index];
      if (t.index < e && (n.type === "mbin" || n.type === "mrel")) o += da(t.atoms[t.index], r), t.index += 1, a = "mo";
      else if (t.index < e && n.type === "mop") {
        if (n.subsupPlacement === "over-under" && (n.superscript || n.subscript)) {
          let s = Ar(n, r);
          n.superscript && n.subscript ? (o += "<munderover>" + s, o += V(n.subscript, r), o += V(n.superscript, r), o += "</munderover>") : n.superscript ? (o += "<mover>" + s, o += V(n.superscript, r), o += "</mover>") : n.subscript && (o += "<munder>" + s, o += V(n.subscript, r), o += "</munder>"), a = "mo"
        } else {
          let s = t.atoms[t.index],
            l = s.value === "\\operatorname",
            c = l ? '<mi class="MathML-Unit"' + le(s.id, r) + ">" + Si(s.value) + "</mi>" : Ar(s, r);
          o += c, !l && !/^<mo>(.*)<\/mo>$/.test(c) ? (o += os, a = "applyfunction") : a = l ? "mi" : "mo"
        }(t.lastType === "mi" || t.lastType === "mn") && !/^<mo>(.*)<\/mo>$/.test(o) && (o = ma + o), t.index += 1
      }
      return o.length > 0 && (i = !0, _i(o, t, r) || (t.mathML += o, t.lastType = a)), i
    }

    function V(t, e, r, i) {
      e != null || (e = {});
      let o = {
        atoms: [],
        index: r != null ? r : 0,
        mathML: "",
        lastType: ""
      };
      if (typeof t == "number" || typeof t == "boolean") o.mathML = t.toString();
      else if (typeof t == "string") o.mathML = t;
      else if (t instanceof g) o.mathML = da(t, e);
      else if (Array.isArray(t)) {
        o.atoms = t;
        let a = 0;
        for (i = i || (t ? t.length : 0); o.index < i;)
          if (Sc(o, i, e) || _c(o, i, e) || vc(o, i, e) || Ac(o, i, e) || Mc(o, i, e)) a += 1;
          else if (o.index < i) {
          let n = da(o.atoms[o.index], e);
          o.lastType === "mn" && n.length > 0 && o.atoms[o.index].type === "genfrac" && (n = "<mo>&#x2064;</mo>" + n), o.atoms[o.index].type === "genfrac" ? o.lastType = "mfrac" : o.lastType = "", o.index += 1, _i(n, o, e) ? a += 1 : n.length > 0 && (o.mathML += n, a += 1)
        }
        a > 1 && (o.mathML = "<mrow>" + o.mathML + "</mrow>")
      }
      return o.mathML
    }

    function Ar(t, e) {
      let r = "",
        i = Si(t.value);
      return i && (r = "<mo" + le(t.id, e) + ">" + i + "</mo>"), r
    }

    function Si(t) {
      if (!t) return "";
      if (typeof t == "string") return fo(t);
      if (!Array.isArray(t) && typeof t.body == "string") return fo(t.body);
      let e = "";
      for (let r of t) typeof r.value == "string" && (e += r.value);
      return fo(e)
    }

    function da(t, e) {
      var w, k, S, T, L, D, M, R, F, Le, Pe, vt, Gt, Jt, _e, si, li, pe, ke, De, pt, wt, Wt, Ut, $i;
      let r = {
          widehat: "^",
          widecheck: "\u02C7",
          widetilde: "~",
          utilde: "~",
          overleftarrow: "\u2190",
          underleftarrow: "\u2190",
          xleftarrow: "\u2190",
          overrightarrow: "\u2192",
          underrightarrow: "\u2192",
          xrightarrow: "\u2192",
          underbrace: "\u23DF",
          overbrace: "\u23DE",
          overgroup: "\u23E0",
          undergroup: "\u23E1",
          overleftrightarrow: "\u2194",
          underleftrightarrow: "\u2194",
          xleftrightarrow: "\u2194",
          Overrightarrow: "\u21D2",
          xRightarrow: "\u21D2",
          overleftharpoon: "\u21BC",
          xleftharpoonup: "\u21BC",
          overrightharpoon: "\u21C0",
          xrightharpoonup: "\u21C0",
          xLeftarrow: "\u21D0",
          xLeftrightarrow: "\u21D4",
          xhookleftarrow: "\u21A9",
          xhookrightarrow: "\u21AA",
          xmapsto: "\u21A6",
          xrightharpoondown: "\u21C1",
          xleftharpoondown: "\u21BD",
          xrightleftharpoons: "\u21CC",
          xleftrightharpoons: "\u21CB",
          xtwoheadleftarrow: "\u219E",
          xtwoheadrightarrow: "\u21A0",
          xlongequal: "=",
          xtofrom: "\u21C4",
          xrightleftarrows: "\u21C4",
          xrightequilibrium: "\u21CC",
          xleftequilibrium: "\u21CB"
        },
        i = {
          "\\exponentialE": "&#x02147;",
          "\\imaginaryI": "&#x2148;",
          "\\differentialD": "&#x2146;",
          "\\capitalDifferentialD": "&#x2145;",
          "\\alpha": "&#x03b1;",
          "\\pi": "&#x03c0;",
          "\\infty": "&#x221e;",
          "\\forall": "&#x2200;",
          "\\nexists": "&#x2204;",
          "\\exists": "&#x2203;",
          "\\hbar": "\u210F",
          "\\cdotp": "\u22C5",
          "\\ldots": "\u2026",
          "\\cdots": "\u22EF",
          "\\ddots": "\u22F1",
          "\\vdots": "\u22EE",
          "\\ldotp": "."
        },
        o = {
          cal: "script",
          frak: "fraktur",
          bb: "double-struck",
          scr: "script",
          cmtt: "monospace",
          cmss: "sans-serif"
        },
        a = {
          "\\!": -3 / 18,
          "\\ ": 6 / 18,
          "\\,": 3 / 18,
          "\\:": 4 / 18,
          "\\;": 5 / 18,
          "\\enspace": .5,
          "\\quad": 1,
          "\\qquad": 2,
          "\\enskip": .5
        },
        n = "",
        s = "",
        l, c, u, d, m, h, f = (k = o[(w = t.fontFamily) != null ? w : t.font]) != null ? k : "";
      f && (f = ` mathvariant="${f}"`);
      let {
        command: y
      } = t;
      if (t.mode === "text") n = `<mi${le(t.id,e)}>${t.value}</mi>`;
      else switch (t.type) {
        case "first":
          break;
        case "group":
        case "root":
          rt[t.command] ? n = rt[t.command] : n = V(t.body, e);
          break;
        case "array":
          if ((t.leftDelim && t.leftDelim !== "." || t.rightDelim && t.rightDelim !== ".") && (n += "<mrow>", t.leftDelim && t.leftDelim !== "." && (n += "<mo>" + (rt[t.leftDelim] || t.leftDelim) + "</mo>")), n += "<mtable", t.colFormat) {
            for (n += ' columnalign="', u = 0; u < t.colFormat.length; u++) t.colFormat[u].align && (n += {
              l: "left",
              c: "center",
              r: "right"
            } [t.colFormat[u].align] + " ");
            n += '"'
          }
          for (n += ">", c = 0; c < t.array.length; c++) {
            for (n += "<mtr>", l = 0; l < t.array[c].length; l++) n += "<mtd>" + V(t.array[c][l], e) + "</mtd>";
            n += "</mtr>"
          }
          n += "</mtable>", (t.leftDelim && t.leftDelim !== "." || t.rightDelim && t.rightDelim !== ".") && (t.rightDelim && t.rightDelim !== "." && (n += "<mo>" + (rt[t.leftDelim] || t.rightDelim) + "</mo>"), n += "</mrow>");
          break;
        case "genfrac":
          (t.leftDelim || t.rightDelim) && (n += "<mrow>"), t.leftDelim && t.leftDelim !== "." && (n += "<mo" + le(t.id, e) + ">" + (rt[t.leftDelim] || t.leftDelim) + "</mo>"), t.hasBarLine ? (n += "<mfrac>", n += V(t.above, e) || "<mi>&nbsp;</mi>", n += V(t.below, e) || "<mi>&nbsp;</mi>", n += "</mfrac>") : (n += "<mtable" + le(t.id, e) + ">", n += "<mtr>" + V(t.above, e) + "</mtr>", n += "<mtr>" + V(t.below, e) + "</mtr>", n += "</mtable>"), t.rightDelim && t.rightDelim !== "." && (n += "<mo" + le(t.id, e) + ">" + (rt[t.rightDelim] || t.rightDelim) + "</mo>"), (t.leftDelim || t.rightDelim) && (n += "</mrow>");
          break;
        case "surd":
          t.hasEmptyBranch("above") ? (n += "<msqrt" + le(t.id, e) + ">", n += V(t.body, e), n += "</msqrt>") : (n += "<mroot" + le(t.id, e) + ">", n += V(t.body, e), n += V(t.above, e), n += "</mroot>");
          break;
        case "leftright":
          n = "<mrow>", t.leftDelim && t.leftDelim !== "." && (n += "<mo" + le(t.id, e) + ">" + ((S = rt[t.leftDelim]) != null ? S : t.leftDelim) + "</mo>"), t.body && (n += V(t.body, e)), t.rightDelim && t.rightDelim !== "." && (n += "<mo" + le(t.id, e) + ">" + ((T = rt[t.rightDelim]) != null ? T : t.rightDelim) + "</mo>"), n += "</mrow>";
          break;
        case "sizeddelim":
        case "delim":
          n += '<mo separator="true"' + le(t.id, e) + ">" + (rt[t.delim] || t.delim) + "</mo>";
          break;
        case "accent":
          n += '<mover accent="true"' + le(t.id, e) + ">", n += V(t.body, e), n += "<mo>" + (rt[y] || t.accent) + "</mo>", n += "</mover>";
          break;
        case "line":
        case "overlap":
          break;
        case "overunder":
          m = t.above, d = t.below, (t.svgAbove || m) && (t.svgBelow || d) ? h = t.body : m && m.length > 0 ? (h = t.body, (D = (L = t.body) == null ? void 0 : L[0]) != null && D.below ? (d = t.body[0].below, h = t.body[0].body) : ((R = (M = t.body) == null ? void 0 : M[0]) == null ? void 0 : R.type) === "first" && ((Le = (F = t.body) == null ? void 0 : F[1]) != null && Le.below) && (d = t.body[1].below, h = t.body[1].body)) : d && d.length > 0 && (h = t.body, (vt = (Pe = t.body) == null ? void 0 : Pe[0]) != null && vt.above ? (m = t.body[0].above, h = t.body[0].body) : ((Jt = (Gt = t.body) == null ? void 0 : Gt[0]) == null ? void 0 : Jt.type) === "first" && ((si = (_e = t.body) == null ? void 0 : _e[1]) != null && si.above) && (m = t.body[1].overscript, h = t.body[1].body)), (t.svgAbove || m) && (t.svgBelow || d) ? (n += `<munderover ${f} ${le(t.id,e)}>`, n += (li = r[t.svgBody]) != null ? li : V(h, e), n += (pe = r[t.svgBelow]) != null ? pe : V(d, e), n += (ke = r[t.svgAbove]) != null ? ke : V(m, e), n += "</munderover>") : t.svgAbove || m ? (n += `<mover ${f} ${le(t.id,e)}>` + ((De = r[t.svgBody]) != null ? De : V(h, e)), n += (pt = r[t.svgAbove]) != null ? pt : V(m, e), n += "</mover>") : (t.svgBelow || d) && (n += `<munder ${f} ${le(t.id,e)}>` + ((wt = r[t.svgBody]) != null ? wt : V(h, e)), n += (Wt = r[t.svgBelow]) != null ? Wt : V(d, e), n += "</munder>");
          break;
        case "placeholder":
        case "mord": {
          n = i[y] || y || (typeof t.value == "string" ? t.value : "");
          let Ye = y ? y.match(/{?\\char"([\dabcdefABCDEF]*)}?/) : null;
          Ye ? n = "&#x" + Ye[1] + ";" : n.length > 0 && n.startsWith("\\") && (typeof t.value == "string" && t.value.charCodeAt(0) > 255 ? n = "&#x" + ("000000" + t.value.charCodeAt(0).toString(16)).slice(-4) + ";" : typeof t.value == "string" ? n = t.value.charAt(0) : n = "");
          let sn = /\d/.test(n) ? "mn" : "mi";
          n = `<${sn}${f}${le(t.id,e)}>${fo(n)}</${sn}>`;
          break
        }
        case "mbin":
        case "mrel":
        case "minner":
          y && i[y] ? n = "<mi" + le(t.id, e) + ">" + i[y] + "</mi>" : y && rt[y] ? n = "<mo" + le(t.id, e) + ">" + rt[y] + "</mo>" : n = Ar(t, e);
          break;
        case "mpunct":
          n = '<mo separator="true"' + le(t.id, e) + ">" + ((Ut = rt[y]) != null ? Ut : y) + "</mo>";
          break;
        case "mop":
          t.body !== "\u200B" && (n = "<mo" + le(t.id, e) + ">", n += y === "\\operatorname" ? t.body : y || t.body, n += "</mo>");
          break;
        case "box":
          n = '<menclose notation="box"', t.backgroundcolor && (n += ' mathbackground="' + t.backgroundcolor + '"'), n += le(t.id, e) + ">" + V(t.body, e) + "</menclose>";
          break;
        case "spacing":
          n += '<mspace width="' + (($i = a[y]) != null ? $i : 0) + 'em"/>';
          break;
        case "enclose":
          n = '<menclose notation="';
          for (let Ye in t.notation) Object.prototype.hasOwnProperty.call(t.notation, Ye) && t.notation[Ye] && (n += s + Ye, s = " ");
          n += le(t.id, e) + '">' + V(t.body, e) + "</menclose>";
          break;
        case "prompt":
          n = '<menclose notation="roundexbox""">' + V(t.body, e) + "</menclose>";
          break;
        case "space":
          n += "&nbsp;";
          break;
        case "msubsup":
          break;
        case "phantom":
          break;
        case "composition":
          break;
        case "rule":
          "" + t.type;
          break;
        case "chem":
          break;
        case "mopen":
          n += Ar(t, e);
          break;
        case "mclose":
          n += Ar(t, e);
          break;
        case "macro": {
          let Ye = t.command + Si(t.macroArgs);
          Ye && (n += `<mo ${le(t.id,e)}>${Ye}</mo>`)
        }
        break;
        case "error":
          "" + t.type;
          break;
        case "latexgroup":
          n += V(t.body, e);
          break;
        case "latex":
          n += "<mtext" + le(t.id, e) + ">" + t.value + "</mtext>";
          break;
        case "tooltip":
          n += V(t.body, e);
          break;
        default:
          "" + t.type
      }
      return n
    }
    var Mi = {
        "\\ne": "\u2260",
        "\\neq": "\u2260",
        "\u2212": "-",
        "-": "-",
        "\\alpha": "alpha",
        "\\beta": "beta",
        "\\gamma": "gamma",
        "\\delta": "delta",
        "\\epsilon": "epsilon",
        "\\varepsilon": "varepsilon",
        "\\zeta": "zeta",
        "\\eta": "eta",
        "\\theta": "theta",
        "\\vartheta": "vartheta",
        "\\iota": "iota",
        "\\kappa": "kappa",
        "\\lambda": "lambda",
        "\\mu": "mu",
        "\\nu": "nu",
        "\\xi": "xi",
        "\\pi": "pi",
        "\\rho": "rho",
        "\\sigma": "sigma",
        "\\tau": "tau",
        "\\upsilon": "upsilon",
        "\\phi": "phi",
        "\\varphi": "varphi",
        "\\chi": "chi",
        "\\psi": "psi",
        "\\omega": "omega",
        "\\Gamma": "Gamma",
        "\\Delta": "Delta",
        "\\Theta": "Theta",
        "\\Lambda": "Lambda",
        "\\Xi": "Xi",
        "\\Pi": "Pi",
        "\\Sigma": "Sigma",
        "\\Phi": "Phi",
        "\\Psi": "Psi",
        "\\Omega": "Omega",
        "\\exponentialE": "e",
        "\\imaginaryI": "i",
        "\\imaginaryJ": "j",
        "\\!": " ",
        "\\,": " ",
        "\\:": " ",
        "\\;": " ",
        "\\enskip": " ",
        "\\enspace": " ",
        "\\qquad": " ",
        "\\quad": " "
      },
      pa = {
        "\\pm": "+-",
        "\\times": "xx",
        "\\colon": ":",
        "\\vert": "|",
        "\\Vert": "||",
        "\\mid": "|",
        "\\lbrace": "{",
        "\\rbrace": "}",
        "\\lparen": "(",
        "\\rparen": ")",
        "\\langle": "(:",
        "\\rangle": ":)"
      };

    function ue(t) {
      var o, a, n, s, l, c, u, d, m, h, f, y, w;
      if (!t) return "";
      if (Y(t)) {
        if (t.length === 0 || (t[0].type === "first" && (t = t.slice(1)), t.length === 0)) return "";
        let k = "";
        if (t[0].mode === "latex")
          for (let S of t) k += ue(S);
        else if (t[0].mode === "text") {
          let S = 0;
          for (k = '"';
            ((o = t[S]) == null ? void 0 : o.mode) === "text";) k += t[S].body ? ue(t[S].body) : t[S].value, S++;
          k += '"' + ue(t.slice(S))
        } else if (t[0].mode === "math") {
          let S = 0;
          for (; t[S] && t[S].mode === "math";) k += ue(t[S]), S++;
          k += ue(t.slice(S))
        } else console.warn("toASCIIMath: Unexpected mode");
        return k.trim()
      }
      if (t.mode === "text") return '"' + t.value + '"';
      let e = "",
        {
          command: r
        } = t,
        i;
      switch (t.type) {
        case "first":
          return "";
        case "group":
        case "root":
          e = (a = Mi[r]) != null ? a : ue(t.body);
          break;
        case "genfrac": {
          let M = t;
          (M.leftDelim || M.rightDelim) && (e += M.leftDelim === "." || !M.leftDelim ? "{:" : M.leftDelim), M.hasBarLine ? (e += "(", e += ue(M.above), e += ")/(", e += ue(M.below), e += ")") : (e += "(" + ue(M.above) + "),", e += "(" + ue(M.below) + ")"), (M.leftDelim || M.rightDelim) && (e += M.rightDelim === "." || !M.rightDelim ? "{:" : M.rightDelim)
        }
        break;
        case "surd":
          e += t.hasEmptyBranch("above") ? "sqrt(" + ue(t.body) + ")" : "root(" + ue(t.above) + ")(" + ue(t.body) + ")";
          break;
        case "latex":
          e = t.value;
          break;
        case "leftright": {
          let M = t;
          e += M.leftDelim === "." || !M.leftDelim ? "{:" : M.leftDelim, e += ue(M.body), e += M.rightDelim === "." || !M.rightDelim ? ":}" : M.rightDelim
        }
        break;
        case "sizeddelim":
        case "delim":
          break;
        case "overlap":
          break;
        case "overunder":
          break;
        case "mord":
          e = (s = (n = Mi[r]) != null ? n : r) != null ? s : typeof t.value == "string" ? t.value : "", e.startsWith("\\") && (e += " "), i = r ? r.match(/{?\\char"([\dabcdefABCDEF]*)}?/) : null, i ? e = String.fromCodePoint(Number.parseInt("0x" + i[1])) : e.length > 0 && e.startsWith("\\") && (e = typeof t.value == "string" ? t.value.charAt(0) : t.command);
          break;
        case "mbin":
        case "mrel":
        case "minner":
          e = (c = (l = Mi[r]) != null ? l : pa[r]) != null ? c : t.value;
          break;
        case "mopen":
        case "mclose":
          e += t.value;
          break;
        case "mpunct":
          e = (u = pa[r]) != null ? u : r;
          break;
        case "mop":
          t.value !== "\u200B" && (e = "", e += r === "\\operatorname" ? ue(t.body) : (d = t.value) != null ? d : r, e += " ");
          break;
        case "array":
          let k = t.array,
            S = t.environmentName,
            T = (m = {
              bmatrix: ["[", "]"],
              "bmatrix*": ["[", "]"]
            } [S]) != null ? m : ["(", ")"],
            L = [];
          for (let M of k) {
            let R = [];
            for (let F of M) R.push(T[0] + ue(F) + T[1]);
            L.push(R.join(","))
          }
          let D = (h = {
            bmatrix: ["[", "]"],
            "bmatrix*": ["[", "]"],
            cases: ["{", ":}"]
          } [S]) != null ? h : ["(", ")"];
          e = D[0] + L.join(",") + D[1];
          break;
        case "box":
          break;
        case "spacing":
          e = (f = Mi[r]) != null ? f : " ";
          break;
        case "enclose":
          e = "(" + ue(t.body) + ")";
          break;
        case "space":
          e = " ";
          break;
        case "msubsup":
          e = "";
          break;
        case "macro":
          e = (w = (y = Mi[r]) != null ? y : pa[r]) != null ? w : ue(t.body);
          break
      }
      if (!t.hasEmptyBranch("subscript")) {
        e += "_";
        let k = ue(t.subscript);
        e += k.length > 1 ? "(" + k + ")" : k
      }
      if (!t.hasEmptyBranch("superscript")) {
        e += "^";
        let k = ue(t.superscript);
        e += k.length > 1 ? "(" + k + ")" : k
      }
      return e
    }
    var jr = {
        "\\alpha": "alpha ",
        "\\mu": "mew ",
        "\\sigma": "sigma ",
        "\\pi": "pie ",
        "\\imaginaryI": "eye ",
        "\\sum": "Summation ",
        "\\prod": "Product ",
        "+": "plus ",
        "-": "minus ",
        ";": '<break time="150ms"/> semi-colon <break time="150ms"/>',
        ",": '<break time="150ms"/> comma  <break time="150ms"/>',
        "|": '<break time="150ms"/>Vertical bar<break time="150ms"/>',
        "(": '<break time="150ms"/>Open paren. <break time="150ms"/>',
        ")": '<break time="150ms"/> Close paren. <break time="150ms"/>',
        "=": "equals ",
        "<": "is less than ",
        "\\lt": "is less than ",
        "<=": "is less than or equal to ",
        "\\le": "is less than or equal to ",
        "\\gt": "is greater than ",
        ">": "is greater than ",
        "\\pm": "plus or minus",
        "\\mp": "minus or plus",
        "\\ge": "is greater than or equal to ",
        "\\geq": "is greater than or equal to ",
        "\\leq": "is less than or equal to ",
        "!": "factorial ",
        "\\sin": "sine ",
        "\\cos": "cosine ",
        "\u200B": "",
        "\u2212": "minus ",
        ":": '<break time="150ms"/> such that <break time="200ms"/> ',
        "\\colon": '<break time="150ms"/> such that <break time="200ms"/> ',
        "\\hbar": "etch bar ",
        "\\iff": '<break time="200ms"/>if, and only if, <break time="200ms"/>',
        "\\Longleftrightarrow": '<break time="200ms"/>if, and only if, <break time="200ms"/>',
        "\\land": "and ",
        "\\lor": "or ",
        "\\neg": "not ",
        "\\div": "divided by ",
        "\\forall": "for all ",
        "\\exists": "there exists ",
        "\\nexists": "there does not exists ",
        "\\in": "element of ",
        "\\N": 'the set <break time="150ms"/><say-as interpret-as="character">n</say-as>',
        "\\C": 'the set <break time="150ms"/><say-as interpret-as="character">c</say-as>',
        "\\Z": 'the set <break time="150ms"/><say-as interpret-as="character">z</say-as>',
        "\\Q": 'the set <break time="150ms"/><say-as interpret-as="character">q</say-as>',
        "\\infty": "infinity ",
        "\\nabla": "nabla ",
        "\\partial": "partial derivative of ",
        "\\cdot": "times ",
        "\\cdots": "dot dot dot ",
        "\\Rightarrow": "implies ",
        "\\lparen": '<break time="150ms"/>open paren<break time="150ms"/>',
        "\\rparen": '<break time="150ms"/>close paren<break time="150ms"/>',
        "\\lbrace": '<break time="150ms"/>open brace<break time="150ms"/>',
        "\\{": '<break time="150ms"/>open brace<break time="150ms"/>',
        "\\rbrace": '<break time="150ms"/>close brace<break time="150ms"/>',
        "\\}": '<break time="150ms"/>close brace<break time="150ms"/>',
        "\\langle": '<break time="150ms"/>left angle bracket<break time="150ms"/>',
        "\\rangle": '<break time="150ms"/>right angle bracket<break time="150ms"/>',
        "\\lfloor": '<break time="150ms"/>open floor<break time="150ms"/>',
        "\\rfloor": '<break time="150ms"/>close floor<break time="150ms"/>',
        "\\lceil": '<break time="150ms"/>open ceiling<break time="150ms"/>',
        "\\rceil": '<break time="150ms"/>close ceiling<break time="150ms"/>',
        "\\vert": '<break time="150ms"/>vertical bar<break time="150ms"/>',
        "\\mvert": '<break time="150ms"/>divides<break time="150ms"/>',
        "\\lvert": '<break time="150ms"/>left vertical bar<break time="150ms"/>',
        "\\rvert": '<break time="150ms"/>right vertical bar<break time="150ms"/>',
        "\\lbrack": '<break time="150ms"/> open square bracket <break time="150ms"/>',
        "\\rbrack": '<break time="150ms"/> close square bracket <break time="150ms"/>',
        mm: "millimeters",
        cm: "centimeters",
        km: "kilometers",
        kg: "kilograms"
      },
      ha = {
        array: "array",
        matrix: "matrix",
        pmatrix: "parenthesis matrix",
        bmatrix: "square brackets matrix",
        Bmatrix: "braces matrix",
        vmatrix: "bars matrix",
        Vmatrix: "double bars matrix",
        "matrix*": "matrix",
        smallmatrix: "small matrix"
      };

    function Lc(t) {
      let e = "";
      return t.startsWith("\\") && (e = " " + t.replace("\\", "") + " "), e
    }

    function Ai(t) {
      let e = 0;
      if (Y(t))
        for (let r of t) r.type !== "first" && (e += 1);
      return e === 1
    }

    function Cc(t) {
      if (Y(t)) {
        for (let e of t)
          if (e.type !== "first" && e.id) return e.id.toString()
      }
      return ""
    }

    function as(t) {
      let e = "";
      if (Y(t))
        for (let r of t) r.type !== "first" && typeof r.value == "string" && (e += r.value);
      return e
    }

    function Tc(t) {
      return t ? t.map(e => e.value).join("") : ""
    }

    function ee(t, e) {
      var a, n, s, l, c;

      function r(u) {
        return window.MathfieldElement.textToSpeechMarkup ? /[a-z]/.test(u) ? ` <say-as interpret-as="character">${u}</say-as>` : /[A-Z]/.test(u) ? `capital <say-as interpret-as="character">${u.toLowerCase()}</say-as>` : u : /[a-z]/.test(u) ? " '" + u.toUpperCase() + "'" : /[A-Z]/.test(u) ? " 'capital " + u.toUpperCase() + "'" : u
      }

      function i(u) {
        return "<emphasis>" + u + "</emphasis>"
      }
      if (!e) return "";
      let o = "";
      if (Y(e)) {
        let u = !1,
          d = !1;
        for (let m = 0; m < e.length; m++) e[m].type !== "first" && (e[m].mode !== "text" && (d = !1), m < e.length - 2 && e[m].type === "mopen" && e[m + 2].type === "mclose" && e[m + 1].type === "mord" ? (o += " of ", o += i(ee(t, e[m + 1])), m += 2) : e[m].mode === "text" ? d ? o += (a = e[m].value) != null ? a : " " : (d = !0, o += ee("text", e[m])) : e[m].isDigit() ? u ? o += e[m].asDigit() : (u = !0, o += ee(t, e[m])) : (u = !1, o += ee(t, e[m])))
      } else if (e.mode === "text") e.id && t === "math" && (o += '<mark name="' + e.id.toString() + '"/>'), o += e.value;
      else {
        e.id && t === "math" && (o += '<mark name="' + e.id.toString() + '"/>');
        let u = "",
          d = "",
          m = "",
          h = !1,
          {
            command: f
          } = e;
        switch (e.type) {
          case "prompt":
            let y = e.body.length > 1 ? 'start input . <break time="500ms"/> ' + ee(t, e.body) + '. <break time="500ms"/> end input' : "blank";
            o += ' <break time="300ms"/> ' + y + '. <break time="700ms"/>' + ((n = e.correctness) != null ? n : "") + ' . <break time="700ms"/> ';
            break;
          case "accent":
            f === "\\vec" && (o += "vector " + ee(t, e.body));
            break;
          case "array":
            let w = e.array,
              k = e.environmentName;
            if (Object.keys(ha).includes(k)) {
              o += ` begin ${ha[k]} `;
              for (let D = 0; D < w.length; D++) {
                D > 0 && (o += ","), o += ` row ${D+1} `;
                for (let M = 0; M < w[D].length; M++) M > 0 && (o += ","), o += ` column ${M+1}: `, o += ee("math", w[D][M])
              }
              o += ` end ${ha[k]} `
            }
            break;
          case "group":
            f === "\\ne" ? o += " not equal " : (f === "\\not" && (o += " not "), o += ee("math", e.body));
            break;
          case "root":
            o += ee("math", e.body);
            break;
          case "genfrac":
            if (u = ee("math", e.above), d = ee("math", e.below), Ai(e.above) && Ai(e.below)) {
              let M = {
                "1/2": " half ",
                "1/3": " one third ",
                "2/3": " two third",
                "1/4": " one quarter ",
                "3/4": " three quarter ",
                "1/5": " one fifth ",
                "2/5": " two fifths ",
                "3/5": " three fifths ",
                "4/5": " four fifths ",
                "1/6": " one sixth ",
                "5/6": " five sixths ",
                "1/8": " one eight ",
                "3/8": " three eights ",
                "5/8": " five eights ",
                "7/8": " seven eights ",
                "1/9": " one ninth ",
                "2/9": " two ninths ",
                "4/9": " four ninths ",
                "5/9": " five ninths ",
                "7/9": " seven ninths ",
                "8/9": " eight ninths "
              } [as(e.above) + "/" + as(e.below)];
              M ? o = M : o += u + " over " + d
            } else o += ' the fraction <break time="150ms"/>' + u + ' over <break time="150ms"/>' + d + '.<break time="150ms"/> End fraction.<break time="150ms"/>';
            break;
          case "surd":
            if (m = ee("math", e.body), e.hasEmptyBranch("above")) o += Ai(e.body) ? " the square root of " + m + " , " : ' the square root of <break time="200ms"/>' + m + '. <break time="200ms"/> End square root';
            else {
              let D = ee("math", e.above);
              D = D.trim();
              let M = D.replace(/<mark([^/]*)\/>/g, "");
              M === "3" ? o += ' the cube root of <break time="200ms"/>' + m + '. <break time="200ms"/> End cube root' : M === "n" ? o += ' the nth root of <break time="200ms"/>' + m + '. <break time="200ms"/> End root' : o += ' the root with index: <break time="200ms"/>' + D + ', of <break time="200ms"/>' + m + '. <break time="200ms"/> End root'
            }
            break;
          case "leftright": {
            let D = e;
            o += (s = D.leftDelim ? jr[D.leftDelim] : void 0) != null ? s : D.leftDelim, o += ee("math", e.body), o += (l = D.rightDelim ? jr[D.rightDelim] : void 0) != null ? l : D.rightDelim
          }
          break;
          case "rule":
            break;
          case "overunder":
            break;
          case "overlap":
            break;
          case "line":
            let S = e.position;
            o += `${S} `, o += ee("math", e.body), o += ` end ${S} `;
            break;
          case "macro":
            let T = f.replace(/^\\/g, ""),
              L = qr()[T];
            L && (L != null && L.expand ? o += ee("math", e.body) : o += `${T} `);
            break;
          case "placeholder":
            o += "placeholder ";
            break;
          case "delim":
          case "sizeddelim":
          case "mord":
          case "minner":
          case "mbin":
          case "mrel":
          case "mpunct":
          case "mopen":
          case "mclose": {
            if (f === "\\mathbin" || f === "\\mathrel" || f === "\\mathopen" || f === "\\mathclose" || f === "\\mathpunct" || f === "\\mathord" || f === "\\mathinner") {
              o = ee(t, e.body);
              break
            }
            let D = e.isDigit() ? e.asDigit() : e.value,
              M = e.command;
            if ((e.type === "delim" || e.type === "sizeddelim") && (M = e.value, D = M), t === "text") o += D;
            else {
              if (e.type === "mbin" && (o += '<break time="150ms"/>'), D) {
                let R = jr[D] || (M ? jr[M.trim()] : "");
                if (R) o += " " + R;
                else {
                  let F = M ? Lc(M.trim()) : "";
                  o += F || r(D)
                }
              } else o += ee("math", e.body);
              e.type === "mbin" && (o += '<break time="150ms"/>')
            }
            break
          }
          case "mop":
            if (e.value !== "\u200B") {
              let D = e.command;
              if (D === "\\sum")
                if (!e.hasEmptyBranch("superscript") && !e.hasEmptyBranch("subscript")) {
                  let M = ee("math", e.superscript);
                  M = M.trim();
                  let R = ee("math", e.subscript);
                  R = R.trim(), o += ' the summation from <break time="200ms"/>' + R + '<break time="200ms"/> to  <break time="200ms"/>' + M + '<break time="200ms"/> of <break time="150ms"/>', h = !0
                } else if (e.hasEmptyBranch("subscript")) o += " the summation of";
              else {
                let M = ee("math", e.subscript);
                M = M.trim(), o += ' the summation from <break time="200ms"/>' + M + '<break time="200ms"/> of <break time="150ms"/>', h = !0
              } else if (D === "\\prod")
                if (!e.hasEmptyBranch("superscript") && !e.hasEmptyBranch("subscript")) {
                  let M = ee("math", e.superscript);
                  M = M.trim();
                  let R = ee("math", e.subscript);
                  R = R.trim(), o += ' the product from <break time="200ms"/>' + R + '<break time="200ms"/> to <break time="200ms"/>' + M + '<break time="200ms"/> of <break time="150ms"/>', h = !0
                } else if (e.hasEmptyBranch("subscript")) o += " the product  of ";
              else {
                let M = ee("math", e.subscript);
                M = M.trim(), o += ' the product from <break time="200ms"/>' + M + '<break time="200ms"/> of <break time="150ms"/>', h = !0
              } else if (D === "\\int")
                if (!e.hasEmptyBranch("superscript") && !e.hasEmptyBranch("subscript")) {
                  let M = ee("math", e.superscript);
                  M = M.trim();
                  let R = ee("math", e.subscript);
                  R = R.trim(), o += ' the integral from <break time="200ms"/>' + i(R) + '<break time="200ms"/> to <break time="200ms"/>' + i(M) + ' <break time="200ms"/> of ', h = !0
                } else o += ' the integral of <break time="200ms"/> ';
              else if (typeof e.value == "string") {
                let M = (c = jr[e.value]) != null ? c : e.command ? jr[e.command] : void 0;
                o += M || " " + e.value
              } else e.command && (e.command === "\\mathop" ? o += ee("math", e.body) : e.command === "\\operatorname" ? o += Tc(e.body) : o += e.command.startsWith("\\") ? " " + e.command.slice(1) : " " + e.command)
            }
            break;
          case "enclose":
            m = ee("math", e.body), o += " crossed out " + m + ". End crossed out.";
            break;
          case "space":
          case "spacing":
            break
        }
        if (!h && !e.hasEmptyBranch("superscript")) {
          let y = ee(t, e.superscript);
          y = y.trim();
          let w = y.replace(/<[^>]*>/g, "");
          if (Ai(e.superscript)) {
            if (t === "math") {
              let k = Cc(e.superscript);
              k && (o += '<mark name="' + k + '"/>')
            }
            w === "\u2032" ? o += " prime " : w === "2" ? o += " squared " : w === "3" ? o += " cubed " : Number.isNaN(Number.parseInt(w)) ? o += " to the " + y + "; " : o += ' to the <say-as interpret-as="ordinal">' + w + "</say-as> power; "
          } else Number.isNaN(Number.parseInt(w)) ? o += " raised to the " + y + "; " : o += ' raised to the <say-as interpret-as="ordinal">' + w + "</say-as> power; "
        }
        if (!h && !e.hasEmptyBranch("subscript")) {
          let y = ee("math", e.subscript);
          y = y.trim(), o += Ai(e.subscript) ? " sub " + y : " subscript " + y + ". End subscript. "
        }
      }
      return o
    }

    function It(t) {
      var r, i;
      if (window.MathfieldElement.textToSpeechRules === "sre" && ("sre" in window || "SRE" in window)) {
        let o = V(t);
        if (o) {
          window.MathfieldElement.textToSpeechMarkup && (window.MathfieldElement.textToSpeechRulesOptions = (r = window.MathfieldElement.textToSpeechRulesOptions) != null ? r : {}, window.MathfieldElement.textToSpeechRulesOptions.markup = window.MathfieldElement.textToSpeechMarkup, window.MathfieldElement.textToSpeechRulesOptions.markup === "ssml" && (window.MathfieldElement.textToSpeechRulesOptions.markup = "ssml_step"), window.MathfieldElement.textToSpeechRulesOptions.rate = window.MathfieldElement.speechEngineRate);
          let a = (i = globalThis.SRE) != null ? i : window.sre.System.getInstance();
          window.MathfieldElement.textToSpeechRulesOptions && a.setupEngine(window.MathfieldElement.textToSpeechRulesOptions);
          let n = "";
          try {
            n = a.toSpeech(o)
          } catch (s) {
            console.error("MathLive: SRE.toSpeech() runtime error ", s)
          }
          return n
        }
        return ""
      }
      let e = ee("math", t);
      if (window.MathfieldElement.textToSpeechMarkup === "ssml") {
        let o = "";
        window.MathfieldElement.speechEngineRate && (o = '<prosody rate="' + window.MathfieldElement.speechEngineRate + '">'), e = '<?xml version="1.0"?><speak version="1.1" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US"><amazon:auto-breaths>' + o + "<p><s>" + e + "</s></p>" + (o ? "</prosody>" : "") + "</amazon:auto-breaths></speak>"
      } else window.MathfieldElement.textToSpeechMarkup === "mac" && jt() === "macos" ? e = e.replace(/<mark([^/]*)\/>/g, "").replace(/<emphasis>/g, "[[emph+]]").replace(/<\/emphasis>/g, "").replace(/<break time="(\d*)ms"\/>/g, "[[slc $1]]").replace(/<say-as[^>]*>/g, "").replace(/<\/say-as>/g, "") : e = e.replace(/<[^>]*>/g, "").replace(/\s{2,}/g, " ");
      return e
    }

    function je(t, e, r, i) {
      let o = e.split(" ");
      for (let a of o) {
        let n = a.match(/(.*):(.*)/);
        if (n) {
          let s = i != null ? i : {};
          n[2] === "active" ? s.passive = !1 : s[n[2]] = !0, t.addEventListener(n[1], r, s)
        } else t.addEventListener(a, r, i)
      }
    }

    function Li(t, e, r, i) {
      let o = e.split(" ");
      for (let a of o) {
        let n = a.match(/(.*):(.*)/);
        if (n) {
          let s = i != null ? i : {};
          n[2] === "active" ? s.passive = !1 : s[n[2]] = !0, t.removeEventListener(n[1], r, s)
        } else t.removeEventListener(a, r, i)
      }
    }

    function go(t) {
      var r;
      Hi();
      let e = document.getElementById(t);
      return e ? e.dataset.refcount = Number(Number.parseInt((r = e.getAttribute("data-refcount")) != null ? r : "0") + 1).toString() : (e = document.createElement("div"), e.setAttribute("aria-hidden", "true"), e.dataset.refcount = "1", e.id = t, document.body.append(e)), e
    }

    function yo(t) {
      var r;
      if (!t) return;
      let e = Number.parseInt((r = t.getAttribute("data-refcount")) != null ? r : "0");
      e <= 1 ? t.remove() : t.dataset.refcount = Number(e - 1).toString()
    }

    function qt(t) {
      var e;
      return ((e = t.element) == null ? void 0 : e.mathfield) === t
    }

    function Ec(t) {
      var e, r;
      return (r = (e = t.querySelector(".ML__caret")) != null ? e : t.querySelector(".ML__text-caret")) != null ? r : t.querySelector(".ML__latex-caret")
    }

    function Lr(t) {
      let e = Ec(t);
      if (!e) return null;
      let r = e.getBoundingClientRect();
      return {
        x: r.right,
        y: r.bottom,
        height: r.height
      }
    }

    function Pc(t) {
      var r;
      if (!t.parent) return "root";
      let e = (r = t.parent.id) != null ? r : "";
      return e += typeof t.treeBranch == "string" ? "-" + t.treeBranch : `-${t.treeBranch[0]}/${t.treeBranch[0]}`, e
    }

    function fa(t, e) {
      if (!e) return null;
      let r = t.field.getBoundingClientRect(),
        i = e.right - e.left,
        o = e.bottom - e.top,
        a = Math.ceil(e.left - r.left + t.field.scrollLeft),
        n = Math.ceil(e.top - r.top);
      return {
        left: a,
        right: a + i,
        top: n,
        bottom: n + o
      }
    }

    function ns(t) {
      let e = t.getBoundingClientRect(),
        r = parseInt(getComputedStyle(t).marginRight),
        i = {
          top: e.top - 1,
          bottom: e.bottom,
          left: e.left,
          right: e.right - 1 + r
        };
      if (t.children.length === 0 || t.tagName.toUpperCase() === "SVG") return i;
      for (let o of t.children)
        if (o.nodeType === 1 && "atomId" in o.dataset && !o.classList.contains("pstrut")) {
          let a = ns(o);
          i.left = Math.min(i.left, a.left), i.right = Math.max(i.right, a.right), i.top = Math.min(i.top, a.top), i.bottom = Math.max(i.bottom, a.bottom)
        } return i
    }

    function mr(t, e) {
      var o, a;
      if (!e.id) return null;
      let r = (a = (o = t.atomBoundsCache) == null ? void 0 : o.get(e.id)) != null ? a : null;
      if (r !== null) return r;
      let i = t.field.querySelector(`[data-atom-id="${e.id}"]`);
      return r = i ? ns(i) : null, t.atomBoundsCache && (r ? t.atomBoundsCache.set(e.id, r) : t.atomBoundsCache.delete(e.id)), r != null ? r : null
    }

    function Dc(t, e, r) {
      let i = new Map;
      for (let o of t.model.getAtoms(e, {
          includeChildren: !0
        })) {
        if (r != null && r.excludeAtomsWithBackground && o.style.backgroundColor) break;
        let a = fa(t, mr(t, o));
        if (a) {
          let n = Pc(o);
          if (i.has(n)) {
            let s = i.get(n);
            i.set(n, {
              left: Math.min(s.left, a.left),
              right: Math.max(s.right, a.right),
              top: Math.min(s.top, a.top),
              bottom: Math.max(s.bottom, a.bottom)
            })
          } else i.set(n, a)
        }
      }
      return [...i.values()]
    }

    function bo(t, e) {
      return t.model.selection.ranges.reduce((r, i) => r.concat(...Dc(t, i, e)), [])
    }

    function Xr(t, e) {
      return t === "*" || e === "none" ? !0 : e === "same-origin" ? !globalThis.origin || t === globalThis.origin : typeof e == "function" ? e(t) : !1
    }

    function ga(t) {
      let e = 0,
        r = 0,
        i = t.offsetWidth,
        o = t.offsetHeight;
      for (; t instanceof HTMLElement;) e += t.offsetTop, r += t.offsetLeft, t = t.offsetParent;
      return new DOMRect(r, e, i, o)
    }

    function Xe(t) {
      let e = 0;
      for (let r = 0; r < t.length; r++) e = Math.imul(31, e) + t.charCodeAt(r) | 0;
      return Math.abs(e)
    }

    function Ze(t, e, r) {
      var a, n;
      if (!e) return null;
      let i = (a = t == null ? void 0 : t.getRootNode()) != null ? a : document == null ? void 0 : document.head;
      if (!i) return null;
      i === document && (i = document.head);
      let o = i.querySelector(`style[data-id="${r}"]`);
      if (o) {
        let s = Number.parseFloat((n = o.getAttribute("data-refcount")) != null ? n : "0");
        o.dataset.refcount = Number(s + 1).toString()
      } else {
        let s = document.createElement("style");
        s.dataset.id = r, s.dataset.refcount = "1", s.append(document.createTextNode(e)), i.appendChild(s)
      }
      return {
        release: () => {
          var l;
          let s = i.querySelector(`style[data-id="${r}"]`);
          if (s) {
            let c = Number.parseFloat((l = s.getAttribute("data-refcount")) != null ? l : "0");
            c === 1 ? s.remove() : s.dataset.refcount = Number(c - 1).toString()
          }
        }
      }
    }

    function ba(t) {
      let e = t.split("+"),
        r = {
          shift: !1,
          alt: !1,
          cmd: !1,
          win: !1,
          meta: !1,
          ctrl: !1,
          key: e.pop()
        };
      return e.includes("shift") && (r.shift = !0), e.includes("alt") && (r.alt = !0), e.includes("ctrl") && (r.ctrl = !0), e.includes("cmd") && (r.cmd = !0), e.includes("win") && (r.win = !0), e.includes("meta") && (r.meta = !0), r
    }

    function Ti(t) {
      let e = "";
      return t.shift && (e += "shift+"), t.alt && (e += "alt+"), t.ctrl && (e += "ctrl+"), t.cmd && (e += "cmd+"), t.win && (e += "win+"), t.meta && (e += "meta+"), e + t.key
    }
    var xa = ya() === "apple" ? {
        id: "apple.en-intl",
        displayName: "English (international)",
        virtualLayout: "qwerty",
        platform: "apple",
        locale: "en",
        score: 0,
        mapping: {
          KeyA: ["a", "A", "\xE5", "\xC5"],
          KeyB: ["b", "B", "\u222B", "\u0131"],
          KeyC: ["c", "C", "\xE7", "\xC7"],
          KeyD: ["d", "D", "\u2202", "\xCE"],
          KeyE: ["e", "E", "\xB4", "\xB4"],
          KeyF: ["f", "F", "\u0192", "\xCF"],
          KeyG: ["g", "G", "\xA9", "\u02DD"],
          KeyH: ["h", "H", "\u02D9", "\xD3"],
          KeyI: ["i", "I", "\u02C6", "\u02C6"],
          KeyJ: ["j", "J", "\u2206", "\xD4"],
          KeyK: ["k", "K", "\u02DA", "\uF8FF"],
          KeyL: ["l", "L", "\xAC", "\xD2"],
          KeyM: ["m", "M", "\xB5", "\xC2"],
          KeyN: ["n", "N", "\u02DC", "\u02DC"],
          KeyO: ["o", "O", "\xF8", "\xD8"],
          KeyP: ["p", "P", "\u03C0", "\u220F"],
          KeyQ: ["q", "Q", "\u0153", "\u0152"],
          KeyR: ["r", "R", "\xAE", "\u2030"],
          KeyS: ["s", "S", "\xDF", "\xCD"],
          KeyT: ["t", "T", "\u2020", "\u02C7"],
          KeyU: ["u", "U", "\xA8", "\xA8"],
          KeyV: ["v", "V", "\u221A", "\u25CA"],
          KeyW: ["w", "W", "\u2211", "\u201E"],
          KeyX: ["x", "X", "\u2248", "\u02DB"],
          KeyY: ["y", "Y", "\xA5", "\xC1"],
          KeyZ: ["z", "Z", "\u03A9", "\xB8"],
          Digit1: ["1", "!", "\xA1", "\u2044"],
          Digit2: ["2", "@", "\u2122", "\u20AC"],
          Digit3: ["3", "#", "\xA3", "\u2039"],
          Digit4: ["4", "$", "\xA2", "\u203A"],
          Digit5: ["5", "%", "\u221E", "\uFB01"],
          Digit6: ["6", "^", "\xA7", "\uFB02"],
          Digit7: ["7", "&", "\xB6", "\u2021"],
          Digit8: ["8", "*", "\u2022", "\xB0"],
          Digit9: ["9", "(", "\xAA", "\xB7"],
          Digit0: ["0", ")", "\xBA", "\u201A"],
          Space: [" ", " ", " ", " "],
          Minus: ["-", "_", "\u2013", "\u2014"],
          Equal: ["=", "+", "\u2260", "\xB1"],
          BracketLeft: ["[", "{", "\u201C", "\u201D"],
          BracketRight: ["]", "}", "\u2018", "\u2019"],
          Backslash: ["\\", "|", "\xAB", "\xBB"],
          Semicolon: [";", ":", "\u2026", "\xDA"],
          Quote: ["'", '"', "\xE6", "\xC6"],
          Backquote: ["`", "\u02DC", "`", "`"],
          Comma: [",", "<", "\u2264", "\xAF"],
          Period: [".", ">", "\u2265", "\u02D8"],
          Slash: ["/", "?", "\xF7", "\xBF"],
          NumpadDivide: ["/", "/", "/", "/"],
          NumpadMultiply: ["*", "*", "*", "*"],
          NumpadSubtract: ["-", "-", "-", "-"],
          NumpadAdd: ["+", "+", "+", "+"],
          Numpad1: ["1", "1", "1", "1"],
          Numpad2: ["2", "2", "2", "2"],
          Numpad3: ["3", "3", "3", "3"],
          Numpad4: ["4", "4", "4", "4"],
          Numpad5: ["5", "5", "5", "5"],
          Numpad6: ["6", "6", "6", "6"],
          Numpad7: ["7", "7", "7", "7"],
          Numpad8: ["8", "8", "8", "8"],
          Numpad9: ["9", "9", "9", "9"],
          Numpad0: ["0", "0", "0", "0"],
          NumpadDecimal: [".", ".", ".", "."],
          IntlBackslash: ["\xA7", "\xB1", "\xA7", "\xB1"],
          NumpadEqual: ["=", "=", "=", "="],
          AudioVolumeUp: ["", "=", "", "="]
        }
      } : ya() === "windows" ? {
        id: "windows.en-intl",
        displayName: "English (international)",
        platform: "windows",
        virtualLayout: "qwerty",
        locale: "en",
        score: 0,
        mapping: {
          KeyA: ["a", "A", "\xE1", "\xC1"],
          KeyB: ["b", "B", "", ""],
          KeyC: ["c", "C", "\xA9", "\xA2"],
          KeyD: ["d", "D", "\xF0", "\xD0"],
          KeyE: ["e", "E", "\xE9", "\xC9"],
          KeyF: ["f", "F", "", ""],
          KeyG: ["g", "G", "", ""],
          KeyH: ["h", "H", "", ""],
          KeyI: ["i", "I", "\xED", "\xCD"],
          KeyJ: ["j", "J", "", ""],
          KeyK: ["k", "K", "", ""],
          KeyL: ["l", "L", "\xF8", "\xD8"],
          KeyM: ["m", "M", "\xB5", ""],
          KeyN: ["n", "N", "\xF1", "\xD1"],
          KeyO: ["o", "O", "\xF3", "\xD3"],
          KeyP: ["p", "P", "\xF6", "\xD6"],
          KeyQ: ["q", "Q", "\xE4", "\xC4"],
          KeyR: ["r", "R", "\xAE", ""],
          KeyS: ["s", "S", "\xDF", "\xA7"],
          KeyT: ["t", "T", "\xFE", "\xDE"],
          KeyU: ["u", "U", "\xFA", "\xDA"],
          KeyV: ["v", "V", "", ""],
          KeyW: ["w", "W", "\xE5", "\xC5"],
          KeyX: ["x", "X", "", ""],
          KeyY: ["y", "Y", "\xFC", "\xDC"],
          KeyZ: ["z", "Z", "\xE6", "\xC6"],
          Digit1: ["1", "!", "\xA1", "\xB9"],
          Digit2: ["2", "@", "\xB2", ""],
          Digit3: ["3", "#", "\xB3", ""],
          Digit4: ["4", "$", "\xA4", "\xA3"],
          Digit5: ["5", "%", "\u20AC", ""],
          Digit6: ["6", "^", "\xBC", ""],
          Digit7: ["7", "&", "\xBD", ""],
          Digit8: ["8", "*", "\xBE", ""],
          Digit9: ["9", "(", "\u2018", ""],
          Digit0: ["0", ")", "\u2019", ""],
          Space: [" ", " ", "", ""],
          Minus: ["-", "_", "\xA5", ""],
          Equal: ["=", "+", "\xD7", "\xF7"],
          BracketLeft: ["[", "{", "\xAB", ""],
          BracketRight: ["]", "}", "\xBB", ""],
          Backslash: ["\\", "|", "\xAC", "\xA6"],
          Semicolon: [";", ":", "\xB6", "\xB0"],
          Quote: ["'", '"', "\xB4", "\xA8"],
          Backquote: ["`", "~", "", ""],
          Comma: [",", "<", "\xE7", "\xC7"],
          Period: [".", ">", "", ""],
          Slash: ["/", "?", "\xBF", ""],
          NumpadDivide: ["/", "/", "", ""],
          NumpadMultiply: ["*", "*", "", ""],
          NumpadSubtract: ["-", "-", "", ""],
          NumpadAdd: ["+", "+", "", ""],
          IntlBackslash: ["\\", "|", "", ""]
        }
      } : {
        id: "linux.en",
        displayName: "English",
        platform: "linux",
        virtualLayout: "qwerty",
        locale: "en",
        score: 0,
        mapping: {
          KeyA: ["a", "A", "a", "A"],
          KeyB: ["b", "B", "b", "B"],
          KeyC: ["c", "C", "c", "C"],
          KeyD: ["d", "D", "d", "D"],
          KeyE: ["e", "E", "e", "E"],
          KeyF: ["f", "F", "f", "F"],
          KeyG: ["g", "G", "g", "G"],
          KeyH: ["h", "H", "h", "H"],
          KeyI: ["i", "I", "i", "I"],
          KeyJ: ["j", "J", "j", "J"],
          KeyK: ["k", "K", "k", "K"],
          KeyL: ["l", "L", "l", "L"],
          KeyM: ["m", "M", "m", "M"],
          KeyN: ["n", "N", "n", "N"],
          KeyO: ["o", "O", "o", "O"],
          KeyP: ["p", "P", "p", "P"],
          KeyQ: ["q", "Q", "q", "Q"],
          KeyR: ["r", "R", "r", "R"],
          KeyS: ["s", "S", "s", "S"],
          KeyT: ["t", "T", "t", "T"],
          KeyU: ["u", "U", "u", "U"],
          KeyV: ["v", "V", "v", "V"],
          KeyW: ["w", "W", "w", "W"],
          KeyX: ["x", "X", "x", "X"],
          KeyY: ["y", "Y", "y", "Y"],
          KeyZ: ["z", "Z", "z", "Z"],
          Digit1: ["1", "!", "1", "!"],
          Digit2: ["2", "@", "2", "@"],
          Digit3: ["3", "#", "3", "#"],
          Digit4: ["4", "$", "4", "$"],
          Digit5: ["5", "%", "5", "%"],
          Digit6: ["6", "^", "6", "^"],
          Digit7: ["7", "&", "7", "&"],
          Digit8: ["8", "*", "8", "*"],
          Digit9: ["9", "(", "9", "("],
          Digit0: ["0", ")", "0", ")"],
          Space: [" ", " ", " ", " "],
          Minus: ["-", "_", "-", "_"],
          Equal: ["=", "+", "=", "+"],
          BracketLeft: ["[", "{", "[", "{"],
          BracketRight: ["]", "}", "]", "}"],
          Backslash: ["\\", "|", "\\", "|"],
          Semicolon: [";", ":", ";", ":"],
          Quote: ["'", '"', "'", '"'],
          Backquote: ["`", "~", "`", "~"],
          Comma: [",", "<", ",", "<"],
          Period: [".", ">", ".", ">"],
          Slash: ["/", "?", "/", "?"],
          NumpadDivide: ["/", "/", "/", "/"],
          NumpadMultiply: ["*", "*", "*", "*"],
          NumpadSubtract: ["-", "-", "-", "-"],
          NumpadAdd: ["+", "+", "+", "+"],
          Numpad1: ["1", "1", "1", "1"],
          Numpad2: ["2", "2", "2", "2"],
          Numpad3: ["3", "3", "3", "3"],
          Numpad4: ["4", "4", "4", "4"],
          Numpad5: ["5", "5", "5", "5"],
          Numpad6: ["6", "6", "6", "6"],
          Numpad7: ["7", "7", "7", "7"],
          Numpad8: ["8", "8", "8", "8"],
          Numpad9: ["9", "9", "9", "9"],
          Numpad0: ["0", "0", "0", "0"],
          NumpadDecimal: ["", ".", "", "."],
          IntlBackslash: ["<", ">", "|", "\xA6"],
          NumpadEqual: ["=", "=", "=", "="],
          NumpadComma: [".", ".", ".", "."],
          NumpadParenLeft: ["(", "(", "(", "("],
          NumpadParenRight: [")", ")", ")", ")"]
        }
      },
      Bc = {
        enter: "[Enter]",
        escape: "[Escape]",
        backspace: "[Backspace]",
        tab: "[Tab]",
        space: "[Space]",
        pausebreak: "[Pause]",
        insert: "[Insert]",
        home: "[Home]",
        pageup: "[PageUp]",
        delete: "[Delete]",
        end: "[End]",
        pagedown: "[PageDown]",
        right: "[ArrowRight]",
        left: "[ArrowLeft]",
        down: "[ArrowDown]",
        up: "[ArrowUp]",
        numpad0: "[Numpad0]",
        numpad1: "[Numpad1]",
        numpad2: "[Numpad2]",
        numpad3: "[Numpad3]",
        numpad4: "[Numpad4]",
        numpad5: "[Numpad5]",
        numpad6: "[Numpad6]",
        numpad7: "[Numpad7]",
        numpad8: "[Numpad8]",
        numpad9: "[Numpad9]",
        numpad_divide: "[NumpadDivide]",
        numpad_multiply: "[NumpadMultiply]",
        numpad_subtract: "[NumpadSubtract]",
        numpad_add: "[NumpadAdd]",
        numpad_decimal: "[NumpadDecimal]",
        numpad_separator: "[NumpadComma]",
        capslock: "[Capslock]",
        f1: "[F1]",
        f2: "[F2]",
        f3: "[F3]",
        f4: "[F4]",
        f5: "[F5]",
        f6: "[F6]",
        f7: "[F7]",
        f8: "[F8]",
        f9: "[F9]",
        f10: "[F10]",
        f11: "[F11]",
        f12: "[F12]",
        f13: "[F13]",
        f14: "[F14]",
        f15: "[F15]",
        f16: "[F16]",
        f17: "[F17]",
        f18: "[F18]",
        f19: "[F19]"
      },
      Ci = [],
      Cr;

    function ya() {
      switch (jt()) {
        case "macos":
        case "ios":
          return "apple";
        case "windows":
          return "windows"
      }
      return "linux"
    }

    function Et(t) {
      (!t.platform || t.platform === ya()) && Ci.push(t)
    }

    function ss(t, e) {
      var i;
      let r = {
        shift: !1,
        alt: !1,
        cmd: !1,
        win: !1,
        meta: !1,
        ctrl: !1,
        key: ""
      };
      if (!t) return r;
      for (let [o, a] of Object.entries(e.mapping)) {
        if (a[0] === t) return r.key = `[${o}]`, r;
        if (a[1] === t) return r.shift = !0, r.key = `[${o}]`, r;
        if (a[2] === t) return r.alt = !0, r.key = `[${o}]`, r;
        if (a[3] === t) return r.shift = !0, r.alt = !0, r.key = `[${o}]`, r
      }
      return r.key = (i = Bc[t]) != null ? i : "", r
    }

    function ls(t) {
      if (t.code) return t;
      let e = Object.entries(pr().mapping),
        r = !1,
        i = !1,
        o = "";
      for (let a = 0; a < 4; a++) {
        for (let [n, s] of e)
          if (s[a] === t.key) {
            o = n, a === 3 ? (r = !0, i = !0) : a === 2 ? r = !0 : a === 1 && (i = !0);
            break
          } if (o) break
      }
      return new KeyboardEvent(t.type, P(b({}, t), {
        altKey: r,
        shiftKey: i,
        code: o
      }))
    }

    function cs(t) {
      var r, i;
      if (!t || t.key === "Unidentified" || t.key === "Dead") return;
      let e = t.shiftKey && t.altKey ? 3 : t.altKey ? 2 : t.shiftKey ? 1 : 0;
      for (let o of Ci)((r = o.mapping[t.code]) == null ? void 0 : r[e]) === t.key ? o.score += 1 : (i = o.mapping[t.code]) != null && i[e] && (o.score = 0);
      Ci.sort((o, a) => a.score - o.score)
    }

    function us(t) {
      Cr = Ci.find(e => t.startsWith(e.locale))
    }

    function pr() {
      return Cr != null ? Cr : Ci[0]
    }
    Et(xa);
    Et({
      id: "apple.french",
      locale: "fr",
      displayName: "French",
      platform: "apple",
      virtualLayout: "azerty",
      score: 0,
      mapping: {
        KeyA: ["q", "Q", "\u2021", "\u03A9"],
        KeyB: ["b", "B", "\xDF", "\u222B"],
        KeyC: ["c", "C", "\xA9", "\xA2"],
        KeyD: ["d", "D", "\u2202", "\u2206"],
        KeyE: ["e", "E", "\xEA", "\xCA"],
        KeyF: ["f", "F", "\u0192", "\xB7"],
        KeyG: ["g", "G", "\uFB01", "\uFB02"],
        KeyH: ["h", "H", "\xCC", "\xCE"],
        KeyI: ["i", "I", "\xEE", "\xEF"],
        KeyJ: ["j", "J", "\xCF", "\xCD"],
        KeyK: ["k", "K", "\xC8", "\xCB"],
        KeyL: ["l", "L", "\xAC", "|"],
        KeyM: [",", "?", "\u221E", "\xBF"],
        KeyN: ["n", "N", "~", "\u0131"],
        KeyO: ["o", "O", "\u0153", "\u0152"],
        KeyP: ["p", "P", "\u03C0", "\u220F"],
        KeyQ: ["a", "A", "\xE6", "\xC6"],
        KeyR: ["r", "R", "\xAE", "\u201A"],
        KeyS: ["s", "S", "\xD2", "\u2211"],
        KeyT: ["t", "T", "\u2020", "\u2122"],
        KeyU: ["u", "U", "\xBA", "\xAA"],
        KeyV: ["v", "V", "\u25CA", "\u221A"],
        KeyW: ["z", "Z", "\xC2", "\xC5"],
        KeyX: ["x", "X", "\u2248", "\u2044"],
        KeyY: ["y", "Y", "\xDA", "\u0178"],
        KeyZ: ["w", "W", "\u2039", "\u203A"],
        Digit1: ["&", "1", "\uF8FF", "\xB4"],
        Digit2: ["\xE9", "2", "\xEB", "\u201E"],
        Digit3: ['"', "3", "\u201C", "\u201D"],
        Digit4: ["'", "4", "\u2018", "\u2019"],
        Digit5: ["(", "5", "{", "["],
        Digit6: ["\xA7", "6", "\xB6", "\xE5"],
        Digit7: ["\xE8", "7", "\xAB", "\xBB"],
        Digit8: ["!", "8", "\xA1", "\xDB"],
        Digit9: ["\xE7", "9", "\xC7", "\xC1"],
        Digit0: ["\xE0", "0", "\xF8", "\xD8"],
        Space: [" ", " ", " ", " "],
        Minus: [")", "\xB0", "}", "]"],
        Equal: ["-", "_", "\u2014", "\u2013"],
        BracketLeft: ["^", "\xA8", "\xF4", "\xD4"],
        BracketRight: ["$", "*", "\u20AC", "\xA5"],
        Backslash: ["`", "\xA3", "@", "#"],
        Semicolon: ["m", "M", "\xB5", "\xD3"],
        Quote: ["\xF9", "%", "\xD9", "\u2030"],
        Backquote: ["<", ">", "\u2264", "\u2265"],
        Comma: [";", ".", "\u2026", "\u2022"],
        Period: [":", "/", "\xF7", "\\"],
        Slash: ["=", "+", "\u2260", "\xB1"],
        NumpadDivide: ["/", "/", "/", "/"],
        NumpadMultiply: ["*", "*", "*", "*"],
        NumpadSubtract: ["-", "-", "-", "-"],
        NumpadAdd: ["+", "+", "+", "+"],
        NumpadDecimal: [",", ".", ",", "."],
        IntlBackslash: ["@", "#", "\u2022", "\u0178"],
        NumpadEqual: ["=", "=", "=", "="]
      }
    });
    Et({
      id: "apple.spanish",
      locale: "es",
      displayName: "Spanish ISO",
      platform: "apple",
      virtualLayout: "qwerty",
      score: 0,
      mapping: {
        KeyA: ["a", "A", "\xE5", "\xC5"],
        KeyB: ["b", "B", "\xDF", ""],
        KeyC: ["c", "C", "\xA9", " "],
        KeyD: ["d", "D", "\u2202", "\u2206"],
        KeyE: ["e", "E", "\u20AC", "\u20AC"],
        KeyF: ["f", "F", "\u0192", "\uFB01"],
        KeyG: ["g", "G", "\uF8FF", "\uFB02"],
        KeyH: ["h", "H", "\u2122", " "],
        KeyI: ["i", "I", " ", " "],
        KeyJ: ["j", "J", "\xB6", "\xAF"],
        KeyK: ["k", "K", "\xA7", "\u02C7"],
        KeyL: ["l", "L", " ", "\u02D8"],
        KeyM: ["m", "M", "\xB5", "\u02DA"],
        KeyN: ["n", "N", " ", "\u02D9"],
        KeyO: ["o", "O", "\xF8", "\xD8"],
        KeyP: ["p", "P", "\u03C0", "\u220F"],
        KeyQ: ["q", "Q", "\u0153", "\u0152"],
        KeyR: ["r", "R", "\xAE", " "],
        KeyS: ["s", "S", "\u222B", " "],
        KeyT: ["t", "T", "\u2020", "\u2021"],
        KeyU: ["u", "U", " ", " "],
        KeyV: ["v", "V", "\u221A", "\u25CA"],
        KeyW: ["w", "W", "\xE6", "\xC6"],
        KeyX: ["x", "X", "\u2211", "\u203A"],
        KeyY: ["y", "Y", "\xA5", " "],
        KeyZ: ["z", "Z", "\u03A9", "\u2039"],
        Digit1: ["1", "!", "|", "\u0131"],
        Digit2: ["2", '"', "@", "\u02DD"],
        Digit3: ["3", "\xB7", "#", "\u2022"],
        Digit4: ["4", "$", "\xA2", "\xA3"],
        Digit5: ["5", "%", "\u221E", "\u2030"],
        Digit6: ["6", "&", "\xAC", " "],
        Digit7: ["7", "/", "\xF7", "\u2044"],
        Digit8: ["8", "(", "\u201C", "\u2018"],
        Digit9: ["9", ")", "\u201D", "\u2019"],
        Digit0: ["0", "=", "\u2260", "\u2248"],
        Space: [" ", " ", " ", " "],
        Minus: ["'", "?", "\xB4", "\xB8"],
        Equal: ["\xA1", "\xBF", "\u201A", "\u02DB"],
        BracketLeft: ["`", "^", "[", "\u02C6"],
        BracketRight: ["+", "*", "]", "\xB1"],
        Backslash: ["\xE7", "\xC7", "}", "\xBB"],
        Semicolon: ["\xF1", "\xD1", "~", "\u02DC"],
        Quote: ["\xB4", "\xA8", "{", "\xAB"],
        Backquote: ["<", ">", "\u2264", "\u2265"],
        Comma: [",", ";", "\u201E", ""],
        Period: [".", ":", "\u2026", "\u2026"],
        Slash: ["-", "_", "\u2013", "\u2014"],
        NumpadDivide: ["/", "/", "/", "/"],
        NumpadMultiply: ["*", "*", "*", "*"],
        NumpadSubtract: ["-", "-", "-", "-"],
        NumpadAdd: ["+", "+", "+", "+"],
        Numpad1: ["1", "1", "1", "1"],
        Numpad2: ["2", "2", "2", "2"],
        Numpad3: ["3", "3", "3", "3"],
        Numpad4: ["4", "4", "4", "4"],
        Numpad5: ["5", "5", "5", "5"],
        Numpad6: ["6", "6", "6", "6"],
        Numpad7: ["7", "7", "7", "7"],
        Numpad8: ["8", "8", "8", "8"],
        Numpad9: ["9", "9", "9", "9"],
        Numpad0: ["0", "0", "0", "0"],
        NumpadDecimal: [",", ",", ",", ","],
        IntlBackslash: ["\xBA", "\xAA", "\\", "\xB0"]
      }
    });
    Et({
      id: "windows.spanish",
      locale: "es",
      displayName: "Spanish",
      platform: "windows",
      virtualLayout: "qwerty",
      score: 0,
      mapping: {
        KeyA: ["a", "A", "", ""],
        KeyB: ["b", "B", "", ""],
        KeyC: ["c", "C", "", ""],
        KeyD: ["d", "D", "", ""],
        KeyE: ["e", "E", "\u20AC", ""],
        KeyF: ["f", "F", "", ""],
        KeyG: ["g", "G", "", ""],
        KeyH: ["h", "H", "", ""],
        KeyI: ["i", "I", "", ""],
        KeyJ: ["j", "J", "", ""],
        KeyK: ["k", "K", "", ""],
        KeyL: ["l", "L", "", ""],
        KeyM: ["m", "M", "", ""],
        KeyN: ["n", "N", "", ""],
        KeyO: ["o", "O", "", ""],
        KeyP: ["p", "P", "", ""],
        KeyQ: ["q", "Q", "", ""],
        KeyR: ["r", "R", "", ""],
        KeyS: ["s", "S", "", ""],
        KeyT: ["t", "T", "", ""],
        KeyU: ["u", "U", "", ""],
        KeyV: ["v", "V", "", ""],
        KeyW: ["w", "W", "", ""],
        KeyX: ["x", "X", "", ""],
        KeyY: ["y", "Y", "", ""],
        KeyZ: ["z", "Z", "", ""],
        Digit1: ["1", "!", "|", ""],
        Digit2: ["2", '"', "@", ""],
        Digit3: ["3", "\xB7", "#", ""],
        Digit4: ["4", "$", "~", ""],
        Digit5: ["5", "%", "\u20AC", ""],
        Digit6: ["6", "&", "\xAC", ""],
        Digit7: ["7", "/", "", ""],
        Digit8: ["8", "(", "", ""],
        Digit9: ["9", ")", "", ""],
        Digit0: ["0", "=", "", ""],
        Space: [" ", " ", "", ""],
        Minus: ["'", "?", "", ""],
        Equal: ["\xA1", "\xBF", "", ""],
        BracketLeft: ["`", "^", "[", ""],
        BracketRight: ["+", "*", "]", ""],
        Backslash: ["\xE7", "\xC7", "}", ""],
        Semicolon: ["\xF1", "\xD1", "", ""],
        Quote: ["\xB4", "\xA8", "{", ""],
        Backquote: ["\xBA", "\xAA", "\\", ""],
        Comma: [",", ";", "", ""],
        Period: [".", ":", "", ""],
        Slash: ["-", "_", "", ""],
        NumpadDivide: ["/", "/", "", ""],
        NumpadMultiply: ["*", "*", "", ""],
        NumpadSubtract: ["-", "-", "", ""],
        NumpadAdd: ["+", "+", "", ""],
        IntlBackslash: ["<", ">", "", ""]
      }
    });
    Et({
      id: "linux.spanish",
      locale: "es",
      displayName: "Spanish",
      platform: "linux",
      virtualLayout: "qwerty",
      score: 0,
      mapping: {
        KeyA: ["a", "A", "\xE6", "\xC6"],
        KeyB: ["b", "B", "\u201D", "\u2019"],
        KeyC: ["c", "C", "\xA2", "\xA9"],
        KeyD: ["d", "D", "\xF0", "\xD0"],
        KeyE: ["e", "E", "\u20AC", "\xA2"],
        KeyF: ["f", "F", "\u0111", "\xAA"],
        KeyG: ["g", "G", "\u014B", "\u014A"],
        KeyH: ["h", "H", "\u0127", "\u0126"],
        KeyI: ["i", "I", "\u2192", "\u0131"],
        KeyJ: ["j", "J", "\u0309", "\u031B"],
        KeyK: ["k", "K", "\u0138", "&"],
        KeyL: ["l", "L", "\u0142", "\u0141"],
        KeyM: ["m", "M", "\xB5", "\xBA"],
        KeyN: ["n", "N", "n", "N"],
        KeyO: ["o", "O", "\xF8", "\xD8"],
        KeyP: ["p", "P", "\xFE", "\xDE"],
        KeyQ: ["q", "Q", "@", "\u03A9"],
        KeyR: ["r", "R", "\xB6", "\xAE"],
        KeyS: ["s", "S", "\xDF", "\xA7"],
        KeyT: ["t", "T", "\u0167", "\u0166"],
        KeyU: ["u", "U", "\u2193", "\u2191"],
        KeyV: ["v", "V", "\u201C", "\u2018"],
        KeyW: ["w", "W", "\u0142", "\u0141"],
        KeyX: ["x", "X", "\xBB", ">"],
        KeyY: ["y", "Y", "\u2190", "\xA5"],
        KeyZ: ["z", "Z", "\xAB", "<"],
        Digit1: ["1", "!", "|", "\xA1"],
        Digit2: ["2", '"', "@", "\u215B"],
        Digit3: ["3", "\xB7", "#", "\xA3"],
        Digit4: ["4", "$", "~", "$"],
        Digit5: ["5", "%", "\xBD", "\u215C"],
        Digit6: ["6", "&", "\xAC", "\u215D"],
        Digit7: ["7", "/", "{", "\u215E"],
        Digit8: ["8", "(", "[", "\u2122"],
        Digit9: ["9", ")", "]", "\xB1"],
        Digit0: ["0", "=", "}", "\xB0"],
        Enter: ["\r", "\r", "\r", "\r"],
        Escape: ["\x1B", "\x1B", "\x1B", "\x1B"],
        Backspace: ["\b", "\b", "\b", "\b"],
        Tab: ["	", "", "	", ""],
        Space: [" ", " ", " ", " "],
        Minus: ["'", "?", "\\", "\xBF"],
        Equal: ["\xA1", "\xBF", "\u0303", "~"],
        BracketLeft: ["\u0300", "\u0302", "[", "\u030A"],
        BracketRight: ["+", "*", "]", "\u0304"],
        Backslash: ["\xE7", "\xC7", "}", "\u0306"],
        Semicolon: ["\xF1", "\xD1", "~", "\u030B"],
        Quote: ["\u0301", "\u0308", "{", "{"],
        Backquote: ["\xBA", "\xAA", "\\", "\\"],
        Comma: [",", ";", "\u2500", "\xD7"],
        Period: [".", ":", "\xB7", "\xF7"],
        Slash: ["-", "_", "\u0323", "\u0307"],
        NumpadDivide: ["/", "/", "/", "/"],
        NumpadMultiply: ["*", "*", "*", "*"],
        NumpadSubtract: ["-", "-", "-", "-"],
        NumpadAdd: ["+", "+", "+", "+"],
        NumpadEnter: ["\r", "\r", "\r", "\r"],
        Numpad1: ["", "1", "", "1"],
        Numpad2: ["", "2", "", "2"],
        Numpad3: ["", "3", "", "3"],
        Numpad4: ["", "4", "", "4"],
        Numpad5: ["", "5", "", "5"],
        Numpad6: ["", "6", "", "6"],
        Numpad7: ["", "7", "", "7"],
        Numpad8: ["", "8", "", "8"],
        Numpad9: ["", "9", "", "9"],
        Numpad0: ["", "0", "", "0"],
        NumpadDecimal: ["", ".", "", "."],
        IntlBackslash: ["<", ">", "|", "\xA6"],
        NumpadEqual: ["=", "=", "=", "="],
        NumpadComma: [".", ".", ".", "."],
        NumpadParenLeft: ["(", "(", "(", "("],
        NumpadParenRight: [")", ")", ")", ")"]
      }
    });
    Et({
      id: "linux.french",
      locale: "fr",
      displayName: "French",
      virtualLayout: "azerty",
      platform: "linux",
      score: 0,
      mapping: {
        KeyA: ["q", "Q", "@", "\u03A9"],
        KeyB: ["b", "B", "\u201D", "\u2019"],
        KeyC: ["c", "C", "\xA2", "\xA9"],
        KeyD: ["d", "D", "\xF0", "\xD0"],
        KeyE: ["e", "E", "\u20AC", "\xA2"],
        KeyF: ["f", "F", "\u0111", "\xAA"],
        KeyG: ["g", "G", "\u014B", "\u014A"],
        KeyH: ["h", "H", "\u0127", "\u0126"],
        KeyI: ["i", "I", "\u2192", "\u0131"],
        KeyJ: ["j", "J", "\u0309", "\u031B"],
        KeyK: ["k", "K", "\u0138", "&"],
        KeyL: ["l", "L", "\u0142", "\u0141"],
        KeyM: [",", "?", "\u0301", "\u030B"],
        KeyN: ["n", "N", "n", "N"],
        KeyO: ["o", "O", "\xF8", "\xD8"],
        KeyP: ["p", "P", "\xFE", "\xDE"],
        KeyQ: ["a", "A", "\xE6", "\xC6"],
        KeyR: ["r", "R", "\xB6", "\xAE"],
        KeyS: ["s", "S", "\xDF", "\xA7"],
        KeyT: ["t", "T", "\u0167", "\u0166"],
        KeyU: ["u", "U", "\u2193", "\u2191"],
        KeyV: ["v", "V", "\u201C", "\u2018"],
        KeyW: ["z", "Z", "\xAB", "<"],
        KeyX: ["x", "X", "\xBB", ">"],
        KeyY: ["y", "Y", "\u2190", "\xA5"],
        KeyZ: ["w", "W", "\u0142", "\u0141"],
        Digit1: ["&", "1", "\xB9", "\xA1"],
        Digit2: ["\xE9", "2", "~", "\u215B"],
        Digit3: ['"', "3", "#", "\xA3"],
        Digit4: ["'", "4", "{", "$"],
        Digit5: ["(", "5", "[", "\u215C"],
        Digit6: ["-", "6", "|", "\u215D"],
        Digit7: ["\xE8", "7", "`", "\u215E"],
        Digit8: ["_", "8", "\\", "\u2122"],
        Digit9: ["\xE7", "9", "^", "\xB1"],
        Digit0: ["\xE0", "0", "@", "\xB0"],
        Enter: ["\r", "\r", "\r", "\r"],
        Escape: ["\x1B", "\x1B", "\x1B", "\x1B"],
        Backspace: ["\b", "\b", "\b", "\b"],
        Tab: ["	", "", "	", ""],
        Space: [" ", " ", " ", " "],
        Minus: [")", "\xB0", "]", "\xBF"],
        Equal: ["=", "+", "}", "\u0328"],
        BracketLeft: ["\u0302", "\u0308", "\u0308", "\u030A"],
        BracketRight: ["$", "\xA3", "\xA4", "\u0304"],
        Backslash: ["*", "\xB5", "\u0300", "\u0306"],
        Semicolon: ["m", "M", "\xB5", "\xBA"],
        Quote: ["\xF9", "%", "\u0302", "\u030C"],
        Backquote: ["\xB2", "~", "\xAC", "\xAC"],
        Comma: [";", ".", "\u2500", "\xD7"],
        Period: [":", "/", "\xB7", "\xF7"],
        Slash: ["!", "\xA7", "\u0323", "\u0307"],
        NumpadMultiply: ["*", "*", "*", "*"],
        NumpadSubtract: ["-", "-", "-", "-"],
        NumpadAdd: ["+", "+", "+", "+"],
        NumpadDecimal: ["", ".", "", "."],
        IntlBackslash: ["<", ">", "|", "\xA6"]
      }
    });
    Et({
      id: "windows.french",
      locale: "fr",
      displayName: "French",
      virtualLayout: "azerty",
      platform: "windows",
      score: 0,
      mapping: {
        KeyA: ["q", "Q", "", ""],
        KeyB: ["b", "B", "", ""],
        KeyC: ["c", "C", "", ""],
        KeyD: ["d", "D", "", ""],
        KeyE: ["e", "E", "\u20AC", ""],
        KeyF: ["f", "F", "", ""],
        KeyG: ["g", "G", "", ""],
        KeyH: ["h", "H", "", ""],
        KeyI: ["i", "I", "", ""],
        KeyJ: ["j", "J", "", ""],
        KeyK: ["k", "K", "", ""],
        KeyL: ["l", "L", "", ""],
        KeyM: [",", "?", "", ""],
        KeyN: ["n", "N", "", ""],
        KeyO: ["o", "O", "", ""],
        KeyP: ["p", "P", "", ""],
        KeyQ: ["a", "A", "", ""],
        KeyR: ["r", "R", "", ""],
        KeyS: ["s", "S", "", ""],
        KeyT: ["t", "T", "", ""],
        KeyU: ["u", "U", "", ""],
        KeyV: ["v", "V", "", ""],
        KeyW: ["z", "Z", "", ""],
        KeyX: ["x", "X", "", ""],
        KeyY: ["y", "Y", "", ""],
        KeyZ: ["w", "W", "", ""],
        Digit1: ["&", "1", "", ""],
        Digit2: ["\xE9", "2", "~", ""],
        Digit3: ['"', "3", "#", ""],
        Digit4: ["'", "4", "{", ""],
        Digit5: ["(", "5", "[", ""],
        Digit6: ["-", "6", "|", ""],
        Digit7: ["\xE8", "7", "`", ""],
        Digit8: ["_", "8", "\\", ""],
        Digit9: ["\xE7", "9", "^", ""],
        Digit0: ["\xE0", "0", "@", ""],
        Space: [" ", " ", "", ""],
        Minus: [")", "\xB0", "]", ""],
        Equal: ["=", "+", "}", ""],
        BracketLeft: ["^", "\xA8", "", ""],
        BracketRight: ["$", "\xA3", "\xA4", ""],
        Backslash: ["*", "\xB5", "", ""],
        Semicolon: ["m", "M", "", ""],
        Quote: ["\xF9", "%", "", ""],
        Backquote: ["\xB2", "", "", ""],
        Comma: [";", ".", "", ""],
        Period: [":", "/", "", ""],
        Slash: ["!", "\xA7", "", ""],
        NumpadDivide: ["/", "/", "", ""],
        NumpadMultiply: ["*", "*", "", ""],
        NumpadSubtract: ["-", "-", "", ""],
        NumpadAdd: ["+", "+", "", ""],
        IntlBackslash: ["<", ">", "", ""]
      }
    });
    Et({
      id: "windows.german",
      locale: "de",
      displayName: "German",
      platform: "windows",
      virtualLayout: "qwertz",
      score: 0,
      mapping: {
        KeyA: ["a", "A", "", ""],
        KeyB: ["b", "B", "", ""],
        KeyC: ["c", "C", "", ""],
        KeyD: ["d", "D", "", ""],
        KeyE: ["e", "E", "\u20AC", ""],
        KeyF: ["f", "F", "", ""],
        KeyG: ["g", "G", "", ""],
        KeyH: ["h", "H", "", ""],
        KeyI: ["i", "I", "", ""],
        KeyJ: ["j", "J", "", ""],
        KeyK: ["k", "K", "", ""],
        KeyL: ["l", "L", "", ""],
        KeyM: ["m", "M", "\xB5", ""],
        KeyN: ["n", "N", "", ""],
        KeyO: ["o", "O", "", ""],
        KeyP: ["p", "P", "", ""],
        KeyQ: ["q", "Q", "@", ""],
        KeyR: ["r", "R", "", ""],
        KeyS: ["s", "S", "", ""],
        KeyT: ["t", "T", "", ""],
        KeyU: ["u", "U", "", ""],
        KeyV: ["v", "V", "", ""],
        KeyW: ["w", "W", "", ""],
        KeyX: ["x", "X", "", ""],
        KeyY: ["z", "Z", "", ""],
        KeyZ: ["y", "Y", "", ""],
        Digit1: ["1", "!", "", ""],
        Digit2: ["2", '"', "\xB2", ""],
        Digit3: ["3", "\xA7", "\xB3", ""],
        Digit4: ["4", "$", "", ""],
        Digit5: ["5", "%", "", ""],
        Digit6: ["6", "&", "", ""],
        Digit7: ["7", "/", "{", ""],
        Digit8: ["8", "(", "[", ""],
        Digit9: ["9", ")", "]", ""],
        Digit0: ["0", "=", "}", ""],
        Space: [" ", " ", "", ""],
        Minus: ["\xDF", "?", "\\", "\u1E9E"],
        Equal: ["\xB4", "`", "", ""],
        BracketLeft: ["\xFC", "\xDC", "", ""],
        BracketRight: ["+", "*", "~", ""],
        Backslash: ["#", "'", "", ""],
        Semicolon: ["\xF6", "\xD6", "", ""],
        Quote: ["\xE4", "\xC4", "", ""],
        Backquote: ["^", "\xB0", "", ""],
        Comma: [",", ";", "", ""],
        Period: [".", ":", "", ""],
        Slash: ["-", "_", "", ""],
        NumpadDivide: ["/", "/", "", ""],
        NumpadMultiply: ["*", "*", "", ""],
        NumpadSubtract: ["-", "-", "", ""],
        NumpadAdd: ["+", "+", "", ""],
        IntlBackslash: ["<", ">", "|", ""]
      }
    });
    Et({
      id: "apple.german",
      locale: "de",
      displayName: "German",
      virtualLayout: "qwertz",
      platform: "apple",
      score: 0,
      mapping: {
        KeyA: ["a", "A", "\xE5", "\xC5"],
        KeyB: ["b", "B", "\u222B", "\u2039"],
        KeyC: ["c", "C", "\xE7", "\xC7"],
        KeyD: ["d", "D", "\u2202", "\u2122"],
        KeyE: ["e", "E", "\u20AC", "\u2030"],
        KeyF: ["f", "F", "\u0192", "\xCF"],
        KeyG: ["g", "G", "\xA9", "\xCC"],
        KeyH: ["h", "H", "\xAA", "\xD3"],
        KeyI: ["i", "I", "\u2044", "\xDB"],
        KeyJ: ["j", "J", "\xBA", "\u0131"],
        KeyK: ["k", "K", "\u2206", "\u02C6"],
        KeyL: ["l", "L", "@", "\uFB02"],
        KeyM: ["m", "M", "\xB5", "\u02D8"],
        KeyN: ["n", "N", "~", "\u203A"],
        KeyO: ["o", "O", "\xF8", "\xD8"],
        KeyP: ["p", "P", "\u03C0", "\u220F"],
        KeyQ: ["q", "Q", "\xAB", "\xBB"],
        KeyR: ["r", "R", "\xAE", "\xB8"],
        KeyS: ["s", "S", "\u201A", "\xCD"],
        KeyT: ["t", "T", "\u2020", "\u02DD"],
        KeyU: ["u", "U", "\xA8", "\xC1"],
        KeyV: ["v", "V", "\u221A", "\u25CA"],
        KeyW: ["w", "W", "\u2211", "\u201E"],
        KeyX: ["x", "X", "\u2248", "\xD9"],
        KeyY: ["z", "Z", "\u03A9", "\u02C7"],
        KeyZ: ["y", "Y", "\xA5", "\u2021"],
        Digit1: ["1", "!", "\xA1", "\xAC"],
        Digit2: ["2", '"', "\u201C", "\u201D"],
        Digit3: ["3", "\xA7", "\xB6", "#"],
        Digit4: ["4", "$", "\xA2", "\xA3"],
        Digit5: ["5", "%", "[", "\uFB01"],
        Digit6: ["6", "&", "]", "^"],
        Digit7: ["7", "/", "|", "\\"],
        Digit8: ["8", "(", "{", "\u02DC"],
        Digit9: ["9", ")", "}", "\xB7"],
        Digit0: ["0", "=", "\u2260", "\xAF"],
        Space: [" ", " ", " ", " "],
        Minus: ["\xDF", "?", "\xBF", "\u02D9"],
        Equal: ["\xB4", "`", "'", "\u02DA"],
        BracketLeft: ["\xFC", "\xDC", "\u2022", "\xB0"],
        BracketRight: ["+", "*", "\xB1", "\uF8FF"],
        Backslash: ["#", "'", "\u2018", "\u2019"],
        Semicolon: ["\xF6", "\xD6", "\u0153", "\u0152"],
        Quote: ["\xE4", "\xC4", "\xE6", "\xC6"],
        Backquote: ["<", ">", "\u2264", "\u2265"],
        Comma: [",", ";", "\u221E", "\u02DB"],
        Period: [".", ":", "\u2026", "\xF7"],
        Slash: ["-", "_", "\u2013", "\u2014"],
        NumpadDivide: ["/", "/", "/", "/"],
        NumpadMultiply: ["*", "*", "*", "*"],
        NumpadSubtract: ["-", "-", "-", "-"],
        NumpadAdd: ["+", "+", "+", "+"],
        NumpadDecimal: [",", ",", ".", "."],
        IntlBackslash: ["^", "\xB0", "\u201E", "\u201C"],
        NumpadEqual: ["=", "=", "=", "="]
      }
    });
    Et({
      id: "dvorak",
      locale: "en",
      displayName: "Dvorak",
      virtualLayout: "dvorak",
      platform: "",
      score: 0,
      mapping: {
        KeyA: ["a", "A", "\xE5", "\xC5"],
        KeyB: ["x", "X", "\u2248", "\u02DB"],
        KeyC: ["j", "J", "\u2206", "\xD4"],
        KeyD: ["e", "E", "\xB4", "\xB4"],
        KeyE: [".", ">", "\u2265", "\u02D8"],
        KeyF: ["u", "U", "\xA8", "\xA8"],
        KeyG: ["i", "I", "\u02C6", "\u02C6"],
        KeyH: ["d", "D", "\u2202", "\xCE"],
        KeyI: ["c", "C", "\xE7", "\xC7"],
        KeyJ: ["h", "H", "\u02D9", "\xD3"],
        KeyK: ["t", "T", "\u2020", "\u02C7"],
        KeyL: ["n", "N", "\u02DC", "\u02DC"],
        KeyM: ["m", "M", "\xB5", "\xC2"],
        KeyN: ["b", "B", "\u222B", "\u0131"],
        KeyO: ["r", "R", "\xAE", "\u2030"],
        KeyP: ["l", "L", "\xAC", "\xD2"],
        KeyQ: ["'", '"', "\xE6", "\xC6"],
        KeyR: ["p", "P", "\u03C0", "\u220F"],
        KeyS: ["o", "O", "\xF8", "\xD8"],
        KeyT: ["y", "Y", "\xA5", "\xC1"],
        KeyU: ["g", "G", "\xA9", "\u02DD"],
        KeyV: ["k", "K", "\u02DA", "\uF8FF"],
        KeyW: [",", "<", "\u2264", "\xAF"],
        KeyX: ["q", "Q", "\u0153", "\u0152"],
        KeyY: ["f", "F", "\u0192", "\xCF"],
        KeyZ: [";", ":", "\u2026", "\xDA"],
        Digit1: ["1", "!", "\xA1", "\u2044"],
        Digit2: ["2", "@", "\u2122", "\u20AC"],
        Digit3: ["3", "#", "\xA3", "\u2039"],
        Digit4: ["4", "$", "\xA2", "\u203A"],
        Digit5: ["5", "%", "\u221E", "\uFB01"],
        Digit6: ["6", "^", "\xA7", "\uFB02"],
        Digit7: ["7", "&", "\xB6", "\u2021"],
        Digit8: ["8", "*", "\u2022", "\xB0"],
        Digit9: ["9", "(", "\xAA", "\xB7"],
        Digit0: ["0", ")", "\xBA", "\u201A"],
        Space: [" ", " ", " ", " "],
        Minus: ["[", "{", "\u201C", "\u201D"],
        Equal: ["]", "}", "\u2018", "\u2019"],
        BracketLeft: ["/", "?", "\xF7", "\xBF"],
        BracketRight: ["=", "+", "\u2260", "\xB1"],
        Backslash: ["\\", "|", "\xAB", "\xBB"],
        Semicolon: ["s", "S", "\xDF", "\xCD"],
        Quote: ["-", "_", "\u2013", "\u2014"],
        Backquote: ["`", "~", "`", "`"],
        Comma: ["w", "W", "\u2211", "\u201E"],
        Period: ["v", "V", "\u221A", "\u25CA"],
        Slash: ["z", "Z", "\u03A9", "\xB8"],
        NumpadDivide: ["/", "/", "/", "/"],
        NumpadMultiply: ["*", "*", "*", "*"],
        NumpadSubtract: ["-", "-", "-", "-"],
        NumpadAdd: ["+", "+", "+", "+"],
        Numpad1: ["1", "1", "1", "1"],
        Numpad2: ["2", "2", "2", "2"],
        Numpad3: ["3", "3", "3", "3"],
        Numpad4: ["4", "4", "4", "4"],
        Numpad5: ["5", "5", "5", "5"],
        Numpad6: ["6", "6", "6", "6"],
        Numpad7: ["7", "7", "7", "7"],
        Numpad8: ["8", "8", "8", "8"],
        Numpad9: ["9", "9", "9", "9"],
        Numpad0: ["0", "0", "0", "0"],
        NumpadDecimal: [".", ".", ".", "."],
        IntlBackslash: ["\xA7", "\xB1", "\xA7", "\xB1"],
        NumpadEqual: ["=", "=", "=", "="],
        AudioVolumeUp: ["", "=", "", "="]
      }
    });

    function Kc(t) {
      if (fe()) {
        let e = jt(),
          r = t.startsWith("!"),
          i = t.endsWith(e);
        if (r && !i || !r && i) return !0
      }
      return t === "!other" ? !1 : t === "other"
    }

    function ms(t, e, r) {
      if (t.length === 0) return "";
      let i = Ti(ba(r));
      for (let o = t.length - 1; o >= 0; o--)
        if (t[o].key === i && (!t[o].ifMode || t[o].ifMode === e)) return t[o].command;
      return ""
    }

    function ds(t) {
      let e = t;
      return Y(e) && (e = e.length > 0 ? e[0] + "(" + e.slice(1).join("") + ")" : ""), e
    }

    function ps(t, e) {
      let r = [];
      if (typeof e == "string") {
        let a = Qn[e];
        Y(a) ? r = a.slice() : a && r.push(a)
      }
      let i = ds(e),
        o = new RegExp("^" + i.replace("\\", "\\\\").replace("|", "\\|").replace("*", "\\*").replace("$", "\\$").replace("^", "\\^") + "([^*a-zA-Z]|$)");
      for (let a of t) o.test(ds(a.command)) && r.push(a.key);
      return r.map(Ei)
    }

    function Ei(t) {
      var o;
      let e = /macos|ios|/.test(jt()),
        r = t.split("+"),
        i = "";
      for (let a of r) !e && i && (i += '<span class="ML__shortcut-join">+</span>'), a.startsWith("[Key") ? i += a.slice(4, 5) : a.startsWith("Key") ? i += a.slice(3, 4) : a.startsWith("[Digit") ? i += a.slice(6, 7) : a.startsWith("Digit") ? i += a.slice(5, 6) : i += (o = {
        cmd: "\u2318",
        meta: e ? "\u2318" : "command",
        shift: e ? "\u21E7" : "shift",
        alt: e ? "\u2325" : "alt",
        ctrl: e ? "\u2303" : "control",
        "\n": e ? "\u23CE" : "return",
        "[return]": e ? "\u23CE" : "return",
        "[enter]": e ? "\u2324" : "enter",
        "[tab]": e ? "\u21E5" : "tab",
        "[escape]": "esc",
        "[backspace]": e ? "\u232B" : "backspace",
        "[delete]": e ? "\u2326" : "del",
        "[pageup]": e ? "\u21DE" : "page up",
        "[pagedown]": e ? "\u21DF" : "page down",
        "[home]": e ? "\u2912" : "home",
        "[end]": e ? "\u2913" : "end",
        "[space]": "space",
        "[equal]": "=",
        "[minus]": "-",
        "[comma]": ",",
        "[slash]": "/",
        "[backslash]": "\\",
        "[bracketleft]": "[",
        "[bracketright]": "]",
        semicolon: ";",
        period: ".",
        comma: ",",
        minus: "-",
        equal: "=",
        quote: "'",
        bracketLeft: "[",
        bracketRight: "]",
        backslash: "\\",
        intlbackslash: "\\",
        backquote: "`",
        slash: "/",
        numpadmultiply: "* &#128290;",
        numpaddivide: "/ &#128290;",
        numpadsubtract: "- &#128290;",
        numpadadd: "+ &#128290;",
        numpaddecimal: ". &#128290;",
        numpadcomma: ", &#128290;",
        help: "help",
        left: "\u21E0",
        up: "\u21E1",
        right: "\u21E2",
        down: "\u21E3",
        "[arrowleft]": "\u21E0",
        "[arrowup]": "\u21E1",
        "[arrowright]": "\u21E2",
        "[arrowdown]": "\u21E3",
        "[digit0]": "0",
        "[digit1]": "1",
        "[digit2]": "2",
        "[digit3]": "3",
        "[digit4]": "4",
        "[digit5]": "5",
        "[digit6]": "6",
        "[digit7]": "7",
        "[digit8]": "8",
        "[digit9]": "9"
      } [a.toLowerCase()]) != null ? o : a.toUpperCase();
      return i
    }

    function Oc(t, e) {
      if (t.ifPlatform && !/^!?(macos|windows|android|ios|chromeos|other)$/.test(t.ifPlatform)) throw new Error(`Unexpected platform "${t.ifPlatform}" for keybinding ${t.key}`);
      if (t.ifLayout !== void 0 && (e.score === 0 || !t.ifLayout.includes(e.id))) return;
      let r = ba(t.key),
        i = t.ifPlatform;
      if (r.cmd) {
        if (i && i !== "macos" && i !== "ios") throw new Error('Unexpected "cmd" modifier with platform "' + i + `"
"cmd" modifier can only be used with macOS or iOS platform.`);
        i || (i = jt() === "ios" ? "ios" : "macos"), r.win = !1, r.cmd = !1, r.meta = !0
      }
      if (r.win) {
        if (i && i !== "windows") throw new Error('Unexpected "win" modifier with platform "' + i + `"
"win" modifier can only be used with Windows platform.`);
        i = "windows", r.win = !1, r.cmd = !1, r.meta = !0
      }
      if (i && !Kc(i)) return;
      if (/^\[.+\]$/.test(r.key)) return P(b({}, t), {
        ifPlatform: i,
        key: Ti(r)
      });
      let o = ss(r.key, e);
      if (!o) throw new Error('Invalid keybinding key "' + t.key + '"');
      if (o.shift && r.shift || o.alt && r.alt) throw new Error(`The keybinding ${t.key} (${va(t.command)}) is conflicting with the key combination ${Ti(o)} using the ${e.displayName} keyboard layout`);
      return o.shift = o.shift || r.shift, o.alt = o.alt || r.alt, o.meta = r.meta, o.ctrl = r.ctrl, P(b({}, t), {
        ifPlatform: i,
        key: Ti(o)
      })
    }

    function va(t) {
      if (Array.isArray(t)) {
        let e = [...t];
        return e.shift() + "(" + e.map(r => typeof r == "string" ? `"${r}"` : r.toString()).join(", ") + ")"
      }
      return t
    }

    function hs(t, e) {
      let r = [],
        i = [];
      for (let o of t) try {
        let a = Oc(o, e);
        if (a) {
          let n = r.filter(s => s.key === a.key && s.ifMode === a.ifMode);
          if (n.length > 0) throw new Error(`Ambiguous key binding ${o.key} (${va(o.command)}) matches ${n[0].key} (${va(n[0].command)}) with the ${e.displayName} keyboard layout`);
          r.push(a)
        }
      } catch (a) {
        a instanceof Error && i.push(a.message)
      }
      return [r, i]
    }
    var wa = `/* The element that display info while in latex mode */
#mathlive-popover-panel {
  visibility: hidden;
  background-color: rgba(97, 97, 97, 0.95);
  color: #fff;
  text-align: center;
  border-radius: 8px;
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: all 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
  /* The 'tip' of the popover panel */
}
#mathlive-popover-panel::after {
  content: '';
  position: absolute;
  top: -5px;
  left: calc(50% - 3px);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  font-size: 1rem;
  border-bottom: 5px solid rgba(97, 97, 97, 0.9);
}
#mathlive-popover-panel.is-visible {
  visibility: inherit;
  animation: ML__fade-in cubic-bezier(0, 0, 0.2, 1) 0.15s;
}
@keyframes ML__fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/* The wrapper class for the entire content of the popover panel */
#mathlive-popover-panel ul {
  display: flex;
  flex-flow: column;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: flex-start;
  justify-content: center;
}
#mathlive-popover-panel li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 8px;
  padding: 8px;
  width: calc(100% - 16px - 16px);
  column-gap: 1em;
  border-radius: 8px;
  cursor: pointer;
  /* Since the content can be clicked on, provide feedback on hover */
}
#mathlive-popover-panel li a {
  color: #5ea6fd;
  padding-top: 0.3em;
  margin-top: 0.4em;
  display: block;
}
#mathlive-popover-panel li a:hover {
  color: #5ea6fd;
  text-decoration: underline;
}
#mathlive-popover-panel li:hover,
#mathlive-popover-panel li.is-pressed,
#mathlive-popover-panel li.is-active {
  background: rgba(255, 255, 255, 0.1);
}
/* The command inside a popover (inside a #mathlive-popover-panel) */
.ML__popover__command {
  font-size: 1.6rem;
  font-family: KaTeX_Main;
}
.ML__popover__latex {
  font-family: 'IBM Plex Mono', 'Source Code Pro', Consolas, 'Roboto Mono', Menlo, 'Bitstream Vera Sans Mono', 'DejaVu Sans Mono', Monaco, Courier, monospace;
  align-self: center;
}
/* The keyboard shortcuts for a symbol as displayed in the popover */
.ML__popover__keybinding {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.8em;
  opacity: 0.7;
}
/* Style for the character that joins the modifiers of a keyboard shortcut 
(usually a "+" sign)*/
.ML__shortcut-join {
  opacity: 0.5;
}
`;
    var Ie = `.ML__sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
.ML__is-inline {
  display: inline-block;
}
.ML__base {
  visibility: inherit;
  display: inline-block;
  position: relative;
  cursor: text;
  padding: 0;
  margin: 0;
  box-sizing: content-box;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  font-weight: inherit;
  font-family: inherit;
  font-style: inherit;
  text-decoration: none;
  width: min-content;
}
.ML__strut,
.ML__strut--bottom {
  display: inline-block;
  min-height: 0.5em;
}
.ML__small-delim {
  font-family: KaTeX_Main;
}
/* Text mode */
.ML__text {
  font-family: var(--text-font-family, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif);
  white-space: pre;
}
/* Use cmr for 'math upright' */
.ML__cmr {
  font-family: KaTeX_Main;
  font-style: normal;
}
.ML__mathit {
  font-family: KaTeX_Math;
  /* The KaTeX_Math font is italic by default, so the font-style below is only 
     useful when a fallback font is used
  */
  font-style: italic;
}
.ML__mathbf {
  font-family: KaTeX_Main;
  font-weight: bold;
}
/* Lowercase greek symbols should stick to math font when \\mathbf is applied 
   to match TeX idiosyncratic behavior */
.lcGreek.ML__mathbf {
  font-family: KaTeX_Math;
  font-weight: normal;
}
.ML__mathbfit {
  font-family: KaTeX_Math;
  font-weight: bold;
  font-style: italic;
}
.ML__ams {
  font-family: KaTeX_AMS;
}
/* Blackboard */
.ML__bb {
  font-family: KaTeX_AMS;
}
.ML__cal {
  font-family: KaTeX_Caligraphic;
}
.ML__frak {
  font-family: KaTeX_Fraktur;
}
.ML__tt {
  font-family: KaTeX_Typewriter;
}
.ML__script {
  font-family: KaTeX_Script;
}
.ML__sans {
  font-family: KaTeX_SansSerif;
}
.ML__series_ul {
  font-weight: 100;
}
.ML__series_el {
  font-weight: 100;
}
.ML__series_l {
  font-weight: 200;
}
.ML__series_sl {
  font-weight: 300;
}
.ML__series_sb {
  font-weight: 500;
}
.ML__bold,
.ML__boldsymbol {
  font-weight: 700;
}
.ML__series_eb {
  font-weight: 800;
}
.ML__series_ub {
  font-weight: 900;
}
.ML__series_uc {
  font-stretch: ultra-condensed;
}
.ML__series_ec {
  font-stretch: extra-condensed;
}
.ML__series_c {
  font-stretch: condensed;
}
.ML__series_sc {
  font-stretch: semi-condensed;
}
.ML__series_sx {
  font-stretch: semi-expanded;
}
.ML__series_x {
  font-stretch: expanded;
}
.ML__series_ex {
  font-stretch: extra-expanded;
}
.ML__series_ux {
  font-stretch: ultra-expanded;
}
.ML__it {
  font-style: italic;
}
.ML__shape_ol {
  -webkit-text-stroke: 1px black;
  text-stroke: 1px black;
  color: transparent;
}
.ML__shape_sc {
  font-variant: small-caps;
}
.ML__shape_sl {
  font-style: oblique;
}
/* First level emphasis */
.ML__emph {
  color: #bc2612;
}
/* Second level emphasis */
.ML__emph .ML__emph {
  color: #0c7f99;
}
.ML__highlight {
  color: #007cb2;
  background: #edd1b0;
}
.ML__center {
  text-align: center;
}
.ML__label_padding {
  padding: 0 0.5em;
}
.ML__frac-line {
  width: 100%;
  min-height: 1px;
}
.ML__frac-line:after {
  content: '';
  display: block;
  margin-top: -0.04em;
  min-height: 0.04em;
  /* Ensure the line is visible when printing even if "turn off background images" is on*/
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
  /* There's a bug since Chrome 62 where 
      sub-pixel border lines don't draw at some zoom 
      levels (110%, 90%). 
      Setting the min-height used to work around it, but that workaround
      broke in Chrome 84 or so.
      Setting the background (and the min-height) seems to work for now.
      */
  background: currentColor;
  box-sizing: content-box;
  /* Vuetify sets the box-sizing to inherit 
            causes the fraction line to not draw at all sizes (see #26) */
  /* On some versions of Firefox on Windows, the line fails to 
            draw at some zoom levels, but setting the transform triggers
            the hardware accelerated path, which works */
  transform: translate(0, 0);
}
.ML__sqrt {
  display: inline-block;
}
.ML__sqrt-sign {
  display: inline-block;
  font-family: KaTeX_Main;
  position: relative;
}
.ML__sqrt-line {
  display: inline-block;
  height: 0.04em;
  width: 100%;
}
.ML__sqrt-line:before {
  content: '';
  display: block;
  margin-top: -0.04em;
  min-height: 0.04em;
  /* Ensure the line is visible when printing even if "turn off background images" is on*/
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
  background: currentColor;
  /* On some versions of Firefox on Windows, the line fails to 
            draw at some zoom levels, but setting the transform triggers
            the hardware accelerated path, which works */
  transform: translate(0, 0);
}
.ML__sqrt-line:after {
  border-bottom-width: 1px;
  content: ' ';
  display: block;
  margin-top: -0.1em;
}
.ML__sqrt-index {
  margin-left: 0.27777778em;
  margin-right: -0.55555556em;
}
.ML__delim-size1 {
  font-family: KaTeX_Size1;
}
.ML__delim-size2 {
  font-family: KaTeX_Size2;
}
.ML__delim-size3 {
  font-family: KaTeX_Size3;
}
.ML__delim-size4 {
  font-family: KaTeX_Size4;
}
.ML__delim-mult .delim-size1 > span {
  font-family: KaTeX_Size1;
}
.ML__delim-mult .delim-size4 > span {
  font-family: KaTeX_Size4;
}
.ML__accent-body > span {
  font-family: KaTeX_Main;
  width: 0;
}
.ML__accent-vec > span {
  position: relative;
  left: 0.24em;
}
.ML__mathlive {
  display: inline-block;
  direction: ltr;
  text-align: left;
  text-indent: 0;
  text-rendering: auto;
  font-family: KaTeX_Main, 'Times New Roman', serif;
  font-style: normal;
  font-size-adjust: none;
  font-stretch: normal;
  font-variant-caps: normal;
  letter-spacing: normal;
  line-height: 1.2;
  word-wrap: normal;
  word-spacing: normal;
  white-space: nowrap;
  text-shadow: none;
  -webkit-user-select: none;
  user-select: none;
  width: min-content;
}
.ML__mathlive .style-wrap {
  position: relative;
}
.ML__mathlive .mfrac,
.ML__mathlive .left-right {
  display: inline-block;
}
.ML__mathlive .vlist-t {
  display: inline-table;
  table-layout: fixed;
  border-collapse: collapse;
}
.ML__mathlive .vlist-r {
  display: table-row;
}
.ML__mathlive .vlist {
  display: table-cell;
  vertical-align: bottom;
  position: relative;
}
.ML__mathlive .vlist > span {
  display: block;
  height: 0;
  position: relative;
}
.ML__mathlive .vlist > span > span {
  display: inline-block;
}
.ML__mathlive .vlist > span > .pstrut {
  overflow: hidden;
  width: 0;
}
.ML__mathlive .vlist-t2 {
  margin-right: -2px;
}
.ML__mathlive .vlist-s {
  display: table-cell;
  vertical-align: bottom;
  font-size: 1px;
  width: 2px;
  min-width: 2px;
}
.ML__mathlive .msubsup {
  text-align: left;
}
.ML__mathlive .negativethinspace {
  display: inline-block;
  margin-left: -0.16667em;
  height: 0.71em;
}
.ML__mathlive .thinspace {
  display: inline-block;
  width: 0.16667em;
  height: 0.71em;
}
.ML__mathlive .mediumspace {
  display: inline-block;
  width: 0.22222em;
  height: 0.71em;
}
.ML__mathlive .thickspace {
  display: inline-block;
  width: 0.27778em;
  height: 0.71em;
}
.ML__mathlive .enspace {
  display: inline-block;
  width: 0.5em;
  height: 0.71em;
}
.ML__mathlive .quad {
  display: inline-block;
  width: 1em;
  height: 0.71em;
}
.ML__mathlive .qquad {
  display: inline-block;
  width: 2em;
  height: 0.71em;
}
.ML__mathlive .llap,
.ML__mathlive .rlap {
  width: 0;
  position: relative;
  display: inline-block;
}
.ML__mathlive .llap > .inner,
.ML__mathlive .rlap > .inner {
  position: absolute;
}
.ML__mathlive .llap > .fix,
.ML__mathlive .rlap > .fix {
  display: inline-block;
}
.ML__mathlive .llap > .inner {
  right: 0;
}
.ML__mathlive .rlap > .inner {
  left: 0;
}
.ML__mathlive .rule {
  display: inline-block;
  border: solid 0;
  position: relative;
  box-sizing: border-box;
}
.ML__mathlive .overline .overline-line,
.ML__mathlive .underline .underline-line {
  width: 100%;
}
.ML__mathlive .overline .overline-line:before,
.ML__mathlive .underline .underline-line:before {
  border-bottom-style: solid;
  border-bottom-width: 0.04em;
  content: '';
  display: block;
}
.ML__mathlive .overline .overline-line:after,
.ML__mathlive .underline .underline-line:after {
  border-bottom-style: solid;
  border-bottom-width: 0.04em;
  min-height: thin;
  /* There's a bug since Chrome 62 where 
            sub-pixel border lines don't draw at some zoom 
            levels (110%, 90%). Setting the min-height seems to work around it.
            */
  content: '';
  display: block;
  margin-top: -1px;
}
.ML__mathlive .stretchy {
  display: block;
  position: absolute;
  width: 100%;
  left: 0;
  overflow: hidden;
}
.ML__mathlive .stretchy:before,
.ML__mathlive .stretchy:after {
  content: '';
}
.ML__mathlive .stretchy svg {
  display: block;
  position: absolute;
  width: 100%;
  height: inherit;
  fill: currentColor;
  stroke: currentColor;
  fill-rule: nonzero;
  fill-opacity: 1;
  stroke-width: 1;
  stroke-linecap: butt;
  stroke-linejoin: miter;
  stroke-miterlimit: 4;
  stroke-dasharray: none;
  stroke-dashoffset: 0;
  stroke-opacity: 1;
}
.ML__mathlive .slice-1-of-2 {
  display: inline-flex;
  position: absolute;
  left: 0;
  width: 50.2%;
  overflow: hidden;
}
.ML__mathlive .slice-2-of-2 {
  display: inline-flex;
  position: absolute;
  right: 0;
  width: 50.2%;
  overflow: hidden;
}
.ML__mathlive .slice-1-of-3 {
  display: inline-flex;
  position: absolute;
  left: 0;
  width: 25.1%;
  overflow: hidden;
}
.ML__mathlive .slice-2-of-3 {
  display: inline-flex;
  position: absolute;
  left: 25%;
  width: 50%;
  overflow: hidden;
}
.ML__mathlive .slice-3-of-3 {
  display: inline-flex;
  position: absolute;
  right: 0;
  width: 25.1%;
  overflow: hidden;
}
.ML__mathlive .slice-1-of-1 {
  display: inline-flex;
  position: absolute;
  width: 100%;
  left: 0;
  overflow: hidden;
}
.ML__mathlive .nulldelimiter {
  width: 0.12em;
  display: inline-block;
}
.ML__mathlive .op-group {
  display: inline-block;
}
.ML__mathlive .op-symbol {
  position: relative;
}
.ML__mathlive .op-symbol.small-op {
  font-family: KaTeX_Size1;
}
.ML__mathlive .op-symbol.large-op {
  font-family: KaTeX_Size2;
}
.ML__mathlive .accent > .vlist > span {
  text-align: center;
}
.ML__mathlive .mtable .vertical-separator {
  display: inline-block;
  min-width: 1px;
  box-sizing: border-box;
}
.ML__mathlive .mtable .arraycolsep {
  display: inline-block;
}
.ML__mathlive .mtable .col-align-m > .vlist-t {
  text-align: center;
}
.ML__mathlive .mtable .col-align-c > .vlist-t {
  text-align: center;
}
.ML__mathlive .mtable .col-align-l > .vlist-t {
  text-align: left;
}
.ML__mathlive .mtable .col-align-r > .vlist-t {
  text-align: right;
}
.ML__error {
  display: inline-block;
  background-image: radial-gradient(ellipse at center, hsl(341, 100%, 40%), rgba(0, 0, 0, 0) 70%);
  background-color: hsla(341, 100%, 40%, 0.1);
  background-repeat: repeat-x;
  background-size: 3px 3px;
  padding-bottom: 3px;
  background-position: 0 100%;
}
.ML__error > .ML__error {
  background: transparent;
  padding: 0;
}
.ML__composition {
  background: #fff1c2;
  color: black;
  text-decoration: underline var(--caret-color-computed, var(--ML__caret-color));
}
.ML__placeholder {
  color: var(--placeholder-color, var(--ML__placeholder-color));
  opacity: var(--placeholder-opacity, 0.4);
  padding-left: 0.4ex;
  padding-right: 0.4ex;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}
.ML__notation {
  position: absolute;
  box-sizing: border-box;
}
.ML__container {
  min-height: auto !important;
}
.ML__prompt {
  border-radius: 2px;
}
.ML__editablePromptBox {
  outline: 1px solid #acacac;
  border-radius: 2px;
  background: field;
  color: fieldtext;
  z-index: -1;
}
.ML__focusedPromptBox {
  outline: highlight auto 1px;
}
.ML__lockedPromptBox {
  background-color: rgba(142, 142, 141, 0.4);
  z-index: -1;
}
.ML__correctPromptBox {
  outline: 1px solid var(--correct-color, var(--ML__correct-color));
  box-shadow: 0 0 5px var(--correct-color, var(--ML__correct-color));
}
.ML__incorrectPromptBox {
  outline: 1px solid var(--incorrect-color, var(--ML__incorrect-color));
  box-shadow: 0 0 5px var(--incorrect-color, var(--ML__incorrect-color));
}
`;

    function $t(t) {
      return {
        value: t.model.getValue(),
        selectionIsCollapsed: t.model.selectionIsCollapsed,
        canUndo: t.canUndo(),
        canRedo: t.canRedo()
      }
    }
    var xo = "mathlive#virtual-keyboard-message";

    function Pi(t) {
      var r;
      return !(t.type !== "message" || ((r = t.data) == null ? void 0 : r.type) !== xo)
    }
    var Zr = class {
      constructor() {
        this.targetOrigin = globalThis.origin;
        this.originValidator = "same-origin";
        window.addEventListener("message", this), this.sendMessage("proxy-created"), this.listeners = {}
      }
      static get singleton() {
        return this._singleton || (this._singleton = new Zr), this._singleton
      }
      set alphabeticLayout(e) {
        this.sendMessage("update-setting", {
          alphabeticLayout: e
        })
      }
      set layouts(e) {
        this.sendMessage("update-setting", {
          layouts: e
        })
      }
      set actionToolbar(e) {
        this.sendMessage("update-setting", {
          actionToolbar: e
        })
      }
      set container(e) {
        throw new Error("Container inside an iframe cannot be changed")
      }
      show() {
        this.sendMessage("show")
      }
      hide() {
        this.sendMessage("hide")
      }
      get visible() {
        return this._boundingRect.height > 0
      }
      set visible(e) {
        e ? this.show() : this.hide()
      }
      get boundingRect() {
        return this._boundingRect
      }
      executeCommand(e) {
        return this.sendMessage("execute-command", {
          command: e
        }), !0
      }
      updateToolbar(e) {
        this.sendMessage("update-toolbar", e)
      }
      connect() {
        this.sendMessage("connect")
      }
      disconnect() {
        this.sendMessage("disconnect")
      }
      addEventListener(e, r, i) {
        this.listeners[e] || (this.listeners[e] = new Set), this.listeners[e].has(r) || this.listeners[e].add(r)
      }
      dispatchEvent(e) {
        return !this.listeners[e.type] || this.listeners[e.type].size === 0 ? !0 : (this.listeners[e.type].forEach(r => {
          typeof r == "function" ? r(e) : r == null || r.handleEvent(e)
        }), !e.defaultPrevented)
      }
      removeEventListener(e, r, i) {
        this.listeners[e] && this.listeners[e].delete(r)
      }
      handleEvent(e) {
        if (Pi(e)) {
          if (!Xr(e.origin, this.originValidator)) throw new DOMException(`Message from unknown origin (${e.origin}) cannot be handled`, "SecurityError");
          let {
            action: r
          } = e.data;
          if (r === "execute-command") {
            let {
              command: i
            } = e.data;
            hr(i) === "virtual-keyboard" && this.executeCommand(i);
            return
          }
          if (r === "synchronize-proxy") {
            this._boundingRect = e.data.boundingRect;
            return
          }
          if (r === "geometry-changed") {
            this._boundingRect = e.data.boundingRect, this.dispatchEvent(new Event("geometrychange"));
            return
          }
        }
      }
      sendMessage(e, r = {}) {
        if (!window.top) throw new DOMException("A frame does not have access to the top window and can\u2018t communicate with the keyboard. Review virtualKeyboardTargetOrigin and originValidator on the mathfield embedded in an iframe", "SecurityError");
        window.top.postMessage(b({
          type: xo,
          action: e
        }, r), this.targetOrigin)
      }
    };

    function Yr(t, e, r) {
      r.default && (t.dataset.command = JSON.stringify(r.default)), r.alt && (t.dataset.commandAlt = JSON.stringify(r.alt)), r.shift && (t.dataset.commandShift = JSON.stringify(r.shift)), r.pressed && (t.dataset.commandPressed = JSON.stringify(r.pressed)), r.pressAndHold && (t.dataset.commandPressAndHold = JSON.stringify(r.pressAndHold));
      let i;
      je(t, "pointerdown:passive", o => {
        if (o.buttons !== 1) return;
        o.stopPropagation(), t.classList.add("is-pressed");
        let a = o.target;
        a.hasPointerCapture(o.pointerId) && a.releasePointerCapture(o.pointerId);
        let n = t.getAttribute("data-command-pressed");
        n && e(JSON.parse(n));
        let s = t.getAttribute("data-command-press-and-hold");
        s && (i && clearTimeout(i), i = setTimeout(() => {
          t.classList.contains("is-pressed") && (t.classList.remove("is-pressed"), t.classList.add("is-active"), e(JSON.parse(s)))
        }, 300))
      }), je(t, "pointerenter", o => {
        let a = o.target;
        a.hasPointerCapture(o.pointerId) && a.releasePointerCapture(o.pointerId), o.buttons === 1 && t.classList.add("is-pressed")
      }), je(t, "pointercancel", () => t.classList.remove("is-pressed")), je(t, "pointerleave", () => t.classList.remove("is-pressed")), je(t, "pointerup", o => {
        t.classList.remove("is-pressed"), t.classList.add("is-active"), setTimeout(() => t.classList.remove("is-active"), 150);
        let a = null;
        !a && o.altKey && (a = t.getAttribute("data-command-alt")), !a && o.shiftKey && (a = t.getAttribute("data-command-shift")), a || (a = t.getAttribute("data-command")), a && e(JSON.parse(a)), o.stopPropagation(), o.preventDefault()
      })
    }
    var ka = `@layer ML_keyboard {
  :where(:root) {
    --keyboard-height: 0;
    --keyboard-accent-color: #0b579d;
    --keyboard-background: #cacfd7;
    --keyboard-border: #ddd;
    --keyboard-padding-horizontal: 0px;
    --keyboard-padding-top: 5px;
    --keyboard-padding-bottom: 0px;
    --keyboard-toolbar-text: #2c2e2f;
    --keyboard-toolbar-text-active: var(--keyboard-accent-color);
    --keyboard-toolbar-background: transparent;
    --keyboard-toolbar-background-hover: #eee;
    --keyboard-toolbar-background-selected: transparent;
    --keycap-background: white;
    --keycap-background-hover: #f5f5f7;
    --keycap-background-active: white;
    --keycap-border: #e5e6e9;
    --keycap-border-bottom: #8d8f92;
    --keycap-text: #000;
    --keycap-text-active: #fff;
    --keycap-text-hover: #fff;
    --keycap-secondary-text: #000;
    --keycap-modifier-background: #a0a9b6;
    --keycap-modifier-background-hover: #949ead;
    --keycap-modifier-text: #060707;
    --keycap-modifier-border: #c5c9d0;
    --keycap-modifier-border-bottom: #989da6;
    --keycap-height: 62px;
    --keycap-font-size: clamp(16px, 4cqw, 24px);
    --keycap-small-font-size: calc(var(--keycap-font-size) * 0.8);
    --keycap-extra-small-font-size: calc(var(--keycap-font-size) / 1.42);
    --variant-panel-background: #fff;
    --variant-keycap-text: var(--keycap-text, #000);
    --variant-keycap-text-active: #fff;
    --variant-keycap-background-active: var(--keyboard-accent-color);
    --variant-keycap-length: 70px;
    --variant-keycap-font-size: 30px;
    --variant-keycap-aside-font-size: 12px;
  }
  body > .ML__keyboard {
    position: fixed;
    --keyboard-padding-bottom: calc(var(--keyboard-padding-bottom) + env(safe-area-inset-bottom, 0));
  }
  body > .ML__keyboard.is-visible > .MLK__backdrop {
    box-shadow: 0 -5px 6px rgba(0, 0, 0, 0.08);
    border-top: 1px solid var(--keyboard-border);
    transition: 0.28s cubic-bezier(0, 0, 0.2, 1);
    transition-property: transform, opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  }
  .ML__keyboard {
    position: relative;
    overflow: hidden;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: var(--keyboard-zindex, 105);
    pointer-events: none;
  }
  .MLK__backdrop {
    position: absolute;
    bottom: calc(-1 * var(--keyboard-height));
    width: 100%;
    height: var(--keyboard-height);
    box-sizing: border-box;
    padding-top: var(--keyboard-padding-top);
    padding-bottom: var(--keyboard-padding-bottom);
    padding-left: var(--keyboard-padding-horizontal);
    padding-right: var(--keyboard-padding-horizontal);
    opacity: 0;
    visibility: hidden;
    transform: translate(0, 0);
    background: var(--keyboard-background);
  }
  .ML__keyboard.is-visible > .MLK__backdrop {
    transform: translate(0, calc(-1 * var(--keyboard-height)));
    opacity: 1;
    visibility: visible;
  }
  .MLK__plate {
    position: absolute;
    bottom: 0;
    left: var(--keyboard-padding-horizontal);
    width: calc(100% - 2 * var(--keyboard-padding-horizontal));
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    container-type: inline-size;
    touch-action: none;
    -webkit-user-select: none;
    user-select: none;
    pointer-events: all;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    /* Size of toolbar labels */
    font-weight: 400;
    text-shadow: none;
  }
  .MLK__tex {
    font-family: KaTeX_Math, KaTeX_Main, 'Cambria Math', 'Asana Math', OpenSymbol, Symbola, STIX, Times, serif !important;
  }
  .MLK__tex-math {
    font-family: KaTeX_Math, 'Cambria Math', 'Asana Math', OpenSymbol, Symbola, STIX, Times, serif !important;
  }
  .MLK__layer {
    display: none;
    outline: none;
  }
  .MLK__layer.is-visible {
    display: flex;
    flex-flow: column;
  }
  /* Keyboard layouts are made or rows of keys... */
  .MLK__rows {
    border: 0;
    border-collapse: separate;
    clear: both;
    margin: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    overflow-x: auto;
    /* Keycap with (incl. margin) */
    --max-width: 102px;
    --margin: 6px;
    /* For the alignment of the text on some modifiers (e.g. shift) */
    /* Extra spacing between two adjacent keys */
  }
  .MLK__rows .small {
    font-size: 12px;
  }
  .MLK__rows .tex {
    font-family: KaTeX_Math, KaTeX_Main, 'Cambria Math', 'Asana Math', OpenSymbol, Symbola, STIX, Times, serif !important;
  }
  .MLK__rows .tex-math {
    font-family: KaTeX_Math, 'Cambria Math', 'Asana Math', OpenSymbol, Symbola, STIX, Times, serif !important;
  }
  .MLK__rows .big-op {
    font-size: calc(1.25 * var(--keycap-font-size, 20px));
  }
  .MLK__rows .small {
    font-size: var(--keycap-small-font-size, 16px);
  }
  .MLK__rows .bottom {
    justify-content: flex-end;
  }
  .MLK__rows .left {
    align-items: flex-start;
    padding-left: 12px;
  }
  .MLK__rows .right {
    align-items: flex-end;
    padding-right: 12px;
  }
  .MLK__rows .w0 {
    width: 0;
  }
  .MLK__rows .w5 {
    width: calc(min(var(--max-width), 10cqw) / 2 - var(--margin));
  }
  .MLK__rows .w15 {
    width: calc(15 * min(var(--max-width), 10cqw) / 10 - var(--margin));
  }
  .MLK__rows .w20 {
    width: calc(20 * min(var(--max-width), 10cqw) / 10 - var(--margin));
  }
  .MLK__rows .w50 {
    width: calc(50 * min(var(--max-width), 10cqw) / 10 - var(--margin));
  }
  .MLK__rows .MLK__keycap.w50 {
    font-size: 80%;
    padding-top: 10px;
    font-weight: 100;
  }
  .MLK__rows .separator {
    background: transparent;
    border: none;
    pointer-events: none;
  }
  .MLK__rows .bigfnbutton {
    font-size: var(--keycap-extra-small-font-size, 14px);
  }
  .MLK__rows .modifier,
  .MLK__rows .action {
    color: var(--keycap-modifier-text);
    background: var(--keycap-modifier-background);
    border-color: var(--keycap-modifier-border);
    border-bottom-color: var(--keycap-modifier-border-bottom);
    font-size: 65%;
    font-weight: 100;
  }
  .MLK__rows .modifier:hover,
  .MLK__rows .action:hover {
    background: var(--keycap-modifier-background-hover);
  }
  .MLK__rows .modifier.selected,
  .MLK__rows .action.selected {
    color: var(--keyboard-toolbar-text-active);
  }
  .MLK__rows .modifier.selected:hover,
  .MLK__rows .action.selected:hover,
  .MLK__rows .modifier.selected:active,
  .MLK__rows .action.selected:active,
  .MLK__rows .modifier.selected.is-pressed,
  .MLK__rows .action.selected.is-pressed,
  .MLK__rows .modifier.selected.is-active,
  .MLK__rows .action.selected.is-active {
    color: white;
  }
  .MLK__rows .action.font-glyph,
  .MLK__rows .modifier.font-glyph {
    font-size: 2em;
  }
  .MLK__rows .warning {
    height: 25px;
    width: 25px;
    min-height: 25px;
    min-width: 25px;
    background: #cd0030;
    color: white;
    border-radius: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -2px;
  }
  .MLK__rows .warning svg.svg-glyph {
    width: 16px;
    height: 16px;
  }
  .MLK__rows > ul {
    display: flex;
    flex-flow: row;
    list-style: none;
    height: var(--keycap-height, 62px);
    margin: 0 0 var(--margin) 0;
    padding: 0;
  }
  .MLK__rows li {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin-right: var(--margin);
    width: calc(min(var(--max-width), 10cqw) - var(--margin));
    height: var(--keycap-height, 62px);
    box-sizing: border-box;
    padding: 0;
    vertical-align: top;
    text-align: center;
    float: left;
    color: var(--keycap-text);
    fill: currentColor;
    font-size: var(--keycap-font-size, 20px);
    background: var(--keycap-background);
    border: 1px solid var(--keycap-border);
    border-bottom-color: var(--keycap-border-bottom);
    border-radius: 5px;
    cursor: pointer;
    /* Last key should be flush against the border */
    /* Keys with a variants panel */
    position: relative;
    overflow: hidden;
    -webkit-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  .MLK__rows li:hover {
    background: var(--keycap-background-hover);
  }
  .MLK__rows li .ML__mathlive {
    pointer-events: none;
  }
  .MLK__rows li:last-child {
    margin-right: 0;
  }
  .MLK__rows li svg.svg-glyph {
    margin: 8px 0;
    width: 20px;
    height: 20px;
  }
  .MLK__rows li.MLK__tex-math {
    font-size: 25px;
  }
  .MLK__rows li.is-pressed {
    background: var(--keycap-background-active);
    color: var(--keyboard-toolbar-text-active);
  }
  .MLK__rows li.MLK__keycap.is-active,
  .MLK__rows li.action.is-active,
  .MLK__rows li.MLK__keycap.is-pressed,
  .MLK__rows li.action.is-pressed {
    z-index: calc(var(--keyboard-zindex, 105) - 5);
    background: var(--keyboard-accent-color);
    color: #fff;
  }
  .MLK__rows li.modifier.is-active {
    background: var(--keyboard-toolbar-text-active);
    color: var(--keycap-text-active);
  }
  .MLK__rows li small {
    color: var(--keycap-secondary-text);
  }
  .MLK__rows li aside {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 10px;
    line-height: 10px;
    color: var(--keycap-secondary-text);
  }
  /* Add an attribute 'data-tooltip' to display a tooltip on hover.
Note there are a different set of tooltip rules for the keyboard toggle
(it's in a different CSS tree) */
  .MLK__tooltip {
    position: relative;
  }
  .MLK__tooltip::after {
    position: absolute;
    display: inline-table;
    content: attr(data-tooltip);
    top: inherit;
    bottom: 100%;
    width: max-content;
    max-width: 200px;
    padding: 8px 8px;
    background: #616161;
    color: #fff;
    text-align: center;
    z-index: 2;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 12px;
    transition: all 0.15s cubic-bezier(0.4, 0, 1, 1) 1s;
    opacity: 0;
    transform: scale(0.5);
  }
  .MLK__tooltip:hover {
    position: relative;
  }
  .MLK__tooltip:hover::after {
    opacity: 1;
    transform: scale(1);
  }
  .MLK__toolbar {
    align-self: center;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    width: 100%;
    max-width: 996px;
    min-height: 32px;
    /* Icons for undo/redo, etc. */
  }
  .MLK__toolbar svg {
    height: 20px;
    width: 20px;
  }
  .MLK__toolbar > .left {
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-flow: row;
  }
  .MLK__toolbar > .right {
    display: flex;
    justify-content: flex-end;
    flex-flow: row;
  }
  .MLK__toolbar > div > div {
    /* "button" in the toolbar */
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--keyboard-toolbar-text);
    fill: currentColor;
    background: var(--keyboard-toolbar-background);
    font-size: 125%;
    padding: 4px 15px;
    cursor: pointer;
    width: max-content;
    min-width: 42px;
    min-height: 22px;
    border: none;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 8px;
    padding-top: 8px;
    margin-top: 7px;
    margin-bottom: 8px;
    margin-left: 4px;
    margin-right: 4px;
    border-radius: 8px;
    box-shadow: none;
    border-bottom: 2px solid transparent;
  }
  .MLK__toolbar > div > div:not(.disabled):not(.selected):hover {
    background: var(--keyboard-toolbar-background-hover);
  }
  .MLK__toolbar > div > div.disabled svg,
  .MLK__toolbar > div > div.disabled:hover svg,
  .MLK__toolbar > div > div.disabled.is-pressed svg {
    color: var(--keyboard-toolbar-text);
    opacity: 0.2;
  }
  .MLK__toolbar > div > div:hover,
  .MLK__toolbar > div > div:active,
  .MLK__toolbar > div > div.is-pressed,
  .MLK__toolbar > div > div.is-active {
    color: var(--keyboard-toolbar-text-active);
  }
  .MLK__toolbar > div > div.selected {
    color: var(--keyboard-toolbar-text-active);
    background: var(--keyboard-toolbar-background-selected);
    border-radius: 0;
    border-bottom-color: var(--keyboard-toolbar-text-active);
    padding-bottom: 4px;
    margin-bottom: 12px;
  }
  /* This is the element that displays variants on press+hold */
  .MLK__variant-panel {
    visibility: hidden;
    position: fixed;
    bottom: auto;
    top: 0;
    box-sizing: content-box;
    transform: none;
    z-index: calc(var(--keyboard-zindex, 105) + 1);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    max-width: 286px;
    background: var(--variant-panel-background);
    text-align: center;
    border-radius: 6px;
    padding: 6px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transition: none;
  }
  .MLK__variant-panel.is-visible {
    visibility: visible;
  }
  .MLK__variant-panel.compact {
    --variant-keycap-length: 50px;
    --variant-keycap-font-size: 24px;
    --variant-keycap-aside-font-size: 10px;
  }
  .MLK__variant-panel ul {
    list-style: none;
    margin: 3px;
    padding: 0;
    display: flex;
    flex-flow: row wrap-reverse;
    justify-content: center;
  }
  .MLK__variant-panel li {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    font-size: var(--variant-keycap-font-size);
    height: var(--variant-keycap-length);
    width: var(--variant-keycap-length);
    box-sizing: border-box;
    margin: 0;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 5px;
    pointer-events: all;
    cursor: pointer;
    color: var(--variant-keycap-text);
    fill: currentColor;
  }
  @media (max-height: 412px) {
    .MLK__variant-panel li {
      font-size: 24px;
      height: 50px;
      width: 50px;
    }
  }
  .MLK__variant-panel li .ML__mathlive {
    pointer-events: none;
  }
  .MLK__variant-panel li:hover,
  .MLK__variant-panel li.is-pressed,
  .MLK__variant-panel li.is-active {
    background: var(--variant-keycap-background-active);
    color: var(--variant-keycap-text-active);
  }
  .MLK__variant-panel li.small {
    font-size: var(--keycap-small-font-size, 16px);
  }
  .MLK__variant-panel li.small-button {
    width: 42px;
    height: 42px;
    margin: 2px;
    background: #fbfbfb;
  }
  .MLK__variant-panel li.small-button:hover {
    background: var(--variant-keycap-background-active);
  }
  .MLK__variant-panel li.box > div,
  .MLK__variant-panel li.box > span {
    border: 1px dashed rgba(0, 0, 0, 0.24);
  }
  .MLK__variant-panel li .warning {
    min-height: 60px;
    min-width: 60px;
    background: #cd0030;
    color: white;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
  .MLK__variant-panel li .warning:hover,
  .MLK__variant-panel li .warning.is-pressed,
  .MLK__variant-panel li .warning.is-active {
    background: red;
  }
  .MLK__variant-panel li .warning svg.svg-glyph {
    width: 50px;
    height: 50px;
  }
  .MLK__variant-panel li aside {
    font-size: var(--variant-keycap-aside-font-size);
    line-height: 12px;
    opacity: 0.78;
    padding-top: 2px;
  }
  /* @xs breakpoint: iPhone 5 */
  @container (max-width: 414px) {
    .MLK__variant-panel {
      max-width: 320px;
    }
    .MLK__toolbar > div > div {
      font-size: 100%;
      padding: 0;
      margin-left: 2px;
      margin-right: 2px;
    }
    .MLK__rows > ul {
      height: 42px;
    }
    .MLK__rows > ul > li {
      width: calc(10cqw - 2px);
      height: 42px;
      margin-right: 2px;
    }
    .MLK__rows .w5 {
      width: calc(5cqw - 2px);
    }
    .MLK__rows .w15 {
      width: calc(15cqw - 2px);
    }
    .MLK__rows .w20 {
      width: calc(20cqw - 2px);
    }
    .MLK__rows .w50 {
      width: calc(50cqw - 2px);
    }
    .MLK__rows .separator {
      width: 2px;
      min-width: 2px;
    }
    .MLK__rows .modifier,
    .MLK__rows .action {
      font-size: 65%;
    }
  }
  @container (max-width: 744px) {
    .MLK__toolbar > div > div {
      padding-left: 0;
      padding-right: 0;
    }
    .MLK__tooltip::after {
      padding: 8px 16px;
      font-size: 16px;
    }
    .MLK__rows .warning {
      height: 16px;
      width: 16px;
      min-height: 16px;
      min-width: 16px;
    }
    .MLK__rows .warning svg.svg-glyph {
      width: 14px;
      height: 14px;
    }
    .MLK__rows .action.font-glyph,
    .MLK__rows .modifier.font-glyph {
      font-size: 16px;
    }
    .MLK__rows .fnbutton {
      font-size: 16px;
    }
    .MLK__rows .bigfnbutton {
      font-size: calc(var(--keycap-extra-small-font-size, 14px) / 1.55);
    }
    .MLK__rows .small {
      font-size: 13px;
    }
    .MLK__rows aside {
      display: none;
    }
  }
  /* Medium breakpoint: larger phones */
  @container (max-width: 768px) {
    .ML__keyboard {
      --keycap-height: 42px;
    }
    .MLK__rows > ul > small {
      font-size: 14px;
    }
  }
  @container (max-width: 1444px) {
    .MLK__rows .if-wide {
      display: none;
    }
  }
  @media (prefers-color-scheme: dark) {
    .ML__keyboard {
      --keyboard-accent-color: hsl(212, 100%, 50%);
      --keyboard-background: #151515;
      --keyboard-border: transparent;
      --keyboard-toolbar-text: #e3e4e8;
      --keyboard-toolbar-text-active: hsl(212, 100%, 60%);
      --keyboard-toolbar-background: transparent;
      --keyboard-toolbar-background-hover: #303030;
      --keyboard-toolbar-background-selected: transparent;
      --keycap-background: #1f2022;
      --keycap-background-hover: #2f3032;
      --keycap-background-active: #2f3032;
      --keycap-border: transparent;
      --keycap-border-bottom: transparent;
      --keycap-text: #e3e4e8;
      --keycap-text-active: #000;
      --keycap-secondary-text: #e7ebee;
      --keycap-modifier-background: #3d4144;
      --keycap-modifier-background-hover: #4d5154;
      --keycap-modifier-text: #e7ebee;
      --keycap-modifier-border: transparent;
      --keycap-modifier-border-bottom: transparent;
      --variant-panel-background: #303030;
      --variant-keycap-text: var(--keycap-text);
      --variant-keycap-text-active: #fff;
    }
  }
  /* Same as the media query, but with a class */
  [theme='dark'] .ML__keyboard {
    --keyboard-accent-color: hsl(212, 100%, 50%);
    --keyboard-background: #151515;
    --keyboard-border: transparent;
    --keyboard-toolbar-text: #e3e4e8;
    --keyboard-toolbar-text-active: hsl(212, 100%, 60%);
    --keyboard-toolbar-background: transparent;
    --keyboard-toolbar-background-hover: #303030;
    --keyboard-toolbar-background-selected: transparent;
    --keycap-background: #1f2022;
    --keycap-background-hover: #2f3032;
    --keycap-background-active: #2f3032;
    --keycap-border: transparent;
    --keycap-border-bottom: transparent;
    --keycap-text: #e3e4e8;
    --keycap-text-active: #000;
    --keycap-secondary-text: #e7ebee;
    --keycap-modifier-background: #3d4144;
    --keycap-modifier-background-hover: #4d5154;
    --keycap-modifier-text: #e7ebee;
    --keycap-modifier-border: transparent;
    --keycap-modifier-border-bottom: transparent;
    --variant-panel-background: #303030;
    --variant-keycap-text: var(--keycap-text);
    --variant-keycap-text-active: #fff;
  }
  [theme='light'] .ML__keyboard {
    --keyboard-accent-color: #0b579d;
    --keyboard-background: #cacfd7;
    --keyboard-border: #ddd;
    --keyboard-toolbar-text: #2c2e2f;
    --keyboard-toolbar-text-active: var(--keyboard-accent-color);
    --keyboard-toolbar-background: transparent;
    --keyboard-toolbar-background-hover: #eee;
    --keyboard-toolbar-background-selected: transparent;
    --keycap-background: white;
    --keycap-background-hover: #f5f5f7;
    --keycap-background-active: white;
    --keycap-border: #e5e6e9;
    --keycap-border-bottom: #8d8f92;
    --keycap-text: #000;
    --keycap-text-active: #fff;
    --keycap-text-hover: #fff;
    --keycap-secondary-text: #000;
    --keycap-modifier-background: #a0a9b6;
    --keycap-modifier-background-hover: #949ead;
    --keycap-modifier-text: #060707;
    --keycap-modifier-border: #c5c9d0;
    --keycap-modifier-border-bottom: #989da6;
    --variant-panel-background: #fff;
    --variant-keycap-text: var(--keycap-text, #000);
    --variant-keycap-text-active: #fff;
    --variant-keycap-background-active: var(--keyboard-accent-color);
  }
}
`;

    function Nc() {
      let t = String(new Error().stack).replace(/^Error.*\n/, "").split(`
`);
      if (t.length === 0) return console.error(`Can't use relative paths to specify assets location because the sourcefile location could not be determined (unexpected stack trace format "${new Error().stack}").`), "";
      let e = t[1],
        r = e.match(/http.*\.ts[\?:]/);
      return r && (e = t[2]), r = e.match(/(https?:.*):[0-9]+:[0-9]+/), r || (r = e.match(/at (.*(\.ts))[\?:]/), r || (r = e.match(/at (.*(\.mjs|\.js))[\?:]/))), r ? r[1] : (console.error(t), console.error(`Can't use relative paths to specify assets location because the source file location could not be determined (unexpected location "${e}").`), "")
    }
    var Di = null,
      fs, gs, Sa = ((gs = (fs = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : fs.currentScript) == null ? void 0 : gs.src) || Nc();
    async function vo(t) {
      if (/^(?:[a-z+]+:)?\/\//i.test(t)) return new URL(t).href;
      if (Di === null) try {
        let e = await fetch(Sa, {
          method: "HEAD"
        });
        e.status === 200 && (Di = e.url)
      } catch (e) {
        console.error(`Invalid URL "${t}" (relative to "${Sa}")`)
      }
      return new URL(t, Di != null ? Di : Sa).href
    }

    function Ic(t, e, r = {}) {
      return new FontFace(t, `url(${e}.woff2) format('woff2')`, r)
    }
    var qe = "not-loaded";
    async function ys() {
      return qe = "not-loaded", Tr()
    }
    async function Tr() {
      var e;
      if (qe !== "not-loaded") return;
      if (qe = "loading", (e = getComputedStyle(document.documentElement).getPropertyValue("--ML__static-fonts")) != null ? e : !1) {
        qe = "ready";
        return
      }
      if (document.body.classList.remove("ML__fonts-did-not-load"), "fonts" in document) {
        let r = ["KaTeX_Main", "KaTeX_Math", "KaTeX_AMS", "KaTeX_Caligraphic", "KaTeX_Fraktur", "KaTeX_SansSerif", "KaTeX_Script", "KaTeX_Typewriter", "KaTeX_Size1", "KaTeX_Size2", "KaTeX_Size3", "KaTeX_Size4"],
          i = Array.from(document.fonts).map(n => n.family);
        if (r.every(n => i.includes(n))) {
          qe = "ready";
          return
        }
        if (!window.MathfieldElement.fontsDirectory) {
          qe = "not-loaded";
          return
        }
        let o = await vo(window.MathfieldElement.fontsDirectory);
        if (!o) {
          document.body.classList.add("ML__fonts-did-not-load"), qe = "error";
          return
        }
        let a = [
          ["KaTeX_Main-Regular"],
          ["KaTeX_Main-BoldItalic", {
            style: "italic",
            weight: "bold"
          }],
          ["KaTeX_Main-Bold", {
            weight: "bold"
          }],
          ["KaTeX_Main-Italic", {
            style: "italic"
          }],
          ["KaTeX_Math-Italic", {
            style: "italic"
          }],
          ["KaTeX_Math-BoldItalic", {
            style: "italic",
            weight: "bold"
          }],
          ["KaTeX_AMS-Regular"],
          ["KaTeX_Caligraphic-Regular"],
          ["KaTeX_Caligraphic-Bold", {
            weight: "bold"
          }],
          ["KaTeX_Fraktur-Regular"],
          ["KaTeX_Fraktur-Bold", {
            weight: "bold"
          }],
          ["KaTeX_SansSerif-Regular", {
            style: "italic"
          }],
          ["KaTeX_SansSerif-Bold", {
            weight: "bold"
          }],
          ["KaTeX_SansSerif-Italic", {
            style: "italic"
          }],
          ["KaTeX_Script-Regular"],
          ["KaTeX_Typewriter-Regular"],
          ["KaTeX_Size1-Regular"],
          ["KaTeX_Size2-Regular"],
          ["KaTeX_Size3-Regular"],
          ["KaTeX_Size4-Regular"]
        ].map(n => Ic(n[0].replace(/-[a-zA-Z]+$/, ""), o + "/" + n[0], n[1]));
        try {
          (await Promise.all(a.map(s => {
            try {
              return s.load()
            } catch (l) {}
          }))).forEach(s => document.fonts.add(s)), qe = "ready";
          return
        } catch (n) {
          console.error(`MathLive: The math fonts could not be loaded from "${o}"`, {
            cause: n
          }), document.body.classList.add("ML__fonts-did-not-load")
        }
        qe = "error"
      }
    }
    var bs = {
        numeric: {
          label: "123",
          classes: "MLK__tex-math",
          tooltip: "keyboard.tooltip.numeric",
          layers: ["numeric"]
        },
        alphabetic: {
          label: "abc",
          classes: "MLK__tex-math",
          tooltip: "keyboard.tooltip.alphabetic",
          layers: ["lower-alphabetic", "upper-alphabetic"]
        },
        greek: {
          label: "&alpha;&beta;&gamma;",
          classes: "MLK__tex-math",
          tooltip: "keyboard.tooltip.greek",
          layers: ["lower-greek", "upper-greek"]
        },
        functions: {
          label: "f&thinsp;()",
          classes: "MLK__tex-math",
          tooltip: "keyboard.tooltip.functions",
          layers: ["functions"]
        },
        symbols: {
          label: "&infin;\u2260\u2208",
          classes: "MLK__tex-math",
          tooltip: "keyboard.tooltip.symbols",
          layers: ["symbols"]
        }
      },
      wo = {
        "\\varphi ": ["&Phi;", "\\Phi "],
        "\\varsigma ": ["&Sigma;", "\\Sigma "],
        "\\epsilon ": ["&#x0190;", '\\char"0190'],
        "\\rho ": ["&#x3A1", '\\char"3A1'],
        "\\tau ": ["&#x3A4;", '\\char"3A4'],
        "\\upsilon ": ["&Upsilon;", "\\Upsilon "],
        "\\theta ": ["&Theta;", "\\Theta "],
        "\\iota ": ["&Iota;", '\\char"399'],
        "\\omicron ": ["&#x039F;", '\\char"39F'],
        "\\pi ": ["&Pi;", "\\Pi "],
        "\\alpha ": ["&Alpha;", '\\char"391'],
        "\\sigma ": ["&Sigma;", "\\Sigma "],
        "\\delta ": ["&Delta;", "\\Delta "],
        "\\phi ": ["&#x03a6;", "\\Phi "],
        "\\gamma ": ["&Gamma;", "\\Gamma "],
        "\\eta ": ["&Eta;", '\\char"397'],
        "\\xi ": ["&Xi;", "\\Xi "],
        "\\kappa ": ["&Kappa;", '\\char"39A'],
        "\\lambda ": ["&Lambda;", "\\Lambda "],
        "\\zeta ": ["&Zeta;", '\\char"396'],
        "\\chi ": ["&Chi;", '\\char"3A7'],
        "\\psi ": ["&Psi;", "\\Psi "],
        "\\omega ": ["&Omega;", "\\Omega "],
        "\\beta ": ["&Beta;", '\\char"392'],
        "\\nu ": ["&Nu;", '\\char"39D'],
        "\\mu ": ["&Mu;", '\\char"39C']
      },
      _a = {
        numeric: `
<div class='MLK__rows'>
  <ul>
    <li class='MLK__keycap MLK__tex' data-variants='x-var'><i>x</i></li>
    <li class='MLK__keycap MLK__tex' data-variants='n-var'><i>n</i></li>
    <li class='separator w5'></li>
    <row name='numpad-1'/>
    <li class='separator w5'></li>
    <li class='MLK__keycap MLK__tex' data-latex='\\exponentialE' data-variants='ee'>e</li>
    <li class='MLK__keycap MLK__tex' data-latex='\\imaginaryI' data-variants='ii'>i</li>
    <li class='MLK__keycap MLK__tex' data-latex='\\pi' data-variants='numeric-pi'></li>
  </ul>
  <ul>
    <li class='MLK__keycap MLK__tex' data-key='<' data-variants='<'>&lt;</li>
    <li class='MLK__keycap MLK__tex' data-key='>' data-variants='>'>&gt;</li>
    <li class='separator w5'></li>
    <row name='numpad-2'/>
    <li class='separator w5'></li>
    <li class='MLK__keycap MLK__tex' data-latex='#@^{2}' data-latex='x^2'></li>
    <li class='MLK__keycap MLK__tex' data-variants='^' data-insert='#@^{#?}' data-latex='x^\\placeholder'></li>
    <li class='MLK__keycap MLK__tex small' data-insert='\\sqrt{#0}' data-latex='\\sqrt{#0}'></li>
  </ul>
  <ul>
    <li class='MLK__keycap MLK__tex' data-variants='(' >(</li>
    <li class='MLK__keycap MLK__tex' data-variants=')' >)</li>
    <li class='separator w5'></li>
    <row name='numpad-3'/>
    <li class='separator w5'></li>
    <li class='MLK__keycap small' data-variants='int' data-latex='\\int_0^\\infty'></li>
    <li class='MLK__keycap' data-latex='\\forall' data-variants='logic' ></li>
    <li class='action font-glyph bottom right' data-variants='delete' data-command='["performWithFeedback","deleteBackward"]'><svg class="svg-glyph"><use xlink:href="#svg-delete-backward" /></svg></li></ul>
  </ul>
  <ul>
    <li class='MLK__keycap' data-variants='foreground-color' data-command='["applyStyle",{"color":"red"}]'><span style='border-radius: 50%;width:22px;height:22px; border: 3px solid #cc2428; box-sizing: border-box'></span></li>
    <li class='MLK__keycap' data-variants='background-color' data-command='["applyStyle",{"backgroundColor":"yellow"}]'><span style='border-radius: 50%;width:22px;height:22px; background:#fff590; box-sizing: border-box'></span></li>
    <li class='separator w5'></li>
    <row name='numpad-4'/>
    <li class='separator w5'></li>
    <arrows/>
  </ul>
</div>
    `,
        "lower-alphabetic": `
<div class='MLK__rows'>
  <ul>
    <row name='numpad-1' class='if-wide'/>
    <row name='lower-1' shift-layer='upper-alphabetic'/>
  </ul>
  <ul>
    <row name='numpad-2' class='if-wide'/>
    <row name='lower-2'  shift-layer='upper-alphabetic''/>
  </ul>
  <ul>
    <row name='numpad-3' class='if-wide'/>
    <row name='lower-3'  shift-layer='upper-alphabetic''/>
  </ul>
  <ul>
    <row name='numpad-4' class='if-wide'/>
    <li class='MLK__keycap' >;</li>
    <li class='MLK__keycap' >,</li>
    <li class='MLK__keycap w50' data-key=' ' data-variants='space'>&nbsp;</li>
    <arrows/>
  </ul>
</div>`,
        "upper-alphabetic": `<div class='MLK__rows'>
<ul>
  <row name='numpad-1' class='if-wide'/>
  <row name='upper-1'  shift-layer='lower-alphabetic'/>
</ul>
<ul>
  <row name='numpad-2' class='if-wide'/>
  <row name='upper-2' shift-layer='lower-alphabetic'/>
</ul>
<ul>
  <row name='numpad-3' class='if-wide'/>
  <row name='upper-3' shift-layer='lower-alphabetic'/>
</ul>
<ul>
  <row name='numpad-4' class='if-wide'/>
  <li class='MLK__keycap' >;</li>
  <li class='MLK__keycap' data-variants='.'>;</li>
  <li class='MLK__keycap w50' data-key=' '>&nbsp;</li>
  <arrows/>
</ul>
</div>`,
        symbols: `
<div class='MLK__rows'>
  <ul>
    <row name='numpad-1' class='if-wide'/>
    <li class='MLK__keycap MLK__tex' data-variants='(' data-insert='\\lbrace '>{</li>
    <li class='MLK__keycap MLK__tex' data-variants=')' data-insert='\\rbrace '>}</li>
    <li class='separator w5'></li>
    <li class='MLK__keycap MLK__tex small' data-variants='xleftarrows' data-latex='\\leftarrow' ></li>
    <li class='MLK__keycap MLK__tex small' data-variants='xrightarrows' data-latex='\\rightarrow' ></li>
    <li class='MLK__keycap MLK__tex' data-variants='overline' data-latex='\\overline{#@}' data-aside='overline'></li>
    <li class='MLK__keycap MLK__tex' data-variants='underline' data-latex='\\underline{#@}' data-aside='underline'></li>
    <li class='MLK__keycap w15' data-insert='\\ulcorner#0\\urcorner '><span><sup>&#x250c;</sup><span><span style='color:#ddd'>o</span><sup>&#x2510;</sup></span><aside>ceil</aside></li>
    <li class='MLK__keycap MLK__tex' data-variants='nabla' data-insert='\\nabla '>&#x2207;<aside>nabla</aside></li>
    <li class='MLK__keycap MLK__tex' data-variants='infinity' data-insert='\\infty '>&#x221e;</li>

  </ul>
  <ul>
    <row name='numpad-2' class='if-wide'/>
    <li class='MLK__keycap MLK__tex' data-variants='(' data-insert='\\lbrack '>[</li>
    <li class='MLK__keycap MLK__tex' data-variants=')' data-insert='\\rbrack '>]</li>
    <li class='separator w5'></li>

    <li class='MLK__keycap MLK__tex' data-variants='in' data-insert='\\in '>&#x2208;</li>
    <li class='MLK__keycap MLK__tex' data-variants='!in' data-insert='\\notin '>&#x2209;</li>
    <li class='MLK__keycap MLK__tex' data-insert='\\Re '>&#x211c;<aside>Real</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\Im '>&#x2111;<aside>Imaginary</aside></li>
    <li class='MLK__keycap w15' data-insert='\\llcorner#0\\lrcorner '><span><sub>&#x2514;</sub><span style='color:#ddd'>o</span><sub>&#x2518;</sub></span><aside>floor</aside></li>

    <li class='MLK__keycap MLK__tex' data-insert='\\partial '>&#x2202;<aside>partial<br>derivative</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\emptyset '>&#x2205;<aside>empty set</aside></li>

  </ul>
  <ul>
    <row name='numpad-3' class='if-wide'/>
    <li class='MLK__keycap MLK__tex' data-variants='(' data-insert='\\langle '>&#x27e8;</li>
    <li class='MLK__keycap MLK__tex' data-variants=')' data-insert='\\rangle '>&#x27e9;</li>
    <li class='separator w5'></li>
    <li class='MLK__keycap MLK__tex' data-variants='subset' data-insert='\\subset '>&#x2282;</li>
    <li class='MLK__keycap MLK__tex' data-variants='superset' data-insert='\\supset '>&#x2283;</li>

    <li class='MLK__keycap MLK__tex' data-variants='accents' data-insert='\\vec{#@}' data-latex='\\vec{#?}' data-aside='vector'></li>
    <li class='MLK__keycap MLK__tex' data-variants='absnorm' data-insert='\\left| #0 \\right|' data-latex='\\left| #? \\right|' data-aside='abs'></li>

    <li class='MLK__keycap MLK__tex' data-key='!' data-variants='!'>!<aside>factorial</aside></li>
    <li class='MLK__keycap' data-latex='^{\\prime} '><span><sup><span><span style='color:#ddd'>o</span>&#x2032</sup></span><aside>prime</aside></li>

    <li class='action font-glyph bottom right w15'
        data-shifted='<span class="warning"><svg class="svg-glyph"><use xlink:href="#svg-trash" /></svg></span>'
        data-shifted-command='"deleteAll"'
        data-variants='delete' data-command='["performWithFeedback","deleteBackward"]'
    ><svg class="svg-glyph"><use xlink:href="#svg-delete-backward" /></svg></li>
  </ul>
  <ul>
    <row name='numpad-4' class='if-wide'/>
    <li class='MLK__keycap MLK__tex' data-insert=','>,</li>
    <li class='MLK__keycap MLK__tex' data-insert='\\cdot '>&#x22c5;<aside>centered dot</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\colon '>:<aside>colon</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\circ '>&#x2218;<aside>circle</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\approx '>&#x2248;<aside>approx.</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\ne '>&#x2260;</li>
    <li class='MLK__keycap MLK__tex' data-insert='\\pm '>&#x00b1;</li>
    <arrows/>
  </ul>
</div>`,
        "lower-greek": `
<div class='MLK__rows'>
  <ul><li class='MLK__keycap MLK__tex' data-insert='\\varphi '><i>&#x03c6;</i><aside>phi var.</aside></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\varsigma '><i>&#x03c2;</i><aside>sigma var.</aside></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\epsilon '><i>&#x03f5;</i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\rho '><i>&rho;</i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\tau '><i>&tau;</i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\upsilon '><i>&upsilon;</i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\theta '><i>&theta;</i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\iota '><i>&iota;</i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\omicron '>&omicron;</i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\pi '><i>&pi;</i></li>
  </ul>
  <ul><li class='MLK__keycap MLK__tex' data-insert='\\alpha ' data-shifted='&Alpha;' data-shifted-command='["insert","\\\\char\\"391"]'><i>&alpha;</i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\sigma '><i>&sigma;</i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\delta '><i>&delta;</i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\phi '><i>&#x03d5;</i></i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\gamma '><i>&gamma;</i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\eta '><i>&eta;</i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\xi '><i>&xi;</i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\kappa '><i>&kappa;</i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\lambda '><i>&lambda;</i></li>
  </ul>
  <ul><li class='shift modifier font-glyph bottom left w15 layer-switch' data-layer='upper-greek'><svg class="svg-glyph"><use xlink:href="#svg-shift" /></svg></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\zeta '><i>&zeta;</i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\chi '><i>&chi;</i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\psi '><i>&psi;</i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\omega '><i>&omega;</i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\beta '><i>&beta;</i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\nu '><i>&nu;</i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\mu '><i>&mu;</i></li>
      <li class='action font-glyph bottom right w15'
          data-shifted='<span class="warning"><svg class="svg-glyph"><use xlink:href="#svg-trash" /></svg></span>'
          data-shifted-command='"deleteAll"'
          data-variants='delete' data-command='["performWithFeedback","deleteBackward"]'
      ><svg class="svg-glyph"><use xlink:href="#svg-delete-backward" /></svg></li>
  </ul>
  <ul>
      <li class='MLK__keycap ' data-key=' '>&nbsp;</li>
      <li class='MLK__keycap'>,</li>
      <li class='MLK__keycap MLK__tex' data-insert='\\varepsilon '><i>&#x03b5;</i><aside>epsilon var.</aside></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\vartheta '><i>&#x03d1;</i><aside>theta var.</aside></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\varkappa '><i>&#x3f0;</i><aside>kappa var.</aside></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\varpi '><i>&#x03d6;<aside>pi var.</aside></i></li>
      <li class='MLK__keycap MLK__tex' data-insert='\\varrho '><i>&#x03f1;</i><aside>rho var.</aside></li>
      <arrows/>
  </ul>
</div>`,
        "upper-greek": `
<div class='MLK__rows'>
  <ul><li class='MLK__keycap MLK__tex' data-insert='\\Phi '>&Phi;<aside>phi</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\Sigma '>&Sigma;<aside>sigma</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\char"0190'>&#x0190;<aside>epsilon</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\char"3A1'>&#x3A1;<aside>rho</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\char"3A4'>&#x3A4;<aside>tau</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\Upsilon '>&Upsilon;<aside>upsilon</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\Theta '>&Theta;<aside>theta</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\char"399'>&Iota;<aside>iota</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\char"39F'>&#x039F;<aside>omicron</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\Pi '>&Pi;<aside>pi</aside></li></ul>
  <ul><li class='MLK__keycap MLK__tex' data-insert='\\char"391'>&#x391;<aside>alpha</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\Sigma '>&Sigma;<aside>sigma</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\Delta '>&Delta;<aside>delta</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\Phi '>&#x03a6;<aside>phi</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\Gamma '>&Gamma;<aside>gamma</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\char"397'>&Eta;<aside>eta</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\Xi '>&Xi;<aside>xi</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\char"39A'>&Kappa;<aside>kappa</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\Lambda '>&Lambda;<aside>lambda</aside></li></ul>
  <ul><li class='shift modifier font-glyph bottom left selected w15 layer-switch' data-layer='lower-greek'><svg class="svg-glyph"><use xlink:href="#svg-shift" /></svg></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\char"396'>&Zeta;<aside>zeta</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\char"3A7'>&Chi;<aside>chi</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\Psi '>&Psi;<aside>psi</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\Omega '>&Omega;<aside>omega</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\char"392'>&Beta;<aside>beta</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\char"39D'>&Nu;<aside>nu</aside></li>
    <li class='MLK__keycap MLK__tex' data-insert='\\char"39C'>&Mu;<aside>mu</aside></li>
    <li class='action font-glyph bottom right w15' data-command='["performWithFeedback","deleteBackward"]'><svg class="svg-glyph"><use xlink:href="#svg-delete-backward" /></svg></li></ul>
<ul>
    <li class='separator w10'>&nbsp;</li>
    <li class='MLK__keycap'>.</li>
    <li class='MLK__keycap w50' data-key=' '>&nbsp;</li>
    <arrows/>
  </ul>
</div>`,
        functions: `
<div class='MLK__rows'>
  <ul>
    <li class='fnbutton' data-insert='\\sin'></li>
    <li class='fnbutton' data-insert='\\sin^{-1}'></li>
    <li class='fnbutton' data-insert='\\ln'></li>
    <li class='fnbutton' data-insert='\\exponentialE^{#?}'></li>
    <li class='bigfnbutton' data-insert='\\operatorname{lcm}(#?)' data-latex='\\operatorname{lcm}()'></li>
    <li class='bigfnbutton' data-insert='\\operatorname{ceil}(#?)' data-latex='\\operatorname{ceil}()'></li>
    <li class='bigfnbutton' data-insert='\\lim_{n\\to\\infty}'></li>
    <li class='bigfnbutton' data-insert='\\int'></li>
    <li class='bigfnbutton' data-insert='\\operatorname{abs}(#?)' data-latex='\\operatorname{abs}()'></li>
  </ul>
  <ul>
    <li class='fnbutton' data-latex='\\cos'></li>
    <li class='fnbutton' data-latex='\\cos^{-1}'></li>
    <li class='fnbutton' data-latex='\\log'></li>
    <li class='fnbutton' data-latex='10^{#?}'></li>
    <li class='bigfnbutton' data-insert='\\operatorname{gcd}(#?)' data-latex='\\operatorname{gcd}()'></li>
    <li class='bigfnbutton' data-insert='\\operatorname{floor}(#?)' data-latex='\\operatorname{floor}()'></li>
    <li class='bigfnbutton' data-latex='\\sum_{n\\mathop=0}^{\\infty}'></li>
    <li class='bigfnbutton' data-latex='\\int_{0}^{\\infty}'></li>
    <li class='bigfnbutton' data-insert='\\operatorname{sign}(#?)' data-latex='\\operatorname{sign}()'></li>
  </ul>
  <ul>
    <li class='fnbutton' data-latex='\\tan'></li>
    <li class='fnbutton' data-latex='\\tan^{-1}'></li>
    <li class='fnbutton' data-latex='\\log_{#?}'></li>
    <li class='fnbutton' data-latex='\\sqrt[#?]{#0}'></li>
    <li class='bigfnbutton' data-insert='#0 \\mod' data-latex='\\mod'></li>
    <li class='bigfnbutton' data-insert='\\operatorname{round}(#?) ' data-latex='\\operatorname{round}()'></li>
    <li class='bigfnbutton' data-insert='\\prod_{n\\mathop=0}^{\\infty}' data-latex='{ \\prod_{n=0}^{\\infty}}'></li>
    <li class='bigfnbutton' data-insert='\\frac{\\differentialD #0}{\\differentialD x}'></li>
    <li class='action font-glyph bottom right' data-command='["performWithFeedback","deleteBackward"]'><svg class="svg-glyph"><use xlink:href="#svg-delete-backward" /></svg></li></ul>
  <ul>
    <li class='fnbutton'>(</li>
    <li class='fnbutton'>)</li>
    <li class='fnbutton' data-insert='^{#?}' data-latex='x^{#?}'></li>
    <li class='fnbutton' data-insert='_{#?}' data-latex='x_{#?}'></li>
    <li class='MLK__keycap w20 ' data-key=' '>&nbsp;</li>
    <arrows/>
  </ul>
</div>`,
        style: `
<div class='MLK__rows'>
  <ul>
    <li class='MLK__keycap' data-variants='foreground-color' data-command='["applyStyle",{"color":"red"}]'><span style='border-radius: 50%;width:22px;height:22px; border: 3px solid #cc2428'></span></li>
    <li class='MLK__keycap' data-variants='background-color' data-command='["applyStyle",{"backgroundColor":"yellow"}]'><span style='border-radius: 50%;width:22px;height:22px; background:#fff590'></span></li>
    <li class='separator w5'></li>
    <li class='MLK__keycap' data-command='["applyStyle",{"size":"3"}]' data-latex='\\scriptsize\\text{small}'></li>
    <li class='MLK__keycap' data-command='["applyStyle",{"size":"5"}]' data-latex='\\scriptsize\\text{normal}'></li>
    <li class='MLK__keycap' data-command='["applyStyle",{"size":"9"}]' data-latex='\\huge\\text{big}'></li>
    <li class='separator w5'></li>
    <li class='MLK__keycap' data-latex='\\langle' data-command='["insert", "\\\\langle", {"smartFence":true}]'></li>
  </ul>
  <ul>
    <li class='MLK__keycap' data-command='["applyStyle",{"series":"l"}]' data-latex='\\fontseries{l}\\text{Ab}'></li>
    <li class='MLK__keycap' data-command='["applyStyle",{"series":"m"}]' data-latex='\\fontseries{m}\\text{Ab}'></li>
    <li class='MLK__keycap' data-command='["applyStyle",{"series":"b"}]' data-latex='\\fontseries{b}\\text{Ab}'></li>
    <li class='MLK__keycap' data-command='["applyStyle",{"series":"bx"}]' data-latex='\\fontseries{bx}\\text{Ab}'></li>
    <li class='MLK__keycap' data-command='["applyStyle",{"series":"sb"}]' data-latex='\\fontseries{sb}\\text{Ab}'></li>
    <li class='MLK__keycap' data-command='["applyStyle",{"series":"c"}]' data-latex='\\fontseries{c}\\text{Ab}'></li>
  </ul>
  <ul>
    <li class='MLK__keycap' data-command='["applyStyle",{"shape":"up"}]' data-latex='\\textup{Ab}'></li>
    <li class='MLK__keycap' data-command='["applyStyle",{"shape":"it"}]' data-latex='\\textit{Ab}'></li>
    <li class='MLK__keycap' data-command='["applyStyle",{"shape":"sl"}]' data-latex='\\textsl{Ab}'></li>
    <li class='MLK__keycap' data-command='["applyStyle",{"shape":"sc"}]' data-latex='\\textsc{Ab}'></li>
    <li class='separator w5'></li>
    <li class='MLK__keycap' data-insert='\\emph{#@} ' data-latex='\\text{\\emph{emph}}'></li>
  </ul>
  <ul>
    <li class='MLK__keycap' data-command='["applyStyle",{"fontFamily":"cmr"}]' data-latex='\\textrm{Az}'></li>
    <li class='MLK__keycap' data-command='["applyStyle",{"fontFamily":"cmtt"}]' data-latex='\\texttt{Az}'></li>
    <li class='MLK__keycap' data-command='["applyStyle",{"fontFamily":"cmss"}]' data-latex='\\textsf{Az}'></li>

    <li class='MLK__keycap' data-command='["applyStyle",{"fontFamily":"bb"}]'  data-latex='\\mathbb{AZ}'></li>
    <li class='MLK__keycap' data-command='["applyStyle",{"fontFamily":"scr"}]'  data-latex='\\mathscr{AZ}'></li>
    <li class='MLK__keycap' data-command='["applyStyle",{"fontFamily":"cal"}]' data-latex='\\mathcal{A1}'></li>
    <li class='MLK__keycap' data-command='["applyStyle",{"fontFamily":"frak"}]' data-latex='\\mathfrak{Az}'></li>
  </ul>
</div>`
      };
    var Pt = class {
      constructor(e) {
        var r, i;
        this.preventOverlayClose = (r = e == null ? void 0 : e.preventOverlayClose) != null ? r : !1, this.translucent = (i = e == null ? void 0 : e.translucent) != null ? i : !1, this.state = "closed"
      }
      get element() {
        if (this._element) return this._element;
        let e = document.createElement("div");
        return e.setAttribute("role", "presentation"), e.style.position = "fixed", e.style.contain = "content", e.style.top = "0", e.style.left = "0", e.style.right = "0", e.style.bottom = "0", e.style.zIndex = "var(--scrim-zindex, 10099)", e.style.outline = "none", this.translucent ? (e.style.background = "rgba(255, 255, 255, .2)", e.style.backdropFilter = "contrast(40%)") : e.style.background = "transparent", this._element = e, e
      }
      open(e) {
        var a;
        if (this.state !== "closed") return;
        this.state = "opening", this.savedActiveElement = xs();
        let {
          element: r
        } = this;
        ((a = e == null ? void 0 : e.root) != null ? a : document.body).appendChild(r), r.addEventListener("click", this), document.addEventListener("touchmove", this, !1), document.addEventListener("scroll", this, !1);
        let i = window.innerWidth - document.documentElement.clientWidth;
        this.savedMarginRight = document.body.style.marginRight, this.savedOverflow = document.body.style.overflow, document.body.style.overflow = "hidden";
        let o = Number.parseFloat(getComputedStyle(document.body).marginRight);
        document.body.style.marginRight = `${o+i}px`, e != null && e.child && r.append(e.child), this.state = "open"
      }
      close() {
        var r, i, o, a;
        if (this.state !== "open") return;
        this.state = "closing", typeof this.onClose == "function" && this.onClose();
        let {
          element: e
        } = this;
        e.removeEventListener("click", this), document.removeEventListener("touchmove", this, !1), document.removeEventListener("scroll", this, !1), e.remove(), document.body.style.overflow = (r = this.savedOverflow) != null ? r : "", document.body.style.marginRight = (i = this.savedMarginRight) != null ? i : "", xs() !== this.savedActiveElement && ((a = (o = this.savedActiveElement) == null ? void 0 : o.focus) == null || a.call(o)), e.innerHTML = "", this.state = "closed"
      }
      handleEvent(e) {
        this.preventOverlayClose || (e.target === this._element && e.type === "click" ? (this.close(), e.preventDefault(), e.stopPropagation()) : e.target === document && (e.type === "touchmove" || e.type === "scroll") && (this.close(), e.preventDefault(), e.stopPropagation()))
      }
    };

    function xs() {
      var e;
      let t = document.activeElement;
      for (;
        (e = t == null ? void 0 : t.shadowRoot) != null && e.activeElement;) t = t.shadowRoot.activeElement;
      return t
    }
    var ko = {
      0: ["\\emptyset", "\\varnothing", "\\infty", {
        latex: "#?_0",
        insert: "#@_0"
      }, "\\circ", "\\bigcirc", "\\bullet"],
      2: ["\\frac{1}{2}", {
        latex: "#?^2",
        insert: "#@^2"
      }],
      3: ["\\frac{1}{3}", {
        latex: "#?^3",
        insert: "#@^3"
      }],
      ".": [".", ",", ";", "\\colon", {
        latex: ":",
        aside: "ratio"
      }, {
        latex: "\\cdotp",
        aside: "center dot",
        class: "box"
      }, {
        latex: "\\cdots",
        aside: "center ellipsis",
        class: "box"
      }, {
        latex: "\\ldotp",
        aside: "low dot",
        class: "box"
      }, {
        latex: "\\ldots",
        aside: "low ellipsis",
        class: "box"
      }, {
        latex: "\\vdots",
        aside: "",
        class: "box"
      }, {
        latex: "\\ddots",
        aside: "",
        class: "box"
      }, "\\odot", "\\oslash", "\\circledcirc"],
      "*": ["\\cdot", "\\ast", "\\star", "\\bigstar", "\\ltimes", "\\rtimes", "\\rightthreetimes", "\\leftthreetimes", "\\intercal", "\\prod", {
        latex: "\\prod_{n\\mathop=0}^{\\infty}",
        class: "small"
      }],
      "+": ["\\pm", "\\mp", "\\sum", {
        latex: "\\sum_{n\\mathop=0}^{\\infty}",
        class: "small"
      }, "\\dotplus", "\\oplus"],
      "-": ["\\pm", "\\mp", "\\ominus", "\\vert #0  \\vert"],
      "/": ["\\divideontimes", "/", "\\div", "\\%"],
      "(": ["\\left( #0\\right)", "\\left[ #0\\right]", "\\left\\{ #0\\right\\}", "\\left\\langle #0\\right\\rangle", "\\lfloor", "\\llcorner", "(", "\\lbrack", "\\lvert", "\\lVert", "\\lgroup", "\\langle", "\\lceil", "\\ulcorner", "\\lmoustache", "\\lbrace"],
      ")": ["\\rfloor", "\\lrcorner", ")", "\\rbrack", "\\rvert", "\\rVert", "\\rgroup", "\\rangle", "\\rceil", "\\urcorner", "\\rmoustache", "\\rbrace"],
      "=": ["\\cong", "\\asymp", "\\equiv", "\\differencedelta", "\\varpropto", "\\thickapprox", "\\approxeq", "\\thicksim", "\\backsim", "\\eqsim", "\\simeq", "\\Bumpeq", "\\bumpeq", "\\doteq", "\\Doteq", "\\fallingdotseq", "\\risingdotseq", "\\coloneq", "\\eqcirc", "\\circeq", "\\triangleq", "\\between"],
      "!=": ["\\neq", "\\ncong", "", "\\nsim"],
      "<": ["\\leq", "\\leqq", "\\lneqq", "\\ll", "\\lessgtr", "\\nless", "\\nleq", "\\lesssim", "\\precsim", "\\prec", "\\nprec", "\\preccurlyeq", "\\lessdot"],
      ">": ["\\geq", "\\geqq", "\\gneqq", "\\gg", "\\gtrless", "\\ngtr", "\\ngeq", "\\gtrsim", "\\succsim", "\\succ", "\\nsucc", "\\succcurlyeq", "\\gtrdot"],
      in: ["\\owns"],
      "!in": ["\\backepsilon"],
      subset: ["\\subseteq", "\\nsubset", "\\nsubseteq"],
      superset: ["\\supseteq", "\\nsupset", "\\nsupseteq"],
      infinity: ["\\aleph_0", "\\aleph_1", "\\omega", "\\mathfrak{m}"],
      "numeric-pi": ["\\prod", "\\theta", "\\rho", "\\sin", "\\cos", "\\tan"],
      ee: ["\\times 10^{#?}", "\\ln", "\\log_{10}", "\\log"],
      "^": ["_{#?}"],
      int: [{
        latex: "\\int_{#?}^{#?}",
        class: "small"
      }, {
        latex: "\\int",
        class: "small"
      }, {
        latex: "\\smallint",
        class: "small"
      }, {
        latex: "\\iint",
        class: "small"
      }, {
        latex: "\\iiint",
        class: "small"
      }, {
        latex: "\\oint",
        class: "small"
      }, {
        latex: "\\dfrac{\\rd}{\\rd x}",
        class: "small"
      }, {
        latex: "\\frac{\\partial}{\\partial x}",
        class: "small"
      }, "\\capitalDifferentialD", "\\rd", "\\partial"],
      nabla: ["\\nabla\\times", "\\nabla\\cdot", "\\nabla^{2}"],
      "!": ["!!", "\\Gamma", "\\Pi"],
      accents: ["\\bar{#@}", "\\vec{#@}", "\\hat{#@}", "\\check{#@}", "\\dot{#@}", "\\ddot{#@}", "\\mathring{#@}", "\\breve{#@}", "\\acute{#@}", "\\tilde{#@}", "\\grave{#@}"],
      underline: ["\\underbrace{#@}", "\\underlinesegment{#@}", "\\underleftrightarrow{#@}", "\\underrightarrow{#@}", "\\underleftarrow{#@}", "\\undergroup{#@}"],
      overline: ["\\overbrace{#@}", "\\overlinesegment{#@}", "\\overleftrightarrow{#@}", "\\overrightarrow{#@}", "\\overleftarrow{#@}", "\\overgroup{#@}"],
      xleftarrows: ["\\xlongequal{#@}", "\\xleftrightarrow{#@}", "\\xLeftrightarrow{#@}", "\\xleftrightharpoons{#@}", "\\xLeftarrow{#@}", "\\xleftharpoonup{#@}", "\\xleftharpoondown{#@}", "\\xtwoheadleftarrow{#@}", "\\xhookleftarrow{#@}", "\\xtofrom{#@}", "\\xleftequilibrium{#@}", "\\xrightleftarrows{#@}"],
      xrightarrows: ["\\xrightarrow{#@}", "\\xlongequal{#@}", "\\xleftrightarrow{#@}", "\\xLeftrightarrow{#@}", "\\xleftrightharpoons{#@}", "\\xRightarrow{#@}", "\\xrightharpoonup{#@}", "\\xrightharpoondown{#@}", "\\xtwoheadrightarrow{#@}", "\\xrightleftharpoons{#@}", "\\xhookrightarrow{#@}", "\\xmapsto{#@}", "\\xrightequilibrium{#@}", "\\xrightleftarrows{#@}"],
      A: [{
        latex: "\\aleph",
        aside: "aleph"
      }, {
        latex: "\\forall",
        aside: "for all"
      }],
      a: [{
        latex: "\\aleph",
        aside: "aleph"
      }, {
        latex: "\\forall",
        aside: "for all"
      }],
      b: [{
        latex: "\\beth",
        aside: "beth"
      }],
      B: [{
        latex: "\\beth",
        aside: "beth"
      }],
      c: [{
        latex: "\\C",
        aside: "set of complex numbers"
      }],
      d: [{
        latex: "\\daleth",
        aside: "daleth"
      }],
      D: [{
        latex: "\\daleth",
        aside: "daleth"
      }],
      e: [{
        latex: "\\exponentialE",
        aside: "exponential e"
      }, {
        latex: "\\exists",
        aside: "there is"
      }, {
        latex: "\\nexists",
        aside: "there isn\u2019t"
      }],
      g: [{
        latex: "\\gimel",
        aside: "gimel"
      }],
      G: [{
        latex: "\\gimel",
        aside: "gimel"
      }],
      h: [{
        latex: "\\hbar",
        aside: "h bar"
      }, {
        latex: "\\hslash",
        aside: "h slash"
      }],
      i: [{
        latex: "\\imaginaryI",
        aside: "imaginary i"
      }],
      j: [{
        latex: "\\imaginaryJ",
        aside: "imaginary j"
      }],
      l: [{
        latex: "\\ell",
        aside: "ell"
      }],
      n: [{
        latex: "\\mathbb{N}",
        aside: "set of natural numbers"
      }],
      p: [{
        latex: "\\mathbb{P}",
        aside: "set of primes"
      }],
      q: [{
        latex: "\\mathbb{Q}",
        aside: "set of rational numbers"
      }],
      r: [{
        latex: "\\mathbb{R}",
        aside: "set of real numbers"
      }],
      z: [{
        latex: "\\mathbb{Z}",
        aside: "set of integers"
      }],
      "x-var": ["y", "z", "t", "r", {
        latex: "f(#?)",
        class: "small"
      }, {
        latex: "g(#?)",
        class: "small"
      }, "x^2", "x^n", "x_n", "x_{n+1}", "x_i", "x_{i+1}"],
      "n-var": ["i", "j", "p", "k", "a", "u"],
      ii: ["\\Re", "\\Im", "\\imaginaryJ", "\\Vert #0 \\Vert"],
      logic: [{
        latex: "\\exists",
        aside: "there is"
      }, {
        latex: "\\nexists",
        aside: "there isn\u2019t"
      }, {
        latex: "\\ni",
        aside: "such that"
      }, {
        latex: "\\Colon",
        aside: "such that"
      }, {
        latex: "\\implies",
        aside: "implies"
      }, {
        latex: "\\impliedby",
        aside: "implied by"
      }, {
        latex: "\\iff",
        aside: "if and only if"
      }, {
        latex: "\\land",
        aside: "and"
      }, {
        latex: "\\lor",
        aside: "or"
      }, {
        latex: "\\oplus",
        aside: "xor"
      }, {
        latex: "\\lnot",
        aside: "not"
      }, {
        latex: "\\downarrow",
        aside: "nor"
      }, {
        latex: "\\uparrow",
        aside: "nand"
      }, {
        latex: "\\curlywedge",
        aside: "nor"
      }, {
        latex: "\\bar\\curlywedge",
        aside: "nand"
      }, {
        latex: "\\therefore",
        aside: "therefore"
      }, {
        latex: "\\because",
        aside: "because"
      }, {
        latex: "^\\biconditional",
        aside: "biconditional"
      }, "\\leftrightarrow", "\\Leftrightarrow", "\\to", "\\models", "\\vdash", "\\gets", "\\dashv", "\\roundimplies"],
      "set-operators": ["\\cap", "\\cup", "\\setminus", "\\smallsetminus", "\\complement"],
      "set-relations": ["\\in", "\\notin", "\\ni", "\\owns", "\\subset", "\\supset", "\\subseteq", "\\supseteq", "\\subsetneq", "\\supsetneq", "\\varsubsetneq", "\\subsetneqq", "\\nsubset", "\\nsupset", "\\nsubseteq", "\\nsupseteq"],
      space: [{
        latex: '\\char"203A\\!\\char"2039',
        insert: "\\!",
        aside: "negative thin space<br>\u207B\xB3\u29F8\u2081\u2088 em"
      }, {
        latex: '\\unicode{"203A}\\,\\unicode{"2039}',
        insert: "\\,",
        aside: "thin space<br>\xB3\u29F8\u2081\u2088 em"
      }, {
        latex: '\\unicode{"203A}\\:\\unicode{"2039}',
        insert: "\\:",
        aside: "medium space<br>\u2074\u29F8\u2081\u2088 em"
      }, {
        latex: '\\unicode{"203A}\\;\\unicode{"2039}',
        insert: "\\;",
        aside: "thick space<br>\u2075\u29F8\u2081\u2088 em"
      }, {
        latex: '\\unicode{"203A}\\ \\unicode{"2039}',
        insert: "\\ ",
        aside: "\u2153 em"
      }, {
        latex: '\\unicode{"203A}\\enspace\\unicode{"2039}',
        insert: "\\enspace",
        aside: "\xBD em"
      }, {
        latex: '\\unicode{"203A}\\quad\\unicode{"2039}',
        insert: "\\quad",
        aside: "1 em"
      }, {
        latex: '\\unicode{"203A}\\qquad\\unicode{"2039}',
        insert: "\\qquad",
        aside: "2 em"
      }],
      delete: [{
        label: '<span class="warning"><svg class="svg-glyph"><use xlink:href="#svg-trash" /></svg></span>',
        command: "deleteAll"
      }],
      "->|": []
    };

    function vs(t) {
      var s, l;
      let e = $c(t),
        r = document.createElement("div");
      r.setAttribute("aria-hidden", "true"), r.className = "ML__keyboard MLK__variant-panel", e.length >= 14 ? r.style.width = "236px" : e.length >= 7 ? r.style.width = "286px" : e.length === 4 || e.length === 2 ? r.style.width = "146px" : e.length === 1 ? r.style.width = "86px" : r.style.width = "146px", r.style.height = "auto";
      let i = "";
      for (let c of e) i += "<li", typeof c == "string" ? i += ' data-latex="' + c.replace(/"/g, "&quot;") + '"' : (c.latex && (i += ' data-latex="' + c.latex.replace(/"/g, "&quot;") + '"'), c.content && (i += ' data-content="' + c.content.replace(/"/g, "&quot;") + '"'), c.insert && (i += ' data-insert="' + c.insert.replace(/"/g, "&quot;") + '"'), c.command && (typeof c.command == "string" ? i += ` data-command="${c.command.replace(/"/g,"&quot;")}"` : i += " data-command='" + JSON.stringify(c.command).replace(/"/g, "&quot;") + "'"), c.aside && (i += ` data-aside="${c.aside.replace(/"/g,"&quot;")}"`), c.class && (i += ` data-classes="${c.class}"`)), i += ">", i += typeof c == "string" ? c : (s = c.label) != null ? s : "", i += "</li>";
      i = "<ul>" + i + "</ul>", r.innerHTML = So.createHTML(i);
      let o = $e.singleton;
      Ma(o, [...r.querySelectorAll("li")], "performVariant"), Pt.scrim || (Pt.scrim = new Pt), Pt.scrim.open({
        root: o.container,
        child: r
      });
      let a = (l = o == null ? void 0 : o.element) == null ? void 0 : l.querySelector('.MLK__rows ul li[data-variants="' + t + '"]'),
        n = a == null ? void 0 : a.getBoundingClientRect();
      if (n) {
        n.top - r.clientHeight < 0 && (r.style.width = "auto", e.length <= 6 ? r.style.height = "56px" : e.length <= 12 ? r.style.height = "108px" : e.length <= 18 ? r.style.height = "205px" : r.classList.add("compact"));
        let c = (n.top - r.clientHeight + 5).toString() + "px",
          u = Math.max(0, Math.min(window.innerWidth - r.offsetWidth, (n.left + n.right - r.offsetWidth) / 2)) + "px";
        r.style.transform = "translate(" + u + "," + c + ")", r.classList.add("is-visible")
      }
      return !1
    }

    function fr() {
      var e;
      let t = document.querySelector(".MLK__variant-panel");
      return t && (t.classList.remove("is-visible"), t.innerHTML = ""), (e = Pt.scrim) == null || e.close(), !1
    }

    function qc(t) {
      if (t === "foreground-color") {
        let e = [];
        for (let r of Object.keys(ui)) return e.push({
          class: "small-button",
          content: '<span style="border-radius:50%;width:32px;height:32px; box-sizing: border-box; border: 3px solid ' + ui[r] + '"></span>',
          command: ["applyStyle", {
            color: r
          }]
        }), e
      }
      if (t === "background-color") {
        let e = [];
        for (let r of Object.keys(ci)) e.push({
          class: "small-button",
          content: '<span style="border-radius:50%;width:32px;height:32px; background:' + ci[r] + '"></span>',
          command: ["applyStyle", {
            backgroundColor: r
          }]
        });
        return e
      }
      if (/^[A-Z]$/.test(t)) {
        let e = [];
        return e.unshift({
          latex: "\\mathbb{" + t + "}",
          aside: "blackboard",
          insert: "\\mathbb{" + t + "}"
        }), e.unshift({
          latex: "\\mathbf{" + t + "}",
          aside: "bold",
          insert: "\\mathbf{" + t + "}"
        }), e.unshift({
          latex: "\\mathsf{" + t + "}",
          aside: "sans",
          insert: "\\mathsf{" + t + "}"
        }), e.unshift({
          latex: "\\mathtt{" + t + "}",
          aside: "monospace",
          insert: "\\mathtt{" + t + "}"
        }), e.unshift({
          latex: "\\mathcal{" + t + "}",
          aside: "calligraphy",
          insert: "\\mathcal{" + t + "}"
        }), e.unshift({
          latex: "\\mathfrak{" + t + "}",
          aside: "fraktur",
          insert: "\\mathfrak{" + t + "}"
        }), e
      }
      if (/^[a-z]$/.test(t)) {
        let e = [];
        return e.unshift({
          latex: "\\mathsf{" + t + "}",
          aside: "sans",
          insert: "\\mathsf{" + t + "}"
        }), e.unshift({
          latex: "\\mathbf{" + t + "}",
          aside: "bold",
          insert: "\\mathbf{" + t + "}"
        }), e.unshift({
          latex: "\\mathtt{" + t + "}",
          aside: "monospace",
          insert: "\\mathtt{" + t + "}"
        }), e.unshift({
          latex: "\\mathfrak{" + t + "}",
          aside: "fraktur",
          insert: "\\mathfrak{" + t + "}"
        }), e
      }
      if (/^[0-9]$/.test(t)) {
        let e = [];
        return e.unshift({
          latex: "\\mathsf{" + t + "}",
          aside: "sans",
          insert: "\\mathsf{" + t + "}"
        }), e.unshift({
          latex: "\\mathbf{" + t + "}",
          aside: "bold",
          insert: "\\mathbf{" + t + "}"
        }), e.unshift({
          latex: "\\mathtt{" + t + "}",
          aside: "monospace",
          insert: "\\mathtt{" + t + "}"
        }), e.unshift({
          latex: "\\mathfrak{" + t + "}",
          aside: "fraktur",
          insert: "\\mathfrak{" + t + "}"
        }), e
      }
    }

    function $c(t) {
      var e;
      return ko[t] || (ko[t] = (e = qc(t)) != null ? e : []), ko[t]
    }

    function ws(t, e) {
      ko[t] = e
    }

    function ti() {
      fr();
      let t = $e.singleton.element.querySelectorAll(".MLK__layer.is-visible .MLK__keycap, .MLK__layer.is-visible .action");
      if (t)
        for (let e of t) {
          e.classList.remove("is-active"), e.classList.remove("is-pressed");
          let r = e.getAttribute("data-unshifted-content");
          r && (e.innerHTML = ae.createHTML(r), e.dataset.unshiftedContent = "");
          let i = e.getAttribute("data-unshifted-command");
          i && (e.dataset.command = i, e.dataset.unshiftedCommand = "")
        }
      return !1
    }

    function Vc(t) {
      return typeof t == "string" ? t : Object.entries(t).map(([e, r]) => `${e}:${r} !important`).join(";")
    }

    function Hc(t) {
      return Object.keys(t).map(e => `${e} {${Vc(t[e])}}`).join("")
    }

    function ks(t, e) {
      t = t.replace(/(^|[^\\])#@/g, "$1#?");
      let r = Ct(),
        i = new g("root", r);
      i.body = he(t, r, {
        parseMode: "math",
        args: e
      });
      let o = new E({
          registers: r.registers
        }, {
          fontSize: nt
        }, "displaystyle"),
        a = Zt(_t(new v(i.render(o), {
          classes: "ML__base"
        }), o));
      return St(a, {
        classes: "ML__mathlive"
      }).toMarkup()
    }

    function _o(t) {
      return typeof t == "string" && _a[t] ? _o({
        markup: _a[t],
        id: t
      }) : typeof t == "string" ? [{
        markup: t,
        id: "ML__layer_" + Date.now().toString(36).slice(-2) + Math.floor(Math.random() * 1e5).toString(36)
      }] : Array.isArray(t) ? t.map(e => _o(e)).flat() : [t]
    }

    function La(t) {
      if (typeof t == "string") return La(bs[t]);
      if ("rows" in t && Array.isArray(t.rows)) return "layers" in t, P(b({}, t), {
        layers: [{
          rows: t.rows,
          id: "ML__layer_" + Date.now().toString(36).slice(-2) + Math.floor(Math.random() * 1e5).toString(36)
        }],
        rows: void 0
      });
      if ("markup" in t && typeof t.markup == "string") return P(b({}, t), {
        layers: _o(t.markup)
      });
      let e = b({}, t);
      return "layers" in t && (e.layers = _o(t.layers)), e
    }

    function Gc(t, e) {
      var i;
      let r = '<div class="left">';
      if (t.layouts.length > 1)
        for (let [o, a] of t.layouts.entries()) {
          let n = La(a),
            s = [o === e ? "selected" : "layer-switch"];
          n.tooltip && s.push("MLK__tooltip"), n.classes && s.push(...n.classes.split(" ")), r += `<div class="${s.join(" ")}"`, n.tooltip && (r += " data-tooltip='" + ((i = Kt(n.tooltip)) != null ? i : n.tooltip) + "' "), o !== e && (r += `data-layer="${n.layers[0].id}"`), r += `>${n.label}</div>`
        }
      return r += "</div>", r += '<div class="ML__toolbar-action right"></div>', r
    }

    function Ss(t, e) {
      let r = "";
      if (t.actionToolbar === "none") return "";
      let o = [];
      e.selectionIsCollapsed ? o.push("undo", "redo", "pasteFromClipboard") : o.push("cutToClipboard", "copyToClipboard", "pasteFromClipboard");
      let a = {
        undo: `<div class='action ${e.canUndo===!1?"disabled":""}'
          data-command='"undo"'
          data-tooltip='${Kt("tooltip.undo")}'>
          <svg><use xlink:href='#svg-undo' /></svg>
      </div>`,
        redo: `<div class='action ${e.canRedo===!1?"disabled":""}'
          data-command='"redo"'
          data-tooltip='${Kt("tooltip.redo")}'>
          <svg><use xlink:href='#svg-redo' /></svg>
      </div>`,
        cutToClipboard: `
        <div class='action'
            data-command='"cutToClipboard"'
            data-tooltip='${Kt("tooltip.cut to clipboard")}'>
            <svg><use xlink:href='#svg-cut' /></svg>
        </div>
    `,
        copyToClipboard: `
        <div class='action'
            data-command='"copyToClipboard"'
            data-tooltip='${Kt("tooltip.copy to clipboard")}'>
            <svg><use xlink:href='#svg-copy' /></svg>
        </div>
    `,
        pasteFromClipboard: `
        <div class='action'
            data-command='"pasteFromClipboard"'
            data-tooltip='${Kt("tooltip.paste from clipboard")}'>
            <svg><use xlink:href='#svg-paste' /></svg>
        </div>
    `
      };
      return r += o.map(n => a[n]).join(""), r
    }

    function Ma(t, e, r) {
      var i, o;
      for (let a of e) {
        let n;
        a.getAttribute("data-latex") ? n = ks(a.getAttribute("data-latex").replace(/&quot;/g, '"'), () => "\\placeholder{}") : a.getAttribute("data-insert") && a.innerHTML === "" ? n = ks(a.getAttribute("data-insert").replace(/&quot;/g, '"'), () => "\\placeholder{}") : a.getAttribute("data-content") && (n = a.getAttribute("data-content").replace(/&quot;/g, '"')), a.getAttribute("data-aside") && (n = (n != null ? n : "") + "<aside>" + a.getAttribute("data-aside").replace(/&quot;/g, '"') + "</aside>"), n !== void 0 && (a.innerHTML = ae.createHTML(n)), a.getAttribute("data-classes") && a.classList.add(a.getAttribute("data-classes"));
        let s = (i = a.getAttribute("data-insert")) == null ? void 0 : i.replace(/&quot;/g, '"');
        s && wo[s] && (a.dataset.shifted = wo[s][0], a.dataset.shiftedCommand = JSON.stringify(["insertAndUnshiftKeyboardLayer", wo[s][1]]));
        let l, c = a.getAttribute("data-command");
        if (c)
          if (/^[a-zA-Z]+$/.test(c)) l = c;
          else try {
            l = JSON.parse(c)
          } catch (u) {} else a.getAttribute("data-insert") ? l = ["insert", a.getAttribute("data-insert"), {
            focus: !0,
            feedback: !0,
            scrollIntoView: !0,
            mode: "math",
            format: "latex",
            resetStyle: !0
          }] : a.getAttribute("data-latex") ? l = ["insert", a.getAttribute("data-latex"), {
            focus: !0,
            feedback: !0,
            scrollIntoView: !0,
            mode: "math",
            format: "latex",
            resetStyle: !0
          }] : l = ["typedText", (o = a.getAttribute("data-key")) != null ? o : a.textContent, {
            focus: !0,
            feedback: !0,
            simulateKeystroke: !0
          }];
        if (l) {
          r && (l = [r, l]);
          let u = {
              default: l
            },
            d = a.getAttribute("data-variants");
          d && (u = {
            default: l,
            pressAndHold: ["showVariantsPanel", d]
          }), Yr(a, m => t.executeCommand(m), u)
        }
      }
    }

    function Jc(t, e) {
      var l, c, u, d;
      let r = {
          qwerty: {
            "lower-1": "qwertyuiop",
            "lower-2": " asdfghjkl ",
            "lower-3": "^zxcvbnm~",
            "upper-1": "QWERTYUIOP",
            "upper-2": " ASDFGHJKL ",
            "upper-3": "^ZXCVBNM~",
            "numpad-1": "789/",
            "numpad-2": "456*",
            "numpad-3": "123-",
            "numpad-4": "0.=+"
          },
          azerty: {
            "lower-1": "azertyuiop",
            "lower-2": "qsdfghjklm",
            "lower-3": "^ wxcvbn ~",
            "upper-1": "AZERTYUIOP",
            "upper-2": "QSDFGHJKLM",
            "upper-3": "^ WXCVBN ~"
          },
          qwertz: {
            "lower-1": "qwertzuiop",
            "lower-2": " asdfghjkl ",
            "lower-3": "^yxcvbnm~",
            "upper-1": "QWERTZUIOP",
            "upper-2": " ASDFGHJKL",
            "upper-3": "^YXCVBNM~"
          },
          dvorak: {
            "lower-1": "^  pyfgcrl ",
            "lower-2": "aoeuidhtns",
            "lower-3": "qjkxbmwvz~",
            "upper-1": "^  PYFGCRL ",
            "upper-2": "AOEUIDHTNS",
            "upper-3": "QJKXBMWVZ~"
          },
          colemak: {
            "lower-1": " qwfpgjluy ",
            "lower-2": "arstdhneio",
            "lower-3": "^zxcvbkm~",
            "upper-1": " QWFPGNLUY ",
            "upper-2": "ARSTDHNEIO",
            "upper-3": "^ZXCVBKM~"
          }
        },
        i = t.alphabeticLayout;
      if (i === "auto") {
        let m = pr();
        m && (i = m.virtualLayout), (!i || i === "auto") && (i = (l = {
          fr: "azerty",
          be: "azerty",
          al: "qwertz",
          ba: "qwertz",
          cz: "qwertz",
          de: "qwertz",
          hu: "qwertz",
          sk: "qwertz",
          ch: "qwertz"
        } [W.locale.slice(0, 2)]) != null ? l : "qwerty")
      }
      let o = (c = r[i]) != null ? c : r.qwerty,
        a = e,
        n;
      a = a.replace(/<arrows\/>/g, `
        <li class='action' data-command='["performWithFeedback","moveToPreviousChar"]'
            data-shifted='<svg class="svg-glyph"><use xlink:href="#svg-angle-double-left" /></svg>'
            data-shifted-command='["performWithFeedback","extendToPreviousChar"]'>
            <svg class="svg-glyph"><use xlink:href='#svg-arrow-left' /></svg>
        </li>
        <li class='action' data-command='["performWithFeedback","moveToNextChar"]'
            data-shifted='<svg class="svg-glyph"><use xlink:href="#svg-angle-double-right" /></svg>'
            data-shifted-command='["performWithFeedback","extendToNextChar"]'>
            <svg class="svg-glyph"><use xlink:href='#svg-arrow-right' /></svg>
        </li>
        <li class='action' data-command='["performWithFeedback","commit"]'>
        <svg class="svg-glyph"><use xlink:href='#svg-commit' /></svg></li>`);
      let s = a.match(/(<row\s+)(.*)((?:<\/row|\/)>)/);
      for (; s;) {
        n = "";
        let m = s[2].match(/[a-zA-Z][a-zA-Z\d-]*=(['"])(.*?)\1/g),
          h = {};
        if (m)
          for (let y of m) {
            let w = y.match(/([a-zA-Z][a-zA-Z\d-]*)=(['"])(.*?)\2/);
            w && (h[w[1]] = w[3])
          }
        let f = o[h.name];
        if (f || (f = r.qwerty[h.name]), !f) console.error("MathLive: Unknown roman keyboard row:", h.name);
        else
          for (let y of f) {
            let w = (u = h.class) != null ? u : "";
            w && (w = ` ${w}`), y === "~" ? (n += "<li class='action font-glyph bottom right ", n += f.length - (f.match(/ /g) || []).length / 2 === 10 ? "w10" : "w15", n += `' data-shifted='<span class="warning"><svg class="svg-glyph"><use xlink:href="#svg-trash" /></svg></span>'
                        data-shifted-command='"deleteAll"'
                        data-variants='delete' data-command='["performWithFeedback","deleteBackward"]'
                        ><svg class="svg-glyph"><use xlink:href="#svg-delete-backward" /></svg></li>`) : y === " " ? n += "<li class='separator w5'></li>" : y === "^" ? n += "<li class='shift modifier font-glyph bottom left w15 layer-switch' data-layer='" + h["shift-layer"] + `'><svg class="svg-glyph"><use xlink:href="#svg-shift" /></svg></li>` : y === "/" ? n += `<li class="MLK__keycap big-op ${w}" data-variants="/" data-insert='\\frac{#@}{#?}'>&divide;</li>` : y === "*" ? n += `<li class="MLK__keycap big-op ${w}" data-variants="*" data-insert='\\times '>&times;</li>` : y === "-" ? n += `<li class="MLK__keycap  big-op ${w}" data-variants="-" data-key='-'>&#x2212;</li>` : y === "." ? n += "<li class='MLK__keycap big-op " + w + `' data-variants='.' data-command='"insertDecimalSeparator"'>` + ((d = t.decimalSeparator) != null ? d : ".") + "</li>" : y === "+" ? n += `<li class="MLK__keycap big-op ${w}" data-variants="+" data-key="-">+</li>` : y === "=" ? n += `<li class="MLK__keycap big-op ${w}" data-variants="=" data-key="-">=</li>` : n += `<li class="MLK__keycap ${w}" data-variants="${y}">${y}</li>`
          }
        a = a.replace(new RegExp(s[1] + s[2] + s[3]), n), s = a.match(/(<row\s+)(.*)((?:<\/row|\/)>)/)
      }
      return a
    }
    var Qr, ei, Aa;

    function Wc() {
      ei || (Aa || (Aa = Xe(ka).toString(36)), ei = Ze(null, ka, Aa)), Qr || (Qr = Ze(null, Ie, Xe(Ie).toString(36)), Tr())
    }

    function _s() {
      Qr == null || Qr.release(), Qr = null, ei == null || ei.release(), ei = null
    }
    var Uc = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">

<symbol id="svg-delete-backward" viewBox="0 0 576 512">
  <path d="M432.1 208.1L385.9 256L432.1 303C442.3 312.4 442.3 327.6 432.1 336.1C423.6 346.3 408.4 346.3 399 336.1L352 289.9L304.1 336.1C295.6 346.3 280.4 346.3 271 336.1C261.7 327.6 261.7 312.4 271 303L318.1 256L271 208.1C261.7 199.6 261.7 184.4 271 175C280.4 165.7 295.6 165.7 304.1 175L352 222.1L399 175C408.4 165.7 423.6 165.7 432.1 175C442.3 184.4 442.3 199.6 432.1 208.1V208.1zM512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64L512 64zM528 128C528 119.2 520.8 112 512 112H205.3C201 112 196.9 113.7 193.9 116.7L54.63 256L193.9 395.3C196.9 398.3 201 400 205.3 400H512C520.8 400 528 392.8 528 384V128z"/>
</symbol>

<symbol id="svg-shift" viewBox="0 0 384 512">
  <path d="M2.438 252.3C7.391 264.2 19.06 272 32 272h80v160c0 26.51 21.49 48 48 48h64C250.5 480 272 458.5 272 432v-160H352c12.94 0 24.61-7.797 29.56-19.75c4.953-11.97 2.219-25.72-6.938-34.88l-160-176C208.4 35.13 200.2 32 192 32S175.6 35.13 169.4 41.38l-160 176C.2188 226.5-2.516 240.3 2.438 252.3zM192 86.63L313.4 224H224v208H160V224H70.63L192 86.63z"/>
</symbol>

<symbol id="svg-commit" viewBox="0 0 512 512">
  <path d="M135 432.1l-128-128C2.344 300.3 0 294.2 0 288s2.344-12.28 7.031-16.97l128-128c9.375-9.375 24.56-9.375 33.94 0s9.375 24.56 0 33.94L81.94 264H464v-208C464 42.75 474.8 32 488 32S512 42.75 512 56V288c0 13.25-10.75 24-24 24H81.94l87.03 87.03c9.375 9.375 9.375 24.56 0 33.94S144.4 442.3 135 432.1z"/>
</symbol>

<symbol id="svg-command" viewBox="0 0 640 512">
  <path d="M34.495 36.465l211.051 211.05c4.686 4.686 4.686 12.284 0 16.971L34.495 475.535c-4.686 4.686-12.284 4.686-16.97 0l-7.071-7.07c-4.686-4.686-4.686-12.284 0-16.971L205.947 256 10.454 60.506c-4.686-4.686-4.686-12.284 0-16.971l7.071-7.07c4.686-4.687 12.284-4.687 16.97 0zM640 468v-10c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h328c6.627 0 12-5.373 12-12z"/>
</symbol>

<symbol id="svg-undo" viewBox="0 0 512 512">
  <path d="M20 8h10c6.627 0 12 5.373 12 12v110.625C85.196 57.047 165.239 7.715 256.793 8.001 393.18 8.428 504.213 120.009 504 256.396 503.786 393.181 392.834 504 256 504c-63.926 0-122.202-24.187-166.178-63.908-5.113-4.618-5.354-12.561-.482-17.433l7.069-7.069c4.503-4.503 11.749-4.714 16.482-.454C150.782 449.238 200.935 470 256 470c117.744 0 214-95.331 214-214 0-117.744-95.331-214-214-214-82.862 0-154.737 47.077-190.289 116H180c6.627 0 12 5.373 12 12v10c0 6.627-5.373 12-12 12H20c-6.627 0-12-5.373-12-12V20c0-6.627 5.373-12 12-12z"/>
</symbol>
<symbol id="svg-redo" viewBox="0 0 512 512">
  <path d="M492 8h-10c-6.627 0-12 5.373-12 12v110.625C426.804 57.047 346.761 7.715 255.207 8.001 118.82 8.428 7.787 120.009 8 256.396 8.214 393.181 119.166 504 256 504c63.926 0 122.202-24.187 166.178-63.908 5.113-4.618 5.354-12.561.482-17.433l-7.069-7.069c-4.503-4.503-11.749-4.714-16.482-.454C361.218 449.238 311.065 470 256 470c-117.744 0-214-95.331-214-214 0-117.744 95.331-214 214-214 82.862 0 154.737 47.077 190.289 116H332c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h160c6.627 0 12-5.373 12-12V20c0-6.627-5.373-12-12-12z"/>
</symbol>
<symbol id="svg-arrow-left" viewBox="0 0 320 512">
  <path d="M206.7 464.6l-183.1-191.1C18.22 267.1 16 261.1 16 256s2.219-11.97 6.688-16.59l183.1-191.1c9.152-9.594 24.34-9.906 33.9-.7187c9.625 9.125 9.938 24.37 .7187 33.91L73.24 256l168 175.4c9.219 9.5 8.906 24.78-.7187 33.91C231 474.5 215.8 474.2 206.7 464.6z"/>
</symbol>
<symbol id="svg-arrow-right" viewBox="0 0 320 512">
  <path d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"/>
</symbol>
<symbol id="svg-tab" viewBox="0 0 448 512">
  <path d="M32 217.1c0-8.8 7.2-16 16-16h144v-93.9c0-7.1 8.6-10.7 13.6-5.7l143.5 143.1c6.3 6.3 6.3 16.4 0 22.7L205.6 410.4c-5 5-13.6 1.5-13.6-5.7v-93.9H48c-8.8 0-16-7.2-16-16v-77.7m-32 0v77.7c0 26.5 21.5 48 48 48h112v61.9c0 35.5 43 53.5 68.2 28.3l143.6-143c18.8-18.8 18.8-49.2 0-68L228.2 78.9c-25.1-25.1-68.2-7.3-68.2 28.3v61.9H48c-26.5 0-48 21.6-48 48zM436 64h-8c-6.6 0-12 5.4-12 12v360c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12z"/>
</symbol>
<symbol id="svg-paste" viewBox="0 0 512 512"><path d="M160 32c11.6 0 21.3 8.2 23.5 19.2C185 58.6 191.6 64 199.2 64H208c8.8 0 16 7.2 16 16V96H96V80c0-8.8 7.2-16 16-16h8.8c7.6 0 14.2-5.4 15.7-12.8C138.7 40.2 148.4 32 160 32zM64 64h2.7C65 69 64 74.4 64 80V96c0 17.7 14.3 32 32 32H224c17.7 0 32-14.3 32-32V80c0-5.6-1-11-2.7-16H256c17.7 0 32 14.3 32 32h32c0-35.3-28.7-64-64-64H210.6c-9-18.9-28.3-32-50.6-32s-41.6 13.1-50.6 32H64C28.7 32 0 60.7 0 96V384c0 35.3 28.7 64 64 64H192V416H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM288 480c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32h96v56c0 22.1 17.9 40 40 40h56V448c0 17.7-14.3 32-32 32H288zM416 165.3L474.7 224H424c-4.4 0-8-3.6-8-8V165.3zM448 512c35.3 0 64-28.7 64-64V235.9c0-12.7-5.1-24.9-14.1-33.9l-59.9-59.9c-9-9-21.2-14.1-33.9-14.1H288c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H448z"/></symbol>
<symbol id="svg-cut" viewBox="0 0 512 512"><path d="M485.6 444.2L333.6 314.9C326.9 309.2 326.1 299.1 331.8 292.4C337.5 285.6 347.6 284.8 354.4 290.5L506.4 419.8C513.1 425.5 513.9 435.6 508.2 442.4C502.5 449.1 492.4 449.9 485.6 444.2zM485.7 67.76C492.5 62.07 502.5 62.94 508.2 69.69C513.9 76.45 513.1 86.55 506.3 92.24L208.5 343.1C218.3 359.7 224 379.2 224 400C224 461.9 173.9 512 112 512C50.14 512 0 461.9 0 400C0 338.1 50.14 288 112 288C141.5 288 168.4 299.4 188.4 318.1L262.2 256L188.4 193.9C168.4 212.6 141.5 224 112 224C50.14 224 0 173.9 0 112C0 50.14 50.14 0 112 0C173.9 0 224 50.14 224 112C224 132.8 218.3 152.3 208.5 168.9L287 235.1L485.7 67.76zM32 112C32 156.2 67.82 192 112 192C156.2 192 192 156.2 192 112C192 67.82 156.2 32 112 32C67.82 32 32 67.82 32 112zM112 480C156.2 480 192 444.2 192 400C192 355.8 156.2 320 112 320C67.82 320 32 355.8 32 400C32 444.2 67.82 480 112 480z"/></symbol>
<symbol id="svg-copy" viewBox="0 0 512 512"><path d="M272 416C263.2 416 256 423.2 256 432V448c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32V192c0-17.67 14.33-32 32-32h112C184.8 160 192 152.8 192 144C192 135.2 184.8 128 176 128H63.99c-35.35 0-64 28.65-64 64l.0098 256C0 483.3 28.65 512 64 512h160c35.35 0 64-28.65 64-64v-16C288 423.2 280.8 416 272 416zM502.6 86.63l-77.25-77.25C419.4 3.371 411.2 0 402.7 0H288C252.7 0 224 28.65 224 64v256c0 35.35 28.65 64 64 64h160c35.35 0 64-28.65 64-64V109.3C512 100.8 508.6 92.63 502.6 86.63zM416 45.25L466.7 96H416V45.25zM480 320c0 17.67-14.33 32-32 32h-160c-17.67 0-32-14.33-32-32V64c0-17.67 14.33-32 32-32h96l.0026 64c0 17.67 14.33 32 32 32H480V320z"/>
</symbol>
<symbol id="svg-angle-double-right" viewBox="0 0 320 512">
  <path d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17zm128-17l-117.8-116c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17L255.3 256 153.1 356.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l117.8-116c4.6-4.7 4.6-12.3-.1-17z"/>
</symbol>
<symbol id="svg-angle-double-left" viewBox="0 0 320 512">
  <path d="M153.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L192.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L153 264.5c-4.6-4.7-4.6-12.3.1-17zm-128 17l117.8 116c4.7 4.7 12.3 4.7 17 0l7.1-7.1c4.7-4.7 4.7-12.3 0-17L64.7 256l102.2-100.4c4.7-4.7 4.7-12.3 0-17l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L25 247.5c-4.6 4.7-4.6 12.3.1 17z"/>
</symbol>
<symbol id="svg-trash" viewBox="0 0 448 512">
  <path d="M336 64l-33.6-44.8C293.3 7.1 279.1 0 264 0h-80c-15.1 0-29.3 7.1-38.4 19.2L112 64H24C10.7 64 0 74.7 0 88v2c0 3.3 2.7 6 6 6h26v368c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V96h26c3.3 0 6-2.7 6-6v-2c0-13.3-10.7-24-24-24h-88zM184 32h80c5 0 9.8 2.4 12.8 6.4L296 64H152l19.2-25.6c3-4 7.8-6.4 12.8-6.4zm200 432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V96h320v368zm-176-44V156c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v264c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zm-80 0V156c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v264c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zm160 0V156c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v264c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12z"/>
</symbol>
</svg>`;

    function Ms(t) {
      var l;
      Wc();
      let e = document.createElement("div");
      e.className = "ML__keyboard";
      let r = document.createElement("div");
      r.className = "MLK__plate", r.innerHTML = ae.createHTML(Uc + t.layouts.map((c, u) => jc(t, c, u)).join(""));
      let i = document.createElement("div");
      i.className = "MLK__backdrop", i.appendChild(r), e.appendChild(i);
      let o = e.querySelectorAll(".ML__toolbar-action");
      if (o)
        for (let c of o) c.addEventListener("click", u => {
          var h, f;
          let d = u.target,
            m = "";
          for (; d && !m;) m = (h = d == null ? void 0 : d.getAttribute("data-command")) != null ? h : "", d = (f = d == null ? void 0 : d.parentElement) != null ? f : null;
          m && t.executeCommand(JSON.parse(m))
        });
      let a = e.querySelectorAll(".MLK__keycap, .action, .fnbutton, .bigfnbutton");
      for (let c of a) c.id = "ML__k" + Date.now().toString(36).slice(-2) + Math.floor(Math.random() * 1e5).toString(36);
      Ma(t, [...a]);
      let n = e.querySelectorAll(".layer-switch");
      for (let c of n) c.classList.contains("shift") ? Yr(c, u => t.executeCommand(u), {
        pressed: "shiftKeyboardLayer",
        default: ["switchKeyboardLayer", c.getAttribute("data-layer")]
      }) : Yr(c, u => t.executeCommand(u), {
        default: ["switchKeyboardLayer", c.getAttribute("data-layer")]
      });
      let s = e.querySelectorAll(".MLK__layer");
      s.length > 0;
      for (let c of s) c.addEventListener("mousedown", u => u.preventDefault());
      return (l = s[0]) == null || l.classList.add("is-visible"), e
    }

    function jc(t, e, r) {
      let i = La(e),
        o = [];
      for (let a of i.layers) o.push(`<div tabindex="-1" class="MLK__layer" data-layer="${a.id}">`), o.push(`<div class='MLK__toolbar' role='toolbar'>${Gc(t,r)}</div>`), o.push(Jc(t, Xc(a))), o.push("</div>");
      return o.join("")
    }

    function Xc(t) {
      if (typeof t == "string") return t;
      let e = "";
      if (typeof t.styles == "string" ? e += `<style>${t.styles}</style>` : typeof t.styles == "object" && (e += `<style>${Hc(t.styles)}</style>`), t.backdrop && (e += `<div class='${t.backdrop}'>`), t.container && (e += `<div class='${t.container}'>`), t.rows) {
        e += "<div class='MLK__rows'>";
        for (let r of t.rows) {
          e += "<ul>";
          for (let i of r) {
            if (e += "<li", typeof i == "string" && (i = {
                latex: i
              }), i.class) {
              let o = i.class;
              i.layer && !/layer-switch/.test(o) && (o += " layer-switch"), /separator/.test(o) || (o += " MLK__keycap"), e += ` class="${o}"`
            } else e += ' class="MLK__keycap"';
            if (i.key && (e += ` data-key="${i.key}"`), i.command && (typeof i.command == "string" ? e += ` data-command='"${i.command}"'` : (e += " data-command='", e += JSON.stringify(i.command), e += "'")), i.insert && (e += ` data-insert="${i.insert}"`), i.latex && (e += ` data-latex="${i.latex}"`), i.aside && (e += ` data-aside="${i.aside}"`), i.variants) {
              let o = Date.now().toString(36).slice(-2) + Math.floor(Math.random() * 1e5).toString(36);
              ws(o, i.variants), e += ` data-variants="${o}"`
            }
            i.shifted && (e += ` data-shifted="${i.shifted}"`), i.shiftedCommand && (e += ` data-shifted-command="${i.shiftedCommand}"`), i.layer && (e += ` data-layer="${i.layer}"`), e += `>${i.label?i.label:""}</li>`
          }
          e += "</ul>"
        }
        e += "</div>"
      } else t.markup && (e += t.markup);
      return t.container && (e += "</div>"), t.backdrop && (e += "</div>"), e
    }
    var $e = class {
      constructor() {
        this.originalContainerBottomPadding = null;
        var e, r, i;
        this.targetOrigin = globalThis.origin, this.originValidator = "same-origin", this._alphabeticLayout = "auto", this._layouts = ["numeric", "functions", "symbols", "alphabetic", "greek"], this._actionToolbar = "default", this._container = (r = (e = globalThis.document) == null ? void 0 : e.body) != null ? r : null, this._visible = !1, this._dirty = !0, this.observer = new ResizeObserver(o => {
          var n, s;
          let a = this.boundingRect.height;
          if (this.container === document.body) {
            (n = this._element) == null || n.style.setProperty("--keyboard-height", `calc(${a}px + env(safe-area-inset-bottom, 0))`);
            let l = a - 1;
            this.container.style.paddingBottom = this.originalContainerBottomPadding ? `calc(${this.originalContainerBottomPadding} + ${l}px)` : `${l}px`
          } else(s = this._element) == null || s.style.setProperty("--keyboard-height", `${a}px`);
          this.dispatchEvent(new Event("geometrychange")), this.sendMessage("geometry-changed", {
            boundingRect: this.boundingRect
          })
        }), this.listeners = {}, (i = window.top) == null || i.addEventListener("message", this), document.body.addEventListener("focusin", o => {
          var n;
          let a = o.target;
          if (a != null && a.isConnected && ((n = a.tagName) == null ? void 0 : n.toLowerCase()) === "math-field" && mn()) {
            let s = a;
            s.mathVirtualKeyboardPolicy === "auto" && !s.readOnly && this.show()
          }
        }), document.addEventListener("focusout", () => {
          setTimeout(() => {
            var n, s, l;
            let o = document.activeElement,
              a = !1;
            for (; o;) {
              if (((n = o.tagName) == null ? void 0 : n.toLowerCase()) === "math-field") {
                a = !0;
                break
              }
              o = (l = (s = o.shadowRoot) == null ? void 0 : s.activeElement) != null ? l : null
            }
            a || this.hide()
          }, 300)
        })
      }
      get alphabeticLayout() {
        return this._alphabeticLayout
      }
      set alphabeticLayout(e) {
        this._alphabeticLayout = e, this.rebuild()
      }
      get layouts() {
        return this._layouts
      }
      set layouts(e) {
        let r = Array.isArray(e) ? [...e] : [e],
          i = r.findIndex(o => o === "default");
        i >= 0 && r.splice(i, 1, "numeric", "functions", "symbols", "alphabetic", "greek"), this._layouts = r, this.rebuild()
      }
      get actionToolbar() {
        return this._actionToolbar
      }
      set actionToolbar(e) {
        this._actionToolbar = e, this.rebuild()
      }
      get container() {
        return this._container
      }
      set container(e) {
        this._container = e, this.rebuild()
      }
      static get singleton() {
        return this._singleton || (this._singleton = new $e), this._singleton
      }
      addEventListener(e, r, i) {
        this.listeners[e] || (this.listeners[e] = new Set), this.listeners[e].has(r) || this.listeners[e].add(r)
      }
      dispatchEvent(e) {
        return !this.listeners[e.type] || this.listeners[e.type].size === 0 ? !0 : (this.listeners[e.type].forEach(r => {
          typeof r == "function" ? r(e) : r == null || r.handleEvent(e)
        }), !e.defaultPrevented)
      }
      removeEventListener(e, r, i) {
        this.listeners[e] && this.listeners[e].delete(r)
      }
      get element() {
        return this._element
      }
      set element(e) {
        var r;
        this._element !== e && ((r = this._element) == null || r.remove(), this._element = e)
      }
      get visible() {
        return this._visible
      }
      set visible(e) {
        e ? this.show() : this.hide()
      }
      get boundingRect() {
        var r;
        if (!this._visible) return new DOMRect;
        let e = (r = this._element) == null ? void 0 : r.getElementsByClassName("MLK__plate")[0];
        return e ? e.getBoundingClientRect() : new DOMRect
      }
      rebuild() {
        var i;
        if (this._dirty || !this._element) return;
        this._dirty = !0;
        let e = "",
          r = this._element.querySelector(".MLK__layer.is-visible");
        r && (e = (i = r.getAttribute("data-layer")) != null ? i : ""), requestAnimationFrame(() => {
          var o;
          if (this._dirty = !1, this._element && (this._element.remove(), this._element = void 0), this.visible) {
            this.buildAndAttachElement();
            let a = this.element.querySelector(`.MLK__layer[data-layer="${e}"]`);
            a && ((o = this.element.querySelector(".MLK__layer.is-visible")) == null || o.classList.remove("is-visible"), a.classList.add("is-visible")), this.element.classList.add("is-visible")
          }
        })
      }
      show() {
        if (this._visible) return;
        let e = this.container;
        if (e && this.stateWillChange(!0)) {
          if (this._element || this.buildAndAttachElement(), !this._visible) {
            let r = this._element.getElementsByClassName("MLK__plate")[0];
            if (r && this.observer.observe(r), e === window.document.body) {
              let i = e.style.paddingBottom;
              this.originalContainerBottomPadding = i;
              let o = r.offsetHeight - 1;
              e.style.paddingBottom = i ? `calc(${i} + ${o}px)` : `${o}px`
            }
            window.addEventListener("mouseup", this), window.addEventListener("blur", this)
          }
          requestAnimationFrame(() => {
            var r;
            (r = this._element) == null || r.classList.add("is-visible"), this.focus(), this._visible = !0, this.stateChanged()
          })
        }
      }
      hide() {
        var r;
        let e = this.container;
        if (e && this._visible && this.stateWillChange(!1)) {
          if (this._element) {
            let i = this._element.getElementsByClassName("MLK__plate")[0];
            i && this.observer.unobserve(i), window.removeEventListener("mouseup", this), window.removeEventListener("blur", this), fr(), this._visible = !1, _s(), (r = this._element) == null || r.remove(), this._element = void 0, this.originalContainerBottomPadding !== null && (e.style.paddingBottom = this.originalContainerBottomPadding)
          }
          this._visible = !1, this.stateChanged()
        }
      }
      get height() {
        var e, r;
        return (r = (e = this.element) == null ? void 0 : e.offsetHeight) != null ? r : 0
      }
      buildAndAttachElement() {
        var e;
        this.element, this.element = Ms(this), je(this.element, "mousedown", () => this.focus()), (e = this.container) == null || e.appendChild(this.element)
      }
      handleEvent(e) {
        if (Pi(e)) {
          if (!Xr(e.origin, this.originValidator)) throw new DOMException(`Message from unknown origin (${e.origin}) cannot be handled`, "SecurityError");
          let {
            action: r
          } = e.data;
          if (r === "execute-command") {
            let {
              command: i
            } = e.data;
            if (this.connectedMathfieldWindow = e.source, hr(i) !== "virtual-keyboard" && window === window.parent) return;
            this.executeCommand(i);
            return
          }
          if (r === "connect") {
            this.connectedMathfieldWindow = e.source;
            return
          }
          if (r === "disconnect") {
            this.connectedMathfieldWindow = void 0;
            return
          }
          if (r === "show") {
            this.connectedMathfieldWindow = e.source, this.show();
            return
          }
          if (r === "hide") {
            this.connectedMathfieldWindow = e.source, this.hide();
            return
          }
          if (r === "update-setting") {
            e.data.alphabeticLayout && (this.alphabeticLayout = e.data.alphabeticLayout), e.data.layouts && (this.layouts = e.data.layouts), e.data.actionToolbar && (this.actionToolbar = e.data.actionToolbar);
            return
          }
          if (r === "proxy-created") {
            this.sendMessage("synchronize-proxy", {
              boundingRect: this.boundingRect,
              alphabeticLayout: this._alphabeticLayout,
              layouts: this._layouts,
              actionToolbar: this._actionToolbar
            });
            return
          }
        }
        if (this._element) switch (e.type) {
          case "mouseup":
          case "blur":
            document.body.style.userSelect = "", ti();
            break
        }
      }
      sendMessage(e, r = {}) {
        var i;
        (i = this.connectedMathfieldWindow) == null || i.postMessage(b({
          type: xo,
          action: e
        }, r), this.targetOrigin)
      }
      stateWillChange(e) {
        return this.dispatchEvent(new CustomEvent("before-virtual-keyboard-toggle", {
          detail: {
            visible: e
          },
          bubbles: !0,
          cancelable: !0,
          composed: !0
        }))
      }
      stateChanged() {
        this.dispatchEvent(new Event("virtual-keyboard-toggle")), this.sendMessage("geometry-changed", {
          boundingRect: this.boundingRect
        })
      }
      focus() {
        this.sendMessage("focus")
      }
      blur() {
        this.sendMessage("blur")
      }
      updateToolbar(e) {
        var i;
        let r = (i = this._element) == null ? void 0 : i.querySelectorAll(".ML__toolbar-action");
        if (r)
          for (let o of r) o.innerHTML = Ss(this, e)
      }
      connect() {
        this.connectedMathfieldWindow = window
      }
      disconnect() {
        this.connectedMathfieldWindow = void 0
      }
      executeCommand(e) {
        let r, i = [];
        return Y(e) ? (r = e[0], i = e.slice(1)) : r = e, r = r.replace(/-\w/g, o => o[1].toUpperCase()), hr(e) === "virtual-keyboard" ? Vt[r].fn(...i) : (this.sendMessage("execute-command", {
          command: e
        }), !1)
      }
      dispose() {
        window.removeEventListener("mouseup", this), window.removeEventListener("blur", this), window.removeEventListener("message", this)
      }
    };
    if (fe() && !("mathVirtualKeyboard" in window))
      if (window === window.top) {
        let t = $e.singleton;
        Object.defineProperty(window, "mathVirtualKeyboard", {
          get: () => t
        })
      } else Object.defineProperty(window, "mathVirtualKeyboard", {
        get: () => Zr.singleton
      });

    function Mo(t) {
      var e;
      typeof((e = t.listeners) == null ? void 0 : e.onSelectionDidChange) == "function" && !t.suppressChangeNotifications && (t.suppressChangeNotifications = !0, t.listeners.onSelectionDidChange(t), t.suppressChangeNotifications = !1), window.mathVirtualKeyboard.updateToolbar($t(t.mathfield))
    }

    function H(t, e = {}) {
      var i;
      if (t.suppressChangeNotifications || !t.mathfield.host) return !0;
      t.suppressChangeNotifications = !0;
      let r = t.mathfield.host.dispatchEvent(new InputEvent("beforeinput", P(b({}, e), {
        data: e.data ? e.data : (i = e.inputType) != null ? i : "",
        cancelable: !0,
        bubbles: !0,
        composed: !0
      })));
      return t.suppressChangeNotifications = !1, r
    }

    function J(t, e) {
      var r;
      t.suppressChangeNotifications || !t.mathfield.host || (t.suppressChangeNotifications = !0, t.mathfield.host.dispatchEvent(new InputEvent("input", P(b({}, e), {
        data: e.data ? e.data : (r = e.inputType) != null ? r : "",
        bubbles: !0,
        composed: !0
      }))), t.suppressChangeNotifications = !1)
    }
    var Ca = class extends X {
      constructor() {
        super("latex")
      }
      createAtom(e, r, i) {
        return new oe(e, r)
      }
      onPaste(e, r) {
        var o;
        if (!r) return !1;
        let i = typeof r == "string" ? r : (o = r.getData("text/x-latex")) != null ? o : r.getData("text/plain");
        return i && H(e.model, {
          inputType: "insertFromPaste",
          data: i
        }) ? (e.snapshot(), this.insert(e.model, i) && (J(e.model, {
          inputType: "insertFromPaste"
        }), te(e)), !0) : !1
      }
      insert(e, r, i) {
        if (!H(e, {
            data: r,
            inputType: "insertText"
          })) return !1;
        i || (i = {}), i.insertionMode || (i.insertionMode = "replaceSelection"), i.selectionMode || (i.selectionMode = "placeholder");
        let {
          suppressChangeNotifications: o
        } = e;
        i.suppressChangeNotifications && (e.suppressChangeNotifications = !0);
        let a = e.suppressChangeNotifications;
        e.suppressChangeNotifications = !0, i.insertionMode === "replaceSelection" && !e.selectionIsCollapsed ? e.deleteAtoms(xe(e.selection)) : i.insertionMode === "replaceAll" ? (e.root.setChildren([], "body"), e.position = 0) : i.insertionMode === "insertBefore" ? e.collapseSelection("backward") : i.insertionMode === "insertAfter" && e.collapseSelection("forward");
        let n = [];
        for (let c of r) Kn.test(c) && n.push(new oe(c, e.mathfield));
        let s = e.at(e.position);
        if (s instanceof We && (s = s.lastChild), !(s.parent instanceof We)) {
          let c = new We("", e.mathfield);
          s.parent.addChildAfter(c, s), s = c.firstChild
        }
        let l = s.parent.addChildrenAfter(n, s);
        return e.suppressChangeNotifications = a, i.selectionMode === "before" || (i.selectionMode === "item" ? e.setSelection(e.anchor, e.offsetOf(l)) : l && (e.position = e.offsetOf(l))), J(e, {
          data: r,
          inputType: "insertText"
        }), e.suppressChangeNotifications = o, !0
      }
    };

    function As(t) {
      return t.atoms.find(e => e instanceof We)
    }

    function Er(t) {
      var r, i;
      let e = t.atoms.find(o => o instanceof We);
      return e ? (i = (r = e.body) == null ? void 0 : r.filter(o => o instanceof oe)) != null ? i : [] : []
    }

    function Ao(t, e) {
      var s;
      let r = 0,
        i = !1,
        o = Number.isFinite(e == null ? void 0 : e.before) ? (s = e == null ? void 0 : e.before) != null ? s : 0 : t.lastOffset;
      for (; r <= o && !i;) {
        let l = t.at(r);
        i = l instanceof oe && l.isSuggestion, i || r++
      }
      if (!i) return [void 0, void 0];
      let a = r,
        n = !1;
      for (; a <= o && !n;) {
        let l = t.at(a);
        n = !(l instanceof oe && l.isSuggestion), n || a++
      }
      return [r - 1, a - 1]
    }
    new Ca;

    function Bi(t) {
      let e = Er(t.model).filter(r => r.isSuggestion);
      if (e.length !== 0) {
        t.model.position = t.model.offsetOf(e[0].leftSibling);
        for (let r of e) r.parent.removeChild(r)
      }
    }

    function ii(t, e) {
      var l;
      let {
        model: r
      } = t;
      Bi(t);
      for (let c of Er(r)) c.isError = !1;
      if (!r.selectionIsCollapsed) {
        ri(t);
        return
      }
      let i = [],
        o = r.at(r.position);
      for (; o && o instanceof oe && /^[a-zA-Z\*]$/.test(o.value);) o = o.leftSibling;
      if (o && o instanceof oe && o.value === "\\")
        for (i.push(o), o = o.rightSibling; o && o instanceof oe && /^[a-zA-Z\*]$/.test(o.value);) i.push(o), o = o.rightSibling;
      let a = i.map(c => c.value).join(""),
        n = a ? Rn(t, a) : [];
      if (n.length === 0) {
        /^\\[a-zA-Z\*]+$/.test(a) && i.forEach(c => {
          c.isError = !0
        }), ri(t);
        return
      }
      t.suggestionIndex = (l = e == null ? void 0 : e.atIndex) != null ? l : 0, t.suggestionIndex < 0 && (t.suggestionIndex = n.length - 1);
      let s = n[t.suggestionIndex % n.length];
      if (s !== a) {
        let c = i[i.length - 1];
        c.parent.addChildrenAfter([...s.slice(a.length - s.length)].map(u => new oe(u, t, {
          isSuggestion: !0
        })), c), te(t)
      }
      Ls(t, n)
    }

    function Ta(t) {
      let [e, r] = Ao(t, {
        before: t.position
      });
      if (e === void 0 || r === void 0) return !1;
      let i = !1;
      return t.getAtoms([e, r]).forEach(o => {
        o.isSuggestion && (o.isSuggestion = !1, i = !0)
      }), i
    }

    function yt(t, e = "accept", r) {
      var s, l;
      ri(t);
      let i = As(t.model);
      if (!i) return !1;
      if (e === "accept-suggestion") {
        let c = Er(t.model).filter(u => u.isSuggestion);
        if (c.length === 0) return !1;
        for (let u of c) u.isSuggestion = !1;
        return t.model.position = t.model.offsetOf(c[c.length - 1]), !0
      }
      let a = Er(t.model).filter(c => !c.isSuggestion).map(c => c.value).join(""),
        n = i.leftSibling;
      return i.parent.removeChild(i), t.model.position = t.model.offsetOf(n), t.mode = (s = r == null ? void 0 : r.mode) != null ? s : "math", e === "reject" || (X.insert("math", t.model, a, {
        selectionMode: (l = r == null ? void 0 : r.selectItem) != null && l ? "item" : "placeholder",
        format: "latex"
      }), t.snapshot(), t.model.announce("replacement")), !0
    }
    var Ea, Pa = null,
      Da = null;

    function Zc(t, e) {
      let r = new g("root", t);
      r.body = he(e, t, {
        parseMode: "math"
      });
      let i = new E({
          registers: t.registers
        }, {
          fontSize: nt
        }, "displaystyle"),
        o = Zt(_t(new v(r.render(i), {
          classes: "ML__base"
        }), i));
      return St(o, {
        classes: "ML__mathlive"
      }).toMarkup()
    }

    function Ls(t, e) {
      if (e.length === 0 || t.options.popoverPolicy === "off") {
        ri(t);
        return
      }
      e = e.slice(0, 10);
      let r = "<ul>";
      for (let o of e) {
        let a = o,
          n = Zc(t, o),
          s = ps(t.keybindings, a).join("<br>");
        r += `<li role="button" data-command="${a}"><span class="ML__popover__latex">${a}</span><span class="ML__popover__command">${n}</span>`, s && (r += `<span class="ML__popover__keybinding">${s}</span>`), r += "</li>"
      }
      r += "</ul>", t.popover = Yc(t, r);
      let i = t.popover.querySelectorAll("ul li");
      for (let o of i) o.addEventListener("pointerdown", a => a.preventDefault()), o.addEventListener("click", a => {
        yt(t, "reject"), X.insert("math", t.model, o.dataset.command, {
          selectionMode: "placeholder",
          format: "latex"
        }), t.dirty = !0, t.scrollIntoView(), t.focus()
      });
      setTimeout(() => {
        let o = Lr(t.field);
        o && Cs(t, o), t.popover && (t.popover.classList.add("is-visible"), t.popoverVisible = !0)
      }, 32)
    }

    function Ki(t, e) {
      var r;
      if (!(!t.element || t.element.mathfield !== t) && !(!t.popover || !t.popoverVisible)) {
        if (e != null && e.deferred) {
          setTimeout(() => Ki(t), 100);
          return
        }
        if (((r = t.model.at(t.model.position)) == null ? void 0 : r.type) !== "latex") ri(t);
        else {
          let i = Lr(t.field);
          i && Cs(t, i)
        }
      }
    }

    function Cs(t, e) {
      if (Hi(), !t.popover || !t.popoverVisible) return;
      let r = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        o = window.innerWidth - document.documentElement.clientWidth,
        a = window.innerHeight - document.documentElement.clientHeight,
        n = window.mathVirtualKeyboard.boundingRect.height;
      e.x + t.popover.offsetWidth / 2 > i - o ? t.popover.style.left = `${i-t.popover.offsetWidth-o}px` : e.x - t.popover.offsetWidth / 2 < 0 ? t.popover.style.left = "0" : t.popover.style.left = `${e.x-t.popover.offsetWidth/2}px`, e.y + t.popover.offsetHeight + 5 > r - a - n ? (t.popover.classList.add("ML__popover--reverse-direction"), t.popover.style.top = `${e.y-e.height-t.popover.offsetHeight-5}px`) : (t.popover.classList.remove("ML__popover--reverse-direction"), t.popover.style.top = `${e.y+5}px`)
    }

    function ri(t) {
      t.suggestionIndex = 0, t.popoverVisible = !1, t.popover && (t.popover.classList.remove("is-visible"), t.popover.innerHTML = "")
    }

    function Yc(t, e) {
      return t.popover ? (t.popover.innerHTML = window.MathfieldElement.createHTML(e), t.popover) : (t.popover = go("mathlive-popover-panel"), Ea === void 0 && (Ea = Xe(wa).toString(36)), Pa = Ze(null, wa, Ea), Da = Ze(null, Ie, Xe(Ie).toString(36)), t.popover.innerHTML = window.MathfieldElement.createHTML(e), t.popover)
    }

    function Ts(t) {
      yo(t.popover), Pa && Pa.release(), Da && Da.release(), delete t.popover
    }

    function Qc(t) {
      let e = 0;
      for (let r = 0; r < t.length; r++) e = e * 31 + t.charCodeAt(r), e = e | 0;
      return Math.abs(e)
    }

    function te(t, e) {
      t.dirty || (t.dirty = !0, requestAnimationFrame(() => {
        qt(t) && t.dirty && (t.atomBoundsCache = new Map, Ht(t, e), t.atomBoundsCache = void 0)
      }))
    }

    function eu(t, e) {
      var a;
      e = e != null ? e : {};
      let r = new E({
          registers: t.registers,
          atomIdsSettings: {
            seed: e.forHighlighting ? Qc(g.serialize(t.model.root, {
              expandMacro: !1,
              defaultMode: t.options.defaultMode
            })) : "random",
            groupNumbers: (a = e.forHighlighting) != null ? a : !1
          }
        }, {
          fontSize: nt,
          letterShapeStyle: t.options.letterShapeStyle
        }, t.options.defaultMode === "inline-math" ? "textstyle" : "displaystyle"),
        i = t.model.root.render(r);
      return St(_t(i, r), {
        classes: t.hasEditablePrompts ? "ML__mathlive ML__prompting" : "ML__mathlive",
        attributes: {
          translate: "no",
          "aria-hidden": "true"
        }
      })
    }

    function Ba(t, e) {
      let {
        model: r
      } = t;
      r.root.caret = "", r.root.isSelected = !1, r.root.containsCaret = !0;
      for (let a of r.atoms) a.caret = "", a.isSelected = !1, a.containsCaret = !1;
      let i = t.isSelectionEditable && t.hasFocus();
      if (r.selectionIsCollapsed) r.at(r.position).caret = i ? t.mode : "";
      else {
        let a = r.getAtoms(r.selection, {
          includeChildren: !0
        });
        for (let n of a) n.isSelected = !0
      }
      if (i) {
        let a = r.at(r.position).parent;
        for (; a;) a.containsCaret = !0, a = a.parent
      }
      let o = eu(t, e);
      return window.MathfieldElement.createHTML(o.toMarkup())
    }

    function Ht(t, e) {
      var n;
      if (!qt(t)) return;
      e != null || (e = {});
      let r = (n = t.element) == null ? void 0 : n.querySelector("[part=virtual-keyboard-toggle]");
      r && (r.style.display = t.hasEditableContent ? "flex" : "none");
      let i = t.field,
        o = t.isSelectionEditable && t.hasFocus(),
        a = i.classList.contains("ML__focused");
      a && !o ? i.classList.remove("ML__focused") : !a && o && i.classList.add("ML__focused"), i.innerHTML = Ba(t, e), t.fieldContent = i.getElementsByClassName("ML__mathlive")[0], Oi(t, e.interactive), t.dirty = !1
    }

    function Oi(t, e) {
      let r = t.field;
      if (!r) return;
      for (let s of r.querySelectorAll(".ML__selection, .ML__contains-highlight")) s.remove();
      if (!t.hasFocus()) return;
      !(e != null && e) && qe !== "error" && qe !== "ready" && setTimeout(() => {
        qe === "ready" ? Oi(t) : setTimeout(() => Oi(t), 128)
      }, 32);
      let i = t.model,
        o = parseFloat(getComputedStyle(r).width),
        n = r.getBoundingClientRect().width / o;
      if (n = isNaN(n) ? 1 : n, i.selectionIsCollapsed) {
        setTimeout(() => Ki(t), 32);
        let s = i.at(i.position);
        for (; s && !(s.containsCaret && s.displayContainsHighlight);) s = s.parent;
        if (s != null && s.containsCaret && s.displayContainsHighlight) {
          let l = fa(t, mr(t, s));
          if (l) {
            l.left /= n, l.right /= n, l.top /= n, l.bottom /= n;
            let c = document.createElement("div");
            c.classList.add("ML__contains-highlight"), c.style.position = "absolute", c.style.left = `${l.left}px`, c.style.top = `${l.top}px`, c.style.width = `${Math.ceil(l.right-l.left)}px`, c.style.height = `${Math.ceil(l.bottom-l.top-1)}px`, r.insertBefore(c, r.childNodes[0])
          }
        }
        return
      }
      for (let s of tu(bo(t, {
          excludeAtomsWithBackground: !0
        }))) {
        s.left /= n, s.right /= n, s.top /= n, s.bottom /= n;
        let l = document.createElement("div");
        l.classList.add("ML__selection"), l.style.position = "absolute", l.style.left = `${s.left}px`, l.style.top = `${s.top}px`, l.style.width = `${Math.ceil(s.right-s.left)}px`, l.style.height = `${Math.ceil(s.bottom-s.top-1)}px`, r.insertBefore(l, r.childNodes[0])
      }
    }

    function tu(t) {
      let e = [];
      for (let r of t) {
        let i = !1;
        for (let o of e)
          if (r.left === o.left && r.right === o.right && r.top === o.top && r.bottom === o.bottom) {
            i = !0;
            break
          } i || e.push(r)
      }
      t = e, e = [];
      for (let r of t) {
        let i = 0;
        for (let o of t)
          if (r.left >= o.left && r.right <= o.right && r.top >= o.top && r.bottom <= o.bottom && (i += 1, i > 1)) break;
        i === 1 && e.push(r)
      }
      return e
    }
    var Ka = 3,
      Vt = {};

    function de(t, e) {
      e = e != null ? e : {
        target: "mathfield",
        canUndo: !1
      };
      for (let r of Object.keys(t)) Vt[r], Vt[r] = P(b({}, e), {
        fn: t[r]
      })
    }

    function hr(t) {
      var r;
      let e;
      return e = Y(t) ? t[0] : t, e = e.replace(/-\w/g, i => i[1].toUpperCase()), (r = Vt[e]) == null ? void 0 : r.target
    }

    function Es(t, e) {
      var s, l;
      if (!e) return !1;
      let r, i = [],
        o = !1,
        a = !1;
      Y(e) ? (r = e[0], i = e.slice(1)) : r = e, r = r.replace(/-\w/g, c => c[1].toUpperCase());
      let n = (s = Vt[r]) == null ? void 0 : s.target;
      if (n === "model") {
        if (!t.isSelectionEditable && /^(paste|cut|insert|delete|transpose|add)/.test(r)) return t.model.announce("plonk"), !1;
        /^(delete|transpose|add)/.test(r) && r !== "deleteBackward" && t.flushInlineShortcutBuffer(), /^(delete|transpose|add)/.test(r) && t.mode !== "latex" && (t.popUndoStack(), t.snapshot()), t.mode === "latex" && !/^(complete)/.test(r) && Bi(t), Vt[r].fn(t.model, ...i), t.mode !== "latex" && /^(delete|transpose|add)/.test(r) && t.snapshot(), t.mode === "latex" && ii(t), a = !0, o = !0
      } else if (n === "virtual-keyboard") a = (l = window.mathVirtualKeyboard.executeCommand(e)) != null ? l : !1, o = !0;
      else if (Vt[r]) /^(undo|redo)/.test(r) && t.flushInlineShortcutBuffer(), a = Vt[r].fn(t, ...i), o = !0;
      else throw new Error(`Unknown command "${r}"`);
      return n !== "virtual-keyboard" && (!t.model.selectionIsCollapsed || /^(transpose|paste|complete|((moveToNextChar|moveToPreviousChar|extend).*))_$/.test(r)) && (t.flushInlineShortcutBuffer(), t.style = {}), a && te(t), o
    }

    function ru(t, e) {
      t.focus(), So.keypressVibration && Gi() && navigator.vibrate(Ka), e = e.replace(/-\w/g, i => i[1].toUpperCase()), e === "moveToNextPlaceholder" || e === "moveToPreviousPlaceholder" || e === "complete" ? window.MathfieldElement.playSound("return") : e === "deleteBackward" || e === "deleteForward" || e === "deletePreviousWord" || e === "deleteNextWord" || e === "deleteToGroupStart" || e === "deleteToGroupEnd" || e === "deleteToMathFieldStart" || e === "deleteToMathFieldEnd" ? window.MathfieldElement.playSound("delete") : window.MathfieldElement.playSound("keypress");
      let r = t.executeCommand(e);
      return t.scrollIntoView(), r
    }
    de({
      performWithFeedback: (t, e) => ru(t, e)
    });

    function iu(t) {
      return ii(t, {
        atIndex: t.suggestionIndex + 1
      }), !1
    }

    function ou(t) {
      return ii(t, {
        atIndex: t.suggestionIndex - 1
      }), !1
    }
    de({
      complete: yt,
      nextSuggestion: iu,
      previousSuggestion: ou
    }, {
      target: "mathfield",
      category: "autocomplete"
    });

    function Pr(t, e) {
      return t + It(e)
    }
    de({
      speak: (t, e, r) => au(t, e, r)
    }, {
      target: "mathfield",
      category: "speech"
    });

    function au(t, e, r) {
      var l, c;
      r = r != null ? r : {
        withHighlighting: !1
      };
      let {
        model: i
      } = t;

      function o(u) {
        let d = null;
        switch (u) {
          case "all":
            d = i.root;
            break;
          case "selection":
            d = i.getAtoms(i.selection);
            break;
          case "left": {
            d = i.getAtoms(i.offsetOf(i.at(i.position).leftSibling), i.position);
            break
          }
          case "right": {
            d = i.getAtoms(i.position, i.offsetOf(i.at(i.position).rightSibling));
            break
          }
          case "group":
            d = i.getAtoms(i.getSiblingsRange(i.position));
            break;
          case "parent": {
            let {
              parent: m
            } = i.at(i.position);
            m && m.type !== "root" ? d = m : d = i.root;
            break
          }
          default:
            d = i.root
        }
        return d
      }

      function a(u) {
        let d = "";
        switch (u) {
          case "all":
            break;
          case "selection":
            d = "no selection";
            break;
          case "left":
            d = "at start";
            break;
          case "right":
            d = "at end";
            break;
          case "group":
            break;
          case "parent":
            d = "no parent";
            break;
          default:
            "" + u;
            break
        }
        return d
      }
      let n = o(e);
      if (n === null) return (c = (l = window.MathfieldElement).speakHook) == null || c.call(l, a(e)), !1;
      (r.withHighlighting || window.MathfieldElement.speechEngine === "amazon") && (window.MathfieldElement.textToSpeechMarkup = window.sre && window.MathfieldElement.textToSpeechRules === "sre" ? "ssml_step" : "ssml");
      let s = It(n);
      return fe() && r.withHighlighting ? (bt().readAloudMathField = t, Ht(t, {
        forHighlighting: !0
      }), window.MathfieldElement.readAloudHook && window.MathfieldElement.readAloudHook(t.field, s)) : window.MathfieldElement.speakHook && window.MathfieldElement.speakHook(s), !1
    }

    function Ps(t) {
      var e, r;
      if (fe())
        if (!window.MathfieldElement.speechEngine || window.MathfieldElement.speechEngine === "local") {
          let i = new SpeechSynthesisUtterance(t);
          window.speechSynthesis.speak(i)
        } else if (window.MathfieldElement.speechEngine === "amazon")
        if (!("AWS" in window)) console.error("MathLive: AWS SDK not loaded. See https://www.npmjs.com/package/aws-sdk");
        else {
          let i = new globalThis.AWS.Polly({
              apiVersion: "2016-06-10"
            }),
            o = {
              OutputFormat: "mp3",
              VoiceId: (e = window.MathfieldElement.speechEngineVoice) != null ? e : "Joanna",
              Engine: ["Amy", "Emma", "Brian", "Ivy", "Joanna", "Kendra", "Kimberly", "Salli", "Joey", "Justin", "Matthew"].includes((r = window.MathfieldElement.speechEngineVoice) != null ? r : "Joanna") ? "neural" : "standard",
              Text: t,
              TextType: "ssml"
            };
          i.synthesizeSpeech(o, (a, n) => {
            if (a) console.error("MathLive: polly.synthesizeSpeech() error:", a, a.stack);
            else if (n != null && n.AudioStream) {
              let s = new Uint8Array(n.AudioStream),
                l = new Blob([s.buffer], {
                  type: "audio/mpeg"
                }),
                c = URL.createObjectURL(l);
              new Audio(c).play().catch(d => console.log(d))
            }
          })
        }
      else window.MathfieldElement.speechEngine === "google" && console.error("MathLive: The Google speech engine is not supported yet. Please come again.")
    }

    function Ds(t) {
      let e;
      if (t.parent.type === "prompt") t.treeBranch === "body" && (e = "prompt");
      else if (t.treeBranch === "body") e = {
        enclose: "cross out",
        leftright: "delimiter",
        surd: "square root",
        root: "math field",
        mop: "operator",
        first: "first"
      } [t.type];
      else if (t.parent.type === "genfrac") {
        if (t.treeBranch === "above") return "numerator";
        if (t.treeBranch === "below") return "denominator"
      } else t.parent.type === "surd" ? t.treeBranch === "above" && (e = "index") : t.treeBranch === "superscript" ? e = "superscript" : t.treeBranch === "subscript" && (e = "subscript");
      return e != null ? e : "parent"
    }

    function Bs(t, e, r, i) {
      let o = "";
      if (e === "plonk") window.MathfieldElement.playSound("plonk"), t.flushInlineShortcutBuffer();
      else if (e === "delete") o = Pr("deleted: ", i);
      else if (e === "focus" || e.includes("move")) o = nu(t.model, r) + (t.model.selectionIsCollapsed ? "" : "selected: ") + su(t.model);
      else if (e === "replacement") o = Pr("", t.model.at(t.model.position));
      else if (e === "line") {
        let a = Pr("", t.model.root);
        t.keyboardDelegate.setAriaLabel(a)
      } else o = i ? Pr(e + " ", i) : e;
      if (o) {
        let a = t.ariaLiveText.textContent.includes("\xA0") ? " \u202F " : " \xA0 ";
        t.ariaLiveText.textContent = o + a
      }
    }

    function nu(t, e) {
      if (Number.isNaN(e)) return "";
      let r = t.at(e);
      if (!r || r.treeDepth <= t.at(t.position).treeDepth) return "";
      let i = "",
        o = r.parent,
        a = t.at(t.position).parent;
      for (; o !== t.root && o !== a;) i += `out of ${Ds(o)};`, o = o.parent;
      return i
    }

    function su(t) {
      if (!t.selectionIsCollapsed) return Pr("", t.getAtoms(t.selection));
      let e = "",
        r = t.at(t.position),
        i = Ds(r);
      return r.isFirstSibling && (e = (i ? "start of " + i : "unknown") + ": "), r.isLastSibling ? r.isFirstSibling || (e += i ? "end of " + i : "unknown") : e += Pr("", r), e
    }
    var zi = class {
      constructor(e, r, i) {
        this.options = e, this._selection = {
          ranges: [
            [0, 0]
          ],
          direction: "none"
        }, this._anchor = 0, this._position = 0, this.mathfield = i, this.suppressChangeNotifications = !1, this.root = new g("root", i, {
          mode: e.mode
        }), this.root.body = [], this.setListeners(r)
      }
      get atoms() {
        return this.root.children
      }
      get selection() {
        return this._selection
      }
      set selection(e) {
        this.setSelection(e)
      }
      setSelection(e, r) {
        return !this.mathfield.contentEditable && this.mathfield.userSelect === "none" ? !1 : this.deferNotifications({
          selection: !0
        }, () => {
          var l, c, u;
          let i = this.normalizeSelection(e, r);
          if (i === void 0) throw new TypeError("Invalid selection");
          if (i.ranges.length === 1 && i.ranges[0][0] === i.ranges[0][1]) {
            let d = i.ranges[0][0];
            return !this.mathfield.dirty && !((l = this.at(d)) != null && l.parentPrompt) && this.mathfield.hasEditablePrompts ? (c = this.at(d - 1)) != null && c.parentPrompt ? (this._anchor = this.normalizeOffset(d - 1), this._position = this._anchor, this._selection = this.normalizeSelection(this._anchor), !0) : (u = this.at(d + 1)) != null && u.parentPrompt ? (this._anchor = this.normalizeOffset(d + 1), this._position = this._anchor, this._selection = this.normalizeSelection(this._anchor), !0) : (this._anchor = 0, this._position = 0, this._selection = {
              ranges: [
                [0, 0]
              ]
            }, !1) : (this._anchor = d, this._position = d, this._selection = i, !1)
          }
          let o = xe(i);
          i.direction === "backward" ? [this._position, this._anchor] = o : [this._anchor, this._position] = o;
          let a = this.at(o[0] + 1),
            n = this.at(o[1]),
            s = g.commonAncestor(a, n);
          return (s == null ? void 0 : s.type) === "array" && a.parent === s && n.parent === s ? this._selection = {
            ranges: [o],
            direction: i.direction
          } : this._selection = {
            ranges: [o],
            direction: i.direction
          }, this._position >= 0 && this._position <= this.lastOffset, !1
        })
      }
      setPositionHandlingPlaceholder(e) {
        var r, i, o;
        ((r = this.at(e)) == null ? void 0 : r.type) === "placeholder" ? this.setSelection(e - 1, e): ((o = (i = this.at(e)) == null ? void 0 : i.rightSibling) == null ? void 0 : o.type) === "placeholder" ? this.setSelection(e, e + 1) : this.position = e
      }
      getState() {
        return {
          content: this.root.toJson(),
          selection: this.selection
        }
      }
      setState(e, r) {
        var a;
        let i = this.suppressChangeNotifications;
        this.suppressChangeNotifications = (a = r == null ? void 0 : r.suppressChangeNotifications) != null ? a : !0;
        let o = {};
        (r == null ? void 0 : r.type) === "undo" && (o = {
          inputType: "historyUndo"
        }), (r == null ? void 0 : r.type) === "redo" && (o = {
          inputType: "historyRedo"
        }), H(this, o) && (this.root = Ue(e.content, this.mathfield), this.selection = e.selection, J(this, o)), this.suppressChangeNotifications = i
      }
      get position() {
        return this._position
      }
      set position(e) {
        this.setSelection(e, e)
      }
      get anchor() {
        return this._anchor
      }
      get selectionIsCollapsed() {
        return this._anchor === this._position
      }
      get selectionIsPlaceholder() {
        return Math.abs(this._anchor - this._position) === 1 ? this.at(Math.max(this._anchor, this._position)).type === "placeholder" : !1
      }
      collapseSelection(e = "forward") {
        return this._anchor === this._position ? !1 : (e === "backward" ? this.position = Math.min(this._anchor, this._position) : this.position = Math.max(this._anchor, this._position), !0)
      }
      get lastOffset() {
        return this.atoms.length - 1
      }
      at(e) {
        return this.atoms[e]
      }
      offsetOf(e) {
        return this.atoms.indexOf(e)
      }
      getSiblingsRange(e) {
        let r = this.at(e),
          {
            parent: i
          } = r;
        if (!i) return [0, this.lastOffset];
        let o = r.parent.branch(r.treeBranch);
        return [this.offsetOf(o[0]), this.offsetOf(o[o.length - 1])]
      }
      getBranchRange(e, r) {
        let i = this.at(e).branch(r);
        return [this.offsetOf(i[0]), this.offsetOf(i[i.length - 1])]
      }
      getAtoms(e, r, i) {
        let o = i != null ? i : {};
        if (Wr(e)) {
          if (o = r != null ? r : {}, e.ranges.length > 1) return e.ranges.reduce((u, d) => [...u, ...this.getAtoms(d, o)], []);
          e = e.ranges[0]
        }
        let a, n;
        if (Tt(e)) {
          if (a = e, !Tt(r)) return [];
          n = r
        } else [a, n] = e, o = r != null ? r : {};
        if (!Number.isFinite(a)) return [];
        o.includeChildren === void 0 && (o.includeChildren = !1), a < 0 && (a = this.lastOffset - a + 1), n < 0 && (n = this.lastOffset - n + 1);
        let s = Math.min(a, n) + 1,
          l = Math.max(a, n);
        if (s === 1 && l === this.lastOffset) return [this.root];
        let c = [];
        for (let u = s; u <= l; u++) {
          let d = this.atoms[u];
          Ks(this, d, s, l) && c.push(d)
        }
        return o.includeChildren || (c = c.filter(u => {
          let d = !1,
            {
              parent: m
            } = u;
          for (; m && !d;) d = Ks(this, m, s, l), m = m.parent;
          return !d
        })), c
      }
      getAllAtoms(e = 0) {
        let r = [],
          i = this.lastOffset;
        for (let o = e; o <= i; o++) r.push(this.atoms[o]);
        for (let o = 0; o < e; o++) r.push(this.atoms[o]);
        return r
      }
      findAtom(e, r = 0, i = "forward") {
        if (i === "forward") {
          let o = this.lastOffset;
          for (let a = r; a <= o; a++)
            if (e(this.atoms[a])) return this.atoms[a];
          for (let a = 0; a < r; a++)
            if (e(this.atoms[a])) return this.atoms[a];
          return
        }
        for (let o = r; o >= 0; o--)
          if (e(this.atoms[o])) return this.atoms[o];
        for (let o = this.lastOffset; o < r; o--)
          if (e(this.atoms[o])) return this.atoms[o]
      }
      extractAtoms(e) {
        let r = this.getAtoms(e);
        r.length === 1 && r[0].type === "root" && (r = r[0].children);
        for (let i of r) i.parent.removeChild(i);
        return r
      }
      deleteAtoms(e) {
        this.extractAtoms(e), this.position = e[0]
      }
      atomToString(e, r) {
        let i = r != null ? r : "latex";
        if (i.startsWith("latex")) return Te.serialize([e], {
          expandMacro: i === "latex-expanded",
          skipStyles: i === "latex-unstyled",
          defaultMode: this.mathfield.options.defaultMode
        });
        if (i === "math-ml") return V(e);
        if (i === "spoken") return It(e);
        if (i === "spoken-text") {
          let o = window.MathfieldElement.textToSpeechMarkup;
          window.MathfieldElement.textToSpeechMarkup = "";
          let a = It(e);
          return window.MathfieldElement.textToSpeechMarkup = o, a
        }
        if (i === "spoken-ssml" || i === "spoken-ssml-with-highlighting") {
          let o = window.MathfieldElement.textToSpeechMarkup;
          window.MathfieldElement.textToSpeechMarkup = "ssml";
          let a = It(e);
          return window.MathfieldElement.textToSpeechMarkup = o, a
        }
        if (i === "math-json") {
          if (!window.MathfieldElement.computeEngine) return globalThis[Symbol.for("io.cortexjs.compute-engine")] || console.error(`The CortexJS Compute Engine library is not available.
Load the library, for example with:
import "https://unpkg.com/@cortex-js/compute-engine?module"`), '["Error", "compute-engine-not-available"]';
          try {
            let o = window.MathfieldElement.computeEngine.parse(g.serialize(e, {
              expandMacro: !1,
              defaultMode: "math"
            }));
            return JSON.stringify(o.json)
          } catch (o) {
            return JSON.stringify(["Error", `'${o.toString()}'`])
          }
        }
        return i === "ascii-math" ? ue(e) : (console.error("MathLive: Unknown format :", i), "")
      }
      getValue(e, r, i) {
        if (e === void 0) return this.atomToString(this.root, "latex");
        if (typeof e == "string") return this.atomToString(this.root, e);
        let o, a;
        if (Tt(e) && Tt(r) ? (o = [this.normalizeRange([e, r])], a = i != null ? i : "latex") : Mr(e) ? (o = [this.normalizeRange(e)], a = r) : Wr(e) ? (o = e.ranges, a = r) : (o = [], a = "latex"), a.startsWith("latex")) {
          let n = {
            expandMacro: a === "latex-expanded",
            skipStyles: a === "latex-unstyled",
            defaultMode: this.mathfield.options.defaultMode
          };
          return U(o.map(s => g.serialize(this.getAtoms(s), n)))
        }
        return o.map(n => this.getAtoms(n).map(s => this.atomToString(s, a)).join("")).join("")
      }
      extendSelection(e) {
        let r = this._anchor;
        if (e === "forward") {
          let o = this._position;
          do {
            let a = this.at(o + 1);
            if (a != null && a.inCaptureSelection) {
              for (; !a.captureSelection;) a = a.parent;
              o = this.offsetOf(a == null ? void 0 : a.lastChild) + 1
            } else o += 1
          } while (o <= this.lastOffset && this.at(o).isFirstSibling);
          return o === r - 1 && this.at(r).type === "first" && (o = r), this.extendSelectionTo(r, o)
        }
        let i = this._position - 1;
        if (i < 0) return !1;
        for (; i >= 0 && this.at(i).isLastSibling;) {
          let o = this.at(i);
          if (o != null && o.inCaptureSelection) {
            for (; !o.captureSelection;) o = o.parent;
            i = this.offsetOf(o.firstChild) - 1
          } else i -= 1
        }
        return i < 0 && (i = 0), i === r + 1 && this.at(i).type === "first" && (r = i), this.extendSelectionTo(r, i)
      }
      extendSelectionTo(e, r) {
        return !this.mathfield.contentEditable && this.mathfield.userSelect === "none" ? !1 : this.deferNotifications({
          selection: !0
        }, () => {
          let i = this.normalizeRange([e, r]),
            [o, a] = i,
            {
              parent: n
            } = this.at(a);
          if (n && (n.type === "genfrac" || n.type === "msubsup"))
            for (; n !== this.root && Oa(this, n, [o, a]);) a = this.offsetOf(n), n = n.parent;
          for (n = this.at(o).parent; n !== this.root && Oa(this, n, [o, a]);) o = this.offsetOf(n.leftSibling), n = n.parent;
          if (n = this.at(a).parent, (n == null ? void 0 : n.type) === "genfrac")
            for (; n !== this.root && Oa(this, n, [o, a]);) a = this.offsetOf(n), a >= 0, n = n.parent;
          this._position = this.normalizeOffset(r), this._selection = {
            ranges: [
              [o, a]
            ],
            direction: "none"
          }
        })
      }
      setListeners(e) {
        this.listeners = e
      }
      announce(e, r, i = []) {
        var a, n;
        ((n = (a = this.mathfield.host) == null ? void 0 : a.dispatchEvent(new CustomEvent("announce", {
          detail: {
            command: e,
            previousPosition: r,
            atoms: i
          },
          cancelable: !0,
          bubbles: !0,
          composed: !0
        }))) != null ? n : !0) && Bs(this.mathfield, e, r, i)
      }
      deferNotifications(e, r) {
        let i = this._selection,
          o = this._anchor,
          a = this._position,
          n = this.suppressChangeNotifications;
        this.suppressChangeNotifications = !0;
        let s = this.root.changeCounter;
        r();
        let l = this.root.changeCounter !== s,
          c = o !== this._anchor || a !== this._position || Xn(this._selection, i) === "different";
        return this.suppressChangeNotifications = n, e.content && l && J(this, {
          inputType: e.type
        }), e.selection && c && Mo(this), l || c
      }
      normalizeOffset(e) {
        return e > 0 ? e = Math.min(e, this.lastOffset) : e < 0 && (e = this.lastOffset + e + 1), e
      }
      normalizeRange(e) {
        let [r, i] = e;
        return r = this.normalizeOffset(r), i = this.normalizeOffset(i), r < i ? [r, i] : [i, r]
      }
      normalizeSelection(e, r) {
        var o;
        let i;
        if (Tt(e)) {
          let a = this.normalizeOffset(e);
          if (Tt(r)) {
            let n = this.normalizeOffset(r);
            i = a <= n ? {
              ranges: [
                [a, n]
              ],
              direction: "none"
            } : {
              ranges: [
                [n, a]
              ],
              direction: "backward"
            }
          } else i = {
            ranges: [
              [a, a]
            ],
            direction: "none"
          }
        } else if (Mr(e)) {
          let a = this.normalizeOffset(e[0]),
            n = this.normalizeOffset(e[1]);
          i = a <= n ? {
            ranges: [
              [a, n]
            ],
            direction: "none"
          } : {
            ranges: [
              [n, a]
            ],
            direction: "backward"
          }
        } else Wr(e) && (i = {
          ranges: e.ranges.map(a => this.normalizeRange(a)),
          direction: (o = e.direction) != null ? o : "none"
        });
        return i
      }
    };

    function Ks(t, e, r, i) {
      let o = t.offsetOf(e);
      if (o < r || o > i) return !1;
      if (!e.hasChildren) return !0;
      let a = t.offsetOf(e.firstChild);
      if (a >= r && a <= i) {
        let n = t.offsetOf(e.lastChild);
        if (n >= r && n <= i) return !0
      }
      return !1
    }

    function Oa(t, e, r) {
      if (!(e != null && e.hasChildren)) return !1;
      let [i, o] = r, a = t.offsetOf(e.firstChild), n = t.offsetOf(e.lastChild);
      return a >= i && a <= o && n >= a && n <= o
    }

    function Lo(t, e) {
      let r = t.at(t.position);
      for (; r && !(Array.isArray(r.treeBranch) && r.parent instanceof j);) r = r.parent;
      if (Array.isArray(r == null ? void 0 : r.treeBranch) && (r == null ? void 0 : r.parent) instanceof j) {
        let i = r.parent,
          o;
        switch (e) {
          case "after row":
            i.addRowAfter(r.treeBranch[0]), o = t.offsetOf(i.getCell(r.treeBranch[0] + 1, 0)[0]);
            break;
          case "after column":
            if (i.maxColumns <= i.colCount) {
              t.announce("plonk");
              return
            }
            i.addColumnAfter(r.treeBranch[1]), o = t.offsetOf(i.getCell(r.treeBranch[0], r.treeBranch[1] + 1)[0]);
            break;
          case "before row":
            i.addRowBefore(r.treeBranch[0]), o = t.offsetOf(i.getCell(r.treeBranch[0] - 1, 0)[0]);
            break;
          case "before column":
            if (i.maxColumns <= i.colCount) {
              t.announce("plonk");
              return
            }
            i.addColumnBefore(r.treeBranch[1]), o = t.offsetOf(i.getCell(r.treeBranch[0], r.treeBranch[1] - 1)[0]);
            break
        }
        t.setSelection(o, o + 1)
      }
    }

    function za(t) {
      return H(t, {
        inputType: "insertText"
      }) ? (Lo(t, "after row"), J(t, {
        inputType: "insertText"
      }), !0) : !1
    }

    function lu(t) {
      return H(t, {
        inputType: "insertText"
      }) ? (Lo(t, "before row"), J(t, {
        inputType: "insertText"
      }), !0) : !1
    }

    function Ra(t) {
      return H(t, {
        inputType: "insertText"
      }) ? (Lo(t, "after column"), J(t, {
        inputType: "insertText"
      }), !0) : !1
    }

    function cu(t) {
      return H(t, {
        inputType: "insertText"
      }) ? (Lo(t, "before column"), J(t, {
        inputType: "insertText"
      }), !0) : !1
    }

    function Os(t, e) {
      let r = t.at(t.position);
      for (; r && !(Array.isArray(r.treeBranch) && r.parent instanceof j);) r = r.parent;
      if (Array.isArray(r == null ? void 0 : r.treeBranch) && (r == null ? void 0 : r.parent) instanceof j) {
        let i = r.parent,
          o = r.treeBranch,
          a;
        switch (e) {
          case "row":
            if (i.rowCount > 1) {
              i.removeRow(o[0]);
              let n = i.getCell(Math.max(0, o[0] - 1), o[1]);
              a = t.offsetOf(n[n.length - 1])
            }
            break;
          case "column":
            if (i.colCount > i.minColumns) {
              i.removeColumn(o[1]);
              let n = i.getCell(o[0], Math.max(0, o[1] - 1));
              a = t.offsetOf(n[n.length - 1])
            }
            break
        }
        a && t.setPositionHandlingPlaceholder(a)
      }
    }

    function uu(t) {
      return H(t, {
        inputType: "deleteContent"
      }) ? (Os(t, "row"), J(t, {
        inputType: "deleteContent"
      }), !0) : !1
    }

    function du(t) {
      return H(t, {
        inputType: "deleteContent"
      }) ? (Os(t, "column"), J(t, {
        inputType: "deleteContent"
      }), !0) : !1
    }
    de({
      addRowAfter: za,
      addColumnAfter: Ra,
      addRowBefore: lu,
      addColumnBefore: cu,
      removeRow: uu,
      removeColumn: du
    }, {
      target: "model",
      category: "array-edit"
    });

    function Ri(t, e, r, i) {
      var a, n, s, l, c, u;
      let o = r.parent;
      if (o && r instanceof ie) {
        let d = !i && e === "forward" || i === "body" && e === "backward",
          m = d ? t.offsetOf(r.firstChild) : t.offsetOf(r.lastChild);
        return d ? r.rightDelim !== "?" && r.rightDelim !== "." ? (r.leftDelim = ".", r.isDirty = !0) : (o.addChildrenAfter(r.removeBranch("body"), r), o.removeChild(r), m--) : r.leftDelim !== "?" && r.leftDelim !== "." ? (r.rightDelim = ".", r.isDirty = !0) : (o.addChildrenAfter(r.removeBranch("body"), r), o.removeChild(r), m--), t.position = m, !0
      }
      if (o && r.type === "surd") {
        if (e === "forward" && !i || e === "backward" && i === "body") {
          let d = r.leftSibling;
          r.hasChildren && o.addChildrenAfter(r.removeBranch("body"), r), o.removeChild(r), t.position = t.offsetOf(d)
        } else e === "forward" && i === "body" ? t.position = t.offsetOf(r) : !i && e === "backward" ? r.hasChildren ? t.position = t.offsetOf(r.lastChild) : (t.position = Math.max(0, t.offsetOf(r) - 1), o.removeChild(r)) : i === "above" && (r.hasEmptyBranch("above") && r.removeBranch("above"), e === "backward" ? t.position = t.offsetOf(r.leftSibling) : t.position = t.offsetOf(r.body[0]));
        return !0
      }
      if (o && (r.type === "box" || r.type === "enclose")) {
        let d = i && e === "backward" || !i && e === "forward" ? r.leftSibling : r.lastChild;
        return o.addChildrenAfter(r.removeBranch("body"), r), o.removeChild(r), t.position = t.offsetOf(d), !0
      }
      if (r.type === "genfrac" || r.type === "overunder") {
        if (!i) return r.type === "overunder" && r.hasEmptyBranch("body") || r.type === "genfrac" && r.hasEmptyBranch("below") && r.hasEmptyBranch("above") ? !1 : (t.position = t.offsetOf(e === "forward" ? r.firstChild : r.lastChild), !0);
        let d = r.context.fractionNavigationOrder === "numerator-denominator" ? "above" : "below",
          m = d === "above" ? "below" : "above";
        if (o && (e === "forward" && i === d || e === "backward" && i === m)) {
          let h = r.removeBranch(d),
            f = r.removeBranch(m);
          return o.addChildrenAfter([...h, ...f], r), o.removeChild(r), t.position = t.offsetOf(h.length > 0 ? h[h.length - 1] : f[0]), !0
        }
        return e === "backward" ? t.position = t.offsetOf(r.leftSibling) : t.position = t.offsetOf(r), !0
      }
      if (r.isExtensibleSymbol || r.type === "msubsup") {
        if (!i && e === "forward") return !1;
        if (!i) {
          if (r.subscript || r.superscript) {
            let d = e === "forward" ? (s = (a = r.superscript) == null ? void 0 : a[0]) != null ? s : (n = r.subscript) == null ? void 0 : n[0] : (u = (l = r.subscript) == null ? void 0 : l[0].lastSibling) != null ? u : (c = r.superscript) == null ? void 0 : c[0].lastSibling;
            return d && (t.position = t.offsetOf(d)), !0
          }
          return !1
        }
        if (i && r.hasEmptyBranch(i) && r.removeBranch(i), !r.hasChildren) {
          let d = e === "forward" ? t.offsetOf(r) : Math.max(0, t.offsetOf(r) - 1);
          return r.parent.removeChild(r), t.position = d, !0
        }
        if (i === "superscript")
          if (e === "backward") {
            let d = t.offsetOf(r.firstChild) - 1;
            d >= 0, t.position = d
          } else r.subscript ? t.position = t.offsetOf(r.subscript[0]) : t.position = t.offsetOf(r);
        else i === "subscript" && (e === "backward" && r.superscript ? t.position = t.offsetOf(r.superscript[0].lastSibling) : e === "backward" ? t.position = t.offsetOf(r.firstChild) - 1 : t.position = t.offsetOf(r));
        return !0
      }
      if ((o == null ? void 0 : o.type) === "genfrac" && !i && r.type !== "first") {
        let d = t.offsetOf(r.leftSibling);
        return o.removeChild(r), o.hasEmptyBranch("above") && o.hasEmptyBranch("below") ? (d = t.offsetOf(o.leftSibling), o.parent.removeChild(o), t.announce("delete", void 0, [o]), t.position = d, !0) : (t.announce("delete", void 0, [r]), t.position = d, !0)
      }
      return !1
    }

    function zs(t) {
      return !t.mathfield.isSelectionEditable || !H(t, {
        inputType: "deleteContentBackward"
      }) ? !1 : t.selectionIsCollapsed ? t.deferNotifications({
        content: !0,
        selection: !0,
        type: "deleteContentBackward"
      }, () => {
        let e = t.at(t.position);
        if (!(e && Ri(t, "backward", e))) {
          if (e != null && e.isFirstSibling) {
            if (Ri(t, "backward", e.parent, e.treeBranch)) return;
            e = null
          }
          if (!e) {
            t.announce("plonk");
            return
          }
          t.position = t.offsetOf(e.leftSibling), e.parent.removeChild(e), t.announce("delete", void 0, [e])
        }
      }) : mt(t, xe(t.selection), "deleteContentBackward")
    }

    function Rs(t) {
      return !t.mathfield.isSelectionEditable || !H(t, {
        inputType: "deleteContentForward"
      }) ? !1 : t.selectionIsCollapsed ? t.deferNotifications({
        content: !0,
        selection: !0,
        type: "deleteContentForward"
      }, () => {
        var i, o;
        let e = t.at(t.position).rightSibling;
        if (e && Ri(t, "forward", e)) return;
        if (e) {
          if (t.at(t.position).isLastSibling && Ri(t, "forward", e.parent, e.treeBranch)) return
        } else {
          if (e = t.at(t.position), e.isLastSibling && Ri(t, "forward", e.parent, e.treeBranch)) return;
          e = void 0
        }
        if (t.position === t.lastOffset || !e) {
          t.announce("plonk");
          return
        }
        e.parent.removeChild(e);
        let r = (i = t.at(t.position)) == null ? void 0 : i.rightSibling;
        for (;
          (r == null ? void 0 : r.type) === "msubsup";) r.parent.removeChild(r), r = (o = t.at(t.position)) == null ? void 0 : o.rightSibling;
        t.announce("delete", void 0, [e])
      }) : mt(t, xe(t.selection), "deleteContentForward")
    }

    function mt(t, e, r) {
      let i = t.getAtoms(e);
      if (i.length > 0 && i[0].parent) {
        let o = i[0].parent.firstChild;
        o.type === "first" && (o = o.rightSibling);
        let a = i[i.length - 1].parent.lastChild,
          n = i[0];
        n.type === "first" && (n = n.rightSibling);
        let s = i[i.length - 1];
        if (n === o && s === a) {
          let l = i[0].parent;
          l.type !== "root" && l.type !== "prompt" && (e = [t.offsetOf(l.leftSibling), t.offsetOf(l.rightSibling)])
        }
        if (i.length === 1 && i[0].type === "placeholder" && i[0].parent.type === "genfrac") {
          let l = i[0].parent,
            c = i[0].treeBranch === "below" ? "above" : "below",
            u = t.offsetOf(l.leftSibling);
          return t.deferNotifications({
            content: !0,
            selection: !0,
            type: r
          }, () => {
            var m, h;
            let d = l.removeBranch(c);
            if (d.length === 1 && d[0].type === "placeholder")(h = l.parent) == null || h.removeChild(l), t.position = Math.max(0, u);
            else {
              let f = l.parent.addChildrenAfter(d, l);
              (m = l.parent) == null || m.removeChild(l), t.position = t.offsetOf(f)
            }
          })
        }
      }
      return t.deferNotifications({
        content: !0,
        selection: !0,
        type: r
      }, () => t.deleteAtoms(e))
    }

    function Fs(t, e) {
      let r = t.at(t.position);
      if (r.type === "composition") r.value = e;
      else {
        let {
          caret: i
        } = r;
        r.caret = "";
        let o = new sr(e, t.mathfield, {
          mode: r.mode
        });
        o.caret = i, r.parent.addChildAfter(o, r), t.position += 1
      }
    }

    function Ns(t) {
      let e = t.at(t.position);
      e.type === "composition" && (e.parent.removeChild(e), t.position -= 1)
    }

    function Co(t, e) {
      let r = t.at(e),
        i;
      if (r) {
        i = r.mode;
        let o = r.parent;
        for (; !i && o;) o && (i = o.mode), o = o.parent
      }
      return i
    }

    function Dt(t, e) {
      !t || !e || (Y(t) ? t.forEach(r => Dt(r, e)) : typeof t == "object" && !t.style.color && !t.style.backgroundColor && !t.style.fontFamily && !t.style.fontShape && !t.style.fontSeries && !t.style.fontSize && !t.style.variant && !t.style.variantStyle && (t.applyStyle(e), Dt(t.body, e), Dt(t.above, e), Dt(t.below, e), Dt(t.subscript, e), Dt(t.superscript, e)))
    }

    function Fi(t, e, r, i) {
      function o(n, s) {
        for (let l of a)
          if (l.style[n] !== s) return !1;
        return !0
      }
      if (e = t.normalizeRange(e), e[0] === e[1]) return !1;
      let a = t.getAtoms(e, {
        includeChildren: !0
      });
      i.operation === "toggle" && (r.color && o("color", r.color) && (r.color = "none", r.verbatimColor = void 0), r.backgroundColor && o("backgroundColor", r.backgroundColor) && (r.backgroundColor = "none", r.verbatimBackgroundColor = void 0), r.fontFamily && o("fontFamily", r.fontFamily) && (r.fontFamily = "none"), r.fontSeries && o("fontSeries", r.fontSeries) && (r.fontSeries = "auto"), r.fontShape && o("fontShape", r.fontShape) && (r.fontShape = "auto"), r.fontSize && o("fontSize", r.fontSize) && (r.fontSize = nt));
      for (let n of a) n.applyStyle(r);
      return !0
    }
    var Fa = `@keyframes ML__caret-blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
.ML__caret:after {
  content: '';
  border: none;
  border-radius: 2px;
  border-right: 2px solid var(--caret-color, var(--ML__caret-color));
  margin-right: -2px;
  position: relative;
  left: -1px;
  animation: ML__caret-blink 1.05s step-end forwards infinite;
}
.ML__text-caret:after {
  content: '';
  border: none;
  border-radius: 1px;
  border-right: 1px solid var(--caret-color, var(--ML__caret-color));
  margin-right: -1px;
  position: relative;
  left: 0;
  animation: ML__caret-blink 1.05s step-end forwards infinite;
}
.ML__latex-caret:after {
  content: '_';
  border: none;
  margin-right: 0;
  margin-right: calc(-1ex - 2px);
  position: relative;
  color: var(--caret-color, var(--ML__caret-color));
  animation: ML__caret-blink 1.05s step-end forwards infinite;
}
.ML__container {
  display: inline-flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 39px;
  /* Need some room for the virtual keyboard toggle */
  width: 100%;
  /* Encourage browsers to consider allocating a hardware accelerated
   layer for this element. */
  isolation: isolate;
  /* Prevent the browser from trying to interpret touch gestures in the field */
  /* "Disabling double-tap to zoom removes the need for browsers to
        delay the generation of click events when the user taps the screen." */
  touch-action: none;
  --ML__selection-background-color: hsl(var(--hue, 212), 97%, 85%);
  --ML__text-highlight-background-color: hsla(var(--hue, 212), 40%, 50%, 0.1);
  --ML__contains-highlight-background-color: hsl(var(--hue, 212), 40%, 95%);
  --ML__selection-color: currentColor;
  --ML__caret-color: hsl(var(--hue, 212), 40%, 49%);
  --ML__smart-fence-color: currentColor;
  --ML__latex-color: var(--primary, hsl(var(--hue, 212), 40%, 50%));
  --ML__correct-color: #10a000;
  --ML__incorrect-color: #a01b00;
  --ML__placeholder-color: hsl(var(--hue, 212), 40%, 49%);
}
/* This is the actual field content (formula) */
.ML__content {
  display: flex;
  align-items: center;
  align-self: center;
  position: relative;
  overflow: hidden;
  padding: 2px 0 2px 1px;
  width: 100%;
}
.ML__virtual-keyboard-toggle {
  box-sizing: border-box;
  display: flex;
  align-self: center;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 0;
  margin-right: 4px;
  cursor: pointer;
  /* Avoid some weird blinking with :hover */
  border-radius: 8px;
  border: 1px solid transparent;
  transition: background 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
  color: var(--primary, hsl(var(--hue, 212), 40%, 50%));
  fill: currentColor;
  background: transparent;
}
.ML__virtual-keyboard-toggle:hover {
  background: hsla(0, 0%, 70%, 0.3);
  color: #333;
  fill: currentColor;
}
.ML__virtual-keyboard-toggle > span {
  display: flex;
  align-self: center;
  align-items: center;
}
/* The invisible element used to capture keyboard events. We're just trying
 really hard to make sure it doesn't show. */
.ML__keyboard-sink {
  display: inline-block;
  resize: none;
  outline: none;
  border: none;
  /* Need these for Microsoft Edge */
  position: fixed;
  clip: rect(0 0 0 0);
  /* Need this to prevent iOS Safari from auto-zooming */
  font-size: 1em;
  font-family: KaTeX_Main;
}
.ML__focused .ML__text {
  background: var(--highlight-text, var(--ML__text-highlight-background-color));
}
/* When using smartFence, the anticipated closing fence is displayed
with this style */
.ML__smart-fence__close {
  opacity: var(--smart-fence-opacity, 0.5);
  color: var(--smart-fence-color, var(--ML__smart-fence-color));
}
.ML__focused .ML__selection {
  background: var(--selection-background-color-focused, var(--selection-background-color, var(--ML__selection-background-color))) !important;
}
.ML__focused .ML__selected,
.ML__focused .ML__selected .ML__contains-caret,
.ML__focused .ML__selected .ML__smart-fence__close,
.ML__focused .ML__selected .ML__placeholder {
  color: var(--selection-color-focused, var(--selection-color, var(--ML__selection-color))) !important;
}
.ML__selection {
  box-sizing: border-box;
  background: var(--selection-background-color, var(--ML__selection-background-color)) !important;
}
.ML__selected,
.ML__selected .ML__contains-caret,
.ML__selected .ML__smart-fence__close,
.ML__selected .ML__placeholder {
  color: var(--selection-color, var(--ML__selection-color));
  opacity: 1;
}
.ML__contains-caret.ML__close,
.ML__contains-caret.ML__open,
.ML__contains-caret > .ML__close,
.ML__contains-caret > .ML__open,
.ML__contains-caret .ML__sqrt-sign,
.ML__contains-caret .ML__sqrt-line {
  color: var(--caret-color, var(--ML__caret-color));
}
.ML__contains-highlight {
  background: var(--contains-highlight-backround-color, var(--ML__contains-highlight));
  box-sizing: border-box;
}
.ML__latex {
  font-family: 'IBM Plex Mono', 'Source Code Pro', Consolas, 'Roboto Mono', Menlo, 'Bitstream Vera Sans Mono', 'DejaVu Sans Mono', Monaco, Courier, monospace;
  font-weight: 400;
  color: var(--latex-color, var(--ML__latex-color));
}
.ML__suggestion {
  opacity: 0.5;
}
.ML__virtual-keyboard-toggle.is-visible.is-pressed:hover {
  background: hsl(var(--hue, 212), 25%, 35%);
  color: #fafafa;
  fill: currentColor;
}
.ML__virtual-keyboard-toggle:focus {
  outline: none;
  border-radius: 8px;
  border: 2px solid var(--primary, hsl(var(--hue, 212), 40%, 50%));
}
.ML__virtual-keyboard-toggle.is-pressed,
.ML__virtual-keyboard-toggle.is-active:hover,
.ML__virtual-keyboard-toggle.is-active {
  background: hsl(var(--hue, 212), 25%, 35%);
  color: #fafafa;
  fill: currentColor;
}
/* This class is used to implement the \`\\mathtip\` and \`\\texttip\` commands
   For UI elements, see \`[data-ML__tooltip]\`
*/
.ML__tooltip-container {
  position: relative;
  transform: scale(0);
}
.ML__tooltip-container .ML__tooltip-content {
  position: fixed;
  display: inline-table;
  visibility: hidden;
  z-index: 2;
  width: max-content;
  max-width: 400px;
  padding: 12px 12px;
  border-radius: 8px;
  background: #616161;
  color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
}
.ML__tooltip-container .ML__tooltip-content .ML__text {
  white-space: normal;
}
.ML__tooltip-container .ML__tooltip-content .ML__base {
  display: contents;
}
.ML__tooltip-container:hover .ML__tooltip-content {
  visibility: visible;
  opacity: 1;
  font-size: 0.75em;
  transform: scale(1) translate(0, 3em);
}
/* Add an attribute 'data-ML__tooltip' to automatically show a
   tooltip over a element on hover.
   Use 'data-position="top"' to place the tooltip above the
   element rather than below.
   Use 'data-delay' to delay the triggering of the tooltip.
*/
[data-ML__tooltip] {
  position: relative;
}
[data-ML__tooltip][data-placement='top']::after {
  top: inherit;
  bottom: 100%;
}
[data-ML__tooltip]::after {
  content: attr(data-ML__tooltip);
  position: absolute;
  display: none;
  z-index: 2;
  right: 110%;
  left: calc(100% + 8px);
  width: max-content;
  max-width: 200px;
  padding: 8px 8px;
  border-radius: 2px;
  background: #616161;
  color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 12px;
  /* Phone */
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.15s cubic-bezier(0.4, 0, 1, 1);
}
@media only screen and (max-width: 767px) {
  [data-ML__tooltip]::after {
    padding: 8px 16px;
    font-size: 16px;
  }
}
:not(.tracking) [data-ML__tooltip]:hover {
  position: relative;
}
:not(.tracking) [data-ML__tooltip]:hover::after {
  visibility: visible;
  display: inline-table;
  opacity: 1;
  transform: scale(1);
}
[data-ML__tooltip][data-delay]::after {
  transition-delay: 0s;
}
[data-ML__tooltip][data-delay]:hover::after {
  transition-delay: 1s;
  /* attr(data-delay); Should work. But doesn't. */
}
`;
    var pu = new Set(["Backquote", "Digit0", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Minus", "Equal", "IntlYen", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "IntlBackslash", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "IntlRo", "Space", "Numpad0", "Numpad1", "Numpad2", "Numpad3", "Numpad4", "Numpad5", "Numpad6", "Numpad7", "Numpad8", "Numpad9", "NumpadAdd", "NumpadComma", "NumpadDecimal", "NumpadDivide", "NumpadEqual", "NumpadHash", "NumpadMultiply", "NumpadParenLeft", "NumpadParenRight", "NumpadStar", "NumpadSubstract"]);

    function To(t) {
      return t.ctrlKey || t.metaKey || ["Dead", "Process"].includes(t.key) ? !1 : t.code === "" ? !0 : pu.has(t.code)
    }

    function Is(t) {
      t = ls(t);
      let e = [];
      return t.ctrlKey && e.push("ctrl"), t.metaKey && e.push("meta"), t.altKey && e.push("alt"), t.shiftKey && e.push("shift"), e.length === 0 ? "[" + t.code + "]" : (e.push("[" + t.code + "]"), e.join("+"))
    }

    function qs(t, e, r) {
      let i = null,
        o = null,
        a = !1,
        n = !1,
        s = !1;
      return t.addEventListener("keydown", l => {
        if (a || l.key === "Process" || l.code === "CapsLock" || /(Control|Meta|Alt|Shift)(Left|Right)/.test(l.code)) {
          i = null;
          return
        }
        i = l, o = null, r.onKeystroke(Is(l), l) || (i = null, t.textContent = "")
      }, !0), t.addEventListener("keypress", l => {
        a || (i && o && r.onKeystroke(Is(i), i), o = l)
      }, !0), t.addEventListener("compositionstart", l => {
        t.textContent = "", a = !0, r.onCompositionStart(l.data)
      }, !0), t.addEventListener("compositionupdate", l => {
        a && r.onCompositionUpdate(l.data)
      }, !0), t.addEventListener("compositionend", l => {
        t.textContent = "", a && (a = !1, r.onCompositionEnd(l.data))
      }, !0), t.addEventListener("beforeinput", l => l.stopImmediatePropagation()), t.addEventListener("input", l => {
        var c;
        if (!a && (t.textContent = "", l.inputType !== "insertCompositionText")) {
          if (l.inputType === "insertFromPaste") {
            l.preventDefault(), l.stopPropagation();
            return
          }
          r.onInput((c = l.data) != null ? c : ""), l.preventDefault(), l.stopPropagation()
        }
      }), t.addEventListener("paste", l => {
        t.focus(), t.textContent = "", r.onPaste(l) || l.preventDefault(), l.stopImmediatePropagation()
      }, !0), t.addEventListener("cut", l => r.onCut(l), !0), t.addEventListener("copy", l => r.onCopy(l), !0), t.addEventListener("blur", l => {
        var u, d, m, h;
        if (((d = (u = l.relatedTarget) == null ? void 0 : u._mathfield) == null ? void 0 : d.element) === e) {
          t.focus(), l.preventDefault(), l.stopPropagation();
          return
        }
        let c = (m = Pt.scrim) == null ? void 0 : m.state;
        if (c === "open" || c === "opening") {
          l.preventDefault(), l.stopPropagation();
          return
        }
        if (l.relatedTarget === l.target.getRootNode().host) {
          l.preventDefault(), l.stopPropagation();
          return
        }
        s || n || (s = !0, i = null, o = null, (h = r.onBlur) == null || h.call(r), s = !1)
      }, !0), t.addEventListener("focus", l => {
        var c;
        s || n || (n = !0, (c = r.onFocus) == null || c.call(r), n = !1)
      }, !0), {
        cancelComposition: () => {
          a && (t.blur(), requestAnimationFrame(() => t.focus()))
        },
        blur: () => {
          typeof t.blur == "function" && t.blur()
        },
        focus: () => {
          !n && typeof t.focus == "function" && t.focus()
        },
        hasFocus: () => hu() === t,
        setAriaLabel: l => t.setAttribute("aria-label", l),
        setValue: l => {
          var c;
          t.innerText = l, t.style.top = "-1000px", (c = window.getSelection()) == null || c.selectAllChildren(t)
        },
        moveTo: (l, c) => {
          t.style.top = `${c}px`, t.style.left = `${l}px`
        }
      }
    }

    function hu() {
      var e;
      let t = document.activeElement;
      for (;
        (e = t == null ? void 0 : t.shadowRoot) != null && e.activeElement;) t = t.shadowRoot.activeElement;
      return t
    }

    function oi(t) {
      var r;
      if (!t) return "";
      let e;
      return t.key === "Unidentified" && t.target && (e = t.target.value), e = (r = e != null ? e : t.key) != null ? r : t.code, /^(Dead|Return|Enter|Tab|Escape|Delete|PageUp|PageDown|Home|End|Help|ArrowLeft|ArrowRight|ArrowUp|ArrowDown)$/.test(e) && (e = ""), e
    }
    var Eo = class {
      constructor(e) {
        this.recording = !1;
        this.canCoalesce = !1;
        this.model = e, this.reset()
      }
      get maximumDepth() {
        return 1e3
      }
      reset() {
        this.stack = [], this.index = -1
      }
      startRecording() {
        this.recording = !0
      }
      canUndo() {
        return this.index > 0
      }
      canRedo() {
        return this.index !== this.stack.length - 1
      }
      undo() {
        return this.canUndo() ? (this.model.setState(this.stack[this.index - 1], {
          suppressChangeNotifications: !1,
          type: "undo"
        }), this.index -= 1, this.canCoalesce = !1, !0) : !1
      }
      redo() {
        return this.canRedo() ? (this.index += 1, this.model.setState(this.stack[this.index], {
          suppressChangeNotifications: !1,
          type: "redo"
        }), this.canCoalesce = !1, !0) : !1
      }
      pop() {
        this.canUndo() && (this.index -= 1, this.stack.pop())
      }
      snapshot() {
        return this.recording ? (this.stack.splice(this.index + 1, this.stack.length - this.index - 1), this.stack.push(this.model.getState()), this.index++, this.stack.length > this.maximumDepth && this.stack.shift(), this.canCoalesce = !1, !0) : !1
      }
      snapshotAndCoalesce() {
        if (!this.recording) return !1;
        this.canCoalesce && this.pop();
        let e = this.snapshot();
        return this.canCoalesce = !0, e
      }
    };

    function Na(t) {
      let e = t.position,
        r = t.at(e).parent;
      return !r || r.type === "root" ? (t.announce("plonk"), !1) : (t.position = t.offsetOf(r), t.announce("move", e), !0)
    }

    function fu(t) {
      let e = 0,
        r = t.at(t.position),
        i = !1;
      for (; r;)(!r.hasEmptyBranch("superscript") || !r.hasEmptyBranch("subscript")) && (e += 1), r.hasEmptyBranch("superscript") ? r.hasEmptyBranch("subscript") || (i = !1) : i = !0, r = r.parent;
      return i ? e : 0
    }

    function gu(t) {
      let e = 0,
        r = t.at(t.position),
        i = !1;
      for (; r;)(!r.hasEmptyBranch("superscript") || !r.hasEmptyBranch("subscript")) && (e += 1), r.hasEmptyBranch("superscript") ? r.hasEmptyBranch("subscript") || (i = !0) : i = !1, r = r.parent;
      return i ? e : 0
    }

    function $s(t) {
      var r;
      if (t.collapseSelection(), fu(t) >= t.mathfield.options.scriptDepth[1]) return t.announce("plonk"), !1;
      let e = t.at(t.position);
      return e.subsupPlacement === void 0 && (((r = e.rightSibling) == null ? void 0 : r.type) !== "msubsup" && e.parent.addChildAfter(new ft(t.mathfield, {
        style: e.computedStyle
      }), e), e = e.rightSibling), e.createBranch("superscript"), t.setSelection(t.getSiblingsRange(t.offsetOf(e.superscript[0]))), !0
    }

    function Vs(t) {
      var r;
      if (t.collapseSelection(), gu(t) >= t.mathfield.options.scriptDepth[0]) return t.announce("plonk"), !1;
      let e = t.at(t.position);
      return e.subsupPlacement === void 0 && (((r = t.at(t.position + 1)) == null ? void 0 : r.type) !== "msubsup" && e.parent.addChildAfter(new ft(t.mathfield, {
        style: t.at(t.position).computedStyle
      }), e), e = t.at(t.position + 1)), e.createBranch("subscript"), t.setSelection(t.getSiblingsRange(t.offsetOf(e.subscript[0]))), !0
    }

    function yu() {
      function t(l) {
        let c = [],
          u = [];
        return [...l.querySelectorAll(`input, select, textarea, a[href], button,
        [tabindex], audio[controls], video[controls],
        [contenteditable]:not([contenteditable="false"]), details>summary`)].filter(e).forEach((m, h) => {
          let f = i(m);
          f === 0 ? c.push(m) : u.push({
            documentOrder: h,
            tabIndex: f,
            node: m
          })
        }), u.sort((m, h) => m.tabIndex === h.tabIndex ? m.documentOrder - h.documentOrder : m.tabIndex - h.tabIndex).map(m => m.node).concat(c)
      }

      function e(l) {
        return !(!r(l) || o(l) || i(l) < 0)
      }

      function r(l) {
        return !(l.disabled || l.type === "hidden" && l.tagName.toUpperCase() === "INPUT" || s(l))
      }

      function i(l) {
        var u;
        let c = Number.parseInt((u = l.getAttribute("tabindex")) != null ? u : "NaN", 10);
        return Number.isNaN(c) ? l.contentEditable === "true" || (l.nodeName === "AUDIO" || l.nodeName === "VIDEO") && l.getAttribute("tabindex") === null ? 0 : l.tabIndex : c
      }

      function o(l) {
        return l.tagName.toUpperCase() === "INPUT" && l.type === "radio" && !n(l)
      }

      function a(l, c) {
        for (let u of l)
          if (u.checked && u.form === c) return u;
        return null
      }

      function n(l) {
        var m;
        if (!l.name) return !0;
        let u = ((m = l.form) != null ? m : l.ownerDocument).querySelectorAll('input[type="radio"][name="' + l.name + '"]'),
          d = a(u, l.form);
        return !d || d === l
      }

      function s(l) {
        if (!fe() || l === document.activeElement || l.contains(document.activeElement)) return !1;
        if (getComputedStyle(l).visibility === "hidden") return !0;
        let c = l.getBoundingClientRect();
        if (c.width === 0 || c.height === 0) return !0;
        for (; l;) {
          if (getComputedStyle(l).display === "none") return !0;
          l = l.parentElement
        }
        return !1
      }
      return fe() ? t(document.body) : []
    }

    function Hs(t, e, r = !0) {
      var l, c;
      let i = e === "forward" ? 1 : -1;
      t.at(t.anchor).type === "placeholder" && xt(t, e);
      let o, a = t.at(t.anchor).parentPrompt;
      a ? e === "forward" ? o = t.offsetOf(a) + 1 : o = t.offsetOf(a.leftSibling) : o = Math.max(t.position + i, 0);
      let n = t.findAtom(u => u.type === "placeholder" || u.type === "prompt" || !t.mathfield.readOnly && u.treeDepth > 2 && u.isFirstSibling && u.isLastSibling, o, e);
      if (!n || e === "forward" && t.offsetOf(n) < o || e === "backward" && t.offsetOf(n) > o) {
        if (!r || !((c = (l = t.mathfield.host) == null ? void 0 : l.dispatchEvent(new CustomEvent("move-out", {
            detail: {
              direction: e
            },
            cancelable: !0,
            bubbles: !0,
            composed: !0
          }))) == null || c)) return t.announce("plonk"), !1;
        let d = yu();
        if (!document.activeElement || d.length <= 1) return t.announce("plonk"), !1;
        let m = d.indexOf(document.activeElement) + i;
        return m < 0 && (m = d.length - 1), m >= d.length && (m = 0), d[m].focus(), !0
      }
      let s = t.position;
      if (n.type === "prompt") t.setSelection(t.offsetOf(n.firstChild), t.offsetOf(n.lastChild));
      else {
        let u = t.offsetOf(n);
        n.type === "placeholder" ? t.setSelection(u - 1, u) : t.position = u
      }
      return t.announce("move", s), !0
    }
    de({
      moveToOpposite: t => {
        let e = {
            superscript: "subscript",
            subscript: "superscript",
            above: "below",
            below: "above"
          },
          r = t.at(t.position),
          {
            parent: i
          } = r;
        if (!i) return t.announce("plonk"), !1;
        let o = r.treeBranch,
          a;
        return typeof o == "string" && (a = e[o]), a ? (i.branch(a) || i.createBranch(a), t.setSelection(t.getBranchRange(t.offsetOf(i), a))) : r.subsupPlacement ? Vs(t) : $s(t)
      },
      moveBeforeParent: t => {
        let {
          parent: e
        } = t.at(t.position);
        return e ? (t.position = t.offsetOf(e), !0) : (t.announce("plonk"), !1)
      },
      moveAfterParent: t => Na(t),
      moveToNextPlaceholder: t => Hs(t, "forward"),
      moveToPreviousPlaceholder: t => Hs(t, "backward"),
      moveToNextChar: t => xt(t, "forward"),
      moveToPreviousChar: t => xt(t, "backward"),
      moveUp: t => xt(t, "upward"),
      moveDown: t => xt(t, "downward"),
      moveToNextWord: t => gr(t, "forward"),
      moveToPreviousWord: t => gr(t, "backward"),
      moveToGroupStart: t => {
        let e = t.offsetOf(t.at(t.position).firstSibling);
        return e === t.position ? (t.announce("plonk"), !1) : (t.position = e, !0)
      },
      moveToGroupEnd: t => {
        let e = t.offsetOf(t.at(t.position).lastSibling);
        return e === t.position ? (t.announce("plonk"), !1) : (t.position = e, !0)
      },
      moveToMathfieldStart: t => t.position === 0 ? (t.announce("plonk"), !1) : (t.position = 0, !0),
      moveToMathfieldEnd: t => t.position === t.lastOffset ? (t.announce("plonk"), !1) : (t.position = t.lastOffset, !0),
      moveToSuperscript: t => $s(t),
      moveToSubscript: t => Vs(t)
    }, {
      target: "model",
      category: "selection-anchor"
    });

    function Po(t, e, r) {
      typeof e == "function" && (r = e, e = 1 / 0), e === void 0 && (e = 1 / 0);
      let i = t.position,
        o = !1,
        a = "";
      for (; !o;) {
        let n = t.at(i);
        o = e === 0 || n === void 0 || n.mode !== "math" || !(/mord|textord|mpunct/.test(n.type) || n.type === "mop" && /[a-zA-Z]+/.test(n.value)) || !n.hasEmptyBranch("superscript") || !n.hasEmptyBranch("subscript") || typeof r == "function" && !r(n), o || (n.mode = "text", n.command = n.value, n.verbatimLatex = void 0, a += n.value), i -= 1, e -= 1
      }
      J(t, {
        data: a,
        inputType: "insertText"
      })
    }

    function Dr(t, e, r) {
      typeof e == "function" && (r = e, e = 1 / 0), e === void 0 && (e = 1 / 0);
      let i = t.position,
        o = !1,
        a = [];
      for (; !o;) {
        let n = t.at(i);
        o = e === 0 || !n || n.isFirstSibling || n.mode !== "text" || n.value === " " || r && !r(n), o || (a.push(n.serialize({
          defaultMode: "math"
        })), n.mode = "math"), i -= 1, e -= 1
      }
      Do(t), J(t, {
        data: U(a),
        inputType: "insertText"
      })
    }

    function Do(t) {
      var r;
      let e = t.position - 1;
      for (; e >= 0 && ((r = t.at(e)) == null ? void 0 : r.mode) === "math";) e -= 1;
      if (!(e < 0) && t.at(e).mode === "text" && t.at(e).value === " " && t.at(e - 1).mode === "math") {
        t.at(e - 1).parent.removeChild(t.at(e - 1));
        let i = t.suppressChangeNotifications;
        t.suppressChangeNotifications = !0, t.position -= 1, t.suppressChangeNotifications = i, J(t, {
          inputType: "deleteContent"
        })
      }
    }

    function bu(t) {
      let e = "",
        r = t.position,
        i = !1;
      for (; !i;) {
        let o = t.at(r);
        i = !(o && (o.mode === "text" || o.mode === "math" && /mord|textord|mpunct/.test(o.type))), i || (e = o.value + e), r -= 1
      }
      return e
    }

    function Gs(t, e, r) {
      if (t.smartModeSuppressed) return !1;
      let {
        model: i
      } = t;
      if (!i.at(i.position).isLastSibling || !r || !To(r)) return !1;
      let o = oi(r);
      if (!i.selectionIsCollapsed) return !!(t.mode === "text" && /[/_^]/.test(o));
      let a = bu(i) + o;
      if (t.mode === "text") {
        if (e === "Esc" || /[/\\]/.test(o)) return !0;
        if (/[\^_]/.test(o)) return /(^|\s)[a-zA-Z][^_]$/.test(a) && Dr(i, 1), !0;
        let n = {
            ")": "(",
            "}": "{",
            "]": "["
          } [o],
          {
            parent: s
          } = i.at(i.position);
        if (n && s instanceof ie && s.leftDelim === n) return !0;
        if (/(^|[^a-zA-Z])(a|I) $/.test(a)) return !1;
        if (/[$€£₤₺¥¤฿¢₡₧₨₹₩₱]/u.test(o)) return !0;
        if (/(^|[^a-zA-Z'’])[a-zA-Z] $/.test(a)) return Dr(i, 1), !1;
        if (/\D\.[^\d\s]$/.test(a)) {
          Dr(i, 1);
          let l = i.at(i.position);
          return l.value = "\u22C5", l.style.variant = "normal", l.command = "\\cdot", l.verbatimLatex = void 0, J(i, {
            data: "\\cdot",
            inputType: "insertText"
          }), !0
        }
        if (/(^|\s)[a-zA-Z][^a-zA-Z]$/.test(a) || /\.\d$/.test(a) || /\([\d+\-.]$/.test(a)) return Dr(i, 1), !0;
        if (/\([a-z][,;]$/.test(a)) return Dr(i, 2), !0;
        if (/[\d+\-=><*|]$/.test(o)) return Do(i), !0
      } else {
        if (e === "[Space]") return Po(i, void 0, n => /[a-z][:,;.]$/.test(n.value)), !0;
        if (/[a-zA-Z]{3,}$/.test(a) && !/(dxd|abc|xyz|uvw)$/.test(a)) return Po(i, void 0, n => /[a-zA-Z]/.test(n.value)), !0;
        if (/(^|\W)(if)$/i.test(a)) return Po(i, 1), !0;
        if (/(\u0393|\u0394|\u0398|\u039B|\u039E|\u03A0|\u03A3|\u03A5|\u03A6|\u03A8|\u03A9|[\u03B1-\u03C9]|\u03D1|\u03D5|\u03D6|\u03F1|\u03F5){3,}$/u.test(a) && !/(αβγ)$/.test(a)) return Po(i, void 0, n => /(:|,|;|.|\u0393|\u0394|\u0398|\u039B|\u039E|\u03A0|\u03A3|\u03A5|\u03A6|\u03A8|\u03A9|[\u03B1-\u03C9]|\u03D1|\u03D5|\u03D6|\u03F1|\u03F5)/u.test(n.value)), !0;
        if (o === "?" || o === "." && !/[\d-+]\.$/.test(a)) return !0
      }
      return !1
    }
    var Ia = `/* The element that displays the keys as the user type them */
#mathlive-keystroke-caption-panel {
  visibility: hidden;
  /*min-width: 160px;*/
  /*background-color: rgba(97, 97, 200, .95);*/
  background: var(--secondary, hsl(var(--hue, 212), 19%, 26%));
  border-color: var(--secondary-border, hsl(0, 0%, 91%));
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  text-align: center;
  border-radius: 6px;
  padding: 16px;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  --keystroke: white;
  --on-keystroke: #555;
  --keystroke-border: #f7f7f7;
}
@media (prefers-color-scheme: dark) {
  body:not([theme='light']) #mathlive-keystroke-caption-panel {
    --keystroke: hsl(var(--hue, 212), 50%, 30%);
    --on-keystroke: hsl(0, 0%, 98%);
    --keystroke-border: hsl(var(--hue, 212), 50%, 25%);
  }
}
body[theme='dark'] #mathlive-keystroke-caption-panel {
  --keystroke: hsl(var(--hue, 212), 50%, 30%);
  --on-keystroke: hsl(0, 0%, 98%);
  --keystroke-border: hsl(var(--hue, 212), 50%, 25%);
}
#mathlive-keystroke-caption-panel > span {
  min-width: 14px;
  /*height: 8px;*/
  margin: 0 8px 0 0;
  padding: 4px;
  background-color: var(--keystroke);
  color: var(--on-keystroke);
  fill: currentColor;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 1em;
  border-radius: 6px;
  border: 2px solid var(--keystroke-border);
  /*box-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);*/
}
`;
    var qa, $a = null,
      Va = null;

    function Js(t, e) {
      if (!t.isSelectionEditable || !t.keystrokeCaptionVisible) return;
      let r = Us(t),
        i = t.element.getBoundingClientRect();
      r.style.left = `${i.left}px`, r.style.top = `${i.top-64}px`, r.innerHTML = window.MathfieldElement.createHTML("<span>" + (Ei(e) || e) + "</span>" + r.innerHTML), r.style.visibility = "visible", setTimeout(() => {
        r.childNodes.length > 0 && r.childNodes[r.childNodes.length - 1].remove(), r.childNodes.length === 0 && (r.style.visibility = "hidden")
      }, 3e3)
    }

    function Ws(t) {
      return t.keystrokeCaptionVisible = !t.keystrokeCaptionVisible, t.keystrokeCaptionVisible ? (t.keystrokeCaption = Us(t), t.keystrokeCaption.innerHTML = "") : t.keystrokeCaption && (t.keystrokeCaption.style.visibility = "hidden"), !1
    }

    function Us(t) {
      return t.keystrokeCaption || (t.keystrokeCaption = go("mathlive-keystroke-caption-panel"), qa === void 0 && (qa = Xe(Ia).toString(36)), $a = Ze(null, Ia, qa), Va = Ze(null, Ie, Xe(Ie).toString(36))), t.keystrokeCaption
    }

    function js(t) {
      yo(t.keystrokeCaption), $a && $a.release(), Va && Va.release(), delete t.keystrokeCaption
    }
    var Ga = class extends X {
      constructor() {
        super("math")
      }
      onPaste(e, r) {
        if (!r || !H(e.model, {
            data: typeof r == "string" ? r : null,
            dataTransfer: typeof r == "string" ? null : r,
            inputType: "insertFromPaste"
          })) return !1;
        let i = "",
          o = "auto",
          a = typeof r != "string" ? r.getData("application/json+mathlive") : "";
        if (a) try {
          let n = JSON.parse(a);
          if (n && Array.isArray(n)) {
            e.snapshot();
            let s = Ue(n, e),
              {
                model: l
              } = e;
            l.selectionIsCollapsed || l.deleteAtoms(xe(l.selection));
            let c = l.at(l.position);
            if (c.parent instanceof j) {
              c.treeBranch;
              let u = [],
                d = [];
              s[0].type === "first" && s.shift(), s[s.length - 1].type === "first" && s.pop();
              for (let y of s) y.type === "first" && d.length > 0 ? (u.push(d), d = [y]) : d.push(y);
              d.length > 0 && u.push(d);
              let m = Number(c.treeBranch[0]),
                h = Number(c.treeBranch[1]),
                f = c.parent.maxColumns;
              for (; c.parent.colCount - h < u.length && c.parent.colCount < f;) c.parent.addColumn();
              c.parent.addChildrenAfter(u[0], c);
              for (let y = 1; y < u.length; y++) h++, h >= f && (h = 0, c.parent.addRowAfter(m), m++), c.parent.setCell(m, h, u[y])
            } else c.parent.addChildrenAfter(s.filter(u => u.type !== "first"), c);
            return l.position = l.offsetOf(s[s.length - 1]), J(l, {
              inputType: "insertFromPaste"
            }), te(e), !0
          }
        } catch (n) {}
        if (a = typeof r != "string" ? r.getData("application/json") : "", a && window.MathfieldElement.computeEngine) try {
          let n = JSON.parse(a);
          if (typeof n == "object" && "latex" in n && n.latex && (i = n.latex), !i) {
            let s = window.MathfieldElement.computeEngine.box(n);
            s && !s.has("Error") && (i = s.latex)
          }
          i || (o = "latex")
        } catch (n) {}
        if (!i && typeof r != "string" && (i = r.getData("application/x-latex"), i && (o = "latex")), i || (i = typeof r == "string" ? r : r.getData("text/plain")), i) {
          e.snapshot();
          let n;
          return [n, i] = mo(i), o === "auto" && n && (o = "latex"), this.insert(e.model, i, {
            format: o
          }) && te(e), !0
        }
        return !1
      }
      insert(e, r, i) {
        var w, k;
        let o = typeof r == "string" ? r : (k = (w = window.MathfieldElement.computeEngine) == null ? void 0 : w.box(r).latex) != null ? k : "";
        if (!i.suppressChangeNotifications && !H(e, {
            data: o,
            inputType: "insertText"
          })) return !1;
        if (i.insertionMode || (i.insertionMode = "replaceSelection"), i.selectionMode || (i.selectionMode = "placeholder"), i.format || (i.format = "auto"), e.mathfield.smartFence) {
          if (e.selectionIsCollapsed && typeof r == "string" && Ko(e, r, i.style)) return !0
        } else if (i.insertionMode !== "replaceAll") {
          let {
            parent: S
          } = e.at(e.position);
          if (S instanceof ie && S.rightDelim === "?" && e.at(e.position).isLastSibling && typeof r == "string" && /^[)}\]|]$/.test(r)) return S.isDirty = !0, S.rightDelim = r, e.position += 1, Mo(e), J(e, {
            data: o,
            inputType: "insertText"
          }), !0
        }
        let {
          suppressChangeNotifications: a
        } = e;
        i.suppressChangeNotifications && (e.suppressChangeNotifications = !0);
        let n = e.suppressChangeNotifications;
        e.suppressChangeNotifications = !0;
        let s = {};
        if (s[0] = i.insertionMode === "replaceAll" ? "" : e.getValue(e.selection, "latex-unstyled"), s["?"] = "\\placeholder{}", s["@"] = s["?"], i.insertionMode === "replaceSelection" && !e.selectionIsCollapsed ? e.deleteAtoms(xe(e.selection)) : i.insertionMode === "replaceAll" ? (e.root.setChildren([], "body"), e.position = 0) : i.insertionMode === "insertBefore" ? e.collapseSelection("backward") : i.insertionMode === "insertAfter" && e.collapseSelection("forward"), !e.at(e.position).isLastSibling && e.at(e.position + 1).type === "placeholder" ? e.deleteAtoms([e.position, e.position + 1]) : e.at(e.position).type === "placeholder" && e.deleteAtoms([e.position - 1, e.position]), s[0]) s["@"] = s[0];
        else if (typeof r == "string" && /(^|[^\\])#@/.test(r)) {
          let S = ku(e);
          S >= 0 && (s["@"] = e.getValue(S, e.position, "latex-unstyled"), e.deleteAtoms([S, e.position]))
        }
        s[0] || (s[0] = s["?"]);
        let l = !1,
          c = S => (l = !0, s[S]),
          [u, d] = vu(e, r, c, i);
        if (!d) return !1;
        let {
          parent: m
        } = e.at(e.position);
        if (u !== "latex" && e.options.removeExtraneousParentheses && m instanceof ie && m.leftDelim === "(" && m.hasEmptyBranch("body") && d.length === 1 && d[0].type === "genfrac") {
          let S = m.parent,
            T = m.treeBranch;
          S.removeChild(m), S.setChildren(d, T)
        }
        let h = m.hasEmptyBranch("body"),
          f = e.at(e.position);
        f.parent.addChildrenAfter(d, f), u === "latex" && typeof r == "string" && m.type === "root" && h && !l && (m.verbatimLatex = r), e.suppressChangeNotifications = n;
        let y = d[d.length - 1];
        if (i.selectionMode === "placeholder") {
          let S = d.reduce((T, L) => [...T, ...L.children.filter(D => D.type === "placeholder")], []);
          if (S.length > 0) {
            let T = e.offsetOf(S[0]);
            e.setSelection(T - 1, T), e.announce("move")
          } else y && (e.position = e.offsetOf(y))
        } else i.selectionMode === "before" || (i.selectionMode === "after" ? y && (e.position = e.offsetOf(y)) : i.selectionMode === "item" && e.setSelection(e.anchor, e.offsetOf(y)));
        return J(e, {
          data: o,
          inputType: "insertText"
        }), e.suppressChangeNotifications = a, !0
      }
    };

    function vu(t, e, r, i) {
      var n;
      let o, a = [];
      if (typeof e != "string" || i.format === "math-json") {
        let s = window.MathfieldElement.computeEngine;
        if (!s) return ["math-json", []];
        [o, e] = ["latex", s.box(e).latex], a = he(e, t.mathfield, {
          parseMode: "math"
        })
      } else typeof e == "string" && i.format === "ascii-math" ? ([o, e] = _r(e, {
        format: "ascii-math",
        inlineShortcuts: t.mathfield.options.inlineShortcuts
      }), a = he(e, t.mathfield, {
        parseMode: "math"
      }), o !== "latex" && t.options.removeExtraneousParentheses && Bo(a)) : (i.format === "auto" || (n = i.format) != null && n.startsWith("latex")) && (i.format === "auto" && ([o, e] = _r(e, {
        format: "auto",
        inlineShortcuts: t.mathfield.options.inlineShortcuts
      })), i.format === "latex" && ([, e] = mo(e)), a = he(e, t.mathfield, {
        parseMode: "math",
        args: r
      }), i.format !== "latex" && t.options.removeExtraneousParentheses && Bo(a));
      return Dt(a, i.style), [o != null ? o : "latex", a]
    }

    function wu(t) {
      if (!t || (t[0].type, t.length > 1)) return null;
      let e = t[0];
      return e instanceof ie && e.leftDelim === "(" && e.rightDelim === ")" ? e.removeBranch("body") : null
    }

    function Bo(t) {
      if (t) {
        for (let e = 0; t[e]; e++) {
          let r = t[e];
          if (r instanceof ie && r.leftDelim === "(") {
            let i = 0,
              o = 0,
              a = 0;
            for (let n = 0; r.body[n]; n++) r.body[n].type === "genfrac" && (i++, o = n), a++;
            a === 0 && i === 1 && (t[e] = r.body[o])
          }
        }
        for (let e of t) {
          for (let r of e.branches)
            if (!e.hasEmptyBranch(r)) {
              Bo(e.branch(r));
              let i = wu(e.branch(r));
              i && e.setChildren(i, r)
            } if (e instanceof j)
            for (let r of e.cells) Bo(r)
        }
      }
    }

    function ku(t) {
      let e = t.at(t.position);
      if (e.mode === "text") {
        for (; !e.isFirstSibling && e.mode === "text";) e = e.leftSibling;
        return t.offsetOf(e)
      }
      let r = e,
        i = !1;
      if (e.type === "mclose") {
        let o = ia[e.value];
        for (; !e.isFirstSibling && !(e.type === "mopen" && e.value === o);) e = e.leftSibling;
        e.isFirstSibling || (e = e.leftSibling), i = !0
      } else e.type === "leftright" && (e = e.leftSibling, i = !0);
      if (i)
        for (; !e.isFirstSibling && (e.isFunction || Xs(e));) e = e.leftSibling;
      else {
        let o = [];
        for (; !e.isFirstSibling && (Xs(e) || o.length > 0);) e.type === "mclose" && o.unshift(e.value), e.type === "mopen" && o.length > 0 && e.value === ia[o[0]] && o.shift(), e = e.leftSibling
      }
      return r === e ? -1 : t.offsetOf(e)
    }

    function Xs(t) {
      return /^(mord|surd|msubsup|leftright|mop|mclose)$/.test(t.type) ? !(t.isExtensibleSymbol || t.isFunction) : !1
    }

    function Ha(t, e) {
      return t ? ["(", "{", "[", "\\lbrace", "\\lparen", "\\{", "\\lbrack"].includes(t) ? [")", "}", "]", "\\rbrace", "\\rparen", "\\}", "\\rbrack"].includes(e) : er[t] === e : !0
    }

    function Ko(t, e, r) {
      t.selectionIsCollapsed;
      let i = t.at(t.position),
        {
          parent: o
        } = i;
      if ((e === "{" || e === "\\{") && (e = "\\lbrace"), (e === "}" || e === "\\}") && (e = "\\rbrace"), e === "[" && (e = "\\lbrack"), e === "]" && (e = "\\rbrack"), /\||\\vert|\\Vert|\\mvert|\\mid/.test(e)) {
        let s = o instanceof ie ? o.leftDelim + o.rightDelim : "";
        if (s === "\\lbrace\\rbrace" && (s = "{}"), s === "\\{\\}" && (s = "{}"), s === "\\lparen\\rparen" && (s = "()"), s === "{}") return X.insert("math", t, "\\,\\middle" + e + "\\, ", {
          format: "latex",
          style: r
        }), !0
      }
      let a = er[e];
      if (a) {
        if (o instanceof ie && o.firstChild === i && (o.leftDelim === "?" || o.leftDelim === ".")) return o.leftDelim = e, o.isDirty = !0, !0;
        if (!(o instanceof ie)) {
          let s = i;
          for (; s && !(s.type === "mclose" && s.value === a);) s = s.rightSibling;
          if (s) {
            let l = t.extractAtoms([t.offsetOf(i), t.offsetOf(s)]);
            return l.shift(), l.pop(), o.addChildrenAfter([new ie("left...right", l, o.context, {
              leftDelim: e,
              rightDelim: a
            })], i), t.position = t.offsetOf(o.firstChild), J(t, {
              data: e,
              inputType: "insertText"
            }), !0
          }
        }
        if (!(o instanceof ie && o.leftDelim === "|")) {
          if (X.insert("math", t, `\\left${e}\\right?`, {
              format: "latex",
              style: r
            }), i.lastSibling.type !== "first") {
            let s = t.offsetOf(i.lastSibling),
              l = t.extractAtoms([t.position, s]);
            t.at(t.position).body = l, t.position -= 1
          }
          return !0
        }
      }
      let n = "";
      for (let s of Object.keys(er)) e === er[s] && (n = s);
      if (n) {
        let s = i;
        for (; s;) {
          if (s.type === "mopen" && s.value === n) {
            let m = s.leftSibling,
              h = t.extractAtoms([t.offsetOf(s.leftSibling), t.offsetOf(i)]);
            h.shift();
            let f = new ie("left...right", h, o.context, {
              leftDelim: n,
              rightDelim: e
            });
            return o.addChildrenAfter([f], m), t.position = t.offsetOf(f), J(t, {
              data: e,
              inputType: "insertText"
            }), !0
          }
          s = s.leftSibling
        }
        if (o instanceof ie && i.isLastSibling && Ha(o.leftDelim, e)) return o.isDirty = !0, o.rightDelim = e, t.position += 1, J(t, {
          data: e,
          inputType: "insertText"
        }), !0;
        let l = t.offsetOf(i.firstSibling),
          c;
        for (c = t.position; c >= l; c--) {
          let m = t.at(c);
          if (m instanceof ie && m.rightDelim === "?" && Ha(m.leftDelim, e)) break
        }
        let u = t.at(c);
        if (c >= l && u instanceof ie) return u.rightDelim = e, u.addChildren(t.extractAtoms([c, t.position]), i.treeBranch), t.position = c, J(t, {
          data: e,
          inputType: "insertText"
        }), !0;
        if (o instanceof ie && o.rightDelim === "?" && Ha(o.leftDelim, e)) return o.isDirty = !0, o.rightDelim = e, o.parent.addChildren(t.extractAtoms([t.position, t.offsetOf(i.lastSibling)]), o.treeBranch), t.position = t.offsetOf(o), J(t, {
          data: e,
          inputType: "insertText"
        }), !0;
        let d = o.parent;
        return d instanceof ie && d.rightDelim === "?" && t.at(t.position).isLastSibling ? (t.position = t.offsetOf(d), Ko(t, e, r)) : !1
      }
      return !1
    }
    new Ga;

    function Ja(t, e, r) {
      var u, d, m, h;
      let {
        model: i
      } = t;
      cs(r);
      let o = pr();
      if (t.keyboardLayout !== o.id && (t.keyboardLayout = o.id, t._keybindings = void 0), clearTimeout(t.inlineShortcutBufferFlushTimer), t.inlineShortcutBufferFlushTimer = 0, Js(t, e), r.defaultPrevented) return t.flushInlineShortcutBuffer(), !1;
      let a, n = "",
        s;
      if (t.isSelectionEditable) {
        if (t.mode === "math")
          if (e === "[Backspace]") t.inlineShortcutBuffer.pop(), t.flushInlineShortcutBuffer({
            defer: !0
          });
          else if (!To(r)) t.flushInlineShortcutBuffer();
        else {
          let f = oi(r),
            y = [...(d = (u = t.inlineShortcutBuffer[t.inlineShortcutBuffer.length - 1]) == null ? void 0 : u.keystrokes) != null ? d : [], f];
          t.inlineShortcutBuffer.push({
            state: i.getState(),
            keystrokes: y,
            leftSiblings: Su(t)
          });
          let w = 0,
            k = "";
          for (; !a && w < y.length;) s = t.inlineShortcutBuffer.length - (y.length - w), k = y.slice(w).join(""), a = xi(t.inlineShortcutBuffer[s].leftSiblings, k, t.options.inlineShortcuts), !a && /^[a-zA-Z][a-zA-Z0-9]+?([_\^][a-zA-Z0-9\*\+\-]+?)?$/.test(k) && (a = t.options.onInlineShortcut(t, k)), w += 1;
          t.flushInlineShortcutBuffer({
            defer: !0
          })
        }
        if (t.options.smartMode) {
          let f = t.mode;
          a ? t.mode = "math" : Gs(t, e, r) && (t.mode = {
            math: "text",
            text: "math"
          } [t.mode], n = ""), t.mode !== f && ((m = t.host) != null && m.dispatchEvent(new Event("mode-change", {
            bubbles: !0,
            composed: !0,
            cancelable: !0
          })) || (t.mode = f))
        }
      }
      if (!a) {
        if (n || (n = ms(t.keybindings, t.mode, e)), !n && (e === "[Enter]" || e === "[Return]")) {
          let f = !1;
          return H(i, {
            inputType: "insertLineBreak"
          }) && (t.host && (f = !t.host.dispatchEvent(new Event("change", {
            bubbles: !0,
            composed: !0
          }))), f || r.preventDefault && (r.preventDefault(), r.stopPropagation()), J(i, {
            inputType: "insertLineBreak"
          })), f
        }
        if (t.mode === "math") {
          if (e === "[Space]") {
            if (t.adoptStyle = "none", t.flushInlineShortcutBuffer(), t.options.mathModeSpace) return t.snapshot(), X.insert("math", i, t.options.mathModeSpace, {
              format: "latex"
            }), n = "", t.dirty = !0, t.scrollIntoView(), r.preventDefault && (r.preventDefault(), r.stopPropagation()), !1;
            let f = i.at(i.position + 1),
              y = i.at(i.position - 1);
            if ((f == null ? void 0 : f.mode) === "text" || (y == null ? void 0 : y.mode) === "text") return t.snapshot(), X.insert("text", i, " "), t.dirty = !0, t.scrollIntoView(), !0
          }(h = i.at(i.position)) != null && h.isDigit() && window.MathfieldElement.decimalSeparator === "," && oi(r) === "," && (n = "insertDecimalSeparator")
        }
      }
      if (!a && !n) return !0;
      let l = i.at(Math.max(i.position, i.anchor)),
        {
          parent: c
        } = l;
      if (n === "moveAfterParent" && (c == null ? void 0 : c.type) === "leftright" && l.isLastSibling && t.options.smartFence && Ko(i, ".", t.style) && (n = "", te(t)), t.keyboardDelegate.cancelComposition(), n) t.executeCommand(n);
      else if (a) {
        let f = b(b({}, i.at(i.position).computedStyle), t.style);
        if (!/^\\({|}|\[|]|@|#|\$|%|&|\^|_|backslash)$/.test(a)) {
          let y = t.mode;
          X.insert(t.mode, i, oi(r), {
            suppressChangeNotifications: !0,
            style: f
          }), t.snapshot(), i.setState(t.inlineShortcutBuffer[s].state), t.mode = y
        }
        i.deferNotifications({
          content: !0,
          selection: !0,
          data: a != null ? a : null,
          type: "insertText"
        }, () => (X.insert(t.mode, i, a, {
          format: "latex",
          style: f
        }), Do(t.model), a.endsWith(" ") && (t.mode = "text", X.insert("text", i, " ", {
          style: f
        })), !0)), t.snapshot(), t.dirty = !0, i.announce("replacement")
      }
      return t.scrollIntoView(), r.preventDefault && r.preventDefault(), !1
    }

    function Ni(t, e, r) {
      var l;
      let {
        model: i
      } = t;
      if (!t.isSelectionEditable) {
        i.announce("plonk");
        return
      }
      if (r = r != null ? r : {}, r.focus && t.focus(), r.feedback && window.MathfieldElement.playSound("keypress"), typeof r.mode == "string" && t.switchMode(r.mode), r.simulateKeystroke) {
        let c = e.charAt(0),
          u = new KeyboardEvent("keypress", {
            key: c
          });
        if (!Ja(t, c, u)) return
      }
      let o = i.at(i.position),
        a = o.rightSibling,
        n = b(b({}, o.computedStyle), t.style);
      i.selectionIsCollapsed || (i.deleteAtoms(xe(i.selection)), t.snapshot());
      let s = ji(e);
      if (t.mode === "latex") i.deferNotifications({
        content: !0,
        selection: !0,
        data: e,
        type: "insertText"
      }, () => {
        Bi(t);
        for (let c of s) X.insert("latex", i, c);
        ii(t)
      });
      else if (t.mode === "text")
        for (let c of s) X.insert("text", i, c, {
          style: n
        });
      else if (t.mode === "math")
        for (let c of s) {
          let u = {
            "^": "moveToSuperscript",
            _: "moveToSubscript",
            " ": "moveAfterParent"
          } [c];
          if (c === " " && t.options.mathModeSpace && (u = ["insert", t.options.mathModeSpace]), u) t.executeCommand(u);
          else if (/\d/.test(c) && t.options.smartSuperscript && o.treeBranch === "superscript" && ((l = o.parent) == null ? void 0 : l.type) !== "mop" && o.hasNoSiblings) X.insert("math", i, c, {
            style: n
          }), Na(i);
          else {
            if (t.adoptStyle !== "none") {
              let d = t.adoptStyle === "left" ? o : a;
              (d == null ? void 0 : d.type) === "mord" && /[a-zA-Z]/.test(d.value) && /[a-zA-Z]/.test(c) && (d.style.variant && (n.variant = d.style.variant), d.style.variantStyle && (n.variantStyle = d.style.variantStyle))
            }
            X.insert("math", i, c, {
              style: n
            })
          }
        }
      t.snapshotAndCoalesce(), t.dirty = !0, t.scrollIntoView()
    }

    function Su(t) {
      let e = t.model,
        r = [],
        i = e.at(Math.min(e.position, e.anchor));
      for (; i.type !== "first";) r.push(i), i = i.leftSibling;
      return r
    }
    de({
      undo: t => (yt(t, "accept"), t.undo(), !0),
      redo: t => (yt(t, "accept"), t.redo(), !0),
      scrollIntoView: t => (t.scrollIntoView(), !0),
      scrollToStart: t => (t.field.scroll(0, 0), !0),
      scrollToEnd: t => {
        let e = t.field.getBoundingClientRect();
        return t.field.scroll(e.left - window.scrollX, 0), !0
      },
      toggleKeystrokeCaption: Ws,
      plonk: t => (t.model.announce("plonk"), !0),
      switchMode: (t, e, r, i) => (t.switchMode(e, r, i), !0),
      insert: (t, e, r) => t.insert(e, r),
      typedText: (t, e, r) => (Ni(t, e, r), !0),
      insertDecimalSeparator: t => {
        if (t.mode === "math" && window.MathfieldElement.decimalSeparator === ",") {
          let e = t.model;
          if (e.at(Math.max(e.position, e.anchor)).isDigit()) return t.snapshot(), t.insert("{,}", {
            format: "latex"
          }), !0
        }
        return t.insert("."), !0
      },
      commit: t => {
        var e;
        return H(t.model, {
          inputType: "insertLineBreak"
        }) && ((e = t.host) == null || e.dispatchEvent(new Event("change", {
          bubbles: !0,
          composed: !0
        })), J(t.model, {
          inputType: "insertLineBreak"
        })), !0
      }
    });
    de({
      copyToClipboard: t => (t.focus(), t.model.selectionIsCollapsed && t.select(), document.queryCommandSupported("copy") ? document.execCommand("copy") : t.element.querySelector(".ML__keyboard-sink").dispatchEvent(new ClipboardEvent("copy", {
        bubbles: !0,
        composed: !0
      })), !1),
      cutToClipboard: t => (t.focus(), document.queryCommandSupported("cut") ? document.execCommand("cut") : t.element.querySelector(".ML__keyboard-sink").dispatchEvent(new ClipboardEvent("cut", {
        bubbles: !0,
        composed: !0
      })), !0),
      pasteFromClipboard: t => (t.focus(), document.queryCommandSupported("paste") ? document.execCommand("paste") : navigator.clipboard.readText().then(e => {
        e && H(t.model, {
          inputType: "insertFromPaste",
          data: e
        }) ? (t.snapshot(), t.insert(e) && (J(t.model, {
          inputType: "insertFromPaste"
        }), te(t))) : t.model.announce("plonk")
      }), !0)
    }, {
      target: "mathfield",
      category: "clipboard"
    });

    function _u(t, e) {
      t.flushInlineShortcutBuffer();
      let r = Wa(t, e),
        {
          model: i
        } = t;
      return i.selectionIsCollapsed ? (t.style.fontSeries && r.fontSeries === t.style.fontSeries && (r.fontSeries = "auto"), r.fontShape && r.fontShape === t.style.fontShape && (r.fontShape = "auto"), r.color && r.color === t.style.color && (r.color = "none"), r.backgroundColor && r.backgroundColor === t.style.backgroundColor && (r.backgroundColor = "none"), r.fontSize && r.fontSize === t.style.fontSize && (r.fontSize = "auto"), t.style = b(b({}, t.style), r)) : t.model.deferNotifications({
        content: !0,
        type: "insertText"
      }, () => {
        i.selection.ranges.forEach(o => Fi(i, o, r, {
          operation: "toggle"
        })), t.snapshot()
      }), !0
    }
    de({
      applyStyle: _u
    }, {
      target: "mathfield"
    });

    function Wa(t, e) {
      var o, a, n, s, l, c;
      let r = {};
      typeof e.color == "string" && (r.verbatimColor = e.color, r.color = (o = t.colorMap(e.color)) != null ? o : "none"), typeof e.backgroundColor == "string" && (r.verbatimBackgroundColor = e.backgroundColor, r.backgroundColor = (a = t.backgroundColorMap(e.backgroundColor)) != null ? a : "none"), typeof e.fontFamily == "string" && (r.fontFamily = e.fontFamily), typeof e.series == "string" && (r.fontSeries = e.series), typeof e.fontSeries == "string" && (r.fontSeries = e.fontSeries.toLowerCase()), r.fontSeries && (r.fontSeries = (n = {
        bold: "b",
        medium: "m",
        normal: "m"
      } [r.fontSeries]) != null ? n : r.fontSeries), typeof e.shape == "string" && (r.fontShape = e.shape), typeof e.fontShape == "string" && (r.fontShape = e.fontShape.toLowerCase()), r.fontShape && (r.fontShape = (s = {
        italic: "it",
        up: "n",
        upright: "n",
        normal: "n"
      } [r.fontShape]) != null ? s : r.fontShape);
      let i = (l = e.size) != null ? l : e.fontSize;
      return typeof i == "number" ? r.fontSize = Math.max(1, Math.min(10, i)) : typeof i == "string" && (r.fontSize = (c = {
        size1: 1,
        size2: 2,
        size3: 3,
        size4: 4,
        size5: 5,
        size6: 6,
        size7: 7,
        size8: 8,
        size9: 9,
        size10: 10
      } [i.toLowerCase()]) != null ? c : {
        tiny: 1,
        scriptsize: 2,
        footnotesize: 3,
        small: 4,
        normal: 5,
        normalsize: 5,
        large: 6,
        Large: 7,
        LARGE: 8,
        huge: 9,
        Huge: 10
      } [i]), r
    }

    function Ua(t) {
      var e, r, i, o, a, n;
      if (Co(t, t.position) === "text") {
        let s = Math.min(t.anchor, t.position),
          l = Math.max(t.anchor, t.position),
          c = !1;
        for (; !c && s > 0;) {
          let u = t.at(s);
          u.mode === "text" && Ir.test(u.value) ? s -= 1 : c = !0
        }
        for (c = !1; !c && l <= t.lastOffset;) {
          let u = t.at(l);
          u.mode === "text" && Ir.test(u.value) ? l += 1 : c = !0
        }
        if (c && (l -= 1), s >= l) return t.setSelection(l - 1, l), !0;
        t.setSelection(s, l)
      } else {
        let s = t.at(t.position);
        if (s.isDigit()) {
          let l = Math.min(t.anchor, t.position),
            c = Math.max(t.anchor, t.position);
          for (;
            (e = t.at(l)) != null && e.isDigit();) l -= 1;
          for (;
            (r = t.at(c)) != null && r.isDigit();) c += 1;
          t.setSelection(l, c - 1)
        } else if (s.style.variant || s.style.variantStyle) {
          let l = Math.min(t.anchor, t.position),
            c = Math.max(t.anchor, t.position),
            u = (i = t.at(l)) == null ? void 0 : i.style;
          for (; u && u.variant === s.style.variant && u.variantStyle === s.style.variantStyle;) l -= 1, u = (o = t.at(l)) == null ? void 0 : o.style;
          for (u = (a = t.at(c)) == null ? void 0 : a.style; u && u.variant === s.style.variant && u.variantStyle === s.style.variantStyle;) c += 1, u = (n = t.at(c)) == null ? void 0 : n.style;
          t.setSelection(l, c - 1)
        } else t.setSelection(t.offsetOf(s.firstSibling), t.offsetOf(s.lastSibling))
      }
      return !0
    }
    de({
      selectGroup: t => {
        let e = Ua(t);
        return e || t.announce("plonk"), e
      },
      selectAll: t => t.setSelection(0, t.lastOffset),
      extendSelectionForward: t => {
        let e = t.extendSelection("forward");
        return e || t.announce("plonk"), e
      },
      extendSelectionBackward: t => {
        let e = t.extendSelection("backward");
        return e || t.announce("plonk"), e
      },
      extendToNextWord: t => gr(t, "forward", {
        extend: !0
      }),
      extendToPreviousWord: t => gr(t, "backward", {
        extend: !0
      }),
      extendSelectionUpward: t => xt(t, "upward", {
        extend: !0
      }),
      extendSelectionDownward: t => xt(t, "downward", {
        extend: !0
      }),
      extendToNextBoundary: t => gr(t, "forward", {
        extend: !0
      }),
      extendToPreviousBoundary: t => gr(t, "backward", {
        extend: !0
      }),
      extendToGroupStart: t => {
        let e = t.setSelection(t.anchor, t.offsetOf(t.at(t.position).firstSibling));
        return e || t.announce("plonk"), e
      },
      extendToGroupEnd: t => {
        let e = t.setSelection(t.anchor, t.offsetOf(t.at(t.position).lastSibling));
        return e || t.announce("plonk"), e
      },
      extendToMathFieldStart: t => {
        let e = t.setSelection(t.anchor, 0);
        return e || t.announce("plonk"), e
      },
      extendToMathFieldEnd: t => {
        let e = t.setSelection(t.anchor, t.lastOffset);
        return e || t.announce("plonk"), e
      }
    }, {
      target: "model",
      category: "selection-extend"
    });
    var Br = null,
      Ii = 0;

    function Zs(t) {
      return t instanceof PointerEvent
    }

    function ja(t, e) {
      var k;
      t.atomBoundsCache = new Map;
      let r = t,
        i, o = !1,
        a = !1,
        n = "none";
      if (e.buttons > 1) return;
      let s = !1,
        l = !1,
        c = e.clientX,
        u = e.clientY,
        d = Date.now(),
        m = r.field,
        h = setInterval(() => {
          s ? m.scroll({
            top: 0,
            left: m.scrollLeft - 16
          }) : l && m.scroll({
            top: 0,
            left: m.scrollLeft + 16
          })
        }, 32);

      function f(S) {
        "PointerEvent" in window ? (Li(m, "pointermove", y), Li(m, "pointerup pointercancel", f), S instanceof PointerEvent && m.releasePointerCapture(S.pointerId)) : (Li(window, "mousemove", y), Li(window, "mouseup blur", f)), o = !1, clearInterval(h), t.element.classList.remove("tracking"), S && S.preventDefault()
      }

      function y(S) {
        if (!r.hasFocus()) {
          f(null);
          return
        }
        let T = S.clientX,
          L = S.clientY,
          D = Zs(S) && S.pointerType === "touch" ? 20 : 5;
        if (Date.now() < d + 500 && Math.abs(c - T) < D && Math.abs(u - L) < D) {
          S.preventDefault(), S.stopPropagation();
          return
        }
        let M = m.getBoundingClientRect();
        l = T > M.right, s = T < M.left;
        let R = i;
        Zs(S) && (S.isPrimary || (R = Kr(r, S.clientX, S.clientY, {
          bias: 0
        })));
        let F = Kr(r, T, L, {
          bias: T <= c ? T === c ? 0 : -1 : 1
        });
        R >= 0 && F >= 0 && (r.model.extendSelectionTo(R, F), te(t)), S.preventDefault(), S.stopPropagation()
      }
      Br && Math.abs(Br.x - c) < 5 && Math.abs(Br.y - u) < 5 && Date.now() < Br.time + 500 ? (Ii += 1, Br.time = d) : (Br = {
        x: c,
        y: u,
        time: d
      }, Ii = 1);
      let w = m.getBoundingClientRect();
      if (c >= w.left && c <= w.right && u >= w.top && u <= w.bottom) {
        if (t.hasFocus() || (n = "none", t.focus({
            scrollIntoView: !1
          })), t.flushInlineShortcutBuffer(), t.smartModeSuppressed = !1, t.adoptStyle = "left", i = Kr(t, c, u, {
            bias: 0
          }), i >= 0) {
          if (t.element.classList.add("tracking"), e.shiftKey) {
            let S = t.model.selectionIsCollapsed;
            t.model.extendSelectionTo(t.model.anchor, i), Ta(t.model) || S ? n = "all" : n = "selection"
          } else t.model.at(i).type === "placeholder" ? (t.model.setSelection(i - 1, i), n = "selection") : ((k = t.model.at(i).rightSibling) == null ? void 0 : k.type) === "placeholder" ? (t.model.setSelection(i, i + 1), n = "selection") : (t.model.position = i, Ta(t.model) ? n = "all" : n = "selection");
          t.style = {}, e.detail === 3 || Ii > 2 ? (f(e), (e.detail === 3 || Ii === 3) && (t.model.selection = {
            ranges: [
              [0, t.model.lastOffset]
            ]
          }, n = "all")) : o || (o = !0, "PointerEvent" in window ? (je(m, "pointermove", y), je(m, "pointerup pointercancel", f), e instanceof PointerEvent && m.setPointerCapture(e.pointerId)) : (je(window, "blur", f), je(window, "mousemove", y), je(window, "mouseup", f)), (e.detail === 2 || Ii === 2) && (a = !0, Ua(t.model), n = "all"))
        }
      } else Br = null;
      n !== "none" && (t.model.selectionIsCollapsed && (n = "all"), te(t)), e.preventDefault()
    }

    function Mu(t, e, r) {
      if (t >= r.left && t <= r.right && e >= r.top && e <= r.bottom) return 0;
      let i = t - (r.left + r.right) / 2,
        o = e - (r.top + r.bottom) / 2;
      return i * i + o * o
    }

    function Ys(t, e, r, i, o) {
      if (!r.id) return [1 / 0, null];
      if (e.has(r.id)) return e.get(r.id);
      let a = mr(t, r);
      if (!a) return [1 / 0, null];
      let n = [1 / 0, null];
      if (r.hasChildren && !r.captureSelection && i >= a.left && i <= a.right)
        for (let s of r.children) {
          let l = Ys(t, e, s, i, o);
          l[0] <= n[0] && (n = l)
        }
      return n[1] || (n = [Mu(i, o, a), r]), e.set(r.id, n), n
    }

    function Au(t, e, r) {
      let [, i] = Ys(t, new Map, t.model.root, e, r);
      return i
    }

    function Kr(t, e, r, i) {
      var c, u;
      let o = (c = t.fieldContent) == null ? void 0 : c.getBoundingClientRect();
      if (!o) return 0;
      if (e > o.right || r > o.bottom + 8) return t.model.lastOffset;
      if (e < o.left || r < o.top - 8) return 0;
      i = i != null ? i : {}, i.bias = (u = i.bias) != null ? u : 0;
      let a = Au(t, e, r),
        n = [],
        s = a;
      for (; s;) n.unshift(s), s = s.parent;
      for (let d of n)
        if (d.captureSelection) {
          a = d;
          break
        } let l = t.model.offsetOf(a);
      if (l < 0) return -1;
      if (a.leftSibling)
        if (i.bias === 0 && a.type !== "placeholder") {
          let d = mr(t, a);
          d && e < (d.left + d.right) / 2 && (l = t.model.offsetOf(a.leftSibling))
        } else i.bias < 0 && (l = t.model.offsetOf(a.leftSibling));
      return l
    }
    var Xa = class extends X {
      constructor() {
        super("text")
      }
      onPaste(e, r) {
        if (!r) return !1;
        let i = typeof r == "string" ? r : r.getData("text/plain");
        return i && H(e.model, {
          inputType: "insertFromPaste",
          data: i
        }) ? (e.snapshot(), this.insert(e.model, i) && (J(e.model, {
          inputType: "insertFromPaste"
        }), te(e)), !0) : !1
      }
      insert(e, r, i = {}) {
        if (!H(e, {
            data: r,
            inputType: "insertText"
          })) return !1;
        i.insertionMode || (i.insertionMode = "replaceSelection"), i.selectionMode || (i.selectionMode = "placeholder"), i.format || (i.format = "auto");
        let {
          suppressChangeNotifications: o
        } = e;
        i.suppressChangeNotifications && (e.suppressChangeNotifications = !0);
        let a = e.suppressChangeNotifications;
        e.suppressChangeNotifications = !0, i.insertionMode === "replaceSelection" && !e.selectionIsCollapsed ? e.deleteAtoms(xe(e.selection)) : i.insertionMode === "replaceAll" ? (e.root.setChildren([], "body"), e.position = 0) : i.insertionMode === "insertBefore" ? e.collapseSelection("backward") : i.insertionMode === "insertAfter" && e.collapseSelection("forward");
        let n = Lu(r, e.mathfield);
        if (Dt(n, i.style), !n) return !1;
        let s = e.at(e.position),
          l = s.parent.addChildrenAfter(n, s);
        return e.suppressChangeNotifications = a, i.selectionMode === "before" || (i.selectionMode === "item" ? e.setSelection(e.anchor, e.offsetOf(l)) : l && (e.position = e.offsetOf(l))), J(e, {
          data: r,
          inputType: "insertText"
        }), e.suppressChangeNotifications = o, !0
      }
    };

    function Lu(t, e) {
      return t = t.replace(/\\/g, "\\textbackslash "), t = t.replace(/#/g, "\\#"), t = t.replace(/\$/g, "\\$"), t = t.replace(/%/g, "\\%"), t = t.replace(/&/g, "\\&"), t = t.replace(/_/g, "\\_"), t = t.replace(/{/g, "\\textbraceleft "), t = t.replace(/}/g, "\\textbraceright "), t = t.replace(/\^/g, "\\textasciicircum "), t = t.replace(/~/g, "\\textasciitilde "), t = t.replace(/£/g, "\\textsterling "), he(t, e, {
        parseMode: "text"
      })
    }
    new Xa;
    var Za, Ya, Cu = '<svg style="width: 21px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm16 336c0 8.823-7.177 16-16 16H48c-8.823 0-16-7.177-16-16V112c0-8.823 7.177-16 16-16h480c8.823 0 16 7.177 16 16v288zM168 268v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm-336 80v-24c0-6.627-5.373-12-12-12H84c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm384 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zM120 188v-24c0-6.627-5.373-12-12-12H84c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm-96 152v-8c0-6.627-5.373-12-12-12H180c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h216c6.627 0 12-5.373 12-12z"/></svg>',
      Oo = class {
        constructor(e, r) {
          this.focusBlurInProgress = !1;
          this.stylesheets = [];
          var a, n;
          this.options = wi(P(b({}, ki()), {
            registers: co(this)
          }), r), r.eventSink && (this.host = r.eventSink), this.element = e, e.mathfield = this, e.style.visibility = "hidden", Za || (Za = Xe(Ie).toString(36)), this.stylesheets.push(Ze(e, Ie, Za)), Ya || (Ya = Xe(Fa).toString(36)), this.stylesheets.push(Ze(e, Fa, Ya)), this.blurred = !0, this.keystrokeCaptionVisible = !1, this.popoverVisible = !1, this.suggestionIndex = 0, this.inlineShortcutBuffer = [], this.inlineShortcutBufferFlushTimer = 0, this.mode = ho(this.options), this.smartModeSuppressed = !1, this.style = {}, this.adoptStyle = "left", this.options.defaultMode === "inline-math" ? this.element.classList.add("ML__is-inline") : this.element.classList.remove("ML__is-inline"), this.dirty = !1, this.model = new zi({
            mode: ho(this.options),
            macros: this.options.macros,
            removeExtraneousParentheses: this.options.removeExtraneousParentheses
          }, {
            onSelectionDidChange: () => this._onSelectionDidChange()
          }, this), this.undoManager = new Eo(this.model);
          let i = (a = r.value) != null ? a : this.element.textContent;
          i && (i = i.trim()), i && X.insert("math", this.model, i, {
            insertionMode: "replaceAll",
            selectionMode: "after",
            format: "latex",
            suppressChangeNotifications: !0
          });
          let o = [];
          if (o.push(`<span contenteditable=true aria-multiline=false part=keyboard-sink class=ML__keyboard-sink autocapitalize=off autocomplete=off autocorrect=off spellcheck=false inputmode=none tabindex=${(n=e.tabIndex)!=null?n:0}></span>`), o.push("<span part=container class=ML__container aria-hidden=true>"), o.push("<span part=content class=ML__content>"), o.push(Ba(this)), o.push("</span>"), o.push(`<div part=virtual-keyboard-toggle class=ML__virtual-keyboard-toggle role=button ${this.hasEditableContent?"":'style="display:none;"'}data-ML__tooltip="${Kt("tooltip.toggle virtual keyboard")}">`), o.push(Cu), o.push("</div>"), o.push("</span>"), o.push("<span class=ML__sr-only>"), o.push("<span role=status aria-live=assertive aria-atomic=true></span>"), o.push("</span>"), this.element.innerHTML = window.MathfieldElement.createHTML(o.join("")), !this.element.children) {
            console.error(`%cMathLive: Something went wrong and the mathfield could not be created.%c
If you are using Vue, this may be because you are using the runtime-only build of Vue. Make sure to include 'runtimeCompiler: true' in your Vue configuration. Theremay a warning from Vue in the log above.`, "color:red;font-family:system-ui;font-size:1.2rem;font-weight:bold", "color:inherit;font-family:system-ui;font-size:inherit;font-weight:inherit");
            return
          }
          this.field = this.element.querySelector("[part=content]"), this.field.addEventListener("click", s => s.stopImmediatePropagation(), {
            capture: !1
          }), this.field.addEventListener("wheel", this, {
            passive: !1
          }), "PointerEvent" in window ? this.field.addEventListener("pointerdown", this) : this.field.addEventListener("mousedown", this), Yr(this.element.querySelector("[part=virtual-keyboard-toggle]"), s => this.executeCommand(s), {
            default: "toggleVirtualKeyboard",
            shift: "toggleVirtualKeyboardShift"
          }), this.ariaLiveText = this.element.querySelector("[role=status]"), this.keyboardDelegate = qs(this.element.querySelector(".ML__keyboard-sink"), this.element, {
            onFocus: () => this.onFocus(),
            onBlur: () => this.onBlur(),
            onInput: s => Ni(this, s),
            onKeystroke: (s, l) => Ja(this, s, l),
            onCompositionStart: s => this.onCompositionStart(s),
            onCompositionUpdate: s => this.onCompositionUpdate(s),
            onCompositionEnd: s => this.onCompositionEnd(s),
            onCut: s => {
              if (!this.isSelectionEditable) {
                this.model.announce("plonk");
                return
              }
              H(this.model, {
                inputType: "deleteByCut"
              }) && (this.snapshot(), X.onCopy(this, s), mt(this.model, xe(this.model.selection), "deleteByCut"), te(this))
            },
            onCopy: s => X.onCopy(this, s),
            onPaste: s => {
              let l = this.isSelectionEditable;
              return l && (l = X.onPaste(this.model.at(this.model.position).mode, this, s.clipboardData)), l || this.model.announce("plonk"), s.preventDefault(), s.stopPropagation(), l
            }
          }), window.addEventListener("resize", this), window === window.top && window.addEventListener("blur", () => {
            qt(this) && this.hasFocus() && window.addEventListener("focus", s => {
              s.target === window && qt(this) && this.focus()
            }, {
              once: !0
            })
          }, {
            capture: !0
          }), this.undoManager.startRecording(), this.undoManager.snapshot(), Cr && !W.locale.startsWith(Cr.locale) && us(W.locale), qe !== "ready" && document.fonts.ready.then(() => Oi(this)), this.element.style.visibility = "visible"
        }
        connectToVirtualKeyboard() {
          this.connectedToVirtualKeyboard || (this.connectedToVirtualKeyboard = !0, window.addEventListener("message", this), window.mathVirtualKeyboard.connect(), window.mathVirtualKeyboard.updateToolbar($t(this)))
        }
        disconnectFromVirtualKeyboard() {
          this.connectedToVirtualKeyboard && (window.removeEventListener("message", this), window.mathVirtualKeyboard.disconnect(), this.connectedToVirtualKeyboard = !1)
        }
        get colorMap() {
          return e => {
            var i;
            let r;
            return typeof((i = this.options) == null ? void 0 : i.colorMap) == "function" && (r = this.options.colorMap(e)), r || (r = br(e)), r
          }
        }
        get backgroundColorMap() {
          return e => {
            var i;
            let r;
            return typeof((i = this.options) == null ? void 0 : i.backgroundColorMap) == "function" && (r = this.options.backgroundColorMap(e)), !r && typeof this.options.colorMap == "function" && (r = this.options.colorMap(e)), r || (r = zr(e)), r
          }
        }
        get fractionNavigationOrder() {
          return window.MathfieldElement.fractionNavigationOrder
        }
        get placeholderSymbol() {
          var e, r;
          return (r = (e = this.options) == null ? void 0 : e.placeholderSymbol) != null ? r : "\u25A2"
        }
        get smartFence() {
          var e, r;
          return (r = (e = this.options) == null ? void 0 : e.smartFence) != null ? r : !1
        }
        get readOnly() {
          var e, r;
          return (r = (e = this.options) == null ? void 0 : e.readOnly) != null ? r : !1
        }
        get disabled() {
          var e, r;
          return (r = (e = this.host) == null ? void 0 : e.disabled) != null ? r : !1
        }
        get contentEditable() {
          var e;
          return ((e = this.host) == null ? void 0 : e.getAttribute("contenteditable")) !== "false"
        }
        get userSelect() {
          if (!this.host) return "";
          let e = getComputedStyle(this.host);
          return e.getPropertyValue("user-select") || e.getPropertyValue("-webkit-user-select")
        }
        get hasEditableContent() {
          return this.disabled || !this.contentEditable ? !1 : !this.readOnly || this.hasEditablePrompts
        }
        get hasEditablePrompts() {
          return this.readOnly && !this.disabled && this.contentEditable && this.model.findAtom(e => e.type === "prompt" && !e.locked) !== void 0
        }
        get isSelectionEditable() {
          if (this.disabled || !this.contentEditable) return !1;
          if (!this.readOnly) return !0;
          let e = this.model.at(this.model.anchor),
            r = this.model.at(this.model.position),
            i = g.commonAncestor(e, r);
          return !!(i != null && i.parentPrompt)
        }
        get letterShapeStyle() {
          var e, r;
          return (r = (e = this.options) == null ? void 0 : e.letterShapeStyle) != null ? r : "tex"
        }
        get registers() {
          var e, r;
          return (r = (e = this.options) == null ? void 0 : e.registers) != null ? r : {}
        }
        getDefinition(e, r = "math") {
          return fi(e, r)
        }
        getMacro(e) {
          return to(e, this.options.macros)
        }
        get keybindings() {
          var i, o;
          if (this._keybindings) return this._keybindings;
          let [e, r] = hs(this.options.keybindings, (i = pr()) != null ? i : xa);
          return ((o = pr()) == null ? void 0 : o.score) > 0 && (this._keybindings = e, r.length > 0 && console.error("MathLive: Invalid keybindings for current keyboard layout", r)), e
        }
        setOptions(e) {
          this.options = wi(this.options, e), this.model.setListeners({
            onSelectionDidChange: i => this._onSelectionDidChange()
          }), this.model.options.macros = this.options.macros, this._keybindings = void 0, this.options.defaultMode === "inline-math" ? this.element.classList.add("ML__is-inline") : this.element.classList.remove("ML__is-inline"), this.options.readOnly && this.hasFocus() && window.mathVirtualKeyboard.visible && this.executeCommand("hideVirtualKeyboard");
          let r = g.serialize(this.model.root, {
            expandMacro: !1,
            defaultMode: this.options.defaultMode
          });
          ("macros" in e || this.model.getValue() !== r) && X.insert("math", this.model, r, {
            insertionMode: "replaceAll",
            selectionMode: "after",
            format: "latex",
            suppressChangeNotifications: !0
          }), te(this)
        }
        getOptions(e) {
          return dr(this.options, e)
        }
        getOption(e) {
          return dr(this.options, e)
        }
        handleEvent(e) {
          var r;
          if (qt(this)) {
            if (Pi(e)) {
              if (!Xr(e.origin, (r = this.options.originValidator) != null ? r : "same-origin")) throw new DOMException(`Message from unknown origin (${e.origin}) cannot be handled`, "SecurityError");
              let {
                action: i
              } = e.data;
              if (i === "execute-command") {
                let o = e.data.command;
                if (hr(o) === "virtual-keyboard") return;
                this.executeCommand(o)
              } else i === "update-state" || (i === "focus" ? this.focus() : i === "blur" && this.blur());
              return
            }
            switch (e.type) {
              case "focus":
                this.onFocus();
                break;
              case "blur":
                this.onBlur();
                break;
              case "mousedown":
                ja(this, e);
                break;
              case "pointerdown":
                ja(this, e);
                break;
              case "resize":
                this.resizeTimer && cancelAnimationFrame(this.resizeTimer), this.resizeTimer = requestAnimationFrame(() => qt(this) && this.onResize());
                break;
              case "wheel":
                this.onWheel(e);
                break;
              default:
                console.warn("Unexpected event type", e.type)
            }
          }
        }
        dispose() {
          if (!qt(this)) return;
          this.disconnectFromVirtualKeyboard();
          let e = this.element;
          delete this.element, delete e.mathfield, e.innerHTML = this.model.getValue(), e.removeEventListener("pointerdown", this), e.removeEventListener("mousedown", this), e.removeEventListener("focus", this), e.removeEventListener("blur", this), window.removeEventListener("resize", this), window.removeEventListener("blur", this, {
            capture: !0
          }), delete this.ariaLiveText, delete this.field, delete this.fieldContent, Ts(this), js(this), this.stylesheets.forEach(r => r == null ? void 0 : r.release())
        }
        flushInlineShortcutBuffer(e) {
          if (e != null || (e = {
              defer: !1
            }), !e.defer) {
            this.inlineShortcutBuffer = [], clearTimeout(this.inlineShortcutBufferFlushTimer), this.inlineShortcutBufferFlushTimer = 0;
            return
          }
          this.options.inlineShortcutTimeout > 0 && (clearTimeout(this.inlineShortcutBufferFlushTimer), this.inlineShortcutBufferFlushTimer = setTimeout(() => this.flushInlineShortcutBuffer(), this.options.inlineShortcutTimeout))
        }
        executeCommand(e) {
          return hr(e) === "virtual-keyboard" ? (this.focus({
            scrollIntoView: !1
          }), window.mathVirtualKeyboard.executeCommand(e), requestAnimationFrame(() => window.mathVirtualKeyboard.updateToolbar($t(this))), !1) : Es(this, e)
        }
        get errors() {
          return no(this.model.getValue(), this)
        }
        getValue(e, r, i) {
          return this.model.getValue(e, r, i)
        }
        setValue(e, r) {
          var o;
          r = r != null ? r : {
            mode: "math"
          }, r.insertionMode === void 0 && (r.insertionMode = "replaceAll"), (r.format === void 0 || r.format === "auto") && (r.format = "latex");
          let i = "math";
          (r.mode === void 0 || r.mode === "auto") && (i = (o = Co(this.model, this.model.position)) != null ? o : "math"), X.insert(i, this.model, e, r) && (this.undoManager.snapshot(), te(this))
        }
        get expression() {
          let e = window.MathfieldElement.computeEngine;
          return e ? e.box(e.parse(this.model.getValue())) : (console.error("MathLive: no compute engine available. Make sure the Compute Engine library is loaded."), null)
        }
        scrollIntoView() {
          var i;
          if (!this.element) return;
          (i = this.host) == null || i.scrollIntoView({
            block: "nearest",
            inline: "nearest"
          }), this.dirty && Ht(this, {
            interactive: !0
          });
          let e = this.field.getBoundingClientRect(),
            r = null;
          if (this.model.selectionIsCollapsed) r = Lr(this.field);
          else {
            let o = bo(this);
            if (o.length > 0) {
              let a = -1 / 0,
                n = -1 / 0;
              for (let s of o) s.right > a && (a = s.right), s.top < n && (n = s.top);
              r = {
                x: a + e.left - this.field.scrollLeft,
                y: n + e.top - this.field.scrollTop,
                height: 0
              }
            }
          }
          if (this.host && r) {
            let o = this.host.getBoundingClientRect(),
              a = r.y,
              n = this.host.scrollTop;
            a < o.top ? n = a - o.top + this.host.scrollTop : a > o.bottom && (n = a - o.bottom + this.host.scrollTop + r.height), this.host.scroll({
              top: n,
              left: 0
            })
          }
          if (r) {
            let o = r.x - window.scrollX,
              a = this.field.scrollLeft;
            o < e.left ? a = o - e.left + this.field.scrollLeft - 20 : o > e.right && (a = o - e.right + this.field.scrollLeft + 20), this.field.scroll({
              top: this.field.scrollTop,
              left: a
            })
          }
        }
        insert(e, r) {
          if (typeof e != "string" || e.length === 0 && ((r == null ? void 0 : r.insertionMode) === "insertBefore" || (r == null ? void 0 : r.insertionMode) === "insertAfter") || e.length === 0 && this.model.selectionIsCollapsed) return !1;
          if (this.flushInlineShortcutBuffer(), r = r != null ? r : {
              mode: "math"
            }, r.focus && this.focus(), r.feedback && (ae.keypressVibration && Gi() && navigator.vibrate(Ka), window.MathfieldElement.playSound("keypress")), r.scrollIntoView && this.scrollIntoView(), e === "\\\\") za(this.model);
          else if (e === "&") Ra(this.model);
          else {
            let i = this.style;
            X.insert(this.mode, this.model, e, b({
              style: this.model.at(this.model.position).computedStyle
            }, r)), r.resetStyle && (this.style = i)
          }
          return this.undoManager.snapshot(), te(this), !0
        }
        switchMode(e, r = "", i = "") {
          var n;
          if (this.mode === e || this.readOnly || !this.contentEditable || this.disabled || !((n = this.host) != null && n.dispatchEvent(new Event("mode-change", {
              bubbles: !0,
              composed: !0,
              cancelable: !0
            })))) return;
          let o = this.mode,
            {
              model: a
            } = this;
          a.deferNotifications({
            content: !!i || !!r,
            selection: !0,
            type: "insertText"
          }, () => {
            let s = !1;
            if (this.flushInlineShortcutBuffer(), this.smartModeSuppressed = /text|math/.test(this.mode) && /text|math/.test(e), r && e !== "latex") {
              let l = he(r, this, {
                parseMode: e
              });
              a.collapseSelection("forward");
              let c = a.at(a.position);
              a.position = a.offsetOf(c.parent.addChildrenAfter(l, c)), s = !0
            }
            if (this.mode = e, e === "latex") {
              let l = a.selectionIsCollapsed;
              yt(this, "accept");
              let c, u = a.at(a.position);
              if (l) c = "\\";
              else {
                let m = xe(a.selection);
                c = this.model.getValue(m, "latex");
                let h = this.model.extractAtoms(m);
                h.length === 1 && h[0] instanceof re && (c = r, l = !0), u = a.at(m[0])
              }
              let d = new We(c, this);
              u.parent.addChildAfter(d, u), l ? a.position = a.offsetOf(d.lastChild) : a.setSelection(a.offsetOf(d.firstChild), a.offsetOf(d.lastChild))
            } else Er(a).forEach(l => {
              l.isError = !1
            });
            if (i) {
              let l = he(i, this, {
                parseMode: o
              });
              a.collapseSelection("forward");
              let c = a.at(a.position);
              a.position = a.offsetOf(c.parent.addChildrenAfter(l, c)), s = !0
            }
            return te(this), s
          }), this.mode = e
        }
        hasFocus() {
          return !this.blurred
        }
        focus(e) {
          var r;
          this.hasFocus() || (this.keyboardDelegate.focus(), this.connectToVirtualKeyboard(), this.model.announce("line")), ((r = e == null ? void 0 : e.scrollIntoView) == null || r) && this.scrollIntoView()
        }
        blur() {
          this.disconnectFromVirtualKeyboard(), this.hasFocus() && this.keyboardDelegate.blur()
        }
        select() {
          this.model.selection = {
            ranges: [
              [0, this.model.lastOffset]
            ]
          }
        }
        applyStyle(e, r = {}) {
          var n, s;
          let i = {
            operation: "set",
            suppressChangeNotifications: !1
          };
          Mr(r) ? i.range = r : (i.range = r.range, i.suppressChangeNotifications = (n = r.suppressChangeNotifications) != null ? n : !1);
          let o = Wa(this, e),
            a = (s = i.operation) != null ? s : "set";
          this.model.deferNotifications({
            content: !i.suppressChangeNotifications,
            type: "insertText"
          }, () => {
            if (i.range === void 0)
              for (let l of this.model.selection.ranges) Fi(this.model, l, o, {
                operation: a
              });
            else Fi(this.model, i.range, o, {
              operation: a
            })
          }), te(this)
        }
        getCaretPoint() {
          let e = Lr(this.field);
          return e ? {
            x: e.x,
            y: e.y
          } : null
        }
        setCaretPoint(e, r) {
          let i = Kr(this, e, r, {
            bias: 0
          });
          if (i < 0) return !1;
          let o = this.model.position;
          return this.model.position = i, this.model.announce("move", o), te(this), !0
        }
        getPrompt(e) {
          let r = this.model.findAtom(i => i.type === "prompt" && i.placeholderId === e);
          return r
        }
        getPromptValue(e, r) {
          let i = this.getPrompt(e);
          if (!i) return console.error("MathLive: unknown prompt", e), "";
          let o = this.model.offsetOf(i.firstChild),
            a = this.model.offsetOf(i.lastChild);
          return this.model.getValue(o, a, r)
        }
        getPrompts(e) {
          return this.model.getAllAtoms().filter(r => r.type !== "prompt" ? !1 : e ? !(e.id && r.placeholderId !== e.id || e.locked && r.locked !== e.locked || e.correctness === "undefined" && r.correctness || e.correctness && r.correctness !== e.correctness) : !0).map(r => r.placeholderId)
        }
        setPromptValue(e, r) {
          if (r !== void 0) {
            let i = this.getPrompt(e);
            if (!i) {
              console.error("MathLive: unknown prompt", e);
              return
            }
            let o = this.model.getBranchRange(this.model.offsetOf(i), "body");
            this.model.setSelection(o), this.insert(r, {
              insertionMode: "replaceSelection"
            })
          }
          te(this)
        }
        setPromptState(e, r, i) {
          let o = this.getPrompt(e);
          if (!o) {
            console.error("MathLive: unknown prompt", e);
            return
          }
          r === "undefined" ? o.correctness = void 0 : typeof r == "string" && (o.correctness = r), typeof i == "boolean" && (o.locked = i, o.captureSelection = i), te(this)
        }
        getPromptState(e) {
          let r = this.getPrompt(e);
          return r ? [r.correctness, r.locked] : (console.error("MathLive: unknown prompt", e), [void 0, !0])
        }
        canUndo() {
          return this.undoManager.canUndo()
        }
        canRedo() {
          return this.undoManager.canRedo()
        }
        popUndoStack() {
          this.undoManager.pop()
        }
        snapshot() {
          var e;
          this.undoManager.snapshot() && (window.mathVirtualKeyboard.updateToolbar($t(this)), (e = this.host) == null || e.dispatchEvent(new CustomEvent("undo-state-change", {
            bubbles: !0,
            composed: !0,
            detail: {
              type: "snapshot"
            }
          })))
        }
        snapshotAndCoalesce() {
          var e;
          this.undoManager.snapshotAndCoalesce() && (window.mathVirtualKeyboard.updateToolbar($t(this)), (e = this.host) == null || e.dispatchEvent(new CustomEvent("undo-state-change", {
            bubbles: !0,
            composed: !0,
            detail: {
              type: "snapshot"
            }
          })))
        }
        undo() {
          var e;
          this.undoManager.undo() && (window.mathVirtualKeyboard.updateToolbar($t(this)), (e = this.host) == null || e.dispatchEvent(new CustomEvent("undo-state-change", {
            bubbles: !0,
            composed: !0,
            detail: {
              type: "undo"
            }
          })))
        }
        redo() {
          var e;
          this.undoManager.redo() && (window.mathVirtualKeyboard.updateToolbar($t(this)), (e = this.host) == null || e.dispatchEvent(new CustomEvent("undo-state-change", {
            bubbles: !0,
            composed: !0,
            detail: {
              type: "undo"
            }
          })))
        }
        resetUndo() {
          var e;
          (e = this.undoManager) == null || e.reset()
        }
        _onSelectionDidChange() {
          var r, i;
          let e = this.model;
          this.keyboardDelegate.setValue(this.model.getValue(this.model.selection, "latex-expanded")); {
            let o = e.at(e.position),
              a = (r = o.mode) != null ? r : ho(this.options);
            this.mode !== a && (this.mode === "latex" ? (yt(this, "accept", {
              mode: a
            }), e.position = e.offsetOf(o)) : this.switchMode(a))
          }(i = this.host) == null || i.dispatchEvent(new Event("selection-change", {
            bubbles: !0,
            composed: !0
          }))
        }
        onFocus() {
          this.focusBlurInProgress || !this.blurred || (this.focusBlurInProgress = !0, this.blurred = !1, this.keyboardDelegate.focus(), Ht(this, {
            interactive: !0
          }), this.valueOnFocus = this.model.getValue(), this.hasEditablePrompts && !this.model.at(this.model.anchor).parentPrompt && this.executeCommand("moveToNextPlaceholder"), this.focusBlurInProgress = !1)
        }
        onBlur() {
          var e, r, i;
          this.focusBlurInProgress || this.blurred || (this.focusBlurInProgress = !0, this.blurred = !0, this.ariaLiveText.textContent = "", yt(this, "accept"), this.model.getValue() !== this.valueOnFocus && ((e = this.host) == null || e.dispatchEvent(new Event("change", {
            bubbles: !0,
            composed: !0
          }))), this.disconnectFromVirtualKeyboard(), (r = this.host) == null || r.dispatchEvent(new Event("blur", {
            bubbles: !1,
            composed: !0
          })), (i = this.host) == null || i.dispatchEvent(new UIEvent("focusout", {
            bubbles: !0,
            composed: !0
          })), te(this), this.focusBlurInProgress = !1)
        }
        onCompositionStart(e) {
          this.model.deleteAtoms(xe(this.model.selection));
          let r = Lr(this.field);
          r && requestAnimationFrame(() => {
            Ht(this), this.keyboardDelegate.moveTo(r.x, r.y - r.height)
          })
        }
        onCompositionUpdate(e) {
          Fs(this.model, e), te(this)
        }
        onCompositionEnd(e) {
          Ns(this.model), Ni(this, e, {
            simulateKeystroke: !0
          })
        }
        onResize() {
          Ki(this)
        }
        onWheel(e) {
          let r = 5 * e.deltaX;
          if (!Number.isFinite(r) || r === 0) return;
          let i = this.field;
          r < 0 && i.scrollLeft === 0 || r > 0 && i.offsetWidth + i.scrollLeft >= i.scrollWidth || (i.scrollBy({
            top: 0,
            left: r
          }), e.preventDefault(), e.stopPropagation())
        }
        getHTMLElement(e) {
          var i;
          let r = e;
          for (; !r.id && r.hasChildren;) r = e.children[0];
          if (r.id) return (i = this.fieldContent) == null ? void 0 : i.querySelector(`[data-atom-id="${r.id}"]`);
          throw new TypeError("Could not get an ID from atom")
        }
      };

    function Ro(t, e, r) {
      if (t.at(e).mode !== "text") return e;
      let i = r === "backward" ? -1 : 1,
        o;
      if (Ir.test(t.at(e).value)) {
        let a = e,
          n;
        do n = t.at(a).mode === "text" && Ir.test(t.at(a).value), a += i; while (t.at(a) && n);
        o = t.at(a) ? a - 2 * i : a - i
      } else if (/\s/.test(t.at(e).value)) {
        let a = e;
        for (; t.at(a) && t.at(a).mode === "text" && /\s/.test(t.at(a).value);) a += i;
        if (!t.at(a)) o = a - i;
        else {
          let n = !0;
          do n = t.at(a).mode === "text" && !/\s/.test(t.at(a).value), a += i; while (t.at(a) && n);
          o = t.at(a) ? a - 2 * i : a - i
        }
      } else {
        let a = e;
        for (; t.at(a) && t.at(a).mode === "text" && !/\s/.test(t.at(a).value);) a += i;
        o = t.at(a) ? a : a - i;
        let n = !0;
        for (; t.at(a) && n;) n = t.at(a).mode === "text" && /\s/.test(t.at(a).value), n && (o = a), a += i;
        o = t.at(a) ? a - 2 * i : a - i
      }
      return o - (i > 0 ? 0 : 1)
    }

    function gr(t, e, r) {
      var n, s, l, c, u, d, m;
      let i = t.position;
      (n = r == null ? void 0 : r.extend) != null && n || t.collapseSelection(e);
      let o = t.at(t.position);
      if (e === "forward" && (o.type === "msubsup" ? (o = o.rightSibling, o || (o = t.at(t.position + 1))) : o = t.at(t.position + 1)), !o) return t.announce("plonk"), !1;
      let a = t.offsetOf(o);
      if (o instanceof Je) a = Ro(t, a, e);
      else if (o instanceof oe)
        if (o.isSuggestion)
          for (; o && o instanceof oe;) o.isSuggestion = !1, a = t.offsetOf(o), o = o.rightSibling;
        else if (e === "forward") {
        if (o = o.rightSibling, !o || !(o instanceof oe)) return t.announce("plonk"), !1;
        for (; o && o instanceof oe && /[a-zA-Z\*]/.test(o.value);) a = t.offsetOf(o), o = o.rightSibling
      } else {
        if (o = o.leftSibling, !o || !(o instanceof oe)) return t.announce("plonk"), !1;
        for (; o && o instanceof oe && /[a-zA-Z\*]/.test(o.value);) a = t.offsetOf(o), o = o.leftSibling
      } else if (e === "forward" && o.type === "mopen") {
        let h = 0;
        do o.type === "mopen" ? h += 1 : o.type === "mclose" && (h -= 1), o = o.rightSibling; while (!o.isLastSibling && h !== 0);
        a = t.offsetOf(o.leftSibling)
      } else if (e === "backward" && o.type === "mclose") {
        let h = 0;
        do o.type === "mopen" ? h += 1 : o.type === "mclose" && (h -= 1), o = o.leftSibling; while (!o.isFirstSibling && h !== 0);
        a = t.offsetOf(o)
      } else if (e === "backward")
        if (o.type === "first")
          for (; a > 0 && o.type === "first";) a -= 1, o = t.at(a);
        else {
          let h = o.type;
          o.type === "msubsup" && (a = t.offsetOf(t.at(a).leftSibling)), a -= 1;
          let f = (s = t.at(a)) == null ? void 0 : s.type;
          for (; a >= 0 && f === h;)((l = t.at(a)) == null ? void 0 : l.type) === "msubsup" ? a = t.offsetOf(t.at(a).leftSibling) : a -= 1, f = t.at(a).type
        }
      else {
        let {
          type: h
        } = o, f = (c = t.at(a)) == null ? void 0 : c.type, {
          lastOffset: y
        } = t;
        for (; a <= y && (f === h || f === "msubsup");) {
          for (;
            ((u = t.at(a).rightSibling) == null ? void 0 : u.type) === "msubsup";) a = t.offsetOf(t.at(a).rightSibling);
          a += 1, f = (d = t.at(a)) == null ? void 0 : d.type
        }
        a -= 1
      }
      if ((m = r == null ? void 0 : r.extend) != null && m) {
        if (!t.setSelection(t.anchor, a)) return t.announce("plonk"), !1
      } else {
        if (a === t.position) return t.announce("plonk"), !1;
        t.position = a
      }
      return t.announce("move", i), !0
    }

    function xt(t, e, r) {
      var a, n, s, l, c, u;
      if (r = r != null ? r : {
          extend: !1
        }, t.mathfield.adoptStyle = e === "backward" ? "right" : "left", e !== "forward") {
        let [d, m] = Ao(t);
        d !== void 0 && m !== void 0 && t.deleteAtoms([d, m])
      }
      if (e === "upward") return Eu(t, r);
      if (e === "downward") return Pu(t, r);
      let i = t.position;
      if (r.extend) return t.extendSelection(e);
      if (t.selectionIsPlaceholder) return t.collapseSelection(e), xt(t, e);
      let o = () => {
        var m, h;
        let d = !0;
        return t.suppressChangeNotifications || (d = (h = (m = t.mathfield.host) == null ? void 0 : m.dispatchEvent(new CustomEvent("move-out", {
          detail: {
            direction: e
          },
          cancelable: !0,
          bubbles: !0,
          composed: !0
        }))) != null ? h : !0), d && t.announce("plonk"), d
      };
      if (!t.collapseSelection(e)) {
        let d = t.position + (e === "forward" ? 1 : -1),
          m = t.at(d);
        if (d >= 0 && d <= t.lastOffset) {
          if (e === "forward")
            if (t.mathfield.hasEditablePrompts && !t.at(d).parentPrompt) {
              let y = t.getAtoms(d, -1).map(w => [w, ...w.children]).flat().filter(w => w.type === "prompt" && !w.captureSelection)[0];
              if (!y) return o();
              d = t.offsetOf(y) - 1
            } else if (m.inCaptureSelection) {
            for (; !m.captureSelection;) m = m.parent;
            d = t.offsetOf(m)
          } else if (!m.isFirstSibling && m.isLastSibling && ((a = m.parent) != null && a.skipBoundary))
            if (d + 1 === t.lastOffset) d = d + 1;
            else return t.position = d, xt(t, "forward", r);
          else(n = m.parent) != null && n.skipBoundary && ((s = m.rightSibling) != null && s.isLastSibling) ? d += 2 : (l = m.parent) != null && l.skipBoundary && m.type === "first" ? d += 1 : m instanceof oe && m.isSuggestion && (m.isSuggestion = !1);
          else if (e === "backward")
            if (t.mathfield.hasEditablePrompts && !t.at(d).parentPrompt) {
              let f = t.getAtoms(0, d).map(w => [w, ...w.children]).flat().filter(w => w.type === "prompt" && !w.captureSelection),
                y = f[f.length - 1];
              if (!y) return o();
              d = t.offsetOf(y) - 1
            } else if ((c = m.parent) != null && c.inCaptureSelection) {
            for (; !m.captureSelection;) m = m.parent;
            d = Math.max(0, t.offsetOf(m.leftSibling))
          } else(m.skipBoundary || (u = m.parent) != null && u.skipBoundary && m.type === "first") && (d = Math.max(0, t.position - 2))
        }
        if (d < 0 || d > t.lastOffset) return o();
        t.setPositionHandlingPlaceholder(d)
      }
      return t.announce("move", i), !0
    }

    function Tu(t, e, r) {
      let i = 1 / 0,
        o = 0;
      for (; o < e.length; o++) {
        let a = ga(t.getHTMLElement(e[o])).right,
          n = Math.abs(r - a);
        if (n <= i) i = n;
        else break
      }
      return e[o - 1]
    }

    function zo(t, e, r, i, o) {
      let a = r.filter(l => !t.mathfield.hasEditableContent || l.type === "prompt" && !l.captureSelection),
        n = ga(t.mathfield.getHTMLElement(e)).right,
        s = t.offsetOf(Tu(t.mathfield, a, n)) - (t.mathfield.hasEditableContent ? 1 : 0);
      if (i) {
        let [l, c] = t.selection.ranges[0], u;
        s < (o === "up" ? l : c) ? u = {
          ranges: [
            [s, c]
          ],
          direction: "backward"
        } : u = {
          ranges: [
            [l, s]
          ],
          direction: "forward"
        }, t.setSelection(u)
      } else t.setPositionHandlingPlaceholder(s);
      t.announce(`move ${o}`)
    }

    function Eu(t, e) {
      var n, s;
      let r = (n = e == null ? void 0 : e.extend) != null ? n : !1;
      r || t.collapseSelection("backward");
      let i = () => {
          var c, u;
          let l = !0;
          return t.suppressChangeNotifications || (l = (u = (c = t.mathfield.host) == null ? void 0 : c.dispatchEvent(new CustomEvent("move-out", {
            detail: {
              direction: "upward"
            },
            cancelable: !0,
            bubbles: !0,
            composed: !0
          }))) != null ? u : !0), t.announce(l ? "plonk" : "line"), l
        },
        o = t.at(t.position),
        a = o;
      for (; a && a.treeBranch !== "below" && !(Array.isArray(a.treeBranch) && a.parent instanceof j);) a = a.parent;
      if (Array.isArray(a == null ? void 0 : a.treeBranch) && a.parent instanceof j) {
        let l = a.parent;
        if (a.treeBranch[0] < 1) return i();
        let c = a.treeBranch[0] - 1,
          u = l.array[c][a.treeBranch[1]];
        if (!u.some(m => m.type === "prompt" && !m.captureSelection) && t.mathfield.hasEditableContent) return i();
        zo(t, o, u, r, "up")
      } else if (a) {
        let l = (s = a.parent.branch("above")) != null ? s : a.parent.createBranch("above");
        if (!l.some(u => u.type === "prompt" && u.placeholderId) && t.mathfield.hasEditableContent) return i();
        zo(t, o, l, r, "up")
      } else return i();
      return !0
    }

    function Pu(t, e) {
      var n, s;
      let r = (n = e == null ? void 0 : e.extend) != null ? n : !1;
      r || t.collapseSelection("forward");
      let i = () => {
          var c, u;
          let l = !0;
          return t.suppressChangeNotifications || (l = (u = (c = t.mathfield.host) == null ? void 0 : c.dispatchEvent(new CustomEvent("move-out", {
            detail: {
              direction: "downward"
            },
            cancelable: !0,
            bubbles: !0,
            composed: !0
          }))) != null ? u : !0), t.announce(l ? "plonk" : "line"), l
        },
        o = t.at(t.position),
        a = o;
      for (; a && a.treeBranch !== "above" && !(Array.isArray(a.treeBranch) && a.parent instanceof j);) a = a.parent;
      if (Array.isArray(a == null ? void 0 : a.treeBranch) && a.parent instanceof j) {
        let l = a.parent;
        if (a.treeBranch[0] + 1 > l.array.length - 1) return i();
        let c = a.treeBranch[0] + 1,
          u = l.array[c][a.treeBranch[1]];
        if (!u.some(m => m.type === "prompt" && !m.captureSelection) && t.mathfield.hasEditableContent) return i();
        zo(t, o, u, r, "down")
      } else if (a) {
        let l = (s = a.parent.branch("below")) != null ? s : a.parent.createBranch("below");
        if (!l.some(u => u.type === "prompt") && t.mathfield.hasEditableContent) return i();
        zo(t, o, l, r, "down")
      } else return i();
      return !0
    }
    de({
      deleteAll: t => H(t, {
        inputType: "deleteContent"
      }) && mt(t, [0, -1], "deleteContent"),
      deleteForward: t => Rs(t),
      deleteBackward: t => zs(t),
      deleteNextWord: t => H(t, {
        inputType: "deleteWordForward"
      }) && mt(t, [t.anchor, Ro(t, t.position, "forward")], "deleteWordForward"),
      deletePreviousWord: t => H(t, {
        inputType: "deleteWordBackward"
      }) && mt(t, [t.anchor, Ro(t, t.position, "backward")], "deleteWordBackward"),
      deleteToGroupStart: t => H(t, {
        inputType: "deleteSoftLineBackward"
      }) && mt(t, [t.anchor, t.offsetOf(t.at(t.position).firstSibling)], "deleteSoftLineBackward"),
      deleteToGroupEnd: t => H(t, {
        inputType: "deleteSoftLineForward"
      }) && mt(t, [t.anchor, t.offsetOf(t.at(t.position).lastSibling)], "deleteSoftLineForward"),
      deleteToMathFieldStart: t => H(t, {
        inputType: "deleteHardLineBackward"
      }) && mt(t, [t.anchor, 0], "deleteHardLineBackward"),
      deleteToMathFieldEnd: t => H(t, {
        inputType: "deleteHardLineForward"
      }) && mt(t, [t.anchor, -1], "deleteHardLineForward")
    }, {
      target: "model",
      category: "delete"
    });

    function Qs(t) {
      if (t && (t.classList.remove("ML__highlight"), t.children))
        for (let e of t.children) Qs(e)
    }

    function Qa(t, e) {
      var r;
      t && (!e || ((r = t.dataset) == null ? void 0 : r.atomId) === e ? (t.classList.add("ML__highlight"), t.children && t.children.length > 0 && [...t.children].forEach(i => {
        i instanceof HTMLElement && Qa(i)
      })) : (t.classList.remove("ML__highlight"), t.children && t.children.length > 0 && [...t.children].forEach(i => {
        i instanceof HTMLElement && Qa(i, e)
      })))
    }

    function el(t, e) {
      var o;
      if (!fe()) return;
      if (window.MathfieldElement.speechEngine !== "amazon") {
        console.error("MathLive: Use Amazon TTS Engine for synchronized highlighting"), typeof window.MathfieldElement.speakHook == "function" && window.MathfieldElement.speakHook(e);
        return
      }
      if (!window.AWS) {
        console.error("MathLive: AWS SDK not loaded. See https://www.npmjs.com/package/aws-sdk");
        return
      }
      let r = new window.AWS.Polly({
          apiVersion: "2016-06-10"
        }),
        i = {
          OutputFormat: "json",
          VoiceId: (o = window.MathfieldElement.speechEngineVoice) != null ? o : "Joanna",
          Engine: "standard",
          Text: e,
          TextType: "ssml",
          SpeechMarkTypes: ["ssml"]
        };
      bt().readAloudElement = t, r.synthesizeSpeech(i, (a, n) => {
        if (a) {
          console.error("MathLive: polly.synthesizeSpeech() error:", a, a.stack);
          return
        }
        if (!(n != null && n.AudioStream)) return;
        let s = new TextDecoder("utf-8").decode(new Uint8Array(n.AudioStream));
        bt().readAloudMarks = s.split(`
`).map(l => l ? JSON.parse(l) : {}), bt().readAloudTokens = [];
        for (let l of bt().readAloudMarks) l.value && bt().readAloudTokens.push(l.value);
        bt().readAloudCurrentMark = "", i.OutputFormat = "mp3", i.SpeechMarkTypes = [], r.synthesizeSpeech(i, (l, c) => {
          if (l) {
            console.error("MathLive: polly.synthesizeSpeech(", e, ") error:", l, l.stack);
            return
          }
          if (!(c != null && c.AudioStream)) return;
          let u = new Uint8Array(c.AudioStream),
            d = new Blob([u.buffer], {
              type: "audio/mpeg"
            }),
            m = URL.createObjectURL(d),
            h = bt();
          h.readAloudAudio ? h.readAloudAudio.pause() : (h.readAloudAudio = new Audio, h.readAloudAudio.addEventListener("ended", () => {
            let f = h.readAloudMathField;
            h.readAloudStatus = "ended", document.body.dispatchEvent(new Event("read-aloud-status-change", {
              bubbles: !0,
              composed: !0
            })), f ? (Ht(f), h.readAloudElement = null, h.readAloudMathField = null, h.readAloudTokens = [], h.readAloudMarks = [], h.readAloudCurrentMark = "") : Qs(h.readAloudElement)
          }), h.readAloudAudio.addEventListener("timeupdate", () => {
            let f = "",
              y = h.readAloudAudio.currentTime * 1e3 + 100;
            for (let w of h.readAloudMarks) w.time < y && (f = w.value);
            h.readAloudCurrentMark !== f && (h.readAloudCurrentToken = f, f && f === h.readAloudFinalToken ? h.readAloudAudio.pause() : (h.readAloudCurrentMark = f, Qa(h.readAloudElement, h.readAloudCurrentMark)))
          })), h.readAloudAudio.src = m, h.readAloudStatus = "playing", document.body.dispatchEvent(new Event("read-aloud-status-change", {
            bubbles: !0,
            composed: !0
          })), h.readAloudAudio.play()
        })
      })
    }
    fe() || console.error('MathLive: this version of the MathLive library is for use in the browser. A subset of the API is available on the server side in the "mathlive-ssr" library. If using server side rendering (with React for example) you may want to do a dynamic import of the MathLive library inside a `useEffect()` call.');
    var en = fe() ? document.createElement("template") : null;
    en && (en.innerHTML = `<style>
  :host { display: inline-block; background-color: field; color: fieldtext; border-width: 1px; border-style: solid; border-color: #acacac; border-radius: 2px; padding:4px;}
  :host([hidden]) { display: none; }
  :host([disabled]), :host([disabled]:focus), :host([disabled]:focus-within) { outline: none; opacity:  .5; }
  :host(:focus), :host(:focus-within) {
    outline: Highlight auto 1px;    /* For Firefox */
    outline: -webkit-focus-ring-color auto 1px;
  }
  </style>
  <span></span><slot style="display:none"></slot>`);
    var Z = new WeakMap,
      Du = .5,
      yr = class extends HTMLElement {
        constructor(r) {
          super();
          ai() && (this._internals = this.attachInternals(), this._internals.role = "math", this._internals.ariaLabel = "math input field", this._internals.ariaMultiLine = "false"), this.attachShadow({
            mode: "open"
          }), this.shadowRoot.append(en.content.cloneNode(!0));
          let i = this.shadowRoot.querySelector("slot:not([name])");
          this._slotValue = i.assignedNodes().map(o => o.nodeType === 3 ? o.textContent : "").join("").trim(), r && this.setOptions(r)
        }
        static get formAssociated() {
          return ai()
        }
        static get optionsAttributes() {
          return {
            "default-mode": "string",
            "letter-shape-style": "string",
            "popover-policy": "string",
            "math-mode-space": "string",
            "read-only": "boolean",
            "remove-extraneous-parentheses": "on/off",
            "smart-fence": "on/off",
            "smart-mode": "on/off",
            "smart-superscript": "on/off",
            "inline-shortcut-timeout": "string",
            "script-depth": "string",
            "virtual-keyboard-target-origin": "string",
            "math-virtual-keyboard-policy": "string"
          }
        }
        static get observedAttributes() {
          return [...Object.keys(this.optionsAttributes), "contenteditable", "disabled", "readonly", "read-only"]
        }
        static get fontsDirectory() {
          return this._fontsDirectory
        }
        static set fontsDirectory(r) {
          this._fontsDirectory = r, ys()
        }
        static get soundsDirectory() {
          return this._soundsDirectory
        }
        static set soundsDirectory(r) {
          this._soundsDirectory = r, this.audioBuffers = {}
        }
        static get keypressSound() {
          return this._keypressSound
        }
        static set keypressSound(r) {
          var i, o, a;
          this.audioBuffers = {}, r === null ? this._keypressSound = {
            spacebar: null,
            return: null,
            delete: null,
            default: null
          } : typeof r == "string" ? this._keypressSound = {
            spacebar: r,
            return: r,
            delete: r,
            default: r
          } : typeof r == "object" && "default" in r && (this._keypressSound = {
            spacebar: (i = r.spacebar) != null ? i : r.default,
            return: (o = r.return) != null ? o : r.default,
            delete: (a = r.delete) != null ? a : r.default,
            default: r.default
          })
        }
        static get plonkSound() {
          return this._plonkSound
        }
        static set plonkSound(r) {
          this.audioBuffers = {}, this._plonkSound = r
        }
        static get audioContext() {
          return this._audioContext || (this._audioContext = new AudioContext), this._audioContext
        }
        static get speechEngine() {
          return this._speechEngine
        }
        static set speechEngine(r) {
          this._speechEngine = r
        }
        static get speechEngineRate() {
          return this._speechEngineRate
        }
        static set speechEngineRate(r) {
          this._speechEngineRate = r
        }
        static get speechEngineVoice() {
          return this._speechEngineVoice
        }
        static set speechEngineVoice(r) {
          this._speechEngineVoice = r
        }
        static get textToSpeechMarkup() {
          return this._textToSpeechMarkup
        }
        static set textToSpeechMarkup(r) {
          this._textToSpeechMarkup = r
        }
        static get textToSpeechRules() {
          return this._textToSpeechRules
        }
        static set textToSpeechRules(r) {
          this._textToSpeechRules = r
        }
        static get textToSpeechRulesOptions() {
          return this._textToSpeechRulesOptions
        }
        static set textToSpeechRulesOptions(r) {
          this._textToSpeechRulesOptions = r
        }
        static get locale() {
          return W.locale
        }
        static set locale(r) {
          r === "auto" && (r = navigator.language.slice(0, 5)), W.locale = r
        }
        static get decimalSeparator() {
          return this._decimalSeparator
        }
        static set decimalSeparator(r) {
          this._decimalSeparator = r, this._computeEngine && (this._computeEngine.latexOptions.decimalMarker = this.decimalSeparator === "," ? "{,}" : ".")
        }
        static get strings() {
          return W.strings
        }
        static set strings(r) {
          W.merge(r)
        }
        static get computeEngine() {
          var r, i;
          if (this._computeEngine === void 0) {
            let o = (r = globalThis[Symbol.for("io.cortexjs.compute-engine")]) == null ? void 0 : r.ComputeEngine;
            o ? this._computeEngine = new o : console.error(`MathLive: The CortexJS Compute Engine library is not available.
Load the library, for example with:
import "https://unpkg.com/@cortex-js/compute-engine?module"`), this._computeEngine && this.decimalSeparator === "," && (this._computeEngine.latexOptions.decimalMarker = "{,}")
          }
          return (i = this._computeEngine) != null ? i : null
        }
        static set computeEngine(r) {
          this._computeEngine = r
        }
        static async loadSound(r) {
          delete this.audioBuffers[r];
          let i = "";
          switch (r) {
            case "keypress":
              i = this._keypressSound.default;
              break;
            case "return":
              i = this._keypressSound.return;
              break;
            case "spacebar":
              i = this._keypressSound.spacebar;
              break;
            case "delete":
              i = this._keypressSound.delete;
              break;
            case "plonk":
              i = this.plonkSound;
              break
          }
          if (typeof i != "string") return;
          i = i.trim();
          let o = this.soundsDirectory;
          if (o == null || o === "null" || i === "none" || i === "null") return;
          let n = await (await fetch(await vo(`${o}/${i}`))).arrayBuffer(),
            s = await this.audioContext.decodeAudioData(n);
          this.audioBuffers[r] = s
        }
        static async playSound(r) {
          if (this.audioBuffers[r] || await this.loadSound(r), !this.audioBuffers[r]) return;
          let i = this.audioContext.createBufferSource();
          i.buffer = this.audioBuffers[r];
          let o = this.audioContext.createGain();
          o.gain.value = Du, i.connect(o).connect(this.audioContext.destination), i.start()
        }
        onPointerDown() {
          window.addEventListener("pointerup", r => {
            var i;
            r.target === this && !((i = this._mathfield) != null && i.disabled) && this.dispatchEvent(new MouseEvent("click", {
              altKey: r.altKey,
              button: r.button,
              buttons: r.buttons,
              clientX: r.clientX,
              clientY: r.clientY,
              ctrlKey: r.ctrlKey,
              metaKey: r.metaKey,
              movementX: r.movementX,
              movementY: r.movementY,
              relatedTarget: r.relatedTarget,
              screenX: r.screenX,
              screenY: r.screenY,
              shiftKey: r.shiftKey
            }))
          }, {
            once: !0
          })
        }
        getPromptValue(r) {
          var i, o;
          return (o = (i = this._mathfield) == null ? void 0 : i.getPromptValue(r)) != null ? o : ""
        }
        getPrompts(r) {
          var i, o;
          return (o = (i = this._mathfield) == null ? void 0 : i.getPrompts(r)) != null ? o : []
        }
        addEventListener(r, i, o) {
          return super.addEventListener(r, i, o)
        }
        removeEventListener(r, i, o) {
          super.removeEventListener(r, i, o)
        }
        get form() {
          var r;
          return (r = this._internals) == null ? void 0 : r.form
        }
        get name() {
          var r;
          return (r = this.getAttribute("name")) != null ? r : ""
        }
        get type() {
          return this.localName
        }
        get mode() {
          var r, i;
          return (i = (r = this._mathfield) == null ? void 0 : r.mode) != null ? i : "math"
        }
        set mode(r) {
          this._mathfield && (this._mathfield.mode = r)
        }
        get expression() {
          if (this._mathfield) return globalThis[Symbol.for("io.cortexjs.compute-engine")] || console.error(`MathLive: The CortexJS Compute Engine library is not available.
Load the library, for example with:
import "https://unpkg.com/@cortex-js/compute-engine?module"`), this._mathfield.expression
        }
        set expression(r) {
          var o, a;
          if (!this._mathfield) return;
          let i = (a = (o = yr.computeEngine) == null ? void 0 : o.box(r).latex) != null ? a : null;
          i !== null && this._mathfield.setValue(i), globalThis[Symbol.for("io.cortexjs.compute-engine")] || console.error(`MathLive: The CortexJS Compute Engine library is not available.
Load the library, for example with:
import "https://unpkg.com/@cortex-js/compute-engine?module"`)
        }
        get errors() {
          var r, i;
          return (i = (r = this._mathfield) == null ? void 0 : r.errors) != null ? i : []
        }
        getOptions(r) {
          return console.warn("MathLive: mf.getOptions() is deprecated. Read the property directly on the mathfield instead"), this._mathfield ? dr(this._mathfield.options, r) : Z.has(this) ? dr(wi(ki(), Z.get(this).options), r) : null
        }
        reflectAttributes() {
          let r = ki(),
            i = this.getOptions();
          Object.keys(yr.optionsAttributes).forEach(o => {
            let a = Bt(o);
            yr.optionsAttributes[o] === "on/off" ? r[a] !== i[a] ? this.setAttribute(o, i[a] ? "on" : "off") : this.removeAttribute(o) : r[a] !== i[a] && (yr.optionsAttributes[o] === "boolean" ? i[a] ? this.setAttribute(o, "") : this.removeAttribute(o) : (typeof i[a] == "string" || typeof i[a] == "number") && this.setAttribute(o, i[a].toString()))
          })
        }
        getOption(r) {
          return console.warn("MathLive: mf.getOption() is deprecated. Read the property directly on the mathfield instead"), this.getOptions([r])[r]
        }
        setOptions(r) {
          if (console.warn("MathLive: mf.setOptions() is deprecated. Set the property directly on the mathfield instead"), this._mathfield) this._mathfield.setOptions(r);
          else if (Z.has(this)) {
            let i = b(b({}, Z.get(this).options), r);
            Z.set(this, P(b({}, Z.get(this)), {
              selection: {
                ranges: i.readOnly ? [
                  [0, 0]
                ] : [
                  [0, -1]
                ]
              },
              options: i
            }))
          } else Z.set(this, {
            value: void 0,
            selection: {
              ranges: [
                [0, 0]
              ]
            },
            options: r
          });
          this.reflectAttributes()
        }
        executeCommand(r) {
          var i, o;
          return (o = (i = this._mathfield) == null ? void 0 : i.executeCommand(r)) != null ? o : !1
        }
        getValue(r, i, o) {
          var a, n;
          if (this._mathfield) return this._mathfield.model.getValue(r, i, o);
          if (Z.has(this)) {
            let s, l, c;
            if (Wr(r) ? ([s, l] = r.ranges[0], c = i) : Mr(r) ? ([s, l] = r, c = i) : Tt(r) && Tt(i) ? (s = r, l = i, c = o) : (s = 0, l = -1, c = r), (c === void 0 || c === "latex") && s === 0 && l === -1) return (n = (a = Z.get(this).value) != null ? a : this.textContent) != null ? n : ""
          }
          return ""
        }
        setValue(r, i) {
          if (this._mathfield && r !== void 0) {
            i || (i = {
              suppressChangeNotifications: !0
            }), this._mathfield.setValue(r, i);
            return
          }
          if (Z.has(this)) {
            let a = Z.get(this).options;
            Z.set(this, {
              value: r,
              selection: {
                ranges: a.readOnly ? [
                  [0, 0]
                ] : [
                  [0, -1]
                ],
                direction: "forward"
              },
              options: a
            });
            return
          }
          let o = Fo(this);
          Z.set(this, {
            value: r,
            selection: {
              ranges: o.readOnly ? [
                [0, 0]
              ] : [
                [0, -1]
              ],
              direction: "forward"
            },
            options: o
          })
        }
        hasFocus() {
          var r, i;
          return (i = (r = this._mathfield) == null ? void 0 : r.hasFocus()) != null ? i : !1
        }
        focus() {
          var r;
          (r = this._mathfield) == null || r.focus()
        }
        blur() {
          var r;
          (r = this._mathfield) == null || r.blur()
        }
        select() {
          var r;
          (r = this._mathfield) == null || r.select()
        }
        insert(r, i) {
          var o, a;
          return (a = (o = this._mathfield) == null ? void 0 : o.insert(r, i)) != null ? a : !1
        }
        applyStyle(r, i) {
          var o;
          return (o = this._mathfield) == null ? void 0 : o.applyStyle(r, i)
        }
        get caretPoint() {
          var r, i;
          return (i = (r = this._mathfield) == null ? void 0 : r.getCaretPoint()) != null ? i : null
        }
        set caretPoint(r) {
          var i;
          r && ((i = this._mathfield) == null || i.setCaretPoint(r.x, r.y))
        }
        setCaretPoint(r, i) {
          var o, a;
          return (a = (o = this._mathfield) == null ? void 0 : o.setCaretPoint(r, i)) != null ? a : !1
        }
        offsetFromPoint(r, i, o) {
          return this._mathfield ? Kr(this._mathfield, r, i, o) : -1
        }
        hitboxFromOffset(r) {
          if (!this._mathfield) return null;
          let i = this._mathfield.model.at(r);
          if (!i) return null;
          let o = mr(this._mathfield, i);
          return o ? new DOMRect(o.left, o.top, o.right - o.left, o.bottom - o.top) : null
        }
        resetUndo() {
          var r;
          (r = this._mathfield) == null || r.resetUndo()
        }
        canUndo() {
          return this._mathfield ? this._mathfield.canUndo() : !1
        }
        canRedo() {
          return this._mathfield ? this._mathfield.canRedo() : !1
        }
        connectedCallback() {
          var o, a, n;
          setInterval(() => void Tr()), this.shadowRoot.host.addEventListener("pointerdown", () => this.onPointerDown(), !0), this.shadowRoot.host.addEventListener("focus", () => {
            var s;
            return (s = this._mathfield) == null ? void 0 : s.focus()
          }, !0), this.shadowRoot.host.addEventListener("blur", () => {
            var s;
            return (s = this._mathfield) == null ? void 0 : s.blur()
          }, !0), ai() || (this.hasAttribute("role") || this.setAttribute("role", "math"), this.hasAttribute("aria-label") || this.setAttribute("aria-label", "math input field"), this.setAttribute("aria-multiline", "false")), this.hasAttribute("contenteditable") || this.setAttribute("contenteditable", "true"), this.hasAttribute("tabindex") || this.setAttribute("tabindex", "0");
          let r = this.shadowRoot.querySelector("slot:not([name])"),
            i = "";
          if (this.hasAttribute("value") ? i = (o = this.getAttribute("value")) != null ? o : "" : i = (a = r == null ? void 0 : r.assignedNodes().map(s => s.nodeType === 3 ? s.textContent : "").join("").trim()) != null ? a : "", this._mathfield = new Oo(this.shadowRoot.querySelector(":host > span"), P(b({}, Z.has(this) ? Z.get(this).options : Fo(this)), {
              eventSink: this,
              value: i
            })), !Z.has(this)) {
            this.upgradeProperty("disabled"), this.upgradeProperty("readonly");
            for (let s of Object.keys(yr.optionsAttributes)) this.upgradeProperty(Bt(s))
          }
          if (!((n = this._mathfield) != null && n.model)) {
            this._mathfield = null;
            return
          }
          Z.has(this) && this._mathfield.model.deferNotifications({
            content: !1,
            selection: !1
          }, () => {
            let s = Z.get(this).value;
            s !== void 0 && this._mathfield.setValue(s), this._mathfield.model.selection = Z.get(this).selection, Z.delete(this)
          }), r.addEventListener("slotchange", s => {
            if (s.target !== r) return;
            let l = r.assignedNodes().map(c => c.nodeType === 3 ? c.textContent : "").join("").trim();
            l !== this._slotValue && (this._mathfield ? this._mathfield.setValue(l) : this.value = l)
          }), this.dispatchEvent(new Event("mount", {
            cancelable: !1,
            bubbles: !0,
            composed: !0
          }))
        }
        disconnectedCallback() {
          if (this.dispatchEvent(new Event("unmount", {
              cancelable: !1,
              bubbles: !0,
              composed: !0
            })), !this._mathfield) return;
          let r = dr(this._mathfield.options, Object.keys(yr.optionsAttributes).map(i => Bt(i)));
          Z.set(this, {
            value: this._mathfield.getValue(),
            selection: this._mathfield.model.selection,
            options: r
          }), this._mathfield.dispose(), this._mathfield = null
        }
        upgradeProperty(r) {
          if (this.hasOwnProperty(r)) {
            let i = this[r];
            delete this[r], (r === "readonly" || r === "read-only") && (r = "readOnly"), this[r] = i
          }
        }
        attributeChangedCallback(r, i, o) {
          if (i === o) return;
          let a = o !== null;
          switch (r) {
            case "contenteditable":
              this._mathfield && te(this._mathfield);
              break;
            case "disabled":
              this.disabled = a;
              break;
            case "read-only":
            case "readonly":
              this.readOnly = a;
              break;
            default:
          }
        }
        get readonly() {
          return this.hasAttribute("readonly") || this.hasAttribute("read-only")
        }
        set readonly(r) {
          let i = !!r;
          i ? (this.setAttribute("readonly", ""), ai() ? this._internals.ariaReadOnly = "true" : this.setAttribute("aria-readonly", "true"), this.setAttribute("aria-readonly", "true")) : (ai() ? this._internals.ariaReadOnly = "false" : this.removeAttribute("aria-readonly"), this.removeAttribute("readonly"), this.removeAttribute("read-only")), this.setOptions({
            readOnly: i
          })
        }
        get disabled() {
          return this.hasAttribute("disabled")
        }
        set disabled(r) {
          var o;
          let i = !!r;
          i ? this.setAttribute("disabled", "") : this.removeAttribute("disabled"), ai() ? this._internals.ariaDisabled = i ? "true" : "false" : this.setAttribute("aria-disabled", i ? "true" : "false"), i && ((o = this._mathfield) != null && o.hasFocus) && window.mathVirtualKeyboard.visible && this._mathfield.executeCommand("hideVirtualKeyboard")
        }
        get value() {
          return this.getValue()
        }
        set value(r) {
          this.setValue(r)
        }
        get defaultMode() {
          return this.getOption("defaultMode")
        }
        set defaultMode(r) {
          this.setOptions({
            defaultMode: r
          })
        }
        get macros() {
          return this.getOption("macros")
        }
        set macros(r) {
          this.setOptions({
            macros: r
          })
        }
        get registers() {
          return this.getOption("registers")
        }
        set registers(r) {
          this.setOptions({
            registers: r
          })
        }
        get colorMap() {
          return this.getOption("colorMap")
        }
        set colorMap(r) {
          this.setOptions({
            colorMap: r
          })
        }
        get backgroundColorMap() {
          return this.getOption("backgroundColorMap")
        }
        set backgroundColorMap(r) {
          this.setOptions({
            backgroundColorMap: r
          })
        }
        get letterShapeStyle() {
          return this.getOption("letterShapeStyle")
        }
        set letterShapeStyle(r) {
          this.setOptions({
            letterShapeStyle: r
          })
        }
        get smartMode() {
          return this.getOption("smartMode")
        }
        set smartMode(r) {
          this.setOptions({
            smartMode: r
          })
        }
        get smartFence() {
          return this.getOption("smartFence")
        }
        set smartFence(r) {
          this.setOptions({
            smartFence: r
          })
        }
        get smartSuperscript() {
          return this.getOption("smartSuperscript")
        }
        set smartSuperscript(r) {
          this.setOptions({
            smartSuperscript: r
          })
        }
        get scriptDepth() {
          return this.getOption("scriptDepth")
        }
        set scriptDepth(r) {
          this.setOptions({
            scriptDepth: r
          })
        }
        get removeExtraneousParentheses() {
          return this.getOption("removeExtraneousParentheses")
        }
        set removeExtraneousParentheses(r) {
          this.setOptions({
            removeExtraneousParentheses: r
          })
        }
        get mathModeSpace() {
          return this.getOption("mathModeSpace")
        }
        set mathModeSpace(r) {
          this.setOptions({
            mathModeSpace: r
          })
        }
        get placeholderSymbol() {
          return this.getOption("placeholderSymbol")
        }
        set placeholderSymbol(r) {
          this.setOptions({
            placeholderSymbol: r
          })
        }
        get popoverPolicy() {
          return this.getOption("popoverPolicy")
        }
        set popoverPolicy(r) {
          this.setOptions({
            popoverPolicy: r
          })
        }
        get mathVirtualKeyboardPolicy() {
          return this.getOption("mathVirtualKeyboardPolicy")
        }
        set mathVirtualKeyboardPolicy(r) {
          this.setOptions({
            mathVirtualKeyboardPolicy: r
          })
        }
        get inlineShortcuts() {
          return this.getOption("inlineShortcuts")
        }
        set inlineShortcuts(r) {
          this.setOptions({
            inlineShortcuts: r
          })
        }
        get inlineShortcutTimeout() {
          return this.getOption("inlineShortcutTimeout")
        }
        set inlineShortcutTimeout(r) {
          this.setOptions({
            inlineShortcutTimeout: r
          })
        }
        get keybindings() {
          return this.getOption("keybindings")
        }
        set keybindings(r) {
          this.setOptions({
            keybindings: r
          })
        }
        get onInlineShortcut() {
          return this.getOption("onInlineShortcut")
        }
        set onInlineShortcut(r) {
          this.setOptions({
            onInlineShortcut: r
          })
        }
        get onExport() {
          return this.getOption("onExport")
        }
        set onExport(r) {
          this.setOptions({
            onExport: r
          })
        }
        get readOnly() {
          return this.getOption("readOnly")
        }
        set readOnly(r) {
          this.setOptions({
            readOnly: r
          })
        }
        setPromptState(r, i, o) {
          var a;
          (a = this._mathfield) == null || a.setPromptState(r, i, o)
        }
        getPromptState(r) {
          var i, o;
          return (o = (i = this._mathfield) == null ? void 0 : i.getPromptState(r)) != null ? o : [void 0, !0]
        }
        setPromptContent(r, i) {
          var o;
          (o = this._mathfield) == null || o.setPromptValue(r, i)
        }
        get virtualKeyboardTargetOrigin() {
          return this.getOption("virtualKeyboardTargetOrigin")
        }
        set virtualKeyboardTargetOrigin(r) {
          this.setOptions({
            virtualKeyboardTargetOrigin: r
          })
        }
        get selection() {
          return this._mathfield ? this._mathfield.model.selection : Z.has(this) ? Z.get(this).selection : {
            ranges: [
              [0, 0]
            ],
            direction: "forward"
          }
        }
        set selection(r) {
          if (typeof r == "number" && (r = {
              ranges: [
                [r, r]
              ]
            }), this._mathfield) {
            this._mathfield.model.selection = r;
            return
          }
          if (Z.has(this)) {
            Z.set(this, P(b({}, Z.get(this)), {
              selection: r
            }));
            return
          }
          Z.set(this, {
            value: void 0,
            selection: r,
            options: Fo(this)
          })
        }
        get selectionIsCollapsed() {
          let r = this.selection;
          return r.ranges.length === 1 && r.ranges[0][0] === r.ranges[0][1]
        }
        get position() {
          return this._mathfield ? this._mathfield.model.position : Z.has(this) ? Z.get(this).selection.ranges[0][0] : 0
        }
        set position(r) {
          if (this._mathfield && (this._mathfield.model.position = r), Z.has(this)) {
            Z.set(this, P(b({}, Z.get(this)), {
              selection: {
                ranges: [
                  [r, r]
                ]
              }
            }));
            return
          }
          Z.set(this, {
            value: void 0,
            selection: {
              ranges: [
                [r, r]
              ]
            },
            options: Fo(this)
          })
        }
        getOffsetDepth(r) {
          var i;
          return this._mathfield ? ((i = this._mathfield.model.at(r)) == null ? void 0 : i.treeDepth) - 2 : 0
        }
        get lastOffset() {
          var r, i;
          return (i = (r = this._mathfield) == null ? void 0 : r.model.lastOffset) != null ? i : -1
        }
      },
      ae = yr;
    ae._fontsDirectory = "./fonts", ae._soundsDirectory = "./sounds", ae.keypressVibration = !0, ae._keypressSound = {
      spacebar: "keypress-spacebar.wav",
      return: "keypress-return.wav",
      delete: "keypress-delete.wav",
      default: "keypress-standard.wav"
    }, ae._plonkSound = "plonk.wav", ae.audioBuffers = {}, ae.createHTML = r => r, ae._speechEngineRate = "100%", ae._speechEngineVoice = "Joanna", ae._textToSpeechMarkup = "", ae._textToSpeechRules = "mathlive", ae._textToSpeechRulesOptions = {}, ae.speakHook = Ps, ae.readAloudHook = el, ae._decimalSeparator = ".", ae.fractionNavigationOrder = "numerator-denominator";

    function Bt(t) {
      return t.toLowerCase().replace(/[^a-zA-Z\d]+(.)/g, (e, r) => r.toUpperCase())
    }

    function Fo(t) {
      let e = {},
        r = ae.optionsAttributes;
      return Object.keys(r).forEach(i => {
        if (t.hasAttribute(i)) {
          let o = t.getAttribute(i);
          r[i] === "boolean" ? e[Bt(i)] = !0 : r[i] === "on/off" ? o === "on" ? e[Bt(i)] = !0 : o === "off" ? e[Bt(i)] = !1 : e[Bt(i)] = void 0 : r[i] === "number" ? e[Bt(i)] = Number.parseFloat(o != null ? o : "0") : e[Bt(i)] = o
        } else r[i] === "boolean" && (e[Bt(i)] = !1)
      }), e
    }

    function ai() {
      return !(!window.ElementInternals || !HTMLElement.prototype.attachInternals || !("role" in window.ElementInternals.prototype))
    }
    var So = ae,
      tl, rl, il, ol;
    if (fe() && !((tl = window.customElements) != null && tl.get("math-field"))) {
      (il = globalThis[rl = Symbol.for("io.cortexjs.mathlive")]) != null || (globalThis[rl] = {});
      let t = globalThis[Symbol.for("io.cortexjs.mathlive")];
      t.version = "0.90.6", window.MathfieldElement = ae, (ol = window.customElements) == null || ol.define("math-field", ae)
    }

    function tn(t, e) {
      var s;
      e = e != null ? e : {}, e.mathstyle = (s = e.mathstyle) != null ? s : "displaystyle";
      let r = Ct(),
        i = new g("root", r);
      i.body = he(t, r, {
        parseMode: "math",
        mathstyle: e.mathstyle
      });
      let o = new E({
          registers: r.registers,
          renderPlaceholder: () => new v(160, {
            maxFontSize: 1
          })
        }, {
          fontSize: nt,
          letterShapeStyle: r.letterShapeStyle
        }, e.mathstyle),
        a = i.render(o);
      return a ? (_t(a, o), Zt(a), St(a, {
        classes: "ML__mathlive"
      }).toMarkup()) : ""
    }

    function Bu(t) {
      return no(t, Ct())
    }

    function rn(t, e = {}) {
      return V(he(t, Ct(), {
        parseMode: "math",
        args: () => "",
        mathstyle: "displaystyle"
      }), e)
    }

    function on(t) {
      let e = he(t, Ct(), {
        parseMode: "math",
        mathstyle: "displaystyle"
      });
      return It(e)
    }
    var qi;

    function an(t) {
      var e, r;
      if (!qi) {
        let i = (e = globalThis[Symbol.for("io.cortexjs.compute-engine")]) == null ? void 0 : e.ComputeEngine;
        i ? qi = new i : console.error(`MathLive: The CortexJS Compute Engine library is not available.
Load the library, for example with:
import "https://unpkg.com/@cortex-js/compute-engine?module"`)
      }
      return (r = qi == null ? void 0 : qi.box(t).latex) != null ? r : ""
    }

    function Ku(t, e = "math") {
      let r = Ct(),
        i = new g("root", r);
      return i.body = he(t, r, {
        parseMode: e
      }), ue(i)
    }

    function Ou(t) {
      return _r(t, {
        format: "ascii-math"
      })[1]
    }

    function zu(t, e, r) {
      let i = r,
        o = 0,
        a = t.length;
      for (; i < e.length;) {
        let n = e[i];
        if (o <= 0 && e.slice(i, i + a) === t) return i;
        n === "\\" ? i++ : n === "{" ? o++ : n === "}" && o--, i++
      }
      return -1
    }

    function No(t, e, r, i, o = "latex") {
      let a = [];
      for (let n of t)
        if (n.type === "text") {
          let s = n.data,
            l = !0,
            c = 0,
            u;
          u = s.indexOf(e), u !== -1 && (c = u, c > 0 && a.push({
            type: "text",
            data: s.slice(0, c)
          }), l = !1);
          let d = !1;
          for (; !d;) {
            if (l) {
              if (u = s.indexOf(e, c), u === -1) {
                d = !0;
                break
              }
              c !== u && a.push({
                type: "text",
                data: s.slice(c, u)
              }), c = u
            } else {
              if (u = zu(r, s, c + e.length), u === -1) {
                d = !0;
                break
              }
              let m = s.slice(c + e.length, u);
              o === "ascii-math" && ([, m] = _r(m, {
                format: "ascii-math"
              })), a.push({
                type: "math",
                data: m,
                rawData: s.slice(c, u + r.length),
                mathstyle: i
              }), c = u + r.length
            }
            l = !l
          }
          c < s.length && a.push({
            type: "text",
            data: s.slice(c)
          })
        } else a.push(n);
      return a
    }

    function al(t, e, r) {
      let i = [{
        type: "text",
        data: t
      }];
      return e != null && e.inline && e.inline.forEach(([o, a]) => {
        i = No(i, o, a, "textstyle")
      }), e != null && e.display && e.display.forEach(([o, a]) => {
        i = No(i, o, a, "displaystyle")
      }), r != null && r.inline && r.inline.forEach(([o, a]) => {
        i = No(i, o, a, "textstyle", "ascii-math")
      }), r != null && r.display && r.display.forEach(([o, a]) => {
        i = No(i, o, a, "displaystyle", "ascii-math")
      }), i
    }

    function Ru(t, e) {
      let r = document.createElement("span");
      try {
        let i = "<math xmlns='http://www.w3.org/1998/Math/MathML'>" + e.renderToMathML(t) + "</math>";
        r.innerHTML = window.MathfieldElement.createHTML(i)
      } catch (i) {
        console.error("MathLive: Could not convert '" + t + "' to MathML with ", i), r.textContent = t
      }
      return r.className = "ML__sr-only", r
    }

    function Fu(t, e, r, i) {
      try {
        let o = e.renderToMarkup(t, {
            mathstyle: r,
            format: "html"
          }),
          a = document.createElement(r === "displaystyle" ? "div" : "span");
        return a.setAttribute("aria-hidden", "true"), a.innerHTML = window.MathfieldElement.createHTML(o), a
      } catch (o) {
        if (console.error("Could not parse'" + t + "' with ", o), i) return document.createTextNode(t)
      }
      return null
    }

    function ni(t, e, r, i) {
      var n;
      let o = Fu(t, r, e || "displaystyle", i),
        a = (n = r.renderAccessibleContent) != null ? n : "";
      if (o && /\b(mathml|speakable-text)\b/i.test(a)) {
        let s = document.createElement("span");
        if (/\bmathml\b/i.test(a) && r.renderToMathML && s.append(Ru(t, r)), /\bspeakable-text\b/i.test(a) && r.renderToSpeakableText) {
          let l = document.createElement("span"),
            c = r.renderToSpeakableText(t);
          l.innerHTML = window.MathfieldElement.createHTML(c), l.className = "ML__sr-only", s.append(l)
        }
        return s.append(o), s
      }
      return o
    }

    function Nu(t, e) {
      var i, o, a;
      let r = null;
      if ((i = e.TeX) != null && i.processEnvironments && /^\s*\\begin/.test(t)) {
        r = document.createDocumentFragment();
        let n = ni(t, "", e, !0);
        n && r.appendChild(n)
      } else {
        if (!t.trim()) return null;
        let n = al(t, (o = e.TeX) == null ? void 0 : o.delimiters, (a = e.asciiMath) == null ? void 0 : a.delimiters);
        if (n.length === 1 && n[0].type === "text") return null;
        r = document.createDocumentFragment();
        for (let s of n)
          if (s.type === "text") r.appendChild(document.createTextNode(s.data));
          else {
            let l = ni(s.data, s.mathstyle === "textstyle" ? "textstyle" : "displaystyle", e, !0);
            l && r.appendChild(l)
          }
      }
      return r
    }

    function nl(t, e) {
      var r, i, o, a, n, s, l, c, u, d, m, h, f, y, w, k;
      if (t.childNodes.length === 1 && t.childNodes[0].nodeType === 3) {
        let S = (r = t.childNodes[0].textContent) != null ? r : "";
        if ((i = e.TeX) != null && i.processEnvironments && /^\s*\\begin/.test(S)) {
          t.textContent = "";
          let L = ni(S, "", e, !0);
          L && t.append(L);
          return
        }
        let T = al(S, (o = e.TeX) == null ? void 0 : o.delimiters, (a = e.asciiMath) == null ? void 0 : a.delimiters);
        if (T.length === 1 && T[0].type === "math") {
          t.textContent = "";
          let L = ni(T[0].data, T[0].mathstyle === "textstyle" ? "textstyle" : "displaystyle", e, !0);
          L && t.append(L);
          return
        }
        if (T.length === 1 && T[0].type === "text") return
      }
      for (let S = t.childNodes.length - 1; S >= 0; S--) {
        let T = t.childNodes[S];
        if (T.nodeType === 3) {
          let L = Nu((n = T.textContent) != null ? n : "", e);
          L && (S += L.childNodes.length - 1, T.replaceWith(L))
        } else if (T.nodeType === 1) {
          let L = T,
            D = T.nodeName.toLowerCase();
          if (D === "script") {
            let M = T,
              R;
            if ((s = e.processScriptTypePattern) != null && s.test(M.type)) R = (l = M.textContent) != null ? l : "";
            else if ((c = e.processMathJSONScriptTypePattern) != null && c.test(M.type)) try {
              R = (d = e.serializeToLatex) == null ? void 0 : d.call(e, JSON.parse((u = M.textContent) != null ? u : ""))
            } catch (F) {
              console.error(F)
            }
            if (R) {
              let F = "displaystyle";
              for (let Pe of M.type.split(";")) {
                let [vt, Gt] = Pe.toLowerCase().split("=");
                vt.trim() === "mode" && (F = Gt.trim() === "display" ? "displaystyle" : "textstyle")
              }
              let Le = ni(R, F, e, !0);
              Le && M.parentNode.replaceChild(Le, M)
            }
          } else if (((h = (m = e.processClassPattern) == null ? void 0 : m.test(L.className)) != null ? h : !1) || !((y = (f = e.skipTags) == null ? void 0 : f.includes(D)) != null && y || (k = (w = e.ignoreClassPattern) == null ? void 0 : w.test(L.className)) != null && k))
            if (t.childNodes.length === 1 && t.childNodes[0].nodeType === 3) {
              let R = t.textContent;
              t.textContent = "";
              let F = ni(R != null ? R : "", "displaystyle", e, !0);
              F && t.append(F)
            } else nl(L, e)
        }
      }
    }
    var Iu = {
      skipTags: ["math-field", "noscript", "style", "textarea", "pre", "code", "annotation", "annotation-xml"],
      processScriptType: "math/tex",
      processMathJSONScriptType: "math/json",
      ignoreClass: "tex2jax_ignore",
      processClass: "tex2jax_process",
      renderAccessibleContent: "mathml",
      asciiMath: {
        delimiters: {
          display: [
            ["`", "`"]
          ]
        }
      },
      TeX: {
        processEnvironments: !0,
        delimiters: {
          inline: [
            ["\\(", "\\)"]
          ],
          display: [
            ["$$", "$$"],
            ["\\[", "\\]"]
          ]
        }
      }
    };

    function nn(t, e) {
      var r, i, o, a;
      try {
        let n = b(b({}, Iu), e);
        n.ignoreClassPattern = new RegExp((r = n.ignoreClass) != null ? r : ""), n.processClassPattern = new RegExp((i = n.processClass) != null ? i : ""), n.processScriptTypePattern = new RegExp((o = n.processScriptType) != null ? o : ""), n.processMathJSONScriptTypePattern = new RegExp((a = n.processMathJSONScriptType) != null ? a : ""), setInterval(() => void Tr()), Ze(null, Ie, Xe(Ie).toString(36)), nl(t, n)
      } catch (n) {
        n instanceof Error ? console.error("renderMathInElement(): " + n.message) : console.error("renderMathInElement(): Could not render math for element", t)
      }
    }
    var qu = {
        FUNCTIONS: st,
        MATH_SYMBOLS: lt,
        TEXT_SYMBOLS: Mt,
        ENVIRONMENTS: eo,
        DEFAULT_KEYBINDINGS: po,
        getKeybindingMarkup: Ei
      },
      Or = qu;
    var $u = 0,
      sl = 200;
    var B = 1200,
      Vu = 2e3,
      me = 3e3,
      Ee = 4e3;

    function A(t, e, r = me, i = "$0") {
      for (let o of e) lt[o] && (lt[o].frequency = r, lt[o].category = t, lt[o].template = i.replace(/\$0/g, o)), st[o] && (st[o] = P(b({}, st[o]), {
        frequency: r,
        category: t,
        template: i.replace(/\$0/g, o)
      }))
    }
    A("Trigonometry", ["\\cos", "\\sin", "\\tan"], Ee);
    A("Trigonometry", ["\\arccos", "\\arcsin", "\\arctan", "\\arctg", "\\arcctg", "\\arcsec", "\\arccsc", "\\arsinh", "\\arcosh", "\\artanh", "\\arcsech", "\\arccsch", "\\arg", "\\ch", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\lg", "\\lb", "\\sec", "\\sinh", "\\sh", "\\tanh", "\\tg", "\\th"], Vu);
    A("Functions", ["\\ln", "\\log", "\\exp", "\\lim"], Ee);
    A("Functions", ["\\dim", "\\ker", "\\deg", "\\det", "\\mod", "\\min", "\\max"], me);
    A("Functions", ["\\hom"], B);
    A("Decoration", ["\\rule"], sl, "$0{2em}{1em}");
    A("Decoration", ["\\color", "\\textcolor"], sl, "{$0{m0}A}{$0{m1}B}{$0{m2}C }{$0{m3}a}{$0{m4}b}{$0{m5}c}{$0{m6}8}");
    A("Decoration", ["\\overline", "\\underline"], me, "$0{\\placeholder{}}");
    A("Decoration", ["\\enclose"], B, '\\enclose{updiagonalstrike,roundedbox}[1px solid red, mathbackground="#fbc0bd"]{x=0}');
    A("Decoration", ["\\fcolorbox"], B, '\\fcolorbox{#cd0030}{#ffd400}{\\unicode{"2B1A}}');
    A("Decoration", ["\\colorbox"], B, '\\colorbox{#fbc0bd}{\\unicode{"2B1A}}');
    A("Decoration", ["\\boxed", "\\cancel", "\\bcancel", "\\xcancel"], B, "$0{\\placeholder{}}");
    A("Decoration", ["\\bbox"], B, '\\bbox[#ffd400, solid 2px #ffd400]{\\unicode{"2B1A}}');
    A("Styling", ["\\mathbb"], Ee, "$0{Don Knuth}");
    A("Styling", ["\\textbf", "\\textup", "\\textit", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textmd", "\\textsl", "\\textsc", "\\mathsf", "\\mathtt", "\\mathrm", "\\mathfrak", "\\mathcal", "\\mathscr", "\\mathbf", "\\mathmd", "\\mathit", "\\text", "\\mbox", "\\Bbb", "\\bold", "\\bm", "\\boldsymbol"], me, "$0{Don Knuth}");
    A("Styling", ["\\frak", "\\tt", "\\bf", "\\it", "\\rmfamily", "\\sffamily", "\\ttfamily", "\\class", "\\cssId", "\\htmlData", "\\htmlStyle"], B, "{$0 Don Knuth}");
    A("Styling", ["\\bfseries", "\\mdseries", "\\upshape", "\\slshape", "\\scshape"], B, "\\text{$0 Don Knuth}");
    A("Styling", ["\\class", "\\cssId"], B, "$0{testIdentifier}{Don Knuth}");
    A("Styling", ["\\fontseries"], B, "\\text{$0{b}Don Knuth}");
    A("Styling", ["\\fontfamily"], B, "\\text{$0{cmtt}Don Knuth}");
    A("Styling", ["\\fontshape"], B, "\\text{$0{sc}Don Knuth}");
    A("Styling", ["\\selectfont"], B, "\\text{$0}");
    A("Styling", ["\\emph"], B, "Don$0{Knuth}");
    A("Styling", ["\\em"], B, "Don{$0 Knuth}");
    A("Layout", ["\\mathop", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathord", "\\mathinner", "\\operatorname", "\\operatorname*"], B, "x=$0{arg}=0");
    A("Layout", ["\\middle"], B, "\\left\\{x$0|x>0\\right\\}");
    A("Layout", ["\\overset", "\\underset", "\\stackrel", "\\stackbin"], B, "$0{arg}{x=0}");
    A("Layout", ["\\rlap", "\\mathrlap"], B, "$0{/}0");
    A("Layout", ["\\llap", "\\mathllap"], B, "o$0{/}");
    A("Fractions", ["\\frac"], Ee, "$0{\\placeholder{}}{\\placeholder{}}");
    A("Fractions", ["\\binom", "\\dfrac", "\\tfrac", "\\dbinom", "\\tbinom", "\\pdiff", "\\cfrac"], B, "$0{\\placeholder{}}{\\placeholder{}}");
    A("Fractions", ["\\over", "\\atop", "\\choose"], B, '\\unicode{"2B1A} $0 \\unicode{"2B1A}');
    A("Fractions", ["\\overwithdelims", "\\atopwithdelims"], B, '{\\unicode{"2B1A} $0{\\lbrace}{\\rbrace} \\unicode{"2B1A}}');
    A("Extensible Operators", ["\\sum", "\\prod", "\\bigcap", "\\bigcup", "\\int"], Ee);
    A("Extensible Operators", ["\\bigoplus", "\\smallint", "\\iint", "\\oint"], me);
    A("Extensible Operators", ["\\bigwedge", "\\bigvee", "\\coprod", "\\bigsqcup", "\\bigotimes", "\\bigodot", "\\biguplus", "\\intop", "\\sqcup", "\\sqcap", "\\uplus", "\\wr", "\\Cap", "\\Cup", "\\doublecap", "\\doublecup", "\\amalg", "\\iiint", "\\oiint", "\\oiiint", "\\intclockwise", "\\varointclockwise", "\\ointctrclockwise", "\\intctrclockwise"], B);
    A("Accents", ["\\vec"], Ee);
    A("Accents", ["\\bar", "\\ddot", "\\acute", "\\tilde", "\\check"], me, "$0{\\placeholder{}}");
    A("Accents", ["\\^", "\\`", "\\'"], B, "$0{e}");
    A("Accents", ["\\c"], B, "$0{c}");
    A("Accents", ["\\~"], B, "$0{n}");
    A("Accents", ["\\mathring", "\\hat", "\\dot", "\\breve", "\\grave"], B, "$0{\\placeholder{}}");
    A("Extensible Symbols", ["\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftharpoon", "\\overrightharpoon", "\\overleftrightarrow", "\\overbrace", "\\overlinesegment", "\\overgroup", "\\widehat", "\\widecheck", "\\widetilde"], me, "$0{ABC}");
    A("Extensible Symbols", ["\\underrightarrow", "\\underleftarrow", "\\underleftrightarrow", "\\underbrace", "\\underlinesegment", "\\undergroup", "\\utilde"], me, "$0{ABC}");
    A("Sizing", ["\\tiny", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], B, "$0{x=0}");
    A("Sizing", ["\\big", "\\Big", "\\bigg", "\\Bigg"], B, "$0($0)");
    A("Sizing", ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl"], B, "$0(");
    A("Sizing", ["\\bigr", "\\Bigr", "\\biggr", "\\Biggr"], B, "$0)");
    A("Sizing", ["\\bigm", "\\Bigm", "\\biggm", "\\Biggm"], B, "$0|");
    A("Letterlike Symbols", ["\\nabla", "\\partial", "\\N", "\\R", "\\Q", "\\C", "\\Z", "\\exponentialE", "\\forall", "\\exists", "\\nexists"], Ee);
    A("Letterlike Symbols", ["\\doubleStruckCapitalP", "\\P", "\\ell", "\\hbar", "\\hslash", "\\imath", "\\jmath", "\\imaginaryI", "\\imaginaryJ", "\\differentialD", "\\rd", "\\capitalDifferentialD", "\\doubleStruckCapitalN", "\\doubleStruckCapitalR", "\\doubleStruckCapitalQ", "\\doubleStruckCapitalC", "\\doubleStruckCapitalZ", "\\rD", "\\differencedelta", "\\mid", "@", "\\Re", "\\Im", "\\$", "\\%", "\\And", "\\degree"], me);
    A("Letterlike Symbols", ["\\top", "\\bot", "\\scriptCapitalE", "\\scriptCapitalH", "\\scriptCapitalL", "\\gothicCapitalC", "\\gothicCapitalH", "\\gothicCapitalI", "\\gothicCapitalR", "\\Bbbk", "\\Finv", "\\Game", "\\wp", "\\eth", "\\mho", "\\pounds", "\\yen", "\\euro"], B);
    A("Crosses", ["\\dagger", "\\dag"], Ee);
    A("Crosses", ["\\ddag", "\\ddagger", "\\maltese", "\\textdagger", "\\textdaggerdbl"], B);
    A("Various", ["\\checkmark", "\\diagup", "\\diagdown", "\\angle", "\\measuredangle", "\\sphericalangle", "\\prime", "\\doubleprime", "\\backprime", "\\backdoubleprime", "\\sharp", "\\flat", "\\natural", "\\&", "\\#", "\\clubsuit", "\\spadesuit", "\\diamondsuit", "\\heartsuit", "\\backslash", "\\infty", "/", "\\_", "\\/", "|", "'"], B);
    A("Various", ["\\unicode"], B, '$0{"2B1A}');
    A("Arrows", ["\\longrightarrow", "\\rightarrow", "\\Longrightarrow", "\\Rightarrow"], Ee);
    A("Arrows", ["\\longmapsto", "\\mapsto", "\\Longleftrightarrow", "\\rightleftarrows", "\\leftarrow", "\\curvearrowleft", "\\uparrow", "\\downarrow", "\\hookrightarrow", "\\rightharpoonup", "\\rightleftharpoons"], me);
    A("Arrows", ["\\Leftarrow", "\\longleftrightarrow", "\\longleftarrow", "\\Longleftarrow", "\\searrow", "\\nearrow", "\\swarrow", "\\nwarrow", "\\Uparrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "\\hookleftarrow", "\\leftharpoonup", "\\leftharpoondown", "\\rightharpoondown", "\\leftrightarrows", "\\dashrightarrow", "\\dashleftarrow", "\\leftleftarrows", "\\Lleftarrow", "\\twoheadleftarrow", "\\leftarrowtail", "\\looparrowleft", "\\leftrightharpoons", "\\circlearrowleft", "\\Lsh", "\\upuparrows", "\\downharpoonleft", "\\multimap", "\\leftrightsquigarrow", "\\twoheadrightarrow", "\\rightarrowtail", "\\looparrowright", "\\curvearrowright", "\\circlearrowright", "\\Rsh", "\\downdownarrows", "\\upharpoonright", "\\downharpoonright", "\\rightsquigarrow", "\\leadsto", "\\Rrightarrow", "\\restriction"], B);
    A("Arrows", ["\\upharpoonleft", "\\rightrightarrows"], $u);
    A("Negated Arrows", ["\\nrightarrow", "\\nRightarrow", "\\nleftrightarrow", "\\nLeftrightarrow", "\\nleftarrow", "\\nLeftarrow"], B);
    A("Extensible Symbols", ["\\xrightarrow", "\\xleftarrow", "\\xRightarrow", "\\xLeftarrow", "\\xleftharpoonup", "\\xleftharpoondown", "\\xrightharpoonup", "\\xrightharpoondown", "\\xlongequal", "\\xtwoheadleftarrow", "\\xtwoheadrightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium"], B, "$0[below]{above}=0");
    A("Negated Relations", ["\\nless", "\\nleqslant", "\\lneq", "\\lneqq", "\\nleqq", "\\unlhd", "\\unrhd", "\\lvertneqq", "\\lnsim", "\\lnapprox", "\\nprec", "\\npreceq", "\\precnsim", "\\precnapprox", "\\nsim", "\\nshortmid", "\\nmid", "\\nvdash", "\\nvDash", "\\ngtr", "\\ngeqslant", "\\ngeqq", "\\gneq", "\\gneqq", "\\gvertneqq", "\\gnsim", "\\nsucc", "\\succnsim", "\\ncong", "\\nshortparallel", "\\nparallel", "\\nVDash", "\\nVdash", "\\precneqq", "\\succneqq", "\\gnapprox", "\\succnapprox", "\\nsucceq"], B);
    A("Hebrew", ["\\aleph", "\\beth", "\\daleth", "\\gimel"], B);
    A("Fences", ["\\lbrace", "\\rbrace", "\\vert", "\\Vert", "\\{", "\\}", "(", ")", "[", "]"], Ee);
    A("Fences", ["\\langle", "\\rangle", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "\\mvert", "\\|", "\\mVert"], me);
    A("Fences", ["\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lbrack", "\\rbrack", "\\ulcorner", "\\urcorner", "\\llcorner", "\\lrcorner", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache"], B);
    A("Relations", ["=", "\\ne", "\\neq", "<", ">", "\\leqslant", "\\geqslant", "\\approx"], Ee);
    A("Relations", ["\\lt", "\\gt", "\\le", "\\ge", "\\leq", "\\geq", "\\gg", "\\cong", "\\equiv", "\\prec", "\\preceq", "\\succ", "\\perp", "\\parallel", "\\propto", "\\smile", "\\frown", "\\sim", "\\gtrsim"], me);
    A("Relations", ["\\coloneq", "\\succeq", "\\approxeq", "\\thickapprox", "\\lessapprox", "\\gtrapprox", "\\precapprox", "\\succapprox", "\\thicksim", "\\succsim", "\\precsim", "\\backsim", "\\eqsim", "\\backsimeq", "\\simeq", "\\lesssim", "\\nleq", "\\ngeq", "\\smallsmile", "\\smallfrown", "\\bowtie", "\\asymp", "\\leqq", "\\eqslantless", "\\ll", "\\lll", "\\lessgtr", "\\lesseqgtr", "\\lesseqqgtr", "\\risingdotseq", "\\fallingdotseq", "\\preccurlyeq", "\\curlyeqprec", "\\vDash", "\\Vvdash", "\\bumpeq", "\\Bumpeq", "\\geqq", "\\eqslantgtr", "\\ggg", "\\gtrless", "\\gtreqless", "\\gtreqqless", "\\succcurlyeq", "\\curlyeqsucc", "\\Vdash", "\\shortmid", "\\shortparallel", "\\between", "\\pitchfork", "\\varpropto", "\\backepsilon", "\\llless", "\\gggtr", "\\lhd", "\\rhd", "\\Join", "\\doteq", "\\doteqdot", "\\Doteq", "\\eqcirc", "\\circeq", "\\lessdot", "\\gtrdot", "\\measeq", "\\eqdef", "\\questeq"], B);
    A("Logic", ["\\leftrightarrow", "\\Leftrightarrow", "\\to"], Ee);
    A("Logic", ["\\models", "\\vdash"], me);
    A("Logic", ["\\therefore", "\\because", "\\implies", "\\gets", "\\dashv", "\\impliedby", "\\biconditional", "\\roundimplies"], B);
    A("Operators", ["+", "-", "*", "\\cdot"], Ee);
    A("Operators", ["\\sqrt"], Ee, "$0{\\placeholder{}}");
    A("Operators", ["\\pm", "\\mp", "\\times", "\\div", "\\surd"], me);
    A("Operators", ["\\ltimes", "\\rtimes", "\\leftthreetimes", "\\rightthreetimes", "\\intercal", "\\dotplus", "\\centerdot", "\\doublebarwedge", "\\divideontimes", "\\divides"], B);
    A("Logic", ["\\wedge", "\\vee", "\\neg"], Ee);
    A("Logic", ["\\lnot"], me);
    A("Logic", ["\\land", "\\lor", "\\barwedge", "\\veebar", "\\nor", "\\curlywedge", "\\curlyvee"], B);
    A("Greek", ["\\alpha", "\\beta", "\\gamma", "\\delta", "\\epsilon", "\\varepsilon", "\\zeta", "\\eta", "\\theta", "\\vartheta", "\\iota", "\\kappa", "\\varkappa", "\\lambda", "\\mu", "\\nu", "\\xi", "\\pi", "\\varpi", "\\rho", "\\varrho", "\\sigma", "\\varsigma", "\\tau", "\\phi", "\\varphi", "\\upsilon", "\\chi", "\\psi", "\\omega", "\\Gamma", "\\Delta", "\\Theta", "\\Lambda", "\\Xi", "\\Pi", "\\Sigma", "\\Upsilon", "\\Phi", "\\Psi", "\\Omega", "\\digamma", "\\omicron"], me);
    A("Sets", ["\\emptyset", "\\varnothing", "\\cap", "\\cup", "\\in", "\\notin", "\\subset", "\\supset", "\\subseteq", "\\supseteq", "\\sqsubseteq"], Ee);
    A("Sets", ["\\setminus", "\\not", "\\ni", "\\sqsupseteq", "\\nsupseteqq", "\\supsetneq", "\\varsupsetneq", "\\supsetneqq", "\\varsupsetneqq"], me);
    A("Sets", ["\\smallsetminus", "\\complement", "\\owns", "\\subsetneq", "\\varsubsetneq", "\\subsetneqq", "\\varsubsetneqq", "\\nsubset", "\\nsupset", "\\nsubseteq", "\\nsupseteq", "\\nsubseteqq", "\\subseteqq", "\\Subset", "\\sqsubset", "\\supseteqq", "\\Supset", "\\sqsupset"], B);
    A("Spacing", ["\\space", "\\quad", "\\qquad"], me, '\\unicode{"203A}$0\\unicode{"2039}');
    A("Spacing", ["\\!", "\\,", "\\:", "\\;", "\\enskip", "\\enspace"], B, '\\unicode{"203A}$0\\unicode{"2039}');
    A("Spacing", ["\\hspace", "\\hspace*"], B, '\\unicode{"203A}$0{1em}\\unicode{"2039}');
    A("Punctuation", ["\\colon", "\\cdotp", "\\ldots", "\\cdots", "\\ddots", "\\vdots", "?", "!", ":", '"', ",", ".", ";"], me);
    A("Punctuation", ["\\mathellipsis", "\\ldotp", "\\Colon"], B);
    A("Boxes", ["\\square", "\\Box"], me);
    A("Boxes", ["\\blacksquare", "\\boxminus", "\\boxplus", "\\boxtimes", "\\boxdot"], B);
    A("Circles", ["\\circ", "\\bullet", "\\circleddash", "\\oplus", "\\otimes"], me);
    A("Circles", ["\\bigcirc", "\\circledast", "\\ominus", "\\circledcirc", "\\oslash", "\\circledS", "\\circledR", "\\odot"], B);
    A("Triangles", ["\\triangle", "\\triangleq"], me);
    A("Triangles", ["\\bigtriangleup", "\\vartriangle", "\\triangledown", "\\bigtriangledown", "\\triangleleft", "\\vartriangleleft", "\\trianglelefteq", "\\ntriangleleft", "\\ntrianglelefteq", "\\triangleright", "\\vartriangleright", "\\trianglerighteq", "\\ntriangleright", "\\ntrianglerighteq", "\\blacktriangle", "\\blacktriangledown", "\\blacktriangleleft", "\\blacktriangleright"], B);
    A("Shapes", ["\\ast", "\\star"], me);
    A("Shapes", ["\\diamond", "\\Diamond", "\\lozenge", "\\blacklozenge", "\\bigstar"], B);
    de({
      showVariantsPanel: vs
    }, {
      target: "virtual-keyboard"
    });

    function ll(t) {
      var i;
      window.mathVirtualKeyboard.show(), fr(), ti();
      let e = (i = $e.singleton) == null ? void 0 : i.element.querySelectorAll(".MLK__layer"),
        r = !1;
      for (let o of e)
        if (o.dataset.layer === t) {
          r = !0;
          break
        } if (r)
        for (let o of e) o.dataset.layer === t ? o.classList.add("is-visible") : o.classList.remove("is-visible");
      return $e.singleton.focus(), !0
    }

    function Hu() {
      var e;
      let t = (e = $e.singleton) == null ? void 0 : e.element.querySelectorAll(".MLK__layer.is-visible .MLK__keycap, .MLK__layer.is-visible .action");
      if (t)
        for (let r of t) {
          if (r.dataset.unshiftedContent) return !1;
          let i = r.getAttribute("data-shifted");
          if (i || /^[a-z]$/.test(r.innerHTML)) {
            r.dataset.unshiftedContent = r.innerHTML, i || (i = r.innerHTML.toUpperCase()), r.innerHTML = window.MathfieldElement.createHTML(i);
            let o = r.getAttribute("data-command");
            if (o) {
              r.dataset.unshiftedCommand = o;
              let a = r.getAttribute("data-shifted-command");
              if (a) r.dataset.command = a;
              else {
                let n = JSON.parse(o);
                Y(n) && (n[1] = n[1].toUpperCase()), r.dataset.command = JSON.stringify(n)
              }
            }
          }
        }
      return !1
    }
    de({
      shiftKeyboardLayer: Hu
    }, {
      target: "virtual-keyboard"
    });

    function Gu(t) {
      return fr(), window.mathVirtualKeyboard.executeCommand(t)
    }

    function Ju(t) {
      return window.mathVirtualKeyboard.executeCommand(["insert", t]), ti(), !0
    }
    de({
      hideVariantsPanel: () => fr(),
      performVariant: Gu,
      switchKeyboardLayer: t => ll(t),
      unshiftKeyboardLayer: () => ti(),
      insertAndUnshiftKeyboardLayer: Ju
    }, {
      target: "virtual-keyboard"
    });

    function Wu() {
      var r, i, o;
      let t = $e.singleton;
      t.alphabeticLayout = {
        qwerty: "azerty",
        azerty: "qwertz",
        qwertz: "dvorak",
        dvorak: "colemak",
        colemak: "qwerty"
      } [t.alphabeticLayout];
      let e = (o = (i = (r = t == null ? void 0 : t.element) == null ? void 0 : r.querySelector(".MLK__layer.is-visible")) == null ? void 0 : i.id) != null ? o : "";
      return t.show(), e && ll(e), !1
    }
    de({
      toggleVirtualKeyboardShift: Wu
    }, {
      target: "virtual-keyboard"
    });

    function Uu() {
      let t = window.mathVirtualKeyboard;
      return t.visible ? t.hide() : t.show(), !1
    }
    de({
      toggleVirtualKeyboard: Uu,
      hideVirtualKeyboard: () => (window.mathVirtualKeyboard.hide(), !1),
      showVirtualKeyboard: () => (window.mathVirtualKeyboard.show(), !1)
    }, {
      target: "virtual-keyboard"
    });

    function bt() {
      var t, e;
      return (e = globalThis[t = Symbol.for("io.cortexjs.mathlive")]) != null || (globalThis[t] = {}), globalThis[Symbol.for("io.cortexjs.mathlive")]
    }

    function ju() {
      return console.warn("MathLive: makeSharedVirtualKeyboard() is deprecated. Use window.mathVirtualKeyboard to access the virtual keyboard instance"), window.mathVirtualKeyboard
    }

    function Xu(t) {
      cl(document.body, t)
    }

    function Zu(t) {
      if (typeof t == "string") {
        let e = document.getElementById(t);
        if (e === null) throw new Error(`The element with ID "${t}" could not be found.`);
        return e
      }
      return typeof t == "string" ? null : t
    }

    function cl(t, e) {
      var o, a, n, s;
      let r = Zu(t);
      if (!r) return;
      let i = e != null ? e : {};
      (o = i.renderToMarkup) != null || (i.renderToMarkup = tn), (a = i.renderToMathML) != null || (i.renderToMathML = rn), (n = i.renderToSpeakableText) != null || (i.renderToSpeakableText = on), (s = i.serializeToLatex) != null || (i.serializeToLatex = an), nn(r, i)
    }
    var Yu = {
        mathlive: "0.90.6"
      },
      Qu = {
        FUNCTIONS: Or.FUNCTIONS,
        MATH_SYMBOLS: Or.MATH_SYMBOLS,
        TEXT_SYMBOLS: Or.TEXT_SYMBOLS,
        ENVIRONMENTS: Or.ENVIRONMENTS,
        DEFAULT_KEYBINDINGS: Or.DEFAULT_KEYBINDINGS,
        getKeybindingMarkup: Or.getKeybindingMarkup
      };
    return yl(ed);
  })();
  Object.assign(exports, MathLive);
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
}));
import "./static/juice.js";
const languages = [
    ["C++", "cpp"],
    ["Haskell", "haskell, hs"],
    ["Java", "java"],
    ["JavaScript", "javascript, js"],
    ["Kotlin", "kotlin"],
    ["Markup", "markup, html, xml, svg, mathml"],
    ["Python", "python, py"],
    ["Rust", "rust"],
    ["C-like", "clike"],
    ["ABAP", "abap"],
    ["Augmented Backus–Naur form", "abnf"],
    ["ActionScript", "actionscript"],
    ["Ada", "ada"],
    ["Apache Configuration", "apacheconf"],
    ["APL", "apl"],
    ["AppleScript", "applescript"],
    ["Arduino", "arduino"],
    ["ARFF", "arff"],
    ["AsciiDoc", "asciidoc, adoc"],
    ["6502 Assembly", "asm6502"],
    ["ASP.NET (C#)", "aspnet"],
    ["AutoHotkey", "autohotkey"],
    ["AutoIt", "autoit"],
    ["Bash", "bash, shell"],
    ["BASIC", "basic"],
    ["Batch", "batch"],
    ["Bison", "bison"],
    ["Backus–Naur form", "bnf, rbnf"],
    ["Brainfuck", "brainfuck"],
    ["Bro", "bro"],
    ["C", "c"],
    ["C#", "csharp, dotnet"],
    ["CIL", "cil"],
    ["CSS", "css"],
    ["CoffeeScript", "coffeescript, coffee"],
    ["CMake", "cmake"],
    ["Clojure", "clojure"],
    ["Crystal", "crystal"],
    ["Content-Security-Policy", "csp"],
    ["CSS Extras", "css-extras"],
    ["D", "d"],
    ["Dart", "dart"],
    ["Diff", "diff"],
    ["Django/Jinja2", "django, jinja2"],
    ["Docker", "docker, dockerfile"],
    ["Extended Backus–Naur form", "ebnf"],
    ["Eiffel", "eiffel"],
    ["EJS", "ejs"],
    ["Elixir", "elixir"],
    ["Elm", "elm"],
    ["ERB", "erb"],
    ["Erlang", "erlang"],
    ["F#", "fsharp"],
    ["Flow", "flow"],
    ["Fortran", "fortran"],
    ["G-code", "gcode"],
    ["GEDCOM", "gedcom"],
    ["Gherkin", "gherkin"],
    ["Git", "git"],
    ["GLSL", "glsl"],
    ["GameMaker Language", "gml, gamemakerlanguage"],
    ["Go", "go"],
    ["GraphQL", "graphql"],
    ["Groovy", "groovy"],
    ["Haml", "haml"],
    ["Handlebars", "handlebars"],
    ["Haxe", "haxe"],
    ["HCL", "hcl"],
    ["HTTP", "http"],
    ["HTTP Public-Key-Pins", "hpkp"],
    ["HTTP Strict-Transport-Security", "hsts"],
    ["IchigoJam", "ichigojam"],
    ["Icon", "icon"],
    ["Inform 7", "inform7"],
    ["Ini", "ini"],
    ["Io", "io"],
    ["J", "j"],
    ["JavaDoc", "javadoc"],
    ["JavaDoc-like", "javadoclike"],
    ["Java stack trace", "javastacktrace"],
    ["Jolie", "jolie"],
    ["JSDoc", "jsdoc"],
    ["JS Extras", "js-extras"],
    ["JSON", "json"],
    ["JSONP", "jsonp"],
    ["JSON5", "json5"],
    ["Julia", "julia"],
    ["Keyman", "keyman"],
    ["LaTeX", "latex"],
    ["Less", "less"],
    ["Liquid", "liquid"],
    ["Lisp", "lisp, emacs, elisp, emacs-lisp"],
    ["LiveScript", "livescript"],
    ["LOLCODE", "lolcode"],
    ["Lua", "lua"],
    ["Makefile", "makefile"],
    ["Markdown", "markdown, md"],
    ["Markup templating", "markup-templating"],
    ["MATLAB", "matlab"],
    ["MEL", "mel"],
    ["Mizar", "mizar"],
    ["Monkey", "monkey"],
    ["N1QL", "n1ql"],
    ["N4JS", "n4js, n4jsd"],
    ["Nand To Tetris HDL", "nand2tetris-hdl"],
    ["NASM", "nasm"],
    ["nginx", "nginx"],
    ["Nim", "nim"],
    ["Nix", "nix"],
    ["NSIS", "nsis"],
    ["Objective-C", "objectivec"],
    ["OCaml", "ocaml"],
    ["OpenCL", "opencl"],
    ["Oz", "oz"],
    ["PARI/GP", "parigp"],
    ["Parser", "parser"],
    ["Pascal", "pascal, objectpascal"],
    ["Perl", "perl"],
    ["PHP", "php"],
    ["PHPDoc", "phpdoc"],
    ["PHP Extras", "php-extras"],
    ["PL/SQL", "plsql"],
    ["PowerShell", "powershell"],
    ["Processing", "processing"],
    ["Prolog", "prolog"],
    [".properties", "properties"],
    ["Protocol Buffers", "protobuf"],
    ["Pug", "pug"],
    ["Puppet", "puppet"],
    ["Pure", "pure"],
    ["Q (kdb+ database)", "q"],
    ["Qore", "qore"],
    ["R", "r"],
    ["React JSX", "jsx"],
    ["React TSX", "tsx"],
    ["Ren'py", "renpy"],
    ["Reason", "reason"],
    ["Regex", "regex"],
    ["reST (reStructuredText)", "rest"],
    ["Rip", "rip"],
    ["Roboconf", "roboconf"],
    ["Ruby", "ruby, rb"],
    ["SAS", "sas"],
    ["Sass (Sass)", "sass"],
    ["Sass (Scss)", "scss"],
    ["Scala", "scala"],
    ["Scheme", "scheme"],
    ["Smalltalk", "smalltalk"],
    ["Smarty", "smarty"],
    ["SQL", "sql"],
    ["Soy (Closure Template)", "soy"],
    ["Stylus", "stylus"],
    ["Swift", "swift"],
    ["TAP", "tap"],
    ["Tcl", "tcl"],
    ["Textile", "textile"],
    ["TOML", "toml"],
    ["Template Toolkit 2", "tt2"],
    ["Twig", "twig"],
    ["TypeScript", "typescript, ts"],
    ["T4 Text Templates (C#)", "t4-cs, t4"],
    ["T4 Text Templates (VB)", "t4-vb"],
    ["T4 templating", "t4-templating"],
    ["Vala", "vala"],
    ["VB.Net", "vbnet"],
    ["Velocity", "velocity"],
    ["Verilog", "verilog"],
    ["VHDL", "vhdl"],
    ["vim", "vim"],
    ["Visual Basic", "visual-basic, vb"],
    ["WebAssembly", "wasm"],
    ["Wiki markup", "wiki"],
    ["Xeora", "xeora, xeoracube"],
    ["Xojo (REALbasic)", "xojo"],
    ["XQuery", "xquery"],
    ["YAML", "yaml, yml"],
];
const juice = window.juice;
const prism = window.Prism;
const input = document.getElementById("edit");
const copyBtn = document.getElementById("copyBtn");
const pre = document.getElementById("pre");
let reflectInput = () => { };
function getCodeElem() {
    return document.getElementById("code");
}
function replaceWithNumEntity(html) {
    let buf = html;
    buf = buf.replace(/&lt;/g, "&#60;");
    buf = buf.replace(/&gt;/g, "&#62;");
    buf = buf.replace(/\\/g, "&#92;");
    return buf;
}
async function request(url) {
    const xhr = new XMLHttpRequest();
    return new Promise((res, rej) => {
        xhr.addEventListener("load", () => res(xhr.responseText));
        xhr.addEventListener("error", () => rej(xhr));
        xhr.open("GET", url);
        xhr.send();
    });
}
function getSelectedHtmlAsDiv() {
    if (!window.getSelection) {
        return;
    }
    const selection = window.getSelection();
    if (selection.rangeCount === 0) {
        return;
    }
    const range = selection.getRangeAt(0);
    const clonedSelection = range.cloneContents();
    const div = document.createElement('div');
    div.appendChild(clonedSelection);
    return div;
}
function rewrapForStyle(div) {
    if (div.firstElementChild && div.firstElementChild.tagName === "CODE") {
        return div.firstElementChild;
    }
    const container = document.createElement("code");
    const existing = getCodeElem();
    container.className = existing.className;
    container.style.cssText = existing.style.cssText;
    while (div.childNodes.length > 0) {
        container.appendChild(div.childNodes[0]);
    }
    return container;
}
function getDCSafeHtml() {
    const code = getCodeElem();
    code.textContent = input.value === "" ? " " : input.value;
    prism.highlightElement(code);
    return replaceWithNumEntity(pre.innerHTML);
}
async function bindGenerator() {
    let css = await request("./static/prism.css");
    reflectInput = () => {
        const entitied = getDCSafeHtml();
        pre.innerHTML = juice.inlineContent(entitied, css);
    };
    input.addEventListener("input", reflectInput);
    reflectInput();
}
function bindLanguages() {
    const selectLang = document.getElementById("language");
    for (const item of languages) {
        const opt = document.createElement("option");
        opt.text = item[0];
        opt.value = item[1];
        selectLang.add(opt);
    }
    selectLang.addEventListener("change", function () {
        const name = this.value.split(",")[0];
        const code = getCodeElem();
        code.className = "language-" + name;
        reflectInput();
    });
}
function copyEventHandler(ev) {
    const div = getSelectedHtmlAsDiv();
    if (!div) {
        return;
    }
    const container = rewrapForStyle(div);
    ev.clipboardData.setData("text/plain", container.textContent);
    ev.clipboardData.setData("text/html", container.outerHTML);
    ev.preventDefault();
}
function copyBtnHandler() {
    const range = document.createRange();
    const code = getCodeElem();
    range.setStartBefore(code);
    range.setEndAfter(code);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
}
function initialize() {
    prism.plugins.autoloader.languages_path = "./components/";
    bindGenerator();
    bindLanguages();
    pre.addEventListener("copy", copyEventHandler);
    copyBtn.addEventListener("click", copyBtnHandler);
}
initialize();
//# sourceMappingURL=index.js.map
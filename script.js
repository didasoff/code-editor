const htmlEditor = CodeMirror(document.querySelector(".code-editor .editor .html-code"), {
    lineNumbers: true,
    tabSize: 4,
    mode: "xml"
});
const cssEditor = CodeMirror(document.querySelector(".code-editor .editor .css-code"), {
    lineNumbers: true,
    tabSize: 4,
    mode: "css"
});
const jsEditor = CodeMirror(document.querySelector(".code-editor .editor .js-code"), {
    lineNumbers: true,
    tabSize: 4,
    mode: "javascript"
});

document.querySelector("#run-button").addEventListener("click", function() {
    let htmlCode = htmlEditor.getValue();
    let cssCode = "<style>" + cssEditor.getValue() + "</style>";
    let jsCode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
    let previewWindow = document.querySelector("#show-code").contentWindow.document;
    previewWindow.open();
    previewWindow.write(htmlCode + cssCode + jsCode);
    previewWindow.close();
});
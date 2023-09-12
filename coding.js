document.getElementById("run-button").addEventListener("click", function () {
    const htmlCode = document.getElementById("html-code").value;
    const cssCode = document.getElementById("css-code").value;
    const jsCode = document.getElementById("js-code").value;
    const outputFrame = document.getElementById("output");
    const outputDocument = outputFrame.contentDocument;

    outputDocument.open();
    outputDocument.write(`
        <html>
        <head>
            <style>${cssCode}</style>
        </head>
        <body>${htmlCode}</body>
        <script>${jsCode}</script>
        </html>
    `);
    outputDocument.close();
});

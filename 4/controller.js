const fs = require("fs");

const folders = ["html", "static"];
const files = [
    "html/index.html",
    "static/script.js",
    "static/script.ts",
    "static/style.css",
    "main.js",
    "package.json",
    "tsconfig.json",
    "README.md"
];

folders.forEach(folder => {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
        console.log(`📁 Papka yaratildi: ${folder}`);
    }
});

files.forEach(file => {
    if (!fs.existsSync(file)) {
        fs.writeFileSync(file, "");
        console.log(`📄 Fayl yaratildi: ${file}`);
    }
});

console.log("Bu optimal variant ))");
const fs = require("fs");

const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

const buffer = Buffer.from(numbers);

fs.writeFileSync("data.bin", buffer);
console.log("Ma'lumot buffer sifatida `data.bin` fayliga yozildi.");

const readBuffer = fs.readFileSync("data.bin");

console.log("Fayldan o‘qilgan ma'lumot (buffer):", readBuffer);
console.log("Matn sifatida:", readBuffer.toString());
console.log("Original sonlar massivi:", Array.from(readBuffer));

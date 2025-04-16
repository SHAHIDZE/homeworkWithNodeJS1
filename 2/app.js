const fs = require("fs");

fs.writeFileSync("hello.txt", "Salom, dunyo!");
console.log("Fayl yaratildi va ma'lumot yozildi.");

const data = fs.readFileSync("hello.txt", "utf8");
console.log("Fayl ichidagi ma'lumot:", data);
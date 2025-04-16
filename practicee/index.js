import fs from 'fs';

import addUser from './functions/addUser.js';
import getUsers from './functions/getUsers.js';
import updateUser from './functions/updateUser.js';
import deleteUser from './functions/deleteUser.js';

if (!fs.existsSync('db')) {
  fs.mkdirSync('db');
}
if (!fs.existsSync('./db/users.json')) {
  fs.writeFileSync('./db/users.json', '[]');
}

addUser({ name: 'Shohjaxon', age: 15 });
addUser({ name: 'Yahyobek', age: 18 });

console.log("Barcha foydalanuvchilar:", getUsers());

updateUser(0, { age: 16 });
deleteUser(1);

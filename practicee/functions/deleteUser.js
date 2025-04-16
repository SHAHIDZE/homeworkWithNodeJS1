import fs from 'fs';
import getUsers from './getUsers.js';

export default function deleteUser(index) {
  const users = getUsers();
  if (users[index]) {
    const deleted = users.splice(index, 1);
    fs.writeFileSync('./db/users.json', JSON.stringify(users, null, 2));
    console.log(`Foydalanuvchi o'chirildi:`, deleted[0]);
  } else {
    console.log(`Foydalanuvchi ${index} topilmadi.`);
  }
}
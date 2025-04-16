import fs from 'fs';
import getUsers from './getUsers.js';

export default function updateUser(index, updatedUser) {
  const users = getUsers();
  if (users[index]) {
    users[index] = { ...users[index], ...updatedUser };
    fs.writeFileSync('./db/users.json', JSON.stringify(users, null, 2));
    console.log(`Foydalanuvchi ${index} yangilandi`);
  } else {
    console.log(`Foydalanuvchi ${index} topilmadi`);
  }
}
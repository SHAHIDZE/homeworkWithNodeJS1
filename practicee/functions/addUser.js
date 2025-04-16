import fs from 'fs';
import getUsers from './getUsers.js';

export default function addUser(newUser) {
  const users = getUsers();
  users.push(newUser);
  fs.writeFileSync('./db/users.json', JSON.stringify(users, null, 2));
  console.log("Qo'shildi:", newUser);
}
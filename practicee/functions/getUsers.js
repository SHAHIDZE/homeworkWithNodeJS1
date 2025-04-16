import fs from 'fs';

export default function getUsers() {
  if (!fs.existsSync('db')) {
    fs.mkdirSync('db');
  }
  if (!fs.existsSync('./db/users.json')) {
    fs.writeFileSync('./db/users.json', '[]');
  }

  return JSON.parse(fs.readFileSync('./db/users.json', 'utf-8'));
}
const { readFile } = require('fs/promises');

const processBigArray = async () => {
  const jsonUsers = await readFile(`${__dirname}/../data/users-10_000.json`, 'utf-8');
  return jsonUsers.replaceAll('name', 'first_name');
};

module.exports = {
  processBigArray
};
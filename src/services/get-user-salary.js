const { readFile } = require('node:fs/promises');
const { calculateUserSalary } = require('../handlers/calculate-user-salary');
const defaultPath = `${__dirname}/../data/users-10_000.json`;

const getUserSalary = async (params, path = defaultPath) => {
  const jsonUsers = await readFile(path);
  const users = JSON.parse(jsonUsers);
  return calculateUserSalary(users, params.params);
};

module.exports = {
  getUserSalary
}
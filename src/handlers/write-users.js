const fs = require('node:fs/promises');
const { cerateMockUsers } = require('./create-mock-users');

const writeUsers = async (params) => {
  const { file, ...usersParams } = params;
  const mockedUsers = await cerateMockUsers(usersParams);
  await fs.writeFile(file, JSON.stringify(mockedUsers));
};

module.exports = {
  writeUsers
}
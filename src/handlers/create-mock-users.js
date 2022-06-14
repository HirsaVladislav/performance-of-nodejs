const { randomFromArray } = require("./random-from-array");

const names = [
  'Lydie', 'Eloise', 'Dulcy', 'Maxim', 'Rock', 'Malvin', 'Lorie', 'Timothea',
  'Carlos', 'Winnah', 'Rosalie', 'Emmet', 'Armstrong', 'Persis',
  'Travis', 'Grenville', 'Noel', 'Renee', 'Estella', 'Giustina'
];
const cities = [
  'Datong', 'Verkhnyachka', 'Yuankeng', 'Fulin', 'Tongkiling', 'Pingyao', 'Nyinqug', 'Baishan',
  'Argungu', 'Huangbu', 'Luocheng', 'Lansing', 'Ejido', 'Caen', 'Seroa', 'Babakansari', 'Ibarra',
  'Abade de Neiva', 'Nuradilovo', 'Solana'
];


const cerateMockUsers = async (params) => {
  const { count = 100, maxSalary = 1000, minSalary = 10 } = params;
  const users = [];

  for (let i = 0; i < count; ++i) {
    const user = {
      name: randomFromArray(names),
      city: randomFromArray(cities),
      salary: Math.floor(Math.random() * (maxSalary - minSalary) + minSalary),
    }
    users.push(user)
  }

  return users;
};

module.exports = {
  cerateMockUsers
}
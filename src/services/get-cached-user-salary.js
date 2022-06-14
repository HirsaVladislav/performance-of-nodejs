const { setCache } = require('../handlers/caching');
const { getUserSalary } = require('./get-user-salary');

const getCachedUserSalary = async (params) => {
  const { name, city } = params.params;
  const salary = await getUserSalary(params);
  setCache({ key: `${name}-${city}`, value: { salary }, time: 2 });
  return salary;
};



module.exports = {
  getCachedUserSalary
}
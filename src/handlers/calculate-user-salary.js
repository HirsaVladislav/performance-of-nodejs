const calculateUserSalary = (users, filter) => {
  const { name: queryName, city: queryCity } = filter;
  let salarySum = 0;

  for (let { name, city, salary } of users) {
    if (name === queryName && city === queryCity) {
      salarySum += salary;
    }
  }

  return salarySum;
};

module.exports = {
  calculateUserSalary
}
const apiPath = `http://localhost:${3000}/api/`;
const paths = [
  'user-salary/name/Lorie/city/Caen',
  'cached-user-salary/name/Lorie/city/Caen',
  'clustering/',
  'parallelize/',
  'worker-threads/',
];

const createHomePage = async () => {
  const html = ``;
  const links = paths.map(async (el) => {
    return html + `<li><a href="${apiPath}${el}">${el}</a></li>`
  });
  const result = await Promise.all(links);
  const stringResult = result.join('');
  return `<ul>${stringResult}</ul>`
};

module.exports = {
  createHomePage
}
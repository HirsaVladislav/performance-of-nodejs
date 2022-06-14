const runner = (func) => {
  return async (req, res, next) => {
    try {
      const params = {
        body: req?.body,
        params: req?.params,
        query: req?.query
      }
      const result = await func(params) || 'result is empty';

      res.set('Content-Type', 'text/html');
      res.status(200).send(`<p>${result}</p>`)
    } catch (error) {
      next(error);
    }
  }
};

module.exports = {
  runner
}

// In runner you can call writeUsers function for creating Mock Users
// await writeUsers({ file: `${__dirname}/../data/users-1000_0000.json`, count: 1000_000 })


const bigArray = [];

bigArray.map(obj => {
  // change object
  // delete some value
  return obj
})
  .filter(obj => {
    // filter
    return obj
  })



const Piscina = require('piscina')
const contents = getContents()
const chunks = splitToChunks(contents, 2)

// Create a new thread pool
const pool = new Piscina()
const options = { filename: resolve(__dirname, 'worker-pool') }

// Run operation on the chunks parallely
const result = await Promise.all([pool.run(chunks[0], options), pool.run(chunks[1], options)])

const js2xmlparser = require('js2xmlparser')

module.exports = async (contents) => {
  return contents.map((content) => {
    content = JSON.parse(content)
    return js2xmlparser.parse('user', content)
  })
}




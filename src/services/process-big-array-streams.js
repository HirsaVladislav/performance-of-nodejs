const { createReadStream } = require('node:fs');
const { Transform } = require('node:stream');

const processBigArrayStreams = (req, res, next) => {
  try {
    const jsonUsers = createReadStream(`${__dirname}/../data/users-100_000.json`);
    jsonUsers.pipe(new ReplaceStream()).pipe(res);
  } catch (error) {
    next(error)
  }
};

class ReplaceStream extends Transform {
  constructor() {
    super();
    this.data = '';
  }
  _transform(chunk, encoding, callback) {
    this.data += String(chunk).replaceAll('name', 'first_name')
    this.push(this.data);
    callback();
  }
  _flush(callback) {
    this.push(this.data);
    callback();
  }
}

module.exports = {
  processBigArrayStreams
};

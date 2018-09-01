let mongoose = require('mongoose');
// require('dotenv').config()

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    const DB_URL =
      'mongodb://admin:123pingpong@ds125402.mlab.com:25402/racketping';
    mongoose
      .connect(
        DB_URL,
        {
          useNewUrlParser: true,
        },
      )
      .then(() => {
        console.log('Database connection successful');
      })
      .catch(err => {
        console.log(err);
        console.error('Database connection error');
      });
  }

  disconnect() {
    mongoose.disconnect();
  }
}

module.exports = new Database();

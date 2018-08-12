let mongoose = require('mongoose');

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(
        `mongodb://${process.env.MONGO_SERVER_NAME}/${
          process.env.MONGO_DB_NAME
        }`,
        { useNewUrlParser: true },
      )
      .then(() => {
        console.log('Database connection successful');
      })
      .catch(err => {
        console.log(err)
        console.error('Database connection error');
      });
  }
}

module.exports = new Database();

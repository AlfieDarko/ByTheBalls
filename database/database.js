let mongoose = require('mongoose');
// require('dotenv').config()

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(
        `mongodb://${'admin:bytheballs1@ds219432.mlab.com:19432'}/${
          'MONGO_DB_NAME=bytheballsdb'
        }`, {
          useNewUrlParser: true
        },
      )
      .then(() => {
        console.log('Database connection successful');
      })
      .catch(err => {
        console.log(err)
        console.error('Database connection error');
      });
  }

  disconnect() {
    mongoose.disconnect()
  }
}

module.exports = new Database();
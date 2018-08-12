let mongoose = require('mongoose');
// require('dotenv').config()

class Database {
  constructor() {
    this._connect();
  }

  _connect() {

    const DB_URL = "mongodb://admin:bytheballs1@ds219432.mlab.com:19432/bytheballsdb"
    mongoose
      .connect(
        DB_URL, {
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

  drop() {
    mongoose.tournaments.drop()
  }
}

module.exports = new Database();
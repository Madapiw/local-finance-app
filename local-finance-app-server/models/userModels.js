const sql = require('../services/db');

// https://www.bezkoder.com/node-js-rest-api-express-mysql/

//Constructor
const User = function(user) {
    this.username = user.username,
    this.password = user.password,
    this.email = user.email
  };

  User.create = (newUser) => {
    sql.query("INSERT INTO Users SET ?", newUser, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        console.log("created User: ", { id: res, ...newUser });
        result(null, { id: res, ...newUser });
      });
  }
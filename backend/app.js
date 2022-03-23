const express = require('express');
const cors = require('cors');
const main = require('./routes/main');
const app = express();
const dotenv = require(dotenv);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'db123',
    database: 'finance_app'
})

connection.connect();

app.use(cors)
app.use(express.json())
app.use(main)
app.listen(port, host, () => {
    console.log(`Server running on ${host} : ${port}`);
    //const result = Users.findAll()
    //console.log(JSON.stringify(result));
});
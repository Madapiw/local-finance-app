const express = require('express');
const mongoose = require('mongoose');
const Main = require('./routes/main')

const host = "0.0.0.0";
const port = 3000
const app = express();

mongoose.connect('mongodb://27017/todo-app', {
    useNewUrlParser: true,
    keepAlive: true,
    useUnifiedTopology: true,
    createIndexes: true
})

app.use(express.json())
app.use(Main)
app.listen(port, host, () => {
    console.log(`Server running on ${host} : ${port}`);
});
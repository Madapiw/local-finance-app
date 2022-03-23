const http = require('http');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const port = process.env.HOSTPORT || 8000;

const app = express();
app.use(cors);

app.get("/", (req,res) =>{
    res.status(200).send("Working")
});

app.listen(port,() => {
    console.log(`Server listening on port: ${port}`);
});

  
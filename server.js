const express = require('express');
const app = express()
const db = require('./conn/db')
const port = 3300;

app.set("view engine", "ejs");

app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}`)
});
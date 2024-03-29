const express = require('express');
const app = express()
const db = require('./conn/db')
const delimiter = require('./routes/delimiter/router')
const route = require('./routes/router')
const port = 3300;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname + '/public'));
app.use(require('./routes/router'))
app.use(require('./routes/delimiter/router'))


app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}`)
});
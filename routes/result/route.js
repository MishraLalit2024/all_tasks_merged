const express = require('express');
// const con = require('../connection/dbcon');
const { selectQuery, marksheetGen } = require('../../controllers/result/query');
const result_router = express.Router();


// result_router.use(function timeLog(req, res, next){
//     console.log('Time for %s: %s', req.url, Date.now());
//     next();
// });

result_router.get('/allResult', selectQuery);

result_router.get('/marksheet', marksheetGen);


module.exports = result_router;
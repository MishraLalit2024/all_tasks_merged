const express               = require("express");
const validate              = require("../../middlewares/dynamic_grid/validator");
const grid_router           = express.Router();
const conn                  = require('../../conn/db');
const checkParam            = require('../../middlewares/dynamic_grid/checkParam')
const selectQuery           = require("../../controllers/dynamic_grid/query");


grid_router.get('/dynamic-grid', (req, res)=>{
    res.render('dynamic_grid/index');
});


grid_router.post('/grid-query', validate, (req, res, next)=>{
    console.log("Table Generated");
    res.end();
});

grid_router.get('/validate', selectQuery);



module.exports = grid_router;
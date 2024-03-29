/**
 * Developer Name:  Lalit Mishra
 * Developer ID:    24DEV018
 * Date:            05-Mar-2024
 * 
 * Description:     This file contains various routes and call their respected middlewares.
 */


//importing express module:
const express       = require('express');
const del_router    = express.Router();    //using router module
const url           = require('url');


const homeRed       = require('../../controllers/delimiter/home');
const homeRender    = require('../../controllers/delimiter/home');
const fetchAll      = require('../../middlewares/delimiter/query');
const searchQuery   = require('../../middlewares/delimiter/searchQuery');


del_router.get('/delimiter', fetchAll, homeRender);

del_router.post('/delPost', searchQuery, homeRender);


module.exports = del_router;
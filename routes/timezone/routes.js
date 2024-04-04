const express = require('express');
const time_router = express.Router();
const showTime = require('../../controllers/timezone/showTime');
const getTimes = require('../../controllers/timezone/getTimes');


time_router.get('/timezone', showTime);

time_router.get('/getzones', getTimes);



module.exports = time_router;
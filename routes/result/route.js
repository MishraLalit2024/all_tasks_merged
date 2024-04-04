const express = require('express');
const result_router = express.Router();
const { authorization } = require('../../middlewares/login/authorization');
const { selectQuery, marksheetGen } = require('../../controllers/result/query');



result_router.get('/allResult', authorization, selectQuery);

result_router.get('/marksheet', authorization, marksheetGen);



module.exports = result_router;
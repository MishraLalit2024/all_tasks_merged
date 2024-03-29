const json = require("body-parser/lib/types/json");
const express = require("express");
const { authorization } = require("../../middlewares/login/authorization");
const app = express();
const router = express.Router();


router.get('/json-place-holder', authorization, (req, res) => {
    res.render('jsonplaceholder/dataTable');
});

router.get('/jph-details', authorization, (req, res) => {
    res.render('jsonplaceholder/moreDetails');
}); 



module.exports = router;
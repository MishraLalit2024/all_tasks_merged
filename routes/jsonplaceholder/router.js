const json = require("body-parser/lib/types/json");
const express = require("express");
const app = express();
const router = express.Router();


router.get('/json-place-holder', (req, res) => {
    res.render('jsonplaceholder/dataTable');
});

router.get('/jph-details', (req, res) => {
    res.render('jsonplaceholder/moreDetails');
}); 



module.exports = router;
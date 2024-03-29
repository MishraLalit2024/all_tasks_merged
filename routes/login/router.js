const express          = require('express');
const router           = express.Router();
const { loginRed, emailCheck }     = require('../../controllers/login/login');
const cookieParser = require('cookie-parser');
router.use(cookieParser())
const authorization = require('../../middlewares/login/authorization');



router.get('/', loginRed);

router.post('/checkEmail', emailCheck)

router.get('/next', authorization.authorization,(req, res) => {
    // res.json("Login Sucssfully");
    console.log("Reached Here with token");
    res.end();
});



module.exports = router;
const login = require("../../middlewares/login/sqlMaker");

function loginRed(req, res){
    res.render('login/login');
}

function emailCheck(req, res){
    console.log(req.body);
    console.log("Login data uploaded");
    login(req, res);
}



module.exports = {loginRed, emailCheck};
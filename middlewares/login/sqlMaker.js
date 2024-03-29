const md5           = require("md5");
const con = require("../../conn/db");
const jwt = require('jsonwebtoken');



function login(req, res, next){
    const loginData = req.body;
    let pas = loginData.pass;
    let email = loginData.email;

    sql = `SELECT * from saas_nodejs.users_master WHERE email="${email}"`;
    console.log(sql);
    con.query(sql, (err, data)=>{
        let keyStr = md5(pas+ data[0]['salt']);
        if(keyStr==data[0]['pwd']) {
            const user={
                email: email,
            };
            console.log(user);
            const token=jwt.sign(user,'hii',{
                expiresIn:'1800s'
            });
            console.log(token);
            res.cookie('access_token',token,{
                    maxAge:1000*60*60*10,
                    httpOnly:true,
                })
                .status(200)       
                res.json({data: "done"});
            }
            else{
                res.json({data: "Not done"})
            }
    })
}

module.exports = login;
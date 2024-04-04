const url                   = require('url');

function checkParam(req, res, next){
    if(isNaN(Number(req.query.page))){
        console.log('Here');
        res.setHeader('Content-Type', 'text/html');
        res.redirect(302, '/home');
    }
    else{
        next();
    }
}

module.exports = checkParam;
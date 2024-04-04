const conn                  = require('../../conn/db');
const selectQuery = require("../../controllers/dynamic_grid/query");


function validate(req, res, next){
    let query = req.body.name;
    let value = query.toLowerCase();

    if(value === ''){
        res.redirect(302, '/dynamic-grid');
    }
    else if(value.includes('delete')||value.includes('drop')||value.includes('update')||value.includes(';')||value.includes('insert')){
        res.redirect(200, '/dynamic-grid');
    }
    else{
        console.log('Form Validated');
        console.log('Form Submitted');
        selectQuery(req, res, next);
    }
}


module.exports = validate;
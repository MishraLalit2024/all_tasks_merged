const dbconn                = require('../../conn/db');

function selectQuery(req, res, next){
    let sql = req.body.name;
    console.log(sql);
    if(sql===undefined){
        res.redirect(302, '/dynamic_grid')
    }
    else{
        dbconn.query(sql, (err, data, fields)=>{
            if (err){
                res.redirect(302, '/home');
                res.end();
            } 
            res.render('dynamic_grid/dynamicTable', {
                data        : data,
                column      : fields,
                query       : sql
            });
        })
    }
}


module.exports = selectQuery;
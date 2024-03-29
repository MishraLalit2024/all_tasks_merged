/**
 * Developer Name:  Lalit Mishra
 * Developer ID:    24DEV018
 * Date:            05-Mar-2024
 * 
 * Description:     This module contains the code to display record on the home page.
 */


//importing the database connection here:
const db            = require('../../conn/db');

function fetchAll(req, res, next){

    db.query(`SELECT srno as 'Student ID', semester as 'Semester', firstName as 'First Name', lastName as 'Last Name', (select floor(datediff(curdate(), dob)/365.25)) as 'Age', phone as 'Mobile Number', email as 'Email ID', city as 'City', statusOfStudent as 'Status' FROM delimited_search limit 100`, (err, data, field)=>{
        if(err) throw err;
        res.render('delimiter/del_home.ejs', {
            data    : data,
            rows    : field,
            query   : req.query.input
        });
    });

}

module.exports = fetchAll;  //exporting the module.
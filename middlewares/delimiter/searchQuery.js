/**
 * Developer Name:      Lalit Mishra
 * Developer ID:        24DEV018
 * Date:                05-MAR-2024
 * 
 * Description:         This module is used to rener the search result.
 */


//importing the required modules:
const con               = require("../../conn/db");
const splitter          = require("./splitter");


function searchQuery(req, res, next){

    //calling the splitter function to use fetch keywords from the user Input:
    let data            = splitter(req, res, next);

    // console.log(data[0]);
    function finalStringGen(arr, fieldName){
        if(arr.length==0){
            result = `${fieldName} like '%'`;
        }
        else{
            result = `${fieldName} like '${arr[0]}%'`;
            for (let i = 1; i < arr.length; i++) {
                result += ` OR ${fieldName} like '${arr[i]}%'`;
            }
        }
        return result;
    }

    //declaring variables to get the ORed Strings:
    let fnameStr        = finalStringGen(data[0], 'firstName');
    let lastNameStr     = finalStringGen(data[1], 'lastName');
    let emailStr        = finalStringGen(data[2], 'email');
    let statusStr       = finalStringGen(data[3], 'statusOfStudent');
    let phoneStr        = finalStringGen(data[4], 'phone');
    let cityStr         = finalStringGen(data[5], 'city');


    let sql = `select srno as 'Student ID', semester as 'Semester', firstName as 'First Name', lastName as 'Last Name', (select floor(datediff(curdate(), dob)/365.25)) as 'Age', phone as 'Mobile Number', email as 'Email ID', city as 'City', statusOfStudent as 'Status' from delimited_search where (${fnameStr}) and (${lastNameStr}) and (${emailStr}) and (${phoneStr}) and (${cityStr}) and (${statusStr}) limit 100`;

    console.log(sql);

    con.query(sql, (err, data, fields)=>{
        if(err) throw err;
        if(data==''){
            fields ="";
            res.render('delimiter/del_home', {
                data    : data,
                rows    : [{name: 'No Data Available'}],
                query   : req.body.input,
            });
        }
        else{
            res.render('delimiter/del_home', {
                data    : data,
                rows    : fields,
                query   : req.body.input
            });
        }
    })
}


module.exports = searchQuery;
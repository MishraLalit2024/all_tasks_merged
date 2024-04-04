/**
 * Developer Name:  Lalit Mishra
 * Date:            28-Feb-2024
 * 
 * Description:     This file contains the express routes, database configs and all the needed queries.
 */


//Importing the packages
const ejs           = require('ejs');
const express       = require('express');
const app           = express();    //creating instance of express
const url           = require('url');
const path          = require('path')

//setting the view engine:
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//config of database:
var mysql           = require('mysql');

var con             = mysql.createConnection({
        host        : 'localhost',
        user        : 'root',
        password    : 'password',
        database    : 'studentAttendanceNodeJs'
});

con.connect(function(err) {
        if (err) throw err;
        console.log('Connected!');  //To verify the connection to the database
});



app.get('/home', (req, res)=>{
    res.setHeader('Content-Type','text/html')
    res.render('index');
    res.end();
})


app.get('/report', (req, res)=>{
    var mon = req.query.m;  //to read the month from the url

    var noOfRecords, lastPage;
    const recordPerPage = 12;    
    var oby = req.query.ob;
    var page = req.query.page;

    var sql1 = `select count(*) from studentMaster`;
    con.query(sql1, (err, data)=>{
        if (err) throw err;
        noOfRecords=data[0]['count(*)'];
        lastPage = Math.ceil(noOfRecords/recordPerPage);
    });
    var skip = (page-1)*recordPerPage;
    var limit = skip+', '+recordPerPage;
    var next = Number(page)+1;
    var prev = page-1;


    var sql1 = `select count(*) from workingDays where isHoliday='NOO' AND dateStr like '%-${mon}-%'`;
    con.query(sql1, (err, data)=>{
        if (err) throw err;
        workingDays=data[0]['count(*)'];
    })


    //redirect to default page if query is not valid:
    if(req.query.y===null || req.query.y===undefined || req.query.y=='' || Number(req.query.y)>24 || Number(req.query.y)<23 || isNaN(Number(req.query.y))){
        res.redirect(302, '/home')
        res.end();
    }
    else if(req.query.m===null || req.query.m===undefined || req.query.m=='' || Number(req.query.m)>12 || Number(req.query.m)<1 || isNaN(Number(req.query.m))){
        res.redirect(302, './home')
        res.end();
    }
    else if(req.query.page===null || req.query.page===undefined || req.query.page==''|| Number(req.query.page)>lastPage || Number(req.query.page)<1 || isNaN(Number(req.query.page))){
        res.redirect(302, './home')
        res.end();
    }
    else if(req.query.page===null || req.query.page===undefined || req.query.page=='' || isNaN(Number(req.query.ob)===false)){
        res.redirect(302, './home')
        res.end();
    }


    var sqln = `SELECT studId, fname, lname, count(case when isPresent=1 then isPresent end) as noofPresentDays, round(((count(case when isPresent=1 then isPresent end)/25)*100),2) as percent FROM attendanceRecord where dateStr like '%-${mon}-%' group by studId order by ${oby} limit ${limit}`;
    con.query(sqln, (err, data)=>{
        if (err) {
            throw err;
        }
        page=req.query.page;
        res.render('reports', {
            data            : data, 
            record          : noOfRecords, 
            page            : page, 
            workingdays     : workingDays, 
            firstPage       : 1, 
            lastPage        : lastPage, 
            next            : next, 
            prev            : prev,
            m               : mon,
            y               : req.query.y,
            ob              : oby
        });
    });
})

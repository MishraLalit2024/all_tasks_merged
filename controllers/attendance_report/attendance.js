const con = require("../../conn/db");

function attendanceHome(req, res, next){
    res.setHeader('Content-Type','text/html');
    res.render('attendance_report/index');
}

function reportMaker(req, res, next){
    var mon = req.query.m;  //to read the month from the url

    var noOfRecords, lastPage;
    const recordPerPage = 12;    
    var oby = req.query.ob;
    var page = req.query.page;

    var sql1 = `select count(*) from attendance_student_master`;
    con.query(sql1, (err, data)=>{
        if (err) throw err;
        noOfRecords=data[0]['count(*)'];
        lastPage = Math.ceil(noOfRecords/recordPerPage);
    });
    var skip = (page-1)*recordPerPage;
    var limit = skip+', '+recordPerPage;
    var next = Number(page)+1;
    var prev = page-1;


    var sql1 = `select count(*) from attendance_working_days where isHoliday='NOO' AND dateStr like '%-${mon}-%'`;
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


    var sqln = `SELECT studId, fname, lname, count(case when isPresent=1 then isPresent end) as noofPresentDays, round(((count(case when isPresent=1 then isPresent end)/25)*100),2) as percent FROM attendance_record where dateStr like '%-${mon}-%' group by studId order by ${oby} limit ${limit}`;
    con.query(sqln, (err, data)=>{
        if (err) {
            throw err;
        }
        page=req.query.page;
        res.render('attendance_report/reports', {
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
}



module.exports = {attendanceHome, reportMaker};
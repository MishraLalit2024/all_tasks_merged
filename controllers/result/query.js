const dbconn = require('../../conn/db');

function selectQuery(req, res, next){

    var recordPerPage = 10;
    var total = 220;
    var page = Number(req.query.page) || 1;
    // console.log(page);
    var skip = (page - 1) * recordPerPage;
    // console.log(skip);
    var limit = skip+', '+recordPerPage; 
    // console.log(limit);
    lastPage = Math.floor(total/recordPerPage);
    // console.log(lastPage);

    var sql1 = `set @a:=0; select @a:=@a+1 as 'Sr No',result_student_master.fname as 'First Name', result_student_master.lname as 'Last Name', sum(case when result_student_result.examId=1 then result_student_result.obtainedMarks end) as 'Prelims Theory', sum(case when result_student_result.examId=2 then result_student_result.obtainedMarks end) as 'Prelims Practical', sum(case when result_student_result.examId=3 then result_student_result.obtainedMarks end) as 'Terminal Theory', sum(case when result_student_result.examId=4 then result_student_result.obtainedMarks end) as 'Terminal Practical', sum(case when result_student_result.examId=5 then result_student_result.obtainedMarks end) as 'Final Theory', sum(case when result_student_result.examId=6 then result_student_result.obtainedMarks end) as 'Final Practical', sum(case when result_student_result.examId>0 and result_student_result.examId<7 then result_student_result.obtainedMarks end) as 'Total' from result_student_master cross join result_student_result on result_student_master.srno = result_student_result.studId group by result_student_result.studId order by studId limit ${limit}`;
    
    dbconn.query(sql1, (err, data, fields)=>{
        if (err) throw err;

        console.log(data[1]);
        res.setHeader('Content-Type', 'text/html');
            
        res.render('result/report', {
            data: data[1],
            column: fields[1],
            firstPage: 1,
            page: page,
            prev: page-1,
            last: lastPage,
            next: Number(page)+1
        });
    });
}

function marksheetGen(req, res, next){

    var studId = (req.query.id) || 1;
    console.log(studId);
    
    if(Number(studId)>220 || Number(studId)<0 || isNaN(Number(studId))){
        console.log("okokok");
        res.redirect(302, '/allResult');
    }
    else{
        var sql2 = `select result_subject_master.subjectName,
        sum(case 
            when examId='1' and studId='${studId}' 
            then obtainedMarks end) as marks1, 
        sum(case 
            when examId='2' and studId='${studId}' 
            then obtainedMarks end) as marks2, 
        sum(case 
            when examId='3' and studId='${studId}' 
            then obtainedMarks end) as marks3, 
        sum(case 
            when examId='4' and studId='${studId}' 
            then obtainedMarks end) as marks4, 
        sum(case 
            when examId='5' and studId='${studId}' 
            then obtainedMarks end) as marks5, 
        sum(case 
            when examId='6' and studId='${studId}' 
            then obtainedMarks end) as marks6,
        (
            (sum(case when examId='1' and studId='${studId}' then obtainedMarks end))+
            (sum(case when examId='2' and studId='${studId}' then obtainedMarks end))+
            (sum(case when examId='3' and studId='${studId}' then obtainedMarks end))+
            (sum(case when examId='4' and studId='${studId}' then obtainedMarks end))+
            (sum(case when examId='5' and studId='${studId}' then obtainedMarks end))+
            (sum(case when examId='6' and studId='${studId}' then obtainedMarks end))
        ) as total
        
        from result_student_result 
            cross join result_subject_master 
            cross join result_student_master
                where result_subject_master.subId = result_student_result.subId and result_student_master.srno=${studId}
                group by result_student_result.subId;
                
        select concat(result_student_master.fname, " ", result_student_master.lname) as Name from result_student_master where result_student_master.srno=${studId}`;
        dbconn.query(sql2, (err, data2)=>{
            if (err) throw err;
            res.render('result/marksheet', {
                data: data2[0],
                name: data2[1][0]
            });
        });
    }
    
}
module.exports = {selectQuery, marksheetGen};
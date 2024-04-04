function showTime(req, res, next){
    localTime = new Date();
    res.header('Content-Type', 'text/html');
    res.render('timezone/home', {data: localTime});
}


module.exports = showTime;
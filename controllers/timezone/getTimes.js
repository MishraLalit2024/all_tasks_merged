const fs = require('fs');

function getTimes(req, res, next){
    data = JSON.parse(fs.readFileSync('./data/timezone/timezones.json', 'utf8'))
    res.json({data})
}


module.exports = getTimes;
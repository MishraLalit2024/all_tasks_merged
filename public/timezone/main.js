fetch('http://localhost:3300/getzones')
.then(response => response.json())
.then(json => selector(json))


async function selector (data){
    txt =``;
    Object.keys(data['data']).forEach(el=>{
        txt += `<option value="${data['data'][el].offset}">${data['data'][el].value}</option>`
        document.getElementById('timeZone').innerHTML = txt;
    })
}



function convertTime(){
    value = document.getElementById('timeZone').value;
    d = new Date();
    localTime = d.getTime();
    localOffset = d.getTimezoneOffset()*60000;
    utc = localTime+localOffset;

    offset = value;

    destination = utc + (36000000*offset);

    nd = new Date(destination)
    console.log(nd);
    document.getElementById('convert').innerHTML = nd.toUTCString();
}
/* 
    Name: Lalit Mishra
    EmpID: 24DEV018
    Date: 2nd Feb 2024
*/

//To create header of Name.
head = document.getElementById("headerName");
headtext = document.getElementById("headerName").innerText;
let h1 = document.createElement("h3");
let h1Text = document.createTextNode("Name: Lalit Mishra");
h1.appendChild(h1Text);
head.appendChild(h1);

//to generate random color;
function ranColor(){
    let maxVal = 0xffffff;
    let randomNumber = Math.random()*maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    color = "#"+randColor.toUpperCase();
    return color;
}

function ranCellPicker(){
    let max = document.getElementById("gameTable").rows.length;
    let rNumCell = Math.random()*(max*max);
    let rNum = Math.floor(rNumCell);
    return rNum;
}

var mCount=0;//variable that count the number of click;
var cellPicker = 0; 

//To add onclick event listener and event handler;
document.getElementsByClassName("myClick")[0].addEventListener("click", addRowCol);
function addRowCol(){
    console.log(document.getElementsByClassName("myClick")[0]);
    mCount++;
    demo2 = ranColor();

    let table = document.getElementById("gameTable");
    let tbody = document.getElementById("tbody");
    newRow = document.createElement("tr")

    if(table.rows.length<9){
        //for adding new row
        for(let i=0; i<table.rows[0].cells.length; i++){
            newCell=document.createElement("td");
            newRow.appendChild(newCell);
            tbody.appendChild(newRow);
        }

        //for adding new column
        for(let i=0; i<table.rows.length; i++){
            newCell=document.createElement("td");
            document.getElementsByTagName("tr")[i].appendChild(newCell);
        }
    }

    //for changing cell colour;
    for(let i = 0; i<mCount; i++){
        cell = document.getElementsByTagName('td');
        for(let i=0; i<cell.length; i++){
            cell[i].style.backgroundColor=demo2;
        }
    }


    //remove the attribute from the class and give to the random generated cell;
    document.getElementById("clickhere").removeAttribute("class");

    //for getting a randomcell with less opacity.
    let allCells = document.querySelectorAll("td");
    for(let i=0; i<allCells.length; i++){
        allCells[i].style.opacity="1.0";
    }
    let cellPicker = ranCellPicker();
    allCells[cellPicker].style.opacity="0.60";
    allCells[cellPicker].setAttribute("class", "myClick");
    allCells[cellPicker].setAttribute("id", "clickhere");
    allCells[cellPicker].setAttribute("onclick", "addRowCol()");
    console.log(allCells[cellPicker]);

    //logic for score:
    document.getElementById("score").innerHTML=mCount;    
}
 
//Logic for the Timer:
var maxTime = 30;

let countDown = setInterval(() => {
    maxTime--;
    document.getElementById("timer").innerText=maxTime;
    if(maxTime<=0){
        document.getElementById("playGround").innerHTML="<h1>Time Up!<h1>";
        document.getElementById("timerBox").style.display="none";
        document.getElementById("timer").style.display="none";
    }
}, 1000);
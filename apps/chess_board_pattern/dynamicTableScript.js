/**
 * Developer Name:  Mishra Lait
 * Developer ID:    24DEV018
 * Date:            1st Feb, 2024
 */

function addColumnToTable(){
    document.querySelectorAll("tr").forEach(row => {
        let newRow = document.createElement("td");
        let text = document.createTextNode("");
        newRow.appendChild(text);
        row.appendChild(newRow);
    })
}

function addRowToTable(){
    let tableD = document.querySelector("table");
    let numRows = tableD.rows.length;
    let numCells = tableD.rows[numRows-1].cells.length;
    let newRow2 = tableD.insertRow(-1);
    for(let i=0; i<numCells; i++){
        let newcell = newRow2.insertCell(i);
        newcell.innerHTML="";
    }
}

function removeRowFromTable() {
    let table = document.querySelector("table");
    if(table.rows.length>2){
        table.deleteRow(table.rows[0].length);
    }
    else{
        alert("Cannot Remove Further.");
    }
}

function removeColumnFromTable(){
    let trow = document.querySelectorAll("tr");
    if (trow[0].cells.length>2){
        for(let i=0; i<trow.length; i++){
            trow[i].deleteCell(-1);
        }
    }
    else{
        alert("Cannot Remove Further.");
    }
}
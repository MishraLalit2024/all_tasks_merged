/**
 * Developer Name:  Mishra Lait
 * Developer ID:    24DEV018
 * Date:            31 Jan, 2024
 */

//Code for developer details in the html file
head = document.getElementById("headerName");
headtext = document.getElementById("headerName").innerText;
let h1 = document.createElement("h4");
let h1Text = document.createTextNode("Name: Lalit Mishra");
let h2 = document.createElement("h4");
let h2Text = document.createTextNode("DevID: 24DEV018");
h1.appendChild(h1Text);
head.appendChild(h1);
h2.appendChild(h2Text);
head.appendChild(h2);



function onChangeFun( ) {
    let x = document.getElementById("city").value;
    document.getElementById("demoOnChange").innerHTML = "you selected: " + x; 
    alert("OnChange Event Triggered.");
}
function onClickFun( ) {
    document.getElementById("onClickDemo").innerHTML = "Thank you for clicking :)";
    alert("OnClick Event Triggered.");
}
document.getElementById("onMouseOver").addEventListener("mouseOver", onMouseOverFun);   
function onMouseOverFun( ) {
    document.getElementById("onMouseOver").innerHTML = "Mouse Over Done";
}
document.getElementById("onMouseOver").addEventListener("mouseOut", onMouseOutFun);
function onMouseOutFun( ) {
    document.getElementById("onMouseOver").innerHTML = "Move your cursor over the text.";
}
document.getElementById("onKeyUp").addEventListener("keyUp", onKeyUpFun);
function onKeyUpFun() {
    document.getElementById("onKeyUp").style.backgroundColor="gray";
}
document.getElementById("onKeyDown").addEventListener("keyDown", onKeyDownFun);
function onKeyDownFun() {
    document.getElementById("onKeyDown").style.backgroundColor="red";
}
document.getElementById("onKeyPress").addEventListener("keyPress", onKeyPressFun);
function onKeyPressFun() {
    document.getElementById("onKeyPress").style.backgroundColor="yellow";
}
function onLoadFun() {
    document.getElementById("onLoadDemo").innerHTML="Image loaded.";
    // alert("Image is loaded.")
}
function onInputFun() {
    let x = document.getElementById("onInputlet").value;
    document.getElementById("onInputDemo").innerHTML="You typed: "+x;
}
function onMouseDownFun() {
    document.getElementById("onMouseDownDemo").innerHTML="Mouse Down Done";
}
function onMouseUpFun() {
    document.getElementById("onMouseUpDemo").innerHTML="Mouse Up done";
}
function onFocusFun() {
    let x = document.getElementById("onFocuslet").value;
    document.getElementById("onFocusDemo").innerHTML="You typed: "+x;
}
function onMouseMoveFun() {
    document.getElementById("onMouseMoveDemo").innerHTML="Mouse Moved";
}
function onBlurFun() {
    document.getElementById("onBlurDemo").innerHTML="Cursor Moved Out.";
}
function onResizeFun() {
    document.getElementById("onResizeDemo").innerHTML="Resized.";
    alert('Resized');
}
function onDbClickFun() {
    document.getElementById("onDbClickDemo").innerHTML="Double Clicked.";
}
document.getElementById("onOnlineDemo").addEventListener("onOnline", onOnlineFun);
function onOnlineFun() {
    document.getElementById("onOnlineDemo").style.backgroundColor="red";
}
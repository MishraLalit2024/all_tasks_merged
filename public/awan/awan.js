let leftBtn = document.getElementById("left");
let rightBtn = document.getElementById("right");

leftBtn.onclick=()=>{
    document.getElementById("slider").scrollLeft -=100;
};

rightBtn.onclick=()=>{
    document.getElementById("slider").scrollLeft += 100;
};

let content = document.getElementById("wp");
let btnBack = document.getElementsByClassName("rows");
let temp = document.querySelector(".rows");
function displayTab(entity){
    temp.style.backgroundColor ="white";
        // btnBack.style.backgroundColor = "#f0f6ff71";
        child = entity.children[1];
        // entity.style.backgroundColor = "#c6ddff";
        title = child.innerHTML;

        let c = `<div class="heading4"><p>The Best Managed Cloud Hosting for ${title}</p></div><div class="caption4"><p>We live and breathe ${title}. Our managed hosting for ${title} and WooCommerce takes away cloud server related hassles so you can scale your website the way you want.</p></div><div class="options"><div class="row1 flexer"><div class="col2layout">Unlimitoood Bandwidth</div><div class="col2layout">Network Speed</div></div><div class="row2 flexer"><div class="col2layout">Turbo Power</div><div class="col2layout">Xtreme Freedom</div></div></div><div class="techLinks"><p>More Details</p></div>`;

        content.innerHTML=c;
    entity.style.backgroundColor="#F0F6FF";
    temp =entity;
}
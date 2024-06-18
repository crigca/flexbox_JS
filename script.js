let header = document.getElementById("header");
let content = document.getElementById("content");
let div1 = document.getElementById("div_1");
let div2 = document.getElementById("div_2");
let footer = document.getElementById("footer");

header.style.display ="flex";
header.style.justifyContent = "center";
header.style.height = "150px";
header.style.backgroundColor = "blue";

content.style.display = "flex";
content.style.flexDirection = "row";


[div1, div2].forEach(div => {
    div.style.flex = "1";
    div.style.height = "300px";
})

div1.style.backgroundColor = "green";
div2.style.backgroundColor = "red";

footer.style.display ="flex";
footer.style.justifyContent = "center";
footer.style.height = "150px";
footer.style.backgroundColor = "yellow";
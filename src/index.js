import { pageLoad, test1 } from './page.js'
import { menu } from './Menu.js'

//console.log('testing12');


pageLoad();

let btn = document.createElement("button");
btn.innerHTML = "Click Me";
document.body.appendChild(btn);
btn.onclick = function () {
    
        clearBox("div3_id");
    menu();

};

let mbtn = document.createElement("button");
mbtn.innerHTML = "Click Me";
document.body.appendChild(mbtn);
mbtn.onclick = function () {
    clearBox("div3_id");
};



menu();



function clearBox(elementID) {
    var div = document.getElementById(elementID);
      
    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }}
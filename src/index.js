import { pageLoad, test1 } from './page.js'
import { menu } from './Menu.js'
import {contact} from './Contact.js'
import {hours} from './Hours.js'

//console.log('testing12');


pageLoad();

let btn = document.createElement("button");
btn.innerHTML = "Menu";
document.getElementById("promo").appendChild(btn);
btn.onclick = function () {
    
        clearBox("div3_id");
    menu();

};

let mbtn = document.createElement("button");
mbtn.innerHTML = "Contact";
document.getElementById("promo").appendChild(mbtn);
mbtn.onclick = function () {
    clearBox("div3_id");
    contact();
};

let cbtn = document.createElement("button");
cbtn.innerHTML = "Hours";
document.getElementById("promo").appendChild(cbtn);
cbtn.onclick = function () {
    clearBox("div3_id");
    hours();
};



menu();



function clearBox(elementID) {
    var div = document.getElementById(elementID);
      
    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }}
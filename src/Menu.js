export function menu(){

let divMenu = document.createElement("div");
divMenu.id = "menu";
divMenu.style = "background-color: green;";
divMenu.style.width = "150px";
divMenu.style.height = "100px";
divMenu.innerHTML= "Menu";
document.getElementById("div3_id").appendChild(divMenu);  

let h3= document.createElement("h3");
h3.className = "title";
h3.style = "background-color: blue;";
h3.style.width = "400px";
h3.style.height = "100px";
h3.innerHTML= "Have you ever test wondered if you could ever get too many delicious almonds?  Well, now you can find out at Traxler's Almond Emporium!";
document.getElementById("menu").appendChild(h3);  

}
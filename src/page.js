
export function test1(){
    return  'qbert'


}


export function pageLoad()
{

let div = document.createElement("div");
div.id = "dtitle";
div.className = "title";
div.style = "background-color: blue;";
div.style.width = "900px";
div.style.height = "200px";
div.innerHTML= "";
document.body.appendChild(div);  

let h1 = document.createElement("h1");

h1.id = "title";

h1.style.width = "300px";
h1.style.height = "50px";
h1.innerHTML= "Traxler Almond Bites";
document.getElementById("dtitle").appendChild(h1);  

let div2 = document.createElement("div2");
div2.id = "promo";
div2.style = "background-color: green;";
div2.style.width = "300px";
div2.style.height = "200px";
div2.innerHTML= "test1";
document.body.appendChild(div2);  

let h3 = document.createElement("h3");

h3.className = "title";
h3.style = "background-color: blue;";
h3.style.width = "400px";
h3.style.height = "100px";
h3.innerHTML= "Have you ever test wondered if you could ever get too many delicious almonds?  Well, now you can find out at Traxler's Almond Emporium!";
document.getElementById("promo").appendChild(h3);  





let div3 = document.createElement("div");
div3.id = "div3_id";
div3.className = "div3_class";
div3.style = "background-color: red;";
div3.style.width = "200px";
div3.style.height = "200px";
div3.innerHTML= "Almond Butter Sandwhichesjfkl;wakfle";
document.body.appendChild(div3);  
}
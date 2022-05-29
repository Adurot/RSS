export function contact(){

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
    h3.innerHTML= "Email us at AlmondRestaurant@gmail.com";
    document.getElementById("menu").appendChild(h3);  
    
    }
var pizzaDiv = document.getElementById('pizza');

var pizzaBackground = document.createElement("div");
pizzaBackground.setAttribute("id", "pizza-background");
pizzaBackground.style.background = "url(../images/crust_background.png) no-repeat";
pizzaDiv.appendChild(pizzaBackground);

var baconBtn = document.createElement("div");
baconBtn.setAttribute("id", "bacon-button");
baconBtn.style.background = "#fab";
baconBtn.style.width = "100px";
baconBtn.style.display = "flex";
baconBtn.addEventListener(addTopping);

document.getElementById("pizza").insertBefore(baconBtn, pizzaBackground);

function toppingLeftHalfOnly(image){
    
}

function addTopping(evt){
    pizzaBackground.style.background = "url(../images/bacon_regular.png), url(../images/crust_background.png)"
}

var container = document.getElementById('pizza');
var buttonNames = ['button-1', 'button-2', 'button-3', 'woo hoo', 'Fred', 'Sally', 'Pepperoni', 'Mushrooms'];
var buttons = [];
var containerNames = ['pizza-side', 'menu-side'];
var pizzaSideContainers = ['pizza-preview', 'receipt-preview'];
var menuSideContainers = ['starters', 'toppings'];
var startersContainers = ['pizza-size', 'sauces'];
var containers = [];
var toppingMenuContent = document.getElementById("toppings-menu-content");

var toppings;
var toppingContent;
var request = new XMLHttpRequest();
loadData();


function loadData(){
    console.log('Link Start');
    request.open('GET', '../data/toppings.json');
    request.onload = loadComplete;
    request.send();
}
function loadComplete(evt){
    toppingContent = JSON.parse(request.responseText);
    toppings = toppingContent.toppings;
    for(i = 0; i < toppings.length; i++) {
        toppingMenuContent.innerHTML += '<div class="topping"> <div class="topping-display"> <img class="topping-img" src="../images/' + toppings[i].thumbnail + '"/>  <div class="topping-text">' + toppings[i].name + '</div> </div> <div class="topping-controls"> <div class="half-selection-container"> <div class="half-or-whole left-half-btn"></div> <div class="half-or-whole whole-btn"></div> <div class="half-or-whole right-half-btn"></div> </div> </div> </div > ';
    }
    console.log(toppings);
}


function addTopping(){
    removeSimilarToppings(evt);
    activePizzaToppings.unshift(`url(../images/${evt}.png) no-repeat`);
    pizzaPreview.style.background = activePizzaToppings + ", url(../images/regular_crust.png) no-repeat, url(../images/crust_background.png) no-repeat";
    pizzaPreview.style.backgroundSize = "100%";
}



function removeSimilarToppings(topping){
    for(var i=0;i<activePizzaToppings.length;i++){
        if(activePizzaToppings[i].indexOf(topping)>=0){
            activePizzaToppings.splice(activePizzaToppings[i],1);
        }
    }
}

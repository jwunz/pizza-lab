var container = document.getElementById('pizza');
var starters = document.getElementById('starters');
var startersTab = document.getElementById('starters-tab');
var toppingTab = document.getElementById('topping-tab');
var toppingMenu = document.getElementById("topping-menu");
var toppingMenuContent = document.getElementById("toppings-menu-content");
var pizzaPreview = document.getElementsByClassName('pizza-preview')[0];
var halfSelectors;
var halfSelectorContainers;
var activePizzaToppings;

toppingTab.onclick = showToppings;
startersTab.onclick = showStarters;

var toppings;
var toppingContent;
var crust;
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
    crust = toppingContent.crust[0];
    var cheese = toppingContent.cheese[0];
    for(i = 0; i < toppings.length; i++) {
        toppingMenuContent.innerHTML += '<div class="topping"> <div class="topping-display"> <img class="topping-img" src="../images/' + toppings[i].thumbnail + '"/>  <div class="topping-text">' + toppings[i].name + '</div> </div> <div class="topping-controls"> <div class="topping-control-label">Regular</div> <div class="half-selection-container regular-half-selection-container"> <div class="half-or-whole left-half-btn"></div> <div class="half-or-whole whole-btn"></div> <div class="half-or-whole right-half-btn"></div> </div><div class="topping-control-label">Extra</div> <div class="half-selection-container extra-half-selection-container"> <div class="half-or-whole left-half-btn"></div> <div class="half-or-whole whole-btn"></div> <div class="half-or-whole right-half-btn"></div> </div> </div> </div > ';
    }
    
    pizzaPreview.style.background = `url(../images/${cheese.image}) no-repeat, url(../images/${crust.image[0]}) no-repeat, url(../images/${crust.image[1]}) no-repeat`;
    pizzaPreview.style.backgroundSize = 'cover';
    halfSelectors = document.getElementsByClassName('half-or-whole');
    halfSelectorContainers = document.getElementsByClassName('half-selection-container');

    for(var i = 0; i < halfSelectors.length; i++) {
        halfSelectors[i].onclick = activateHalf;
    }
}


function addTopping(evt){
    removeSimilarToppings(evt);
    activePizzaToppings.unshift(`url(../images/${evt}.png) no-repeat`);
    pizzaPreview.style.background = activePizzaToppings + ", url(../images/regular_crust.png) no-repeat, url(../images/crust_background.png) no-repeat";
    pizzaPreview.style.backgroundSize = "100%";
}

function showToppings(evt) {
    starters.classList.add('hidden');
    toppingMenu.classList.remove('hidden');
}

function showStarters(evt) {
    starters.classList.remove('hidden');
    toppingMenu.classList.add('hidden');
}

function activateHalf(evt) {
    if(!evt.target.classList.contains('active')){
        if(evt.target.parentElement.classList.contains('regular-half-selection-container')) {
            deactivateArray(evt.target.parentElement.parentElement.children[3].children);
        } 
        else if (evt.target.parentElement.classList.contains('extra-half-selection-container')) {
            if (evt.target.classList.contains('whole-btn')) {
                console.log(evt.target.parentElement.parentElement.children[1].children);
                deactivateArray(evt.target.parentElement.parentElement.children[1].children);
            }
        }

        deactivateArray(evt.target.parentElement.children);
        activate(evt.target);
    } else {
        deactivate(evt.target);
    }
}

function activate(element) {
    element.classList.add('active');
}

function deactivate(element) {
    element.classList.remove('active');
}

function deactivateArray(arr){
    for(var i = 0; i < arr.length; i++){
        deactivate(arr[i]);
    }
}
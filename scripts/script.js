var container = document.getElementById('pizza');
var starters = document.getElementById('starters');
var startersTab = document.getElementById('starters-tab');
var toppingTab = document.getElementById('topping-tab');
var toppingMenu = document.getElementById("topping-menu");
var toppingMenuContent = document.getElementById("toppings-menu-content");
var halfSelectors;
var halfSelectorContainers;

toppingTab.onclick = showToppings;
startersTab.onclick = showStarters;

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
        toppingMenuContent.innerHTML += '<div class="topping"> <div class="topping-display"> <img class="topping-img" src="../images/' + toppings[i].thumbnail + '"/>  <div class="topping-text">' + toppings[i].name + '</div> </div> <div class="topping-controls"> <div>Regular</div> <div class="half-selection-container"> <div class="half-or-whole left-half-btn"></div> <div class="half-or-whole whole-btn"></div> <div class="half-or-whole right-half-btn"></div> </div><div>Extra</div> <div class="half-selection-container"> <div class="half-or-whole left-half-btn"></div> <div class="half-or-whole whole-btn"></div> <div class="half-or-whole right-half-btn"></div> </div> </div> </div > ';
    }

    halfSelectors = document.getElementsByClassName('half-or-whole');
    halfSelectorContainers = document.getElementsByClassName('half-selection-container');

    for(var i = 0; i < halfSelectors.length; i++) {
        halfSelectors[i].onclick = activateHalf;
    }
}


function addTopping(){
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
    console.log(evt);
    if(!evt.target.classList.contains('active')){
        for(var i = 0; i < evt.target.parentElement.children.length; i++){
            evt.target.parentElement.children[i].classList.remove('active');
        }
        evt.target.classList.add('active');
    } else {
        evt.target.classList.remove('active');
    }
}
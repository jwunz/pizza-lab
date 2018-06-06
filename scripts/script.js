var container = document.getElementById('pizza');
var starters = document.getElementById('starters');
var startersTab = document.getElementById('starters-tab');
var toppingTab = document.getElementById('topping-tab');
var toppingMenu = document.getElementById("topping-menu");
var toppingMenuContent = document.getElementById("toppings-menu-content");
var pizzaPreview = document.getElementsByClassName('pizza-preview')[0];
var presetMenu = document.getElementById('preset-menu');
var halfSelectors;
var halfSelectorContainers;
var activePizzaToppings;
var toppingClickables;

toppingTab.onclick = showToppings;
startersTab.onclick = showStarters;

var toppings;
var toppingContent;
var crust;
var presets;
var preset;
var request = new XMLHttpRequest();
loadData();



function loadData(){
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
        toppingMenuContent.innerHTML += `<div class="topping ${toppings[i].name} ${toppings[i].id}"> <div class="topping-display"> <img class="topping-img" src="../images/${toppings[i].thumbnail}"/>  <div class="topping-text">${toppings[i].name}</div> </div> <div class="topping-controls"> <div class="topping-control-label">Regular</div> <div class="half-selection-container regular-half-selection-container"> <div class="half-or-whole left-half-btn"></div> <div class="half-or-whole whole-btn"></div> <div class="half-or-whole right-half-btn"></div> </div><div class="topping-control-label">Extra</div> <div class="half-selection-container extra-half-selection-container"> <div class="half-or-whole left-half-btn"></div> <div class="half-or-whole whole-btn"></div> <div class="half-or-whole right-half-btn"></div> </div> </div> </div >`;
    }
    
    pizzaPreview.style.background = `url(../images/${cheese.image}) no-repeat, url(../images/${crust.image[0]}) no-repeat, url(../images/${crust.image[1]}) no-repeat`;
    pizzaPreview.style.backgroundSize = 'cover';
    halfSelectors = document.getElementsByClassName('half-or-whole');
    halfSelectorContainers = document.getElementsByClassName('half-selection-container');
    toppingClickables = document.getElementsByClassName('topping-display');

    for(var i = 0; i < halfSelectors.length; i++) {
        halfSelectors[i].onclick = activateHalf;
    }
    for(var i = 0; i < toppingClickables.length; i++) {
        toppingClickables[i].onclick = toppingClick;
    }

    presets = toppingContent.presets;

    presetMenu.innerHTML += `
        <div class="menu-section-header">Preset Pizzas</div>
        <div class="menu-section-content"></div>`;

    for(var i = 0; i < presets.length; i++) {
        presetMenu.children[1].innerHTML += `
            <div class="preset-pizza ${presets[i].id}">
                <img class="preset-pizza-img"></img>
                <div class="pizza-name">${presets[i].name}</div>
            </div>`
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
    startersTab.classList.remove('active');
    toppingTab.classList.add('active');
}

function showStarters(evt) {
    starters.classList.remove('hidden');
    toppingMenu.classList.add('hidden');
    startersTab.classList.add('active');
    toppingTab.classList.remove('active');
}

function activateHalf(evt) {
    console.log(evt);
    if(!evt.target.classList.contains('active')){
        if(evt.target.parentElement.classList.contains('regular-half-selection-container')) {
            if (evt.target.classList.contains('whole-btn')) {
                deactivateArray(evt.target.parentElement.parentElement.children[3].children);
            }
            else if (evt.target.classList.contains('left-half-btn')) {
                if(evt.target.parentElement.parentElement.children[3].children[0].classList.contains('active')){
                    deactivate(evt.target.parentElement.parentElement.children[3].children[0]);
                }
                else if(evt.target.parentElement.parentElement.children[3].children[1].classList.contains('active')){
                    deactivate(evt.target.parentElement.parentElement.children[3].children[1]);
                    activate(evt.target.parentElement.parentElement.children[3].children[2])
                }
            }
            else {
                if(evt.target.parentElement.parentElement.children[3].children[2].classList.contains('active')){
                    deactivate(evt.target.parentElement.parentElement.children[3].children[2]);
                }
                else if(evt.target.parentElement.parentElement.children[3].children[1].classList.contains('active')){
                    deactivate(evt.target.parentElement.parentElement.children[3].children[1]);
                    activate(evt.target.parentElement.parentElement.children[3].children[0])
                }
            }
        } 
        else if (evt.target.parentElement.classList.contains('extra-half-selection-container')) {
            if (evt.target.classList.contains('whole-btn')) {
                deactivateArray(evt.target.parentElement.parentElement.children[1].children);
            }
            else if (evt.target.classList.contains('left-half-btn')) {
                if(evt.target.parentElement.parentElement.children[1].children[0].classList.contains('active')){
                    deactivate(evt.target.parentElement.parentElement.children[1].children[0]);
                }
                else if(evt.target.parentElement.parentElement.children[1].children[1].classList.contains('active')){
                    deactivate(evt.target.parentElement.parentElement.children[1].children[1]);
                    activate(evt.target.parentElement.parentElement.children[1].children[2])
                }
            }
            else {
                if(evt.target.parentElement.parentElement.children[1].children[2].classList.contains('active')){
                    deactivate(evt.target.parentElement.parentElement.children[1].children[2]);
                }
                else if(evt.target.parentElement.parentElement.children[1].children[1].classList.contains('active')){
                    deactivate(evt.target.parentElement.parentElement.children[1].children[1]);
                    activate(evt.target.parentElement.parentElement.children[1].children[0])
                }
            }
        }

        deactivateArray(evt.target.parentElement.children);
        activate(evt.target);
    } else {
        deactivate(evt.target);
    }
}

function toppingClick(evt) {
    console.log(evt);
    var greatGrandchildren1 = evt.target.parentElement;
    var greatGrandchildren2 = evt.target.parentElement;

    while (!greatGrandchildren1.classList.contains('topping')){
        greatGrandchildren1 = greatGrandchildren1.parentElement;
        greatGrandchildren2 = greatGrandchildren2.parentElement;
    }

    greatGrandchildren1 = greatGrandchildren1.children[1].children[1].children;
    greatGrandchildren2 = greatGrandchildren2.children[1].children[3].children;

    for(var i = 0; i < greatGrandchildren1.length; i++){
        if(greatGrandchildren1[i].classList.contains('active') || greatGrandchildren2[i].classList.contains('active')){
            deactivateArray(greatGrandchildren1);
            return(deactivateArray(greatGrandchildren2));
        }
    }
    activate(greatGrandchildren1[1]);
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
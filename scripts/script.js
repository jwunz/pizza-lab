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

forEach(containerNames,container,buildContainer);
var pizzaSides = document.getElementsByClassName("pizza-side")[0];
forEach(pizzaSideContainers, pizzaSides, buildContainer);
var menuSides = document.getElementsByClassName("menu-side")[0];
forEach(menuSideContainers, menuSides, buildContainer);
var starters = document.getElementsByClassName("starters")[0];
forEach(startersContainers, starters, buildContainer);
var pizzaSize = document.getElementsByClassName("pizza-size")[0];
forEach(startersContainers, pizzaSize, buildContainer);
var toppings = document.getElementsByClassName("toppings")[0];
forEach(buttonNames, toppings, buildButton);





function buildButton(item, index, arr, parent){
    console.log("button " + item + " at index " + index + ' created.');
  buttons[index] = document.createElement('button');
  buttons[index].textContent = item;
  buttons[index].setAttribute('class', 'btn');
  parent.appendChild(buttons[index]);
  buttons[index].addEventListener('click', btnClicked);
}

function btnClicked(evt) {
    console.log(evt.target.innerText + " clicked");
}

function buildContainer(item, index, arr, parent){
    console.log(`div ${item} at index ${index} created. ${arr[index]}.` );
    containers[index] = document.createElement('div');
    containers[index].setAttribute('class', item);
    parent.appendChild(containers[index]);
    console.log(containers);
}
function forEach(collection, parent, method) {
    for(var i=0;i<collection.length;i++){
        method(collection[i], i, collection, parent);
    }
}


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
    console.log('Fuck You');
    toppingContent = JSON.parse(request.responseText);
    console.log(toppingContent);
}
var container = document.getElementById('pizza');
var buttonNames = ['button-1', 'button-2', 'button-3', 'woo hoo', 'Fred', 'Sally', 'Pepperoni', 'Mushrooms'];
var buttons = [];
var containerNames = ['pizza-side', 'menu-side'];
var pizzaSideContainers = ['pizza-preview', 'receipt-preview'];
var menuSideContainers = ['starters', 'toppings'];
var startersContainers = ['pizza-size', 'sauces'];
var containers = [];

forEach(containerNames,container,buildContainer);
var pizzaSides = document.getElementsByClassName("pizza-side")[0];
forEach(pizzaSideContainers, pizzaSides, buildContainer);
var menuSides = document.getElementsByClassName("menu-side")[0];
forEach(menuSideContainers, menuSides, buildContainer);
var starters = document.getElementsByClassName("starters")[0];
forEach(startersContainers, starters, buildContainer);
var pizzaSize = document.getElementsByClassName("pizza-size")[0];
forEach(startersContainers, pizzaSize, buildContainer);
var toppings = document.getElementsByClassName("toppings")[0];
forEach(buttonNames, toppings, buildButton);





function buildButton(item, index, arr, parent){
    console.log("button " + item + " at index " + index + ' created.');
  buttons[index] = document.createElement('button');
  buttons[index].textContent = item;
  buttons[index].setAttribute('class', 'btn');
  parent.appendChild(buttons[index]);
  buttons[index].addEventListener('click', btnClicked);
}

function btnClicked(evt) {
    console.log(evt.target.innerText + " clicked");
}

function buildContainer(item, index, arr, parent){
    console.log(`div ${item} at index ${index} created. ${arr[index]}.` );
    containers[index] = document.createElement('div');
    containers[index].setAttribute('class', item);
    parent.appendChild(containers[index]);
    console.log(containers);
}
function forEach(collection, parent, method) {
    for(var i=0;i<collection.length;i++){
        method(collection[i], i, collection, parent);
    }
}


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
        toppingMenuContent.innerHTML += '<div class="topping"> <img class="topping-img" src="../images/' + toppings[i].thumbnail + '"/> <div class="topping-text">' + toppings[i].name + '</div> <div class="half-selection-container"> <div class="half-or-whole left-half-btn"></div> <div class="half-or-whole whole-btn"></div> <div class="half-or-whole right-half-btn"></div> </div> </div > ';
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

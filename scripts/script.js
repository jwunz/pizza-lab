loadData("toppings.json");

var pizzaDiv = document.getElementById('pizza');
var pizzaToppings;

function loadData(fileName) {
    request.open('GET', "../data/" + fileName);
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    data = JSON.parse(request.responseText);
    console.log(data);
    console.log(data[2].type);
}
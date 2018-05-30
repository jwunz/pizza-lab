var pizzaDiv = document.getElementById('pizza');
var pizzaToppings = [
    "url(../images/bacon_extra.png)",
    "url(../images/bacon_extra_left.png)",
    "url(../images/bacon_extra_right.png)",
    "url(../images/bacon_regular.png)",
    "url(../images/bacon_regular_left.png)",
    "url(../images/bacon_regular_right.png)",

    "url(../images/beef_extra.png)",
    "url(../images/beef_extra_left.png)",
    "url(../images/beef_extra_right.png)",
    "url(../images/beef_regular.png)",
    "url(../images/beef_regular_left.png)",
    "url(../images/beef_regular_right.png)",
    
    "url(../images/bell_pepper_extra.png)",
    "url(../images/bell_pepper_extra_left.png)",
    "url(../images/bell_pepper_extra_right.png)",
    "url(../images/bell_pepper_regular.png)",
    "url(../images/bell_pepper_regular_left.png)",
    "url(../images/bell_pepper_regular_right.png)",
    
    "url(../images/chicken_extra.png)",
    "url(../images/chicken_extra_left.png)",
    "url(../images/chicken_extra_right.png)",
    "url(../images/chicken_regular.png)",
    "url(../images/chicken_regular_left.png)",
    "url(../images/chicken_regular_right.png)",
    
    "url(../images/ham_extra.png)",
    "url(../images/ham_extra_left.png)",
    "url(../images/ham_extra_right.png)",
    "url(../images/ham_regular.png)",
    "url(../images/ham_regular_left.png)",
    "url(../images/ham_regular_right.png)",
    
    "url(../images/jalapeno_extra.png)",
    "url(../images/jalapeno_extra_left.png)",
    "url(../images/jalapeno_extra_right.png)",
    "url(../images/jalapeno_regular.png)",
    "url(../images/jalapeno_regular_left.png)",
    "url(../images/jalapeno_regular_right.png)",

    "url(../images/mushrooms_extra.png)",
    "url(../images/mushrooms_extra_left.png)",
    "url(../images/mushrooms_extra_right.png)",
    "url(../images/mushrooms_regular.png)",
    "url(../images/mushrooms_regular_left.png)",
    "url(../images/mushrooms_regular_right.png)",

    "url(../images/olive_extra.png)",
    "url(../images/olive_extra_left.png)",
    "url(../images/olive_extra_right.png)",
    "url(../images/olive_regular.png)",
    "url(../images/olive_regular_left.png)",
    "url(../images/olive_regular_right.png)",
    
    "url(../images/pepperoni_extra.png)",
    "url(../images/pepperoni_extra_left.png)",
    "url(../images/pepperoni_extra_right.png)",
    "url(../images/pepperoni_regular.png)",
    "url(../images/pepperoni_regular_left.png)",
    "url(../images/pepperoni_regular_right.png)",
    
    "url(../images/red_pepper_extra.png)",
    "url(../images/red_pepper_extra_left.png)",
    "url(../images/red_pepper_extra_right.png)",
    "url(../images/red_pepper_regular.png)",
    "url(../images/red_pepper_regular_left.png)",
    "url(../images/red_pepper_regular_right.png)",
]


var pizzaBackground = document.getElementsByClassName("pizza-preview");
pizzaBackground.style.background = "url(../images/regular_crust.png) no-repeat, url(../images/crust_background.png) no-repeat ";
pizzaBackground.style.backgroundSize = "100% 100%";
// pizzaBackground.style.border = "solid 1px #000";
// pizzaBackground.style.height = "500px";
// pizzaBackground.style.width = "500px";
// pizzaDiv.appendChild(pizzaBackground);

var baconBtn = document.createElement('button');
baconBtn.style.width = "50px";
baconBtn.style.background = "#fab";
baconBtn.style.height = "20px";
pizzaDiv.appendChild(baconBtn);
baconBtn.addEventListener("click", addBaconFull);


function addBaconFull(event){
    pizzaBackground.style.background = "url(../images/bacon_regular.png) no-repeat, url(../images/thin_crust.png) no-repeat, url(../images/crust_background.png) no-repeat";
    pizzaBackground.style.backgroundSize = "100% 100%";
}




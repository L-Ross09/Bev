var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Science/Beverages%20Nutrition.csv";
var names = getColumn(url, 1)
var type = getColumn(url,2)
var sugarFree = getColumn(url, 3)
var calories = getColumn(url, 4)
var fat = getColumn(url, 5)
var protien = getColumn(url, 6)
var carbs = getColumn(url, 7)
var sugar = getColumn(url, 8)


function results(input1, input2, input3){

    var macthingDrinks = [];
 
    for(var i = 0; i <names.length; i++){
        if (type[i] == input1 && sugarFree[i] == input2 && input3){
            macthingDrinks.push(names[i])
        }
    } 
    console.log(macthingDrinks)
    document.getElementById("output").innerHTML = macthingDrinks + "br";

}

function showCalories(){
    document.getElementById("sliderValue").innerHTML = document.getElementById("calories").value;
}

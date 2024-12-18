var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Science/Beverages%20Nutrition.csv";
var names = getColumn(url, 1)
var type = getColumn(url,2)
var sugarFree = getColumn(url, 3)
var calories = getColumn(url, 4)




function results(typeInput, sugarfreeInput, caloriesInput){

    var macthingDrinks = [];
//  This is a loop that cycles through the dataset, if the drink in the dataset matches with the corresponding inputs then it adds that drink to the list.

    for(var i = 0; i <names.length; i++){
        if (type[i] == typeInput && sugarFree[i] == sugarfreeInput && calories[i] < caloriesInput){
            macthingDrinks.push(names[i])
        }
    } 
// if there are no corresponding drinks then an error message is displayed. 
    if (macthingDrinks.length == 0 ){
        document.getElementById("output").innerHTML = "Oh no, there are no drinks that meet this criteria.";
    }
    // if there is a corresponding drinks then they are displayed in the output box.
    else {

     
        document.getElementById("output").innerHTML = "There are " + macthingDrinks.length + " results." + "<br>" + macthingDrinks.join("<br>");
    
    }

}
// This function sets the number under the slider to the calories value in the dataset.
function showCalories(){
    document.getElementById("sliderValue").innerHTML = document.getElementById("calories").value;
}


// original source: "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Science/Beverages%20Nutrition.

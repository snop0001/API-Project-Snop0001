window.addEventListener("load", init);

function init() {
  displayData();
}

function displayData(){
  fetch("../controller.php").then(function(response){
    return response.json();
  }).then(function(data){
    const temp = [data.drinks[0]];
    console.log(data.drinks[0].strDrink);
  }).catch(function(error){
    console.log(error);
  })
}
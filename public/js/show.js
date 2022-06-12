window.addEventListener("load", init);

function init() {
    const baseUrl = (window.location).href; // You can also use document.URL
    const id = baseUrl.substring(baseUrl.lastIndexOf('/') + 1);
    displayData(id);
}

function displayData(id){
    fetch("/api/" + id).then(function (response) {
        return response.json();
    }).then(function(data){
        const info = data.drinks[0];
        const title=document.querySelector('#title').innerText='Cocktail Name - ' + info.strDrink;
        if(info.strTags !== null) {
        const tags=document.querySelector('#tags').innerText=info.strTags;
        }
        const category=document.querySelector('#category').innerText=info.strCategory;
        const alcohol=document.querySelector('#alcohol').innerText=info.strAlcoholic;
        const glass=document.querySelector('#glass').innerText= 'One ' + info.strGlass;
        const list=document.querySelector('#ingredients');
        for (let i = 1; i < 16; i++) {
            let li = document.createElement('li');
            //checking if the ingredient exists or is null
            numIngrident = 'info.strIngredient' + i;
            instroIngrident = 'info.strMeasure'+ i;
            // eval - makes the string into an executable code
            let ingrident = eval(numIngrident);
            if (ingrident !== null) {
                li.innerText = eval(numIngrident) +' - ' + eval(instroIngrident);
                list.append(li);
            }
        }
        const instructions = document.querySelector('#instru').innerText=info.strInstructions;
        const img = document.querySelector('#drinkImg').src = info.strDrinkThumb;

    }).catch(function(error){
        console.log(error);
    })
}

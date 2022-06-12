window.addEventListener("load", init);

function init() {
    const amountOfCocktails = 4;
    prepareArray(amountOfCocktails);
}

/**
 * Generates a random integer number between min and max
 *
 * @param min - minimal time
 * @param max - maximal time
 * @returns a random integer number between min and max
 */
function randomInteger(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

/**
 * This function creates the array of Ids for the home page
 * It will check that all 4 drinks genereated are different
 * and that each id will ot return null from the API
 * @param amount
 * @returns {Promise<void>}
 */
async function prepareArray(amount) {
    let array = [];
    let id = 0;
    for (let counter = 0; counter < amount; counter++) {
        id = randomInteger(11000, 11100);
        let checkDosentExist = false;
        let isDrinkNull = true;
        let j = 0
        while ((!checkDosentExist) && j < 100) {
            if (array.indexOf(id) === -1) {
                checkDosentExist = true;
                // await here so first the json request will be executed before continuing
                isDrinkNull = await check(id);
                //only if not null add to array
                if (isDrinkNull === false) {
                    array[counter] = id;
                }
            }
            // if any checks fails restart
            if (!checkDosentExist || isDrinkNull === true) {
                id = randomInteger(11000, 11100);
                checkDosentExist = false;
                isDrinkNull = true
            }
            j++
        }
    }
    // call next funcition to present data according to the generated array
    selectData(array);
}

/**
 * This function checks if the id of the drink is null and will return true or false
 * @param id
 * @returns {Promise<boolean>}
 */
async function check(id) {
    try {
        let response = await fetch("/api/" + id);
        let drink = await response.json();
        return drink.drinks === null;

    }  catch (err) {
        console.error("Error: ", err);
    }
}


/**
 * This fucntion goes through every drink in the array
 * will generate json response for that drink
 * and will call the function to show its data to the DOM
 * @param array
 */
function selectData(array) {
    for (let i = 0; i < array.length; i++) {
        let id = array[i];
        console.log(id);
        fetch("/api/" + id).then(function (response) {
            return response.json();
        }).then(function (data) {
            const info = data.drinks[0];
            let parent = document.getElementById("drink" + i);
            displayInfo(info, parent);
        }).catch(function (error) {
            console.log(error);
        })
    }
}

/**
 * This fucntion presents the info to the home page
 * @param data
 * @param parent
 */
function displayInfo(data, parent) {
    //getting the 2 columns for each drink
    const imgCol = parent.querySelector('#colImg');
    const infoCol = parent.querySelector('#colInfo >.card');
    //setting the info for each child of those columns according to the drink
    //column image
    imgCol.querySelector('img').src = data.strDrinkThumb;
    //column info
    //drink name
    const header = infoCol.querySelector('h2').innerText = data.strDrink;
    //drink category (badge)
    const tag = infoCol.querySelector('.card-tools >.badge').innerText = data.strCategory;
    //body of the card
    const bodyCard = infoCol.querySelector('.card-body');
    // list of ingredients
    const ul = document.createElement('ul');
    for (let i = 1; i < 16; i++) {
        let li = document.createElement('li');
        //checking if the ingredient exists or is null
        numIngrident = 'data.strIngredient' + i;
        // eval - makes the string into an executable code
        let ingrident = eval(numIngrident);
        if (ingrident !== null) {
            li.innerText = eval(numIngrident);
            ul.append(li);
        }
    }
    bodyCard.append(ul);
    //link to the show page of this drink
    const footerCard = infoCol.querySelector('.card-footer');
    const link=footerCard.querySelector('#show').href='/showDrink/'+data.idDrink;

}

window.addEventListener("load", init);

function init() {
    const baseUrl = (window.location).href; // You can also use document.URL
    const letter = baseUrl.substring(baseUrl.lastIndexOf('/') + 1);
    selectData(letter);
}

// /**
//  * Generates a random integer number between min and max
//  *
//  * @param min - minimal time
//  * @param max - maximal time
//  * @returns a random integer number between min and max
//  */
// function randomInteger(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }
//
// /**
//  * This function creates the array of Ids for the home page
//  * It will check that all 4 drinks genereated are different
//  * and that each id will ot return null from the API
//  * @param amount
//  * @returns {Promise<void>}
//  */
// async function prepareArray(amount) {
//     let array = [];
//     let id = 0;
//     for (let counter = 0; counter < amount; counter++) {
//         id = randomInteger(11000, 11100);
//         let checkDosentExist = false;
//         let isDrinkNull = true;
//         let j = 0
//         while ((!checkDosentExist) && j < 100) {
//             if (array.indexOf(id) === -1) {
//                 checkDosentExist = true;
//                 // await here so first the json request will be executed before continuing
//                 isDrinkNull = await check(id);
//                 //only if not null add to array
//                 if (isDrinkNull === false) {
//                     array[counter] = id;
//                 }
//             }
//             // if any checks fails restart
//             if (!checkDosentExist || isDrinkNull === true) {
//                 id = randomInteger(11000, 11100);
//                 checkDosentExist = false;
//                 isDrinkNull = true
//             }
//             j++
//         }
//     }
//     // call next funcition to present data according to the generated array
//     selectData(array);
// }
//
// /**
//  * This function checks if the id of the drink is null and will return true or false
//  * @param id
//  * @returns {Promise<boolean>}
//  */
// async function check(id) {
//     try {
//         let response = await fetch("/api/" + id);
//         let drink = await response.json();
//         return drink.drinks === null;
//
//     }  catch (err) {
//         console.error("Error: ", err);
//     }
// }


/**
 * This fucntion goes through every drink in the array
 * will generate json response for that drink
 * and will call the function to show its data to the DOM
 * @param letter
 */
function selectData(letter) {
    fetch("/api/search/" + letter).then(function (response) {
        return response.json();
    }).then(function (data) {
        const drinks = data.drinks;
        if (drinks !== null) {
            displayInfo(drinks, letter);
        } else {
            const drinks = document.querySelector('#drinks');
            const h1 = document.createElement("h1").innerText = 'sorry no drinks for the letter ' +letter +' exist in our records';
            drinks.append(h1);
        }
    }).catch(function (error) {
        console.log(error);
    })
}

/**
 * This fucntion presents the info to the home page
 * @param drinks
 * @param letter
 */
function displayInfo(drinks, letter) {
    const div = document.querySelector('#drinks');
    const title = document.createElement("h3");
    title.classList.add('text-center');
    title.innerText = 'Total of ' + drinks.length + ' drinks in the letter ' + letter;
    div.append(title);

    for (let i = 0; i < drinks.length; i++) {
        //card for each drink
        const card = document.createElement('div');
        card.classList.add('card');
        // card header
        const header = document.createElement('div');
        header.classList.add('card-header');
        header.classList.add("bg-gradient-pink");
        const h2 = document.createElement("h2");
        h2.innerText = 'Drink number ' + (i + 1) + ' - ' + drinks[i].strDrink;
        const badge = document.createElement('span');
        badge.classList.add('badge');
        badge.classList.add('badge-info');
        badge.innerText=drinks[i].strCategory;
        header.append(h2,badge);
        //card body
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        //row
        const row = document.createElement("div");
        row.classList.add("row");
        //img of drink in card body
        const colImg = document.createElement("div");
        colImg.classList.add("col");
        const img = document.createElement("img");
        img.classList.add("imgMain1");
        img.classList.add("float-right");
        img.src = drinks[i].strDrinkThumb;
        //rest of info about drink in body
        const colInfo = document.createElement("div");
        colInfo.classList.add("col");
        const h5 = document.createElement("h5");
        h5.innerText = 'Ingredients:';
        const ul = document.createElement("ul");
        for (let j = 1; j < 16; j++) {
            let li = document.createElement('li');
            //checking if the ingredient exists or is null
            numIngrident = 'drinks[' + i + '].strIngredient' + j;
            // eval - makes the string into an executable code
            let ingrident = eval(numIngrident);
            if (ingrident !== null) {
                li.innerText = eval(numIngrident);
                ul.append(li);
            }
        }
        //footer of card
        const footer = document.createElement("div");
        footer.classList.add('card-footer');
        const a = document.createElement("a");
        a.innerText = 'More Information about this drink';
        a.href = '/showDrink/' + drinks[i].idDrink;
        //appending everything propearly
        colImg.append(img);
        colInfo.append(h5, ul);
        row.append(colInfo, colImg);
        footer.append(a);
        cardBody.append(row, footer);
        card.append(header, cardBody);
        div.append(card);

    }
}

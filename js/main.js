let elPokemonCards = document.querySelector('.cards')

function renderingPokemons(pokemonArray) {
    for (i = 0; i < pokemonArray.length; i++) {
        //Creating elements
        var newLi = document.createElement('li'),
            newImg = document.createElement('img'),
            newBlackLine = document.createElement('div'),
            newName = document.createElement('h3'),
            newType = document.createElement('p'),
            newWeight = document.createElement('h3');

        //Setting attributes
        newImg.setAttribute("class", "pokemon_img")
        newImg.setAttribute("src", pokemonArray[i].img)
        newBlackLine.setAttribute("class", "black_line")
        newName.setAttribute("class", "pokemon_name")
        newType.setAttribute("class", "pokemon_type")
        newWeight.setAttribute("class", "pokemon_age")
        newLi.setAttribute('class', "card")

        //Assigning Values

        newName.textContent = pokemonArray[i].name
        newType.textContent = pokemonArray[i].type
        newWeight.textContent = pokemonArray[i].weight

        //Appending

        newLi.appendChild(newImg)
        newLi.appendChild(newBlackLine)
        newLi.appendChild(newName)
        newLi.appendChild(newType)
        newLi.appendChild(newWeight)

        elPokemonCards.appendChild(newLi)
    }
}

renderingPokemons(pokemons)


let elForm = document.querySelector('.form'),
    elNameInput = document.querySelector('.input-name'),
    elTypeInput = document.querySelector('.input-type'),
    elAgeInput = document.querySelector('.input-age'),
    elImgInput = document.querySelector('.input-img'),
    elFormButton = document.querySelector('.form-button');

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault()

    elPokemonCards.textContent = ''

    var newCard = {
        name: '',
        type: '',
        weight: '',
        img: ''
    }

    newCard.name = elNameInput.value
    newCard.type = elTypeInput.value
    newCard.weight = elAgeInput.value + "kg"
    newCard.img = elImgInput.value

    pokemons.unshift(newCard)

    elTypeInput.value = ''
    elNameInput.value = ''
    elAgeInput.value = ''
    elImgInput.value = ''

    renderingPokemons(pokemons)

})





let iconsArray = [
    {name: 'blender', img: 'assets/images/memory-game-icons/blender.png'},
    {name: 'bowl', img: 'assets/images/memory-game-icons/bowl.png'},
    {name: 'cooking-pot', img: 'assets/images/memory-game-icons/cooking-pot.png'},
    {name: 'flask', img: 'assets/images/memory-game-icons/flask.png'},
    {name: 'flower', img: 'assets/images/memory-game-icons/flower.png'},
    {name: 'handbag', img: 'assets/images/memory-game-icons/handbag.png'},
    {name: 'kettle', img: 'assets/images/memory-game-icons/kettle.png'},
    {name: 'lamp', img: 'assets/images/memory-game-icons/lamp.png'},
    {name: 'plant', img: 'assets/images/memory-game-icons/plant.png'},
    {name: 'teacup', img: 'assets/images/memory-game-icons/teacup.png'},
    {name: 'teapot', img: 'assets/images/memory-game-icons/teapot.png'},
    {name: 'water-bottle', img: 'assets/images/memory-game-icons/water-bottle.png'},
    {name: 'watering-pot', img: 'assets/images/memory-game-icons/watering-pot.png'},
    {name: 'water-jug', img: 'assets/images/memory-game-icons/water-jug.png'},
    {name: 'wine-bottle', img: 'assets/images/memory-game-icons/wine-bottle.png'},
]

iconsArray.sort(() => 0.5 - Math.random())

console.log(iconsArray)


let gamespace = document.getElementById('gamespace')
console.log(gamespace)

let clickCount
let Timer

let iconsChosen = []
let iconsChosenId = []
let iconsMatch = []

function createGame() {
    for (let i = 0; i < iconsArray.length; i++) {
        let icons = document.createElement('img')

        icons.setAttribute('src','assets/images/memory-game-icons/brain.png')
        icons.setAttribute('data-id', i)
        icons.addEventListener('click', flipIcons)
        gamespace.appendChild(icons)
    }
}

function flipIcons() {
    let iconsId = this.getAttribute('data-id')
    iconsChosen.push(iconsArray[iconsId].name)
    this.setAttribute('src', iconsArray[iconsId].img)
    if (iconsChosen.length === 2) {
        setTimeout(checkForPair, 500)
    }
}

//function checkForPair ()

createGame()


// function clickCount ()
// function timer ()

// function easy ()
// function intermediate ()
// function hard

// function endGame ()
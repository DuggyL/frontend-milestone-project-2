let iconsArray = [
    {name: 'blender', img: 'assets/images/blender.png'},
    {name: 'bowl', img: 'assets/images/bowl.png'},
    {name: 'cooking-pot', img: 'assets/images/cooking-pot'},
    {name: 'flask', img: 'assets/images/flask.png'},
    {name: 'flower', img: 'assets/images/flower.png'},
    {name: 'handbag', img: 'assets/images/handbag'},
    {name: 'kettle', img: 'assets/images/kettle.png'},
    {name: 'lamp', img: 'assets/images/lamp.png'},
    {name: 'plant', img: 'assets/images/plant'},
    {name: 'teacup', img: 'assets/images/teacup.png'},
    {name: 'teapot', img: 'assets/images/teapot.png'},
    {name: 'water-bottle', img: 'assets/images/water-bottle'},
    {name: 'watering-pot', img: 'assets/images/watering-pot'},
    {name: 'water-jug', img: 'assets/images/water-jug.png'},
    {name: 'wine-bottle', img: 'assets/images/winebottle'},
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

// function createGame ()
// function flipIcons ()

// function clickCount ()
// function timer ()

// function easy ()
// function intermediate ()
// function hard

// function endGame ()
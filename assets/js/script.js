document.addEventListener('DOMContentLoaded', () => {

    let levelOneArray = [
        {name: 'blender', img: 'assets/images/memory-game-icons/blender.png'},
        {name: 'bowl', img: 'assets/images/memory-game-icons/bowl.png'},
        {name: 'cooking-pot', img: 'assets/images/memory-game-icons/cooking-pot.png'},
        {name: 'plant', img: 'assets/images/memory-game-icons/plant.png'},
        {name: 'blender', img: 'assets/images/memory-game-icons/blender.png'},
        {name: 'bowl', img: 'assets/images/memory-game-icons/bowl.png'},
        {name: 'cooking-pot', img: 'assets/images/memory-game-icons/cooking-pot.png'},
        {name: 'plant', img: 'assets/images/memory-game-icons/plant.png'}
    ]

    // let levelTwoArray = [
    //     {name: 'blender', img: 'assets/images/memory-game-icons/blender.png'},
    //     {name: 'bowl', img: 'assets/images/memory-game-icons/bowl.png'},
    //     {name: 'cooking-pot', img: 'assets/images/memory-game-icons/cooking-pot.png'},
    //     {name: 'plant', img: 'assets/images/memory-game-icons/plant.png'},
    //     {name: 'flower', img: 'assets/images/memory-game-icons/flower.png'},
    //     {name: 'handbag', img: 'assets/images/memory-game-icons/handbag.png'},
    //     {name: 'kettle', img: 'assets/images/memory-game-icons/kettle.png'},
    //     {name: 'lamp', img: 'assets/images/memory-game-icons/lamp.png'},
    //     {name: 'blender', img: 'assets/images/memory-game-icons/blender.png'},
    //     {name: 'bowl', img: 'assets/images/memory-game-icons/bowl.png'},
    //     {name: 'cooking-pot', img: 'assets/images/memory-game-icons/cooking-pot.png'},
    //     {name: 'plant', img: 'assets/images/memory-game-icons/plant.png'}
    //     {name: 'flower', img: 'assets/images/memory-game-icons/flower.png'},
    //     {name: 'handbag', img: 'assets/images/memory-game-icons/handbag.png'},
    //     {name: 'kettle', img: 'assets/images/memory-game-icons/kettle.png'},
    //     {name: 'lamp', img: 'assets/images/memory-game-icons/lamp.png'}
    // ]

    // let levelThreeArray = [
    //     {name: 'blender', img: 'assets/images/memory-game-icons/blender.png'},
    //     {name: 'bowl', img: 'assets/images/memory-game-icons/bowl.png'},
    //     {name: 'cooking-pot', img: 'assets/images/memory-game-icons/cooking-pot.png'},
    //     {name: 'plant', img: 'assets/images/memory-game-icons/plant.png'},
    //     {name: 'flower', img: 'assets/images/memory-game-icons/flower.png'},
    //     {name: 'handbag', img: 'assets/images/memory-game-icons/handbag.png'},
    //     {name: 'kettle', img: 'assets/images/memory-game-icons/kettle.png'},
    //     {name: 'lamp', img: 'assets/images/memory-game-icons/lamp.png'},
    //     {name: 'teacup', img: 'assets/images/memory-game-icons/teacup.png'},
    //     {name: 'teapot', img: 'assets/images/memory-game-icons/teapot.png'},
    //     {name: 'watering-pot', img: 'assets/images/memory-game-icons/watering-pot.png'},
    //     {name: 'water-jug', img: 'assets/images/memory-game-icons/water-jug.png'},
    //     {name: 'blender', img: 'assets/images/memory-game-icons/blender.png'},
    //     {name: 'bowl', img: 'assets/images/memory-game-icons/bowl.png'},
    //     {name: 'cooking-pot', img: 'assets/images/memory-game-icons/cooking-pot.png'},
    //     {name: 'plant', img: 'assets/images/memory-game-icons/plant.png'}
    //     {name: 'flower', img: 'assets/images/memory-game-icons/flower.png'},
    //     {name: 'handbag', img: 'assets/images/memory-game-icons/handbag.png'},
    //     {name: 'kettle', img: 'assets/images/memory-game-icons/kettle.png'},
    //     {name: 'lamp', img: 'assets/images/memory-game-icons/lamp.png'},
    //     {name: 'teacup', img: 'assets/images/memory-game-icons/teacup.png'},
    //     {name: 'teapot', img: 'assets/images/memory-game-icons/teapot.png'},
    //     {name: 'watering-pot', img: 'assets/images/memory-game-icons/watering-pot.png'},
    //     {name: 'water-jug', img: 'assets/images/memory-game-icons/water-jug.png'}
    // ]

    const gameGrid = document.getElementById('game-grid')
    const scoreDisplay = document.getElementById('score-display')
    const clicksDisplay = document.getElementById('clicks-display')
    const playAgain = document.getElementById('replay')
   
    let iconsChosen = []
    let iconsChosenId = []
    let iconsMatch = 0
    let clicks = 0

    function shuffleIcons() {
        levelOneArray.sort(() => 0.5 - Math.random())
        // levelTwoArray.sort(() => 0.5 - Math.random())
        // levelThreeArray.sort(() => 0.5 - Math.random())
    }

    function createLevelOneGame() {
        for (let i = 0; i < levelOneArray.length; i++) {
            const icon = document.createElement('img')
            icon.setAttribute('src','assets/images/memory-game-icons/brain1.png')
            icon.setAttribute('data-id', i)
            icon.addEventListener('click', flipIcon)
            gameGrid.appendChild(icon)
        }
    }

    function checkMatch() {
        const icons = document.querySelectorAll('img')
        const firstIconId = iconsChosenId[0]
        const secondIconId = iconsChosenId[1]

        console.log(iconsChosen, firstIconId, secondIconId)

        if(iconsChosen[0] ===  iconsChosen[1]) {
            icons[firstIconId].removeEventListener('click', flipIcon)
            icons[secondIconId].removeEventListener('click', flipIcon)
            iconsMatch += 1
            scoreDisplay.innerHTML = iconsMatch
            setTimeout(checkWon, 700) 
            alert("You found a match.")
        } else {
            icons[firstIconId].setAttribute('src', 'assets/images/memory-game-icons/brain1.png')
            icons[secondIconId].setAttribute('src', 'assets/images/memory-game-icons/brain1.png')
            alert("Try again")
        }
        iconsChosen = []
        iconsChosenId = []
        clicks += 1
        clicksDisplay.innerHTML = clicks
    }
    
    function checkWon() {
        if (iconsMatch == levelOneArray.length/2) {
        alert("You won") 
        }
    }

    function flipIcon() {
        let iconId = this.getAttribute('data-id')
        iconsChosen.push(levelOneArray[iconId].name)
        iconsChosenId.push(iconId)
        this.setAttribute('src', levelOneArray[iconId].img)
        if (iconsChosen.length === 2) {
            setTimeout(checkMatch, 700)
        }
    }

    function replay() { 
        shuffleIcons();
        gameGrid.innerHTML = "";
        createLevelOneGame() 
        iconsMatch = 0;
        clicks = 0; 
        clickDisplay.innerHTML = 0; 
        scoreDisplay.innerHTML = 0;
    }

    createLevelOneGame()
    shuffleIcons()
    playAgain.addEventListener("click", replay); 

})



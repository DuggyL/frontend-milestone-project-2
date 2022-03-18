document.addEventListener('DOMContentLoaded', () => {

    let iconsArray = [
        {name: 'blender', img: 'assets/images/memory-game-icons/blender.png'},
        {name: 'bowl', img: 'assets/images/memory-game-icons/bowl.png'},
        {name: 'cooking-pot', img: 'assets/images/memory-game-icons/cooking-pot.png'},
        {name: 'plant', img: 'assets/images/memory-game-icons/plant.png'},
        {name: 'teapot', img: 'assets/images/memory-game-icons/teapot.png'},
        {name: 'handbag', img: 'assets/images/memory-game-icons/handbag.png'},
        {name: 'kettle', img: 'assets/images/memory-game-icons/kettle.png'},
        {name: 'lamp', img: 'assets/images/memory-game-icons/lamp.png'},
        {name: 'water-jug', img: 'assets/images/memory-game-icons/water-jug.png'},
        {name: 'watering-pot', img: 'assets/images/memory-game-icons/watering-pot.png'},
        
        {name: 'blender', img: 'assets/images/memory-game-icons/blender.png'},
        {name: 'bowl', img: 'assets/images/memory-game-icons/bowl.png'},
        {name: 'cooking-pot', img: 'assets/images/memory-game-icons/cooking-pot.png'},
        {name: 'plant', img: 'assets/images/memory-game-icons/plant.png'},
        {name: 'teapot', img: 'assets/images/memory-game-icons/teapot.png'},
        {name: 'handbag', img: 'assets/images/memory-game-icons/handbag.png'},
        {name: 'kettle', img: 'assets/images/memory-game-icons/kettle.png'},
        {name: 'lamp', img: 'assets/images/memory-game-icons/lamp.png'},
        {name: 'water-jug', img: 'assets/images/memory-game-icons/water-jug.png'},
        {name: 'watering-pot', img: 'assets/images/memory-game-icons/watering-pot.png'}
    ]
    
    const gameGrid = document.getElementById('game-grid')
    const scoreDisplay = document.getElementById('score-display')
    const clicksDisplay = document.getElementById('clicks-display')
    const playAgain = document.getElementById('replay')
   
    let iconsChosen = []
    let iconsChosenId = []
    let iconsMatch = 0
    let clicks = 0

    function shuffleIcons() {
        iconsArray.sort(() => 0.5 - Math.random())
    }

    function createGame() {
        for (let i = 0; i < iconsArray.length; i++) {
            const icon = document.createElement('img')
            icon.setAttribute('src','assets/images/memory-game-icons/brain1.png')
            icon.setAttribute('data-id', i)
            icon.addEventListener('click', flipIcon)
            gameGrid.appendChild(icon)
        }
    }

    function flipIcon() {
        let iconId = this.getAttribute('data-id')
        iconsChosen.push(iconsArray[iconId].name)
        iconsChosenId.push(iconId)
        this.setAttribute('src', iconsArray[iconId].img)
        if (iconsChosen.length === 2) {
            setTimeout(checkMatch, 1000)
        }
    }

    function checkMatch() {
        const icons = document.querySelectorAll('img')
        const firstIconId = iconsChosenId[0]
        const secondIconId = iconsChosenId[1]

        if(iconsChosen[0] ===  iconsChosen[1] && firstIconId !== secondIconId) {
            icons[firstIconId].removeEventListener('click', flipIcon)
            icons[secondIconId].removeEventListener('click', flipIcon)
            iconsMatch += 1
            scoreDisplay.innerHTML = iconsMatch
            setTimeout(checkWon, 1000) 
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
        if (iconsMatch == iconsArray.length/2) {
        alert("You won") 
        }
    }

    function reset() { 
        shuffleIcons();
        gameGrid.innerHTML = "";
        createGame() 
        iconsMatch = 0;
        clicks = 0; 
        clicksDisplay.innerHTML = 0; 
        scoreDisplay.innerHTML = 0;
    }

    createGame()
    shuffleIcons()
    playAgain.addEventListener("click", reset);

})



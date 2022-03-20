document.addEventListener('DOMContentLoaded', () => {

    // Declared the array and variables.

    let iconsArray = [
        {name: 'blender', img: 'assets/images/memory-game-icons/blender.png'},
        {name: 'bowl', img: 'assets/images/memory-game-icons/bowl.png'},
        // {name: 'cooking-pot', img: 'assets/images/memory-game-icons/cooking-pot.png'},
        // {name: 'plant', img: 'assets/images/memory-game-icons/plant.png'},
        // {name: 'teapot', img: 'assets/images/memory-game-icons/teapot.png'},
        // {name: 'handbag', img: 'assets/images/memory-game-icons/handbag.png'},
        // {name: 'kettle', img: 'assets/images/memory-game-icons/kettle.png'},
        // {name: 'lamp', img: 'assets/images/memory-game-icons/lamp.png'},
        // {name: 'water-jug', img: 'assets/images/memory-game-icons/water-jug.png'},
        // {name: 'watering-pot', img: 'assets/images/memory-game-icons/watering-pot.png'},
        
        {name: 'blender', img: 'assets/images/memory-game-icons/blender.png'},
        {name: 'bowl', img: 'assets/images/memory-game-icons/bowl.png'},
        // {name: 'cooking-pot', img: 'assets/images/memory-game-icons/cooking-pot.png'},
        // {name: 'plant', img: 'assets/images/memory-game-icons/plant.png'},
        // {name: 'teapot', img: 'assets/images/memory-game-icons/teapot.png'},
        // {name: 'handbag', img: 'assets/images/memory-game-icons/handbag.png'},
        // {name: 'kettle', img: 'assets/images/memory-game-icons/kettle.png'},
        // {name: 'lamp', img: 'assets/images/memory-game-icons/lamp.png'},
        // {name: 'water-jug', img: 'assets/images/memory-game-icons/water-jug.png'},
        // {name: 'watering-pot', img: 'assets/images/memory-game-icons/watering-pot.png'}
    ];
    
    // Declared variables using const for values that will not change and var for the values that will change during the course of the game.

    const gameGrid = document.getElementById('game-grid');
    const matchDisplay = document.getElementById('match-display');
    const attemptDisplay = document.getElementById('attempt-display');
    const playAgain = document.getElementById('reset');
    const winOverlay = document.getElementById('win');
   
    let iconsChosen = [];
    let iconsChosenId = [];
    let iconsMatch = 0;
    let attempt = 0;

    // shuffleIcons function uses to randomise icons placement on the game grid by using sort and math.random method.

    function shuffleIcons() {
        iconsArray.sort(() => 0.5 - Math.random());
    }

    // createGame function using "for" statment to create loop through iconsArray. And use createElement method to create img element and setAttribute method to assign source of the images to the img element. (Default icon image of the brain mascot)
    // Assign a data ID attribute to each of the icons I created by using the "i" variable to loop through iconsArray.
    // Add eventListener to listen to player click. flipIcon function will activate when player click on the icons.


    function createGame() {
        for (let i = 0; i < iconsArray.length; i++) {
            const icon = document.createElement('img');
            icon.setAttribute('src','assets/images/memory-game-icons/brain1.png');
            icon.setAttribute('alt','memory-game-icons');
            icon.setAttribute('data-id', i);
            icon.addEventListener('click', flipIcon);
            gameGrid.appendChild(icon);
        }
    }

    // flipIcon function is used to swap default icon(brain) image with iconsArray's images. Using "this" keyword to get data-id of the icons that have been clicked on and store inside the iconId variable.
    // Using "push" method to push iconsArray's "name" to iconsChosen array.
    // And set new attribute to the default icon(brain) player clicked on and assign source to iconsArray's images using iconId.
    // If iconsChosen array have 2 set of data (name i.e ["teapot", "kettle"]) it will set a timer (700 millisecond) using setTimeout method to activate checkMatch function.

    function flipIcon() {
        let iconId = this.getAttribute('data-id');
        iconsChosen.push(iconsArray[iconId].name);
        iconsChosenId.push(iconId);
        this.setAttribute('src', iconsArray[iconId].img);
        if (iconsChosen.length === 2) {
            setTimeout(checkMatch, 200);
        }
    }

    // checkMatch function used to check if 2 icons players clicked on are a match or not.
    // Within the function it will increment iconsMatch and click variables number by 1 based on player interaction with the game. And display the number to "Score" and "Attempt" on the game page using innerHTML.
    // If the 1st value of the iconsChosen array is the same to (strict equality) 2nd value of iconsChosen array it will alert the player "You found a match." and add to the number of iconsMatch variables. 
    // Each time the icons are a match will activate the checkWon function.
    // If the icons are not a match (else), the icons will go back to the default icon(brain) and alert the player "Try again".
    // After the if/else statement, iconsChosen and iconsChosenId arrays will clear. Number of clicks will be added to the clicks variable and displayed on "Attempt" on the game page.

    function checkMatch() {
        const icons = document.querySelectorAll('img');
        const firstIconId = iconsChosenId[0];
        const secondIconId = iconsChosenId[1];

        if(iconsChosen[0] === iconsChosen[1] && firstIconId !== secondIconId) {
            icons[firstIconId].removeEventListener('click', flipIcon);
            icons[secondIconId].removeEventListener('click', flipIcon);
            iconsMatch += 1;
            matchDisplay.innerHTML = iconsMatch;
            setTimeout(checkWon, 600);
        } else {
            icons[firstIconId].setAttribute('src', 'assets/images/memory-game-icons/brain1.png');
            icons[secondIconId].setAttribute('src', 'assets/images/memory-game-icons/brain1.png');
        }
        iconsChosen = [];
        iconsChosenId = [];
        attempt += 1;
        attemptDisplay.innerHTML = attempt;
    }
    
    // The checkWon function simply check if the value of cardsWon is equal to the length of the card divided by 2 and alert player "You Won"

    function checkWon() {
        if (iconsMatch == iconsArray.length/2) {
        winOverlay.classList.add('show');
        // alert("You won"); 
        }
    }

    // reset function will activate both shuffleIcons and createGame functions.
    // Previous game grid will be clear to stop the createGame function from creating a new game on top of the old one.
    // iconsMatch and click reset back to 0. "Score" and "Attempt" also reset back to 0 on the main game page.

    function reset() {
        winOverlay.classList.remove('show');
        gameGrid.innerHTML = "";
        shuffleIcons();
        createGame(); 
        iconsMatch = 0;
        attempt = 0;
        attemptDisplay.innerHTML = 0;
        matchDisplay.innerHTML = 0;
    }

    createGame();
    shuffleIcons();
    playAgain.addEventListener("click", reset);

});
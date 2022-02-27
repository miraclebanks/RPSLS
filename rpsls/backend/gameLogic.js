const winnersToLosersMap = {
    "scissors": ["paper", "lizard"],
    "paper": ["rock", "spock"],
    "rock": ["scissors", "lizard"],
    "lizard": ["spock", "paper"],
    "spock": ["rock", "scissors"]
}

const moveChoices = Object.keys( winnersToLosersMap );



run();

function run() {
    const choice = getRandomComputerChoice();
    console.log(choice);
    console.log(isWinner("spock", choice));
}



function getRandomComputerChoice() { 
    return getRandomElementFromArray( moveChoices );
}

function getRandomElementFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function isWinner(move, moveToCheckAgainst) {
    const losers = winnersToLosersMap[move];
    return losers.includes( moveToCheckAgainst );
}


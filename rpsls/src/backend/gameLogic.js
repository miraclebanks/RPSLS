
export const winnersToLosersMap = {
    "scissors": ["paper", "lizard"],
    "paper": ["rock", "spock"],
    "rock": ["scissors", "lizard"],
    "lizard": ["spock", "paper"],
    "spock": ["rock", "scissors"]
}

const moveChoices = Object.keys( winnersToLosersMap );

export function getRandomComputerChoice() {
    const randomIndex = Math.floor(Math.random() * moveChoices.length);
    return moveChoices[randomIndex];
}

export function gameResults(move, moveToCheckAgainst) {
    const losers = winnersToLosersMap[move];
    const tie = move;
    if(losers.includes( moveToCheckAgainst )){
        return 'Win'
    } else if (tie === moveToCheckAgainst) {
        return 'Tie'
    } else {
        return 'Lose'
    }
}

export function handleResult(result){
    switch(result){
        case 'Win':
            break;
        case 'Tie':
            break;
        case 'Lose':
            break;        
    }
}
// run();

// function run() {
//     const choice = getRandomComputerChoice();
    // console.log(choice);
    // console.log(isWinner("spock", choice));
//}

// export function getRandomComputerChoice() { 
//     return getRandomElementFromArray( moveChoices );
// }


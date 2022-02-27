import { winnersToLosersMap,
moveChoices,
getRandomComputerChoice,
isWinner } from './gameLogic'

describe(`basic game rules`, ()=>{ 
    test(`properly identifies if computer won`, ()=>{ 
        const computerChoice = getRandomComputerChoice();
        const losingChoices = winnersToLosersMap[ computerChoice ];
        const choicePicked = losingChoices[ Math.floor( Math.random() * losingChoices.length ) ];
        console.log(computerChoice);
        console.log(choicePicked);
        expect( isWinner(computerChoice,choicePicked) ).toEqual(true);
    })
    
} )
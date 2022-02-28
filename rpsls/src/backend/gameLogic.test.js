import { winnersToLosersMap,
getRandomComputerChoice,
gameResults } from './gameLogic'

describe(`basic game rules`, ()=>{ 
    test(`properly identifies if computer won`, ()=>{ 
        const computerChoice = getRandomComputerChoice();
        const losingChoices = winnersToLosersMap[ computerChoice ];
        const choicePicked = losingChoices[ Math.floor( Math.random() * losingChoices.length ) ];
        console.log(computerChoice);
        console.log(choicePicked);
        expect( gameResults(computerChoice,choicePicked) ).toEqual('Win');
    })
    test('identifies ties', () => {
        const computerChoice = getRandomComputerChoice();
        const tieChoices = computerChoice;
        console.log(computerChoice);
        console.log(tieChoices);
        expect( gameResults(computerChoice,tieChoices) ).toEqual('Tie');
    })
    test(`properly identifies if computer won`, ()=>{ 
        const winningChoice = getRandomComputerChoice();
        const computerChoice = winnersToLosersMap[ winningChoice ];
        const choicePicked = computerChoice[ Math.floor( Math.random() * computerChoice.length ) ];
        console.log(computerChoice);
        console.log(choicePicked);
        expect( gameResults(choicePicked,winningChoice) ).toEqual('Lose');
    })
} )


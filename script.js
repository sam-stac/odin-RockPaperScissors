function getComputerChoice(){
    randomNum=Math.floor(Math.random()*3);
    
    if (randomNum===0){ 
        return "Rock"
    }
    else if (randomNum===1){ 
        return "Paper"
    }
    else{
        return "Scissors"
    }
}


function getHumanChoice(){
    let userInput
    userInput=prompt("Enter Rock, Paper or Scissors");
    return userInput;
}


function playGame(){
    let humanScore=0;
    let computerScore=0;


    function playRound(){
        let computerChoice=getComputerChoice();
        let humanChoice=getHumanChoice().toLowerCase();

        if ((computerChoice=="Rock") && (humanChoice=="paper") || (computerChoice=="Paper") && (humanChoice=="scissors") || (computerChoice=="Scissors") && (humanChoice=="rock")){
            console.log("You win! "+ humanChoice+" beats "+computerChoice);
            humanScore+=1;
        }
        else if((humanChoice=="Rock") && (computerChoice=="paper") || (humanChoice=="Paper") && (computerChoice=="scissors") || (humanChoice=="Scissors") && (computerChoice=="rock")){
            console.log("You lose! "+computerChoice+ " beats " + humanChoice);
            computerScore+=1;
        }
        else{
            console.log("It's a draw.")
        }
        
    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

}

playGame();

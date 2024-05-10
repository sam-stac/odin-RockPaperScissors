function getComputerChoice(){
    randomNum=Math.floor(Math.random()*3);
    console.log(randomNum);
    
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

console.log(getComputerChoice());
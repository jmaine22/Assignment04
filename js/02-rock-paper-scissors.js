let askUser = prompt("Player choose between rock, paper, scissor ");
let userDecision = askUser;
let randomChoice = Math.floor(Math.random() * 3);
console.log(randomChoice);
function computerchoice(){
    for (let i = 1; i <= 3; i++){
        if (randomChoice == 0){
            let choice = "rock";
            return choice;
        }
        else if (randomChoice == 1){
            let choice = "paper";
            return choice;
        }
        else if (randomChoice == 2){
            let choice = "scissor";
            return choice;
        }
    }
    
}
function game(){
        console.log(userDecision);
        console.log(computerchoice(randomChoice));
        if (userDecision == "rock" && randomChoice == "scissor" || 
        userDecision == "scissor" && randomChoice == "paper" || 
        userDecision == "paper" && randomChoice == "rock"){
            alert("Player Wins!!" + userDecision + " beats" + randomChoice);
        } else if (userDecision == randomChoice){
            alert("It's Tie");
         } //else if (userDecision != "rock" || userDecision !="paper" || userDecision !="scissor" ){
        //     alert("Not valid entry");
        // }
        else {
            alert("Computer Wins!!" + randomChoice + " beats" + userDecision);
        }

}
game(userDecision, computerchoice(randomChoice));
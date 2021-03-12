let askUser = prompt("Player choose between rock, paper, scissor ");
let userDecision = askUser;
function computerChoice(){
    let randomChoice = Math.floor(Math.random() * 3);
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
let choice = computerChoice();
function game(){
        console.log(userDecision);
        console.log(choice);
        if (userDecision == "rock" && choice == "scissor" || 
        userDecision == "scissor" && choice == "paper" || 
        userDecision == "paper" && choice == "rock"){
            alert("Player Wins!! " + userDecision + " beats " + choice);
        } else if (userDecision == choice){
            alert("It's Tie");
        } else if (userDecision != "rock" ){
             alert("Not valid entry. Try again");
            //  do {
            //     askUser = prompt("Player choose between rock, paper, scissor ");
            //     userDecision = askUser;
            //     computerChoice();
            //     if (userDecision == "rock" && choice == "scissor" || 
            //     userDecision == "scissor" && choice == "paper" || 
            //     userDecision == "paper" && choice == "rock"){
            //     alert("Player Wins!! " + userDecision + " beats " + choice);
            //     }
            // } while (userDecision !="rock");
        } else if (userDecision != "paper" ){
            alert("Not valid entry. Try again");
            // do {
            //     askUser = prompt("Player choose between rock, paper, scissor ");
            //     userDecision = askUser;
            //     computerChoice();
            //     if (userDecision == "rock" && choice == "scissor" || 
            //     userDecision == "scissor" && choice == "paper" || 
            //     userDecision == "paper" && choice == "rock"){
            //     alert("Player Wins!! " + userDecision + " beats " + choice);
            //     }
            // } while (userDecision !="paper");
        } else if (userDecision != "scissor" ){
            alert("Not valid entry. Try again");
            // do {
            //     askUser = prompt("Player choose between rock, paper, scissor ");
            //     userDecision = askUser;
            //     computerChoice();
            //     if (userDecision == "rock" && choice == "scissor" || 
            //     userDecision == "scissor" && choice == "paper" || 
            //     userDecision == "paper" && choice == "rock"){
            //     alert("Player Wins!! " + userDecision + " beats " + choice);
            //      }
            // } while (userDecision !="scissor");
        }
        else {
            alert("Computer Wins!! " + choice + " beats " + userDecision);
        }

}
game(userDecision, choice);
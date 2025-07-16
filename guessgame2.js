function startGame(){
    const max = prompt("enter the max number:- ");
    if (!max || isNaN(max)) {
        alert("Invalid input!! Please enter a number");
        return;
    }

    const random = Math.floor(Math.random()* max) + 1;
    let guess = prompt("guess the number = ");

    while(true){
        if(guess === "quit"){
            document.getElementById("log").textContent = "User quit the game!!";
            break;
        }

        if(Number(guess)=== random){
            document.getElementById("log").textContent = `Great! you are right ! The number was ${random}`;
            confetti();
            break;
        } else if (Number(guess)<random) {
            guess = prompt("Too small!! Try again or type 'quit' to stop.");
        } else {
            guess = prompt("Too large!! try again or type 'quit' to stop.");
        }
    }
}
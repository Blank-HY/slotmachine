// 1, Deposit some money
//2. Determine number of lines to bet on
//3. Collect a be amount
//4. Spin the slot machine
//5. Check if the user won
//6. Give the usre their Winnings
//7. Play again

const prompt = require("prompt-sync")();









//function to depo money
const deposit = () => {
    while (true) { //looping forever
        const depositAmount = prompt("Enter a Deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount); //Convert to number 

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid Desposit amount, try again.")
        } else { //if this is not the case
            return numberDepositAmount; // breaks the loop
        }
    }
};

const getNumberOFLines = () => {
    while (true) { //looping forever
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines); //Convert to number 

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again.")
        } else { //if this is not the case
            return numberOfLines; // breaks the loop
        }
    }

};

const getBet = (balance, lines) => {
    while (true) { //looping forever
        const bet = prompt("Enter the Total Bet per line: ");
        const numberBet = parseFloat(bet); //Convert to number 

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, try again.")
        } else { //if this is not the case
            return numberBet; // breaks the loop
        }
    }

}

let balance = deposit(); //Let means you can change what value its storing
const numberOfLines = getNumberOFLines();
const bet = getBet(balance, numberOfLines);



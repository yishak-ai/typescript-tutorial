
/*Challenge: BankAccount Class with Getters and Setters
Create a BankAccount class with the following requirements:
Private property _balance of type number, initialized to 0.
Getter balance that returns the current balance.
Setter balance that allows you to set the balance only if the new value is greater than or equal to 0.
If someone tries to set a negative balance, throw an error or print a warning.
A method deposit(amount: number) that adds to the balance.
A method withdraw(amount: number) that subtracts from the balance only if enough funds exist; otherwise print "Insufficient funds".
*/

class BankAccount {
  private _balance: number = 0;

  constructor(initialBalance?: number) {
    if (initialBalance && initialBalance >= 0) {
      this._balance = initialBalance;
    }
  }

  get balance(): number {
    return this._balance;
  }

  set balance(newBalance: number) {
    if (newBalance < 0) {
      console.log("The balance must be greater than or equal to zero.");
    } else {
      this._balance = newBalance;
    }
  }

  deposit(amount: number) {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this._balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount: number) {
    if (amount > this._balance) {
      console.log("Insufficient funds");
    } else if (amount <= 0) {
      console.log("Withdraw amount must be positive.");
    } else {
      this._balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this._balance}`);
    }
  }
}

// Usage example
const account = new BankAccount(1000);
account.deposit(500);   // Deposited 500. New balance: 1500
account.withdraw(200);  // Withdrew 200. New balance: 1300
account.balance = -50;  // The balance must be greater than or equal to zero.
console.log(account.balance); // 1300

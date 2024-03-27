//4. Write a JavaScript program that creates a class called "BankAccount" with 
//properties for account number and balance. Include methods to deposit and withdraw money from
// the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
      } else {
        console.log("Deposit amount must be greater than 0.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
      } else {
        console.log("Insufficient funds or invalid amount for withdrawal.");
      }
    }
  
    displayBalance() {
      console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
    }
  }
  
  // Creating instances of BankAccount
  const account1 = new BankAccount("001", 1000);
  const account2 = new BankAccount("002", 5000);
  
  // Depositing money
  account1.deposit(500);
  account2.deposit(1000);
  
  // Withdrawing money
  account1.withdraw(200);
  account2.withdraw(3000);
  
  // Displaying balance
  account1.displayBalance();
  account2.displayBalance();
  
//9. Write a JavaScript program that creates a class called Bank with properties for bank names and branches. 
//Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class
// and perform operations to add and remove branches.


class Bank {
    constructor(bankName) {
      this.bankName = bankName;
      this.branches = [];
    }
  
    addBranch(branchName) {
      if (!this.branches.includes(branchName)) {
        this.branches.push(branchName);
        console.log(`Branch '${branchName}' added to ${this.bankName}.`);
      } else {
        console.log(`Branch '${branchName}' already exists in ${this.bankName}.`);
      }
    }
  
    removeBranch(branchName) {
      const index = this.branches.indexOf(branchName);
      if (index !== -1) {
        this.branches.splice(index, 1);
        console.log(`Branch '${branchName}' removed from ${this.bankName}.`);
      } else {
        console.log(`Branch '${branchName}' does not exist in ${this.bankName}.`);
      }
    }
  
    displayBranches() {
      console.log(`Branches of ${this.bankName}:`);
      if (this.branches.length === 0) {
        console.log("No branches found.");
      } else {
        this.branches.forEach(branch => console.log(branch));
      }
    }
  }
  
  // Create an instance of bank
  const myBank = new Bank("MyBank");
  
  // Add branches
  myBank.addBranch("Main Branch");
  myBank.addBranch("Downtown Branch");
  myBank.addBranch("East Branch");
  
  // Display branches
  myBank.displayBranches();
  
  // Remove a branch
  myBank.removeBranch("Downtown Branch");
  
  // Display branches again
  myBank.displayBranches();
  



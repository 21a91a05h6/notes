// Account Class (Base Class)
export class Account {
    constructor(name, balance) {
      this.name = name;
      this.balance = balance;
    }
  
    // Method to add interest, to be overridden by subclasses
    addInterest() {
      console.log("This method should be overridden by subclasses.");
    }
  }
  
  // SavingsAccount Class (Subclass)
  export class SavingsAccount extends Account {
    constructor(name, balance) {
      super(name, balance);  // Call the superclass constructor
    }
  
    // Override the addInterest method to apply 1.4 multiplier
    addInterest() {
      this.balance *= 1.4;
      console.log(`Interest added! New balance: ${this.balance}`);
    }
  }
  
  // CurrentAccount Class (Subclass)
  export class CurrentAccount extends Account {
    constructor(name, balance) {
      super(name, balance);  // Call the superclass constructor
    }
  
    // Override the addInterest method to apply 1.1 multiplier
    addInterest() {
      this.balance *= 1.1;
      console.log(`Interest added! New balance: ${this.balance}`);
    }
  }
  
  // Example Usage
  
  // Create a SavingsAccount instance
//   const savings = new SavingsAccount('Alice', 1000);
//   console.log(`Initial Savings Balance: ${savings.balance}`);
//   savings.addInterest();  // Adds interest to savings account
  
//   // Create a CurrentAccount instance
//   const current = new CurrentAccount('Bob', 2000);
//   console.log(`Initial Current Balance: ${current.balance}`);
//   current.addInterest();  // Adds interest to current account

export default { Account, SavingsAccount, CurrentAccount };
  
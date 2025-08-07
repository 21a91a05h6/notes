// Assuming the previous classes (Account, SavingsAccount, CurrentAccount) are already defined

// TestInheritance.js

// Create instances of Account, SavingsAccount, and CurrentAccount
import {Account} from './SavingsAccount.js';
import {SavingsAccount} from './SavingsAccount.js';
import {CurrentAccount} from './SavingsAccount.js';
const account = new Account('General Account', 2);
const savings = new SavingsAccount('Alice', 4);
const current = new CurrentAccount('Bob', 6);

// Declare an array to store these objects
const accounts = [account, savings, current];

// Loop through the array and call addInterest on each account
accounts.forEach(account => {
  console.log(`Before adding interest: ${account.name} balance is ${account.balance}`);
  account.addInterest();
  console.log(`After adding interest: ${account.name} balance is ${account.balance}`);
});

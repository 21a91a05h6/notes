import {Account} from './Account.js';
import {ArrayClass} from './arrayclass.js';
let myaccount = new Account('Bob', 10000);
console.log(myaccount.name,myaccount.balance);
myaccount.addinterest();
console.log(myaccount.balance)

let mynames=new ArrayClass();
mynames.addName('Bob','Alice','Charlie','Megan');
console.log(mynames.getNames());
mynames.addBalance(1000,2000,3000,4000);
console.log(mynames.getAmounts());
mynames.addInterestToBalances();
console.log(mynames.getInterestAmounts());
export class Account{
    constructor(name,balance){
        this._name=name;
        this._balance=balance;
    }
    get name(){
        return this._name;
    }
    get balance(){
        return this._balance;
    }
    set name(newName){
        if(newName){
            this._name = newName;
        }
    }
    set balance(newBalance){
        if(newBalance >= 0){
            this._balance = newBalance;
        }
    }
    addinterest(){
        this._balance += this._balance * 0.10; // Adding 10% interest
    }
}
// let acc1=new Account('Bob',10000)
// console.log(acc1.name, acc1.balance);
export default Account;
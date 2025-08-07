export class ArrayClass{
    constructor(){
        this._names=[];
        this._amounts=[];
        this._interestamounts=[];
    }
    addName(...names /*name*/){
        // if(name && typeof name==='string'){
        //     this._names.push(name);
        // }
        names.forEach(name => {
            if(name && typeof name === 'string'){
                this._names.push(name);
            }
        });
    }
    addBalance(...amounts /*amount*/){
        // if(typeof amount==='number' && amount>=0){
        //     this._amounts.push(amount);
        // }
        amounts.forEach(amount => {
            if(typeof amount === 'number' && amount >= 0){
                this._amounts.push(amount);
            }
        });
    }
    getNames(){
        return `The names are ${this._names.join(',')}`;
    }
    getAmounts(){
        return `The amounts are ${this._amounts.join(',')}`;    
    }
    getInterestAmounts(){
        return `The interest amounts are ${this._interestamounts.join(',')}`;
    }
    addInterestToBalances(){
        this._interestamounts = this._amounts.map(amount => {
            if (typeof amount === 'number' && amount >= 0) {
                return amount + amount * 0.10; // Adding 10% interest
            }
            return amount; // Return the original amount if it's not valid
        });
    }
}
export default ArrayClass;
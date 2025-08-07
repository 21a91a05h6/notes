let make='toyota Camry';
let model='2023';
let engineSize=2.5;
let gear=3;
console.log(`The make is ${make} The gear is ${gear} The engine is ${engineSize}`)
if(engineSize<1.3){
    console.log('Weak')
}else{
    console.log('Strong')
}
c=0
for (let i=1900; i<=2000;i++){
    if(i%4==0 && i%100!=0 || i%400==0){
        if(c==5) break; // Limit to 5 leap years
        console.log(`${i} is a leap year`)
        c++;
    }
}

switch(gear){
    case 1:
        console.log('speed limit is 10km/h');
        break;
    case 2:
        console.log('speed limit is 20km/h');
        break;
    case 3:
        console.log('speed limit is 30km/h');
        break;
    case 4:
        console.log('speed limit is 40km/h');
        break;
    case 5:
        console.log('speed limit is 50km/h');
        break;
    default:
        console.log('Invalid gear');
        break;
}
r=[]
co=0
for(j=1900; j<=2000; j++){
    if(j%4==0 && j%100!=0 || j%400==0){
       if (co>=10) break; // Limit to 10 leap years
       r.push(j);
       co++
    }
}
for ( k in r){
    console.log(k,r[k])
}
function* even_numbers(){
    // yield 0;
    // yield 2;
    // yield 4;
    let i=0;
    while(true){
        yield i++*2;
    }
}
let g=even_numbers();
console.log(g.next()); 
console.log(g.next()); 
console.log(g.next()); 
console.log(g.next()); 
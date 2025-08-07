p='The galaxy we call home, the Milky Way, is just one of billions in the vast cosmos. Stretching over 100,000 light-years, it’s a swirling spiral of stars, gas, dust, and dark matter, each component working in harmony to create a breathtaking cosmic dance. Within its arms, stars are born and die, their life cycles shaping the evolution of the galaxy itself. But the Milky Way is not alone. Across the universe, there are galaxies of all shapes and sizes—elliptical galaxies that are older and more stable, and irregular galaxies that defy neat classification. Some of these galaxies are colliding, merging in slow-motion cosmic collisions that can take billions of years. These galactic encounters can trigger new star formation or reshape the very structure of the galaxies involved. The true scale of the universe, with its countless galaxies, is almost unfathomable, leaving us with a profound sense of both insignificance and wonder as we gaze at the stars.'
s=p.split('.')// i want number of words in these sentences
console.log(s.length) // This will give the number of sentences
//console.log(s) // This will log the sentences as an array
let c=0
for(let i in s){
    let words=s[i].trim().split(' ')
    c+=words.length
    //console.log(words.length)
}
console.log(c)
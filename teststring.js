s='example.doc'
s=s.replace(/\.doc$/, '.bak'); // This will replace the .doc extension with .bak
// This will not change the original string since strings are immutable in JavaScript
console.log(s)

sentence = 'the quick brown fox swallowed down the lazy chicken';
s1='ow'
console.log(sentence.split(s1))
c=sentence.split(s1).length-1;
console.log(c)

s2='Live not on evil'
s2=s2.toLowerCase().replace(/ /g, ''); // This will remove spaces
l=s2.toLowerCase().replace(/ /g, ''); // This will remove spaces and convert to lowercase
s3=l.split(' ').reverse().join(' ');
console.log(s3)
console.log(s2==s3) // This will reverse the string 'Live not in evil'

s4='madam'
s5=s4.split('').reverse().join('');
console.log(s4==s5) // This will check if 'madam' is a palindrome

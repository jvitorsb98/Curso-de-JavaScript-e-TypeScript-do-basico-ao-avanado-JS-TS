let string1 = "Um texto";
console.log(string1[4])

console.log(string1.concat(" novo"));
console.log(string1 + " novo");
console.log(`${string1} novo`);
console.log(string1.lastIndexOf("te",4));
console.log(string1.match(/[a-z]/g))

console.log(string1.replace("Um","Outro"))
let string2 = "O rato reou a roupa do rei de roma.";
console.log(string2.replace(/r/g,'#'))
console.log(string2.length)
console.log(string2.slice(2,6))
console.log(string2.slice(-5,string2.length-1))
console.log(string2.substring(string2.length-5))
console.log(string2.split(" "))
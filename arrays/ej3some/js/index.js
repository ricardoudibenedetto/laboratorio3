let array = ["juan", "ana", "julia", "adrian", "lucia"];
//some (recive callback, lo que retorna es un booleano)y every(si para todos los elementos fue true)

console.log(array.some(elemento => elemento === "julia"));

console.log(array.every(elemento => elemento.includes('a')));
console.log(array.every(elemento => elemento.length > 2));
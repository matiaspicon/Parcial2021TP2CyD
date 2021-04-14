/**
 * Dado un array de numeros enteros, complete las funciones para que retorne un array conteniendo 
 * solo los numeros pares y solo numeros impares respectivamente
 */

const even = function(numbers){
    const even = []
    numbers.map(number =>{
        if(number%2 == 0) even.push(number)})
    return even;   
}

const odd = function(numbers){
    const odd = []
    numbers.map(number =>{
    if(number%2 != 0) odd.push(number)})
    return odd;   
}


// TESTS (no modificar)
const arrEqual = (a1,a2) => JSON.stringify(a1) == JSON.stringify(a2);
console.log(arrEqual(even([4,2,6,1,0,2,5]),[4,2,6,0,2]));
console.log(arrEqual(odd([4,2,6,1,0,2,5]),[1,5]));

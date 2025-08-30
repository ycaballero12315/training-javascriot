
sum = (arr)=>{
    return arr.reduce((a,b)=>a+b,0);
}
console.log(sum([1,2,3,4,5]));


result = (f) =>{
    f instanceof String;
}
console.log(result("hello"));

let numeros = [1, 2, 3, 4, 5];
let pares = numeros.filter(num => num % 2 === 0);
console.log(pares);

let result1 = (f) => f.indexOf('JavasCript') !== -1;
console.log(result1('JavasCript es genial'));

let x = 10;
function test() {
    let x = 20;
    console.log(x);
}
test();
console.log(x);
let a;
console.log(a);
let b = null;
console.log(a==b);
console.log(a===b)

let result_list = arr=> arr.filter(elem => elem.length > 3);

let arr = ['Yoen', 'Dunia', 'du'];
console.log(result_list(arr));

let other_result = arr => {
    let result = [];
    arr.forEach(element => {
        if (element.length > 3){
            result.push(element)
        }
    });
    return result
}
console.log(`este es de foreach ${other_result(arr)}`)

let objeto = {
    nombre: "Pedro",
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};
objeto.saludar();

console.log(y);
var y = 5;
console.log(y);
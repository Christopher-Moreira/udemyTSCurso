let numbers = [1, 2, 3, 4, 5];
numbers.push(5);
console.log(numbers[0]);
const nomes = ["Chris", "Joao"];
const nums = [100, 2209];
nums.push(300);
console.log(nums);
console.log(nums[0]);
//3 - any
const arr1 = [1, "teste", true, [], { nome: "Chris" }];
arr1.push([1, 2, 3]);
console.log(arr1);
//4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
//5 - retorno de funcao
function greeting(name) {
    //return 5 <-- erro
    return `ola ${name}`;
}
console.log(greeting("chris"));
//console.log(greeting(1))
//6 - funcao anonima
setTimeout(function () {
    const sallary = 1000;
    //console.log(parseFloat(sallary)) <-- erro tipagem
    //console.log(sallary)
}, 2000);
// 7 - tipos de objeto
function passCoordinates(coord) {
    console.log("x coordinates: " + coord.x);
    console.log("y coordinates: " + coord.y);
}
const objCoord = { x: 12, y: 32.3 };
passCoordinates(objCoord);
//passCoordinates(1,1)
const pessoaObj = { nome: "chris", surname: "moreira" };
console.log(pessoaObj);
// 8 -  propriedades opcionais
function showNumbers(a, b, c) {
    console.log("a: " + a);
    console.log("b: " + b);
    if (c) { //validador
        console.log("c: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
//showNumbers(34)
//9 - validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return console.log(`ola, ${firstName} ${lastName}, tudo bem?`);
    }
    return `ola, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("chris", "moreira"));
console.log(advancedGreeting("joao"));
//10 - union type
function showBalance(balance) {
    console.log(`o saldo da conta e R$${balance}`);
}
showBalance(100);
showBalance("500");
//showBalance(true)
const arr2 = [1, "teste", true];
console.log(arr2);
// 11 - avancando em union types
function showUserRole(role) {
    if (typeof role == "boolean") {
        return "usuario nao aprovado";
    }
    return `a funcao do user e: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`o id e: ${id}`);
}
showId(1);
showId("200");
showId(123);
function showCoords(obj) {
    console.log `x:${obj.x} y:${obj.y} z:${obj.z}`;
}
const coordObj = {
    x: 12,
    y: 25,
    z: 123,
};
showCoords(coordObj);
const somePerson = { name: "chris", age: 30 };
console.log(somePerson);
//type personType = {
//    age:number
//  }
//15 - literal types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`a direcao e: ${direction}`);
}
showDirection("left");
//showDirection("top")
// 16 - no null assertion operators
const p = document.getElementById("some-p");
console.log(p.innerText);
// es2020
//17 - big int
let n;
//n = 1
n = 1000n;
console.log(n);
console.log(typeof (n));
console.log(n + 100n);
//18 symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
export {};
//# sourceMappingURL=index.js.map
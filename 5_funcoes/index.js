//  1 - void
function withoutReturn() {
    console.log("essa funcao n tem retorno");
    //return 1
}
withoutReturn();
// 2 - callback como arugmento
function greeting(name) {
    return `ola ${name}`;
}
function preGreeting(f, userName) {
    console.log("preparando a funcao");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "chris");
preGreeting(greeting, "teste");
//preGreeting(greeting, 123)
// 3 - generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
//console.log(firstElement("aaaa")
function mergeObejcts(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObejcts({ name: "chris" }, { age: 30, job: "progammer" });
console.log(newObject);
//4 - constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "15"));
//console.log(biggestNumber("12", 3))
// 5 - especificar tipo de argumento
function mergeArray(arr1, arr2) {
    return arr1.concat(arr2);
}
//console.log(mergeArray([1,2.3], ["teste", "testeando"]))
console.log(mergeArray([1, 2.3], [4, 5, 6]));
console.log(mergeArray([1, 2.3], ["teste", "testando"]));
//6 - parametros opcionais
function modernGretting(name, greet) {
    if (greet) {
        return `ola ${greet} ${name}, tudo bem?`;
    }
    return `ola ${name}, tudo bem?`;
}
console.log(modernGretting("chris"));
console.log(modernGretting("chris", "sr")); //<-- alinhado na ordem definida na funcao
//7 - parametro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(15, 12));
//8 - unkwown
function doSomething(x) {
    //console.log(x[0])
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("x e um numero");
    }
}
doSomething("1");
doSomething([1, 2, 3]);
doSomething(1);
//9 -  never
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage("algum erro")
//10 - rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5, 6));
console.log(sumAll(3, 123, 41, 23, 123));
//console.log(sumAll("teste"))
//11 - destructuring como paramentro
function ShowProdutcDetails({ name, price }) {
    return `o nome do produto e ${name} e ele custa R$${price}`;
}
const shirt = { name: "camisa", price: 49.99 };
console.log(ShowProdutcDetails(shirt));
export {};
//console.log(ShowProdutcDetails({name:"teste", age: 30}))
//console.log(ShowProdutcDetails([1,2,34]))
//# sourceMappingURL=index.js.map
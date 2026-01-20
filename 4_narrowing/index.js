// 1 - type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else
        (console.log("impossivel realizar soma"));
}
sum("4", "59");
sum(12, 43.2);
sum("5", 6);
//2 - checando se valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("por favor, defina uma operacao");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([45, 45], "multiply");
//3 - instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("jhon");
const paul = new SuperUser("paul");
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`ola ${user.name}, deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`ola ${user.name}`);
    }
}
userGreeting(jhon);
userGreeting(paul);
//4 - Operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("turca");
const bob = new Dog("bob", "pastor alemao");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(` o cachorro e da raca ${dog.breed}`);
    }
    else
        (console.log(` o cachorro e um srd`));
}
showDogDetails(turca);
showDogDetails(bob);
export {};
//# sourceMappingURL=index.js.map
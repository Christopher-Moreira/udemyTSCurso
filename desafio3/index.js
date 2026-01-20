class User {
    constructor(name, note) {
        this.name = name;
        if (note) {
            this.note = note;
        }
    }
}
function verificarNotaLimite(numero) {
    const limite = 5;
    if (numero > limite) {
        console.log(`as notas so podem ir ate ${limite}!`);
        return false;
    }
    return true;
}
//console.log(verificarNotaLimite(3))
//console.log(verificarNotaLimite(6))
function showUserGrading(user) {
    if ('note' in user && typeof user.note === 'number'
        && verificarNotaLimite(user.note)) {
        console.log(`a nota do usuario ${user.name} e ${user.note}!`);
    }
    else if ('note' in user) {
    }
    else {
        console.log(`o usuario nao deixou nota.`);
    }
}
showUserGrading(new User("chris", 1));
showUserGrading(new User("chris", 2));
showUserGrading(new User("chris", 3));
showUserGrading(new User("chris", 4));
showUserGrading(new User("chris", 5));
showUserGrading(new User("chris", 6));
showUserGrading(new User("chris"));
export {};
//# sourceMappingURL=index.js.map
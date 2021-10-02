//Prototype

function Hero(name) {
    this.name = name;
}

Hero.prototype.saludar = function() {
    console.log(`New:  ${this.name}`);
}

const zelda = new Hero("Zelda");
console.log('Name: ', zelda.name);
console.log('zeldaHasOwnProperty')
const prototypeOfZelda = Object.getPrototypeOf(zelda);

Hero.prototype.fight = function() {
    console.log("FIGHT!");
} 



// Herencia Prototype

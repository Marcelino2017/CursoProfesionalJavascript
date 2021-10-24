//Boolean
 let muted: boolean = true;
muted = false;

//Nú,eros
let age = 6
let numerador = 42;
let deniminador: number = age;
let resultado = numerador / deniminador;

//String
let nombre:string = 'Richar';
let saludo = `me llamo ${nombre}`;

//areglos
let people: string[] = [];
people = [ "isabel", "Nicole", "Raul"];
//people.push("900");

//arrar tipo string y number
let peopleAndNumber: Array <string | number> = [];
peopleAndNumber.push("Marcelino");
peopleAndNumber.push(900);

// Enum
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
    Amarillo = 'Amarillo',
}
  
let colorFavorito: Color = Color.Amarillo;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = 'Joker';
comodin = { type: 'Wildcard' };

// Object
let someObject: object = { type: 'Wildcard' };

// Funciones
function add(a: number, b: number): number {
    return a + b;
}
  
const sum = add(4, 6);

function createAdder(a: number): (number) => number {
    return function(b: number) {
        return b + a;
    };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName: string = 'Smith'): string {
return `${firstName} ${lastName}`;
}

const richard = fullName('Agente');
console.log(richard);

// Interfaces
/* enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
} */


interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color;
}

let rect: Rectangulo = {
     ancho: 4,
     alto: 6
}

function area(r: Rectangulo): number {
     return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect.toString());
 
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
  
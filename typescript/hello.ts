

function holaMundo(monto: number | string): string {
    let hola: string | any;
    return monto.toString();
}

let mensaje: string;
//array
let array: number[];
//tupla
let tupla: [number, string, [number, string]] = [1, "lala", [2, "string"]];

enum Eheroe {
    xmen,
    avenger
}


for (let key in Eheroe) {
    console.log(key);
}


let funcionEnviarMision2 = function (...heroes: string[]) {
    for (let i = 0; i < heroes.length; i++) {
        console.log(`${heroes[i]} enviado`);
    }
}

funcionEnviarMision2("spiderman", "superman", "tuhermanagirl");

//funcion Flecha

let funcionEnviarMision3 = (heroe: string = "Heroe"): string => {
    return `${heroe} enviado a la mision 3`;
}

console.log(funcionEnviarMision3());

let flas: { nombre: string, edad: number, poderes: string[], getNombre: () => string } =
{
    nombre: "joseEnrrique",
    edad: 24,
    poderes: ["corre", "viaja en el roca comodo"],
    getNombre() {
        return this.nombre;
    }
}

//tipo personalizado 
type Heroe = {
    nombre: string,
    edad: number,
    poderes?: string[],
    getNombre: () => string
};


let ironman: Heroe = {
    nombre: "tony stark",
    edad: 84,
    getNombre: function () { return this.nombre }
};

console.log(ironman.getNombre());


//interfaces
interface IHeroe {
    nombre: string,
    poder?: string,
    mostrar?(): string
}

let gepardo: IHeroe = {
    nombre: "James"
};

console.log(gepardo.nombre);


//interfaces en clases 
class Avenger implements IHeroe {
    nombre: string = "un avenger";

    constructor(nombre:string) {
        this.nombre = nombre;
    }
}

class Mutante implements IHeroe {
    nombre: string = "un mutante"
}

let unAvenger = new Avenger("hulk");
let unMutante = new Mutante();

console.log(unMutante.nombre);


//interace en funcion
interface IFuncDosNumeros {
    (num1: number, num2: number): number;
}

let mifuncion: IFuncDosNumeros;
mifuncion = (num1, num2) => num1 + num2;

console.log(mifuncion(2,98));

//clases
let av2 = new Avenger("hombre hormiga");
console.log(av2.nombre);

class Avenger3 {
    private _nombre:string = "un av";
    private _edad : number = 23;

    constructor(nombre:string) {
        this._nombre = nombre;
    }

    get edad():number{return this._edad;}
    set edad(e:number){this._edad = e;}

    public mostrar = ()=>this._nombre;

}

let av3 = new Avenger3("joseEnrique");

av3.edad = 82;
console.log(av3.mostrar());
console.log(av3.edad);


class Xmen{
    static nombreDeClase = "Xmen";
}

console.log(Xmen.nombreDeClase);

//herencia 
class AvengerHeredado extends Avenger3{

}

let avH = new AvengerHeredado("cocacola");

console.log(avH.mostrar());

//herencia2
class AvengerHeredado2 extends Avenger3{
    edad:number = 0;
    constructor(nombre:string, edad:number){
        super(nombre)
        this.edad = edad;
    }
}

let av5: AvengerHeredado2 = new AvengerHeredado2("rigoberto",23);

console.log(`Avenger ${av5.mostrar()}, edad: ${av5.edad}`);

//namespaces

namespace Funciones{
    export function f1(){
        console.log("soy f1");
    }
    export function f2(){
        console.log("soy f2");
    }
}

Funciones.f1();
Funciones.f2();

$(function(){
    console.log("ready");
})


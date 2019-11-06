

function holaMundo(monto: number | string): string {
    let hola : string | any;
    return monto.toString();
}

let mensaje : string;
//array
let array : number[];
//tupla
let tupla : [number, string, [number, string]] = [1,"lala",[2, "string"]]; 

enum Eheroe{
    xmen,
    avenger
}


for(let key in Eheroe) {
    console.log(key);
}



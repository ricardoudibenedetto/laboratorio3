namespace Clases{
    export class BienRaiz extends Anuncio{
        public compraOAlquiler: string;
        public precio: number; 
        public baños: number; 
        public dormitorios: number; 
        public garage: number; 
        public descripcion: string; 
    
        constructor(id: number, titulo: string, coa: string, precio: number, baño: number, dormitorio: number, garage: number, descripcion: string ){
            super(id, titulo);
            this.compraOAlquiler = coa;
            this.precio = precio;
            this.baños = baño;
            this.dormitorios = dormitorio;
            this.garage = garage;
            this.descripcion = descripcion;
        }
    
    
    }
}
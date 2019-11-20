class Anuncio {
    private titulo: string;
    private imagen: string;
    private compraOAlquiler: string;
    private precio: number; 
    private baños: number; 
    private dormitorios: number; 
    private garage: number; 
    private descripcion: string; 
    
    constructor(titulo: string, img: string, coa: string, precio: number, baño: number, dormitorio: number, garage: number, descripcion: string ){
        this.titulo = titulo;
        this.imagen = img;
        this.compraOAlquiler = coa;
        this.precio = precio;
        this.baños = baño;
        this.dormitorios = dormitorio;
        this.garage = garage;
        this.descripcion = descripcion;
    }
};
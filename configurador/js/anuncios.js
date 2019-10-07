let anuncios = [];

function Anuncio(titulo, img, coa, precio, baño, dormitorio, garage, descripcion) {
    this.titulo = titulo;
    this.imagen = img;
    this.compraOAlquiler = coa;
    this.precio = precio;
    this.baños = baño;
    this.dormitorios = dormitorio;
    this.garage = garage;
    this.descripcion = descripcion;
};
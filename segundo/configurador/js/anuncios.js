let anuncios = [/* {id:1,titulo:"Casa de lujo", coa:"compra",precio:"1500",baños:"2",dormitorios:"2",garage:"1",descripcion:"alta casa wachen"} */];

function Anuncio(id,titulo, coa, precio, baño, dormitorio, garage, descripcion) {
    this.id = id;
    this.titulo = titulo;
    this.compraOAlquiler = coa;
    this.precio = precio;
    this.baños = baño;
    this.dormitorios = dormitorio;
    this.garage = garage;
    this.descripcion = descripcion;
};
let iva = 0.19;
let precioFinal;

function calcularIva(precio){
    let ivaProducto = preio * iva;
    console.log(`el IVA del producto es ${ivaProducto}`)
    precioFinal = precio - ivaProducto;
}


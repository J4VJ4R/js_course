const iva = 19;

let productos = {};

let subtotal = 0;

let totalIva = 0;

let total = 0;

function agregarProductos(nombre, precio, descuento){
    let ivaProducto = calcularIva(precio);
    let descuento = 
}

function calcularIva(precio){
    let ivaProducto = precio * (iva/100);
    totalIva = totalIva + ivaProducto;
    return ivaProducto;
}

function calcularDescuento(descuento){
    let descuento;
    switch(descuento){
        case 1:
            descuento = precio * (0.10);
            break;
        case 2:
            descuento = precio * (0.05);
            break;
        default:
            descuento = precio * (0.03);
            break;

    }
    return descuento;
}
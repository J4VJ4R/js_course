const iva = 19;

let productos = {};

let subtotal = 0;

let totalIva = 0;

let total = 0;

function agregarProductos(nombre, precio, descuento){
    let precioDescuento;
    let descuento;
    let ivaProducto;
    if(descuento){
         descuento = calcularDescuento(descuento, precio)
         precioDescuento = precio - descuento;
    }
    
    if(precioDescuento){
        ivaProducto = calcularIva(precioDescuento)
        subtotal = subtotal + precioDescuento;
    }else{
        ivaProducto = calcularIva(precio)
    }

    const productos = {
        nombre: nombre,
        precio,
        precioFinal: precioDescuento ? precioDescuento : undefined,
        valorIva: (ivaProducto
    };
};

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
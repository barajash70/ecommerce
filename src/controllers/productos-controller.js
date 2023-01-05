import { productoServicios } from "../servicios/productos-servicios.js";

const nuevoProducto = (nombre, price, imageurl) => {
    const card = document.createElement("div");
    const contenido = `
   
    <img src="${imageurl}" alt="">
    <p class="mt-4">${nombre}</p>
    <p class="font-bold">${price}</p>
    <p class="font-bold text-blue-700">Ver producto</p>
    `

    card.innerHTML = contenido;
    card.classList.add("product-titulo");
    card.classList.add("text-black");
    return card
}

const producto = document.querySelector("[datos-productos]");

const render = async () => {
    try {
        const listaProductos = await productoServicios.listaProductos();



        listaProductos.forEach(elemento => {
            producto.appendChild(nuevoProducto(elemento.nombre, elemento.price, elemento.imageUrl))
        });
    }
    catch (error) {
        console.log(error)
    }
}

render()


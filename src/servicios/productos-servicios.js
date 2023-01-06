
// fetch captura la informacion
const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());

const listaConsolas = () => fetch("http://localhost:3000/consola").then(respuesta => respuesta.json());


const listaDiversos = () => fetch("http://localhost:3000/diversos").then(respuesta => respuesta.json());
export const productoServicios = {
    listaProductos, listaConsolas, listaDiversos,

}
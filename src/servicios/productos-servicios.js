
// fetch captura la informacion
const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());

export const productoServicios = {
    listaProductos


}
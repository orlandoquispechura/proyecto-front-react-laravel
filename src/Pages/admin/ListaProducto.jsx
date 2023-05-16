import { useEffect, useState } from "react";
import productoService from "../../services/productoService";

function ListaProducto() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function listarProductos() {
      const { data } = await productoService.listar();
      setProductos(data.data);
      console.log(data);
    }
    listarProductos();
  }, []);

  return (
    <>
      <h1>Lista de Productos</h1>
      <table
        border={1}
        style={{ margin: "auto", width: "80%", marginTop: "50px" }}
      >
        <thead>
          <tr>
            <td>ID</td>
            <td>IMAGEN</td>
            <td>NOMBRE</td>
            <td>OBSERVACION</td>
            <td>STOCK</td>
            <td>PRECIO</td>
            <td>CATEGORIA</td>
            <td>ESTADO</td>
            <td>GESTION</td>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td style={{textAlign:'center'}} >{ (!producto.imagen==null) ? <img src={producto.imagen} style={{borderRadius:'50%'}} width={50} height={50} />: <img src={'https://herracenter.com.ar/public/images/products/default.jpg'} style={{borderRadius:'50%'}} width={50} height={50} /> }</td>
              <td>{producto.nombre}</td>
              <td>{producto.observacion}</td>
              <td>{producto.stock}</td>
              <td>{producto.precio}</td>
              <td>{producto.categoria.nombre}</td>
              <td>{(producto.estado==1)? `Activo` : `Inactivo`}</td>
              <td>Edit | Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListaProducto;

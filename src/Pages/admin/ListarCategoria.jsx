import { useEffect } from "react";
import { useState } from "react";
import categoriaService from "../../services/categoriaService";

function ListarCategoria() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function listarCategoria() {
      const { data } = await categoriaService.listar();
      setCategorias(data);
      console.log(data);
    }
    listarCategoria();
  }, []);

  return (
    <>
        <h1>Lista de Categorias</h1>
      <table border={1} style={{ margin: "auto", width: "80%", marginTop:'50px' }}>
        <thead>
          <tr>
            <td>ID</td>
            <td>NOMBRE</td>
            <td>DESCRIPCION</td>
            <td>GESTION</td>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.id}>
              <td>{categoria.id}</td>
              <td>{categoria.nombre}</td>
              <td>{categoria.observacion}</td>
              <td>edit|delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListarCategoria;

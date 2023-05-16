import { useEffect, useState } from "react";
import clienteService from "../../services/clienteService";

function ListaCliente() {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    const listaClientes = async () => {
      const { data } = await clienteService.lista();
      console.log(data);
      setClientes(data);
    };
    listaClientes();
  }, []);

  return (
    <>
      <h1>Lista de Clientes</h1>
      <table
        border={1}
        style={{ margin: "auto", width: "80%", marginTop: "50px" }}
      >
        <thead>
          <tr>
            <td>ID</td>
            <td>NOMBRE</td>
            <td>APELLIDOS</td>
            <td>TELEFONO</td>
            <td>EMAIL</td>
            <td>CI - NIT</td>
            <td>GESTION</td>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.apellidos}</td>
              <td>{cliente.telefono}</td>
              <td>{cliente.email}</td>
              <td>{cliente.ci_nit}</td>
              <td>Edit | Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListaCliente;

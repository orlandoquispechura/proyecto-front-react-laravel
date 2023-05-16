import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import Perfil from "../Pages/Perfil";
import Header from "../components/Header";
import ListarCategoria from "../Pages/admin/ListarCategoria";
import ListaProducto from "../Pages/admin/ListaProducto";
import ListaCliente from "../Pages/admin/ListaCliente";


export default function MyRoutes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Perfil />} />

          <Route path="/admin/categoria" element={<ListarCategoria />} />
          <Route path="/admin/producto" element={<ListaProducto />} />
          <Route path="/admin/cliente" element={<ListaCliente />} />

          <Route path='*' element={ <h1 style={{ height:'80vh', color:'rgba(0,0,0,0.5)', display:'flex', justifyContent:'center', alignItems:'center'}} >PAGINA NO ENCONTRADA!!!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

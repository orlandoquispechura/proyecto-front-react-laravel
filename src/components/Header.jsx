import { NavLink } from "react-router-dom";
import "../Css/Header.css";

export default function Header() {
  return (
    <header>
      <NavLink style={{ textDecoration: "none", color: "#eee" }} to="/home">
        <h1>Logo Empresa</h1>
      </NavLink>
      <nav>
        <NavLink className="link-item" to="/admin/categoria">
          Categoria
        </NavLink>
        <NavLink className="link-item" to="/admin/producto">
          Producto
        </NavLink>
        <NavLink className="link-item" to="/admin/cliente">
          Cliente
        </NavLink>
        <NavLink className="link-item" to="/login">
          Login
        </NavLink>
        <NavLink className="link-item" to="/register">
          Registrar usuario
        </NavLink>
        <NavLink className="link-item" to="/profile">
          Perfíl de usuario
        </NavLink>
        <button
          className="link-item btn"
          onClick={() => confirm("Cerrar sesión??")}
        >
          <span>←</span>
        </button>
      </nav>
    </header>
  );
}

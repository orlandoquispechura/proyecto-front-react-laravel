import { useState } from "react";
import "../Css/Login.css";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errores, setErrores] = useState(false);
  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await authService.loginConLaravel({
        email: email,
        password: password,
      });
      console.log("trae", data.access_token);
      localStorage.setItem("access_token", data.access_token);
      navigate("/home");
    } catch (error) {
      setErrores(error.data.errors);
    }
  };

  return (
    <div className="container-full">
      <div className="container">
        <h1>Iniciar sesion</h1>
        <form
          className="formulario"
          onSubmit={(e) => {
            loginSubmit(e);
          }}
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="input-pass"
            autoComplete="off"
            type="email"
            name="email"
            placeholder="Ingrese su email"
            autoFocus="on"
            required
          />
          {errores.email}
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="input-pass"
            type="password"
            name="password"
            placeholder="************"
          />
          {errores.password}
          <button type="submit" className="boton-ingresar">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

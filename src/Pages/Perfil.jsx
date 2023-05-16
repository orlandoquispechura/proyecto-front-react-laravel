import { useEffect, useState } from "react";
import authService from "../services/authService";

export default function Perfil() {
  const [perfil, setPerfil] = useState();

  useEffect(() => {
    async function perfil() {
      const { data } = await authService.perfilConLaravel();
      setPerfil(data);
      console.log(data);
    }
    perfil();
  }, []);
  return (
    <>
      <h2>Perfil de usuario</h2>
      <h1>{perfil}</h1>
    </>
  );
}

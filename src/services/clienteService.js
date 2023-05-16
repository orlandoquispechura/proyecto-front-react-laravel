import api from "./api";

const clienteService = {
  lista: () => {
    return api.get("/cliente");
  },
  guardar: (datos) => {
    return api.post("/cliente", datos);
  },

  mostrar: (id) => {
    return api.get(`/cliente/${id}`);
  },
  actualizar: (id, datos) => {
    return api.put(`/cliente/${id}`, datos);
  },
  eliminar: (id) => {
    return api.delete(`/cliente/${id}`);
  },
};

export default clienteService;

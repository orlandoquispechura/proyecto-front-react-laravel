import api from "./api";

const productoService = {
  listar: () => {
    return api.get("/producto");
  },
  guardar: (datos) => {
    return api.post("/producto", datos);
  },
  mostrar: (id) => {
    return api.get(`/producto/${id}`);
  },
  actualizar: (id, datos) => {
    return api.put(`/producto/${id}`, datos);
  },
  eliminar: (id) => {
    return api.delete(`/producto/${id}`);
  },
};

export default productoService;

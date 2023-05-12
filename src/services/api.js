import axios from "axios";

const apiUrl = "http://127.0.0.1:8000/api";

const token = "TOKEN DE LARAVEL ********";

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: "application/json",

    // autorizacion
    Authorization: "Bearer " + token,
  },
  timeout: 30000,
  signal: AbortSignal.timeout(2000),
});

// capturar e interceptar errores 401, 403
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 401, 403
    if (error.response.status === 401) {
      // redireccionar al login
      console.log("ERROR EN EL INTERCEPTOR");
    }
    if (error.response.status === 403) {
      // redireccionar al login
    }
    /*
                        if(error.response.status === 408) {
                            alert("Excedio el tiempo")
                        }
                    */
    return Promise.reject(error);
  }
);

const apiService = {
  get: (apiUrl, params) => api.get(apiUrl, { params }),
  post: (apiUrl, data) => api.post(apiUrl, data),
  put: (apiUrl, data) => api.put(apiUrl, data),
  delete: (apiUrl) => api.delete(apiUrl),
};

export default apiService;

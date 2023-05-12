// import { useEffect, useState } from "react";
import "./App.css";
import MyRoutes from "./routers/MyRoutes";

function App() {
  // const ApiUrl = "http://127.0.0.1:8000/api/";
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   mostrarDatos();
  // }, []);
  // const mostrarDatos = () => {
  //   fetch(`${ApiUrl}articles`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       setArticles(data);
  //       console.log(data);
  //     });
  // };

  return (
    <>
      <MyRoutes />
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavH from "./components/navHorizontal/NavH";
import NavV from "./components/navVertical/NavV";
import Home from "./components/home/Home";
import Usuarios from "./components/usuarios/Usuarios";
import Add from "./components/add/Add";
import Mensajes from "./components/mensajes/Mensajes";

function App() {
  return (
    <div className="App">
      <>
        <NavH />
        <NavV />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/usuarios" element={<Usuarios />}></Route>
          <Route path="/agregar" element={<Add />}></Route>
          <Route path="/mensajes" element={<Mensajes />}></Route>
        </Routes>
      </>
    </div>
  );
}

export default App;

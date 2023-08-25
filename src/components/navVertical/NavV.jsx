import { Link } from "react-router-dom";
import "./navv.css";

const NavV = () => {
  return (
    <>
      <div className="Vnav">
        <Link to={"/usuarios"}>
          {" "}
          <div className="categorias">
            <i className="fa-solid fa-user-group"></i>
            <p>Usuarios</p>
          </div>
        </Link>
        <Link to={"/agregar"}>
          <div className="categorias">
            <i className="fa-solid fa-user-plus"></i>
            <p> +usuario</p>
          </div>
        </Link>
        <Link to={"/mensajes"}>
          <div className="categorias">
            <i className="fa-solid fa-envelopes-bulk"></i>
            <p>Mensajes</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavV;

import { Link } from "react-router-dom";
import "./navh.css";

const NavH = () => {
  return (
    <>
      <div className="Hnav">
        <Link to={"/"}>
          <div>
            <p>NombreEmpresa</p>
          </div>
        </Link>
        <div className="usuario">
          <p>Usuario</p>
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
    </>
  );
};

export default NavH;

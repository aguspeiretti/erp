import { Link } from "react-router-dom";
import tuLogo from "../../assets/logo2.gif";

import "./navh.css";

const NavH = () => {
  return (
    <>
      <div className="Hnav">
        <Link to={"/"}>
          <div className="imgContainer">
            <img src={tuLogo} alt="" />
          </div>
        </Link>
        <div className="usuario">
          <p className="username">Usuario</p>
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
    </>
  );
};

export default NavH;

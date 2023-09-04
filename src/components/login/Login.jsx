import "./login.css";
import logo from "../../assets/logo2.gif";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="loginContainer">
        <img src={logo} alt="" />

        <div className="loginDiv">
          <form className="loginForm">
            <div>
              <label>Email</label>

              <input name="email" />

              <label>Contraseña</label>

              <input type="password" name="password" />
            </div>

            <Link to={"/"}>
              {" "}
              <button type="submit">ingresar</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

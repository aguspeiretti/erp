import "./mensajes.css";
import foto from "../../assets/foto1.webp";

const Mensajes = () => {
  return (
    <>
      <div className="mensajeContainer">
        {" "}
        <div className="formulario">
          <div className="headMensaje">
            <h2>Nuevo mensaje</h2>
            <button>Usuarios</button>
            <button>Empresas</button>
          </div>
          <div className="formBox">
            <h3>Subir imagen</h3>
            <input type="file" />
            <div className="titular">
              <h3>Titular</h3>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </div>
        </div>
        <div className="vistaPrevia">
          <div className="cardEnvio">
            <div className="fotoNoticia">
              <img src={foto} alt="" />
            </div>
            <div className="banner">
              <div className="city">
                <p>Córdoba</p>
              </div>
              <div className="web">
                <p>
                  <i className="fa-solid fa-link"></i>MARCAINFORMATIVACBA.COM
                </p>
              </div>
            </div>
            <div className="tituloPrincipal">
              <h2>
                JUAN SCHIARETTI DIO POSITIVO DE COVID SUSPENDIO TODAS SUS
                ACTIVIDADES
              </h2>
            </div>
            <div className="footer">
              <div className="redes">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-solid fa-globe"></i>
                <p>marcainformativacba.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mensajes;

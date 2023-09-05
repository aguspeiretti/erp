import "./mensajes.css";
import foto from "../../assets/foto1.webp";
import { useState } from "react";
import TableEmpresa from "../tableEmpresa/TableEmpresa";
import Table from "../table/Table";

const Mensajes = () => {
  const [userM, setUserM] = useState(false);

  const handleMessage = () => {
    setUserM(!userM);
  };
  return (
    <>
      <div className="mensajeContainer">
        {" "}
        <div className="formulario">
          <div className="headMensaje">
            <h2>Nuevo mensaje</h2>
            <div>
              <button onClick={handleMessage}>Usuarios</button>
              <button onClick={handleMessage}>Empresas</button>
            </div>
          </div>
          <div className="formBox">
            {userM ? (
              <>
                <h3>Subir imagen</h3>
                <input type="file" />
                <div className="titular">
                  <h3>Titular</h3>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
              </>
            ) : (
              <>
                <h3>Agregar Links</h3>
                <div className="liksInput">
                  <input className="inputM" type="text" placeholder="Link" />
                  <button>Agregar</button>
                </div>
              </>
            )}
          </div>
          <div className="selector">{userM ? <Table /> : <TableEmpresa />}</div>
        </div>
        <div className="vistaPrevia">
          <div className="cardEnvio">
            {userM ? (
              <>
                <div className="fotoNoticia">
                  <img src={foto} alt="" />
                </div>
                <div className="banner">
                  <div className="city">
                    <p>Córdoba</p>
                  </div>
                  <div className="web">
                    <p>
                      <i className="fa-solid fa-link"></i>
                      MARCAINFORMATIVACBA.COM
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
              </>
            ) : (
              <>
                <div className="banner">
                  <div className="city">
                    <p>Córdoba</p>
                  </div>
                  <div className="web">
                    <p>
                      <i className="fa-solid fa-link"></i>
                      MARCAINFORMATIVACBA.COM
                    </p>
                  </div>
                </div>
                <div className="titulo2">
                  <h1>Links con acceso a fotos para redes sociales</h1>
                </div>
                <div>
                  <div className="linkDrive">
                    <p>link:</p>
                    <a href="#">http://linkAunArchivoDrive.com</a>
                  </div>
                  <div className="linkDrive">
                    <p>link:</p>
                    <a href="#">http://linkAunArchivoDrive.com</a>
                  </div>
                  <div className="linkDrive">
                    <p>link:</p>
                    <a href="#">http://linkAunArchivoDrive.com</a>
                  </div>
                  <div className="linkDrive">
                    <p>link:</p>
                    <a href="#">http://linkAunArchivoDrive.com</a>
                  </div>
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
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mensajes;

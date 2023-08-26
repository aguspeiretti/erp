import "./mensajes.css";
import us2 from "../../assets/us2.png"
import { useState } from "react";

const Mensajes = () => {

  const [msj , setMsj]= useState(false)

  const handleMsj = ()=>{
    setMsj(!msj)
  }

  return (
    <>
      <div className="mensajesContainer">
        <div className="selectorContainer">
          <button onClick={handleMsj}>E-MAIL</button>
          <button onClick={handleMsj}>WHATSAPP</button>
        </div>
        <div className="seletionContainer">
         {
          msj ? <>
           <div className="selectionInputs">
            <h2 className="email">Envio e-mail</h2>
            <label>asunto</label>
            <input name="last_name" />
            <label>Mensaje</label>
            <textarea name="" id="" cols="60" rows="20"></textarea>
          </div>
          <div className="selectionUsers">
            <img src={us2} alt="" />
          </div>
          </>: <>
          <div className="selectionInputs">
            <h2 className="whatsapp">Envio Whatsapp</h2>
            
            <label>Mensaje</label>
            <textarea name="" id="" cols="60" rows="20"></textarea>
          </div>
          <div className="selectionUsers">
            <img src={us2} alt="" />
          </div>
          </>
         }
        </div>
      </div>
      ;
    </>
  );
};

export default Mensajes;

import "./mensajes.css";

const Mensajes = () => {
  return (
    <>
      <div className="mensajesContainer">
        <div className="selectorContainer">
          <button>E-MAIL</button>
          <button>WHATSAPP</button>
        </div>
        <div className="seletionContainer">
          <div className="selectionInputs">
            <label>asunto</label>
            <input name="last_name" />
            <label>Mensaje</label>
            <textarea name="" id="" cols="60" rows="20"></textarea>
          </div>
          <div className="selectionUsers"></div>
        </div>
      </div>
      ;
    </>
  );
};

export default Mensajes;

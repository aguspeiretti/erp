import "./form.css";

function FormR() {
  return (
    <>
      <form>
        <li>
          <label>Nombre</label>
          <input className="inputForm" type="text" name="userName" id="" />
        </li>
        <li>
          <label>Apellido</label>
          <input className="inputForm" type="text" name="userName" id="" />
        </li>
        <li>
          <label>Provincia</label>
          <input className="inputForm" type="text" name="userName" id="" />
        </li>
        <li>
          <label>Ciudad</label>
          <input className="inputForm" type="text" name="userName" id="" />
        </li>
        <li>
          <label>Telefono</label>
          <input className="inputForm" type="text" name="userName" id="" />
        </li>
        <li>
          <label>Edad</label>
          <input className="inputForm" type="number" name="userName" id="" />
        </li>
        <li>
          <label>Filtro</label>
          <input className="inputForm" type="number" name="userName" id="" />
        </li>
        <li className="buttonContainer">
          <button>Agregar</button>
        </li>
      </form>
    </>
  );
}

export default FormR;

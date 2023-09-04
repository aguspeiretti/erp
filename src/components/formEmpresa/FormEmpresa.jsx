import "./formEmpresa.css";

function FormEmpresa() {
  return (
    <>
      <form>
        <li>
          <label>Empresa</label>
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
          <label>Email</label>
          <input className="inputForm" type="text" name="userName" id="" />
        </li>
        <li>
          <label>Redes Sociales</label>
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

export default FormEmpresa;

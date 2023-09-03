
import "./form.css";

function FormR() {



  return (
    <>
      <form>
        <li>
          <label >Nombre</label>
          <input type="text" name="userName" id="" />
        </li>
        <li>
          <label >Apellido</label>
          <input type="text" name="userName" id="" />
        </li>
        <li>
          <label >Provincia</label>
          <input type="text" name="userName" id="" />
        </li>
        <li>
          <label >Ciudad</label>
          <input type="text" name="userName" id="" />
        </li>
        <li>
          <label >Telefono</label>
          <input type="text" name="userName" id="" />
        </li>
        <li>
          <label >Edad</label>
          <input type="number" name="userName" id="" />
        </li>
        <li>
          <label>Filtro</label>
          <input type="number" name="userName" id="" />
        </li>
        <li className="buttonContainer"> 
        <button>Agregar</button>
        </li >
        
      </form>
    </>
  ); 
}

export default FormR;

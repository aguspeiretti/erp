import { useState } from "react";
import "./form.css";

function FormR() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <form>
        <li>
          <label for="nombre">Nombre</label>
          <input type="text" name="userName" id="" />
        </li>
        <li>
          <label for="apellido">Apellido</label>
          <input type="text" name="userName" id="" />
        </li>
        <li>
          <label for="ciudad">Ciudad</label>
          <input type="text" name="userName" id="" />
        </li>
        <li>
          <label for="telefono">Telefono</label>
          <input type="text" name="userName" id="" />
        </li>
        <li>
          <label for="edad">Edad</label>
          <input type="number" name="userName" id="" />
        </li>
        <li>
          <label for="palabra">Filtro</label>
          <input type="number" name="userName" id="" />
        </li>
      </form>
    </>
  );
}

export default FormR;

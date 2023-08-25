import "./add.css";

const Add = () => {
  return (
    <>
      <div className="addContainer">
        <div className="formContainer">
          <div className="formDiv">
            <form className="registerForm">
              <label>Nombre</label>
              <input name="first_name" />

              <label>Apellido</label>
              <input name="last_name" />

              <label>Email</label>
              <input name="email" />

              <label>Telefono</label>
              <input type="text" name="Telefono" />

              <button type="submit">Agregar</button>
            </form>
          </div>
        </div>
        <div className="container">
          <h2>Usuarios creados</h2>
        </div>
      </div>
    </>
  );
};

export default Add;

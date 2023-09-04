import FormR from "../form/Form";
import Table from "../table/Table";
import "./add.css";

const Add = () => {
  return (
    <>
      <div className="addContainer">
        <div className="titleContainer">
          <h1>Nuevo Usuario</h1>
          <button>Guardar</button>
        </div>
        <div className="formContainer">
          <FormR />
        </div>
        <div className="tableContainerUser">
          <Table />
        </div>
      </div>
    </>
  );
};

export default Add;

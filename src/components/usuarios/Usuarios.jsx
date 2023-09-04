import FormEmpresa from "../formEmpresa/FormEmpresa";
import TableEmpresa from "../tableEmpresa/TableEmpresa";
import "./usuarios.css";

const Usuarios = () => {
  return (
    <div className="tableContainerPrincipal">
      <div className="titleContainer">
        <h1>Nueva Empresa</h1>
        <button>Guardar</button>
      </div>
      <div className="formContainer">
        <FormEmpresa />
      </div>
      <div className="tableContainerEmpresa">
        <TableEmpresa />
      </div>
    </div>
  );
};

export default Usuarios;

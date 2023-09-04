import "./tableEmpresa.css";

const empresas = [
  {
    Empresa: "Empresa 1",
    Provincia: "Buenos Aires",
    Ciudad: "La Plata",
    Email: "empresa1@example.com",
  },
  {
    Empresa: "Empresa 2",
    Provincia: "Córdoba",
    Ciudad: "Córdoba",
    Email: "empresa2@example.com",
  },
  {
    Empresa: "Empresa 3",
    Provincia: "Santa Fe",
    Ciudad: "Rosario",
    Email: "empresa3@example.com",
  },
  {
    Empresa: "Empresa 4",
    Provincia: "Mendoza",
    Ciudad: "Mendoza",
    Email: "empresa4@example.com",
  },
  {
    Empresa: "Empresa 5",
    Provincia: "Tucumán",
    Ciudad: "San Miguel de Tucumán",
    Email: "empresa5@example.com",
  },
  {
    Empresa: "Empresa 6",
    Provincia: "Salta",
    Ciudad: "Salta",
    Email: "empresa6@example.com",
  },
  {
    Empresa: "Empresa 7",
    Provincia: "Neuquén",
    Ciudad: "Neuquén",
    Email: "empresa7@example.com",
  },
  {
    Empresa: "Empresa 8",
    Provincia: "San Juan",
    Ciudad: "San Juan",
    Email: "empresa8@example.com",
  },
  {
    Empresa: "Empresa 9",
    Provincia: "Chaco",
    Ciudad: "Resistencia",
    Email: "empresa9@example.com",
  },
  {
    Empresa: "Empresa 10",
    Provincia: "Entre Ríos",
    Ciudad: "Paraná",
    Email: "empresa10@example.com",
  },
  {
    Empresa: "Empresa 11",
    Provincia: "Jujuy",
    Ciudad: "San Salvador de Jujuy",
    Email: "empresa11@example.com",
  },
  {
    Empresa: "Empresa 12",
    Provincia: "Corrientes",
    Ciudad: "Corrientes",
    Email: "empresa12@example.com",
  },
  {
    Empresa: "Empresa 13",
    Provincia: "Formosa",
    Ciudad: "Formosa",
    Email: "empresa13@example.com",
  },
  {
    Empresa: "Empresa 14",
    Provincia: "San Luis",
    Ciudad: "San Luis",
    Email: "empresa14@example.com",
  },
  {
    Empresa: "Empresa 15",
    Provincia: "Río Negro",
    Ciudad: "Viedma",
    Email: "empresa15@example.com",
  },
  {
    Empresa: "Empresa 16",
    Provincia: "La Rioja",
    Ciudad: "La Rioja",
    Email: "empresa16@example.com",
  },
  {
    Empresa: "Empresa 17",
    Provincia: "Catamarca",
    Ciudad: "San Fernando del Valle de Catamarca",
    Email: "empresa17@example.com",
  },
  {
    Empresa: "Empresa 18",
    Provincia: "Santiago del Estero",
    Ciudad: "Santiago del Estero",
    Email: "empresa18@example.com",
  },
  {
    Empresa: "Empresa 19",
    Provincia: "Tierra del Fuego",
    Ciudad: "Ushuaia",
    Email: "empresa19@example.com",
  },
  {
    Empresa: "Empresa 16",
    Provincia: "La Rioja",
    Ciudad: "La Rioja",
    Email: "empresa16@example.com",
  },
  {
    Empresa: "Empresa 17",
    Provincia: "Catamarca",
    Ciudad: "San Fernando del Valle de Catamarca",
    Email: "empresa17@example.com",
  },
  {
    Empresa: "Empresa 18",
    Provincia: "Santiago del Estero",
    Ciudad: "Santiago del Estero",
    Email: "empresa18@example.com",
  },
  {
    Empresa: "Empresa 19",
    Provincia: "Tierra del Fuego",
    Ciudad: "Ushuaia",
    Email: "empresa19@example.com",
  },
];

export default function TableEmpresa() {
  return (
    <div className="tableContainer">
      <div className="buscador">
        <p>Buscar:</p>
        <input type="text" />
      </div>
      <table>
        <tr className="topTable">
          <input className="check checktop" type="checkbox" />
          <td>Empresa</td>
          <td>Provincia</td>
          <td>Ciudad</td>
          <td>Email</td>
          <td>Filtro</td>
        </tr>
        {empresas.map((user, index) => (
          <tr className="listaUsuarios" key={index}>
            <td className="check">
              <input type="checkbox" />
            </td>
            <td>{user.Empresa}</td>
            <td>{user.Provincia}</td>
            <td>{user.Ciudad}</td>
            <td>{user.Email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

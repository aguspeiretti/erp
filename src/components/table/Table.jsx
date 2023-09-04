import "./table.css";

const users = [
  {
    id: 1,
    Apellido: "González",
    Nombre: "Juan",
    Edad: 30,
    Provincia: "Buenos Aires",
    Ciudad: "La Plata",
    Telefono: 2215551234,
  },
  {
    id: 2,
    Apellido: "Pérez",
    Nombre: "María",
    Edad: 25,
    Provincia: "Córdoba",
    Ciudad: "Córdoba",
    Telefono: 3518885678,
  },
  {
    id: 3,
    Apellido: "López",
    Nombre: "Carlos",
    Edad: 40,
    Provincia: "Santa Fe",
    Ciudad: "Rosario",
    Telefono: 3417779999,
  },
  {
    id: 4,
    Apellido: "Martínez",
    Nombre: "Luisa",
    Edad: 28,
    Provincia: "Mendoza",
    Ciudad: "Mendoza",
    Telefono: 2614445678,
  },
  {
    id: 5,
    Apellido: "Fernández",
    Nombre: "Pedro",
    Edad: 35,
    Provincia: "Tucumán",
    Ciudad: "San Miguel de Tucumán",
    Telefono: 3813337890,
  },
  {
    id: 6,
    Apellido: "Ramírez",
    Nombre: "Laura",
    Edad: 27,
    Provincia: "Salta",
    Ciudad: "Salta",
    Telefono: 3876661234,
  },
  {
    id: 7,
    Apellido: "Gómez",
    Nombre: "Javier",
    Edad: 32,
    Provincia: "Neuquén",
    Ciudad: "Neuquén",
    Telefono: 2998884567,
  },
  {
    id: 8,
    Apellido: "Rodríguez",
    Nombre: "Lucía",
    Edad: 22,
    Provincia: "San Juan",
    Ciudad: "San Juan",
    Telefono: 2645559999,
  },
  {
    id: 9,
    Apellido: "Díaz",
    Nombre: "Gustavo",
    Edad: 45,
    Provincia: "Chaco",
    Ciudad: "Resistencia",
    Telefono: 3624445555,
  },
  {
    id: 10,
    Apellido: "Sánchez",
    Nombre: "Ana",
    Edad: 33,
    Provincia: "Entre Ríos",
    Ciudad: "Paraná",
    Telefono: 3437778888,
  },
  {
    id: 11,
    Apellido: "Peralta",
    Nombre: "Diego",
    Edad: 29,
    Provincia: "Jujuy",
    Ciudad: "San Salvador de Jujuy",
    Telefono: 3885557890,
  },
  {
    id: 12,
    Apellido: "Torres",
    Nombre: "Silvia",
    Edad: 38,
    Provincia: "Corrientes",
    Ciudad: "Corrientes",
    Telefono: 3796662345,
  },
  {
    id: 13,
    Apellido: "Ramos",
    Nombre: "Jorge",
    Edad: 41,
    Provincia: "Formosa",
    Ciudad: "Formosa",
    Telefono: 3707773456,
  },
  {
    id: 14,
    Apellido: "Mendoza",
    Nombre: "Susana",
    Edad: 31,
    Provincia: "San Luis",
    Ciudad: "San Luis",
    Telefono: 2668887890,
  },
  {
    id: 15,
    Apellido: "Vega",
    Nombre: "Roberto",
    Edad: 36,
    Provincia: "Río Negro",
    Ciudad: "Viedma",
    Telefono: 2924445678,
  },
  {
    id: 16,
    Apellido: "Acosta",
    Nombre: "Marcela",
    Edad: 26,
    Provincia: "La Rioja",
    Ciudad: "La Rioja",
    Telefono: 3805551234,
  },
  {
    id: 17,
    Apellido: "Luna",
    Nombre: "Ricardo",
    Edad: 43,
    Provincia: "Catamarca",
    Ciudad: "San Fernando del Valle de Catamarca",
    Telefono: 3837779999,
  },
  {
    id: 18,
    Apellido: "Ferrari",
    Nombre: "Valeria",
    Edad: 24,
    Provincia: "Santiago del Estero",
    Ciudad: "Santiago del Estero",
    Telefono: 3854445678,
  },
  {
    id: 19,
    Apellido: "Paz",
    Nombre: "Héctor",
    Edad: 39,
    Provincia: "Tierra del Fuego",
    Ciudad: "Ushuaia",
    Telefono: 2903337890,
  },
  {
    id: 20,
    Apellido: "Alvarez",
    Nombre: "Natalia",
    Edad: 28,
    Provincia: "San Juan",
    Ciudad: "San Juan",
    Telefono: 2647774567,
  },
];

export default function Table() {
  return (
    <div className="tableContainer">
      <div className="buscador">
        <p>Buscar:</p>
        <input type="text" />
      </div>
      <table>
        <tr className="topTable">
          <input className="check checktop" type="checkbox" />
          <td>Nombre</td>
          <td>Apellido</td>
          <td>Provincia</td>
          <td>Ciudad</td>
          <td>Telefono</td>
          <td>Categoria</td>
        </tr>
        {users.map((user, index) => (
          <tr className="listaUsuarios" key={index}>
            <td className="check">
              <input type="checkbox" />
            </td>
            <td>{user.Nombre}</td>
            <td>{user.Apellido}</td>
            <td>{user.Provincia}</td>
            <td>{user.Ciudad}</td>
            <td>{user.Telefono}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

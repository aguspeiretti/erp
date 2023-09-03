import "./table.css";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "Nombre",
    headerName: "Nombre",
    width: 150,
    editable: true,
  },
  {
    field: "Apellido",
    headerName: "Apellido",
    width: 150,
    editable: true,
  },
  {
    field: "Edad",
    headerName: "Edad",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Provincia",
    headerName: "Provincia",
    width: 110,
    editable: true,
  },
  {
    field: "Ciudad",
    headerName: "Ciudad",
    width: 110,
    editable: true,
  },
  {
    field: "Telefono",
    headerName: "Telefono",
    type: "number",
    width: 110,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    Apellido: "Snow",
    Nombre: "Jon",
    Edad: 35,
    Provincia: "Córdoba",
    Ciudad: "Córdoba",
    Telefono: 3518111222,
  },
  {
    id: 2,
    Apellido: "Lannister",
    Nombre: "Cersei",
    Edad: 42,
    Provincia: "Córdoba",
    Ciudad: "Córdoba",
    Telefono: 3518111222,
  },
  {
    id: 3,
    Apellido: "Lannister",
    Nombre: "Jaime",
    Edad: 45,
    Provincia: "Córdoba",
    Ciudad: "Córdoba",
    Telefono: 3518111222,
  },
  {
    id: 4,
    Apellido: "Stark",
    Nombre: "Arya",
    Edad: 16,
    Provincia: "Córdoba",
    Ciudad: "Córdoba",
    Telefono: 3518111222,
  },
  {
    id: 5,
    Apellido: "Targaryen",
    Nombre: "Daenerys",
    Edad: 20,
    Provincia: "Córdoba",
    Ciudad: "Córdoba",
    Telefono: 3518111222,
  },
  {
    id: 6,
    Apellido: "Melisandre",
    Nombre: null,
    Edad: 150,
    Provincia: "Córdoba",
    Ciudad: "Córdoba",
    Telefono: 3518111222,
  },
  {
    id: 7,
    Apellido: "Clifford",
    Nombre: "Ferrara",
    Edad: 44,
    Provincia: "Córdoba",
    Ciudad: "Córdoba",
    Telefono: 3518111222,
  },
  {
    id: 8,
    Apellido: "Frances",
    Nombre: "Rossini",
    Edad: 36,
    Provincia: "Córdoba",
    Ciudad: "Córdoba",
    Telefono: 3518111222,
  },
  {
    id: 9,
    Apellido: "Roxie",
    Nombre: "Harvey",
    Edad: 65,
    Provincia: "Córdoba",
    Ciudad: "Córdoba",
    Telefono: 3518111222,
  },
];

export default function Table() {
  return (
    <div className="tableContainer">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pEdadSize: 5,
              },
            },
          }}
          pEdadSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}

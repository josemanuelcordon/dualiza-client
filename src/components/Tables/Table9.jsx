import { Table } from "antd";

const columns = [
  {
    title: "TARIFA ACCESO",
    dataIndex: "tarifaAcceso",
    key: "tarifaAcceso",
  },
  {
    title: "POTENCIA CONTRATADA (kWe)",
    dataIndex: "potenciaContratada",
    key: "potenciaContratada",
  },
];

const data = [
  {
    key: "1",
    tarifaAcceso: " N CUPS",
    potenciaContratada: "ES0022000005139943SA1P",
  },
  {
    key: "2",
    tarifaAcceso: "POTENCIA CONTRATADA",
    potenciaContratada: "P1: 11kW",
  },
  {
    key: "3",
    potenciaContratada: "P2: 15.1kW",
  },
  {
    key: "4",
    potenciaContratada: "P3: 15.1kW",
  },
  {
    key: "5",
    potenciaContratada: "P4: 15.1kW",
  },
  {
    key: "6",
    potenciaContratada: "P5: 15.1kW",
  },
  {
    key: "7",
    potenciaContratada: "P6: 15.1kW",
  },
];

const Table9 = () => (
  <>
    <h2 className="text-m font-semibold p-4">Cuadro electrico 2</h2>
    <Table columns={columns} dataSource={data} pagination={false} />
  </>
);

export default Table9;

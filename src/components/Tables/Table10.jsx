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
    potenciaContratada: "P1: 16kW",
  },
  {
    key: "3",
    potenciaContratada: "P2: 19.8kW",
  },
  {
    key: "4",
    potenciaContratada: "P2: 19.8kW",
  },
  {
    key: "5",
    potenciaContratada: "P2: 19.8kW",
  },
  {
    key: "6",
    potenciaContratada: "P2: 19.8kW",
  },
  {
    key: "7",
    potenciaContratada: "P2: 19.8kW",
  },
];

const Table10 = () => (
  <>
    <h2 className="text-m font-semibold p-4">Cuadro electrico 3</h2>
    <Table columns={columns} dataSource={data} pagination={false} />
  </>
);

export default Table10;

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
    potenciaContratada: "P1: 25kW",
  },
  {
    key: "3",
    potenciaContratada: "P2: 25kW",
  },
  {
    key: "4",
    potenciaContratada: "P3: 25kW",
  },
  {
    key: "5",
    potenciaContratada: "P4: 25kW",
  },
  {
    key: "6",
    potenciaContratada: "P5: 25kW",
  },
  {
    key: "7",
    potenciaContratada: "P6: 25kW",
  },
];

const Table8 = () => (
  <>
    <h1>Potencia eléctrica instalada</h1>
    <Table columns={columns} dataSource={data} pagination={false} />
  </>
);

export default Table8;

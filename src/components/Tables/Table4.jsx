import { Table } from "antd";

const columns = [
  {
    title: "PLANTA",
    dataIndex: "plant",
    key: "plant",
  },
  {
    title: "N° DE LUMINARIAS",
    key: "luminaries",
    dataIndex: "luminaries",
  },
  {
    title: "N° DE LÁMPARAS",
    key: "lamparas",
    dataIndex: "lamparas",
  },
  {
    title: "POTENCIA TOTAL (KW)",
    key: "power",
    dataIndex: "power",
  },
  {
    title: "HORAS DE USO",
    key: "hours",
    dataIndex: "hours",
  },
];

const data = [
  {
    key: "1",
    plant: "ÁTICO",
    luminaries: 102,
    lamparas: 140,
    power: 2.912,
    hours: 6888,
  },
  {
    key: "2",
    plant: "2 PLANTA",
    luminaries: 208,
    lamparas: 245,
    power: 6.888,
    hours: 28374,
  },
  {
    key: "3",
    plant: "12 PLANTA",
    luminaries: 203,
    lamparas: 235,
    power: 5.701,
    hours: 26076,
  },
  {
    key: "4",
    plant: "PLANTA BAJA",
    luminaries: 207,
    lamparas: 290,
    power: 28.374,
    hours: 18352,
  },
  {
    key: "5",
    plant: "TOTAL PLANTA",
    luminaries: 720,
    lamparas: 910,
    power: 42.72,
    hours: 79690,
  },
];

const Table4 = () => (
  <>
    <h1>Iluminación</h1>
    <Table columns={columns} dataSource={data} pagination={false} />
  </>
);

export default Table4;
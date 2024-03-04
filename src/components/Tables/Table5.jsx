import { Table } from "antd";

const columns = [
  {
    title: "PLANTA",
    dataIndex: "plant",
    key: "plant",
  },
  { title: "MONITORES", dataIndex: "monitores", key: "monitores" },
  { title: "PC", dataIndex: "PC", key: "PC" },
  {
    title: "IMPRESORA FOTOCOPIADORA",
    dataIndex: "impresora",
    key: "impresora",
  },
  {
    title: "PROYECTOR",
    dataIndex: "proyector",
    key: "proyector",
  },
  {
    title: "POTENCIA TOTAL OFIMATICA (KW)",
    dataIndex: "potencia",
    key: "potencia",
  },
];

const data = [
  {
    key: "1",
    plant: "ÁTICO",
    monitores: "Cantidad: 11 Potencia: 0.04Kw",
    PC: "Cantidad: 11 Potencia: 0.125Kw",
    impresora: "Cantidad: 2 Potencia: 0.1Kw",
    proyector: "Cantidad: 5 Potencia: 0.275Kw",
  },
  {
    key: "2",
    plant: "2 PLANTA",
    monitores: "Cantidad: 118 Potencia: 0.04Kw",
    PC: "Cantidad: 118 Potencia: 0.125Kw",
    impresora: "Cantidad: 2 Potencia: 0.1Kw",
    proyector: "Cantidad: 12 Potencia: 0.275Kw",
  },
  {
    key: "3",
    plant: "1 PLANTA",
    monitores: "Cantidad: 61 Potencia: 0.04Kw",
    PC: "Cantidad: 64 Potencia: 0.125Kw",
    impresora: "Cantidad: 6 Potencia: 0.1Kw",
    proyector: "Cantidad: 12 Potencia: 0.275Kw",
  },
  {
    key: "4",
    plant: "PLANTA BAJA",
    monitores: "Cantidad: 42 Potencia: 0.04Kw",
    PC: "Cantidad: 44 Potencia: 0.125Kw",
    impresora: "Cantidad: 20 Potencia: 0.1Kw",
    proyector: "Cantidad: 1 Potencia: 0.275Kw",
  },
  {
    key: "5",
    plant: "TOTAL PLANTAS",
    monitores: "Cantidad: 232 Potencia: 0.04Kw",
    PC: "Cantidad: 237 Potencia: 0.125Kw",
    impresora: "Cantidad: 30 Potencia: 0.1Kw",
    proyector: "Cantidad: 30 Potencia: 0.275Kw",
  },
  {
    key: "6",
    plant: "POTENCIA TOTAL(Kw)",
    monitores: "9,28",
    PC: "29,625",
    impresora: "3",
    proyector: "8,25",
    potencia: '50,155',
  },
];

const Table5 = () => (
  <>
     <Table columns={columns} dataSource={data} pagination={false} />
  </>
);

export default Table5;

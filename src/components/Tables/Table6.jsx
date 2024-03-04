import { Table } from "antd";

const columns = [
 {
   title: "EQUIPO",
   dataIndex: "equipo",
   key: "equipo",
 },
 {
   title: "POTENCIA ELÉCTRICA (KW)",
   dataIndex: "power",
   key: "power",
 },
];

const data = [
 {
   key: "1",
   equipo: "PANTALLA SMART",
   power: 2.1,
 },
 {
   key: "2",
   equipo: "FRIGORIFICO",
   power: 0.54,
 },
 {
   key: "3",
   equipo: "CENTRO DE COMUNICACIONES",
   power: 2.65,
 },
 {
   key: "4",
   equipo: "MICROONDAS",
   power: 2.4,
 },
 {
   key: "5",
   equipo: "ARMARIO PORTATILES",
   power: 7,
 },
 {
   key: "6",
   equipo: "MAQUINA EXPENDEDORA",
   power: 0.4,
 },
 {
   key: "7",
   equipo: "MAQUINA BEBIDAS",
   power: 0.55,
 },
 {
   key: "8",
   equipo: "MAQUINA CAFE",
   power: 1.85,
 },
 {
   key: "9",
   equipo: "TRITURADORA",
   power: 0.7,
 },
 {
   key: "10",
   equipo: "DISP AGUA",
   power: 0.17,
 },
 {
   key: "11",
   equipo: "SPLIT",
   power: 3.87,
 },
 {
   key: "12",
   equipo: "TV",
   power: 0.045,
 },
 {
    key: "12",
    equipo: "POTENCIA ELÉCTRICA TOTAL",
    power: 22.28,
  },
];

const Table6 = () => (
 <>
   <Table columns={columns} dataSource={data} pagination={false} />
 </>
);

export default Table6;
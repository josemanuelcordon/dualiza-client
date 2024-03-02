import { Table } from "antd";

const columns = [
 {
   title: "TIPO DE INSTALACIÓN",
   dataIndex: "instalacion",
   key: "instalacion",
 },
 {
   title: "POTENCIA ELÉCTRICA INSTALADA (kWe)",
   dataIndex: "potencia",
   key: "potencia",
 },
];

const data = [
 {
   key: "1",
   instalacion: "Bombeo ACS, Calefacción y Refrigeración",
   potencia: 605.27,
 },
 {
   key: "2",
   instalacion: "Iluminación",
   potencia: 18.084,
 },
 {
   key: "3",
   instalacion: "Ofimática",
   potencia: 55.33,
 },
 {
   key: "4",
   instalacion: "Otros Consumidores de Energía",
   potencia: 22.275,
 },
 {
   key: "5",
   instalacion: "TOTALES",
   potencia: 699.259,
 },
];

const Table7 = () => (
 <>
   <h1>Potencia eléctrica instalada</h1>
   <Table columns={columns} dataSource={data} pagination={false} />
 </>
);

export default Table7;
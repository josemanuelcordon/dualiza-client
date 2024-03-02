import { Table } from "antd";
const columns = [
  {
    title: "PERIODO FACTURACIÓN",
    dataIndex: "fecha",
    key: "fecha",
  },
  {
    title: "CONSUMO ENERGÍA ACTIVA TOTAL (kWh)",
    key: "kW",
    dataIndex: "kw",
  },
  {
    title: "IMPORTE (con IVA) (€)",
    key: "euros",
    dataIndex: "euros",
  },
];
const data = [
    {
        key: "1",
        fecha: "01/10/2018-31/10/2018",
        kw: "13.425",
        euros: "2.101,68",
    },
    {
        key: "2",
        fecha: "01/11/2018-30/11/2018",
        kw: "12.172",
        euros: "1.417,28",
    },
    {
        key: "3",
        fecha: "01/12/2018-31/12/2018",
        kw: "9.369",
        euros: "1.824,67",
    },
    {
        key: "4",
        fecha: "01/01/2019-31/01/2019",
        kw: "21.115",
        euros: "2.920,02",
    },
    {
        key: "5",
        fecha: "01/02/2019-28/02/2019",
        kw: "15.031",
        euros: "1.664,92",
    },
    {
        key: "6",
        fecha: "01/03/2019-31/03/2019",
        kw: "14.582",
        euros: "2.154,94",
    },
    {
        key: "7",
        fecha: "01/04/2019-30/04/2019",
        kw: "12.689",
        euros: "1.986,56",
    },
    {
        key: "8",
        fecha: "01/05/2019-31/05/2019",
        kw: "11.456",
        euros: "1.847,19",
    },
    {
        key: "9",
        fecha: "01/06/2019-30/06/2019",
        kw: "6.344",
        euros: "1.197,58",
    },
    {
        key: "10",
        fecha: "01/07/2019-31/07/2019",
        kw: "6.255",
        euros: "1.197,64",
    },
    {
        key: "11",
        fecha: "01/08/2019-31/08/2019",
        kw: "7.264",
        euros: "1.389,65",
    },
    {
        key: "12",
        fecha: "01/09/2019-30/09/2019",
        kw: "3.783",
        euros: "1.038,3",
    },
    {
        key: "13",
        fecha: "TOTAL ANUAL",
        kw: "133.485",
        euros: "20.740,43",
    }
];
const Table2 = () => (
  <Table columns={columns} dataSource={data} pagination={false} scroll={{ x: 100, y: 400 }}/>
);
export default Table2;

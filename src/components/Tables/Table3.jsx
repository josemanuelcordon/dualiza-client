import { Table } from "antd";

const columns = [
  {
    title: "PERIODO FACTURACIÓN",
    dataIndex: "periodo",
    key: "periodo",
  },
  {
    title: "CONSUMO ELÉCTRICO (kWh/año)",
    key: "consumo",
    dataIndex: "consumo",
  },
  {
    title: "COSTE ELÉCTRICO (€/año)",
    key: "coste",
    dataIndex: "coste",
  },
  {
    title: "COSTE UNITARIO CON IVA (€/kWh)",
    key: "costeUnitario",
    dataIndex: "costeUnitario",
  },
];

const data = [
  {
    key: "1",
    periodo: "ELECTRICIDAD",
    consumo: "133.485",
    coste: "20.740,43",
    costeUnitario: "0,1553",
  },
];

const Table3 = () => (
  <>
    <h1>Electricidad</h1>
    <Table columns={columns} dataSource={data} pagination={false} />
  </>
);

export default Table3;

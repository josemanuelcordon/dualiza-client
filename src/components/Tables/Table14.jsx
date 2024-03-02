import { Table } from "antd";

const columns = [
  {
    title: "CONSUMO ELÉCTRICO (kWh/año)",
    dataIndex: "consumoElectrico",
    key: "consumoElectrico",
  },
  {
    title: "COSTE ELÉCTRICO (€/año)",
    dataIndex: "costeElectrico",
    key: "costeElectrico",
  },
  {
    title: "COSTE UNITARIO (con IVA) (€/kWh)",
    dataIndex: "costeUnitario",
    key: "costeUnitario",
  },
];

const data = [
  {
    key: "1",
    consumoElectrico: 70640,
    costeElectrico: 31460.69,
    costeUnitario: 0.45,
  },
];

const Table14 = () => (
  <>
    <Table columns={columns} dataSource={data} pagination={false} />
  </>
);

export default Table14;
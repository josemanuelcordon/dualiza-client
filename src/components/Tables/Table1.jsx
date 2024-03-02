import { Table } from 'antd';
const columns = [
  {
    title: 'TARIFA ACCESO',
    dataIndex: 'name',
    key: 'name',
  },
  {
    key: 'kW',
    dataIndex: 'kw',
  },
];
const data = [
  {
    key: '1',
    name: 'Potencia Contratada:',
    kw : 'P1: 50kW',
  },
  {
    key: '2',
    name: 'Producto Contratado:',
    kw : 'P2: 50kW',
  },
  {
    key: '3',
    name: 'Producto Triple:',
    kw : 'P3: 50kW',
  },
];
const Table1 = () => <Table columns={columns} dataSource={data} pagination={false}/>;
export default Table1;
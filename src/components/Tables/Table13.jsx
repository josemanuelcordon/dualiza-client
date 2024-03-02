import { Table } from "antd";

const columns = [
  {
    title: "PERIODO FACTURACIÓN",
    dataIndex: "periodoFacturacion",
    key: "periodoFacturacion",
  },
  {
    title: "CONSUMO ENERGÍA ACTIVA (kWh)",
    dataIndex: "consumoEnergiaActiva",
    key: "consumoEnergiaActiva",
  },
  {
    title: "IMPORTE (CON IVA) (€)",
    dataIndex: "importeConIVA",
    key: "importeConIVA",
  },
];

const data = [
  {
    key: "1",
    periodoFacturacion: "01/01/2022 - 31/01/2022",
    consumoEnergiaActiva: 1069,
    importeConIVA: 569.69,
  },
  {
    key: "2",
    periodoFacturacion: "01/02/2022 - 28/02/2022",
    consumoEnergiaActiva: 6088,
    importeConIVA: 2466.68,
  },
  {
    key: "3",
    periodoFacturacion: "01/03/2022 - 31/03/2022",
    consumoEnergiaActiva: 3867,
    importeConIVA: 1919,
  },
  {
    key: "4",
    periodoFacturacion: "01/04/2022 - 30/04/2022",
    consumoEnergiaActiva: 4294,
    importeConIVA: 1931.8,
  },
  {
    key: "5",
    periodoFacturacion: "01/05/2022 - 31/05/2022",
    consumoEnergiaActiva: 3318,
    importeConIVA: 1148.88,
  },
  {
    key: "6",
    periodoFacturacion: "01/06/2022 - 30/06/2022",
    consumoEnergiaActiva: 3329,
    importeConIVA: 1202.47,
  },
  {
    key: "7",
    periodoFacturacion: "01/07/2022 - 31/07/2022",
    consumoEnergiaActiva: 2419,
    importeConIVA: 993.88,
  },
  {
    key: "8",
    periodoFacturacion: "01/08/2022 - 31/08/2022",
    consumoEnergiaActiva: 820,
    importeConIVA: 503.23,
  },
  {
    key: "9",
    periodoFacturacion: "01/09/2022 - 30/09/2022",
    consumoEnergiaActiva: 1407,
    importeConIVA: 823.18,
  },
  {
    key: "10",
    periodoFacturacion: "01/10/2022 - 31/10/2022",
    consumoEnergiaActiva: 5057,
    importeConIVA: 2320.1,
  },
  {
    key: "11",
    periodoFacturacion: "01/11/2022 - 30/11/2022",
    consumoEnergiaActiva: 3146,
    importeConIVA: 1144.15,
  },
  {
    key: "12",
    periodoFacturacion: "01/12/2022 - 31/12/2022",
    consumoEnergiaActiva: 1566,
    importeConIVA: 462.34,
  },
  {
    key: "13",
    periodoFacturacion: "TOTAL ANUAL",
    consumoEnergiaActiva: 36380,
    importeConIVA: 15485.40,
  },
];

const Table13 = () => (
  <>
    <Table columns={columns} dataSource={data} pagination={false} />
  </>
);

export default Table13;

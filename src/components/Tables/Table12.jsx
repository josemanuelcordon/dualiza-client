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
    consumoEnergiaActiva: 459,
    importeConIVA: 286.78,
  },
  {
    key: "2",
    periodoFacturacion: "01/02/2022 - 28/02/2022",
    consumoEnergiaActiva: 2116,
    importeConIVA: 923.96,
  },
  {
    key: "3",
    periodoFacturacion: "01/03/2022 - 31/03/2022",
    consumoEnergiaActiva: 1229,
    importeConIVA: 658.53,
  },
  {
    key: "4",
    periodoFacturacion: "01/04/2022 - 30/04/2022",
    consumoEnergiaActiva: 1360,
    importeConIVA: 671.66,
  },
  {
    key: "5",
    periodoFacturacion: "01/05/2022 - 31/05/2022",
    consumoEnergiaActiva: 1069,
    importeConIVA: 432.97,
  },
  {
    key: "6",
    periodoFacturacion: "01/06/2022 - 30/06/2022",
    consumoEnergiaActiva: 633,
    importeConIVA: 297.71,
  },
  {
    key: "7",
    periodoFacturacion: "01/07/2022 - 31/07/2022",
    consumoEnergiaActiva: 1500,
    importeConIVA: 604.19,
  },
  {
    key: "8",
    periodoFacturacion: "01/08/2022 - 31/08/2022",
    consumoEnergiaActiva: 820,
    importeConIVA: 474.1,
  },
  {
    key: "9",
    periodoFacturacion: "01/09/2022 - 30/09/2022",
    consumoEnergiaActiva: 511,
    importeConIVA: 350.25,
  },
  {
    key: "10",
    periodoFacturacion: "01/10/2022 - 31/10/2022",
    consumoEnergiaActiva: 965,
    importeConIVA: 497.71,
  },
  {
    key: "11",
    periodoFacturacion: "01/11/2022 - 30/11/2022",
    consumoEnergiaActiva: 1057,
    importeConIVA: 383.6,
  },
  {
    key: "12",
    periodoFacturacion: "01/12/2022 - 31/12/2022",
    consumoEnergiaActiva: 1515,
    importeConIVA: 415.64,
  },
  {
    key: "12",
    periodoFacturacion: "TOTAL ANUAL",
    consumoEnergiaActiva: 13.234,
    importeConIVA: 5997.14,
  },
];

const Table12 = () => (
  <>
    <Table columns={columns} dataSource={data} pagination={false} />
  </>
);

export default Table12;

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
    consumoEnergiaActiva: 2004,
    importeConIVA: 932.03,
  },
  {
    key: "2",
    periodoFacturacion: "01/02/2022 - 28/02/2022",
    consumoEnergiaActiva: 1900,
    importeConIVA: 916.12,
  },
  {
    key: "3",
    periodoFacturacion: "01/03/2022 - 31/03/2022",
    consumoEnergiaActiva: 3248,
    importeConIVA: 1958.31,
  },
  {
    key: "4",
    periodoFacturacion: "01/04/2022 - 30/04/2022",
    consumoEnergiaActiva: 2492,
    importeConIVA: 1166.9,
  },
  {
    key: "5",
    periodoFacturacion: "01/05/2022 - 31/05/2022",
    consumoEnergiaActiva: 1518,
    importeConIVA: 627.63,
  },
  {
    key: "6",
    periodoFacturacion: "01/06/2022 - 30/06/2022",
    consumoEnergiaActiva: 1677,
    importeConIVA: 694.08,
  },
  {
    key: "7",
    periodoFacturacion: "01/07/2022 - 31/07/2022",
    consumoEnergiaActiva: 1171,
    importeConIVA: 535.85,
  },
  {
    key: "8",
    periodoFacturacion: "01/08/2022 - 31/08/2022",
    consumoEnergiaActiva: 607,
    importeConIVA: 421.65,
  },
  {
    key: "9",
    periodoFacturacion: "01/09/2022 - 30/09/2022",
    consumoEnergiaActiva: 511,
    importeConIVA: 403.89,
  },
  {
    key: "10",
    periodoFacturacion: "01/10/2022 - 31/10/2022",
    consumoEnergiaActiva: 1477,
    importeConIVA: 734.28,
  },
  {
    key: "11",
    periodoFacturacion: "01/11/2022 - 30/11/2022",
    consumoEnergiaActiva: 2430,
    importeConIVA: 839.11,
  },
  {
    key: "12",
    periodoFacturacion: "01/12/2022 - 31/12/2022",
    consumoEnergiaActiva: 1991,
    importeConIVA: 748.30,
  },
  {
    key: "13",
    periodoFacturacion: "TOTAL ANUAL",
    consumoEnergiaActiva: 21.026,
    importeConIVA: 9978.15,
  },
  // Add the remaining data points here
];

const Table11 = () => (
  <>
    <Table columns={columns} dataSource={data} pagination={false} />
  </>
);

export default Table11;

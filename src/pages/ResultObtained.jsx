import InstalationFoto from "./ResultObtains/InstalationFoto";
import IESHLanz from "./IESHLanz";
import CIFPVirgen from "./CIFPVirgen";
import ImrpoveConstructive from "./ResultObtains/ImrpoveConstructive";
import { Tabs } from "antd";


const items = [
  {
    key: "1",
    label: "Instalación fotovoltaica",
    children: <InstalationFoto />,
  },
  {
    key: "2",
    label: "IES Hermenegildo Lanz",
    children: <IESHLanz />,
  },
  {
    key: "3",
    label: "CIFP Virgen de Gracia",
    children: <CIFPVirgen />,
  },
   {
    key: "4",
    label: "Mejoras Constructivas",
    children: <ImrpoveConstructive />,
  },
];

const ResultObtained = () => {
  return (
    <main className="min-h-[calc(100vh-160px-112px)] px-10 pb-10  max-w-5xl mx-auto flex flex-col">
      <section className="flex items-end w-full px-10 pt-20 pb-10 bg-gray-600 text-white justify-between">
        <h1 className="text-6xl text-start">Resultados obtenidos</h1>
      </section>
      <Tabs defaultActiveKey="1" items={items} />
    </main>

  );
};

export default ResultObtained;

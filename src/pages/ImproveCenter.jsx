import { Tabs } from "antd";
import ElectricInstallation from "../components/ElectricInstallation";
import InterestDocuments from "../components/InterestDocuments";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Instalación eléctrica",
    children: <ElectricInstallation />,
  },
  {
    key: "2",
    label: "Documentos de interés",
    children: <InterestDocuments />,
  },
  {
    key: "3",
    label: "Enlaces",
    children: "Content of Tab Pane 3",
  },
];

const ImproveCenter = () => {
  return (
    <main className="min-h-[calc(100vh-160px-112px)] px-10 pb-10  max-w-5xl mx-auto flex flex-col">
      <section className="flex items-end w-full px-10 pt-20 pb-10 bg-gray-600 text-white justify-between">
        <h1 className="text-6xl text-start">Guía de buenas pŕacitcas</h1>
      </section>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </main>
  );
};

export default ImproveCenter;

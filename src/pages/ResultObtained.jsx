import Table5 from "../components/Tables/Table5";
import Table1 from "../components/Tables/Table1";
import Table2 from "../components/Tables/Table2";
import Table3 from "../components/Tables/Table3";
import Table4 from "../components/Tables/Table4";
import Radio from "../components/charts/Radio";
import Table6 from "../components/Tables/Table6";
import Table7 from "../components/Tables/Table7";
import Table8 from "../components/Tables/Table8";
import Table9 from "../components/Tables/Table9";
import Table10 from "../components/Tables/Table10";
import Table11 from "../components/Tables/Table11";
import Table12 from "../components/Tables/Table12";
import Table13 from "../components/Tables/Table13";
import Table14 from "../components/Tables/Table14";
import BarChart from "../components/charts/BarChart";

const ResultObtained = () => {
  return (
    // La medida del gráfico la controlas con el ancho del contenedor:
    // Aqui te dejo el link con los diferentes tipos de gráficos https://react-chartjs-2.js.org/components
    <div className="min-h-[calc(100vh-160px-112px)] px-10 pb-10 mx-auto flex flex-col justify-center items-center gap-10">
      <Radio />
      <Table1 />
      <Table2 />
      <Table3 />
      <Table4 />
      <Table5 />
      <Table6 />
      <Table7 />
      <Table8 />
      <Table9 />
      <Table10 />
      <Table11 />
      <Table12 />
      <Table13 />
      <Table14 />
    </div>
  );
};

export default ResultObtained;

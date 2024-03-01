import PieChart from "../components/charts/PieChart";

const ResultObtained = () => {
  return (
    // La medida del gráfico la controlas con el ancho del contenedor:
    // Aqui te dejo el link con los diferentes tipos de gráficos https://react-chartjs-2.js.org/components
    <div className="w-96">
      <PieChart />
    </div>
  );
};

export default ResultObtained;

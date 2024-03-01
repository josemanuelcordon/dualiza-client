import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
//Todo va en orden, si pones el rojo el primero, el 12 hace refernecia al rojo
const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Número de votos",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["red", "blue", "yellow", "green", "purple", "orange"],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return (
    <div>
      <h2>Pie Chart Example</h2>
      <Pie data={data} width={1} />
    </div>
  );
};

export default PieChart;

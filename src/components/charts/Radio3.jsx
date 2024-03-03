import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
//Todo va en orden, si pones el rojo el primero, el 12 hace refernecia al rojo
const data = {
  labels: [
    "Gas Natural",
    "Electricidad ",
  ],
  datasets: [
    {
      label: "Coste por tipo de energía",
      data: [79, 21],
      backgroundColor: ["purple", "blue"],
      borderWidth: 1,
    },
  ],
};


const Radio2 = () => {
  return (
    <div className="w-96">
      <h1 className="text-center">Coste por tipo de energía</h1>
      <Pie data={data} width={1} />
    </div>
  );
};

export default Radio2;

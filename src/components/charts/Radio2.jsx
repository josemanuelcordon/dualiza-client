import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
//Todo va en orden, si pones el rojo el primero, el 12 hace refernecia al rojo
const data = {
  labels: [
    "Fotovoltaica",
    "Gas Natural",
    "Electricidad ",
  ],
  datasets: [
    {
      label: "Consumo por tipo de energía",
      data: [19, 65, 16],
      backgroundColor: ["purple", "blue", "green"],
      borderWidth: 1,
    },
  ],
};


const Radio2 = () => {
  return (
    <div className="w-96">
      <h1 className="text-center">Consumo por tipo de energía</h1>
      <Pie data={data} width={1} />
    </div>
  );
};

export default Radio2;

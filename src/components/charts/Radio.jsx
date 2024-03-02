import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
//Todo va en orden, si pones el rojo el primero, el 12 hace refernecia al rojo
const data = {
  labels: [
    " Ofimatica",
    "Iluminación interior",
    "Aire acondicionado ",
    "Otros",
    "Iluminación exterior",
    "Equipos de bombeo",
  ],
  datasets: [
    {
      label: "Consumo de energía",
      data: [56.66, 19.82, 12.98, 6.49, 2.87, 1.18],
      backgroundColor: ["purple", "blue", "green", "yellow", "orange", "red"],
      borderWidth: 1,
    },
  ],
};


const Radio = () => {
  return (
    <div className="w-96">
      <h1 className="text-center">Consumo de energía</h1>
      <Pie data={data} width={1} />
    </div>
  );
};

export default Radio;

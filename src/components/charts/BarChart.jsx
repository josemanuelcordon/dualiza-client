import { Chart as ChartJS, BarElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, Tooltip, Legend);

const data = {
  labels: [
    " Ofimatica",
    "Iluminación interior",
    "Aire acondicionado",
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

const options = {
  scales: {
    x: {
      stacked: true, // Para agrupar barras en el eje X
    },
    y: {
      stacked: true, // Para agrupar barras en el eje Y
      ticks: {
        beginAtZero: true, // Comienza el eje Y desde cero
      },
    },
  },
};

const BarChart = () => {
  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      {/* Ajusta el estilo del contenedor para centrar el gráfico */}
      <h1 className="text-center">Consumo de energía</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;

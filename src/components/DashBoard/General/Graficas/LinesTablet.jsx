import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var productosTotales = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const midata = {
  labels: meses,
  datasets: [
    {
      label: "productos",
      data: productosTotales,
      tension: 0.5,
      fill: true,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      pointRadius: 5,
      pointBorderColor: "rgba(255, 99, 132)",
      pointBackgroundColor: "rgba(255, 99, 132)",
    },
  ],
};

var misoptions = {
  scales: {
    y: {
      min: 0,
    },
    x: {
      ticks: { color: "rgb(255, 99, 132)" },
    },
  },
};

export default function LineChart() {
  return <Line data={midata} options={misoptions} />;
}

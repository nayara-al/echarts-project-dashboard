import { useEffect, useRef } from "react";
import * as echarts from "echarts";

export default function GraficoBarra() {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3333/receitaMensal");
        const data = await response.json();
        renderChart(data);
      } catch (error) {
        console.error("Erroo ao buscar dados:", error);
      }
    };

    fetchData();
  }, [chartRef]);

  const renderChart = (data) => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    const xAxisData = data.map((item) => item.mes);
    const seriesData = data.map((item) => item.receita);

    const greenPalette = [
      "#1b5e20",
      "#2e7d32",
      "#388e3c",
      "#43a047",
      "#4caf50",
      "#66bb6a",
      "#81c784",
      "#a5d6a7",
      "#c8e6c9",
      "#e8f5e9",
    ];

    const options = {
      title: {
        text: "Receita Mensal",
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
      },
      yAxis: {},
      series: [
        {
          name: "Receita",
          type: "bar",
          data: seriesData,
          itemStyle: {
            borderRadius: [5, 5, 0, 0],
            color: (params) => {
              return greenPalette[params.dataIndex % greenPalette.length];
            },
          },
        },
      ],
    };

    chart.setOption(options);
  };

  return (
    <div>
      <h1>Gráfgico em Barras</h1>
      <div ref={chartRef} style={{ width: "720px", height: "400px" }}></div>
    </div>
  );
}

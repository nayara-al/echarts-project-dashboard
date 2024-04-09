import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import data from "../../../data.json";

export default function GraficoLinha() {
  const chartRef = useRef(null);

  useEffect(() => {
    renderChart(data.movimentacoesSemanal);
  }, []);

  const renderChart = (data) => {
    if (!chartRef.current || !data) return;

    const chart = echarts.init(chartRef.current);

    const xAxisData = data.map((item) => item.data);
    const seriesData = data.map((item) => item.valorBruto);

    const options = {
      title: {
        text: "Movimentações Semanais",
      },
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        data: xAxisData,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Valor Bruto",
          type: "line",
          data: seriesData,
          itemStyle: {
            color: "#4CAF50",
          },
          lineStyle: {
            width: 2,
          },
        },
      ],
    };

    chart.setOption(options);
  };

  return (
    <div>
      <h1>Gráfico de Linha</h1>
      <div ref={chartRef} style={{ width: "600px", height: "400px" }}></div>
    </div>
  );
}

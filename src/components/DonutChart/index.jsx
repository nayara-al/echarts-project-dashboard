import { useEffect, useRef } from "react";
import * as echarts from "echarts";

export default function GraficoDonut() {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3333/receitaTrimestral");
        const data = await response.json();
        renderChart(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [chartRef]);

  const renderChart = (data) => {
    if (!chartRef.current || !data) return;

    const chart = echarts.init(chartRef.current, {
      renderer: "svg",
    });

    const bluePalette = ["#2196F3", "#1976D2", "#0D47A1", "#1565C0"];

    const options = {
      legend: {
        top: "10%",
        left: "center",
        textStyle: {
            color: "#fff",
        }
      },
      title: {
        text: "Receita Trimestral",
        subtext: "Distribuição por Trimestre",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: R${c} ({d}%)",
      },
      series: [
        {
          name: "Receita por Trimestre",
          type: "pie",
          radius: ["30%", "60%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            formatter: "{b}: {d}%\nR${c}",
            position: "center",
            textStyle: {
              fontWeight: "bold",
            },
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "20",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: true,
            length: 20,
            length2: 20,
          },
          data: data.map((item, index) => ({
            value: item.receita,
            name: `Trimestre ${item.trimestre}`,
            itemStyle: {
                color: bluePalette[index % bluePalette.length],
              },
          })),
        },
      ],
    };

    chart.setOption(options);
  };

  return (
    <div>
      <h1>Gráfico Donut</h1>
      <div ref={chartRef} style={{ width: "600px", height: "500px" }}></div>
    </div>
  );
}

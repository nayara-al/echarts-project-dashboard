import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import data from "../../../data.json"

export default function BarLabel() {
  const chartRef = useRef(null);

  useEffect(() => {
    renderChart(data.pagamentosPorSemana)
  }, [chartRef]);

  const renderChart = (data) => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    const semanas = data.map((item) => item.semana);
    const pix = data.map((item) => item.pix);
    const credito = data.map((item) => item.credito);
    const debito = data.map((item) => item.debito);

    const options = {
      tooltip: {
        trigger: "axis",
        axisPointer: {            
          type: "shadow"        
        }      
      },
      legend: {
        data: ["Pix", "Crédito", "Débito"],
        textStyle: {
            color: "#fff",
        }
      },
      xAxis: {
        type: "category",
        data: semanas
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "Pix",
          type: "bar",
          data: pix
        },
        {
          name: "Crédito",
          type: "bar",
          data: credito
        },
        {
          name: "Débito",
          type: "bar",
          data: debito
        }
      ]
    };

    chart.setOption(options);
  };

  return (
    <div>
      <h1>Pagamento por Semana</h1>
      <div ref={chartRef} style={{ width: "720px", height: "400px" }}></div>
    </div>
  );
}

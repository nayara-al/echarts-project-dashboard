import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function GraficoBarra() {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/receitaMensal');
        const data = await response.json();
        renderChart(data);
      } catch (error) {
        console.error('Erroo ao buscar dados:', error);
      }
    };

    fetchData();
  }, [chartRef]);

  const renderChart = (data) => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    const xAxisData = data.map(item => item.mes);
    const seriesData = data.map(item => item.receita);

    const options = {
      title: {
        text: 'Receita Mensal',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
      },
      yAxis: {},
      series: [{
        name: 'Receita',
        type: 'bar',
        data: seriesData,
        itemStyle: {
          borderRadius: [5, 5, 0, 0],
          color: '#4CAF50'
        }
      }],
    };

    chart.setOption(options);
  };

  return (
    <>
      <h1>Gráfgico em Barras</h1>
      <div ref={chartRef} style={{ width: '720px', height: '400px' }}></div>
    </>
  );
}

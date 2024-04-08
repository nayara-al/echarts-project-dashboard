import GraficoBarra from "./components/GraficoBarra";
import GraficoDonut from "./components/DonutChart";
import GraficoLinha from "./components/LineChart";
import ContainerFlex from "./components/ContainerFlex";
function App() {
  return (
    <>
      <ContainerFlex>
        <GraficoBarra />
        <GraficoDonut />
        <GraficoLinha />
      </ContainerFlex>
    </>
  );
}

export default App;

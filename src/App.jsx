import GraficoBarra from "./components/GraficoBarra";
import GraficoDonut from "./components/DonutChart";
import GraficoLinha from "./components/LineChart";
import ContainerFlex from "./components/ContainerFlex";
import BarLabel from "./components/BarLabel";
function App() {
  return (
    <>
      <ContainerFlex>
        <GraficoBarra />
        <GraficoDonut />
        <GraficoLinha />
        <BarLabel />
      </ContainerFlex>
    </>
  );
}

export default App;

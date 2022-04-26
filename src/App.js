import logo from './logo.svg';
import './App.css';
import Plot from 'react-plotly.js';
import BoxPlot from './components/BoxPlot';
import PiePlot from './components/PiePlot';
import TimePlot from './components/TimePlot';
import HeatPlot from './components/HeatPlot';


function App() {
  return (
    <div className="App">
      <h1>Box Plot</h1>
      <BoxPlot />
      <h1>Pie Plot</h1>
      <PiePlot />
      <h1>Time Plot</h1>
      <TimePlot />
      <h1>Heat Plot</h1>
      <HeatPlot/>
      
    </div>
  );
}

export default App;

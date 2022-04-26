import logo from './logo.svg';
import './App.css';
import Plot from 'react-plotly.js';
import BoxPlot from './components/BoxPlot';
import PiePlot from './components/PiePlot';
import TimePlot from './components/TimePlot';


function App() {
  return (
    <div className="App">
      <h1>Box Plot</h1>
      <BoxPlot />
      <h1>Pie Plot</h1>
      <PiePlot />
      <h1>Time Plot</h1>
      <TimePlot/>
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Plot from 'react-plotly.js';
import BoxPlot from './components/BoxPlot';


function App() {
  return (
    <div className="App">
      <h1>Box Plot</h1>
        <BoxPlot />
      
    </div>
  );
}

export default App;

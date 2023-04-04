import logo from './logo.svg';
import './App.css';
import Count from './components/Count';
import Errorboundary from './components/Errorboundary';

function App() {
  return (
    <div className='App' >
      <Count />
      <Errorboundary />
    </div>
  );
}

export default App;

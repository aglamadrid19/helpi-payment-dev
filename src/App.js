import logo from './logo.svg';
import './App.css';
import Connect from './components/Connect'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Connect></Connect>
      </header>
    </div>
  );
}

export default App;

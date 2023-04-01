import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {window.ethereum ? "ethereum present" : "ethereum ausent"}
        </p>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Greeting from "./Components/Greeting/Greeting";
import Timer from "./Components/Timer/Timer";

function App() {

 const username = "James";


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Greeting username={username} firstname='Jerry' lastname='John' />
        <Timer>
          <div>Timer</div>
          <div>Tower</div>
        </Timer>
      </header>
    </div>
  );
}

export default App;

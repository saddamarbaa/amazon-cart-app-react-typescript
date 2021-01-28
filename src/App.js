import logo from "./logo.svg";
import "./App.css";

function App() {
  const firstName = "saddam";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello my friends lets learn react js</h2>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with {firstName}
        </a>
      </header>
    </div>
  );
}

export default App;

import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        <Weather city="Melbourne" />
      </header>
    </div>
  );
}

export default App;

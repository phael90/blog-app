import "./App.css";
import Navigation from "./Navigation";
import Home from "./Routes/Home";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <h1>{Home}</h1>
      </div>
    </div>
  );
}

export default App;

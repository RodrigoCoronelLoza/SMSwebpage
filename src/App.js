import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Portrait } from "./components/Portrait";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
      </BrowserRouter>
    </div>
  );
}

export default App;

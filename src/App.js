import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coin from "./pages/Coin";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/coin" element={<Coin />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

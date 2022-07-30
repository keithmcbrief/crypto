import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coin from "./pages/CoinPage";
import Home from "./pages/Home";
import React from 'react'

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

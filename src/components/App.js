import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [budget, setBudget] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setSushis(data));
  }, []);

  return (
    <div className="app">
      <SushiContainer sushis={sushis} budget={budget} setBudget={setBudget} />
      <Table plates={[]} budget={budget} />
    </div>
  );
}

export default App;
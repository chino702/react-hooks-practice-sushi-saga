import React, { useState } from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushis, budget, setBudget }) {
  const [startIndex, setStartIndex] = useState(0);

  const handleEatSushi = (sushi) => {
    if (sushi.price <= budget) {
      setBudget((prevBudget) => prevBudget - sushi.price);
      // Add the sushi to the plates or do other logic here
    } else {
      // Handle insufficient budget scenario
      alert("You don't have enough budget to eat this sushi!");
    }
  };

  const renderSushis = sushis.slice(startIndex, startIndex + 4).map((sushi) => (
    <Sushi key={sushi.id} sushi={sushi} onEatSushi={handleEatSushi} />
  ));

  const handleMoreClick = () => {
    setStartIndex((prevIndex) => (prevIndex + 4) % sushis.length);
  };

  return (
    <div className="belt">
      {renderSushis}
      <MoreButton onClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
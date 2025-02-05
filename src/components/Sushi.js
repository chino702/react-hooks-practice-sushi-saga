import React from "react";

function Sushi({ sushi, onEatSushi }) {
  const { name, price, isEaten } = sushi;

  return (
    <div className="sushi">
      <div className="plate" onClick={() => onEatSushi(sushi)}>
        {isEaten ? null : <img src={sushi.img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;

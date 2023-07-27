import React from "react";

function Table({ plates = [], budget }) {
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  const totalSpent = plates.reduce((total, plate) => total + plate.price, 0);
  const remainingBudget = budget - totalSpent;

  return (
    <>
      <h1 className="remaining">You have: ${remainingBudget} remaining!</h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
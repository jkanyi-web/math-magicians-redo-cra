import React from 'react';

function ItemsContainer() {
  return (
    <>
      <div className="itemsContainer">
        <button type="button" className="items">+/-</button>
        <button type="button" className="items">%</button>
        <button type="button" className="items">AC</button>
        <button type="button" className="items orange">÷</button>
        <button type="button" className="items">7</button>
        <button type="button" className="items">8</button>
        <button type="button" className="items">9</button>
        <button type="button" className="items orange">*</button>
        <button type="button" className="items">4</button>
        <button type="button" className="items">5</button>
        <button type="button" className="items">6</button>
        <button type="button" className="items orange">-</button>
        <button type="button" className="items">1</button>
        <button type="button" className="items">2</button>
        <button type="button" className="items">3</button>
        <button type="button" className="items orange">+</button>
        <button type="button" className="items long">0</button>
        <button type="button" className="items">.</button>
        <button type="button" className="items orange">=</button>
      </div>
    </>
  );
}

export default ItemsContainer;

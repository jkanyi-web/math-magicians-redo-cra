import { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const buttonClick = (e) => {
    setState(calculate(state, e.target.textContent));
  };

  return (
    <section className="container">
      <input
        type="text"
        className="input"
        value={state.next || state.total || '0'}
      />
      <div className="itemsContainer">
        <button type="button" onClick={buttonClick} className="items">
          AC
        </button>
        <button type="button" onClick={buttonClick} className="items">
          +/-
        </button>
        <button type="button" onClick={buttonClick} className="items">
          %
        </button>
        <button type="button" onClick={buttonClick} className="items orange">
          ÷
        </button>
        <button type="button" onClick={buttonClick} className="items">
          7
        </button>
        <button type="button" onClick={buttonClick} className="items">
          8
        </button>
        <button type="button" onClick={buttonClick} className="items">
          9
        </button>
        <button type="button" onClick={buttonClick} className="items orange">
          x
        </button>
        <button type="button" onClick={buttonClick} className="items">
          4
        </button>
        <button type="button" onClick={buttonClick} className="items">
          5
        </button>
        <button type="button" onClick={buttonClick} className="items">
          6
        </button>
        <button type="button" onClick={buttonClick} className="items orange">
          -
        </button>
        <button type="button" onClick={buttonClick} className="items">
          1
        </button>
        <button type="button" onClick={buttonClick} className="items">
          2
        </button>
        <button type="button" onClick={buttonClick} className="items">
          3
        </button>
        <button type="button" onClick={buttonClick} className="items orange">
          +
        </button>
        <button type="button" onClick={buttonClick} className="items long">
          0
        </button>
        <button type="button" onClick={buttonClick} className="items">
          .
        </button>
        <button type="button" onClick={buttonClick} className="items orange">
          =
        </button>
      </div>
    </section>
  );
}

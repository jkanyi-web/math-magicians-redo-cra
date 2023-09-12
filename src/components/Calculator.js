import CalculatorInput from './CalculatorInput';
import ItemsContainer from './ItemsContainer';

export default function Calculator() {
  return (
    <>
      <div className="container">
        <CalculatorInput />
        <ItemsContainer />
      </div>
    </>
  );
}

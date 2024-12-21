import { useState } from "react";

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function defineStep(e) {
    setStep(+e.target.value);
  }
  function defineCount(e) {
    setCount(+e.target.value);
  }
  function increment() {
    setCount((count) => count + step);
  }
  function decrement() {
    setCount((count) => count - step);
  }
  function reset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={decrement}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={increment}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;

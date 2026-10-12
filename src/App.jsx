import { useState } from "react";

function App() {
  // this holds whatever is shown on the screen
  const [display, setDisplay] = useState("0");

  // runs when a number button is clicked
  function handleNumber(num) {
    if (display === "0" || display === "Error") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  }

  // runs when an operator button is clicked (+ − × ÷)
  function handleOperator(op) {
    if (display === "Error") {
      return;
    }
    setDisplay(display + op);
  }

  // runs when = is clicked, this does the actual math
  function handleEqual() {
    try {
      // eval doesn't understand × ÷ − so change them to * / -
      let expression = display
        .split("×").join("*")
        .split("÷").join("/")
        .split("−").join("-");

      let result = eval(expression);

      if (result === Infinity || result === -Infinity || isNaN(result)) {
        setDisplay("Error"); // divide by zero ends up here
      } else {
        setDisplay(result.toString());
      }
    } catch (e) {
      setDisplay("Error");
    }
  }

  // runs when C is clicked
  function handleClear() {
    setDisplay("0");
  }

  return (
    <div className="min-h-screen bg-slate-700 flex flex-col items-center justify-center p-4">

      {/* calculator box */}
      <div className="bg-white rounded-lg shadow-lg w-72 overflow-hidden">

        {/* header */}
        <div className="bg-green-600 text-white p-4">
          <p className="text-sm text-green-100">DCIT 26 - Laboratory 1</p>
          <h1 className="text-xl font-bold">My Calculator</h1>
        </div>

        <div className="p-4">
          {/* display screen */}
          <div className="bg-slate-800 text-right text-3xl p-4 rounded mb-4 break-all text-white">
            {display}
          </div>

          {/* buttons */}
          <div className="grid grid-cols-4 gap-2">
            <button className="bg-red-500 text-white p-4 rounded text-xl" onClick={handleClear}>C</button>
            <button className="bg-green-600 text-white p-4 rounded text-xl" onClick={() => handleOperator("÷")}>÷</button>
            <button className="bg-green-600 text-white p-4 rounded text-xl" onClick={() => handleOperator("×")}>×</button>
            <button className="bg-green-600 text-white p-4 rounded text-xl" onClick={() => handleOperator("−")}>−</button>

            <button className="bg-slate-100 p-4 rounded text-xl" onClick={() => handleNumber("7")}>7</button>
            <button className="bg-slate-100 p-4 rounded text-xl" onClick={() => handleNumber("8")}>8</button>
            <button className="bg-slate-100 p-4 rounded text-xl" onClick={() => handleNumber("9")}>9</button>
            <button className="bg-green-600 text-white p-4 rounded text-xl" onClick={() => handleOperator("+")}>+</button>

            <button className="bg-slate-100 p-4 rounded text-xl" onClick={() => handleNumber("4")}>4</button>
            <button className="bg-slate-100 p-4 rounded text-xl" onClick={() => handleNumber("5")}>5</button>
            <button className="bg-slate-100 p-4 rounded text-xl" onClick={() => handleNumber("6")}>6</button>
            <button className="bg-slate-800 text-white p-4 rounded text-xl" onClick={handleEqual}>=</button>

            <button className="bg-slate-100 p-4 rounded text-xl" onClick={() => handleNumber("1")}>1</button>
            <button className="bg-slate-100 p-4 rounded text-xl" onClick={() => handleNumber("2")}>2</button>
            <button className="bg-slate-100 p-4 rounded text-xl" onClick={() => handleNumber("3")}>3</button>
            <button className="bg-slate-100 p-4 rounded text-xl" onClick={() => handleNumber("0")}>0</button>
          </div>

          {/* instructions */}
          <div className="mt-4 bg-slate-50 rounded p-3 text-sm text-slate-600">
            <h2 className="font-bold text-slate-800">User Guide</h2>
            <p className="mt-1">1. Click the number buttons.</p>
            <p>2. Choose +, −, ×, or ÷.</p>
            <p>3. Enter the second number and click =.</p>
            <p>4. Click C to clear the calculator.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

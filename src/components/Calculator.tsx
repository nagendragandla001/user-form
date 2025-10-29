import { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState<number>(0);
  const [inputValue, setInputValue] = useState<number>(0);

  const handleAddition = () => {
    setResult((prev) => prev + inputValue);
  };

  const handleSubstraction = () => {
    setResult((prev) => prev - inputValue);
  };

  const handleMultiplication = () => {
    setResult((prev) => prev * inputValue);
  };

  const handleDivision = () => {
    setResult((prev) => prev / inputValue);
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
      <h1 className="text-2xl font-bold">Calculator</h1>

      <input
        type="number"
        className="border p-2 rounded-lg w-1/3"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />

      <div className="flex gap-2 items-center">
        <button
          className="border p-2 rounded-lg bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
          onClick={handleAddition}
        >
          Addition
        </button>
        <button
          className="border p-2 rounded-lg bg-red-500 text-white cursor-pointer hover:bg-red-600"
          onClick={handleSubstraction}
        >
          Subtraction
        </button>
        <button
          className="border p-2 rounded-lg bg-orange-500 text-white cursor-pointer hover:bg-orange-600"
          onClick={handleMultiplication}
        >
          Multiplication
        </button>
        <button
          className="border p-2 rounded-lg bg-indigo-500 text-white cursor-pointer hover:bg-indigo-600"
          onClick={handleDivision}
        >
          Division
        </button>
      </div>
      <h2>
        The result is : <span className="font-bold">{result}</span>
      </h2>
    </div>
  );
};

export default Calculator;

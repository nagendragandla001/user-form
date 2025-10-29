import { useReducer } from "react";

interface Action {
  type: string;
  payload?: number;
}

function calculatorReducer(state: any, action: Action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        result: state.inputValue1 + state.inputValue2,
      };
    case "SUBTRACT":
      return { ...state, result: state.inputValue1 - state.inputValue2 };
    case "MULTIPLY":
      return { ...state, result: state.inputValue1 * state.inputValue2 };
    case "DIVIDE":
      return { ...state, result: state.inputValue1 / state.inputValue2 };

    case "UPDATE_INPUT1":
      return { ...state, inputValue1: action.payload };

    case "UPDATE_INPUT2":
      return { ...state, inputValue2: action.payload };

    case "RESET":
      return { result: 0, inputValue1: 0, inputValue2: 0 };
  }

  return state;
}

const initState = {
  result: 0,
  inputValue1: 10,
  inputValue2: 10,
};

const CalculatorReducer = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initState);

  return (
    <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
      <h1 className="text-2xl font-bold">Calculator</h1>

      <div className="flex flex-row gap-2 items-center">
        <input
          type="number"
          className="border p-2 rounded-lg w-1/2"
          value={state.inputValue1}
          onChange={(e) =>
            dispatch({ type: "UPDATE_INPUT1", payload: Number(e.target.value) })
          }
        />
        <input
          type="number"
          className="border p-2 rounded-lg w-1/2"
          value={state.inputValue2}
          onChange={(e) =>
            dispatch({ type: "UPDATE_INPUT2", payload: Number(e.target.value) })
          }
        />
      </div>

      <div className="flex gap-2 items-center">
        <button
          className="border p-2 rounded-lg bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
          onClick={() => dispatch({ type: "ADD" })}
        >
          Addition
        </button>
        <button
          className="border p-2 rounded-lg bg-red-500 text-white cursor-pointer hover:bg-red-600"
          onClick={() => dispatch({ type: "SUBTRACT" })}
        >
          Subtraction
        </button>
        <button
          className="border p-2 rounded-lg bg-orange-500 text-white cursor-pointer hover:bg-orange-600"
          onClick={() => dispatch({ type: "MULTIPLY" })}
        >
          Multiplication
        </button>
        <button
          className="border p-2 rounded-lg bg-indigo-500 text-white cursor-pointer hover:bg-indigo-600"
          onClick={() => dispatch({ type: "DIVIDE" })}
        >
          Division
        </button>
        <button
          className="border p-2 rounded-lg bg-indigo-500 text-white cursor-pointer hover:bg-indigo-600"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
      <h2>
        The result is : <span className="font-bold">{state.result}</span>
      </h2>
    </div>
  );
};

export default CalculatorReducer;

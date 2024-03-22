import React, { useReducer } from "react";
import TimerCount from "./TimerCount";

const initialState = { count: 0 };
const reducer = (states, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: states.count + 1 };
    case "DECREMENT":
      return { count: states.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return states;
  }
};
const CounterApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="flex flex-col justify-center items-center py-5 mx-auto container xl:max-w-[1164px] xl:px-3 px-6">
        <p className="mb-6">Count: {state.count}</p>
        <div className="flex gap-4">
          <span onClick={() => dispatch({ type: "INCREMENT" })}>
            <button className="px-9 py-3 bg-green-300 rounded-sm">
              Incriment
            </button>
          </span>
          <span onClick={() => dispatch({ type: "DECREMENT" })}>
            <button className="px-9 py-3 bg-green-300 rounded-sm">
              Decrement
            </button>
          </span>
          <span onClick={() => dispatch({ type: "RESET" })}>
            <button className="px-9 py-3 bg-green-300 rounded-sm">Reset</button>
          </span>
        </div>
      </div>
      <TimerCount />
    </>
  );
};

export default CounterApp;

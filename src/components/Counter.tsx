import { useReducer } from "react";

type StateType = { count: number };
type ActionType = "Increment" | "Decrement";
interface Action {
  type: ActionType;
}

function reducerFunction(state: StateType, action: Action): StateType {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const initialState: StateType = {
    count: 0,
  };

  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <>
      <div>Count : {state.count}</div>

      <div>
        <button onClick={() => dispatch({ type: "Increment" })}>
          Increment +
        </button>
        <button onClick={() => dispatch({ type: "Decrement" })}>
          Decrement -
        </button>
      </div>
    </>
  );
}

export default Counter;

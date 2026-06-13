import { useReducer, useState } from "react";

interface State {
  id: number;
  data: string;
  completed: boolean;
}

type Action = { type: "ADD"; payload: string } | { type: "REMOVE"; id: number };

function reducer(state: State[], action: Action): State[] {
  switch (action.type) {
    case "ADD": {
      return [
        ...state,
        {
          id: Date.now(),
          data: action.payload,
          completed: false,
        },
      ];
    }
    case "REMOVE": {
      return state.filter((s) => s.id !== action.id);
    }
    default:
      return state;
  }
}

function TodoList() {
  const initialState: State[] = [];
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState<string>("");

  function handleAddNote(): void {
    if (!text.trim()) {
      console.log("empty box");
      return;
    }
    dispatch({
      type: "ADD",
      payload: text,
    });
    setText("");
  }

  function deleteNote(id: number): void {
    dispatch({
      type: "REMOVE",
      id: id,
    });
  }

  return (
    <div>
      <label>Todo List</label>
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />{" "}
      <button onClick={handleAddNote}>Add</button>
      <div>
        {state.length
          ? state.map((d) => {
              return (
                <p key={d.id}>
                  {d.data} -- {d.completed ? "Completed" : "Incomplete"}
                  <button onClick={() => deleteNote(d.id)}>Remove</button>
                </p>
              );
            })
          : "No task!"}
      </div>
    </div>
  );
}

export default TodoList;

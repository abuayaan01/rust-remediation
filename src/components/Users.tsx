import { useEffect, useReducer } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type State = {
  loading: boolean;
  data: User[];
  error: string;
};

export const ACTIONS = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
} as const;

type Action =
  | { type: "LOADING" }
  | { type: "SUCCESS"; payload: User[] }
  | { type: "ERROR"; error: unknown };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOADING": {
      return { ...state, loading: true, error: "" };
    }
    case "SUCCESS": {
      return { ...state, loading: false, data: action.payload };
    }
    case "ERROR": {
      const mssg =
        action.error instanceof Error
          ? action.error.message
          : "Something Wrong";
      return { ...state, loading: false, error: mssg };
    }
    default:
      return state;
  }
}

const initialState: State = {
  loading: false,
  data: [],
  error: "",
};

function Users() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchUser = () => {
    dispatch({ type: ACTIONS.LOADING });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error in fetching users");
        }
        return res.json();
      })
      .then((data: User[]) => {
        console.log(data);
        dispatch({ type: ACTIONS.SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: ACTIONS.ERROR, error: err });
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (state.loading) {
    return <p>Loading,,,,,</p>;
  }

  if (state.error) {
    return <p>{state.error}</p>;
  }

  return (
    <div>
      {state.data.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;

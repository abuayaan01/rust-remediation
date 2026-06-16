import type { Action, State } from "./types";

export default function reducer(state: State, action: Action): State {
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
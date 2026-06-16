import type { State } from "./types";

export const initialState: State = {
    loading: false,
    data: [],
    error: "",
};

export const ACTIONS = {
    LOADING: "LOADING",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
} as const;
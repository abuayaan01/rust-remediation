import { useEffect, useReducer } from "react";
import reducer from "./reducer";
import { ACTIONS, initialState } from "./constants";
import { fetchUser } from "./api";


function useUser() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getUsers = async () => {
        try {
            dispatch({ type: ACTIONS.LOADING });
            const data = await fetchUser();
            dispatch({ type: ACTIONS.SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: ACTIONS.ERROR, error });
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    return {
        state,
        getUsers
    }
}

export default useUser
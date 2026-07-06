import { useReducer } from "react";

export interface chatDetailsType {
    chatId: number;
    senderId: number;
    receiverId: number;
    mssg: string;
}

const initialState: chatDetailsType = {
    chatId: 1,
    senderId: 2,
    receiverId: 3,
    mssg: "",
};



type ActionType =
    | { type: "ADD_MESSSAGE"; payload: string }
    | { type: "CLEAR_MESSAGE" };


export function useChatDetailsState() {
    const [chatDetails, dispatch] = useReducer(reducer, initialState);

    function handler(e) {
        dispatch({ type: "ADD_MESSSAGE", payload: e.target.value });
    }

    return { chatDetails, dispatch, handler }
}


function reducer(state: chatDetailsType, action: ActionType): chatDetailsType {
    switch (action.type) {
        case "ADD_MESSSAGE":
            return { ...state, mssg: action.payload };
        case "CLEAR_MESSAGE":
            return { ...state, mssg: "" };
        default:
            return state;
    }
}


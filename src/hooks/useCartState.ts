import type { CartStateType, CartType, Product } from "@/types/index";
import { useReducer } from "react";


const initialState: CartType = {
    items: [],
  };

export type ActionType =
    | {
        type: "ADD_ITEM";
        payload: Product;
    }
    | {
        type: "REMOVE_ITEM";
        payload: number;
    };

function reducer(state: CartType, action: ActionType): CartType {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload,
                ],
            };

        case "REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter(
                    item =>
                        item.id !== action.payload
                ),
            };

        default:
            return state;
    }
}

function useCartState() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return { state, dispatch }
}

export default useCartState
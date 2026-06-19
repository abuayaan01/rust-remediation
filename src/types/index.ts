import type { Action } from "@/components/users/types";
import type { ActionType } from "@/hooks/useCartState";
import type { ActionDispatch } from "react";
import type React from "react";

export type Product = {
    id: number;
    name: string;
};

export type CartType = { items: Product[], }

export type CartStateType = {
    state: CartType,
    dispatch: ActionDispatch<[action: ActionType]> | null;
}


import { createContext } from "react";

type UserContextType = {
  name: string;
  id: number;
};
export const SimpleUserContext = createContext<UserContextType | null>(null);

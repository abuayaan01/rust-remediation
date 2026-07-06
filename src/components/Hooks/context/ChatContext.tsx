import { createContext, useContext, useReducer, useState } from "react";
import { useChatDetailsState } from "../chat/hooks/useChatDetailsState";

const ChatContext = createContext(null);

export function ChatContextProvider({ children }) {
  const { chatDetails, handler } = useChatDetailsState();

  return (
    <ChatContext.Provider value={{ chatDetails, handler }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChatContext = () => {
  const ctx = useContext(ChatContext);

  if (!ctx) throw new Error("Context is only available inside provider!");

  return ctx;
};

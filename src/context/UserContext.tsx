import React, { createContext, useContext } from "react";

type UserContextType = {
  id: number;
  username: string;
  avatar: string;
};

const UserContext = createContext<UserContextType | null>(null);

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //we can create a custom hook to manage state value for user
  return (
    <UserContext.Provider
      value={{
        username: "ayaan",
        id: 1,
        avatar: "avatar_url",
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserCtx = (): UserContextType => {
  const user = useContext(UserContext);

  if (!user) {
    throw new Error("useUser must be used inside UserProvider");
  }

  return user;
};

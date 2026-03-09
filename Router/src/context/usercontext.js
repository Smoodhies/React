import { createContext, useContext } from "react";

export const UserConText = createContext({
  username: "liyakat",
  SetUsersName: () => {},
});

export const UserContextProvider = UserConText.Provider;

export default function UsersContext() {
  return useContext(UserConText);
}

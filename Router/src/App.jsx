import { useState } from "react";
import "./App.css";
import { UserContextProvider } from "./context/usercontext";
import RoutesProvider from "./components/react-routers/react-router";
  ;

function App() {
  const [username, Setusername] = useState("no name");

  const SetUsersName = () => {
    Setusername("Liyakat");
  };


  return (
    <UserContextProvider value={{ SetUsersName, username }}>
      <RoutesProvider/>
    </UserContextProvider>
  );
}

export default App;

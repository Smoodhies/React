import React, { useEffect, useState } from "react";
import Themecontext from "./Themecontext";

function ThemeContextProvider({ children }) {
  const [themeStatus, setThemeStatus] = useState("light");

  const darkMode = () => {
    setThemeStatus("dark");
  };
  const lightMode = () => {
    setThemeStatus("light");
  };

  useEffect(() => {
    const RootElement = document.querySelector("html");
    RootElement.classList.remove("light", "dark");
    RootElement.classList.add(themeStatus);
  }, [themeStatus]);

  return (
    <Themecontext.Provider value={{ themeStatus, darkMode, lightMode }}>
      {children}
    </Themecontext.Provider>
  );
}

export default ThemeContextProvider;

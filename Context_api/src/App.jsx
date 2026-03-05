import Card from "./components/Card";
import ThemeBtn from "./components/Themebtn";
import "./App.css";
import ThemeContextProvider from "./context/Themecontextprovider";

function App() {
  return (
    <ThemeContextProvider>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;

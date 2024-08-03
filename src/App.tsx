import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { GlobalProvider } from "./Context/GlobalContext";
import { ThemeProvider } from "./Context/ThemeContext";
import { PopupProvider } from "./Context/PopupContext";

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider>
        <PopupProvider>
          <div className="App">
            <Home />
          </div>
        </PopupProvider>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;

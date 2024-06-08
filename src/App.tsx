import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { GlobalProvider } from "./Context/GlobalContext";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider>
        <div className="App">
          <Home />
        </div>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;

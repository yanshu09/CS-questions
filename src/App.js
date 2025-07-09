import React from "react";
import Parent from "./components/Parent";
import { ThemeProvider} from "./components/Theme";

function App(){
  return (
    <ThemeProvider>
      <div>
        <h1>My E-Commerce App</h1>
        <Parent/>
      </div>
    </ThemeProvider>
  )
}

export default App;

import { useEffect, useState } from "react";
import Card from "./Components/Card"
import ThemeBtn from './Components/ThemeBtn';
import {ThemeProvider} from "./Context/ThemeContext"

function App() {

  const [themeMode, setThemeMode] = useState("light");

  const lightTheme= ()=>{
    setThemeMode("light")
  }
  const darkTheme= ()=>{
    setThemeMode("dark")
  }

  const html = document.querySelector('html');

  useEffect(() => {
    html.classList.remove('light','dark')
    html.classList.add(themeMode);
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
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
    </ThemeProvider>
  );
}

export default App;

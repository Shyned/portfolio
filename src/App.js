import "./App.css";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import { GiSunbeams, GiEvilMoon } from "react-icons/gi";
export const ThemeContext = createContext("null");

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <section>
        <div>
          <label>{theme === "light" ? <GiSunbeams /> : <GiEvilMoon />}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <div className="App" id={theme}>
          <p>Hello</p>
        </div>
      </section>
    </ThemeContext.Provider>
  );
}

export default App;

import React from "react";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import { GiSunbeams, GiEvilMoon } from "react-icons/gi";
import ReactHowler from "react-howler";

export const ThemeContext = createContext("null");

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <section id={theme}>
        <div className="head">
          <div>
            <label className="toggle-mode">
              {theme === "light" ? (
                <GiSunbeams color="#FAC668" size="2em" />
              ) : (
                <GiEvilMoon size="2em" color="#191970" />
              )}
            </label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
          <Navbar className="nav" />
        </div>
        <div className="App" id={theme}>
          <About />
        </div>
        <div id={theme}>
          <Projects />
        </div>
        <div id={theme}>
          <Contact />
        </div>
      </section>
    </ThemeContext.Provider>
  );
}

export default App;

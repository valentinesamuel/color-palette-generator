import "./App.css";
import ColorCard from "./components/color-card/Colorcard";
import Button from "./components/button/Button";
import { Toggle } from "./App.styles";
import { useEffect, useState } from "react";
import { ReactComponent as Moon } from "./moon.svg";
import { ReactComponent as Sun } from "./sun.svg";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "./themes";

function App() {
  const [colorsList, setColorsList] = useState([]);
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    localStorage.setItem("theme", JSON.stringify(theme));
  };

  const fetchColors = () => {
    fetch("https://cors-everywhere.herokuapp.com/http://colormind.io/api/", {
      method: "POST",
      body: JSON.stringify({ model: "default" }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setColorsList(data.result);
      });
  };

  // useEffect is used here to prevent the function from firing twice when the spacebar is pressed
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setTheme(theme)
    console.log(theme);
    window.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        fetchColors();
      }
    });
  }, []);
  useEffect(() => {

    fetchColors();
  }, []);

  const Icon = theme === "light" ? <Sun /> : <Moon />;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="app">
        <Toggle onClick={themeToggler}>{Icon}</Toggle>
        <p className="heading">Random Color Palette Generator</p>
        <ColorCard colors={colorsList} />
        <Button getColors={fetchColors} />
      </div>
    </ThemeProvider>
  );
}

export default App;

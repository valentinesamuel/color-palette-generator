import "./App.css";
import ColorCard from "./components/color-card/Colorcard";
import Button from "./components/button/Button";
import Prompt from "./components/prompt/Prompt";
import React, { useEffect, useState } from "react";

function App() {
  const [colorsList, setColorsList] = useState(["w", "j", "df"]);
  function fc() {
    console.log("E dn");
  }
  const fetchColors = useEffect(() => {
    fetch("http://colormind.io/api/", {
      method: "POST",
      body: JSON.stringify({ model: "default" }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setColorsList(data.result);
      });
  }, []);

  return (
    <div className="app">
      <h1>Random Color Palette Generator</h1>
      <ColorCard colors={colorsList} />
      <Button getColors={fetchColors} />
      {/* <Prompt /> */}
    </div>
  );
}

export default App;

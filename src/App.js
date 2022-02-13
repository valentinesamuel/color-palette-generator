import "./App.css";
import ColorCard from "./components/color-card/Colorcard";
import Button from "./components/button/Button";

import React, { useState } from "react";

function App() {
  const [colorsList, setColorsList] = useState([
    ["79c0ff"],
    ["1f6feb"],
    ["d2a8ff"],
    ["ff7b72"],
  ]);

  const fetchColors = () => {
    fetch("https://cors-everywhere.herokuapp.com/http://colormind.io/api/", {
      method: "POST",
      body: JSON.stringify({ model: "default" }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.result);
        return setColorsList(data.result);
      });
  };
  

  return (
    <div className="app">
      <h1 className="heading">Random Color Palette Generator</h1>
      <ColorCard colors={colorsList} />
      <Button getColors={fetchColors} />
    </div>
  );
}

export default App;

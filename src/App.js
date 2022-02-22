import "./App.css";
import ColorCard from "./components/color-card/Colorcard";
import Button from "./components/button/Button";

import React, { useEffect, useState } from "react";


function App() {
  const [colorsList, setColorsList] = useState([
    
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
  
  // useEffect is used here to prevent the function from firing twice when the spacebar is pressed
  useEffect(() => {
    window.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
     fetchColors()
   }
  })
  }, [])
  
  useEffect(() => fetchColors(),[])
  return (
    <div className="app">
      <h1 className="heading">Random Color Palette Generator</h1>
      <ColorCard colors={colorsList} />
      <Button getColors={fetchColors} />
    </div>
  );
}

export default App;

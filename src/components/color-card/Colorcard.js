import { useEffect, useState } from "react";
import "./Colorcard.css";
import Prompt from '../prompt/Prompt'
import Clipboard from 'react-clipboard.js';
const ColorCard = ({ colors }) => {

  const [copy, setCopy] = useState({ value: '', copied: false })

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopy({ copied: false })
    }, 2000);
    return () => clearTimeout(timeout)
  }, [copy])

  const onCopy = (color) => {
    setCopy({ value: `#(${color})`, copied: true });
  }

  const renderCard = () => {
    return colors.map((color, index) => {
      return (
        <Clipboard key={index} data-clipboard-text={`#(${color})`} onClick={() => { onCopy(color) }} component='a'>

          <div className="colorframe" >
            <div
              className="colorcard"
              style={{ backgroundColor: `rgb(${color})` }}
            ></div>
            <p className="hex-color">#{color}</p>
          </div>
        </Clipboard>
      );
    })
  }
  return (
    <>
      {copy.copied ? <Prompt message={copy.value.replaceAll(',', '')} show={copy.copied} /> : null}
      <div className="card-row">
        {renderCard()}
      </div>
    </>
  );
};

export default ColorCard;

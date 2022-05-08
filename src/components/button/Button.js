import "./Button.css";
import { Btn } from "./button.styles";

const Button = ({ getColors }) => {
  return (
    <>
      <Btn className="btn" onClick={getColors}>Generate Palette</Btn>
      <p className="hint">Press Spacebar to generate new palette</p>
    </>
  
  )
    ;
};

export default Button;

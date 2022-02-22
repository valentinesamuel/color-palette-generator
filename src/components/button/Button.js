import "./Button.css";

const Button = ({ getColors }) => {
  return (
    <>
      <button onClick={getColors}>Generate Palette</button>
      <p className="hint">Press Spacebar to generate new palette</p>
    </>
  
  )
    ;
};

export default Button;

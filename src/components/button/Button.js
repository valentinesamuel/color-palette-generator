import "./Button.css";

const Button = ({ getColors }) => {
  return (
    <>
    
      <button onClick={getColors}>Generate Palette</button>
      <p>Press Spacebar to generate new palette</p>
    </>
  
  )
    ;
};

export default Button;

import "./Button.css";

const Button = ({ getColors }) => {
  return <button onClick={getColors}>Generate Palette</button>;
};

export default Button;

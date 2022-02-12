import "./Button.css";

const Button = ({ getColors }) => {
  return <button onClick={getColors}>Click to generate random colors</button>;
};

export default Button;

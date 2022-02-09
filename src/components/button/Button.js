import "./Button.css";

const Button = ({ getColors }) => {
  return <button onClick={getColors}>Fetch Data</button>;
};

export default Button;

import "./Colorcard.css";

const ColorCard = ({ colors }) => {
  console.log(colors);
  return (
    <div className="card-row">
      {colors.map((color) => {
        return <p key={Math.random()}>{color}</p>;
      })}
    </div>
  );
};

export default ColorCard;

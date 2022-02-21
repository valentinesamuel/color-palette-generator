import "./Colorcard.css";

const ColorCard = ({ colors }) => {
  return (
    <div className="card-row">
      {colors.map((color, index) => {
        return (
          <div className="colorframe" key={index}>
            <div
              className="colorcard"
              style={{ backgroundColor: `rgb(${color})` }}
            ></div>
            <p className="hex-color">#{color}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ColorCard;

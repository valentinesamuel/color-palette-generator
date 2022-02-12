import "./Colorcard.css";


const ColorCard = ({ colors }) => {

  return (
    <div className="card-row">
      {colors.map((color, index) => {
        return (
          <div className="colorframe"  key={index}>
            <div className="colorcard">{color}</div>
            
          </div>
        );
      })}
    </div>
  );
};

export default ColorCard;

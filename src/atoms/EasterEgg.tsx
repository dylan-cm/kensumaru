import "./EasterEgg.css";
import gold from "../../assets/gold-bars.png";

function onClickGold() {
  alert("You found Yamashita's Gold! To the victor go the spoils!");
}

const EasterEgg = () => {
  return (
    <div className="easter-egg">
      <img src={gold} className="gold" alt="gold" onClick={onClickGold} />
    </div>
  );
};

export default EasterEgg;

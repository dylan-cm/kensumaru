import "./EasterEgg.css";
import gold from "../assets/gold-bars.png";

function onClickGold() {
  alert("You found Yamashita's Gold!");
}

const EasterEgg = () => {
  return <img src={gold} className="gold" alt="gold" onClick={onClickGold} />;
};

export default EasterEgg;

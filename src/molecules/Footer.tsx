import EasterEgg from "../atoms/EasterEgg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <span>KensuMaru.com</span>
      <EasterEgg />
      <a href="mailto:charles@kensumaru.com">Contact</a>
    </div>
  );
};

export default Footer;

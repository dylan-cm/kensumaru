import EasterEgg from "../atoms/EasterEgg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <span>KensuMaru.com</span>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeVLHvAW4hAcxD3qZkmbg9afIKw3e9fLeT0Fi0sY2EgTU9Uqg/viewform">
        Signup for Updates
      </a>
      <a href="mailto:charles@kensumaru.com">Contact</a>
      <EasterEgg />
    </div>
  );
};

export default Footer;

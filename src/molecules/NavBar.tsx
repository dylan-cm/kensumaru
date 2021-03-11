import "./NavBar.css";
import { Link, useRouteMatch } from "react-router-dom";

function toggleMenu() {
  let menu = window.document.getElementById("menu");
  if (menu && menu.style.display === "none") {
    menu.style.display = "flex";
  } else if (menu) {
    menu.style.display = "none";
  }
}

const WebNav = () => {
  let { url } = useRouteMatch();

  let links: React.ReactNode[] = [
    <Link
      className={"nav-link" + (url === `/Synopsis` ? " active" : "")}
      to="/Synopsis"
    >
      Synopsis
    </Link>,
    <Link
      className={"nav-link" + (url === `/Treasure` ? " active" : "")}
      to="/Treasure"
    >
      Treasure
    </Link>,
    <Link
      className={"nav-link" + (url === `/Directors` ? " active" : "")}
      to="/Directors"
    >
      Directors
    </Link>,
    <Link
      className={"nav-link" + (url === `/ExpeditionTeam` ? " active" : "")}
      to="/ExpeditionTeam"
    >
      Expedition Team
    </Link>,
    <Link
      className={"nav-link" + (url === `/Filmmakers` ? " active" : "")}
      to="/Filmmakers"
    >
      Filmmakers
    </Link>,
    <Link
      className={"nav-link" + (url === `/Technology` ? " active" : "")}
      to="/Technology"
    >
      Technology
    </Link>,
    <Link
      className={"nav-link" + (url === `/Philanthropy` ? " active" : "")}
      to="/Philanthropy"
    >
      Philanthropy
    </Link>,
  ];

  return (
    <div className="mobile-nav-container">
      <div className="web-nav-container">
        <Link className="logo-container" to="/">
          <h1 className="logo">KENSU MARU</h1>
        </Link>
        <div className="links">{links.map((link) => link)}</div>
        <div className="menu-button" onClick={toggleMenu}>
          =
        </div>
      </div>
      <div id="menu" className="menu" style={{display: "none"}}>
        {links.map((link) => link)}
      </div>
    </div>
  );
};

export default WebNav;

import "./NavBar.css";
import { Link, useRouteMatch } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Menu from "../assets/menu.svg"

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

  return (
    <div className="mobile-nav-container">
      <div className="web-nav-container">
        <Link className="logo-container" to="/" id="link-logo">
          <h1 className="logo">KENSU MARU</h1>
        </Link>
        <div className="links">
          <Link
            className={"nav-link" + (url === `/Synopsis` ? " active" : "")}
            to="/Synopsis"
            id="link-Synopsis"
          >
            Synopsis
          </Link>
          <Link
            className={"nav-link" + (url === `/Treasure` ? " active" : "")}
            to="/Treasure"
            id="link-Treasure"
          >
            Treasure
          </Link>
          <div className="dropdown" id="link-Directors">
            <HashLink to="/Directors#charles">
              <button
                className={
                  "dropbtn nav-link" + (url === `/Directors` ? " active" : "")
                }
              >
                Directors
              </button>
            </HashLink>
            <div className="dropdown-content">
              <HashLink
                className={"nav-link" + (url === `/Directors` ? " active" : "")}
                to="/Directors#charles"
                id="link-Directors"
              >
                Charles Hambleton
              </HashLink>
              <HashLink
                className={"nav-link" + (url === `/Directors` ? " active" : "")}
                to="/Directors#johnny"
                id="link-Directors"
              >
                John O'Hara
              </HashLink>
            </div>
          </div>
          <Link
            className={
              "nav-link" + (url === `/ExpeditionTeam` ? " active" : "")
            }
            to="/ExpeditionTeam"
            id="link-ExpeditionTeam"
          >
            Expedition Team
          </Link>
          <Link
            className={"nav-link" + (url === `/Filmmakers` ? " active" : "")}
            to="/Filmmakers"
            id="link-Filmmakers"
          >
            Filmmakers
          </Link>
          <Link
            className={"nav-link" + (url === `/Technology` ? " active" : "")}
            to="/Technology"
            id="link-Technology"
          >
            Technology
          </Link>
          <Link
            className={"nav-link" + (url === `/Philanthropy` ? " active" : "")}
            to="/Philanthropy"
            id="link-Philanthropy"
          >
            Philanthropy
          </Link>
        </div>
        <div className="menu-button" onClick={toggleMenu}>
          <img src={Menu} alt="menu-button-icon" className="menu-bar-icon"/>
        </div>
      </div>
      <div id="menu" className="menu" style={{ display: "none" }}>
        <Link
          className={"nav-link" + (url === `/Synopsis` ? " active" : "")}
          to="/Synopsis"
          id="link-Synopsis"
          onClick={toggleMenu}
        >
          Synopsis
        </Link>
        <Link
          className={"nav-link" + (url === `/Treasure` ? " active" : "")}
          to="/Treasure"
          id="link-Treasure"
          onClick={toggleMenu}
        >
          Treasure
        </Link>
        <HashLink
          className={"nav-link" + (url === `/Directors` ? " active" : "")}
          to="/Directors#charles"
          id="link-Directors"
          onClick={toggleMenu}
        >
          Directors
        </HashLink>
        <HashLink
          className={"nav-link hash" + (url === `/Directors` ? " active" : "")}
          to="/Directors#charles"
          id="link-Directors"
          onClick={toggleMenu}
        >
          Charles Hambleton
        </HashLink>
        <HashLink
          className={"nav-link hash" + (url === `/Directors` ? " active" : "")}
          to="/Directors#johnny"
          id="link-Directors"
          onClick={toggleMenu}
        >
          John O'Hara
        </HashLink>
        <Link
          className={"nav-link" + (url === `/ExpeditionTeam` ? " active" : "")}
          to="/ExpeditionTeam"
          id="link-ExpeditionTeam"
          onClick={toggleMenu}
        >
          Expedition Team
        </Link>
        <Link
          className={"nav-link" + (url === `/Filmmakers` ? " active" : "")}
          to="/Filmmakers"
          id="link-Filmmakers"
          onClick={toggleMenu}
        >
          Filmmakers
        </Link>
        <Link
          className={"nav-link" + (url === `/Technology` ? " active" : "")}
          to="/Technology"
          id="link-Technology"
          onClick={toggleMenu}
        >
          Technology
        </Link>
        <Link
          className={"nav-link" + (url === `/Philanthropy` ? " active" : "")}
          to="/Philanthropy"
          id="link-Philanthropy"
          onClick={toggleMenu}
        >
          Philanthropy
        </Link>
      </div>
    </div>
  );
};

export default WebNav;

import "./WebNav.css";
import { Link, useRouteMatch } from "react-router-dom";

const WebNav = () => {
  let { url } = useRouteMatch();

  return (
    <div className="web-nav-container">
      <Link className="logo-container" to="/">
        <h1 className="logo">KENSU MARU</h1>
      </Link>
      <div className="links">
        <Link
          className={"nav-link" + (url === `/Synopsis` ? " active" : "")}
          to="/Synopsis"
        >
          Synopsis
        </Link>
        <Link
          className={"nav-link" + (url === `/Treasure` ? " active" : "")}
          to="/Treasure"
        >
          Treasure
        </Link>
        <Link
          className={"nav-link" + (url === `/Directors` ? " active" : "")}
          to="/Directors"
        >
          Directors
        </Link>
        <Link
          className={"nav-link" + (url === `/Crew` ? " active" : "")}
          to="/Crew"
        >
          Crew
        </Link>
        <Link
          className={"nav-link" + (url === `/Technology` ? " active" : "")}
          to="/Technology"
        >
          Technology
        </Link>
        <Link
          className={"nav-link" + (url === `/Philanthropy` ? " active" : "")}
          to="/Philanthropy"
        >
          Philanthropy
        </Link>
      </div>
    </div>
  );
};

export default WebNav;

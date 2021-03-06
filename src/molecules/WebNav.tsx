import "./WebNav.css";
import { Link, useLocation, useRouteMatch } from "react-router-dom";

const WebNav = () => {
  let { url } = useRouteMatch();
  let location = useLocation();

  return (
    <div className="web-nav-container">
      <Link className="logo" to="/">
        <h1>KENSU MARU</h1>
      </Link>
      <div className="links">
        <Link
          className={
            "nav-link" +
            (location.pathname === `${url}/Synopsis` ? " active" : "")
          }
          to="/Synopsis"
        >
          Synopsis
        </Link>
        <Link
          className={
            "nav-link" +
            (location.pathname === `${url}/Treasure` ? " active" : "")
          }
          to="/Treasure"
        >
          Treasure
        </Link>
        <Link
          className={
            "nav-link" +
            (location.pathname === `${url}/Directors` ? " active" : "")
          }
          to="/Directors"
        >
          Directors
        </Link>
        <Link
          className={
            "nav-link" + (location.pathname === `${url}/Crew` ? " active" : "")
          }
          to="/synopsis"
        >
          Crew
        </Link>
        <Link
          className={
            "nav-link" +
            (location.pathname === `${url}/Technology` ? " active" : "")
          }
          to="/synopsis"
        >
          Technology
        </Link>
        <Link
          className={
            "nav-link" +
            (location.pathname === `${url}/Philanthropy` ? " active" : "")
          }
          to="/synopsis"
        >
          Philanthropy
        </Link>
      </div>
    </div>
  );
};

export default WebNav;

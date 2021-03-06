import WebNav from "../molecules/WebNav";
import "./Layout.css";

const Layout = (props: any) => {
  return (
    <div className="layout">
      <WebNav />
      <div className="content-container"><div className="content">{props.children}</div></div>
    </div>
  );
};

export default Layout;

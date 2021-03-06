import WebNav from "../molecules/WebNav";
import "./Layout.css";

const Layout = (props: any) => {
  return (
    <div className="layout">
      <WebNav />
      <div className="content-container">{props.children}</div>
    </div>
  );
};

export default Layout;

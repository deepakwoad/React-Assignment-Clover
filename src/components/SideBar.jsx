import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { routeList } from "../utils/routeList";
import LinkComponent from "./LinkComponent";

const SideBar = () => {
  return (
    <Router>
      <div className="sidebar-main">
        <div className="sidebar">
          <h2 className="sidebar-h2">
            <Link to="/">DashBoard</Link>
          </h2>
          <ul className="nav-list">
            {routeList.map(({ path, label }) => (
              <LinkComponent key={path} path={path} label={label} />
            ))}
          </ul>
        </div>

        <div className="main-content">
          <Routes>
            {routeList.map(({ path, main }) => (
              <Route key={path} path={path} element={main} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default SideBar;

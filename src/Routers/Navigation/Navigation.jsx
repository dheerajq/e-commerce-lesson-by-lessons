import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>Logo</div>
        </Link>
        <div className="nav-link-container">
          <Link className="nav-link" to="/shop">
            shop
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};
export default Navigation;

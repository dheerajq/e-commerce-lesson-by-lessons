import { Fragment } from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import { ReactComponent as CrwnLogo } from "..//..//assets/crown.svg";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo />
        </Link>
        <div className="nav-links-container">
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

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Navigation() {
  return (
    <div className="navigation">
      <ul className="nav nav-tabs" role="tablist">
        <li>
          <NavLink to="/" exact>
            <span className="icon">
              <i className="fa fa-address-card" aria-hidden="true" />
            </span>
            <span className="title">
              <h5>thanh công cụ</h5>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-button" to="/admin" exact>
            <span className="icon">
              <i class="fa fa-book-open"></i>
            </span>
            <span className="title">quản lý sách</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
               window.localStorage.clear()
            }}
            activeClassName="active-button"
            to="/login"
            exact
          >
            <span className="icon">
              <i className="fa fa-cog" aria-hidden="true" />
            </span>
            <span className="title">đăng xuất</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default class Template extends Component {
  render() {
    return (
      <>
      <header className="header bg-dark text-white">
        <div className="nav-link">

        <NavLink to='/form' className={({isActive}) => isActive ?'text-info nav-link':'nav-link text-white' }>Form</NavLink>
        </div>
      </header>
        <div className="content" style= {{
          height:'95vh',
        }}>
          <Outlet />
        </div>
        <footer className="footer bg-dark text-white">Footer</footer>
      </>
    );
  }
}

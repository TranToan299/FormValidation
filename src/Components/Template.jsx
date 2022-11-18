import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default class Template extends Component {
  render() {
    return (
      <>
      <header className="header bg-dark text-white">
        <div className="nav-link">

        <NavLink to='/form' className={({isActive}) => isActive ?'text-info nav-link':'nav-link text-white' }>Click vào đây để vào Form</NavLink>
        </div>
      </header>
        <section className="content" >
          <Outlet />
        </section>
      <footer className="bg-dark text-white d-block" style={{
        position : 'absolute',
        width:'100%',
        bottom : '0',
        height :'40px',
        marginTop : '40px',

      }}>Footer</footer>
      </>
    );
  }
}

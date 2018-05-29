import React from "react";
import { NavLink } from "react-router-dom";
// import * as img from '../../images/index';
import "./Welcome.css";

export const Welcome = () => {

  return (
    <div className="full-page">
      <section className="class-select-container">
        <NavLink to="/Brute">
          <div className="brute"></div>
        </NavLink>
        <NavLink to="/Cragheart">
          <div className="cragheart"></div>
        </NavLink>
        <NavLink to="/Mindthief">
          <div className="mindthief"></div>
        </NavLink>
        <NavLink to="/Scoundrel">
          <div className="scoundrel"></div>
        </NavLink>
        <NavLink to="/Spellweaver">
          <div className="spellweaver"></div>
        </NavLink>
        <NavLink to="/Tinkerer">
          <div className="tinkerer"></div>
        </NavLink>
      </section>
    </div>
  );
};

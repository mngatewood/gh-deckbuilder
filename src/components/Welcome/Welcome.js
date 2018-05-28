import React from "react";
import { NavLink } from "react-router-dom";
// import * as img from '../../images/index';
import "./Welcome.css";

export const Welcome = () => {

  return (
    <div className="full-page">
    <section className="class-select-container">
      <NavLink to="/Brute" className="brute"></NavLink>
      <NavLink to="/Cragheart" className="cragheart"></NavLink>
      <NavLink to="/Mindthief" className="mindthief"></NavLink>
      <NavLink to="/Scoundrel" className="scoundrel"></NavLink>
      <NavLink to="/Spellweaver" className="spellweaver"></NavLink>
      <NavLink to="/Tinkerer" className="tinkerer"></NavLink>
    </section>
    </div>
  );
};

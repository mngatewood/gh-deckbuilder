import React from "react";
import { NavLink } from "react-router-dom";
import "./Welcome.css";

export const Welcome = () => {

  return (
    <section className="welcome-section">
      <div className="class-title-wrapper">
        <h1 className="class-title">CLASS SELECT</h1>
      </div>
      <div className="full-page">
        <section className="class-select-container">
          <NavLink to="/Brute">
            <div className="brute"></div>
            <h1 className="class-title-h1">BRUTE</h1>
          </NavLink>
          <NavLink to="/Cragheart">
            <div className="cragheart"></div>
            <h1 className="class-title-h1">CRAGHEART</h1>
          </NavLink>
          <NavLink to="/Mindthief">
            <div className="mindthief"></div>
            <h1 className="class-title-h1">MINDTHIEF</h1>
          </NavLink>
          <NavLink to="/Scoundrel">
            <div className="scoundrel"></div>
            <h1 className="class-title-h1">SCOUNDREL</h1>
          </NavLink>
          <NavLink to="/Spellweaver">
            <div className="spellweaver"></div>
            <h1 className="class-title-h1">SPELLWEAVER</h1>
          </NavLink>
          <NavLink to="/Tinkerer">
            <div className="tinkerer"></div>
            <h1 className="class-title-h1">TINKERER</h1>
          </NavLink>
        </section>
      </div>
    </section>
  );
};


import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  const titleImg = require('../../images/cropped-gloomhaven-logo.png');

  return (
    <header>
      <Link to="/">
        <img className="header-title-image" src={titleImg} alt="title"/>
      </Link>
    </header>
  );
};
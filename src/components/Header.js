import React from 'react';
import config from '../../config';
import cardboard from '../assets/images/vr-cardboard-solid.svg';

export default function Header() {
  return (
    <div id="header">
      <span className="logo icon fa-vr-cardboard"><img src={cardboard}></img></span>
      <h1>{config.heading}</h1>
      <p>{config.subHeading}</p>
    </div>
  );
}

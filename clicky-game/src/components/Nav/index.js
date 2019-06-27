import React from 'react';
import "./styles.css";

function Nav(props) {
  return (
    <>
    <nav className="navBar">
        <h1><b>Clicky Game</b></h1>
        <h3>Click and image to begin!</h3>
        <h3>Score: {props.score} | Top Score: {props.highScore}</h3>
    </nav>
    </>
  );
}

export default Nav;

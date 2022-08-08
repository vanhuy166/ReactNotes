import React from "react";
import "./styles.scss";

interface Iprops {
  handleToggleDarkMode: any,
}

const Header = (props: Iprops) => {
  return (
    <div className="header">
      <h1>
        <span>React</span> Notes
      </h1>
      <button
        className="save"
        onClick={() =>
          props.handleToggleDarkMode((previousDarkMode:boolean) => !previousDarkMode)
        }
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;

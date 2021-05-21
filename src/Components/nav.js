import React, { useState, useEffect } from "react";
import Search from "./search";
import { SetTheme } from "./themes";

function Nav() {
  const [togClass, setTogClass] = useState("dark");
  let theme = localStorage.getItem("theme");
  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      SetTheme("theme-light");
      setTogClass("light");
    } else {
      SetTheme("theme-dark");
      setTogClass("dark");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTogClass("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTogClass("light");
    }
  }, [theme]);

  return (
    <nav className="color-web al-cen-between row">
      <div className="logo big-text">TodoList</div>

      <div className=" row input-div">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="i-size"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <Search />
      </div>

      <div>
        <div className="container--toggle">
          {togClass === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="theme-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={handleOnClick}
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="theme-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={handleOnClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
          <label htmlFor="toggle" className="toggle--label">
            <span className="toggle--label-background"></span>
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

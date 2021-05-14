import React from "react";
import Search from "./search";

function Nav() {
  return (
    <nav className="color-web al-cen-between row">
      <div className='logo big-text'>TodoList</div>

      <div className=' row input-div'>
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
         <Search/>
      </div>

      <div>

          {/* theme icon */}
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="i-size"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
      </div>
    </nav>
  );
}

export default Nav;

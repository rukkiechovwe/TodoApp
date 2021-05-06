import React from "react";

function Nav() {
  return (
    <nav className="color-web al-cen-between">
      <div className='text'>Today</div>

      <div className='al-jus-cen row input-div'>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 i-size"
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
         <input placeholder='search tasks'/>
      </div>

      <div>
         {/* add icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 i-size"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>

          {/* task icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 i-size"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>

          {/* adjustment icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 i-size"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>

          {/* settings icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 i-size"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </nav>
  );
}

export default Nav;

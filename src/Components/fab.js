import React from 'react'

export default function Fab({onClick}) {
   return (
      <button onClick={onClick} className="fab row al-jus-cen">
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
            strokeWidth={3}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
   )
}

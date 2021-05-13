import React, { useContext } from "react";
import { AppContext, SearchContext } from "../App";

function TodoList() {
  const context = useContext(AppContext);
  const searchContext = useContext(SearchContext);
  return (
    <ul>
      {searchContext.result.length === 0
        ? context.tasks.map((item, i) => (
            <li key={`${item}.${i}`} className="color-list">
              <div className="list-item row al-cen-between">
                <div className="row al-jus-cen">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="col al-start">
                    <span className="title">{item.title}</span>
                    <span className="reminder text-info">{item.reminder}</span>
                    {/* <span className="reminder text-info">today</span> */}
                  </div>
                </div>

                <div className="list-icon" onClick={() => context.deleteItem(item.id)}>
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
              </div>
            </li>
          ))
        : searchContext.result.map((item, i) => (
            <li key={`${item}.${i}`} className="color-list">
              <div className="list-item row al-cen-between">
                <div className="row al-jus-cen">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="col al-start">
                    <span className="title">{item.title}</span>
                    <span className="reminder text-info">{item.reminder}</span>
                    {/* <span className="reminder text-info">today</span> */}
                  </div>
                </div>

                <div className="list-icon" onClick={() => context.deleteItem(item.id)}>
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
              </div>
            </li>
          ))}
    </ul>
  );
}

export default TodoList;

import React, { useContext } from "react";
import { AppContext, SearchContext } from "../App";
import edit from  "../assets/img/edit.png"
import flag from  "../assets/img/flag.png"
import alarm from  "../assets/img/alarm.png"

function TodoList() {
  const context = useContext(AppContext);
  const searchContext = useContext(SearchContext);
  return (
      <ul>
        {/* display all tasks if search result = 0 */}
        {searchContext.result.length === 0
          ? context.tasks &&
            context.tasks.map((item, i) => (
              <li key={`${item}.${i}`} className="color-list">
                <div className="list-item col al-start">
                    
                    <div className="row al-cen-between fw">
                      <span className="title"
                          style={{
                            textDecoration: item.completed && "line-through",
                          }}>{item.title}</span>
                      <span className="reminder text-info">{item.reminder}</span>
                    </div>

                    <div className="list-icon row al-cen-between fw">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="i-size"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={() => context.completedItem(item.id)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {/* reminder */}
                      <button onClick={() => context.hasReminder(item.id)} className="img-size">
                        <img src={alarm} alt="alarm"/>
                      </button>
                      {/* priority */}
                      <button onClick={() => context.priority(item.id)} className="img-size">
                        <img src={flag} alt="flag"/>
                      </button>
                      {/* edit */}
                      <button className="img-size">
                        <img src={edit} alt="edit"/>
                      </button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="i-size"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={() => context.deleteItem(item.id)}
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
            <div className="list-item col al-start">
                
                <div className="row al-cen-between fw">
                  <span className="title"
                      style={{
                        textDecoration: item.completed && "line-through",
                      }}>{item.title}</span>
                  <span className="reminder text-info">{item.reminder}</span>
                </div>

                <div className="list-icon row al-cen-between fw">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="i-size"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => context.completedItem(item.id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="i-size"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => context.deleteItem(item.id)}
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

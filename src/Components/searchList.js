import React, { useContext } from "react";
import { AppContext } from "../App";
import editIcon from "../assets/img/editIcon.png";
import flagIcon from "../assets/img/flagIcon.png";
import alarmIcon from "../assets/img/alarmIcon.png";
import deleteIcon from "../assets/img/deleteIcon.png";

function SearchList({item, completedItem, deleteItem, priority, hasReminder}) {
  const context = useContext(AppContext);

  return (
      <div
        className={`${
          item.priority === true
            ? `priority col al-start list-item`
            : `list-item col al-start`
        }`}
      >
        <div className="row al-cen-between fw">
          <span
            className="title"
            style={{
              textDecoration: item.completed && "line-through",
            }}
          >
            {item.title}
          </span>
          <span className="reminder text-info">{item.reminder}</span>
        </div>

        <div className="list-icon row al-cen-between fw">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="i-size"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => completedItem(item.id)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {/* reminder */}
          <button
            onClick={() => hasReminder(item.id)}
            className="img-size"
          >
            <img src={alarmIcon} alt="alarm" />
          </button>
          {/* priority */}
          <button
            onClick={() => priority(item.id)}
            className="img-size"
          >
            <img src={flagIcon} alt="flag" />
          </button>
          {/* edit */}
          <button className="img-size">
            <img src={editIcon} alt="edit" />
          </button>
          {/* delete */}
          <button
            onClick={() => deleteItem(item.id)}
            className="img-size"
          >
            <img src={deleteIcon} alt="deleteIcon" />
          </button>
        </div>
      </div>
  );
}

export default SearchList;

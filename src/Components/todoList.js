import React, { useState, useContext } from "react";
import { AppContext } from "../Context/appContext";
import MenuItemPopup from "./menuItemPopup";

function TodoList({ item }) {
  const context = useContext(AppContext);
  const [iconPopup, setIconPopup] = useState(false);
  return (
    <div
      className={`${
        item.priority === true
          ? `priority col al-start list-item`
          : `list-item col al-start`
      }`}
    >
      <div className="row al-cen-between fw">
        <div className="row al-cen-between">
          <div><input type="checkbox" onClick={() => context.completedItem(item.id)}/></div>
          <span
            className="title"
            style={{
              textDecoration: item.completed && "line-through",
            }}
          >
            {item.title}
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="i-size popup-menu"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => setIconPopup(true)}
        >
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
        {/* <span className="reminder text-info">{item.reminder}</span> */}
      </div>
      <MenuItemPopup
        itemId={item.id}
        iconPopup={iconPopup}
        setIconPopup={setIconPopup}
      />
    </div>
  );
}

export default TodoList;

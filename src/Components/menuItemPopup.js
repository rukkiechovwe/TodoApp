import React, { useContext } from "react";
import { AppContext } from "../Context/appContext";

import editIcon from "../assets/img/editIcon.png";
import flagIcon from "../assets/img/flagIcon.png";
import alarmIcon from "../assets/img/alarmIcon.png";
import deleteIcon from "../assets/img/deleteIcon.png";
import { ShowFormContext } from "../Context/modalContext";

function MenuItemPopup({ itemId, iconPopup, setIconPopup }) {
  const context = useContext(AppContext);

  const formContext = useContext(ShowFormContext);
  return (
    <div
      className="list-icon col al-start fw"
      style={{
        display: iconPopup && "flex",
      }}
      onMouseLeave={() => setIconPopup(false)}
    >
      <MenuItem
        icon={alarmIcon}
        label="Set Reminder"
        onClick={() => {
          setIconPopup(false);
          context.hasReminder(itemId);
        }}
      />
      <MenuItem
        icon={flagIcon}
        label="Set Priority"
        onClick={() => {
          setIconPopup(false);
          context.priority(itemId);
        }}
      />
      <MenuItem
        icon={editIcon}
        label="Edit"
        onClick={() => {
          setIconPopup(false);
          context.setCurTask(context.tasks.find((task) => task.id === itemId));
          formContext.setShowForm(2);
        }}
      />
      <MenuItem
        icon={deleteIcon}
        label="Delete"
        onClick={() => {
          setIconPopup(false);
          context.deleteItem(itemId);
        }}
      />
    </div>
  );
}

export default MenuItemPopup;

function MenuItem({ icon, label, onClick }) {
  return (
    <div className="row fw" onClick={onClick}>
      <button className="img-size">
        <img src={icon} alt={label} />
      </button>
      <span className="text">{label}</span>
    </div>
  );
}

import React from "react";

import editIcon from "../assets/img/editIcon.png";
import flagIcon from "../assets/img/flagIcon.png";
import alarmIcon from "../assets/img/alarmIcon.png";
import deleteIcon from "../assets/img/deleteIcon.png";

function MenuItemPopup({
  item,
  hasReminder,
  priority,
  deleteItem,
  iconPopup,
  setIconPopup,
}) {
  return (
    <div
      className="list-icon col al-start fw"
      style={{
        display: iconPopup && "flex",
      }}
      // onMouseLeave={() => setIconPopup(false)}
      onMouseOut={() => setIconPopup(false)}
    >
      <MenuItem
        icon={alarmIcon}
        label="Set Reminder"
        onClick={() => {
          setIconPopup(false);
          hasReminder(item.id);
        }}
      />
      <MenuItem
        icon={flagIcon}
        label="Set Priority"
        onClick={() => {
          setIconPopup(false);
          priority(item.id);
        }}
      />
      <MenuItem icon={editIcon} label="Edit" />
      <MenuItem
        icon={deleteIcon}
        label="Delete"
        onClick={() => {
          setIconPopup(false);
          deleteItem(item.id);
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

import React, { useContext } from "react";
import { AppContext, SearchContext } from "../App";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import editIcon from "../assets/img/editIcon.png";
import flagIcon from "../assets/img/flagIcon.png";
import alarmIcon from "../assets/img/alarmIcon.png";
import deleteIcon from "../assets/img/deleteIcon.png";

function TodoList() {
  const context = useContext(AppContext);
  const searchContext = useContext(SearchContext);

  // const onDragEnd = console.log("drag")

  return (
    <DragDropContext>
      <Droppable droppableId="items">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {provided.placeholder}
            {searchContext.result.length === 0
              ? context.tasks &&
                context.tasks.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.title}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        className="color-list"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
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
                                textDecoration:
                                  item.completed && "line-through",
                              }}
                            >
                              {item.title}
                            </span>
                            <span className="reminder text-info">
                              {item.reminder}
                            </span>
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
                            <button
                              onClick={() => context.hasReminder(item.id)}
                              className="img-size"
                            >
                              <img src={alarmIcon} alt="alarm" />
                            </button>
                            {/* priority */}
                            <button
                              onClick={() => context.priority(item.id)}
                              className="img-size"
                            >
                              <img src={flagIcon} alt="flag" />
                            </button>
                            {/* edit */}
                            <button
                              className="img-size"
                              // onClick={() => {
                              //   formContext.setShowForm(true);
                              //   formContext.setFormType("edit")
                              // }}
                            >
                              <img src={editIcon} alt="edit" />
                            </button>
                            {/* delete */}
                            <button
                              onClick={() => context.deleteItem(item.id)}
                              className="img-size"
                            >
                              <img src={deleteIcon} alt="deleteIcon" />
                            </button>
                          </div>
                        </div>
                      </li>
                    )}
                  </Draggable>
                ))
              : searchContext.result.map((item, i) => (
                  <li key={`${item}.${i}`} className="color-list">
                    <div className="list-item col al-start">
                      <div className="row al-cen-between fw">
                        <span
                          className="title"
                          style={{
                            textDecoration: item.completed && "line-through",
                          }}
                        >
                          {item.title}
                        </span>
                        <span className="reminder text-info">
                          {item.reminder}
                        </span>
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
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TodoList;

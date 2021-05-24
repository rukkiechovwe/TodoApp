import React, { useContext } from "react";
import { AppContext } from "../Context/appContext";
import { SearchContext } from "../Context/searchContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TodoList from "../Components/todoList";
import SearchList from "./searchList";

function DnD() {
  const context = useContext(AppContext);
  const searchContext = useContext(SearchContext);

  const onDragEnd = (result) => {
    // return if item was dropped outside
    if (!result.destination) return;
    // return if the item was dropped in the same place
    if (
      result.source.droppableId === result.destination.droppableId &&
      result.source.index === result.destination.index
    )
      return;
    // get the items array
    const newItems = context.tasks;
    // get the draggedItems
    const draggedItem = newItems[result.source.index];
    // delete the item from source position and insert it to the destination positon
    newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, draggedItem);
    // update state
    context.setTasks(newItems);
    window.localStorage.setItem("tasks", JSON.stringify(newItems));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
                        <TodoList item={item} />
                      </li>
                    )}
                  </Draggable>
                ))
              : searchContext.result.map((item, i) => (
                  <Draggable key={item.id} draggableId={item.title} index={i}>
                    {(provided) => (
                      <li
                        key={item.id}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="color-list"
                      >
                        <SearchList item={item} />
                      </li>
                    )}
                  </Draggable>
                ))}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DnD;

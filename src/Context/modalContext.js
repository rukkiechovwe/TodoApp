import React, { useState } from "react";

export const ShowFormContext = React.createContext();

function ShowFormContextProvider(props) {
  const [showForm, setShowForm] = useState(0);
  // use 0 to hide the modal and use 1 for add todoForm and 2 for edit taskForm
  return (
    <ShowFormContext.Provider
      value={{
        showForm: showForm,
        setShowForm: setShowForm,
      }}
    >
      {props.children}
    </ShowFormContext.Provider>
  );
}

export default ShowFormContextProvider;

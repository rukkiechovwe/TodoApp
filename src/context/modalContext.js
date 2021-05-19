import React, { useState } from "react";

export const ShowFormContext = React.createContext();

function ShowFormContextProvider(props) {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("add");
  return (
    <ShowFormContext.Provider
      value={{
        showForm: showForm,
        setShowForm: setShowForm,
        formType: formType,
        setFormType: setFormType,
      }}
      
    >
      {props.children}
    </ShowFormContext.Provider>
  );
}

export default ShowFormContextProvider;

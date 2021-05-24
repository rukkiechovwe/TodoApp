import React, { useState } from "react";

export const SearchContext = React.createContext();
function SearchContextProvider({ children }) {
  const [result, setResult] = useState([]);

  return (
    <SearchContext.Provider value={{ result: result, setResult: setResult }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;

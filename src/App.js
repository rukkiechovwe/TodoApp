import React, { useEffect } from "react";
import "./App.scss";
import Nav from "./Components/nav";
import { KeepTheme } from "./Utils/theme";
import Home from "./Pages/home";
import AppContextProvider from "./Context/appContext";
import SearchContextProvider from "./Context/searchContext";
import ShowFormContextProvider from "./Context/modalContext";

function App() {
  useEffect(() => {
    KeepTheme();
  });

  return (
    <AppContextProvider>
      <SearchContextProvider>
        <ShowFormContextProvider>
          <Nav />
          <Home />
        </ShowFormContextProvider>
      </SearchContextProvider>
    </AppContextProvider>
  );
}

export default App;

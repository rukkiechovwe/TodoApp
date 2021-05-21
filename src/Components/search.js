import React, { useContext, useState, useEffect } from "react";
import { AppContext, SearchContext } from "../App";

function Search() {
  const appContext = useContext(AppContext);
  const searchContext = useContext(SearchContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const res = appContext.tasks.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    searchContext.setResult(res);
  }, [search]);
  return (
      <input
        className="fw color-web"
        placeholder="search tasks"
        onChange={(e) => setSearch(e.target.value)}
      />
  );
}

export default Search;

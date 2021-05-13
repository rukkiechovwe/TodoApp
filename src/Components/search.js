import React, { useContext, useState, useEffect } from "react";
import { AppContext, SearchContext } from "../App";

function Search() {
  const appContext = useContext(AppContext);
  const searchContext = useContext(SearchContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const res = appContext.tasks.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
    searchContext.setResult(res);
  }, [search]);
  return (
    <div>
      <input
        placeholder="search tasks"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;

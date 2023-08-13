import React from "react";

import Categories from "./modules/Categories";
import Search from "./modules/Search";

function FiltersContainer() {
  return (
    <div className="max-w-md bg-white space-y-5 mx-auto p-3 rounded shadow-lg">
      <Categories />
      <Search />
    </div>
  );
}

export default FiltersContainer;

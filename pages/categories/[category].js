import React from "react";

import { useRouter } from "next/router";

import { CarsContext } from "@/context/CarsContextProvider";

import FilteredCarsListPage from "@/components/templates/FilteredCarsListPage";

function FilteredCarsList() {
  const router = useRouter();
  const { category } = router.query;

  const carsListData = React.useContext(CarsContext);

  const filteredCarsList = carsListData.filter(
    (item) => item.category === category
  );

  return <FilteredCarsListPage filteredCarsList={filteredCarsList} />;
}

export default FilteredCarsList;

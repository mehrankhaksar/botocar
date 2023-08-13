import React from "react";

import { CarsContext } from "@/context/CarsContextProvider";

import FiltersContainer from "@/components/FiltersContainer";
import CarsListPage from "@/components/templates/CarsListPage";

function CarsList() {
  const carsListData = React.useContext(CarsContext);

  return (
    <section className="w-full flex flex-col items-center space-y-10">
      <FiltersContainer />
      <CarsListPage carsListData={carsListData} />
    </section>
  );
}

export default CarsList;

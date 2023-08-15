import React from "react";

import FiltersContainer from "@/components/FiltersContainer";
import CarsListPage from "@/components/templates/CarsListPage";

function CarsList({ data }) {
  return (
    <section className="w-full flex flex-col items-center space-y-10">
      <FiltersContainer />
      <CarsListPage carsListData={data} />
    </section>
  );
}

export default CarsList;

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  return {
    props: { data },
  };
}

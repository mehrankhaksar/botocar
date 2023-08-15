import React from "react";

import { useRouter } from "next/router";

import FilteredCarsListPage from "@/components/templates/FilteredCarsListPage";

function FilteredCarsList({ data }) {
  const router = useRouter();
  const { category } = router.query;

  const filteredCarsList = data.filter((item) => item.category === category);

  return <FilteredCarsListPage filteredCarsList={filteredCarsList} />;
}

export default FilteredCarsList;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  return {
    props: { data },
  };
}

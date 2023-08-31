import React from "react";

import { useRouter } from "next/router";

import FilteredCarsListPage from "@/components/templates/FilteredCarsListPage";

function FilteredCarsList({ data }) {
  const router = useRouter();
  const [minPrice, maxPrice] = router.query.slug || [];

  const filteredCarsList = data.filter(
    (item) => item.price > minPrice && item.price < maxPrice
  );

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

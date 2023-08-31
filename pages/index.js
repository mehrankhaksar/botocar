import React from "react";

import Link from "next/link";

import FiltersContainer from "@/components/modules/FiltersContainer";
import CarsListPage from "@/components/templates/CarsListPage";

function Home({ data }) {
  const newCarsListData = data.slice(0, 3);

  return (
    <section className="w-full flex flex-col items-center space-y-4">
      <FiltersContainer />
      <Link
        className="w-full font-semibold text-center bg-[#befa00] py-1.5 rounded-md sm:max-w-sm"
        href="/cars"
      >
        See All Cars
      </Link>
      <CarsListPage carsListData={newCarsListData} />
    </section>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  return {
    props: { data },
  };
}

export default Home;

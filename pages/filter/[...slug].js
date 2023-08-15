import React from "react";

import { useRouter } from "next/router";

import { RiArrowLeftSLine } from "react-icons/ri";

import Button from "@/components/Elements/Button";
import Card from "@/components/modules/Card";

function FilteredCarsList({ data }) {
  const router = useRouter();
  const [minPrice, maxPrice] = router.query.slug || [];

  const filteredCarsList = data.filter(
    (item) => item.price > minPrice && item.price < maxPrice
  );

  return (
    <section className="w-full relative bg-white space-y-5 p-3 rounded shadow-lg">
      <Button
        styles="flex items-center font-semibold bg-[#befa00] py-2 px-3 rounded-sm"
        value={
          <>
            <RiArrowLeftSLine size={25} />
            Back
          </>
        }
        onClick={() => router.back()}
      />
      {!filteredCarsList.length ? (
        <h3 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-semibold text-white bg-red-500 py-5 px-10 rounded-md">
          Not Found!
        </h3>
      ) : (
        <ul className="grid justify-center gap-3 sm:grid-cols-2 md:grid-cols-3">
          {filteredCarsList.map((item) => (
            <li key={item.id}>
              <Card {...item} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default FilteredCarsList;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  return {
    props: { data },
  };
}

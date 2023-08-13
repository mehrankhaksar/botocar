import React from "react";

import { useRouter } from "next/router";

import { CarsContext } from "@/context/CarsContextProvider";

import { RiArrowLeftSLine } from "react-icons/ri";

import Button from "@/components/Elements/Button";
import CarsCard from "@/components/modules/CarsCard";

function FilteredCarsList() {
  const router = useRouter();
  const [minPrice, maxPrice] = router.query.slug || [];

  const carsListData = React.useContext(CarsContext);

  const filteredCarsList = carsListData.filter(
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
              <CarsCard {...item} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default FilteredCarsList;

import React from "react";

import { useRouter } from "next/router";

import { RiArrowLeftSLine } from "react-icons/ri";

import Button from "../Elements/Button";
import Card from "../modules/Card";

function FilteredCarsListPage({ filteredCarsList }) {
  const router = useRouter();

  return (
    <section className="w-full h-full relative space-y-5 p-3 rounded shadow-lg">
      <Button
        styles="flex items-center font-semibold bg-[#befa00] py-2 px-3 rounded-sm"
        value={
          <>
            <RiArrowLeftSLine />
            Back
          </>
        }
        onClick={() => router.back()}
      />
      {filteredCarsList.length ? (
        <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {filteredCarsList.map((item) => (
            <li key={item.id}>
              <Card {...item} />
            </li>
          ))}
        </ul>
      ) : (
        <h3 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-semibold text-white bg-red-500 py-5 px-10 rounded-md">
          Not Found!
        </h3>
      )}
    </section>
  );
}

export default FilteredCarsListPage;

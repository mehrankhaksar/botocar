import React from "react";

import { useRouter } from "next/router";

import { RiArrowLeftSLine } from "react-icons/ri";

import Button from "../Elements/Button";
import Card from "../modules/Card";

function FilteredCarsListPage({ filteredCarsList }) {
  const router = useRouter();

  return (
    <section className="w-full space-y-5 bg-white p-3 rounded shadow-lg">
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
      <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {filteredCarsList.map((item) => (
          <li key={item.id}>
            <Card {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FilteredCarsListPage;

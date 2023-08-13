import React from "react";

import Link from "next/link";

import Sedan from "../Icons/Sedan";
import Suv from "../Icons/Suv";
import Hatchback from "../Icons/Hatchback";
import Sport from "../Icons/Sport";

function Categories() {
  return (
    <div className="grid grid-cols-2 gap-2 bg-white p-2 rounded-md shadow-md sm:grid-cols-4">
      <Link href="/categories/sedan" className="category">
        Sedan
        <div>
          <Sedan />
        </div>
      </Link>
      <Link href="/categories/suv" className="category">
        SUV
        <div>
          <Suv />
        </div>
      </Link>
      <Link href="/categories/hatchback" className="category">
        Hatchback
        <div>
          <Hatchback />
        </div>
      </Link>
      <Link href="/categories/sport" className="category">
        Sport
        <div>
          <Sport />
        </div>
      </Link>
    </div>
  );
}

export default Categories;

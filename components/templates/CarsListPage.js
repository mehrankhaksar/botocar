import React from "react";

import Loader from "../Elements/Loader";
import CarsCard from "../modules/CarsCard";

function CarsListPage({ carsListData }) {
  return (
    <section className="w-full flex-1 bg-white p-3 rounded shadow-lg">
      {!carsListData.length ? (
        <div className="w-full h-full flex justify-center items-center">
          <Loader width={200} height={200} />
        </div>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {carsListData.map((item) => (
            <li key={item.id}>
              <CarsCard {...item} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default CarsListPage;

import { useContext } from "react";

import { CarsContext } from "@/context/CarsContextProvider";

import FiltersContainer from "@/components/FiltersContainer";
import Button from "@/components/Elements/Button";
import CarsListPage from "@/components/templates/CarsListPage";

export default function Home() {
  const carsListData = useContext(CarsContext);

  const newCarsListData = carsListData.slice(0, 3);

  return (
    <section className="w-full flex flex-col items-center space-y-4">
      <FiltersContainer />
      <Button
        styles="w-full h-fit font-semibold bg-[#befa00] py-2 rounded-md sm:max-w-sm"
        path="/cars"
        value="See All Cars"
      />
      <CarsListPage carsListData={newCarsListData} />
    </section>
  );
}

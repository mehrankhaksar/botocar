import React from "react";

import { useRouter } from "next/router";

import { CarsContext } from "@/context/CarsContextProvider";

import CarDetailsPage from "@/components/templates/CarDetailsPage";

function CarDetails() {
  const router = useRouter();
  const { carId } = router.query;

  const carsListData = React.useContext(CarsContext);

  const selectedCarData = carsListData[carId - 1];

  return <CarDetailsPage {...selectedCarData} />;
}

export default CarDetails;

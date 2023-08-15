import React from "react";

import CarDetailsPage from "@/components/templates/CarDetailsPage";

function CarDetails({ data }) {
  return <CarDetailsPage {...data} />;
}

export default CarDetails;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  const newData = data.slice(0, 6);

  const paths = newData.map((item) => ({
    params: { carId: item.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const {
    params: { carId },
  } = context;

  const res = await fetch(`${process.env.BASE_URL}/data/${carId}`);
  const data = await res.json();

  if (!data.name) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

import React from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import { Disclosure } from "@headlessui/react";

import { RiArrowLeftSLine } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { PiMoney } from "react-icons/pi";

import Button from "../Elements/Button";

function CarDetailsPage({
  name,
  model,
  image,
  year,
  distance,
  location,
  description,
  price,
}) {
  const router = useRouter();

  return (
    <section className="max-w-3xl w-full h-fit bg-white space-y-5 mx-auto p-3 rounded shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">
          {name} {model}
        </h3>
        <Button
          styles="flex items-center text-sm font-semibold bg-[#befa00] py-1.5 px-2 rounded"
          value={
            <>
              <RiArrowLeftSLine size={20} />
              Back
            </>
          }
          onClick={() => router.back()}
        />
      </div>
      <div className="grid gap-5 bg-white p-3 rounded shadow-lg sm:grid-cols-2 sm:content-center">
        <Image
          className="w-full rounded-sm"
          src={image}
          width={250}
          height={250}
          alt={name}
        />
        <div className="space-y-2.5">
          <div className="bg-white space-y-3 p-3 rounded-md shadow-md">
            <div className="car-detail">
              <span>Company:</span>
              {name}
            </div>
            <div className="car-detail">
              <span>Model:</span>
              {model}
            </div>
            <div className="car-detail">
              <span>First Registration:</span>
              {year}
            </div>
            <div className="car-detail">
              <span>KMS Driven:</span>
              {distance}
            </div>
          </div>
          <div className="flex justify-between items-center text-sm bg-white p-3 rounded-md shadow-md">
            <div className="flex items-center space-x-1">
              <HiOutlineLocationMarker size={20} />
              <span className="font-semibold">Location</span>
            </div>
            {location}
          </div>
        </div>
      </div>
      <Disclosure>
        {({ open }) => (
          <div className="bg-white space-y-3 p-3 rounded-md shadow-md">
            <Disclosure.Button className="w-full flex justify-between items-center">
              <h4 className="text-sm font-bold">Extra Information</h4>
              {open ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </Disclosure.Button>
            <Disclosure.Panel>
              <p className="text-[#454545] text-justify">{description}</p>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
      <div className="flex justify-between items-center text-sm bg-white p-3 rounded-md shadow-md">
        <div className="flex items-center space-x-1">
          <PiMoney size={20} />
          <span className="font-semibold">Price:</span>
        </div>
        {price}$
      </div>
      <Button
        styles="w-full font-semibold bg-[#befa00] py-2 rounded"
        value="Buy"
      />
    </section>
  );
}

export default CarDetailsPage;

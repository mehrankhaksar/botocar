import React from "react";

import Link from "next/link";
import Image from "next/image";

import { HiOutlineLocationMarker } from "react-icons/hi";

function Card({ id, image, name, model, year, distance, price, location }) {
  return (
    <Link href={`/cars/${id}`}>
      <article className="space-y-3 p-4 rounded-sm shadow-md">
        <Image
          className="w-full object-contain rounded-sm"
          src={image}
          width={250}
          height={250}
          loading="eager"
          priority={true}
          alt={name}
        />
        <div className="grid gap-2">
          <h4 className="font-semibold">
            {name} {model}
          </h4>
          <span className="text-sm">
            {year} - {distance}KM
          </span>
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold bg-[#befa00] py-1 px-2 rounded-sm">
              {price}$
            </span>
            <div className="flex items-center text-sm font-semibold">
              {location}
              <HiOutlineLocationMarker size={20} />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default Card;

import React from "react";

import { useRouter } from "next/router";

import { toast } from "react-toastify";

import Button from "../Elements/Button";

function Search() {
  const [price, setPrice] = React.useState({
    minPrice: "",
    maxPrice: "",
  });

  const router = useRouter();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setPrice({ ...price, [name]: value });
  };

  const searchHandler = () => {
    if (price.minPrice && price.maxPrice) {
      router.push(`/filter/${price.minPrice}/${price.maxPrice}`);
    } else {
      toast.error("Please enter minimum maximum price!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="grid gap-5 bg-white p-2 rounded-md shadow-md sm:grid-cols-4">
      <div className="space-y-3 sm:col-span-3">
        <input
          className="w-full py-1 px-2 shadow"
          type="number"
          name="minPrice"
          min={0}
          value={price.minPrice}
          placeholder="Inter min-price"
          onChange={changeHandler}
        />
        <input
          className="w-full py-1 px-2 shadow"
          type="number"
          name="maxPrice"
          min={0}
          value={price.maxPrice}
          placeholder="Inter Max-price"
          onChange={changeHandler}
        />
      </div>
      <Button
        styles="font-semibold bg-[#befa00] py-2 rounded-md"
        value="Search"
        onClick={searchHandler}
      />
    </div>
  );
}

export default Search;

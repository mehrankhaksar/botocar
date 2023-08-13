import React from "react";

import Link from "next/link";

function Header() {
  return (
    <Link href="/">
      <header>
        <div className="max-w-sm grid justify-items-center bg-[#befa00] mx-auto py-5 rounded-md rounded-t-none">
          <h2 className="text-2xl font-bold mb-1.5 pb-1 border-b-2 border-solid border-black">
            BOTOCAR
          </h2>
          <p>Choose and Buy your car</p>
        </div>
      </header>
    </Link>
  );
}

export default Header;

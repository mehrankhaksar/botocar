import React from "react";

import Link from "next/link";

function Header() {
  return (
    <Link href="/">
      <header className="max-w-sm w-full bg-[#befa00] mx-auto py-5 rounded-b-md">
        <div className="w-full text-center">
          <h2 className="inline-block text-2xl font-bold mb-1.5 pb-1 border-b-2 border-solid border-black">
            BOTOCAR
          </h2>
          <p>Choose and Buy your car</p>
        </div>
      </header>
    </Link>
  );
}

export default Header;

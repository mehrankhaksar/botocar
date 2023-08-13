import React from "react";

import { Poppins } from "next/font/google";

import Header from "./Header";
import Footer from "./Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

function Layout({ children }) {
  return (
    <div
      className={`${poppins.className} min-h-screen flex flex-col justify-between bg-[#f7f7f7]`}
    >
      <Header />
      <div className="max-w-6xl w-full flex-1 flex justify-center my-5 px-5 mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

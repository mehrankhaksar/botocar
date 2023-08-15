import React from "react";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f7f7f7]">
      <Header />
      <div className="max-w-6xl w-full flex-1 flex justify-center my-5 px-5 mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

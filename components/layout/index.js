import React from "react";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between font-Poppins overflow-hidden">
      <Header />
      <main className="w-full flex-1 p-5">
        <div className="max-w-6xl w-full h-full mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

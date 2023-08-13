import CarsContextProvider from "@/context/CarsContextProvider";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import Layout from "@/components/layout/Layout";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <CarsContextProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </CarsContextProvider>
  );
}

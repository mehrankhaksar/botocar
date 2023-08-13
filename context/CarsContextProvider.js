import React from "react";

export const CarsContext = React.createContext();

function CarsContextProvider({ children }) {
  const [carsListData, setCarsListData] = React.useState([]);

  React.useEffect(() => {
    fetch(`${process.env.BASE_URL}/data`)
      .then((res) => res.json())
      .then((data) => setCarsListData(data));
  }, []);

  return (
    <CarsContext.Provider value={carsListData}>{children}</CarsContext.Provider>
  );
}

export default CarsContextProvider;

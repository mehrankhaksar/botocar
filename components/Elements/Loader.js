import React from "react";

import { TailSpin } from "react-loader-spinner";

function Loader({ width, height }) {
  return <TailSpin width={width} height={height} color="#befa00" />;
}

export default Loader;

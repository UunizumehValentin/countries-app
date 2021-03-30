import React from "react";
import { SpiralSpinner } from "react-spinners-kit";
function Loading() {
  return (
    <section className="loading">
      <SpiralSpinner size={50} color="blue" />
    </section>
  );
}

export default Loading;

import React, { Suspense } from "react";
import FurnitureLoader from "../loader/Loader";

const SuspenseWrapper = ({ children }) => {
  return (
    <Suspense fallback={<FurnitureLoader/>}>
      {children}
    </Suspense>
  );
};

export default SuspenseWrapper;

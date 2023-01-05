import React from "react";

import { Info } from "../../components/Info";
import { useDetails } from "./use-details";

function CountryDetails({ name, navigate }) {
  const { country, status, error } = useDetails(name);

  return (
    <>
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {country && <Info push={navigate} {...country} />}
    </>
  );
}

export { CountryDetails };

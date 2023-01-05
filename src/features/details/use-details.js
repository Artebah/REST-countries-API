import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadCountry, clearDetails, selectDetails } from "./details-slice";

export const useDetails = (name) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountry(name));

    return () => dispatch(clearDetails());
  }, [name, dispatch]);

  const details = useSelector(selectDetails);

  return details;
};

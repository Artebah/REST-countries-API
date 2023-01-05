import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  loadCountries,
  selectFilteredCountries,
  selectCountriesInfo,
} from "./countries-slice";
import { selectControls } from "../controls/controls-slice";

export const useCountries = () => {
  const dispatch = useDispatch();

  const { search, region } = useSelector(selectControls);
  const countries = useSelector((state) =>
    selectFilteredCountries(state, { search, region })
  );

  const { countriesCount, err, status } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!countriesCount) {
      dispatch(loadCountries());
    }
  }, [countriesCount, dispatch]);

  return [countries, { err, status }];
};

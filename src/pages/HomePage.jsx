import { useNavigate } from "react-router-dom";

import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";

import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredCountries,
  selectCountriesInfo,
} from "../store/countries/countries-selectors";
import { selectControls } from "../store/controls/controls-selectors";
import { loadCountries } from "../store/countries/countries-actions";

import { useEffect } from "react";

export const HomePage = () => {
  const navigate = useNavigate();
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

  return (
    <>
      <Controls />

      {err && <h2>Cannot fetch data :(</h2>}

      {status === "loading" && <h2>Loading...</h2>}
      {status === "received" && (
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: "Population",
                  description: c.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: c.region,
                },
                {
                  title: "Capital",
                  description: c.capital,
                },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
};

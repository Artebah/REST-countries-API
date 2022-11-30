import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Button } from "../components/Button";
import { Info } from "../components/Info";
import { selectDetails } from "../store/details/details-selectors";
import { clearDetails, loadCountry } from "../store/details/details-actions";

export const Details = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const dispatch = useDispatch();
  const { country, error, status } = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountry(name));

    return () => dispatch(clearDetails());
  }, [name, dispatch]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {country && <Info push={navigate} {...country} />}
    </div>
  );
};

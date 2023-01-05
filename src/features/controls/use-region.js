import { useDispatch, useSelector } from "react-redux";
import { setRegion, selectRegion } from "./controls-slice";

export const useRegion = () => {
  const region = useSelector(selectRegion);
  const dispatch = useDispatch();

  const handleSelect = (region) =>
    region ? dispatch(setRegion(region?.value)) : dispatch(setRegion(""));

  return [region, handleSelect];
};

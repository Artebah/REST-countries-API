import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "./theme-slice";

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.theme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => dispatch(setTheme(theme === "light" ? "dark" : "light"));

  return [theme, toggleTheme];
};

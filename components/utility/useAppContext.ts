import { useContext } from "react";
import AppContext from "./appContext";

const useAppContext = () => {
  const { data, setData } = useContext(AppContext);

  const toggleTheme = (): void => {
    if (data.theme == "light") {
      setData({ ...data, theme: "dark" });
    } else {
      setData({ ...data, theme: "light" });
    }
  };

  const getTheme = (): void => {
    return data.theme;
  };

  return {
    toggleTheme,
    getTheme,
  };
};

export default useAppContext;

import { useState, Dispatch, SetStateAction } from "react";
import AppContext from "../components/utility/appContext";
import "../styles/global.scss";
import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  type stateType = {
    theme: string;
  };

  const [data, setData] = useState<stateType>({ theme: "light" });

  return (
    <AppContext.Provider value={{ data, setData }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;

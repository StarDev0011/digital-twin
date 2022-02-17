import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";

import GlobalStyles from "../styles/global";
import Splash from "../components/Splash";
import theme from "../styles/theme";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        {loading && <Splash loading={loading} />}

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

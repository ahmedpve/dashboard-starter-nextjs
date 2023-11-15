import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { appConfig } from "../config";
import { AuthContextProvider } from "../contexts/auth-context";
import useNprogress from "../hooks/use-nprogress";
import { theme } from "../theme";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  useNprogress();

  return (
    <>
      <Head>
        <title>{appConfig.title}</title>
        <meta name="description" content={appConfig.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChakraProvider theme={theme}>
        <AuthContextProvider>{getLayout(<Component {...pageProps} />)}</AuthContextProvider>
      </ChakraProvider>
    </>
  );
}

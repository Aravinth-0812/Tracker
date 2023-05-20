import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsConfig from "../../awsConfig";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsConfig);

// Create a client
const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>App</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default withAuthenticator(App, {
  hideSignUp: true,
});

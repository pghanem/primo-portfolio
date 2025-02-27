import Head from "next/head";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/GlobalStyles";
import { AppProps } from "next/app";
import "@fontsource/inter";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="theme-color" content="#000000" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="description"
                    content="Peter is a software developer from Vancouver, Canada. He loves helping organizations build ambitious yet scalable digital experiences."
                />
            </Head>
            <Global styles={globalStyles} />
            <Component {...pageProps} />
        </>
    );
}

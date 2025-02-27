import type { AppProps } from "next/app";
import "@fontsource/inter";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/GlobalStyles";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Global styles={globalStyles} />
            <Component {...pageProps} />
        </>
    );
}

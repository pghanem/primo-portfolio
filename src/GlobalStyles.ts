import { css } from "@emotion/react";

export const globalStyles = css`
    @font-face {
        font-family: "Inter";
        font-display: swap;
    }

    * {
        box-sizing: border-box;
    }

    html, body {
        width: 100%;
        max-width: 100vw;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: #0F172A;
        position: relative;
    }

    body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(
                circle at 0% 0%,
                rgba(52, 90, 255, 0.20) 0%,
                rgba(52, 90, 255, 0.1) 30%,
                rgba(52, 90, 255, 0) 70%
        );
        z-index: 9999;
        pointer-events: none;
    }

    body {
        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #A0ADBE;
        line-height: 1.6;
        font-weight: 400;
        text-rendering: optimizeLegibility;
    }
`;
import { css } from "@emotion/react";
import Colors from "./libs/Colors";

export const globalStyles = css`
    * {
        box-sizing: border-box;
    }

    html,
    body {
        width: 100%;
        max-width: 100vw;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: ${Colors.BLUE500};
        position: relative;
    }

    body::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(
                circle at 0% 0%,
                rgba(52, 90, 255, 0.2) 0%,
                rgba(52, 90, 255, 0.1) 30%,
                rgba(52, 90, 255, 0) 70%
        );
        z-index: 9999;
        pointer-events: none;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${Colors.BLUE200};
        line-height: 1.6;
        font-weight: 400;
        text-rendering: optimizeLegibility;
    }
`;

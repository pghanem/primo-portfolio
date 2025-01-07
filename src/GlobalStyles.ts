import { css } from '@emotion/react';

export const globalStyles = css`
    @font-face {
        font-family: 'Inter';
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
    }
    
    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #A0ADBE;
        line-height: 1.6;
        font-weight: 400;
        text-rendering: optimizeLegibility;
    }
`;

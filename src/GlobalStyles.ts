import { css } from '@emotion/react';

export const globalStyles = css`

    * {
        box-sizing: border-box;
    }

    html, body {
        scrollbar-gutter: stable;
        width: 100%;
        max-width: 100vw;
        overflow-x: hidden;
        background-color: #0F172A;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #A0ADBE;
        line-height: 1.6;
        font-weight: 300;
    }
`;
import { css } from "@emotion/react";

export const cursorGlow = css`
    position: fixed;
    width: 1100px;
    height: 1100px;
    background: radial-gradient(
            circle,
            rgba(52, 90, 255, 0.50) 0%,
            rgba(52, 85, 225, 0.40) 15%,
            rgba(52, 80, 225, 0.30) 30%,
            rgba(52, 75, 225, 0.20) 40%,
            rgba(52, 69, 225, 0.15) 50%,
            rgba(52, 75, 225, 0.10) 55%,
            rgba(52, 69, 225, 0.05) 60%,
            rgba(52, 69, 225, 0.0) 65%
    );
    z-index: 9999;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    opacity: 0.25;
`;

export const container = css`
    width: 100%;
    padding: 0 2rem;

    @media (max-width: 1024px) {
        padding: 1rem 20px;
    }

    &.enter {
        opacity: 0;
        transform: scale(1.01);
    }

    &.enter-active {
        opacity: 1;
        transform: scale(1);
        transition: opacity 250ms, transform 250ms;
    }
`;

export const innerWrapper = css`
    max-width: 1175px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 4fr;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

export const leftPanel = css`
    position: sticky;
    top: 0;
    padding-top: 5rem;
    height: fit-content;

    @media (max-width: 1024px) {
        position: relative;
        top: 0;
        padding-top: 0;
    }
`;

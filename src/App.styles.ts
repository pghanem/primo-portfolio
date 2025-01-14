import { css } from "@emotion/react";

export const cursorGlow = css`
    position: fixed;
    width: 1100px;
    height: 1100px;
    background: radial-gradient(
        circle,
        rgba(52, 90, 255, 0.5) 0%,
        rgba(52, 85, 225, 0.4) 15%,
        rgba(52, 80, 225, 0.3) 30%,
        rgba(52, 75, 225, 0.2) 40%,
        rgba(52, 69, 225, 0.15) 50%,
        rgba(52, 75, 225, 0.1) 55%,
        rgba(52, 69, 225, 0.05) 60%,
        rgba(52, 69, 225, 0) 65%
    );
    z-index: 9999;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    opacity: 0.25;
`;

export const paddedComponent = css`
    padding: 0 2rem;

    @media (max-width: 1024px) {
        padding: 0 25px;
    }
`;

export const container = css`
    width: 100%;

    &.enter {
        opacity: 0;
        transform: scale(1.01);
    }

    &.enter-active {
        opacity: 1;
        transform: scale(1);
        transition:
            opacity 250ms,
            transform 250ms;
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

export const stickyHeader = css`
    position: sticky;
    padding: 25px;
    color: rgb(226 232 240);
    top: 0;
    width: auto;
    background: rgba(15, 23, 42, 0.5);
    backdrop-filter: blur(5px);
    z-index: 10;
    display: none;
    letter-spacing: 1.5px;
    font-weight: 600;

    @media (max-width: 1024px) {
        display: block;
    }
`;

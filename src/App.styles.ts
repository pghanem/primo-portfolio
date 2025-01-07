import { css } from '@emotion/react';

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
    opacity: 0.3;
`;

export const container = css`
    width: 100%;
    padding: 5rem 2rem;

    @media (max-width: 1024px) {
        padding: 1rem 20px;
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
    top: 5rem;
    height: fit-content;

    @media (max-width: 1024px) {
        position: relative;
        top: 0;
        
    }
`;

export const selectiveShow = css`
    display: flex;

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const navigationContainer = css`
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
`;

export const navigationButton = css`
    background: transparent;
    border: none;
    color: rgb(226 232 240);
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 1.5px;
    font-size: 0.75rem;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
`
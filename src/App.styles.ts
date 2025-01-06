import { css } from '@emotion/react';

export const cursorGlow = css`
    position: fixed;
    width: 1000px;
    height: 1000px;
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
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    opacity: 0.3;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

export const container = css`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 5rem 2rem;

    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 1rem 0;
    }
`;

export const innerWrapper = css`
    display: flex;
    width: 100%;
    max-width: 1220px;
    padding: 0 20px;

    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 0;
    }
`;

export const leftPanel = css`
    flex: 3;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        max-width: 100%;
        padding-left: 20px;
    }
`;

export const rightPanel = css`
    flex: 4;
    max-width: 610px;
    min-width: 0;
    width: calc(100% - 60px);
    box-sizing: border-box;

    @media (max-width: 1024px) {
        max-width: 100%;
        width: 100%;
        padding: 0 20px;
    }
`;

export const selectiveShow = css`
    display: none;

    @media (min-width: 1025px) {
        display: flex;
    }
`;

export const navigationContainer = css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
`;

export const navigationButton = css`
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
`
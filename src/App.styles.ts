import { css } from '@emotion/react';

export const container = css`
    width: 100%;
    display: flex;
`;

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

export const leftPanel = css`
    min-width: 520px;
    flex: 4;
`;

export const rightPanel = css`
    flex: 6;
`;

export const selectiveShow = css`
    display: none;

    @media (min-width: 1024px) {
        display: flex;
    }
`

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
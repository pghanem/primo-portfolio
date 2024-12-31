import { css } from '@emotion/react';

export const container = css`
    width: 100%;
    display: flex;
`;

export const cursorGlow = css`
    position: fixed;
    width: 1200px;
    height: 1200px;
    background: radial-gradient(
            circle,
            rgba(52, 90, 255, 0.45) 0%,
            rgba(52, 85, 225, 0.40) 10%,
            rgba(52, 80, 225, 0.30) 20%,
            rgba(52, 75, 225, 0.20) 30%,
            rgba(52, 69, 225, 0.15) 40%,
            rgba(52, 69, 225, 0.10) 50%,
            rgba(52, 69, 225, 0.05) 60%,
            rgba(52, 69, 225, 0) 70%
    );
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    opacity: 0.3;

    @media screen and (max-width: 640px) {
        background: radial-gradient(
                circle at 50% 35%,
                rgba(52, 69, 255, 0.4) 0%,
                rgba(52, 69, 255, 0.3) 20%,
                rgba(52, 69, 255, 0.2) 30%,
                rgba(15, 23, 42, 0.2) 50%,
                rgba(15, 23, 42, 0) 100%
        );
    }

    @media screen and (max-width: 360px) {
        transform: translate(-50%, -30%);
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
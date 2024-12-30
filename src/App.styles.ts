import { css } from '@emotion/react';

export const container = css`
    width: 100%;
    display: flex;
`;

export const cursorGlow = css`
    position: fixed;
    width: 1500px;
    height: 1500px;
    background: radial-gradient(circle, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 40%);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
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

export const navigationButtons = css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;

    button {
        background: transparent;
        border: none;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            background: rgba(255, 255, 255, 0.1);
        }
    }
`;
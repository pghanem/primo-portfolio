import { css } from '@emotion/react';

export const container = css`
    min-height: 100vh;
    width: 100%;
    color: white;
    display: flex;
    position: relative;
    background-color: #0A1D3A;
`;

export const cursorGlow = css`
    position: fixed;
    width: 1500px;
    height: 1500px;
    background: radial-gradient(circle, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 40%);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 9999;
`;

export const leftPanel = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const rightPanel = css`
    margin-left: 300px;
    flex: 1;
    padding: 2rem;
    width: calc(100% - 300px);
`;

export const navigation = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
        padding: 0.5rem 1rem;
        background: transparent;
        border: 1px solid white;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            background: rgba(255, 255, 255, 0.1);
        }
    }
`;
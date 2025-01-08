import { css, SerializedStyles } from "@emotion/react";

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
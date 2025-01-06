import { css, SerializedStyles } from "@emotion/react";

export const heroContainer = css`
    display: flex;
    max-width: 400px;

    @media (max-width: 1024px) {
        padding: 0;
    }
`;

export const name = css`
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: -0.05rem;
    color: rgb(226 232 240);
`;

export const title = css`
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: rgb(226 232 240);
`;

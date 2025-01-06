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
    font-weight: 600;
    color: white;
`;

export const title = css`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: white;
`;

import { css } from "@emotion/react";

export const heroContainer = css`
    padding-top: 5rem;
    display: flex;
    max-width: 400px;

    @media (max-width: 1024px) {
        padding-top: 2.5rem;
    }
`;

export const name = css`
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: -0.05rem;
    color: #e2e8f0;

    @media (max-width: 1024px) {
        font-size: 2.5rem;
    }
`;

export const title = css`
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #e2e8f0;
`;

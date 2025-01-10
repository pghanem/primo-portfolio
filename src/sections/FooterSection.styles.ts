import { css } from "@emotion/react";

export const footerContainer = css`
    font-size: 0.85rem;
    max-width: 400px;
    padding-top: 5rem;
    scroll-margin-top: 60px;
    position: relative;
    padding-bottom: 6rem;
    color: #8A8F9E;

    @media (max-width: 1024px) {
        padding-top: 0;
    }
`;

export const clickable = css`
    font-weight: 600;
    color: #A0ADBE;
    display: inline;
    cursor: pointer;

    &:hover {
        color: rgb(226, 232, 240);
    }
`;

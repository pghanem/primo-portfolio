import { css } from "@emotion/react";

export const thumbnailSection = css`
    width: 125px;
    height: 75px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 3px solid;
    background-color: rgb(226 232 240);
    filter: brightness(85%);
`;

export const thumbnail = css`
    width: auto;
    height: 100%;
    object-fit: cover;
`;

export const description = css`
    font-size: 0.9rem;
    line-height: 1.6;
`;

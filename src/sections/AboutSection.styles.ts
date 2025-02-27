import { css } from "@emotion/react";
import Colors from "../libs/Colors";

export const aboutContainer = css`
    padding-top: 6rem;
    scroll-margin-top: 60px;
    position: relative;

    @media (max-width: 1024px) {
        padding-top: 0;
        padding-bottom: 1.5rem;
    }
`;

export const paragraphContainer = css`
    margin-bottom: 1.5rem;
`;

export const headshot = css`
    float: right;
    width: 150px;
    margin: 0 1.5rem 1.5rem 1.5rem;
    filter: brightness(85%);
    border-radius: 50%;
    border: 5px solid;

    @media (max-width: 1024px) {
        margin: 0 1rem 1rem 1rem;
        width: 120px;
        border: 4px solid;
    }
`;

export const clickable = css`
    font-weight: 500;
    display: inline;
    cursor: pointer;
    color: ${Colors.BLUE100};

    &:hover {
        color: white;
    }
`;

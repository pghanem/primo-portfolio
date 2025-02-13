import { css } from "@emotion/react";
import Colors from "../libs/Colors";

export const thumbnailSection = css`
    width: 125px;
    height: 75px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 3px solid;
    background-color: ${Colors.BLUE100};
    filter: brightness(85%);
    cursor: pointer;
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

import { css } from "@emotion/react";
import Colors from "../libs/Colors";

export const experienceContainer = css`
    padding-top: 5rem;
    scroll-margin-top: 60px;
    position: relative;

    @media (max-width: 1024px) {
        padding-top: 0;
        padding-bottom: 1.5rem;
    }
`;

export const viewResumeButton = css`
    color: ${Colors.BLUE100};
    font-weight: 600;
    width: fit-content;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    background-color: rgba(255, 255, 255, 0.1);

    &:hover {
        transform: scale(1.015);
        background-color: rgba(255, 255, 255, 0.2);
        cursor: pointer;
    }
`;

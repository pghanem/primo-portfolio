import { css } from "@emotion/react";
import Colors from "../libs/Colors";

export const yearSection = css`
    font-size: 0.9rem;

    @media (max-width: 1024px) {
        color: ${Colors.GREY100};
    }
`;

export const prevTitle = css`
    color: ${Colors.GREY100};
    margin-bottom: 0.5rem;
    margin-top: -1rem;
    text-decoration: none;
`;

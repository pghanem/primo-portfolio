import { css } from "@emotion/react";
import Colors from "../libs/Colors";

export const linksContainer = css`
    display: flex;
`;

export const grabEmailTooltip = css`
    background-color: ${Colors.BLUE400};
    color: ${Colors.WHITE};
`;

export const emailCopiedTooltip = css`
    background-color: ${Colors.BLUE300};
    color: ${Colors.WHITE};
`;

export const icon = css`
    margin: 6rem 1rem;
    cursor: pointer;
    transition:
        filter 0.2s ease,
        opacity 0.2s ease;

    &:hover {
        filter: brightness(2);
    }

    @media (max-width: 1024px) {
        margin: 1.5rem 1.5rem 5rem 0;
    }
`;

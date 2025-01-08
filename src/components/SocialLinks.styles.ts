import {css} from "@emotion/react";

export const linksContainer = css`
    display: flex;
`

export const grabEmailTooltip = css`
    background-color: #1E3A8A;
    color: #FFFFFF;
`

export const emailCopiedTooltip = css`
    background-color: #2563EB;
    color: #FFFFFF;
`

export const icon = css`
    margin: 6rem 1rem;
    cursor: pointer;
    transition: filter 0.2s ease, opacity 0.2s ease;

    &:hover {
        filter: brightness(2);
    }
    
    @media (max-width: 1024px) {
        margin: 3rem 1rem;
    }
`;
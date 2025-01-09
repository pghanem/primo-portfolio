import { css } from "@emotion/react";

export const projectsContainer = css`
    padding-top: 5rem;
    scroll-margin-top: 60px;
    position: relative;

    @media (max-width: 1024px) {
        padding-top: 0;
        > div:not([id$="-header"]) {
            padding-top: 2rem;
        }
    }
`;
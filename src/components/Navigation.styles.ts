import { css, SerializedStyles } from "@emotion/react";

export const selectiveShow = css`
    display: flex;

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const navigationContainer = css`
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

export const navigationButton = (isSelected: boolean): SerializedStyles => css`
    color: #e2e8f0;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 1.5px;
    font-size: 0.75rem;
    position: relative;
    padding-left: ${isSelected ? "5rem" : "3rem"};

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: ${isSelected ? "4rem" : "2rem"};
        height: 1px;
        background-color: #e2e8f0;
        transition: all 0.3s ease;
    }

    &:hover {
        padding-left: 5rem;

        &::before {
            width: 4rem;
        }
    }
`;

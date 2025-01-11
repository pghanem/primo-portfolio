import { css } from "@emotion/react";

export const projectContainer = css`
    border-radius: 8px;
    padding: 1rem 1.5rem;
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 24px;
    margin-bottom: 12px;
    transition: background-color 0.2s ease;
    cursor: default;

    @media (min-width: 1025px) {
        &:hover {
            transform: scale(1.015);
            background-color: rgba(255, 255, 255, 0.05);
        }
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 8px;
        padding: 0 0 3rem 0;
    }
`;

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

export const contentSection = css`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const projectName = css`
    color: rgb(226 232 240);
    margin: 0;
    text-decoration: none;
  
    &:hover {
        cursor: pointer;
    }
`;

export const description = css`
    font-size: 0.9rem;
    line-height: 1.6;
`;

export const techPillsContainer = css`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const techPill = css`
    font-size: 0.75rem;
    font-weight: 500;
    padding: 4px 12px;
    border-radius: 16px;
    border: 1px solid rgb(226 232 240);
`;
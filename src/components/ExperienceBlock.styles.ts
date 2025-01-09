import { css } from "@emotion/react";

export const experienceContainer = css`
    border-radius: 8px;
    padding: 1rem 1.5rem;
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 18px;
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

export const yearSection = css`
    font-size: 0.9rem;

    @media (max-width: 1024px) {
        color: #8A8F9E;
    }
`;

export const contentSection = css`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const jobTitle = css`
    color: rgb(226 232 240);
    margin: 0;
    text-decoration: none;
  
    &:hover {
        cursor: pointer;
    }
`;

export const prevTitle = css`
    color: #8A8F9E;
    margin-bottom: 0.5rem;
    margin-top: -1rem;
    text-decoration: none;
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
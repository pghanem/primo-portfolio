/** @jsxImportSource @emotion/react */
import React from 'react';

import * as styles from './ExperienceBlock.styles';

interface ExperienceBlockProps {
    startYear: string;
    endYear: string;
    jobTitle: string;
    prevTitle?: string;
    companyName: string;
    description: string;
    technologies: string[];
}

export const ExperienceBlock: React.FC<ExperienceBlockProps> = (props: ExperienceBlockProps) => {
    const {
        startYear,
        endYear,
        jobTitle,
        prevTitle,
        companyName,
        description,
        technologies
    } = props;

    return (
        <div css={styles.experienceContainer}>
            <div css={styles.yearSection}>
                {startYear} - {endYear}
            </div>

            <div css={styles.contentSection}>
                <div css={styles.jobTitle}>
                    {jobTitle} · {companyName}
                </div>

                {prevTitle && <div css={styles.prevTitle}>
                    {prevTitle}
                </div>}

                <div css={styles.description}>{description}</div>

                <div css={styles.techPillsContainer}>
                    {technologies.map((tech, index) => (
                        <div css={styles.techPill} key={index}>{tech}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceBlock;
/** @jsxImportSource @emotion/react */
import React from "react";
import { ContentBlock } from "./ContentBlock";
import * as styles from "./ExperienceBlock.styles";

interface ExperienceBlockProps {
    startYear: string;
    endYear: string;
    jobTitle: string;
    prevTitle?: string;
    companyName: string;
    companyUrl: string;
    description?: string;
    technologies?: string[];
}

export const ExperienceBlock: React.FC<ExperienceBlockProps> = ({
    startYear,
    endYear,
    jobTitle,
    prevTitle,
    companyName,
    companyUrl,
    description,
    technologies,
}) => {
    const yearContent = (
        <div css={styles.yearSection}>
            {startYear} - {endYear}
        </div>
    );

    const prevTitleContent = prevTitle && <div css={styles.prevTitle}>{prevTitle}</div>;

    return (
        <ContentBlock
            title={`${jobTitle} · ${companyName}`}
            description={description}
            technologies={technologies}
            url={companyUrl}
            leftContent={yearContent}
            additionalContent={prevTitleContent}
        />
    );
};

export default ExperienceBlock;

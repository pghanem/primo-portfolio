/** @jsxImportSource @emotion/react */
import React from "react";
import { ContentBlock } from "./ContentBlock";
import * as styles from "./ProjectBlock.styles";

interface ProjectBlockProps {
    thumbnail: string;
    projectTitle: string;
    description: string;
    technologies: string[];
    projectUrl?: string;
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({
                                                       thumbnail,
                                                       projectTitle,
                                                       description,
                                                       technologies,
                                                       projectUrl,
                                                   }) => {
    const thumbnailContent = (
        <div css={styles.thumbnailSection}>
            <img
                src={thumbnail}
                alt={`${projectTitle} thumbnail`}
                css={styles.thumbnail}
            />
        </div>
    );

    return (
        <ContentBlock
            title={projectTitle}
            description={description}
            technologies={technologies}
            url={projectUrl}
            leftContent={thumbnailContent}
        />
    );
};

export default ProjectBlock;
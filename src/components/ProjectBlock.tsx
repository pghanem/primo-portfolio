/** @jsxImportSource @emotion/react */
import React from "react"

import * as styles from "./ProjectBlock.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

interface ProjectBlockProps {
    thumbnail: string;
    projectTitle: string;
    description: string;
    technologies: string[];
    projectUrl?: string;
}

const ProjectBlock: React.FC<ProjectBlockProps> = (props: ProjectBlockProps) => {

    const {
        thumbnail,
        projectTitle,
        description,
        technologies,
        projectUrl,
    } = props;
    
    return (
        <div
            role="button"
            tabIndex={0}
            css={styles.projectContainer}>
            <div css={styles.thumbnailSection}>
                <img
                    src={thumbnail}
                    alt={`${projectTitle} thumbnail`}
                    css={styles.thumbnail}
                />
            </div>

            <div css={styles.contentSection}>
                <div css={styles.projectName} onClick={projectUrl ? () => window.open(projectUrl, "_blank", "noopener,noreferrer") : () => {}}>
                    {projectTitle} {projectUrl && <FontAwesomeIcon icon={faUpRightFromSquare} css={{marginLeft: "5px"}}/>}
                </div>

                <div css={styles.description}>{description}</div>

                <div css={styles.techPillsContainer}>
                    {technologies.map((tech, index) => (
                        <div css={styles.techPill} key={index}>{tech}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectBlock;
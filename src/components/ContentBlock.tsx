/** @jsxImportSource @emotion/react */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import * as styles from "./ContentBlock.styles";

interface ContentBlockProps {
    title: string;
    description: string;
    technologies: string[];
    url?: string;
    leftContent: React.ReactNode;
    clickableLeft?: boolean;
    additionalContent?: React.ReactNode;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({
    title,
    description,
    technologies,
    url,
    leftContent,
    clickableLeft = false,
    additionalContent,
}) => {
    return (
        <div role="button" tabIndex={0} css={styles.container}>
            <div
                 onClick={url && clickableLeft ? () => window.open(url, "_blank", "noopener,noreferrer") : undefined}
            >{leftContent}</div>

            <div css={styles.contentSection}>
                <div
                    css={styles.title}
                    onClick={url ? () => window.open(url, "_blank", "noopener,noreferrer") : undefined}
                >
                    {title} {url && <FontAwesomeIcon icon={faUpRightFromSquare} css={{ marginLeft: "5px" }} />}
                </div>

                {additionalContent}

                <div css={styles.description}>{description}</div>

                <div css={styles.techPillsContainer}>
                    {technologies.map((tech, index) => (
                        <div css={styles.techPill} key={index}>
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

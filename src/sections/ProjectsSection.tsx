/** @jsxImportSource @emotion/react */
import React from "react"

import * as styles from "./ProjectsSection.styles";
import ProjectBlock from "../components/ProjectBlock";

const ProjectsSection = (): React.ReactElement => {
    return <div css={styles.projectsContainer}>
        <ProjectBlock />
        <ProjectBlock />
        <ProjectBlock />
        <ProjectBlock />
        <ProjectBlock />
    </div>
}

export default ProjectsSection;
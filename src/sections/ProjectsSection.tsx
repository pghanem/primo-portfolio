/** @jsxImportSource @emotion/react */
import React from "react";

import * as styles from "./ProjectsSection.styles";
import ProjectBlock from "../components/ProjectBlock";

const ProjectsSection = (): React.ReactElement => {
    return (
        <div css={styles.projectsContainer}>
            <ProjectBlock
                description={
                    "Currently in development. Roadio is an AI-powered road trip music app that curates playlists based on subtle factors such as your location, the weather, and your destination."
                }
                projectTitle={"Roadio"}
                technologies={["React Native", "Spotify API"]}
                thumbnail={"/roadioThumbnail.png"}
                projectUrl={"https://github.com/pghanem/roadio"}
            />
            <ProjectBlock
                description={"An open-source portfolio site built with React and Emotion CSS."}
                projectTitle={"peterghanem.com"}
                technologies={["React", "Emotion", "Vercel"]}
                thumbnail={"/primoThumbnail.png"}
                projectUrl={"https://github.com/pghanem/primo-portfolio"}
            />
            <ProjectBlock
                description={
                    "Developed an app to engage users in supporting BC Parks through volunteering, donating, issue reporting, and leaderboard competition."
                }
                projectTitle={"natureQuest (2nd Place 🏆 @ VanHacks)"}
                technologies={["React Native", "Node.js", "SQLite"]}
                thumbnail={"/natureQuestThumbnail.jpg"}
                projectUrl={"https://github.com/ivantang/bcparks"}
            />
        </div>
    );
};

export default ProjectsSection;

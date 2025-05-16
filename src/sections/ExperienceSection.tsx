/** @jsxImportSource @emotion/react */
import React from "react";

import * as styles from "./ExperienceSection.styles";
import ExperienceBlock from "../components/ExperienceBlock";

const ExperienceSection = (): React.ReactElement => {
    return (
        <div css={styles.experienceContainer}>
            <ExperienceBlock
                startYear="2025"
                endYear="Present"
                jobTitle="Software Engineer II"
                companyName="Together"
                companyUrl="https://www.togetherplatform.com/"
                description="Contributing to full stack features on our mentorship platform, including leading the end-to-end development of a user data export system—handling background job processing, secure link generation, and email delivery."
                technologies={["React", "Redux", "TypeScript", "GraphQL", "Node.js"]}
            />
            <ExperienceBlock
                startYear="2021"
                endYear="2025"
                jobTitle="Software Developer III (Team Lead)"
                prevTitle="Software Developer II"
                companyName="Jostle"
                companyUrl="https://www.jostle.me"
                description="Led and mentored a development team while driving key technical initiatives. I architected Collections UI, a unified platform approach to displaying list-type data, and led the UI team's complete Search interface rebuild. Implemented critical features including the document sign-off system and a reusable file upload interface."
                technologies={["React", "Redux", "TypeScript", "Java", "GraphQL"]}
            />
            <ExperienceBlock
                startYear="2019"
                endYear="2021"
                jobTitle="Software Architect"
                prevTitle="Software Developer"
                companyName="Ensemble"
                companyUrl="https://www.ensemble.com/"
                description="Served as Software Architect, designing scalable Adobe CMS solutions and building full-stack media applications. Created automated workflows for Adobe InDesign to HTML conversion and delivered Netflix-style user experiences for Roku TV."
                technologies={["Java", "Node.js", "React", "React Native"]}
            />
            <ExperienceBlock
                startYear="2017"
                endYear="2018"
                jobTitle="Software Developer Intern"
                companyName="iSpace Lab"
                companyUrl="http://ispace.iat.sfu.ca/"
                description="Built an immersive Unity virtual reality game, optimizing checkpoints, models, and scripts to create awe‑inducing experiences for academic research."
                technologies={["C#", "Unity", "Cinema 4D"]}
            />
            <ExperienceBlock
                startYear="2014"
                endYear="2016"
                jobTitle="QA Lead"
                prevTitle="Software QA Analyst"
                companyName="Finger Food Studios (now Unity)"
                companyUrl="https://unity.com/"
                description="Led test automation initiatives across web, mobile, Xbox, and Microsoft HoloLens platforms. Implemented comprehensive QA processes that strengthened product reliability and user experience."
                technologies={["Selenium WebDriver", "Python"]}
            />
            {/*<div css={{ paddingTop: "1rem" }}>*/}
            {/*    <div css={styles.viewResumeButton} onClick={() => window.open("/Peter_Ghanem_Resume.pdf", "_blank")}>*/}
            {/*        View Full Resume <FontAwesomeIcon icon={faUpRightFromSquare} css={{ marginLeft: "5px" }} />*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default ExperienceSection;

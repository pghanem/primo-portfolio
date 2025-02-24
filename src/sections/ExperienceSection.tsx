/** @jsxImportSource @emotion/react */
import React from "react";

import * as styles from "./ExperienceSection.styles";
import ExperienceBlock from "../components/ExperienceBlock";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExperienceSection = (): React.ReactElement => {
    return (
        <div css={styles.experienceContainer}>
            <ExperienceBlock
                startYear="2021"
                endYear="Present"
                jobTitle="Software Developer III (Team Lead)"
                prevTitle="Software Developer II"
                companyName="Jostle"
                companyUrl="https://www.jostle.me"
                description="Leading and mentoring a development team while driving key technical initiatives. I architected Collections, a unified platform approach to displaying list-type data, and led the UI team's complete Search interface rebuild. Implemented critical features including the document sign-off system and a reusable file upload interface."
                technologies={["React", "Redux", "Typescript", "Java", "GraphQL", "Docker"]}
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
                jobTitle="Software Developer Co-op"
                companyName="iSpace Lab"
                companyUrl="http://ispace.iat.sfu.ca/"
                description="Developed an immersive VR game, focusing on optimization of checkpoint systems and user interaction design. Created compelling experiences through efficient model management and scripting solutions."
                technologies={["C#", "Unity", "Cinema 4D"]}
            />
            <ExperienceBlock
                startYear="2014"
                endYear="2016"
                jobTitle="QA Lead"
                prevTitle="Software QA Analyst"
                companyName="Finger Food Studios (Acquired by Unity, May 2020)"
                companyUrl="https://unity.com/"
                description="Led test automation initiatives across web, mobile, Xbox, and Microsoft HoloLens platforms. Implemented comprehensive QA processes that strengthened product reliability and user experience."
                technologies={["Selenium WebDriver", "Python"]}
            />
            <div css={{ paddingTop: "1rem" }}>
                <div css={styles.viewResumeButton} onClick={() => window.open("/Peter_Ghanem_Resume.pdf", "_blank")}>
                    View Full Resume <FontAwesomeIcon icon={faUpRightFromSquare} css={{ marginLeft: "5px" }} />
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;

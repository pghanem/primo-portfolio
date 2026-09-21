/** @jsxImportSource @emotion/react */
import React from "react";

import * as styles from "./ExperienceSection.styles";
import ExperienceBlock from "../components/ExperienceBlock";

const ExperienceSection = (): React.ReactElement => {
    return (
        <div css={styles.experienceContainer}>
            <ExperienceBlock
                startYear="Apr. 2025"
                endYear="Present"
                jobTitle="Software Engineer II"
                companyName="Together (YC S19), an Absorb Software company"
                companyUrl="https://www.togetherplatform.com/"
                description="Building AI products inside the learning platform, and the internal agent tooling behind how the company ships software."
                technologies={["C#/.NET", "Python", "TypeScript", "React", "AWS"]}
            />
            <ExperienceBlock
                startYear="2021"
                endYear="2025"
                jobTitle="Software Developer III (Team Lead)"
                prevTitle="Software Developer II"
                companyName="Jostle"
                companyUrl="https://www.jostle.me"
                description="Led the Search UI team and rebuilt the platform's search experience end to end."
                technologies={["React", "Redux", "TypeScript", "Java", "GraphQL"]}
            />
            <ExperienceBlock
                startYear="2019"
                endYear="2021"
                jobTitle="Software Architect"
                prevTitle="Software Developer"
                companyName="Ensemble Systems"
                companyUrl="https://www.ensemble.com/"
                description="Built streaming applications for Roku and Java integrations for Adobe CMS."
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
        </div>
    );
};

export default ExperienceSection;

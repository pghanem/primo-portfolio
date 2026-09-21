/** @jsxImportSource @emotion/react */
import React from "react";

import * as styles from "./AboutSection.styles";

const AboutSection = (): React.ReactElement => {
    const handleClick = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <div css={styles.aboutContainer}>
            <img src={"/headshot.png"} alt="Headshot" css={styles.headshot} />

            <div css={styles.paragraphContainer}>
                Full-stack engineer with seven years across TypeScript, React, and Java, now building production LLM systems end to end. Picks up whatever the problem needs, most recently .NET and Python.
            </div>
            <div css={styles.paragraphContainer}>
                Proficient: TypeScript/JavaScript, Java, C#, Python, SQL. AI & ML: RAG, grounded generation, agent orchestration, tool use, AWS Bedrock, MCP. Frontend: React, Redux. Backend: REST, GraphQL, Node.js, .NET. Databases: MySQL. Cloud & Infrastructure: AWS (SNS/SQS, S3), Docker, event-driven microservices.
            </div>
            <div css={styles.paragraphContainer}>
                Currently, I’m a Software Engineer II at{" "}
                <div onClick={() => handleClick("https://www.togetherplatform.com/")} css={styles.clickable}>
                    Together (YC S19), an Absorb Software company
                </div>
                , based in Vancouver, British Columbia, Canada.
            </div>
            <div css={styles.paragraphContainer}>
                When I’m not coding, you’ll find me staying active, golfing, reading, spending time with family and
                friends, or exploring different parts of the world.
            </div>
        </div>
    );

};

export default AboutSection;

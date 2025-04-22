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
                I'm a software engineer passionate about building scalable, high-performance systems through thoughtful design and solid engineering. I thrive at the intersection of architecture and development, creating robust implementation plans and foundational systems that drive efficiency and maintainability.
            </div>
            <div css={styles.paragraphContainer}>
                Currently, I’m a Software Engineer II at{" "}
                <div onClick={() => handleClick("https://www.togetherplatform.com/")} css={styles.clickable}>
                    Together
                </div>
                , where I help build full stack features for our mentorship platform that connects employees through smart matching, guided sessions, and seamless integrations.
            </div>
            <div css={styles.paragraphContainer}>
                When I’m not coding, you’ll find me staying active, golfing, reading, spending time with family and
                friends, or getting lost in a good PC game.
            </div>
        </div>
    );

};

export default AboutSection;

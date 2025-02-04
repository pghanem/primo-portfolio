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
                I'm a developer passionate about building scalable, high-performance systems through thoughtful design and solid engineering. I thrive at the intersection of architecture and development, creating robust implementation plans and foundational systems that drive efficiency and maintainability.
            </div>
            <div css={styles.paragraphContainer}>
                Currently, I’m a developer at{" "}
                <div onClick={() => handleClick("https://www.jostle.me")} css={styles.clickable}>
                    Jostle
                </div>
                , specializing in core feature rebuilds and stack modernization. I lead the planning, creation,
                and maintenance of key systems, ensuring they are scalable, efficient, and future-proof. Highlights include
                major updates like our recently released{" "}
                <div
                    onClick={() =>
                        handleClick("https://forum.jostle.us/hc/en-us/articles/32027726971163-Search-updated-version")
                    }
                    css={styles.clickable}
                >
                    Search
                </div>{" "}
                platform.
            </div>
            <div css={styles.paragraphContainer}>
                Right now, I'm working on a system-wide Collections framework, a unified approach to managing and
                displaying structured data. On the side, I’m developing an AI-powered road trip app that curates music playlists
                based on subtle factors like location, weather, and destination.
            </div>
            <div css={styles.paragraphContainer}>
                When I’m not coding, you’ll find me staying active, golfing, reading, spending time with family and
                friends, or getting lost in a good PC game.
            </div>
        </div>
    );

};

export default AboutSection;

/** @jsxImportSource @emotion/react */
import React from "react"

import * as styles from "./AboutSection.styles";

const AboutSection = (): React.ReactElement => {
    const handleClick = (url: string) => {
        window.open(url, "_blank");
    };

    return <div css={styles.aboutContainer}>
        <img src={"/headshot.png"} alt="Headshot" css={styles.headshot}/>

        <div css={styles.paragraphContainer}>I'm a developer passionate about crafting intuitive, timeless user
            interfaces that combine thoughtful system design with solid engineering. My favorite work is at the
            intersection of architecture and development, where I design robust implementation plans and build
            foundational systems that are efficient, scalable, and maintainable.
        </div>
        <div css={styles.paragraphContainer}>Currently, I’m a UI Developer at {" "}
            <div
                onClick={() => handleClick("https://www.jostle.me")}
                css={styles.clickable}
            >
                Jostle
            </div>, where I specialize in core feature
            rebuilds and stack modernization. I lead the planning, creation, and maintenance of UI components that drive
            Jostle's frontend. This includes key features like our recently released {" "}
            <div
                onClick={() => handleClick("https://forum.jostle.us/hc/en-us/articles/32027726971163-Search-updated-version")}
                css={styles.clickable}
            >Search</div> interface. Right now, I'm working on a system-wide Collections UI, a unified approach to managing and displaying list-type data.
        </div>
        <div css={styles.paragraphContainer}>Throughout my career, I’ve had the opportunity to work in diverse
            environments, from startups and large corporations to custom software firms and now a small independent
            studio. On the side, I’m developing an AI-powered road trip music app that curates playlists based on subtle
            factors such as your location, the weather, and your destination.
        </div>
        <div css={styles.paragraphContainer}>When I’m not coding, you’ll find me staying active — golfing, reading,
            spending time with family and friends, or getting lost in a good PC game.
        </div>
    </div>
}

export default AboutSection;
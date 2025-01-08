/** @jsxImportSource @emotion/react */
import React from 'react'

import * as styles from './AboutSection.styles';

const AboutSection = (): React.ReactElement => {
    return <div css={styles.aboutContainer}>
        <p>I'm a developer passionate about crafting intuitive, timeless user interfaces that combine thoughtful system design with solid engineering. My favorite work is at the intersection of architecture and development, where I design robust implementation plans and build foundational systems that are efficient, scalable, and maintainable.</p>
        <p>Currently, I’m a UI Developer at Jostle, where I specialize in core feature rebuilds and stack modernization. I lead the planning, creation, and maintenance of UI components that drive Jostle's frontend. This includes key features like our Search interface and the system-wide Collections interface, a unified approach to managing and displaying list-type data.</p>
        <p>Throughout my career, I’ve had the opportunity to work in diverse environments, from startups and large corporations to custom software firms and now a small independent studio. On the side, I’m developing an AI-powered road trip music app that curates playlists based on subtle factors such as your location, the weather, and your destination.</p>
        <p>When I’m not coding, you’ll find me staying active — golfing, reading, spending time with family and friends, or getting lost in a good PC game.</p>
    </div>
}

export default AboutSection;
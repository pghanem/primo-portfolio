/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import * as styles from "./App.styles";
import { globalStyles } from './GlobalStyles';
import HeroSection from "./sections/HeroSection";
import ExperienceSection from "./sections/ExperienceSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import { useCursorPosition } from "./hooks/useCursorPosition";
import {selectiveShow} from "./App.styles";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import React from "react";

function App() {
    const cursorPosition = useCursorPosition();

    return (
        <>
            <SpeedInsights />
            <Analytics />
            <Global styles={globalStyles} />
            <div css={styles.container}>
                <div css={styles.innerWrapper}>
                    <div
                        css={styles.cursorGlow}
                        style={{
                            left: `${cursorPosition.x}px`,
                            top: `${cursorPosition.y}px`
                        }}
                    />

                    <div css={styles.leftPanel}>
                        <HeroSection/>
                        <div css={selectiveShow}>
                            <nav css={styles.navigationContainer}>
                                <div
                                    css={styles.navigationButton}
                                    onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}>
                                    ABOUT
                                </div>
                                <div
                                    css={styles.navigationButton}
                                    onClick={() => document.getElementById('experience')?.scrollIntoView({behavior: 'smooth'})}>
                                    EXPERIENCE
                                </div>
                                <div
                                    css={styles.navigationButton}
                                    onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}>
                                    PROJECTS
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div>
                        <section id="about">
                            <AboutSection/>
                        </section>
                        <section id="experience">
                            <ExperienceSection/>
                        </section>
                        <section id="projects">
                            <ProjectsSection/>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
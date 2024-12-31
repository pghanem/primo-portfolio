/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import * as styles from "./App.styles";
import { globalStyles } from './GlobalStyles';
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import { useCursorPosition } from "./hooks/useCursorPosition";
import {selectiveShow} from "./App.styles";

function App() {
    const cursorPosition = useCursorPosition();

    return (
        <>
            <Global styles={globalStyles} />
            <div css={styles.container}>
                <div
                    css={styles.cursorGlow}
                    style={{
                        left: `${cursorPosition.x}px`,
                        top: `${cursorPosition.y}px`
                    }}
                />

                <div css={styles.leftPanel}>
                    <HeroSection />
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

                <div css={styles.rightPanel}>
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
        </>
    );
}

export default App;
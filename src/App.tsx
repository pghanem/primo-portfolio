/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import * as styles from "./App.styles";
import { globalStyles } from './GlobalStyles';
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import { useCursorPosition } from "./hooks/useCursorPosition";

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

                <aside css={styles.leftPanel}>
                    <HeroSection />
                    <nav css={styles.navigation}>
                        <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                            About
                        </button>
                        <button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
                            Experience
                        </button>
                        <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            Projects
                        </button>
                    </nav>
                </aside>

                <main css={styles.rightPanel}>
                    <section id="about">
                        <AboutSection />
                    </section>
                    <section id="experience">
                        <ExperienceSection />
                    </section>
                    <section id="projects">
                        <ProjectsSection />
                    </section>
                </main>
            </div>
        </>
    );
}

export default App;
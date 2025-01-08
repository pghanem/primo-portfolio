/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import * as styles from "./App.styles";
import { globalStyles } from "./GlobalStyles";
import HeroSection from "./sections/HeroSection";
import ExperienceSection from "./sections/ExperienceSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import { useCursorPosition } from "./hooks/useCursorPosition";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import React, {useEffect, useState} from "react";
import SplashScreen from "./components/SplashScreen";
import SocialLinks from "./components/SocialLinks";
import classNames from "classnames";
import Navigation from "./components/Navigation";

function App() {
    const [loading, setLoading] = useState<boolean>(true);
    const cursorPosition = useCursorPosition(loading, 0.02);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isEntered, setIsEntered] = useState(false);

    useEffect(() => {
        if (!loading) {
            requestAnimationFrame(() => {
                setIsEntered(true);
            });
        }
    }, [loading]);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 50000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <SpeedInsights/>
            <Analytics/>
            <Global styles={globalStyles}/>
                {loading ? <SplashScreen onAnimationComplete={() => setLoading(false)} /> :
                    <div css={styles.container}
                         className={classNames({
                             "enter": !isEntered,
                             "enter-active": isEntered
                         })}>
                        <div css={styles.innerWrapper}>
                            {!loading && <div
                                css={styles.cursorGlow}
                                style={isSmallScreen ? {
                                    left: "0px",
                                    top: "0px"
                                } : {
                                    left: `${cursorPosition.x}px`,
                                    top: `${cursorPosition.y}px`
                                }}
                            />}

                            <div css={styles.leftPanel}>
                                <HeroSection/>
                                <Navigation />
                                <SocialLinks />
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
                }
        </>
    );
}

export default App;
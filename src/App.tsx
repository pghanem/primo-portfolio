/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import * as styles from "./App.styles";
import { globalStyles } from "./GlobalStyles";
import HeroSection from "./sections/HeroSection";
import ExperienceSection from "./sections/ExperienceSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import React, {useEffect, useState} from "react";
import SplashScreen from "./components/SplashScreen";
import SocialLinks from "./components/SocialLinks";
import classNames from "classnames";
import Navigation from "./components/Navigation";
import {paddedComponent} from "./App.styles";

function App() {
    const [loading, setLoading] = useState<boolean>(true);
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
                            <div css={[styles.leftPanel, styles.paddedComponent]}>
                                <HeroSection/>
                                {!isSmallScreen && <Navigation />}
                                <SocialLinks/>
                            </div>

                            <div>
                                <div id="about-header" css={styles.stickyHeader}>
                                    <div>ABOUT</div>
                                </div>
                                <section id="about" css={paddedComponent}>
                                    <AboutSection/>
                                </section>
                                <div id="experience-header" css={styles.stickyHeader}>
                                    <div>EXPERIENCE</div>
                                </div>
                                <section id="experience" css={paddedComponent}>
                                    <ExperienceSection/>
                                </section>
                                <div id="projects-header" css={styles.stickyHeader}>
                                    <div>PROJECTS</div>
                                </div>
                                <section id="projects" css={paddedComponent}>
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
/** @jsxImportSource @emotion/react */
import * as styles from "../src/styles/index.styles";
import { paddedComponent } from "../src/styles/index.styles";
import HeroSection from "../src/sections/HeroSection";
import ExperienceSection from "../src/sections/ExperienceSection";
import AboutSection from "../src/sections/AboutSection";
import ProjectsSection from "../src/sections/ProjectsSection";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import React, { useEffect, useState } from "react";
import SplashScreen from "../src/components/SplashScreen";
import SocialLinks from "../src/components/SocialLinks";
import classNames from "classnames";
import Navigation from "../src/components/Navigation";
import FooterSection from "../src/sections/FooterSection";
import Head from "next/head";

export default function Home() {
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

    // TODO: implement SSG now that Next.js migration is done

    return (
        <>
            <Head>
                <title>Peter Ghanem - Software Engineer</title>
                <meta
                    name="description"
                    content="Peter is a software engineer from Vancouver, Canada. He loves helping organizations build ambitious yet scalable digital experiences."
                />
                <meta property="og:title" content="Peter Ghanem - Software Engineer" />
                <meta
                    property="og:description"
                    content="Peter is a software engineer from Vancouver, Canada. He loves helping organizations build ambitious yet scalable digital experiences."
                />
                <meta property="og:image" content="/apple-touch-icon.png" />
                <meta property="og:url" content="https://peterghanem.com/" />
            </Head>
            <SpeedInsights />
            <Analytics />
            {loading ? (
                <SplashScreen onAnimationComplete={() => setLoading(false)} />
            ) : (
                <div
                    css={styles.container}
                    className={classNames({
                        enter: !isEntered,
                        "enter-active": isEntered,
                    })}
                >
                    <div css={styles.innerWrapper}>
                        <div css={[styles.leftPanel, styles.paddedComponent]}>
                            <HeroSection />
                            {!isSmallScreen && <Navigation />}
                            <SocialLinks />
                        </div>

                        <div>
                            <div id="about-header" css={styles.stickyHeader}>
                                <div>ABOUT</div>
                            </div>
                            <section id="about" css={paddedComponent}>
                                <AboutSection />
                            </section>
                            <div id="experience-header" css={styles.stickyHeader}>
                                <div>EXPERIENCE</div>
                            </div>
                            <section id="experience" css={paddedComponent}>
                                <ExperienceSection />
                            </section>
                            <div id="projects-header" css={styles.stickyHeader}>
                                <div>PROJECTS</div>
                            </div>
                            <section id="projects" css={paddedComponent}>
                                <ProjectsSection />
                            </section>
                            <section id="footer" css={paddedComponent}>
                                <FooterSection />
                            </section>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

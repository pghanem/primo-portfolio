/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import * as styles from "./Navigation.styles";

const Navigation = (): React.ReactElement => {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["about", "experience", "projects"];

            let maxVisibility = 0;
            let mostVisibleSection = "";

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementHeight = rect.height;
                    const elementTop = rect.top;
                    const elementBottom = rect.bottom;
                    const windowHeight = window.innerHeight;

                    const visibleHeight = Math.min(elementBottom, windowHeight) - Math.max(elementTop, 0);
                    const visibilityRatio = visibleHeight / elementHeight;

                    if (visibilityRatio > maxVisibility) {
                        maxVisibility = visibilityRatio;
                        mostVisibleSection = section;
                    }
                }
            });

            if (mostVisibleSection) {
                setActiveSection(mostVisibleSection);
            }
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div css={styles.selectiveShow}>
            <nav css={styles.navigationContainer}>
                <div
                    css={styles.navigationButton(activeSection === "about")}
                    onClick={() => document.getElementById("about")?.scrollIntoView()}
                >
                    ABOUT
                </div>
                <div
                    css={styles.navigationButton(activeSection === "experience")}
                    onClick={() => document.getElementById("experience")?.scrollIntoView()}
                >
                    EXPERIENCE
                </div>
                <div
                    css={styles.navigationButton(activeSection === "projects")}
                    onClick={() => document.getElementById("projects")?.scrollIntoView()}
                >
                    PROJECTS
                </div>
            </nav>
        </div>
    );
};

export default Navigation;

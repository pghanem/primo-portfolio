/** @jsxImportSource @emotion/react */
import React from "react";
import * as styles from "./HeroSection.styles";

const HeroSection = (): React.ReactElement => {
    return (
        <div css={styles.heroContainer}>
            <div>
                <div css={styles.name}>Peter Ghanem</div>
                <div css={styles.title}>Software Developer</div>
                <div>I build seamless, precision-crafted digital experiences.</div>
            </div>
        </div>
    );
};

export default HeroSection;

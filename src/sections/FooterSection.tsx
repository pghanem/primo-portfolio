/** @jsxImportSource @emotion/react */
import React from "react";

import * as styles from "./FooterSection.styles";

const FooterSection = (): React.ReactElement => {
    const handleClick = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <div css={styles.footerContainer}>
            Design inspired by many. Coded in{" "}
            <div onClick={() => handleClick("https://www.jetbrains.com/idea/")} css={styles.clickable}>
                IntelliJ IDEA
            </div>{" "}
            by yours truly. Built with{" "}
            <div onClick={() => handleClick("https://react.dev/")} css={styles.clickable}>
                React
            </div>{" "}
            and{" "}
            <div onClick={() => handleClick("https://emotion.sh/")} css={styles.clickable}>
                Emotion CSS
            </div>
            , deployed with{" "}
            <div onClick={() => handleClick("https://vercel.com/")} css={styles.clickable}>
                Vercel
            </div>
            . All text is set in the{" "}
            <div onClick={() => handleClick("https://rsms.me/inter/")} css={styles.clickable}>
                Inter
            </div>{" "}
            typeface.
        </div>
    );
};

export default FooterSection;

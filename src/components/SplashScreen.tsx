/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from "react";
import anime from "animejs";
import * as styles from "./SplashScreen.styles";

const SplashScreen = ({ onAnimationComplete }: { onAnimationComplete: () => void }): React.ReactElement => {
    const loopCount = useRef(0);
    const DESIRED_LOOPS = 2;

    useEffect(() => {
        const anim = anime.timeline({
            loop: true,
            direction: "alternate",
            loopComplete: () => {
                loopCount.current++;
                if (loopCount.current >= DESIRED_LOOPS) {
                    anim.pause();
                    onAnimationComplete();
                }
            },
        });

        anim.add({
            targets: "#hexagon path",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "easeInOutQuint",
            duration: 1200,
            delay: (_el: any, i: number) => i * 100,
        }).add({
            targets: "#hexagon #P",
            duration: 1200,
            opacity: 1,
            easing: "easeInOutQuad",
        });

        return () => anim.pause();
    }, [onAnimationComplete]);

    return (
        <div css={styles.wrapperStyles}>
            <svg
                css={styles.svgStyles}
                id="hexagon"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <g
                        id="P"
                        transform="translate(36, 33)"
                        fill="#e2e8f0"
                        style={{ opacity: 0 }}
                        fontSize={50}
                        fontWeight={600}
                        letterSpacing="4"
                    >
                        <text>
                            <tspan x="-0.5" y="35">
                                P
                            </tspan>
                        </text>
                    </g>
                    <path
                        stroke="#e2e8f0"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M 50, 5 L 11, 27 L 11, 72 L 50, 95 L 89, 73 L 89, 28 z"
                    />
                </g>
            </svg>
        </div>
    );
};

export default SplashScreen;

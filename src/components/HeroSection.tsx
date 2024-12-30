/** @jsxImportSource @emotion/react */
import React from 'react';
import { Bulldozer } from '@phosphor-icons/react';
import * as styles from './HeroSection.styles';

const HeroSection = (): React.ReactElement => {
    return (
        <div css={styles.heroContainer}>
            <div>
                <h1 css={styles.title}>Under Construction {<Bulldozer size={32} />}</h1>
                <p css={styles.message}>Check back soon!</p>
            </div>
        </div>
    );
};

export default HeroSection;
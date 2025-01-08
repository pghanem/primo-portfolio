/** @jsxImportSource @emotion/react */
import React from 'react'

import * as styles from './Navigation.styles';

const Navigation = (): React.ReactElement => {
    return <div css={styles.selectiveShow}>
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
}

export default Navigation;
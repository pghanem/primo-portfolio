/** @jsxImportSource @emotion/react */
import React from 'react'

import * as styles from './ExperienceSection.styles';
import ExperienceBlock from "../components/ExperienceBlock";

const ExperienceSection = (): React.ReactElement => {
    return <div css={styles.experienceContainer}>
        <ExperienceBlock />
        <ExperienceBlock />
        <ExperienceBlock />
    </div>
}

export default ExperienceSection;
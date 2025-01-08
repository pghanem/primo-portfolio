/** @jsxImportSource @emotion/react */
import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import * as styles from './SocialLinks.styles';

const SocialLinks = (): React.ReactElement => {
    const openLink = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const copyEmailToClipboard = () => {
        const email = 'peterjghanem@gmail.com';
        navigator.clipboard.writeText(email);
    };

    return (
        <div css={styles.linksContainer}>
            <div css={styles.icon} onClick={() => openLink('https://github.com/pghanem')} title={"GitHub"}>
                <FontAwesomeIcon icon={faGithub} size="2x"/>
            </div>
            <div css={styles.icon} onClick={() => openLink('https://www.linkedin.com/in/peterjghanem/')} title={"LinkedIn"}>
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </div>
            <Tippy
                content="Grab my email"
                css={styles.grabEmailTooltip}
            >
                <Tippy
                    content="Email copied! ✨"
                    css={styles.emailCopiedTooltip}
                    trigger="click"
                    duration={1000}
                    onShow={(instance) => {
                        setTimeout(() => instance.hide(), 2000);
                    }}
                >
                    <div css={styles.icon} onClick={copyEmailToClipboard}>
                        <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                    </div>
                </Tippy>
            </Tippy>
        </div>
    );
}

export default SocialLinks;

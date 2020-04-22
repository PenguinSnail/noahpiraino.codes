import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRssSquare, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
	<footer>
		<hr style={{ marginTop: '1.5rem', marginBottom: '1rem' }} />
		<div style={{ textAlign: 'center' }}>
			<div>
				<a style={{margin: '5px'}} href="https://github.com/penguinsnail/">
					<FontAwesomeIcon icon={faGithubSquare} />
				</a>
				<a style={{margin: '5px'}} href="/feeds/rss.xml">
					<FontAwesomeIcon icon={faRssSquare} />
				</a>
				<a style={{margin: '5px'}} href="mailto:noahapiraino@gmail.com?subject=Hello!&body=Hi%20Noah%2C%0D%0A">
					<FontAwesomeIcon icon={faEnvelopeSquare} />
				</a>
			</div>
			<div>
				<small>
					© {new Date().getFullYear()}, Built with
					{` `}
					<a href="https://www.gatsbyjs.org">Gatsby</a>
					{`, `}
					hosted on
					{` `}
					<a href="https://www.netlify.com">Netlify</a>
				</small>
			</div>
		</div>
	</footer>
);

export default Footer;

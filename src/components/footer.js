import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRssSquare, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import '../styles/components/footer.scss';

const Footer = () => (
	<footer>
		<hr className="footer-divider" />
		<div className="footer-content">
			<div className="footer-icons">
				<a className="footer-icon-link" href="https://github.com/penguinsnail/">
					<FontAwesomeIcon icon={faGithubSquare} />
				</a>
				<a className="footer-icon-link" href="/feeds/rss.xml">
					<FontAwesomeIcon icon={faRssSquare} />
				</a>
				<a className="footer-icon-link" href="mailto:noahapiraino@gmail.com?subject=Hello!&body=Hi%20Noah%2C%0D%0A">
					<FontAwesomeIcon icon={faEnvelopeSquare} />
				</a>
			</div>
			<div className="footer-text">
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
				{`, `}
				hosted on
				{` `}
				<a href="https://www.netlify.com">Netlify</a>
			</div>
		</div>
	</footer>
);

export default Footer;

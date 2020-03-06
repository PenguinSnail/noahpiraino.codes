import React from 'react';

const Footer = () => (
	<footer>
		<hr style={{ marginTop: '1.45rem' }} />
		<div style={{ display: 'flex', justifyContent: 'center' }}>
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
	</footer>
);

export default Footer;

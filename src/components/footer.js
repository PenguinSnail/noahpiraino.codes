import React from 'react';

const Footer = () => (
	<footer>
		<hr style={{marginTop: '1.45rem'}}/>
		© {new Date().getFullYear()}, Built with
		{` `}
		<a href="https://www.gatsbyjs.org">Gatsby</a>
	</footer>
);

export default Footer;

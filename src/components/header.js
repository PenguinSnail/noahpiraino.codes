import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
	<header style={{ marginBottom: '1.45rem' }}>
		<div>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: '#000000',
						textDecoration: `none`,
					}}
				>
					{siteTitle}
				</Link>
			</h1>
		</div>
		<hr style={{ marginTop: '1.45rem' }} />
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;

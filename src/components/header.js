import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
	<header style={{ marginBottom: '1.45rem' }}>
		<div>
			<nav className="navbar">
				<h1>
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
				<span className="spacer" />
				<ul>
					<li>
						<Link
							to="/posts"
							activeClassName="nav-active"
							getProps={({ isPartiallyCurrent }) => {
								return isPartiallyCurrent ? { className: 'nav-active' } : null;
							}}
							style={{
								color: '#000000',
								textDecoration: `none`,
							}}
						>
							Posts
						</Link>
					</li>
				</ul>
			</nav>
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

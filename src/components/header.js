import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import '../styles/components/header.scss';

const Header = ({ siteTitle }) => (
	<header className="header">
		<div>
			<nav className="navbar">
				<h1 className="navbar-title">
					<Link
						to="/"
						className="navbar-link"
					>
						{siteTitle}
					</Link>
				</h1>
				<span className="spacer" />
				<ul className="navbar-link-list">
					<li className="navbar-link-list-item">
						<Link
							to="/posts"
							activeClassName="nav-active"
							getProps={({ isPartiallyCurrent }) => {
								return isPartiallyCurrent ? { className: 'navbar-link nav-active' } : { className: 'navbar-link' };
							}}
						>
							Posts
						</Link>
						<Link
							to="/projects"
							activeClassName="nav-active"
							getProps={({ isPartiallyCurrent }) => {
								return isPartiallyCurrent ? { className: 'navbar-link nav-active' } : { className: 'navbar-link' };
							}}
						>
							Projects
						</Link>
					</li>
				</ul>
			</nav>
		</div>
		<hr className="header-bottom-divider" />
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;

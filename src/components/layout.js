/**
 * Layout component is used as a wrapper to provide consistent page layouts
 * Styles in the layout scss will affect the body page as they are rendered as children here
 * Layout provides a page with the header and footer, and some width restraints
 */

import React from 'react';
import PropTypes from 'prop-types';

import useSiteMetadata from '../hooks/useSiteMetadata';

import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
	const { title } = useSiteMetadata();

	return (
			<div className="layout-container">
				<Header siteTitle={title} />
				<main>{children}</main>
				<Footer />
			</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;

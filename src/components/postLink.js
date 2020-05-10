import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import dateOptions from '../utils/dateOptions';

import '../styles/components/postLink.scss';

const PostLink = ({ slug, title, date, excerpt, style }) => {
	return (
		<Link style={{ textDecoration: 'none', color: '#000000' }} to={slug}>
			<div>
				<h1 className="post-link-header">{title}</h1>
				<p style={{ marginBottom: '0.5rem' }}>
					{new Date(date).toLocaleDateString('en-US', dateOptions)}
				</p>
			</div>
			<p style={{ marginLeft: '1rem' }}>{excerpt}</p>
		</Link>
	);
};

PostLink.propTypes = {
	slug: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	date: PropTypes.instanceOf(Date).isRequired,
	excerpt: PropTypes.string,
};

export default PostLink;

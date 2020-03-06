import React from 'react';

import getPosts from '../hooks/getPosts';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostLink from '../components/postLink';

const IndexPage = () => {
	const lastPost = getPosts()[0] || {};

	return (
		<Layout>
			<SEO title="Home" />
			<div style={{ marginBottom: `2.25rem` }}>
				<h2 style={{marginTop: '2.25rem'}}>Hi, I'm Noah.</h2>
				<div style={{ margin: 'auto', width: '80%' }}>
					<div>
						I'm a High School student from North Carolina with an interest in computer
						science, photography, and other miscellaneous hobbies. This website is here
						to serve as a blog to document my personal projects, and also as a portfolio
						to share my work.
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;

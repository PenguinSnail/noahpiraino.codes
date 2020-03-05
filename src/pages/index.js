import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<h2 style={{ margin: 0 }}>
				<Link
					to="/posts/"
					style={{
						color: '#000000',
						textDecoration: `none`,
					}}
				>
					Go to Posts!
				</Link>
			</h2>
		</div>
	</Layout>
);

export default IndexPage;

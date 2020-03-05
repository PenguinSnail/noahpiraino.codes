import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
	query SITE_INDEX_QUERY {
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { published: { eq: true } } }
		) {
			nodes {
				id
				excerpt(pruneLength: 250)
				frontmatter {
					title
					date
				}
				fields {
					slug
				}
			}
		}
	}
`;

const dateOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
};

const PostsPage = ({ data }) => (
	<Layout>
		<SEO title="Posts" />
		{data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }, i) => (
			<div key={id}>
				{i > 0 && <hr />}
				<Link style={{ textDecoration: 'none', color: '#000000' }} to={fields.slug}>
					<div>
						<h1 style={{ marginBottom: '0.3rem' }}>{frontmatter.title}</h1>
						<p style={{ marginBottom: '0.5rem' }}>
							{new Date(frontmatter.date).toLocaleDateString('en-US', dateOptions)}
						</p>
					</div>
					<p style={{ marginLeft: '1rem' }}>{excerpt}</p>
				</Link>
			</div>
		))}
	</Layout>
);

export default PostsPage;

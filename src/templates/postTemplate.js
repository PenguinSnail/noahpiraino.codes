import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';

export const query = graphql`
	query postBySlug($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			body
			frontmatter {
				title
				date(formatString: "YYYY MMMM Do")
			}
		}
	}
`;

export default ({ data }) => {
	const { frontmatter, body } = data.mdx;
	return (
		<Layout>
			<h1 style={{ marginBottom: '0.3rem' }}>{frontmatter.title}</h1>
			<p style={{ marginBottom: '1rem' }}>{frontmatter.date}</p>
			<MDXRenderer>{body}</MDXRenderer>
		</Layout>
	);
};

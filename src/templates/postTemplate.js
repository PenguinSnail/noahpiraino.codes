import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import SEO from '../components/seo';
import Layout from '../components/layout';

import dateOptions from '../utils/dateOptions';

export const query = graphql`
	query postBySlug($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			body
			frontmatter {
				title
				date
			}
		}
	}
`;

export default ({ data }) => {
	const { frontmatter, body } = data.mdx;
	return (
		<>
			<SEO title={frontmatter.title} />
			<Layout>
				<h1 style={{ marginBottom: '0.3rem' }}>{frontmatter.title}</h1>
				<p style={{ marginBottom: '3rem' }}>
					{new Date(frontmatter.date).toLocaleDateString('en-US', dateOptions)}
				</p>
				<MDXRenderer>{body}</MDXRenderer>
			</Layout>
		</>
	);
};

import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import SEO from '../components/seo';
import Layout from '../components/layout';

import dateOptions from '../utils/dateOptions';

import '../styles/templates/postTemplate.scss';

export const query = graphql`
	query postBySlug($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			body
			frontmatter {
				title
				date
				keywords
			}
		}
	}
`;

export default ({ data }) => {
	const { frontmatter, body } = data.mdx;
	return (
		<>
			<SEO title={frontmatter.title} keywords={frontmatter.keywords ? frontmatter.keywords : null} />
			<Layout>
				<h1 className="post-title">{frontmatter.title}</h1>
				<p className="post-date">
					{new Date(frontmatter.date).toLocaleDateString('en-US', dateOptions)}
				</p>
				<div className="post-content">
					<MDXRenderer>{body}</MDXRenderer>
				</div>
			</Layout>
		</>
	);
};

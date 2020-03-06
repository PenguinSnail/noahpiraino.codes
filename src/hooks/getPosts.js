import { graphql, useStaticQuery } from 'gatsby';

export const getPosts = () => {
	const { allMdx } = useStaticQuery(
		graphql`
			query postIndexQuery {
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
		`
	);

	return allMdx.nodes;
};

export default getPosts;

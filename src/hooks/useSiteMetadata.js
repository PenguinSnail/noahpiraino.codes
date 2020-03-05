import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
	const { site } = useStaticQuery(
		graphql`
			query siteMetadataQuery {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	);
	
	return site.siteMetadata;
};

export default useSiteMetadata;

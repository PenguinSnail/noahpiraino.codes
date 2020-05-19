module.exports = {
	siteMetadata: {
		title: 'Noah Piraino Codes',
		description: 'A small personal blog and portfolio',
		author: 'Noah Piraino',
		siteUrl: 'https://noahpiraino.codes/',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'assets',
				path: `${__dirname}/src/assets`,
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1000,
							showCaptions: true,
							markdownCaptions: true,
							wrapperStyle: 'text-align: center; color: gray; font-size: 0.9em;',
							tracedSVG: true,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'posts',
				path: `${__dirname}/src/posts`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-eslint`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `{
					site {
						siteMetadata {
							title
							description
							author
							siteUrl
							site_url: siteUrl
						}
					}
				}`,
				feeds: [
					{
						serialize: ({ query: { site, allMdx } }) => {
							return allMdx.nodes.map(node => {
								return Object.assign({}, node.frontmatter, {
									description: node.excerpt,
									date: node.frontmatter.date,
									url: site.siteMetadata.siteUrl + node.fields.slug,
									guid: site.siteMetadata.siteUrl + node.fields.slug,
									custom_elements: [{ 'content:encoded': node.html }],
								});
							});
						},
						query: `{
							allMdx(
								sort: { fields: [frontmatter___date], order: DESC }
								filter: { frontmatter: { published: { eq: true } } }
								limit: 15
							) {
								nodes {
									html
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
						}`,
						match: "^/posts/",
						output: '/feeds/rss.xml',
						title: "Noah Piraino Codes",
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `${__dirname}/src/utils/typography`,
				omitGoogleFont: true,
			},
		},
	],
};

module.exports = {
	siteMetadata: {
		title: 'Noah Piraino',
		description: 'A small personal blog and portfolio',
		author: 'Noah Piraino',
		siteUrl: 'https://noahpiraino.me/',
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
							maxWidth: 800,
							showCaptions: true,
							// this used to work, but now if it's true an error is printed in place of the captions
							markdownCaptions: false,
							wrapperStyle: 'text-align: center; color: gray; font-size: 0.9em;',
							tracedSVG: true,
						},
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							// Class prefix for <pre> tags containing syntax highlighting;
							// defaults to 'language-' (e.g. <pre class="language-js">).
							// If your site loads Prism into the browser at runtime,
							// (e.g. for use with libraries like react-live),
							// you may use this to prevent Prism from re-processing syntax.
							// This is an uncommon use-case though;
							// If you're unsure, it's best to use the default value.
							classPrefix: "language-",
							// This lets you set up language aliases.  For example,
							// setting this to '{ sh: "bash" }' will let you use
							// the language "sh" which will highlight using the
							// bash highlighter.
							aliases: {},
							// This toggles the display of line numbers globally alongside the code.
							// To use it, add the following line in gatsby-browser.js
							// right after importing the prism color scheme:
							//  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
							// Defaults to false.
							// If you wish to only show line numbers on certain code blocks,
							// leave false and use the {numberLines: true} syntax below
							showLineNumbers: false,
							// If setting this to true, the parser won't handle and highlight inline
							// code used in markdown i.e. single backtick code like `this`.
							noInlineHighlight: false,
							// This is used to allow setting a language for inline code
							// (i.e. single backticks) by creating a separator.
							// This separator is a string and will do no white-space
							// stripping.
							// A suggested value for English speakers is the non-ascii
							// character '›'.
							inlineCodeMarker: '›',
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

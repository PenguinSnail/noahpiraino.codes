module.exports = {
	siteMetadata: {
		title: 'Noah Piraino Codes',
		description: 'A small personal blog and portfolio',
		author: 'Noah Piraino',
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
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'assets',
				path: `${__dirname}/src/posts`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-eslint`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `${__dirname}/src/utils/typography`,
			},
		},
	],
};

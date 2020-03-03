module.exports = {
	siteMetadata: {
		title: `Noah Piraino Codes`,
		description: `A small blog and portfolio`,
		author: `Noah Piraino`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/src/assets`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		'gatsby-plugin-eslint',
	],
};

module.exports = {
	siteMetadata: {
		siteUrl: 'http://aureliendupaysdexemple.com',
		title: `Aurélien Dupays Dexemple`,
		description: `Hello, I'm Aurélien Dupays Dexemple and this is my personal website.`,
		author: `Aurélien Dupays Dexemple`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`@chakra-ui/gatsby-plugin`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				icon: `src/favicon/favicon.ico`
			}
		},
		`gatsby-plugin-sitemap`,
	],
}

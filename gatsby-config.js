module.exports = {
	siteMetadata: {
		title: `Aurélien Dupays Dexemple`,
		description: `Hello, I'm Aurélien Dupays Dexemple and this is my personal website.`,
		author: `Aurélien Dupays Dexemple`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-chakra-ui`,
			options: {
				isResettingCSS: true,
				isUsingColorMode: true,
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				icon: `src/favicon/favicon.ico`
			}
		},
	],
}

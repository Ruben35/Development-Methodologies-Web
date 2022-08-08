module.exports = {
	siteMetadata: {
		title: `Metodologías de Desarrollo de Proyectos`,
		siteUrl: `https://ruben35.github.io/Development-Methodologies-Web/`,
		description: `Página web donde se incluye información sobre diversas metodologías de desarrollo de proyectos de tecnología.`,
		author: `@Ruben35`,
	},
	pathPrefix: "/Development-Methodologies-Web",
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		`gatsby-transformer-json`,
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "data",
				path: "./src/assets",
			},
			__key: "data",
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /icons/,
				},
			},
		},
	],
}

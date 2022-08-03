module.exports = {
	siteMetadata: {
		title: `Metodologías de Desarrollo de Proyectos`,
		siteUrl: `https://www.yourdomain.tld`,
		description: `Página web donde se incluye información sobre diversas metodologías de desarrollo de proyectos de tecnología.`,
		author: `Verónica Agustín Dominguez & @Ruben35`,
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/assets/",
			},
			__key: "images",
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

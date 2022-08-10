module.exports = {
	siteMetadata: {
		title: `Metodologías de Desarrollo de Proyectos`,
		siteUrl: `https://ruben35.github.io/Development-Methodologies-Web`,
		description: `Página web 🌐 donde se incluye información sobre diversas metodologías de desarrollo de proyectos de tecnología 💻.`,
		author: `@Ruben35`,
		image: `/images/Social-Media-Image.jpg`,
	},
	pathPrefix: "/Development-Methodologies-Web",
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-transformer-json",
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
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Metodologías de Desarrollo de Proyectos",
				short_name: "Metodologías Web",
				start_url: "/",
				id: "/",
				lang: "es",
				theme_color: "#FFBC25",
				background_color: "#FFFEFA",
				display: "standalone",
				icon: "src/assets/logos/Favicon.svg",
				crossOrigin: "use-credentials",
			},
		},
		{
			resolve: `gatsby-plugin-offline`,
			options: {
				precachePages: [`/`, `/Metodologias`],
			},
		},
	],
}

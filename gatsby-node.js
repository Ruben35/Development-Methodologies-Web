const path = require("path")
const agiles = require("./src/assets/data/Agil.json")
const traditional = require("./src/assets/data/Traditional.json")

function pageNameFormat(pageName) {
	return pageName
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(new RegExp(" ", "g"), "-")
}

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions
	const methodologyTemplate = path.resolve(
		"src/templates/IndividualMethodology.js"
	)
	const resultImages = await graphql(`
		query Images {
			agileImages: allFile(
				filter: { relativeDirectory: { eq: "images/Methodologies/Agile" } }
			) {
				nodes {
					relativePath
					childImageSharp {
						gatsbyImageData
					}
				}
			}
			traditionalImages: allFile(
				filter: {
					relativeDirectory: { eq: "images/Methodologies/Traditional" }
				}
			) {
				nodes {
					relativePath
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	`)

	if (resultImages.errors) throw resultImages.errors

	traditional.forEach((methodology) => {
		methodology.image = resultImages.data.traditionalImages.nodes.find(
			(element) => element.relativePath === methodology.imagePath
		)

		methodology.type = "Tradicional"

		createPage({
			path: `/${pageNameFormat(methodology.title)}`,
			component: methodologyTemplate,
			context: methodology,
		})
	})

	agiles.forEach((methodology) => {
		methodology.image = resultImages.data.agileImages.nodes.find(
			(element) => element.relativePath === methodology.imagePath
		)

		methodology.type = "Ágil"

		createPage({
			path: `/${pageNameFormat(methodology.title)}`,
			component: methodologyTemplate,
			context: methodology,
		})
	})
}

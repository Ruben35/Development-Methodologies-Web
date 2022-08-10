import { graphql, useStaticQuery } from "gatsby"
export const useSiteMetadata = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					defaultTitle: title
					defaultDescription: description
					author
					siteUrl
				}
			}
		}
	`)
	return data.site.siteMetadata
}

import React from "react"
import PropTypes from "prop-types"
import { useSiteMetadata } from "../../utils/hooks/useSiteMetadata"

function Seo({ title, description, pathname, image, children }) {
	const { defaultTitle, defaultDescription, author, siteUrl, defaultImage } =
		useSiteMetadata()

	const metadata = {
		title: title ? `${title} | ${defaultTitle}` : defaultTitle,
		description: description || defaultDescription,
		author: author,
		url: `${siteUrl}${pathname || ``}`,
		image: `${siteUrl}${image || defaultImage}`,
	}

	return (
		<>
			<title>{metadata.title}</title>
			<meta name='description' content={metadata.description} />
			<meta name='author' content={metadata.author} />
			<link rel='canonical' href={metadata.url} />
			<meta name='robots' content='index, follow' />
			{/* FACEBOOK OPEN GRAPH PROTOCOL META TAGS */}
			<meta property='og:title' content={metadata.title} />
			<meta property='og:description' content={metadata.description} />
			<meta property='og:url' content={metadata.url} />
			<meta property='og:image' content={metadata.image} />
			<meta property='og:site_name' content={defaultTitle} />
			{/* TWITTER META TAGS */}
			<meta name='twitter:title' content={metadata.title} />
			<meta name='twitter:description' content={metadata.description} />
			<meta name='twitter:image' content={metadata.image} />
			<meta name='twitter:card' content='summary_large_image' />
			{children}
		</>
	)
}

Seo.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	pathname: PropTypes.string,
	image: PropTypes.string,
	children: PropTypes.node,
}

export default Seo

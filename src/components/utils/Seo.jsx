import React from "react"
import PropTypes from "prop-types"

//TODO: Complete SEO tags
//* Ref: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/

function Seo({ title }) {
	return (
		<>
			<title>{title}</title>
			<meta name='theme-color' content='#FFBC25' />
		</>
	)
}

Seo.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Seo

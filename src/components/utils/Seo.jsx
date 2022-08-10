import React from "react"
import PropTypes from "prop-types"

//TODO: Complete SEO tags
//* Ref: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/

function Seo({ title }) {
	return (
		<>
			<title>{title}</title>
		</>
	)
}

Seo.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Seo

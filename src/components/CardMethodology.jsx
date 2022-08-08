import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import PropTypes from "prop-types"

function CardMethodology({ to = "/", image, title }) {
	return (
		<Link className='cardMethodology' to={to} role='button' tabIndex='0'>
			<GatsbyImage
				image={image.childImageSharp.gatsbyImageData}
				className='cardImageWrapper'
				imgClassName='cardImage'
				alt={title}
			/>
			<div className='cardName'>
				<b>{title}</b>
			</div>
		</Link>
	)
}

CardMethodology.defaultProps = {
	to: "/",
}

CardMethodology.propTypes = {
	to: PropTypes.string,
	image: PropTypes.object,
	title: PropTypes.string.isRequired,
}

export default CardMethodology

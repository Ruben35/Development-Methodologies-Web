import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"
import PropTypes from "prop-types"

function CardMethodology({ to = "/", image, alt }) {
	const handleNavigate = () => {
		navigate(`${to}`)
	}
	return (
		<div
			className='cardMethodology'
			onClick={handleNavigate}
			onKeyDown={handleNavigate}
			role='button'
			tabIndex='0'
		>
			<GatsbyImage
				image={image.childImageSharp.gatsbyImageData}
				className='cardImageWrapper'
				imgClassName='cardImage'
				alt={alt}
			/>
			<div className='cardName'>
				<b>Basado en Componentes</b>
			</div>
		</div>
	)
}

CardMethodology.defaultProps = {
	to: "/",
}

CardMethodology.propTypes = {
	to: PropTypes.string,
	image: PropTypes.object,
	alt: PropTypes.string.isRequired,
}

export default CardMethodology

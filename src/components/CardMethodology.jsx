import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"
import PropTypes from "prop-types"

function CardMethodology({ to = "/" }) {
	const handleNavigate = () => {
		navigate(`${to}`)
	}
	return (
		<div className='cardMethodology' onClick={handleNavigate}>
			<StaticImage
				src='../assets/images/Methodologies/Traditional/Basado en Componentes.png'
				className='cardImageWrapper'
				imgClassName='cardImage'
				alt='Basado en Componentes'
				placeholder='blurred'
				loading='lazy'
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
}

export default CardMethodology

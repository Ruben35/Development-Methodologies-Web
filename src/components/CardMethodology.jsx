import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function CardMethodology() {
	return (
		<div className='cardMethodology'>
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

export default CardMethodology

import React from "react"
import { Container } from "./"
import PropTypes from "prop-types"

function HeroWithType({ title = "Titulo", type = "Tipo" }) {
	return (
		<Container className='specialSection' innerClassName='heroWithType'>
			<h2>{title}</h2>
			<span className='labelText'>{type}</span>
		</Container>
	)
}

HeroWithType.defaultProps = {
	title: "Titulo",
	type: "Tipo",
}

HeroWithType.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string,
}

export default HeroWithType

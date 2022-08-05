import React from "react"
import * as styles from "../../../styles/individualMethodology.module.css"
import { Container } from "../../"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function ImageConcept({ imageQuery, title, data }) {
	const image = getImage(imageQuery.file)

	return (
		<Container>
			<div className={styles.image_Concept}>
				<GatsbyImage image={image} alt={title} className={styles.imageStyle} />
				<div>
					<h3>¿Cómo funciona</h3>
					{/* //TODO: Iterate data Paragraphs */}
					<p>
						Es una metodología que incorpora muchas de las características del
						modelo en espiral y permite establecer un objetivo mínimo
						alcanzable. Esta se basa en utilizar componentes existentes o
						creados por el desarrollador, de manera que también es posible
						modificar los componentes ya existentes y adecuarlos al proyecto en
						cuestión, para lograr el objetivo que se quiere alcanzar.
					</p>
					<p>
						A diferencia de la metodología en espiral clásica, esta se
						diferencia en que considera la anexión de elementos que pueden ser
						externos, y construir aplicaciones mediante el ensamblado de módulos
						de software reutilizables, los cuales fueron desarrollados de forma
						independiente a las aplicaciones en las que serán utilizados.
					</p>
				</div>
			</div>
		</Container>
	)
}

export default ImageConcept

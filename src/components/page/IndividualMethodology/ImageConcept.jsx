import React from "react"
import * as styles from "../../../styles/individualMethodology.module.css"
import { Container } from "../../"
import { GatsbyImage } from "gatsby-plugin-image"
import TextFormatter from "../../utils/TextFormatter"

function ImageConcept({ gatsbyImage, title, data }) {
	return (
		<Container>
			<div className={styles.image_Concept}>
				<GatsbyImage
					image={gatsbyImage}
					alt={title}
					className={styles.imageStyle}
				/>
				<div>
					<h3>¿Cómo funciona</h3>
					{data.concept.map((p, index) => (
						<TextFormatter key={index} wrapWith='p'>
							{p}
						</TextFormatter>
					))}
				</div>
			</div>
		</Container>
	)
}

export default ImageConcept

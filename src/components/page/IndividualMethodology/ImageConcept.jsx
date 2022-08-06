import React from "react"
import * as styles from "../../../styles/individualMethodology.module.css"
import { Container } from "../../"
import { GatsbyImage } from "gatsby-plugin-image"

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
					{data.concept.map((p) => (
						<p>{p}</p>
					))}
				</div>
			</div>
		</Container>
	)
}

export default ImageConcept

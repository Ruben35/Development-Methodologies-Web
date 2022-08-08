import React from "react"
import { Container } from "../../"
import * as styles from "../../../styles/individualMethodology.module.css"
import TextFormatter from "../../utils/TextFormatter"

function SpecialSection({ data }) {
	return (
		<Container className='specialSection' innerClassName={styles.wrapMargin}>
			<h3>¿Cuándo se utiliza?</h3>
			<p>Se utiliza en proyectos con las siguientes características:</p>
			<div>
				<ul>
					{data.content.map((item, index) => (
						<TextFormatter key={index} wrapWith='li'>
							{item}
						</TextFormatter>
					))}
				</ul>
			</div>
		</Container>
	)
}

export default SpecialSection

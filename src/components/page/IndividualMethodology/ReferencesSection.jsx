import React from "react"
import { Container } from "../../"
import * as styles from "../../../styles/individualMethodology.module.css"
import ReferenceFormatter from "../../utils/ReferenceFormatter"

function ReferencesSection({ data }) {
	return (
		<Container className={styles.references}>
			<h3>Referencias</h3>
			<div>
				<ul>
					{data.content.map((item, index) => (
						<li key={index}>
							<ReferenceFormatter>{item}</ReferenceFormatter>
						</li>
					))}
				</ul>
			</div>
		</Container>
	)
}

export default ReferencesSection

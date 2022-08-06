import React from "react"
import { Container } from "../../"
import * as styles from "../../../styles/individualMethodology.module.css"

function ReferencesSection({ data }) {
	return (
		<Container className={styles.references}>
			<h3>Referencias</h3>
			<div>
				<ul>
					{data.content.map((item) => (
						<li>
							<a href={item} target='_blank' rel='noreferrer'>
								{item}
							</a>
						</li>
					))}
				</ul>
			</div>
		</Container>
	)
}

export default ReferencesSection

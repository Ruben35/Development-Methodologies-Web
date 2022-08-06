import React from "react"
import { Container } from "../../"
import * as styles from "../../../styles/individualMethodology.module.css"

function SectionContent({ data }) {
	const { header, bodyCopy, content } = data
	return (
		<Container className={styles.wrapMargin}>
			<h3>{header}</h3>
			<p>{bodyCopy}</p>
			<div>
				{content.map((item, index) =>
					item.type === "p" ? (
						<p key={index}>{item.p}</p>
					) : (
						<ul key={index}>
							{item.list.map((listItem, index) => (
								<li key={index}>{listItem}</li>
							))}
						</ul>
					)
				)}
			</div>
		</Container>
	)
}

export default SectionContent

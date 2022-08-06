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
				{content.map((item) =>
					item.type === "p" ? (
						<p>{item.p}</p>
					) : (
						<ul>
							{" "}
							{item.list.map((listItem) => (
								<li>{listItem}</li>
							))}{" "}
						</ul>
					)
				)}
			</div>
		</Container>
	)
}

export default SectionContent

import React from "react"
import { Container } from "../../"
import * as styles from "../../../styles/individualMethodology.module.css"
import TextFormatter from "../../utils/TextFormatter"

function SectionContent({ data }) {
	const { header, bodyCopy, content } = data
	return (
		<Container className={styles.wrapMargin}>
			<h3>{header}</h3>
			<p>{bodyCopy}</p>
			<div>
				{content.map((item, index) =>
					item.type === "p" ? (
						<div key={index}>
							{item.p.map((pItem, index) => (
								<TextFormatter key={index} wrapWith='p'>
									{pItem}
								</TextFormatter>
							))}
						</div>
					) : item.type === "numberList" ? (
						<ol key={index}>
							{item.list.map((listItem, index) => (
								<TextFormatter key={index} wrapWith='li'>
									{listItem}
								</TextFormatter>
							))}
						</ol>
					) : (
						<ul key={index}>
							{item.list.map((listItem, index) => (
								<TextFormatter key={index} wrapWith='li'>
									{listItem}
								</TextFormatter>
							))}
						</ul>
					)
				)}
			</div>
		</Container>
	)
}

export default SectionContent

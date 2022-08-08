import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { HeroWithType } from "../components"
import * as styles from "../styles/individualMethodology.module.css"
import {
	ImageConcept,
	ReferencesSection,
	SectionContent,
	SpecialSection,
} from "../components/page/IndividualMethodology"

function IndividualMethodology({ pageContext }) {
	const { title, type, image, content } = pageContext

	useEffect(() => {
		//Scroll to top
		const node = document.getElementById("main")
		console.log(node)
		ReactDOM.findDOMNode(node).scrollTo(0, 0)
	}, [])

	return (
		<div className={styles.wrapMethodology}>
			<HeroWithType title={title} type={type} />
			{content.map((item, index) => (
				<SelectContent key={index} title={title} image={image} content={item} />
			))}
		</div>
	)
}

const SelectContent = ({ title, image, content }) => {
	const { type } = content

	if (type === "ImageConcept")
		return (
			<ImageConcept
				gatsbyImage={image.childImageSharp.gatsbyImageData}
				title={title}
				data={content}
			/>
		)
	if (type === "section") return <SectionContent data={content} />
	if (type === "specialSection") return <SpecialSection data={content} />
	if (type === "references") return <ReferencesSection data={content} />

	return <div>No Content</div>
}

export default IndividualMethodology

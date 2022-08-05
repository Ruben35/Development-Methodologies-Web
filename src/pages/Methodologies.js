import React, { useEffect, useRef, useState } from "react"
import { Container, Hero } from "../components"
import * as styles from "../styles/methodologies.module.css"
import CardsGrid from "../components/page/Methodologies/CardsGrid"
import Seo from "../components/utils/Seo"
import { graphql } from "gatsby"

function Methodologies({ data }) {
	const refTraditional = useRef(null)
	const refAgil = useRef(null)
	const [dataTraditional, setDataTraditional] = useState(undefined)
	const [dataAgile, setDataAgile] = useState(undefined)

	useEffect(() => {
		data.allTraditionalJson.nodes.forEach((item) => {
			item.image = data.traditionalImages.nodes.find(
				(element) => element.relativePath === item.imagePath
			)
		})
		data.allAgilJson.nodes.forEach((item) => {
			item.image = data.agileImages.nodes.find(
				(element) => element.relativePath === item.imagePath
			)
		})
		setDataTraditional(data.allTraditionalJson.nodes)
		setDataAgile(data.allAgilJson.nodes)
	}, [
		data.agileImages.nodes,
		data.allAgilJson.nodes,
		data.allTraditionalJson.nodes,
		data.traditionalImages.nodes,
	])

	return (
		<>
			{dataTraditional !== undefined && dataAgile !== undefined ? (
				<>
					<Hero />
					<Container innerClassName={styles.flexContainer}>
						<h3 ref={refTraditional}>Tradicionales</h3>
						<CardsGrid refToScroll={refTraditional} data={dataTraditional} />
						<h3 ref={refAgil}>Ágiles</h3>
						<CardsGrid refToScroll={refAgil} data={dataAgile} />
					</Container>
				</>
			) : (
				<div className='Loading'>Loading...</div>
			)}
		</>
	)
}

export const Head = () => <Seo title='Metodologías' />

export const query = graphql`
	query GridsMethodologies {
		allTraditionalJson {
			nodes {
				title
				imagePath
			}
		}
		allAgilJson {
			nodes {
				title
				imagePath
			}
		}
		agileImages: allFile(
			filter: { relativeDirectory: { eq: "images/Methodologies/Agile" } }
		) {
			nodes {
				relativePath
				childImageSharp {
					gatsbyImageData
				}
			}
		}
		traditionalImages: allFile(
			filter: { relativeDirectory: { eq: "images/Methodologies/Traditional" } }
		) {
			nodes {
				relativePath
				childImageSharp {
					gatsbyImageData
				}
			}
		}
	}
`

export default Methodologies

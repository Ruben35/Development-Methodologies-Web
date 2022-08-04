import React, { useRef } from "react"
import { Container, Hero } from "../components"
import * as styles from "../styles/methodologies.module.css"
import CardsGrid from "../components/page/Methodologies/CardsGrid"

function Methodologies() {
	const refTraditional = useRef(null)
	const refAgil = useRef(null)
	return (
		<>
			<Hero />
			<Container innerClassName={styles.flexContainer}>
				<h3 ref={refTraditional}>Tradicionales</h3>
				<CardsGrid refToScroll={refTraditional} />
				<h3 ref={refAgil}>Ágiles</h3>
				<CardsGrid refToScroll={refAgil} />
			</Container>
		</>
	)
}

export default Methodologies

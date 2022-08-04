import React from "react"
import { Container, Hero } from "../components"
import * as styles from "../styles/methodologies.module.css"
import CardsGrid from "../components/page/Methodologies/CardsGrid"

function Methodologies() {
	return (
		<>
			<Hero />
			<Container innerClassName={styles.flexContainer}>
				<h3 id='Traditional'>Tradicionales</h3>
				<CardsGrid type={"Traditional"} />
				<h3 id='Agil'>Ágiles</h3>
				<CardsGrid type={"Agil"} />
			</Container>
		</>
	)
}

export default Methodologies

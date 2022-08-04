import React, { useEffect, useState } from "react"
import { CardMethodology, Container, Hero } from "../components"
import * as styles from "../styles/methodologies.module.css"
import { useBreakpoint } from "../utils/useBreakpoint"

function Methodologies() {
	return (
		<>
			<Hero />
			<Container innerClassName={styles.flexContainer}>
				<h3>Tradicionales</h3>
				<CardsGrid />
				<h3>Ágiles</h3>
			</Container>
		</>
	)
}
// * Cards Grid Component

const cardsToShow = (breakpoint) => {
	if (breakpoint >= 957) {
		//Desktop
		const cardSize = 190 + 21 // CardSize + Gap
		const cardWrap = breakpoint * 0.86 - 21 // Deleting last gap (not in layout)
		return Math.round(cardWrap / cardSize) * 2
	} else if (breakpoint >= 550 || breakpoint >= 427) {
		//Tablet
		return 6
	} else {
		//Mobile
		return 4
	}
}

const CardsGrid = () => {
	const breakpoint = useBreakpoint()
	const [noCardsToShow, setNoCardsToShow] = useState(cardsToShow(breakpoint))
	const [currentShowed, setcurrentShowed] = useState(noCardsToShow)
	const array = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	]

	useEffect(() => {
		setNoCardsToShow(cardsToShow(breakpoint))
		if (currentShowed < array.length) setcurrentShowed(cardsToShow(breakpoint))
	}, [breakpoint, array.length, currentShowed])

	const showMore = (e) => {
		e.preventDefault()
		setcurrentShowed(array.length)
	}

	const showLess = (e) => {
		e.preventDefault()
		setcurrentShowed(noCardsToShow)
	}

	return (
		<>
			<div className={styles.cards}>
				{array.slice(0, currentShowed).map((item) => (
					<CardMethodology key={item} />
				))}
			</div>
			{currentShowed !== array.length ? (
				<button onClick={showMore}>Ver más</button>
			) : (
				<button onClick={showLess}>Ver menos</button>
			)}
		</>
	)
}

export default Methodologies

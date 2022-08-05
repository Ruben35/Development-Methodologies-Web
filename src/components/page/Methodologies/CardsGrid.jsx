import React, { useEffect, useState } from "react"
import { CardMethodology, ShowMoreLess } from "../../"
import { useBreakpoint } from "../../../utils/useBreakpoint"
import * as styles from "../../../styles/methodologies.module.css"
// import PropTypes from "prop-types"

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

// TODO: Add Array Data as prop
const CardsGrid = ({ refToScroll }) => {
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
		if (refToScroll) {
			refToScroll.current.scrollIntoView({ behavior: "smooth" })
			console.log(refToScroll)
		}
	}

	return (
		<>
			<div className={styles.cards}>
				{array.slice(0, currentShowed).map((item) => (
					<CardMethodology key={item} to={"/IndividualMethodology"} />
				))}
			</div>
			{noCardsToShow < array.length && (
				<ShowMoreLess
					type={currentShowed !== array.length ? "more" : "less"}
					onClick={currentShowed !== array.length ? showMore : showLess}
				/>
			)}
		</>
	)
}

export default CardsGrid

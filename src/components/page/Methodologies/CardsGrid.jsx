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
const CardsGrid = ({ refToScroll, data }) => {
	const breakpoint = useBreakpoint()
	const [noCardsToShow, setNoCardsToShow] = useState(cardsToShow(breakpoint))
	const [currentShowed, setcurrentShowed] = useState(noCardsToShow)

	useEffect(() => {
		setNoCardsToShow(cardsToShow(breakpoint))
		if (currentShowed < data.length) setcurrentShowed(cardsToShow(breakpoint))
	}, [breakpoint, data.length, currentShowed])

	const showMore = (e) => {
		e.preventDefault()
		setcurrentShowed(data.length)
	}

	const showLess = (e) => {
		e.preventDefault()
		setcurrentShowed(noCardsToShow)
		if (refToScroll) {
			refToScroll.current.scrollIntoView({ behavior: "smooth" })
		}
	}

	return (
		<>
			<div className={styles.cards}>
				{data.slice(0, currentShowed).map((item) => (
					<CardMethodology
						key={item.title}
						image={item.image}
						alt={item.title}
						to={"/IndividualMethodology"}
					/>
				))}
			</div>
			{noCardsToShow < data.length && (
				<ShowMoreLess
					type={currentShowed !== data.length ? "more" : "less"}
					onClick={currentShowed !== data.length ? showMore : showLess}
				/>
			)}
		</>
	)
}

export default CardsGrid

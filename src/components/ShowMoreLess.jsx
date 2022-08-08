import React from "react"
import Arrow from "../assets/icons/Arrow.svg"
import PropTypes from "prop-types"

function ShowMoreLess({ type = "", onClick }) {
	const handleKeyDown = (e) => {
		if (e.key === "Enter") onClick(e)
	}

	return (
		<div
			className={`showMoreLess ${type}`}
			onClick={onClick}
			role='button'
			tabIndex='0'
			onKeyDown={(e) => handleKeyDown(e)}
		>
			<span>Ver {type === "less" ? "menos" : "más"}</span>
			<Arrow />
		</div>
	)
}

ShowMoreLess.defaultProps = {
	type: "more",
}

ShowMoreLess.propTypes = {
	type: PropTypes.oneOf(["more", "less"]),
}

export default ShowMoreLess

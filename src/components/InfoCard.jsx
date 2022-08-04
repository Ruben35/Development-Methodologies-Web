import React from "react"
import CircularIcon from "./atoms/CircularIcon"
import PropTypes from "prop-types"

function InfoCard({ type, text = "" }) {
	return (
		<div className='infoCard'>
			<div>
				<CircularIcon type={type} />
			</div>
			<p>{text}</p>
		</div>
	)
}

InfoCard.defaultProps = {
	type: "Chart",
	text: "",
}

InfoCard.propTypes = {
	type: PropTypes.oneOf(["Chart", "Gear", "ToDo"]),
	text: PropTypes.string,
}

export default InfoCard

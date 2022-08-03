import React from "react"
import PropTypes from "prop-types"
import Chart from "../../assets/icons/ChartCard.svg"
import Gear from "../../assets/icons/Gear.svg"
import ToDo from "../../assets/icons/ToDo.svg"

function CircularIcon({ type }) {
	return (
		<div className='circularIcon'>
			{type === "ToDo" ? <ToDo /> : type === "Gear" ? <Gear /> : <Chart />}
		</div>
	)
}

CircularIcon.defaultProps = {
	type: "Chart",
}

CircularIcon.propTypes = {
	type: PropTypes.oneOf(["Chart", "Gear", "ToDo"]),
}

export default CircularIcon

import React from "react"
import PropTypes from "prop-types"

function Container({ children, className = "", innerClassName = "" }) {
	return (
		<section className={`wrap ${className}`}>
			<div className={`wrap-content ${innerClassName}`}>{children}</div>
		</section>
	)
}

Container.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	innerClassName: PropTypes.string,
}

export default Container

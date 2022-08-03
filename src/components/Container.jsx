import React from "react"
import PropTypes from "prop-types"

function Container({ children, className }) {
	return (
		<section className={`wrap ${className}`}>
			<div className='wrap-content'>{children}</div>
		</section>
	)
}

Container.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default Container

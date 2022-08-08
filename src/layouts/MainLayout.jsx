import React from "react"
import PropTypes from "prop-types"
import { Footer, Navbar } from "../components"

function MainLayout({ children }) {
	return (
		<>
			<Navbar />
			<main>
				{children}
				<Footer />
			</main>
		</>
	)
}

MainLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default MainLayout

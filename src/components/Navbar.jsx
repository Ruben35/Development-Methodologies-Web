import { Link } from "gatsby"
import React from "react"
import Chart from "../assets/icons/Chart.svg"

export default function Navbar() {
	return (
		<nav className='wrap'>
			<div className='wrap-content'>
				<Link to='/'>
					<Chart />
				</Link>
				<Link to='/Metodologias'>
					<span className='labelText'>Metodologías</span>
				</Link>
			</div>
		</nav>
	)
}

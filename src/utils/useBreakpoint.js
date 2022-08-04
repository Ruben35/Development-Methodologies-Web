import { useState, useEffect } from "react"

export const useBreakpoint = () => {
	const [breakpoint, setBreakpoint] = useState()

	const resize = () => {
		setBreakpoint(window.innerWidth)
	}

	useEffect(() => {
		resize()
		window.addEventListener("resize", resize)

		return () => {
			window.removeEventListener("resize", resize)
		}
	}, [])

	return breakpoint
}

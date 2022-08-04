import { useState, useEffect } from "react"

// const breakpoints = {
// 	mobile: 427,
// 	tablet: 550,
// 	desktop: 957,
// }

// const whichBreakpointIs = (pixels) => {
// 	if (pixels >= breakpoints.desktop) {
// 		return "desktop"
// 	} else if (pixels >= breakpoints.tablet || pixels >= breakpoints.mobile) {
// 		return "tablet"
// 	} else {
// 		return "mobile"
// 	}
// }

// export const useBreakpoint = () => {
// 	const [breakpoint, setBreakpoint] = useState(
// 		whichBreakpointIs(window.innerWidth)
// 	)

// 	const resize = () => {
// 		setPixels(window.innerWidth)
// 		setBreakpoint(whichBreakpointIs(window.innerWidth))
// 	}

// 	useEffect(() => {
// 		window.addEventListener("resize", resize)

// 		return () => {
// 			window.removeEventListener("resize", resize)
// 		}
// 	}, [])

// 	return breakpoint
// }

export const useBreakpoint = () => {
	const [breakpoint, setBreakpoint] = useState(window.innerWidth)
	const resize = () => {
		setBreakpoint(window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener("resize", resize)

		return () => {
			window.removeEventListener("resize", resize)
		}
	}, [])

	return breakpoint
}

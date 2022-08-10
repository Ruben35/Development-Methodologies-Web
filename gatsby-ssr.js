// * Importing the font poppins
import "@fontsource/poppins/800.css" //ExtraBold
import "@fontsource/poppins/700.css" //Bold
import "@fontsource/poppins/400.css" //Regular
// * Importing Global CSS
import "./src/styles/global.css"

import React from "react"
import MainLayout from "./src/layouts/MainLayout"

export const wrapRootElement = ({ element }) => (
	<MainLayout>{element}</MainLayout>
)

export const onRenderBody = ({ setHtmlAttributes }) => {
	setHtmlAttributes({ lang: "es" })
}

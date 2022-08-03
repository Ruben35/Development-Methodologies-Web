import * as React from "react"
import Seo from "../components/utils/Seo"

const IndexPage = () => {
	return (
		<section className='wrap'>
			<div className='wrap-content'>
				<p>Hola como están todos 1</p>
			</div>
		</section>
	)
}

export const Head = () => <Seo title='Home' />

export default IndexPage

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import * as styles from "../styles/404.module.css"
import { Container } from "../components"
import Seo from "../components/utils/Seo"

const NotFoundPage = () => {
	return (
		<Container innerClassName={styles.NotFound}>
			<div className={styles.Oops}>
				<h1>Oops!!!</h1>
				<h2>¿Te has perdido en tu estudio?</h2>
				<p>
					Lo siento, no tenemos esa metodología 💔, pero sigue aprendiendo
					<Link to='/'> regresando a la página principal!</Link>
				</p>
			</div>
			<StaticImage
				src='../assets/images/SittingOnFloor.png'
				loading='eager'
				class={styles.imageWrapper}
				placeholder='tracedSVG'
				alt='Croods Sitting On Floor'
			/>
		</Container>
	)
}

export const Head = () => <Seo title='Oops! Página no encontrada 💔' />

export default NotFoundPage

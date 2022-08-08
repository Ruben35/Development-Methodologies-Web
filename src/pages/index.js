import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { Container, InfoCard } from "../components"
import Seo from "../components/utils/Seo"
import * as styles from "../styles/home.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const HomePage = () => {
	useEffect(() => {
		//Scroll to top
		const node = document.getElementById("main")
		console.log(node)
		ReactDOM.findDOMNode(node).scrollTo(0, 0)
	}, [])

	return (
		<>
			<Container className={styles.welcome}>
				<h1>Metodologías de Desarrollo de Proyectos</h1>
				<StaticImage
					src='../assets/images/Croods The Feedback.png'
					className={styles.croodsImage}
					loading='eager'
					placeholder='tracedSVG'
					alt='Croods The FeedBack'
				/>
				<p>¡Un recurso digital para conocerlas y saber cómo aplicarlas!</p>
				<Link to='/Methodologies'>
					<button>¡Aprender ahora!</button>
				</Link>
			</Container>
			<Container className={styles.cardsSection}>
				<h3>Aquí podras:</h3>
				<div className={styles.cardsContainer}>
					<InfoCard
						text='Conocer las metodologías más comúnes en el desarrollo de proyectos tecnológicos.'
						type='ToDo'
					/>
					<InfoCard
						text='Aprender cómo funcionan y de que se componen (etapas, recursos, roles, etc).'
						type='Gear'
					/>
					<InfoCard text='Comprender en que tipo de proyectos se ajusta cada una en diferentes escenarios.' />
				</div>
			</Container>
		</>
	)
}

export const Head = () => <Seo title='Home' />

export default HomePage

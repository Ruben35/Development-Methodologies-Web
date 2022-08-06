import React from "react"
import { HeroWithType, Container } from "../components"
import * as styles from "../styles/individualMethodology.module.css"
import { ImageConcept } from "../components/page/IndividualMethodology"
import { useStaticQuery, graphql } from "gatsby"

function IndividualMethodology() {
	const dataImage = useStaticQuery(graphql`
		query GET_IMAGE {
			file(
				relativePath: {
					eq: "images/Methodologies/Traditional/Basado en Componentes.png"
				}
			) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED)
				}
			}
		}
	`)

	return (
		<div className={styles.wrapMethodology}>
			<HeroWithType title='Basado en Componentes' type='Tradicional' />
			<ImageConcept imageQuery={dataImage} title={"Basado en Componentes"} />
			<Container className={styles.wrapMargin}>
				<h3>¿Porqué se usa?</h3>
				<p>Se usa principalmente por las siguientes características</p>
				<div>
					<ul>
						<li>
							<b>Reutilización del software:</b> lo que nos lleva a alcanzar un
							mayor nivel de reutilización de software.
						</li>
						<li>
							<b>Simplificación de las pruebas:</b> permite que las pruebas sean
							ejecutadas probando cada uno de los componentes antes de probar el
							conjunto completo de componentes ensamblados.
						</li>
						<li>
							<b>Simplifica el mantenimiento del sistema:</b> cuando existe un
							débil acoplamiento entre componentes, el desabollador es libre de
							actualizar y/o agregar componentes según sea necesario, sin
							afectar otras partes del sistema.
						</li>
						<li>
							<b>Mayor calidad:</b> dado que un componente puede ser construido
							y luego mejorado continuamente por un experto u organización, la
							calidad de una aplicación basada en componentes mejorará con el
							paso del tiempo.
						</li>
					</ul>
				</div>
			</Container>
			<Container className='specialSection' innerClassName={styles.wrapMargin}>
				<h3>¿Cuándo se utiliza?</h3>
				<p>Se utiliza en proyectos con las siguientes características:</p>
				<div>
					<ul>
						<li>
							<b>Servicios Web</b>, donde se requiere seguir estándares de
							servicios y están disponibles por invocación remota.
						</li>
						<li>
							<b>Aplicaciones Web</b>, donde se puede seccionar partes del
							sistema con funcionalidades independientes y/o se conozca de
							soluciones de software de terceros que fácilmente se puedan
							integrar y personalizar.
						</li>
						<li>
							<b>Colecciones de objetos</b>, que son desarrollados como un
							paquete.
						</li>
						<li>
							<b>Sistemas de software</b>, stand-alone, que puedan ser
							configurados para su uso en un ambiente en particular.
						</li>
					</ul>
				</div>
			</Container>
			<Container className={styles.references}>
				<h3>Referencias</h3>
				<div>
					<ul>
						<li>
							<a href='https://platzi.com' target='_blank' rel='noreferrer'>
								https://platzi.com
							</a>
						</li>
					</ul>
				</div>
			</Container>
		</div>
	)
}

export default IndividualMethodology

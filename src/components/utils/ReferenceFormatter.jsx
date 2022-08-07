import React from "react"
import PropTypes from "prop-types"
import reactStringReplace from "react-string-replace"

function ReferenceFormatter({ children = "" }) {
	const regexURL =
		/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi

	return (
		<>
			{reactStringReplace(children, regexURL, (match, i) => (
				<a key={i} href={match} target='_blank' rel='noreferrer'>
					{match}
				</a>
			))}
		</>
	)
}

ReferenceFormatter.defaultProps = {
	children: "",
}

ReferenceFormatter.propTypes = {
	children: PropTypes.string,
}

export default ReferenceFormatter

export default function pageNameFormat(pageName) {
	let name = pageName
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replaceAll(" ", "-")

	return name[0].toUpperCase() + name.slice(1)
}

export default function pageNameFormat(pageName) {
	return pageName
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replaceAll(" ", "-")
}

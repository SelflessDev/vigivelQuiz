export default class Data {

	base = 'https://vigivel.com.br'

	get(url) {
		return fetch(`${ this.base }/${ url }`)
			.then(response => {
				return response.json()
			})
	}
}
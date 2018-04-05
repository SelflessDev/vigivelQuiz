export default class Data {

	base = 'https://vigivel.com.br'

	makeRequest(url, headers) {
		return fetch(`${ this.base }/${ url }`, headers)
			.then(response => response.json())
	}

	get(url) {
		return this.makeRequest(url)
	}

	post(url, body) {
		return this.makeRequest(url, {
			method: 'POST',
			body
		})
	}
}
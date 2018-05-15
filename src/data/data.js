export default class Data {

	// base = 'https://vigivelteste-com-br.umbler.net'
	base = 'http://localhost:8000'

	makeRequest(url, config) {
		return fetch(`${ this.base }${ url }`, config)
			.then(response => response.json())
	}

	get(url) {
		return this.makeRequest(url)
	}

	post(url, body) {
		return this.makeRequest(url, {
			method: 'POST',
			body: JSON.stringify(body)
		})
	}
}
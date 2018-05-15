import Data from './data'

export default class QuestionsData extends Data {

	getFirstQuestion() {
		return this.get(`/answers`).then(question =>
			this.formatQuestion(question)
		)
	}

	getNextQuestion(id) {
		return this.get(`/answers/${ id }`).then(question =>
			this.formatQuestion(question)
		)
	}

	formatQuestion(question, id) {
		console.log(question)
		let formated = question

		if(formated.answer.options)
			formated.answer.options = formated.answer.options.value
			.map((answer, i) => ({
				id: i,
				value: answer
			}))

		return formated
	}

	getRelatedProducts(products) {
		return this.post('/products-related', { products })
	}
}
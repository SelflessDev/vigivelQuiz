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
		let formated = question

		formated.answer.options = formated.answer.options.value
			.map((answer, i) => ({
				id: i,
				value: answer
			}))

		formated.answer.related = formated.answer.related.id_pergunta_relacionada
		return formated
	}
}
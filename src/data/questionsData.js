export default class QuestionsData {
	getNextQuestion() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					question: 'Você acha que as coisa vai dar certo na vida, mesmo não tendo certeza se o universo é broder e pah ?'
				})
			}, 500)
		})
	}
}
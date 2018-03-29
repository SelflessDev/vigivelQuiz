export default class QuestionsData {

	current = -1
	questions = [
		{
			id: 1,
			text: 'Você é pessoa física ou jurídica ?',
			answer: {
				type: 'unique',
				options: [
					{ id: 1, value: 'Física' },
					{ id: 2, value: 'Jurídica' }
				]
			}
		},
		{
			id: 2,
			text: 'Quais destes ambientes você possui em sua casa ?',
			answer: {
				type: 'multiple',
				options: [
					{ id: 1, value: 'Garagem' },
					{ id: 2, value: 'Sala' },
					{ id: 3, value: 'Quarto' }
				]
			}
		},
		{
			id: 3,
			text: 'Qual a área de sua garagem ?',
			answer: {
				type: 'open',
				placeholder: 'Ex: 4m'
			},
			isLast: true
		}
	]

	getNextQuestion() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				this.current++
				resolve(this.questions[this.current])
			}, 500)
		})
	}
}
import React from 'react'
import { render } from 'react-dom'
import './app.css'

import Quiz from 'quiz/quiz'
import QuestionsData from 'questionsData'

class App extends React.Component {

	state = { active: 0 }
	questionsData = new QuestionsData()

	componentDidMount() {
		this.getFirst()
	}

	getFirst() {
		this.questionsData.getFirstQuestion().then(question => {
			let questions = []

			questions.push(question)
			this.setState({ questions })
		})
	}

	getNext() {
		this.setState({ loading: true })
		return this.questionsData.getNextQuestion(
			this.getNextQuestionId()
			).then(question => {
				let { questions } = this.state

				questions.push(question)
				this.setState({ questions, loading: false })
			})
	}

	getNextQuestionId() {
		let { answers, active, questions } = this.state
		return questions[active].answer.related[answers[active + 1].value]
	}

	bindActive(active) {
		active > this.state.active
			? this.getNext().then(() => {
				this.setState({ active })
			})
			: this.setState({ active })
	}

	bindAnswers(value) {
		this.setState({ answers: value })
	}

	render() {
		return (
			<Quiz
				questions={ this.state.questions }
				bindActive={ value => this.bindActive(value) }
				bindAnswers={ value => this.bindAnswers(value) }
				active={ this.state.active }
				answers={ this.state.answers }
				onSubmit={ () => console.log(this.state.answers) }
				loading={ this.state.loading }
			/>
		)
	}
}

render((
	<App/>
), document.getElementById('questions'))
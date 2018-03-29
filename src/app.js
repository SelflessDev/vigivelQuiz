import React from 'react'
import { render } from 'react-dom'
import './app.css'

import Quiz from 'quiz/quiz'
import QuestionsData from 'questionsData'

class App extends React.Component {

	state = { active: 0 }
	questionsData = new QuestionsData()

	componentDidMount() {
		this.getNext()
	}

	getNext() {
		return this.questionsData.getNextQuestion().then(question => {
			let questions = this.state.questions || []

			questions.push(question)
			this.setState({ questions })
		})
	}

	bindActive(active) {
		active > this.state.active
			? this.getNext().then(() => {
				this.setState({ active })
			})
			: this.setState({ active })
	}

	render() {
		return (
			<Quiz
				questions={ this.state.questions }
				bindActive={ value => this.bindActive(value) }
				active={ this.state.active }
				onSubmit={ () => console.log('submit') }
			/>
		)
	}
}

render((
	<App/>
), document.getElementById('questions'))
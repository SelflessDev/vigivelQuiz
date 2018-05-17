import React from 'react'
import './contact.css'
import QuestionsData from 'questionsData'

export default class Concact extends React.Component {

	state = {
		email: ''
	}

	questionsData = new QuestionsData()

	handleSubmit(e) {
		e.preventDefault()
		this.props.toggleLoading()

		this.questionsData.sendEmail(this.state.email)
			.then(response => {
				this.props.toggleLoading()
				response.success
					? this.handleSuccess(response.message)
					: this.handleFailure()
			})
	}

	handleSuccess(msg) {
		console.log(msg)
	}

	handleFailure() {
		console.log('?')
	}

	render() {
		return (
			<div className="quiz-contact">
				<h2 className="quiz-block quiz-title">
					INTERESSADO ? ENTRE EM CONTATO CONOSCO
				</h2>
				<div className="quiz-block quiz-answer">
					<form onSubmit={ e => this.handleSubmit(e) }>
						<input 
							type="email" 
							name="email" 
							placeholder="E-mail"
							value={ this.state.email }
							onChange={ e => this.setState({ email: e.target.value }) }
						/>
						<input type="submit" value="Enviar"/>
					</form>
				</div>
			</div>
		)
	}
}
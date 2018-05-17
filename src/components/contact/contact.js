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
		this.setState({ msg })
	}

	handleFailure() {
		this.setState({ 
			msg: 'Houve um problema ao enviar o contato. Tente novamente mais tarde' 
		})
	}

	getContent() {
		return this.state.msg
			? <span className="quiz-msg">{ this.state.msg }</span>
			: (
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
			)
	}

	render() {
		return (
			<div className="quiz-contact">
				<h2 className="quiz-block quiz-title">
					INTERESSADO ? ENTRE EM CONTATO CONOSCO
				</h2>
				<div className="quiz-block quiz-answer">
					{ this.getContent() }
				</div>
			</div>
		)
	}
}
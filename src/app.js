import React from 'react'
import { render } from 'react-dom'
import './app.css'

import Slider from 'slider/slider'

class App extends React.Component {

	state = {
		answers: {},
		active: 0
	}
	questions = [
		{
			id: 1,
			text: 'Are you going to do the muthafucking doo, you blyat ?',
			answer: {
				type: 'multiple',
				options: [
					{ id: 1, value: 'Cool' },
					{ id: 2, value: 'Nat cool' }
				]
			}
		},
		{
			id: 2,
			text: 'Yes, but is the blyat enough of a cyka ?',
			answer: {
				type: 'unique',
				options: [
					{ id: 1, value: 'Off course' },
					{ id: 2, value: 'Not really' },
					{ id: 3, value: 'Nah' }
				]
			}
		},
		{
			id: 3,
			text: 'Ok, then. How big is this fuccing blyat ?',
			answer: {
				type: 'open',
				placeholder: 'Huh, bitch ?'
			}
		}
	]

	componentDidUpdate() {
		console.log(this.state)
	}

	advance() {
		let { answers, active } = this.state
		answers[active + 1].answered &&
			this.goForward()
	}

	goForward() {
		let { active } = this.state
		if(active == this.questions.length - 1) return

		active++
		this.setState({ active })
	}

	goBackwards() {
		let { active } = this.state
		if(active == 0) return

		active--
		this.setState({ active })
	}

	render() {
		return (
			<div className="questions">
				<div className="wrapper">	
					<Slider 
						questions={ this.questions } 
						value={ this.state.answers }
						active={ this.state.active }
						bind={ value => this.setState({ answers: value }) }
					/>
					<div className="buttons">
						<button onClick={ () => this.goBackwards() }>Voltar</button>
						<button 
							onClick={ () => this.advance() }
							disabled={ 
								this.state.answers[this.state.active + 1]
									? !this.state.answers[this.state.active + 1].answered
									: true
							}
						>
							Continuar
						</button>
					</div>
				</div>
			</div>
		)
	}
}

render((
	<App/>
), document.getElementById('questions'))
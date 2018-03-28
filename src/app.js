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
		}
	]

	componentDidMount() {
		setTimeout(() => {
			this.setState({ active: 1 })
		}, 2000)
	}

	componentDidUpdate() {
		// console.log(this.state)
	}

	render() {
		return (
			<div className="questions">
				<Slider 
					questions={ this.questions } 
					value={ this.state.answers }
					active={ this.state.active }
					bind={ value => this.setState(value) }
				/>
			</div>
		)
	}
}

render((
	<App/>
), document.getElementById('questions'))
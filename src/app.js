import React from 'react'
import { render } from 'react-dom'
import './app.css'

import Slider from 'slider/slider'

class App extends React.Component {

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
		}
	]

	render() {
		return (
			<div className="questions">
				<Slider questions={ this.questions } />
			</div>
		)
	}
}

render((
	<App/>
), document.getElementById('questions'))
import React from 'react'
import { render } from 'react-dom'
import './app.css'

import Slider from 'slider/slider'

class App extends React.Component {
	render() {
		return (
			<div className="questions">
				<Slider/>
			</div>
		)
	}
}

render((
	<App/>
), document.getElementById('questions'))
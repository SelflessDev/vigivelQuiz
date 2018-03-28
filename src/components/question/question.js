import React from 'react'
import './question.css'

export default class Question extends React.Component {
	render() {
		return (
			<div className="question">
				<h2 className="block">
					{ this.props.children }
				</h2>
				<div className="block">
					<div>
						<input id="foo" type="radio" name="doo"/>
						<label for="foo"/>
						<h3>Sbryat</h3>
					</div>
					<div>
						<input id="bar" type="radio" name="doo"/>
						<label for="bar"/>
						<h3>Cheeki Breeki Cheburieki</h3>
					</div>
					<div>
						<input id="blyat" type="radio" name="doo"/>
						<label for="blyat"/>
						<h3>Iv damque</h3>
					</div>
				</div>
			</div>
		)
	}
}
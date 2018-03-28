import React from 'react'
import './question.css'
import Answer from 'answer/answer'

export default class Question extends React.Component {
	render() {
		return (
			<div className="question">
				<h2 className="block">
					{ this.props.text }
				</h2>
				<div className="block">
					<Answer
						questionId={ this.props.id }
						{ ...this.props.answer }
					/>
				</div>
			</div>
		)
	}
}
import React from 'react'
import './question.css'
import Answer from 'answer/answer'

export default class Question extends React.Component {
	render() {
		return (
			<div 
				ref={ this.props.bindElement }
				className={ `quiz-question ${ 
					this.props.active == this.props.index
						? 'quiz-active'
						: this.props.active == this.props.index + 1
							? 'quiz-half-gone'
							: 'quiz-gone'
				} ${
					this.props.loading ? 'quiz-loading' : ''
				}` }
			>
				<h2 className="quiz-block quiz-title">
					{ this.props.text }
				</h2>
				<div className="quiz-block">
					<Answer
						questionId={ this.props.id }
						value={ this.props.value }
						bind={ this.props.bind }
						editable={ this.props.active == this.props.index }
						{ ...this.props.answer }
					/>
				</div>
			</div>
		)
	}
}
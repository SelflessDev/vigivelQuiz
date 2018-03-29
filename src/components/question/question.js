import React from 'react'
import './question.css'
import Answer from 'answer/answer'

export default class Question extends React.Component {
	render() {
		return (
			<div 
				ref={ this.props.bindElement }
				className={ `question ${ 
					this.props.active == this.props.index
						? 'active'
						: this.props.active == this.props.index + 1
							? 'half-gone'
							: 'gone'
				} ${
					this.props.loading ? 'loading' : ''
				}` }
			>
				<h2 className="block">
					{ this.props.text }
				</h2>
				<div className="block">
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
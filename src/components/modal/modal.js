import React from 'react'
import './modal.css'

export default class Modal extends React.Component {
	render() {
		return (
			<div className={ `quiz-modal-wrapper ${
				this.props.opened
					? 'quiz-modal-wrapper-active'
					: ''
			}` }>
				<div className="quiz-modal">
					{ this.props.children }
				</div>
			</div>
		)
	}
}
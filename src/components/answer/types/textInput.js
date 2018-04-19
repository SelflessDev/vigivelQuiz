import React from 'react'
import PropTypes from 'prop-types'

export default class TextInput extends React.Component {

	componentWillMount() {
		this.bind('')
	}

	handleChange(e) {
		let { value } = e.currentTarget
		this.bind(value)
	}

	bind(content) {
		let { value } = this.props
		value[this.props.questionId] = {
			value: content,
			answered: content != ''
		}

		this.props.bind(value)
	}

	render() {
		return (
			<div className="quiz-answer">
				<input
					type="text"
					name={ this.props.questionId }
					placeholder={ this.props.placeholder }
					value={ 
						this.props.value[this.props.questionId]
							? this.props.value[this.props.questionId].value || ''
							: ''
					}
					onChange={ e => this.handleChange(e) }
					readOnly={ !this.props.editable }
				/>
				<div className={ `quiz-open ${ 
					this.props.value[this.props.questionId].value != ''
						? 'quiz-filled'
						: ''
				}` }/>
			</div>
		)
	}
}
import React from 'react'
import PropTypes from 'prop-types'

export default class TextInput extends React.Component {

	componentWillMount() {
		this.bind(null)
	}

	handleChange(e) {
		let { value } = e.currentTarget
		this.bind(value)
	}

	bind(content) {
		let { value } = this.props
		value[this.props.questionId] = content

		this.props.bind(value)
	}

	render() {
		return (
			<div className="answer">
				<input
					type="text"
					name={ this.props.questionId }
					placeholder={ this.props.placeholder }
					value={ this.props.value[this.props.questionId] || '' }
					onChange={ e => this.handleChange(e) }
				/>
				<div className="open"/>
			</div>
		)
	}
}
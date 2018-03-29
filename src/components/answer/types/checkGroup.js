import React from 'react'
import PropTypes from 'prop-types'

export default class CheckGroup extends React.Component {
	
	static propTypes = {
		questionId: PropTypes.number.isRequired,
		options: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number,
			value: PropTypes.string
		})).isRequired,
		bind: PropTypes.func.isRequired,
		value: PropTypes.object.isRequired
	}

	componentWillMount() {
		this.initializeValues()
	}

	initializeValues() {
		this.props.options.map(option => {
			this.bind(false, option.id)
		})
	}

	handleChange(e, id) {
		let { checked } = e.target
		this.bind(checked, id)
	}

	bind(content, id) {
		let { value } = this.props

		value[this.props.questionId] = value[this.props.questionId]
			? value[this.props.questionId] 
			: { value: {} }

		value[this.props.questionId].value[id] = { value: content }
		value[this.props.questionId].answered = this.checkForAnswers()

		this.props.bind(value)
	}

	checkForAnswers() {
		let { value } = this.props.value[this.props.questionId],
			answered = false

		Object.keys(value).map(i => {
			if(value[i].value) {
				answered = true
			}
		})
		
		return answered
	}

	render() {
		return this.props.options.map(option =>
			<div className="answer" key={ option.id }>
				<input 
					id={ `${ this.props.questionId }${ option.id }` }
					type="checkbox" 
					name={ this.props.questionId }
					onChange={ e => this.handleChange(e, option.id) }
					disabled={ !this.props.editable }
				/>
				<label htmlFor={ `${ this.props.questionId }${ option.id }` }>
					{ option.value }
				</label>
			</div>
		)
	}
}
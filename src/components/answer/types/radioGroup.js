import React from 'react'
import PropTypes from 'prop-types'

export default class RadioGroup extends React.Component {
	
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
		this.initializeValue()
	}

	initializeValue() {
		this.bind(null)
	}

	bind(id) {
		let { value } = this.props
		value[this.props.questionId] = {
			value: id,
			answered: id != null
		}

		this.props.bind(value)
	}

	render() {
		return this.props.options.map(option =>
			<div className="quiz-answer" key={ option.id }>
				<input 
					id={ `${ this.props.questionId }${ option.id }` }
					type="radio" 
					name={ this.props.questionId }
					onChange={ () => this.bind(option.id) }
					disabled={ !this.props.editable }
				/>
				<label htmlFor={ `${ this.props.questionId }${ option.id }` }>
					{ option.value }
				</label>
			</div>
		)
	}
}
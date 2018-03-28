import React from 'react'
import PropTypes from 'prop-types'

export default class CheckGroup extends React.Component {
	
	static propTypes = {
		questionId: PropTypes.number.isRequired,
		options: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number,
			value: PropTypes.string
		})).isRequired
	}

	render() {
		return this.props.options.map(option =>
			<div className="answer" key={ option.id }>
				<input 
					id={ option.id } 
					type="checkbox" 
					name={ this.props.questionId }
				/>
				<label htmlFor={ option.id }>
					{ option.value }
				</label>
			</div>
		)
	}
}
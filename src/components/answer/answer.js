import React from 'react'
import PropTypes from 'prop-types'
import './answer.css'

import RadioGroup from './types/radioGroup'
import CheckGroup from './types/checkGroup'

export default class Answer extends React.Component {

	static propTypes = {
		type: PropTypes.oneOf([
			'unique', 
			'multiple', 
			'open'
		]).isRequired
	}

	answers = {
		'unique': RadioGroup,
		'multiple': CheckGroup
	}

	render() {
		var Answer = this.answers[this.props.type]
		return <Answer { ...this.props }/>
	}
}
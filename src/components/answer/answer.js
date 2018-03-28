import React from 'react'
import PropTypes from 'prop-types'
import './answer.css'

import RadioGroup from './types/radioGroup'
import CheckGroup from './types/checkGroup'
import TextInput from './types/textInput'

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
		'multiple': CheckGroup,
		'open': TextInput
	}

	render() {
		var Answer = this.answers[this.props.type]
		return <Answer { ...this.props }/>
	}
}
import React from 'react'
import './slider.css'

import Question from 'question/question'

export default class Slider extends React.Component {

	state = {
		position: 0
	}

	questions = {}

	componentDidMount() {
		this.getSlidingPosition(this.props)
	}

	componentWillReceiveProps(nextProps) {
		nextProps.active != this.props.active &&
			this.getSlidingPosition(nextProps)
	}

	getSlidingPosition(props) {
		let position = this.slider.clientHeight / 2

		for (var i = 1; i < props.active + 1; i++) {
			position-= this.questions[i].clientHeight
		}

		this.setState({ position })
	}

	getQuestions() {
		return !this.props.questions
			? null
			: this.props.questions.map((question, i) => 
				<Question
					key={ question.id }
					index={ i }
					value={ this.props.value }
					bind={ this.props.bind }
					bindElement={ ref => this.questions[i] = ref }
					active={ this.props.active }
					{ ...question }
				/>
			)
	}

	render() {
		return (
			<div
				ref={ ref => this.slider = ref }
				className="slider"
			>
				<div 
					className="content"
					style={{ top: this.state.position }}
				>
					{ this.getQuestions() }
				</div>
			</div>
		)
	}
}
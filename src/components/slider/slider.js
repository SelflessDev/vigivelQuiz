import React from 'react'
import './slider.css'

import Question from 'question/question'
import QuestionsData from 'questionsData'

export default class Slider extends React.Component {

	questionsData = new QuestionsData()

	render() {
		return (
			<div className="slider">
				<Question>
					Are you going to do the muthafucking doo, you blyat ?
				</Question>
			</div>
		)
	}
}
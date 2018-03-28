import React from 'react'
import './slider.css'

import Question from 'question/question'

export default class Slider extends React.Component {
	render() {
		return (
			<div className="slider">
				{ 
					this.props.questions.map(question => 
						<Question key={ question.id } { ...question }/>
					) 
				}
			</div>
		)
	}
}
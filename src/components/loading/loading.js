import React from 'react'
import './loading.css'

export default class Loading extends React.Component {
	render() {
		return (
			<div className={ `quiz-loading-anim ${
				this.props.active ? 'quiz-active' : ''
			}`}>
				<div className="quiz-animated">
					<div className="quiz-pipe"/>
					<div className="quiz-pipe"/>
					<div className="quiz-pipe"/>
					<div className="quiz-pipe"/>
					<div className="quiz-pipe"/>
					<div className="quiz-pipe"/>
					<div className="quiz-pipe"/>
				</div>
				<h4>Carregando</h4>
			</div>
		)
	}
}
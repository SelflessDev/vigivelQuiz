import React from 'react'
import PropTypes from 'prop-types'
import './quiz.css'

import Slider from 'slider/slider'
import Loading from 'loading/loading'
import Info from 'info/info'

export default class Quiz extends React.Component {

	componentDidMount() {
		this.el.focus()
	}

	handleKeyPress(e) {
		e.key == "Enter" && this.advance()
	}

	goForward() {
		let { answers, active } = this.props
		
		if(this.props.questions[active].last){
			this.props.onSubmit()
			return
		}

		active++
		this.props.bindActive(active)
		this.setState({ active })
	}

	goBackwards() {
		let { active } = this.props

		active--
		this.props.bindActive(active)
		this.setState({ active })
	}

	render() {
		return (
			<div 
				ref={ ref => this.el = ref }
				tabIndex="0"
				className={ `questions ${
					!this.props.questions ? 'loading' : ''
				}` }
				onKeyPress={ e => this.handleKeyPress(e) }
			>
				<Loading active={ this.props.questions == null }/>
				<div className="wrapper">
					<Slider 
						questions={ this.props.questions } 
						value={ this.props.answers }
						active={ this.props.active }
						bind={ value => this.props.bindAnswers(value) }
						loading={ this.props.loading }
					/>
					<Loading active={ this.props.loading }/>
					<div className="bottom">
						<Info>
							{ 
								this.props.questions &&
									this.props.questions[this.props.active].about 
							}
						</Info>
						<div className="buttons">
							<button 
								onClick={ () => this.goBackwards() }
								disabled={ this.props.active == 0 }
							>
								Voltar
							</button>
							<button
								disabled={
									this.props.questions
										? this.props.answers[this.props.questions[this.props.active].id]
											? !this.props.answers[this.props.questions[this.props.active].id].answered
											: true
										: true
								}
								onClick={ () => this.goForward() }
							>
								Continuar
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

Quiz.propTypes = {
	questions: PropTypes.array,
	bindActive: PropTypes.func.isRequired,
	bindAnswers: PropTypes.func.isRequired,
	active: PropTypes.number.isRequired,
	onSubmit: PropTypes.func.isRequired,
	controlled: PropTypes.bool,
	answers: PropTypes.object
}

Quiz.defaultProps = {
	active: 0,
	answers: {}
}
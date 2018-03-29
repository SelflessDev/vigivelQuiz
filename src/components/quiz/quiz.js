import React from 'react'
import PropTypes from 'prop-types'
import './quiz.css'

import Slider from 'slider/slider'
import Loading from 'loading/loading'

export default class Quiz extends React.Component {

	state = {
		answers: {}
	}

	componentDidMount() {
		this.el.focus()
	}

	handleKeyPress(e) {
		e.key == "Enter" && this.advance()
	}

	goForward() {
		let { answers } = this.state,
			{ active } = this.props
		
		if(this.props.questions[active].isLast){
			this.props.onSubmit(this.state.answers)
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
						value={ this.state.answers }
						active={ this.props.active }
						bind={ value => this.setState({ answers: value }) }
					/>
					<Loading active={ this.props.loading }/>
					<div className="buttons">
						<button 
							type="submit"
							onClick={ () => this.goBackwards() }
							disabled={ this.props.active == 0 }
						>
							Voltar
						</button>
						<button
							type="submit"
							disabled={
								this.props.questions
									? this.state.answers[this.props.questions[this.props.active].id]
										? !this.state.answers[this.props.questions[this.props.active].id].answered
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
		)
	}
}

Quiz.propTypes = {
	questions: PropTypes.array,
	bindActive: PropTypes.func.isRequired,
	active: PropTypes.number.isRequired,
	onSubmit: PropTypes.func.isRequired,
	controlled: PropTypes.bool
}

Quiz.defaultProps = {
	active: 0
}
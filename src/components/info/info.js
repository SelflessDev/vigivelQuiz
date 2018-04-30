import React from 'react'
import './info.css'

export default class Info extends React.Component {

	state = { opened: false }

	componentDidMount() {
		this.setupClick()
	}

	setupClick() {
		window.addEventListener('click', e => {
			if(e.target.id == "quiz-info") {
				!this.state.opened && this.setState({ opened: true })
				return
			} else if(this.state.opened) {
				this.setState({ opened: false })
				this.about.scrollTop = 0
			}
		})
	}

	render() {
		return (
			<div className={ `quiz-info ${ this.state.opened ? 'quiz-opened' : '' }` }>
				<div 
					id="quiz-info"
					className="quiz-container" 
					ref={ ref => this.about = ref }
				>
					<div className="quiz-wrapper">
						<span className="quiz-close-button">X</span>
						<h5 id="quiz-info"></h5>
						<div className="quiz-content" id="quiz-info"
							dangerouslySetInnerHTML={{ 
								__html: this.props.children 
							}}
						/>
					</div>
				</div>
			</div>
		)
	}
}
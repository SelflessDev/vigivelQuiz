import React from 'react'
import './info.css'

export default class Info extends React.Component {

	state = { opened: false }

	componentDidMount() {
		this.setupClick()
	}

	setupClick() {
		window.addEventListener('click', e => {
			if(e.target.id == "info") {
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
			<div className={ `info ${ this.state.opened ? 'opened' : '' }` }>
				<div 
					id="info"
					className="container" 
					ref={ ref => this.about = ref }
				>
					<div className="content">
						<span>X</span>
						<h5 id="info"></h5>
						<p id="info">
							{ this.props.children }
						</p>
					</div>
				</div>
			</div>
		)
	}
}
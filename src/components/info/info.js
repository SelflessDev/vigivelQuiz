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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae porta ex. In consequat tempus nunc ac sollicitudin. Phasellus ut vestibulum nisl. Nulla mollis diam non felis placerat tempor. Ut vitae mauris vitae dolor sodales vestibulum. Donec rhoncus diam mi. Proin eu dapibus nibh.
							Donec non velit ornare, sagittis neque vel, posuere tellus. Pellentesque id magna et massa tempus dapibus feugiat sed lorem. Aliquam iaculis nibh ut urna aliquet, eget cursus risus lacinia. In faucibus vel sem nec luctus. Fusce in dui interdum, aliquet augue nec, imperdiet justo. Etiam finibus, nulla vitae aliquam mattis, massa mi commodo leo, vel dignissim urna lacus ac risus. Fusce ornare lorem est, in mattis purus malesuada scelerisque. Nulla ullamcorper tincidunt venenatis. Cras porta tortor velit, at tincidunt lacus luctus ac. Aliquam vestibulum, dui et vulputate tempor, nulla massa efficitur purus, sed mattis nibh diam sed erat. Fusce eget volutpat nunc, et semper ipsum. Nam convallis nibh vitae vehicula accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim, felis et rutrum dignissim, nibh eros bibendum metus, non porttitor risus velit et turpis. Vestibulum malesuada eget dolor accumsan sagittis. Aenean ultrices dui mattis, facilisis diam nec, tincidunt sapien.
						</p>
					</div>
				</div>
			</div>
		)
	}
}
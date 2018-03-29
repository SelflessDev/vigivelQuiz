import React from 'react'
import './loading.css'

export default class Loading extends React.Component {
	render() {
		return (
			<div className={ `loading-anim ${
				this.props.active ? 'active' : ''
			}`}>
				<div className="animated">
					<div className="pipe"/>
					<div className="pipe"/>
					<div className="pipe"/>
					<div className="pipe"/>
					<div className="pipe"/>
					<div className="pipe"/>
					<div className="pipe"/>
				</div>
				<h4>Carregando</h4>
			</div>
		)
	}
}
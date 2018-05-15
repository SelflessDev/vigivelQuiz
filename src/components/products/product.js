import React from 'react'

export default class Product extends React.Component {
	render() {
		return (
			<div className="quiz-product">
				<h2 className="quiz-block">
					{ this.props.name }
				</h2>
				<div className="quiz-block quiz-content">
					<span>{ this.props.description }</span>
				</div>
			</div>
		)
	}
}
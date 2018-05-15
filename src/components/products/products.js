import React from 'react'
import './products.css'

import Modal from 'modal/modal'
import Product from './product'
import Loading from 'loading/loading'

export default class Products extends React.Component {

	getProducts() {
		return !this.props.products
			? null
			: this.props.products.map((prod, i) => 
				<Product key={ i } { ...prod }/>
			)
	}

	render() {
		return (
			<Modal opened={ this.props.showing }>
				<div className={`quiz-products ${
					this.props.products ? 'active' : ''
				}`}>
					<h2 className="quiz-block quiz-title">
						PRODUTOS RELACIONADOS AS SUAS RESPOSTAS
					</h2>
					{ this.getProducts() }
				</div>
				<Loading active={ !this.props.products }/>
			</Modal>
		)
	}
}
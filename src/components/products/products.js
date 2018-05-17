import React from 'react'
import './products.css'

import Modal from 'modal/modal'
import Product from './product'
import Loading from 'loading/loading'
import Contact from 'contact/contact'

export default class Products extends React.Component {

	state = { loading: false }

	getProducts() {
		return !this.props.products
			? null
			: this.props.products.map((prod, i) => 
				<Product key={ i } { ...prod }/>
			)
	}

	toggleLoading() {
		this.setState({ loading: !this.state.loading })
	}

	render() {
		return (
			<Modal opened={ this.props.showing }>
				<div className={`quiz-products ${
					this.props.products ? 'quiz-active' : ''
				} ${
					this.state.loading ? 'quiz-loading' : ''
				}`}>
					<h2 className="quiz-block quiz-title">
						PRODUTOS RELACIONADOS AS SUAS RESPOSTAS
					</h2>
					{ this.getProducts() }
					{ 
						this.props.products && 
							<Contact 
								toggleLoading={ () => this.toggleLoading() } 
							/>
					}
				</div>
				<Loading 
					active={ !this.props.products || this.state.loading }
				/>
			</Modal>
		)
	}
}